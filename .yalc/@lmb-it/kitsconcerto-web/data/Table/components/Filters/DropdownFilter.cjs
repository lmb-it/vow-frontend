'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var index = require('../../../../form/selects/index.cjs');
var locale = require('../../../../hooks/locale.cjs');

const DropdownFilter = ({ list, filter = true, ...options }) => {
  const { t } = locale.useLanguage();
  const listArray = Array.isArray(list) ? list : [];
  return /* @__PURE__ */ jsxRuntime.jsx(
    index.KitsDropdown,
    {
      attached: true,
      id: "filter-dropdown",
      value: options.value,
      list: listArray,
      withFilter: filter,
      onChange: (e) => options.filterApplyCallback(e.value),
      placeholder: t("any"),
      inputSize: "sm"
    }
  );
};

exports.default = DropdownFilter;
//# sourceMappingURL=DropdownFilter.cjs.map
