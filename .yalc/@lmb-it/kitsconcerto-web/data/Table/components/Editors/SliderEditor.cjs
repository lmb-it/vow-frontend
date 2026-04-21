'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
require('primereact/slider');
var inputnumber = require('primereact/inputnumber');
require('lodash');

const timeoutPeriod = 500;
const NumberFilterElement = ({
  max,
  min,
  ...options
}) => {
  const [value, setValue] = React.useState(null);
  const [timeoutId, setTimeoutId] = React.useState(null);
  React.useEffect(() => {
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
  return /* @__PURE__ */ jsxRuntime.jsx(
    inputnumber.InputNumber,
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
      return /* @__PURE__ */ jsxRuntime.jsx(NumberFilterElement, { ...options });
    } else {
      return /* @__PURE__ */ jsxRuntime.jsx("div", {});
    }
  }
};

exports.default = SliderFilterElement;
//# sourceMappingURL=SliderEditor.cjs.map
