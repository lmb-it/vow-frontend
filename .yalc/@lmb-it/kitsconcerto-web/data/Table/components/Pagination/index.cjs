'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var paginator = require('primereact/paginator');
var context = require('../../context.cjs');
require('react');
require('../../../../contexts/DialogContext.cjs');
var useComponentDefaults = require('../../../../hooks/useComponentDefaults.cjs');
var useResolvedStyle = require('../../../../hooks/useResolvedStyle.cjs');

function Pagination() {
  const { pagination } = context.useTable();
  const { elementStyles } = useComponentDefaults.default("Table", {});
  const paginatorStyle = useResolvedStyle.default(elementStyles.paginator || {});
  const paginatorPageButtonStyle = useResolvedStyle.default(elementStyles.paginatorPageButton || {});
  const paginatorActivePageButtonStyle = useResolvedStyle.default(elementStyles.paginatorActivePageButton || {});
  const paginatorRowsPerPageStyle = useResolvedStyle.default(elementStyles.paginatorRowsPerPage || {});
  const activeStyleVars = {};
  if (paginatorActivePageButtonStyle.backgroundColor) {
    activeStyleVars["--kits-paginator-active-bg"] = paginatorActivePageButtonStyle.backgroundColor;
  }
  if (paginatorActivePageButtonStyle.color) {
    activeStyleVars["--kits-paginator-active-color"] = paginatorActivePageButtonStyle.color;
  }
  if (paginatorActivePageButtonStyle.borderRadius) {
    activeStyleVars["--kits-paginator-active-border-radius"] = paginatorActivePageButtonStyle.borderRadius;
  }
  return /* @__PURE__ */ jsxRuntime.jsx("div", { style: activeStyleVars, className: "kits-paginator-wrapper", children: /* @__PURE__ */ jsxRuntime.jsx(
    paginator.Paginator,
    {
      first: pagination?.start,
      rows: pagination?.pageSize,
      totalRecords: pagination?.totalRecords,
      rowsPerPageOptions: [15, 25, 30, 50, 100],
      onPageChange: (e) => pagination?.onChangePage(e),
      pt: {
        root: { style: paginatorStyle },
        pageButton: { style: paginatorPageButtonStyle },
        firstPageButton: { style: paginatorPageButtonStyle },
        nextPageButton: { style: paginatorPageButtonStyle },
        lastPageButton: { style: paginatorPageButtonStyle },
        prevPageButton: { style: paginatorPageButtonStyle },
        current: { style: paginatorActivePageButtonStyle },
        RPPDropdown: { root: { style: paginatorRowsPerPageStyle } }
      }
    }
  ) });
}

exports.default = Pagination;
//# sourceMappingURL=index.cjs.map
