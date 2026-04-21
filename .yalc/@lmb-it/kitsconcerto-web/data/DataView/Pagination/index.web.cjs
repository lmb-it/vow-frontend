'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var paginator = require('primereact/paginator');
var index_web = require('../index.web.cjs');

function Pagination() {
  const { paginationParams } = index_web.useDataView();
  return /* @__PURE__ */ jsxRuntime.jsx("div", { className: "card", children: /* @__PURE__ */ jsxRuntime.jsx(
    paginator.Paginator,
    {
      first: paginationParams?.start,
      rows: paginationParams?.pageSize,
      totalRecords: paginationParams?.totalRecords,
      rowsPerPageOptions: [15, 25, 30, 50, 100],
      onPageChange: (e) => paginationParams?.onChangePage(e)
    }
  ) });
}

exports.default = Pagination;
//# sourceMappingURL=index.web.cjs.map
