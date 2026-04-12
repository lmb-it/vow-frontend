import { jsx } from 'react/jsx-runtime';
import { Paginator } from 'primereact/paginator';
import { useTable } from '../../context.js';
import 'react';
import '../../../../contexts/DialogContext.js';
import useComponentDefaults from '../../../../hooks/useComponentDefaults.js';
import useResolvedStyle from '../../../../hooks/useResolvedStyle.js';

function Pagination() {
  const { pagination } = useTable();
  const { elementStyles } = useComponentDefaults("Table", {});
  const paginatorStyle = useResolvedStyle(elementStyles.paginator || {});
  const paginatorPageButtonStyle = useResolvedStyle(elementStyles.paginatorPageButton || {});
  const paginatorActivePageButtonStyle = useResolvedStyle(elementStyles.paginatorActivePageButton || {});
  const paginatorRowsPerPageStyle = useResolvedStyle(elementStyles.paginatorRowsPerPage || {});
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
  return /* @__PURE__ */ jsx("div", { style: activeStyleVars, className: "kits-paginator-wrapper", children: /* @__PURE__ */ jsx(
    Paginator,
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

export { Pagination as default };
//# sourceMappingURL=index.js.map
