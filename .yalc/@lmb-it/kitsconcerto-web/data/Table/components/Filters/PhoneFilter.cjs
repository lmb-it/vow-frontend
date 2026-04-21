'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var index_web = require('../../../../form/inputs/InputText/index.web.cjs');

const PhoneFilter = ({
  debounceFilterWaitTime,
  filterMode,
  ...options
}) => {
  const [value, setValue] = React.useState("");
  const debounceRef = React.useRef(null);
  React.useEffect(() => {
    if (options.filterModel && "value" in options.filterModel) {
      setValue(options.filterModel.value != null ? String(options.filterModel.value) : "");
    }
  }, [options.filterModel]);
  const applyFilter = (val) => {
    if (debounceRef.current) clearTimeout(debounceRef.current);
    options.filterApplyCallback(val);
  };
  const onChange = (e) => {
    const newValue = e.target?.value ?? e ?? "";
    setValue(newValue);
    if (filterMode === "debounce") {
      if (debounceRef.current) clearTimeout(debounceRef.current);
      if (newValue) {
        debounceRef.current = setTimeout(() => {
          options.filterApplyCallback(newValue);
        }, debounceFilterWaitTime);
      }
    }
  };
  React.useEffect(() => {
    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
    };
  }, []);
  return /* @__PURE__ */ jsxRuntime.jsx(
    index_web.default,
    {
      attached: true,
      id: "filter-phone-number",
      value,
      onChange,
      onKeyDown: (e) => {
        if (e.key === "Enter") applyFilter(value);
      },
      onBlur: () => applyFilter(value),
      keyFilter: /[\d\s\-+()]/,
      inputSize: "sm",
      localProps: { style: { width: "100%" } }
    }
  );
};

exports.default = PhoneFilter;
//# sourceMappingURL=PhoneFilter.cjs.map
