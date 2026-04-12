import { jsx } from 'react/jsx-runtime';
import { useState, useRef, useEffect } from 'react';
import KitsInputText from '../../../../form/inputs/InputText/index.web.js';

const TextFilter = ({
  debounceFilterWaitTime,
  filterMode,
  ...options
}) => {
  const [value, setValue] = useState("");
  const debounceRef = useRef(null);
  useEffect(() => {
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
  useEffect(() => {
    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
    };
  }, []);
  return /* @__PURE__ */ jsx(
    KitsInputText,
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

export { TextFilter as default };
//# sourceMappingURL=TextFilter.js.map
