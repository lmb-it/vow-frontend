import { jsx } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import KitsInputText from '../../../../form/inputs/InputText/index.web.js';

const timeoutPeriod = 500;
const PhoneEditor = (options) => {
  const [value, setValue] = useState("");
  const [timeoutId, setTimeoutId] = useState(null);
  useEffect(() => {
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
  return /* @__PURE__ */ jsx(
    KitsInputText,
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

export { PhoneEditor as default };
//# sourceMappingURL=PhoneEditor.js.map
