'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var datatable = require('primereact/datatable');
var column = require('primereact/column');
var skeleton = require('primereact/skeleton');
var index$3 = require('../../form/selects/index.cjs');
var context = require('./context.cjs');
var constants = require('./constants.cjs');
var useTableState = require('./hooks/useTableState.cjs');
var index$2 = require('./components/TableHeader/index.cjs');
var index$1 = require('./components/Pagination/index.cjs');
var Column = require('./components/Column.cjs');
var locale = require('../../hooks/locale.cjs');
require('../../contexts/DialogContext.cjs');
var useComponentDefaults = require('../../hooks/useComponentDefaults.cjs');
var useResolvedStyle = require('../../hooks/useResolvedStyle.cjs');
var index = require('../../layout/Flex/index.cjs');
var Button_web = require('../../components/Button/Button.web.cjs');

const Datatable = ({ ref, ...props }) => {
  const {
    style,
    text = constants.defaultText,
    columnsPicker = true,
    // GoTable-specific props — destructured to prevent leaking to PrimeTable DOM
    skeleton: _skeleton,
    stateful: _stateful,
    globalSearch: _globalSearch,
    keyColumn: _keyColumn,
    service: _service,
    serviceRevalidateDeps: _serviceRevalidateDeps,
    headless: _headless,
    multiSorting: _multiSorting,
    rowLockable: _rowLockable,
    rowExpansionTemplate: _rowExpansionTemplate,
    onSelectChange: _onSelectChange,
    tableSize: _tableSize,
    debounceFilterWaitTime: _debounceFilterWaitTime,
    filterMode: _filterMode,
    data: _data,
    exportPDFButton: _exportPDFButton,
    exportCSVButton: _exportCSVButton,
    moreButtons: _moreButtons,
    tableTitle: _tableTitle,
    scrollHeight: _scrollHeight,
    resizableColumns: _resizableColumns,
    selectionMode: _selectionMode,
    columns: _columns,
    ...rest
  } = props;
  const state = useTableState.useTableState(props, ref);
  const {
    tableRef,
    refValues,
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
    isAnyFilter,
    allowExpansion,
    pagination,
    conditionalProps,
    onColumnToggle,
    onGlobalFilterChange,
    onClearFilter,
    onClearCache,
    toggleLock,
    columns,
    onRowSelect,
    onSelectChange,
    selectionMode,
    tableSize,
    resizableColumns,
    scrollHeight,
    stateful,
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
    filterMode,
    refresh
  } = state;
  const { t } = locale.useLanguage();
  const { elementStyles } = useComponentDefaults.default("Table", {});
  const rootStyle = useResolvedStyle.default(elementStyles.root || {});
  const thStyle = useResolvedStyle.default(elementStyles.th || {});
  const headerStyle = useResolvedStyle.default(elementStyles.header || {});
  const headerRowStyle = useResolvedStyle.default(elementStyles.headerRow || {});
  const headerCellStyle = useResolvedStyle.default(elementStyles.headerCell || {});
  const bodyRowStyle = useResolvedStyle.default(elementStyles.bodyRow || {});
  const bodyCellStyle = useResolvedStyle.default(elementStyles.bodyCell || {});
  const paginatorStyle = useResolvedStyle.default(elementStyles.paginator || {});
  const paginatorPageButtonStyle = useResolvedStyle.default(elementStyles.paginatorPageButton || {});
  const paginatorActivePageButtonStyle = useResolvedStyle.default(elementStyles.paginatorActivePageButton || {});
  const paginatorRowsPerPageStyle = useResolvedStyle.default(elementStyles.paginatorRowsPerPage || {});
  const emptyMessageStyle = useResolvedStyle.default(elementStyles.emptyMessage || {});
  const overwriteText = React.useMemo(() => text ?? {}, [text]);
  const sortBy = serverSideRequest.sortBy;
  const skeletonList = React.useMemo(() => {
    const list = [];
    for (let i = 0; i < serverSideRequest.length; i++) {
      const obj = { [keyColumn]: i };
      columns.filter((c) => visibleColumns.some((v) => v.name === c.name)).forEach((col, index) => {
        if (col.name && col.name !== keyColumn) {
          obj[col.name] = /* @__PURE__ */ jsxRuntime.jsx(skeleton.Skeleton, { className: "mb-2", style: col.globalStyle }, index);
        }
      });
      list.push(obj);
    }
    return list;
  }, [columns, visibleColumns, serverSideRequest, keyColumn]);
  const columnRender = (field, index) => Column.default({
    index,
    field,
    serverSideRequest,
    tableSize,
    keyColumn,
    isLoading,
    debounceFilterWaitTime,
    filterMode,
    t,
    themeHeaderCellStyle: headerCellStyle,
    themeBodyCellStyle: bodyCellStyle
  });
  const lockTemplate = (rowData, options) => {
    const icon = options.frozenRow ? "pi pi-lock" : "pi pi-lock-open";
    const disabled = options.frozenRow ? false : lockedRows.length >= 2;
    return /* @__PURE__ */ jsxRuntime.jsx(
      Button_web.Button,
      {
        type: "button",
        icon,
        disabled,
        className: "p-button-sm p-button-text",
        onClick: () => toggleLock(
          rowData,
          options.frozenRow,
          options.rowIndex
        )
      }
    );
  };
  const isScrollHeightAuto = scrollHeight === "auto";
  return /* @__PURE__ */ jsxRuntime.jsx(
    context.TableContext.Provider,
    {
      value: {
        columns,
        onGlobalFilterChange,
        globalFilterValue,
        reloadClickHandler: refresh,
        pagination,
        onClearFilter,
        onClearCache,
        dataList,
        serverSideRequest,
        buttons: {
          exportAsCSV: exportCSVButton,
          exportAsPdf: exportPDFButton,
          moreButtons
        },
        rowLockable,
        fileName: tableTitle ?? "my-table",
        rowExpansionTemplate,
        isLoading,
        visibleColumns,
        resizableColumns,
        refValues,
        lockedRows,
        tableRef,
        globalSearch,
        toggleLock,
        keyColumn,
        stateful,
        text: {
          clearCache: "Clear Cache",
          filter: [],
          ...constants.defaultText,
          ...overwriteText
        }
      },
      children: /* @__PURE__ */ jsxRuntime.jsxs(
        index.default,
        {
          flexDirection: "column",
          w: "full",
          className: "table-container " + (isScrollHeightAuto ? "scroll-height-auto" : ""),
          children: [
            !!tableTitle && /* @__PURE__ */ jsxRuntime.jsx(index.default, { className: "surface-900", px: 10, py: 5, children: /* @__PURE__ */ jsxRuntime.jsx("h2", { className: "text-50", children: tableTitle }) }),
            /* @__PURE__ */ jsxRuntime.jsxs(
              datatable.DataTable,
              {
                ref: tableRef,
                value: isLoading ? skeletonList : dataList,
                paginator: !!staticData,
                width: "100%",
                style: { ...rootStyle, ...style },
                className: "theme-scroll",
                pt: {
                  thead: { style: thStyle },
                  header: { style: headerStyle },
                  headerRow: { style: headerRowStyle },
                  bodyRow: { style: bodyRowStyle },
                  paginator: {
                    root: { style: paginatorStyle },
                    pageButton: { style: paginatorPageButtonStyle },
                    firstPageButton: { style: paginatorPageButtonStyle },
                    nextPageButton: { style: paginatorPageButtonStyle },
                    lastPageButton: { style: paginatorPageButtonStyle },
                    prevPageButton: { style: paginatorPageButtonStyle },
                    current: { style: paginatorActivePageButtonStyle },
                    RPPDropdown: { root: { style: paginatorRowsPerPageStyle } }
                  },
                  emptyMessage: { style: emptyMessageStyle }
                },
                rows: serverSideRequest.length,
                rowsPerPageOptions: staticData ? [15, 25, 30, 50, 100] : void 0,
                tableStyle: { minWidth: "50rem", maxHeight: "100%" },
                paginatorTemplate: "RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink",
                currentPageReportTemplate: "{first} to {last} of {totalRecords}",
                size: tableSize,
                dataKey: keyColumn,
                emptyMessage: text.emptyMessage,
                header: !headless ? () => /* @__PURE__ */ jsxRuntime.jsx(index$2.default, { children: columnsPicker && /* @__PURE__ */ jsxRuntime.jsx(
                  index$3.KitsMultiSelect,
                  {
                    id: "column-picker",
                    valueMode: "text",
                    localProps: {
                      maxSelectedLabels: 0
                    },
                    value: visibleColumns.map((v) => v.name),
                    list: columns.map((c) => ({ label: c.label, value: c.name })),
                    withFilter: true,
                    onChange: (e) => onColumnToggle(e.value),
                    inputSize: "sm"
                  }
                ) }) : void 0,
                showGridlines: true,
                multiSortMeta: multiSorting ? sortBy : void 0,
                sortMode: multiSorting ? "multiple" : "single",
                sortField: !multiSorting && sortBy.length > 0 ? sortBy[0]?.field : void 0,
                sortOrder: !multiSorting && sortBy.length > 0 ? sortBy[0]?.order : void 0,
                footer: service ? () => /* @__PURE__ */ jsxRuntime.jsx(index$1.default, {}) : void 0,
                filters: isLoading || !isAnyFilter ? void 0 : serverSideRequest.filters,
                onRowSelect: isSelectable ? onRowSelect : void 0,
                resizableColumns,
                columnResizeMode: resizableColumns ? "expand" : void 0,
                filterDisplay: isAnyFilter ? "row" : void 0,
                selectionMode: isSelectable ? selectionMode : void 0,
                selection: isSelectable ? selections : void 0,
                onSelectionChange: isSelectable ? (e) => {
                  setSelections(Array.isArray(e.value) ? e.value : [e.value]);
                  onSelectChange && onSelectChange(e);
                } : void 0,
                removableSort: true,
                expandedRows,
                onRowToggle: (e) => setExpandedRows(e.data),
                rowExpansionTemplate,
                ...conditionalProps,
                ...rest,
                children: [
                  allowExpansion && /* @__PURE__ */ jsxRuntime.jsx(column.Column, { expander: allowExpansion, style: { width: "5rem" } }),
                  columns.filter((c) => visibleColumns.some((v) => v.name === c.name)).map(columnRender),
                  !!rowLockable && /* @__PURE__ */ jsxRuntime.jsx(
                    column.Column,
                    {
                      style: { flex: "0 0 4rem" },
                      body: lockTemplate,
                      frozen: true,
                      alignFrozen: "left"
                    }
                  )
                ]
              }
            )
          ]
        }
      )
    }
  );
};

exports.TableContext = context.TableContext;
exports.useTable = context.useTable;
exports.default = Datatable;
//# sourceMappingURL=index.web.cjs.map
