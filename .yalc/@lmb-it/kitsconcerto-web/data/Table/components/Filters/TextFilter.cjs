'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var index_web = require('../../../../form/inputs/InputText/index.web.cjs');

const TextFilter = ({
  debounceFilterWaitTime,
  filterMode,
  ...options
}) => {
  const [value, setValue] = React.useState("");
  const debounceRef = React.useRef(null);
  React.useEffect(() => {
    if (options.filterModel && "value" in options.filterModel) {
      const v = options.filterModel.value;
      setValue(typeof v === "string" ? v : "");
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
      id: "filter-text",
      value,
      onChange,
      onKeyDown: ((event) => {
        if (event.key === "Enter") applyFilter(value);
      }),
      onBlur: () => applyFilter(value),
      inputSize: "sm",
      localProps: { style: { width: "100%" } }
    }
  );
};

exports.default = TextFilter;
//# sourceMappingURL=TextFilter.cjs.map
