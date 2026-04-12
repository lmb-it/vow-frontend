'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var useSWR = require('swr');
var moment = require('moment');
var _ = require('lodash');
var dataview = require('primereact/dataview');
var progressspinner = require('primereact/progressspinner');
var divider = require('primereact/divider');
var index_web = require('./Pagination/index.web.cjs');
var index = require('../../layout/Flex/index.cjs');
var Form = require('../../form-builder/Form.cjs');
var Button_web = require('../../components/Button/Button.web.cjs');

const defaultText = {
  emptyMessage: "There are no data to display",
  clearFilter: "Clear filters",
  resetColumnsWidths: "Reset Columns Widths",
  globalFilterPlaceholder: "Keyword Search",
  exportAsPdf: "Export as Pdf",
  exportAsCSV: "Export as CSV"
};
const DataViewContext = React.createContext(
  {}
);
const DataView = (props) => {
  const {
    id,
    dataViewTitle,
    filtersFormElements,
    pagination,
    keyColumn = "id",
    skeleton,
    stateful,
    scrollHeight,
    dataViewSize,
    headless,
    moreButtons,
    globalSearch,
    service,
    defaultMode,
    hideModeButtons,
    data: staticData,
    text = defaultText,
    listItem,
    gridItem,
    ref
  } = props;
  let mutate = void 0;
  let data = void 0;
  const requestDefaultParams = {
    filters: {},
    search: "",
    start: 0,
    length: 20,
    sortBy: []
  };
  const scrollableRef = React.useRef(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [dataList, setDataList] = React.useState([]);
  const [serverSideRequest, setServerSideRequest] = React.useState(requestDefaultParams);
  const [layout, setLayout] = React.useState(
    defaultMode ?? "grid"
  );
  const listEnded = React.useRef(false);
  const searchedStarted = React.useRef(false);
  const dataViewRef = React.useRef(null);
  const filterFormRef = React.useRef(null);
  const revertFilter = React.useCallback(
    (filters) => {
      const row = {};
      Object.entries(filters).forEach(([key, value]) => {
        if ("value" in value && value.value instanceof Date) {
          const ff = "YYYY-MM-DD\\THH:mm:ss.000\\Z";
          row[key] = {
            ...value,
            value: moment(value.value).format(ff)
          };
        } else {
          row[key] = value;
        }
      });
      return row;
    },
    []
  );
  const fetcher = React.useCallback(async () => {
    if (!service) {
      return await new Promise((resolve) => {
        resolve(null);
      });
    }
    return await service({
      ...serverSideRequest,
      filters: revertFilter(serverSideRequest.filters)
    });
  }, [service, serverSideRequest, staticData]);
  const swr = useSWR(id, fetcher, {
    revalidateOnMount: false,
    revalidateOnFocus: pagination,
    revalidateIfStale: pagination,
    revalidateOnReconnect: pagination
  });
  if (service && swr.mutate) {
    mutate = swr.mutate;
  }
  if (swr.data) {
    data = swr.data;
  }
  const refresh = () => {
    setIsLoading(true);
    searchedStarted.current = true;
    if (mutate) {
      mutate().then((_) => {
      }).finally(() => {
        searchedStarted.current = false;
        setIsLoading(false);
      });
    } else {
      if (staticData) {
        setIsLoading(false);
      }
    }
  };
  function isDate(value) {
    const regex = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$|^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$|^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{6}Z$/;
    return regex.test(value);
  }
  const refValues = {
    refresh: () => {
      setServerSideRequest(requestDefaultParams);
    },
    request: serverSideRequest
  };
  const handleScroll = () => {
    const scrollContainer = scrollableRef.current;
    if (scrollContainer?.scrollTop && scrollContainer?.scrollTop + scrollContainer?.clientHeight >= scrollContainer?.scrollHeight - 5) {
      if (!isLoading && !listEnded.current && !searchedStarted.current && !listEnded.current) {
        setIsLoading(true);
        setServerSideRequest((prevRequest) => ({
          ...prevRequest,
          start: prevRequest.start + prevRequest.length
        }));
      }
    }
  };
  React.useEffect(() => {
    if (!pagination) {
      const scrollContainer = scrollableRef.current;
      scrollContainer?.addEventListener("scroll", handleScroll);
      return () => {
        scrollContainer?.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);
  React.useImperativeHandle(ref, () => {
    return refValues;
  }, [refValues]);
  React.useEffect(() => {
    refresh();
  }, [serverSideRequest]);
  const fixData = React.useCallback((data2) => {
    return [...data2 || []].map((d) => {
      const row = {};
      Object.entries(d).forEach(([key, value]) => {
        const m1 = moment(value, "YYYY-MM-DDTHH:mm:ss.SSSSSSZ");
        const m2 = moment(value, "YYYY-MM-DD");
        if (typeof value === "string" && isDate(value)) {
          if (m1.isValid()) {
            row[key] = m1.toDate();
          } else if (m2.isValid()) {
            row[key] = m2.toDate();
          } else {
            row[key] = value;
          }
        } else {
          row[key] = value;
        }
      });
      return row;
    });
  }, []);
  React.useEffect(() => {
    if (data && data.success && data.data) {
      listEnded.current = data.data.list.length === 0;
      const dataList2 = data.data.list;
      if (dataList2.length > 0 && !(keyColumn in dataList2[0])) {
        throw new Error(
          "Missing keyColumn prop on ListItem. Please provide a unique identifier as keyColumn unless the identifier key is under 'id"
        );
      }
      if (pagination) {
        setDataList(fixData(dataList2));
      } else {
        setDataList((prevState) => [...prevState, ...fixData(dataList2)]);
      }
    } else {
      if (staticData) {
        setDataList(fixData(staticData));
      }
    }
  }, [data, fixData, staticData]);
  const setState = (setStateFunction, currentState, updatedState) => {
    if (!_.isEqual(currentState, updatedState)) {
      setStateFunction(updatedState);
    }
  };
  const onChangePage = React.useCallback(
    (event) => {
      setState(setServerSideRequest, serverSideRequest, {
        ...serverSideRequest,
        start: event.first,
        length: event.rows
      });
    },
    [serverSideRequest]
  );
  const paginationParams = React.useMemo(() => {
    return data?.success && data.data ? {
      pageSize: data.data.requestedPageSize,
      totalRecords: data.data.total,
      onChangePage,
      start: data.data.pageIndex
    } : {
      pageSize: 0,
      totalRecords: 0,
      onChangePage,
      start: 0
    };
  }, [data]);
  const itemTemplate = (item, layout2, index) => {
    if (!item) {
      return;
    }
    return /* @__PURE__ */ jsxRuntime.jsx(React.Fragment, { children: layout2 == "list" ? listItem(item, index) : gridItem(item, index) }, item[keyColumn]);
  };
  const listTemplate = (items, layout2) => {
    return /* @__PURE__ */ jsxRuntime.jsx(index.default, { flexDirection: layout2 == "list" ? "column" : "row", gap: 15, className: `${layout2} ${layout2}-nogutter`, children: items.map((item, index) => itemTemplate(item, layout2, index)) });
  };
  const onFilter = (filters) => {
    setServerSideRequest({
      filters,
      search: "",
      start: 0,
      length: 20,
      sortBy: []
    });
    setDataList([]);
  };
  const header = () => {
    return /* @__PURE__ */ jsxRuntime.jsxs(index.default, { className: "p-dataview-header", w: "full", children: [
      !hideModeButtons && /* @__PURE__ */ jsxRuntime.jsx("div", { className: "flex justify-content-end", children: /* @__PURE__ */ jsxRuntime.jsx(
        dataview.DataViewLayoutOptions,
        {
          layout,
          onChange: (e) => setLayout(e.value)
        }
      ) }),
      filtersFormElements && /* @__PURE__ */ jsxRuntime.jsxs(index.default, { gap: "1.25rem", w: "full", children: [
        /* @__PURE__ */ jsxRuntime.jsx(index.default, { w: "full", children: /* @__PURE__ */ jsxRuntime.jsx(
          Form.default,
          {
            ref: filterFormRef,
            elements: filtersFormElements,
            onChange: (data2) => {
              const filters = {};
              Object.entries(data2).forEach(([key, value]) => {
                if (value && value != "all") {
                  filters[key] = {
                    value,
                    matchMode: "contains"
                  };
                }
              });
              onFilter(filters);
            },
            submitButtonProps: "none"
          }
        ) }),
        /* @__PURE__ */ jsxRuntime.jsx(
          Button_web.Button,
          {
            type: "button",
            icon: "pi pi-filter-slash",
            tooltipOptions: {
              position: "left"
            },
            style: {
              h: "2.5rem",
              border: "none",
              alignSelf: "flex-end"
            },
            severity: "danger",
            tooltip: text?.clearFilter,
            size: "sm",
            onClick: () => {
              if (filterFormRef.current) {
                const formValues = {};
                filtersFormElements?.forEach((el) => {
                  formValues[el.id] = null;
                });
                filterFormRef.current.setValues(formValues);
              }
            }
          }
        )
      ] })
    ] });
  };
  const isHeader = !hideModeButtons || !!filtersFormElements;
  return /* @__PURE__ */ jsxRuntime.jsx(
    DataViewContext.Provider,
    {
      value: {
        reloadClickHandler: refresh,
        paginationParams,
        dataList,
        serverSideRequest,
        fileName: dataViewTitle ?? "my-data-view",
        isLoading,
        refValues
      },
      children: /* @__PURE__ */ jsxRuntime.jsxs(index.default, { flexDirection: "column", id: "data-view", children: [
        isHeader && header(),
        isHeader && /* @__PURE__ */ jsxRuntime.jsx(divider.Divider, {}),
        /* @__PURE__ */ jsxRuntime.jsxs(
          index.default,
          {
            flexDirection: "column",
            w: "full",
            ref: scrollableRef,
            maxH: isHeader ? "87%" : "full",
            overflow: "auto",
            className: "table-container",
            children: [
              /* @__PURE__ */ jsxRuntime.jsx(
                dataview.DataView,
                {
                  value: dataList,
                  ref: dataViewRef,
                  rows: serverSideRequest.length,
                  listTemplate,
                  paginator: false,
                  layout
                }
              ),
              pagination && /* @__PURE__ */ jsxRuntime.jsx(index_web.default, {}),
              isLoading && !pagination && /* @__PURE__ */ jsxRuntime.jsx(index.default, { w: "full", justifyContent: "center", alignItems: "center", children: /* @__PURE__ */ jsxRuntime.jsx(progressspinner.ProgressSpinner, { style: { width: 35 } }) })
            ]
          }
        )
      ] })
    }
  );
};
const useDataView = () => React.useContext(DataViewContext);

exports.DataViewContext = DataViewContext;
exports.default = DataView;
exports.useDataView = useDataView;
//# sourceMappingURL=index.web.cjs.map
