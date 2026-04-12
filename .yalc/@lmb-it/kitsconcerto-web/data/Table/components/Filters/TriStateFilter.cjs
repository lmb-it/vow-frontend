'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var tristatecheckbox = require('primereact/tristatecheckbox');

const TriStateFilter = (options) => {
  return /* @__PURE__ */ jsxRuntime.jsx(
    tristatecheckbox.TriStateCheckbox,
    {
      value: options.value,
      onChange: (e) => options.filterApplyCallback(e.value)
    }
  );
};

exports.default = TriStateFilter;
//# sourceMappingURL=TriStateFilter.cjs.map
