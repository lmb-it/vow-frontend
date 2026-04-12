'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var index = require('../../../../form/selects/index.cjs');

const MultiSelectFilter = ({ list, filter = true, ...options }) => {
  const listArray = Array.isArray(list) ? list : [];
  return /* @__PURE__ */ jsxRuntime.jsx(
    index.KitsMultiSelect,
    {
      attached: true,
      id: "filter-multiple",
      withFilter: filter,
      value: options.value ?? void 0,
      list: listArray,
      filterBy: "label",
      onChange: (e) => options.filterApplyCallback(e.value),
      inputSize: "sm"
    }
  );
};

exports.default = MultiSelectFilter;
//# sourceMappingURL=MultiSelectFilter.cjs.map
