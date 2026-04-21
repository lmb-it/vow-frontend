import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import { useTable } from '../../context.js';
import KitsInputText from '../../../../form/inputs/InputText/index.web.js';
import { Icon } from '../../../../primitives/Icon/index.web.js';
import '../../../../contexts/DialogContext.js';
import useComponentDefaults from '../../../../hooks/useComponentDefaults.js';
import useResolvedStyle from '../../../../hooks/useResolvedStyle.js';
import Flex from '../../../../layout/Flex/index.js';
import { Button } from '../../../../components/Button/Button.web.js';

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
  } = useTable();
  const [localSearch, setLocalSearch] = useState(globalFilterValue);
  useEffect(() => {
    setLocalSearch(globalFilterValue);
  }, [globalFilterValue]);
  const { elementStyles } = useComponentDefaults("Table", {});
  const tableHeaderStyle = useResolvedStyle(elementStyles.tableHeader || {});
  useResolvedStyle(elementStyles.searchInput || {});
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
  return /* @__PURE__ */ jsxs(
    Flex,
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
        /* @__PURE__ */ jsxs(
          Flex,
          {
            flex: 1,
            gap: 2,
            flexDirection: ["column", "column", "column", "row", "row"],
            children: [
              globalSearch && /* @__PURE__ */ jsx(
                KitsInputText,
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
                  leftAddon: /* @__PURE__ */ jsx(Icon, { name: "search", size: "xs", color: "text-secondary" })
                }
              ),
              children
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          Flex,
          {
            flex: 1,
            gap: 10,
            h: "2.5rem",
            justifyContent: "flex-end",
            flexDirection: "row",
            children: [
              buttons?.exportAsPdf && /* @__PURE__ */ jsx(
                Button,
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
              buttons?.exportAsCSV && /* @__PURE__ */ jsx(
                Button,
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
              buttons?.moreButtons ? buttons?.moreButtons(refValues).map((t, index) => /* @__PURE__ */ jsx(Flex, { h: "full", children: t }, index)) : null,
              Object.entries(serverSideRequest.filters).length > 0 && /* @__PURE__ */ jsx(
                Button,
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
              !!stateful && isDev && /* @__PURE__ */ jsx(
                Button,
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
              !!stateful && !!resizableColumns && /* @__PURE__ */ jsx(
                Button,
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

export { TableHeader as default };
//# sourceMappingURL=index.js.map
