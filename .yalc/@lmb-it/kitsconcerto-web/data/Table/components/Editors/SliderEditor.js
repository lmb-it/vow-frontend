import { jsx } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import 'primereact/slider';
import { InputNumber } from 'primereact/inputnumber';
import 'lodash';

const timeoutPeriod = 500;
const NumberFilterElement = ({
  max,
  min,
  ...options
}) => {
  const [value, setValue] = useState(null);
  const [timeoutId, setTimeoutId] = useState(null);
  useEffect(() => {
    if (options && "value" in options) {
      if (typeof options.value == "number") {
        setValue(options.value);
      } else {
        setValue(null);
      }
    }
  }, [options]);
  const onInputChange = (event) => {
    const newTerm = event.value;
    setValue(newTerm);
    if (timeoutId) clearTimeout(timeoutId);
    const newTimeoutId = setTimeout(() => {
      options.editorCallback && options.editorCallback(newTerm);
    }, timeoutPeriod);
    setTimeoutId(newTimeoutId);
  };
  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      if (timeoutId) clearTimeout(timeoutId);
      options.editorCallback && options.editorCallback(value);
    }
  };
  return /* @__PURE__ */ jsx(
    InputNumber,
    {
      id: "filter-number",
      value,
      style: { width: "100%" },
      min,
      max,
      onChange: onInputChange,
      onKeyDown
    }
  );
};
const SliderFilterElement = (options) => {
  {
    if (typeof NumberFilterElement == "function") {
      return /* @__PURE__ */ jsx(NumberFilterElement, { ...options });
    } else {
      return /* @__PURE__ */ jsx("div", {});
    }
  }
};

export { SliderFilterElement as default };
//# sourceMappingURL=SliderEditor.js.map
