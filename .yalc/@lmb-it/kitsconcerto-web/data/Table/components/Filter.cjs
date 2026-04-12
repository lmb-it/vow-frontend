'use strict';

var jsxRuntime = require('react/jsx-runtime');
var SliderFilter = require('./Filters/SliderFilter.cjs');
var TextFilter = require('./Filters/TextFilter.cjs');
var MultiSelectFilter = require('./Filters/MultiSelectFilter.cjs');
var ButtonsFilter = require('./Filters/ButtonsFilter.cjs');
var DropdownFilter = require('./Filters/DropdownFilter.cjs');
var TriStateFilter = require('./Filters/TriStateFilter.cjs');
var PhoneFilter = require('./Filters/PhoneFilter.cjs');
var DateFilter = require('./Filters/DateFilter.cjs');
var index_web = require('../../../primitives/Skeleton/index.web.cjs');

const PickFilterElement = ({ filter, isLoading, options, debounceFilterWaitTime, filterMode }) => {
  if (isLoading) {
    return /* @__PURE__ */ jsxRuntime.jsx(index_web.default, { className: "mb-2" });
  }
  if (filter?.type == "multiSelect") {
    return /* @__PURE__ */ jsxRuntime.jsx(MultiSelectFilter.default, { list: filter.list, filter: filter.filter, ...options });
  } else if (filter?.type == "buttons") {
    return /* @__PURE__ */ jsxRuntime.jsx(
      ButtonsFilter.default,
      {
        list: filter.list,
        isMultiple: filter.isMultiple,
        ...options
      }
    );
  } else if (filter?.type == "dropdown") {
    return /* @__PURE__ */ jsxRuntime.jsx(DropdownFilter.default, { list: filter.list, filter: filter.filter, ...options });
  } else if (filter?.type == "tristate") {
    return /* @__PURE__ */ jsxRuntime.jsx(TriStateFilter.default, { ...options });
  } else if (filter?.type == "range" || filter?.type == "number") {
    return /* @__PURE__ */ jsxRuntime.jsx(
      SliderFilter.default,
      {
        min: filter.min ?? 0,
        max: filter.max ?? 100,
        debounceFilterWaitTime,
        filterMode,
        ...options
      }
    );
  } else if (filter?.type == "phone") {
    return /* @__PURE__ */ jsxRuntime.jsx(PhoneFilter.default, { ...options, debounceFilterWaitTime, filterMode });
  } else if (filter?.type == "date") {
    return /* @__PURE__ */ jsxRuntime.jsx(DateFilter.default, { ...options });
  } else if (filter?.type == "text") {
    return /* @__PURE__ */ jsxRuntime.jsx(TextFilter.default, { ...options, debounceFilterWaitTime, filterMode });
  } else {
    return null;
  }
};

exports.PickFilterElement = PickFilterElement;
//# sourceMappingURL=Filter.cjs.map
