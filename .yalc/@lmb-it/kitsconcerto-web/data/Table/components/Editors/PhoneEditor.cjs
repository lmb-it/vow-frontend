'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var index_web = require('../../../../form/inputs/InputText/index.web.cjs');

const timeoutPeriod = 500;
const PhoneEditor = (options) => {
  const [value, setValue] = React.useState("");
  const [timeoutId, setTimeoutId] = React.useState(null);
  React.useEffect(() => {
    if (options && "value" in options) {
      setValue(options.value != null ? String(options.value) : "");
    }
  }, [options]);
  const onInputChange = (e) => {
    const newTerm = e.target?.value ?? e ?? "";
    setValue(newTerm);
    if (timeoutId) clearTimeout(timeoutId);
    const newTimeoutId = setTimeout(() => {
      options.editorCallback && options.editorCallback(newTerm);
    }, timeoutPeriod);
    setTimeoutId(newTimeoutId);
  };
  return /* @__PURE__ */ jsxRuntime.jsx(
    index_web.default,
    {
      attached: true,
      id: "editor-phone-number",
      value,
      onChange: onInputChange,
      onKeyDown: (e) => {
        if (e.key === "Enter") {
          if (timeoutId) clearTimeout(timeoutId);
          options.editorCallback && options.editorCallback(value);
        }
      },
      keyFilter: /[\d\s\-+()]/,
      inputSize: "sm",
      localProps: { style: { width: "100%" } }
    }
  );
};

exports.default = PhoneEditor;
//# sourceMappingURL=PhoneEditor.cjs.map
