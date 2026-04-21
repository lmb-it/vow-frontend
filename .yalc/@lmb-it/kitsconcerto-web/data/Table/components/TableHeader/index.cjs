'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var context = require('../../context.cjs');
var index_web = require('../../../../form/inputs/InputText/index.web.cjs');
var index_web$1 = require('../../../../primitives/Icon/index.web.cjs');
require('../../../../contexts/DialogContext.cjs');
var useComponentDefaults = require('../../../../hooks/useComponentDefaults.cjs');
var useResolvedStyle = require('../../../../hooks/useResolvedStyle.cjs');
var index = require('../../../../layout/Flex/index.cjs');
var Button_web = require('../../../../components/Button/Button.web.cjs');

function getQueryParams() {
  const url = window.location.href;
  var urlObj = new URL(url);
  var searchParams = new URLSearchParams(urlObj.search);
  var params = {};
  for (let key of searchParams.keys()) {
    params[key] = searchParams.get(key);
  }
  return params;
}
const TableHeader = ({ children }) => {
  const {
    onGlobalFilterChange,
    globalFilterValue,
    text,
    globalSearch,
    stateful,
    columns,
    refValues,
    dataList,
    onClearFilter,
    onClearCache,
    resizableColumns,
    fileName,
    buttons,
    serverSideRequest,
    tableRef
  } = context.useTable();
  const [localSearch, setLocalSearch] = React.useState(globalFilterValue);
  React.useEffect(() => {
    setLocalSearch(globalFilterValue);
  }, [globalFilterValue]);
  const { elementStyles } = useComponentDefaults.default("Table", {});
  const tableHeaderStyle = useResolvedStyle.default(elementStyles.tableHeader || {});
  useResolvedStyle.default(elementStyles.searchInput || {});
  const isDev = "dev" in getQueryParams();
  const exportColumns = columns.map((col) => ({
    title: col.label,
    dataKey: col.name
  }));
  const exportPdf = () => {
    import('jspdf').then((jsPDF) => {
      import('jspdf-autotable').then((value) => {
        const doc = new jsPDF.default("landscape", "px");
        value.default(doc, {
          columns: exportColumns,
          body: dataList
        });
        doc.save(fileName + ".pdf");
      });
    });
  };
  const exportExcel = () => {
    import('xlsx').then((xlsx) => {
      const worksheet = xlsx.utils.json_to_sheet(dataList);
      const workbook = { Sheets: { data: worksheet }, SheetNames: ["data"] };
      const excelBuffer = xlsx.write(workbook, {
        bookType: "xlsx",
        type: "array"
      });
      saveAsExcelFile(excelBuffer);
    });
  };
  const saveAsExcelFile = (buffer) => {
    import('file-saver').then((module) => {
      if (module && module.default) {
        let EXCEL_TYPE = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
        let EXCEL_EXTENSION = ".xlsx";
        const data = new Blob([buffer], {
          type: EXCEL_TYPE
        });
        module.default.saveAs(
          data,
          fileName + "_export_" + (/* @__PURE__ */ new Date()).getTime() + EXCEL_EXTENSION
        );
      }
    });
  };
  return /* @__PURE__ */ jsxRuntime.jsxs(
    index.default,
    {
      justifyContent: [
        "flex-start",
        "flex-start",
        "flex-start",
        "space-between",
        "space-between"
      ],
      flexDirection: ["column", "column", "column", "row", "row"],
      gap: 2,
      style: tableHeaderStyle,
      children: [
        /* @__PURE__ */ jsxRuntime.jsxs(
          index.default,
          {
            flex: 1,
            gap: 2,
            flexDirection: ["column", "column", "column", "row", "row"],
            children: [
              globalSearch && /* @__PURE__ */ jsxRuntime.jsx(
                index_web.default,
                {
                  value: localSearch ?? "",
                  onChange: (e) => setLocalSearch(e.target?.value ?? e ?? ""),
                  onKeyDown: (e) => {
                    if (e.key === "Enter") {
                      onGlobalFilterChange(localSearch);
                    }
                  },
                  onBlur: () => onGlobalFilterChange(localSearch),
                  placeholder: text.globalFilterPlaceholder,
                  inputSize: "sm",
                  leftAddon: /* @__PURE__ */ jsxRuntime.jsx(index_web$1.Icon, { name: "search", size: "xs", color: "text-secondary" })
                }
              ),
              children
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsxs(
          index.default,
          {
            flex: 1,
            gap: 10,
            h: "2.5rem",
            justifyContent: "flex-end",
            flexDirection: "row",
            children: [
              buttons?.exportAsPdf && /* @__PURE__ */ jsxRuntime.jsx(
                Button_web.Button,
                {
                  type: "button",
                  icon: "pi pi-file-pdf",
                  tooltipOptions: {
                    position: "left"
                  },
                  raised: false,
                  style: {
                    h: "2.5rem",
                    border: "none"
                  },
                  tooltip: text.exportAsPdf,
                  size: "sm",
                  onClick: () => {
                    exportPdf();
                  }
                }
              ),
              buttons?.exportAsCSV && /* @__PURE__ */ jsxRuntime.jsx(
                Button_web.Button,
                {
                  type: "button",
                  icon: "pi pi-download",
                  tooltipOptions: {
                    position: "left"
                  },
                  style: {
                    h: "2.5rem",
                    border: "none"
                  },
                  raised: false,
                  tooltip: text.exportAsCSV,
                  size: "sm",
                  onClick: () => {
                    exportExcel();
                  }
                }
              ),
              buttons?.moreButtons ? buttons?.moreButtons(refValues).map((t, index$1) => /* @__PURE__ */ jsxRuntime.jsx(index.default, { h: "full", children: t }, index$1)) : null,
              Object.entries(serverSideRequest.filters).length > 0 && /* @__PURE__ */ jsxRuntime.jsx(
                Button_web.Button,
                {
                  type: "button",
                  icon: "pi pi-filter-slash",
                  tooltipOptions: {
                    position: "left"
                  },
                  style: {
                    h: "2.5rem",
                    border: "none"
                  },
                  severity: "danger",
                  tooltip: text.clearFilter,
                  size: "sm",
                  onClick: onClearFilter
                }
              ),
              !!stateful && isDev && /* @__PURE__ */ jsxRuntime.jsx(
                Button_web.Button,
                {
                  type: "button",
                  icon: "pi pi-server",
                  tooltipOptions: {
                    position: "left"
                  },
                  style: {
                    h: "2.5rem"
                  },
                  severity: "danger",
                  tooltip: text.clearCache,
                  size: "sm",
                  onClick: onClearCache
                }
              ),
              !!stateful && !!resizableColumns && /* @__PURE__ */ jsxRuntime.jsx(
                Button_web.Button,
                {
                  type: "button",
                  icon: "pi pi-sync",
                  tooltipOptions: {
                    position: "left"
                  },
                  style: {
                    height: "100%"
                  },
                  severity: "danger",
                  tooltip: text.resetColumnsWidths,
                  size: "sm",
                  onClick: () => {
                    tableRef.current?.resetResizeColumnsWidth();
                    tableRef.current?.restoreColumnWidths();
                  }
                }
              )
            ]
          }
        )
      ]
    }
  );
};

exports.default = TableHeader;
//# sourceMappingURL=index.cjs.map
