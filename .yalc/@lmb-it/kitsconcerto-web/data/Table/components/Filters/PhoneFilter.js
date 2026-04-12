import { jsx } from 'react/jsx-runtime';
import { useState, useRef, useEffect } from 'react';
import KitsInputText from '../../../../form/inputs/InputText/index.web.js';

const PhoneFilter = ({
  debounceFilterWaitTime,
  filterMode,
  ...options
}) => {
  const [value, setValue] = useState("");
  const debounceRef = useRef(null);
  useEffect(() => {
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
  useEffect(() => {
    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
    };
  }, []);
  return /* @__PURE__ */ jsx(
    KitsInputText,
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

export { PhoneFilter as default };
//# sourceMappingURL=PhoneFilter.js.map
