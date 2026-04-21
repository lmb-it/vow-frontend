import { jsx } from 'react/jsx-runtime';
import { Paginator } from 'primereact/paginator';
import { useDataView } from '../index.web.js';

function Pagination() {
  const { paginationParams } = useDataView();
  return /* @__PURE__ */ jsx("div", { className: "card", children: /* @__PURE__ */ jsx(
    Paginator,
    {
      first: paginationParams?.start,
      rows: paginationParams?.pageSize,
      totalRecords: paginationParams?.totalRecords,
      rowsPerPageOptions: [15, 25, 30, 50, 100],
      onPageChange: (e) => paginationParams?.onChangePage(e)
    }
  ) });
}

export { Pagination as default };
//# sourceMappingURL=index.web.js.map
