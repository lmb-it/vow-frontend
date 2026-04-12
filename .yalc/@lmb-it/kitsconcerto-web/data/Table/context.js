import { createContext, useContext } from 'react';

const TableContext = createContext(
  {}
);
function useTable() {
  return useContext(TableContext);
}

export { TableContext, useTable };
//# sourceMappingURL=context.js.map
