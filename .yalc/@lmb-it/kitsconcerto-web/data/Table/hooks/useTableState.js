import { useMemo, useRef, useState, useCallback, useEffect, useImperativeHandle } from 'react';
import { isEqual } from 'lodash';
import useSWR from 'swr';
import { revertFilter, fixData } from '../utils.js';
import { matchModeDefaultValues } from '../components/assets.js';

function buildFiltersDefault(columns) {
  const filters = {};
  columns.forEach((col) => {
    const name = col.name;
    if (col.label !== "#" && col.filter && name) {
      filters[name] = {
        value: null,
        matchMode: matchModeDefaultValues[col.filter.type]
      };
    }
  });
  return filters;
}
function useTableState(props, ref) {
  const {
    id,
    columns,
    onRowSelect,
    selectionMode = "single",
    onSelectChange,
    tableSize = "small",
    resizableColumns = false,
    scrollHeight,
    stateful = true,
    skeleton = true,
    globalSearch = true,
    headless = false,
    multiSorting,
    rowLockable,
    rowExpansionTemplate,
    service,
    serviceRevalidateDeps,
    keyColumn = "uuid",
    data: staticData,
    exportPDFButton,
    exportCSVButton,
    moreButtons,
    tableTitle,
    debounceFilterWaitTime = 500,
    filterMode = "enter"
  } = props;
  const filtersDefault = useMemo(
    () => buildFiltersDefault(columns),
    // computed once — column filter definitions don't change after mount
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  const tableRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const hasInitialData = useRef(false);
  const [dataList, setDataList] = useState([]);
  const [globalFilterValue, setGlobalFilterValue] = useState("");
  const [visibleColumns, setVisibleColumns] = useState(columns.map((c) => ({ label: c.label, name: c.name })));
  const [expandedRows, setExpandedRows] = useState(void 0);
  const isSelectable = !!onRowSelect;
  const [selections, setSelections] = useState([]);
  const [serverSideRequest, setServerSideRequest] = useState({
    filters: filtersDefault,
    search: "",
    start: 0,
    length: 15,
    sortBy: []
  });
  const [lockedRows, setLockedRows] = useState([]);
  const fetcher = useCallback(async () => {
    if (!service) return null;
    return await service({
      ...serverSideRequest,
      filters: revertFilter(serverSideRequest.filters)
    });
  }, [service, serverSideRequest]);
  const swr = useSWR(id, fetcher, { revalidateOnMount: false });
  const mutate = service && swr.mutate ? swr.mutate : void 0;
  const data = swr.data ? swr.data : void 0;
  function applyStateIfChanged(setter, current, next) {
    if (!isEqual(current, next)) {
      setter(next);
    }
  }
  const refresh = useCallback(
    (withLoading = true) => {
      skeleton && withLoading && setIsLoading(true);
      if (mutate) {
        mutate().then(() => {
        }).finally(() => {
          skeleton && withLoading && setIsLoading(false);
        });
      } else if (staticData) {
        skeleton && withLoading && setIsLoading(false);
      }
    },
    [mutate, staticData, skeleton]
  );
  useEffect(() => {
    refresh(hasInitialData.current ? false : skeleton);
  }, [serviceRevalidateDeps]);
  useEffect(() => {
    refresh(skeleton);
  }, [serverSideRequest]);
  useEffect(() => {
    if (data?.success && data.data) {
      setDataList(fixData(data.data.list));
      hasInitialData.current = true;
    } else if (staticData) {
      setDataList(fixData(staticData));
      hasInitialData.current = true;
    }
  }, [data, staticData]);
  const isAnyFilter = useMemo(
    () => columns.filter((el) => !!el.filter).length > 0,
    [columns]
  );
  const allowExpansion = useMemo(() => !!rowExpansionTemplate, [rowExpansionTemplate]);
  const onChangePage = useCallback(
    (event) => {
      applyStateIfChanged(setServerSideRequest, serverSideRequest, {
        ...serverSideRequest,
        start: event.first,
        length: event.rows
      });
    },
    [serverSideRequest]
  );
  const pagination = useMemo(
    () => data?.success && data.data ? {
      pageSize: data.data.requestedPageSize,
      totalRecords: data.data.total,
      onChangePage,
      start: data.data.pageIndex
    } : { pageSize: 0, totalRecords: 0, onChangePage, start: 0 },
    [data, onChangePage]
  );
  const onColumnToggle = useCallback(
    (selectedNames) => {
      const ordered = columns.filter((col) => selectedNames.some((n) => n === col.name)).map((c) => ({ label: c.label, name: c.name }));
      setVisibleColumns(ordered);
    },
    [columns]
  );
  const onChangeFilter = useCallback(
    (event) => {
      const { filters, first } = event;
      applyStateIfChanged(setServerSideRequest, serverSideRequest, {
        ...serverSideRequest,
        start: first,
        filters
      });
    },
    [serverSideRequest]
  );
  const onChangeSort = useCallback(
    (event) => {
      const { sortField, sortOrder, first } = event;
      let sortBy = [];
      if (multiSorting && event.multiSortMeta) {
        sortBy = event.multiSortMeta;
      } else if (sortOrder && sortField) {
        sortBy = [{ field: sortField, order: sortOrder }];
      }
      applyStateIfChanged(setServerSideRequest, serverSideRequest, {
        ...serverSideRequest,
        start: first,
        sortBy
      });
    },
    [serverSideRequest, multiSorting]
  );
  const onGlobalFilterChange = useCallback(
    (value) => {
      applyStateIfChanged(setServerSideRequest, serverSideRequest, {
        ...serverSideRequest,
        search: value
      });
      setGlobalFilterValue(value);
    },
    [serverSideRequest]
  );
  const onClearFilter = useCallback(() => {
    onGlobalFilterChange("");
    applyStateIfChanged(setServerSideRequest, serverSideRequest, {
      ...serverSideRequest,
      filters: filtersDefault,
      search: ""
    });
  }, [serverSideRequest, filtersDefault, onGlobalFilterChange]);
  const onClearCache = useCallback(() => {
    localStorage.removeItem(id);
  }, [id]);
  const toggleLock = useCallback(
    (rowData, frozen, index) => {
      let _lockedRows;
      let _unlockedRows;
      if (frozen) {
        _lockedRows = lockedRows.filter((_c, i) => i !== index);
        _unlockedRows = [...dataList, rowData];
      } else {
        _unlockedRows = dataList.filter((_c, i) => i !== index);
        _lockedRows = [...lockedRows, rowData];
      }
      _unlockedRows.sort(
        (a, b) => a["id"] < b["id"] ? -1 : 1
      );
      setLockedRows(_lockedRows);
      setDataList(_unlockedRows);
    },
    [lockedRows, dataList]
  );
  const conditionalProps = useMemo(() => {
    const p = {};
    if (service) {
      if (isAnyFilter) p.onFilter = onChangeFilter;
      p.onSort = onChangeSort;
    }
    if (scrollHeight) {
      p.scrollable = true;
      if (scrollHeight !== "auto") p.scrollHeight = scrollHeight;
      p.frozenValue = lockedRows;
    }
    if (stateful && !isLoading) {
      p.onStateSave = (state) => {
        localStorage.setItem(id, JSON.stringify({ ...state, visibleColumns }));
      };
      p.onStateRestore = (state) => {
        if ("visibleColumns" in state) {
          setVisibleColumns(
            state.visibleColumns
          );
        }
      };
      p.stateStorage = "local";
      p.stateKey = id;
    }
    return p;
  }, [
    lockedRows,
    scrollHeight,
    service,
    stateful,
    visibleColumns,
    dataList,
    isLoading,
    isAnyFilter,
    onChangeFilter,
    onChangeSort,
    id
  ]);
  const refValues = useMemo(
    () => ({
      refresh,
      visibleColumns,
      request: serverSideRequest,
      ...tableRef.current
    }),
    [refresh, visibleColumns, serverSideRequest]
  );
  useImperativeHandle(ref, () => refValues, [refValues]);
  return {
    // Refs
    tableRef,
    refValues,
    // State
    isLoading,
    dataList,
    globalFilterValue,
    visibleColumns,
    expandedRows,
    setExpandedRows,
    isSelectable,
    selections,
    setSelections,
    serverSideRequest,
    lockedRows,
    filtersDefault,
    // Derived
    isAnyFilter,
    allowExpansion,
    pagination,
    conditionalProps,
    // Callbacks
    refresh,
    onColumnToggle,
    onChangePage,
    onChangeFilter,
    onChangeSort,
    onGlobalFilterChange,
    onClearFilter,
    onClearCache,
    toggleLock,
    // Forwarded props
    columns,
    onRowSelect,
    onSelectChange,
    selectionMode,
    tableSize,
    resizableColumns,
    scrollHeight,
    stateful,
    skeleton,
    globalSearch,
    headless,
    multiSorting,
    rowLockable,
    rowExpansionTemplate,
    service,
    keyColumn,
    staticData,
    exportPDFButton,
    exportCSVButton,
    moreButtons,
    tableTitle,
    debounceFilterWaitTime,
    filterMode
  };
}

export { buildFiltersDefault, useTableState };
//# sourceMappingURL=useTableState.js.map
