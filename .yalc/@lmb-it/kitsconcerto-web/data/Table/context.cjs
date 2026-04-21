'use strict';

var React = require('react');

const TableContext = React.createContext(
  {}
);
function useTable() {
  return React.useContext(TableContext);
}

exports.TableContext = TableContext;
exports.useTable = useTable;
//# sourceMappingURL=context.cjs.map
