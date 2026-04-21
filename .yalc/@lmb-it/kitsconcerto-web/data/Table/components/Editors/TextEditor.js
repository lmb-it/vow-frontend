import { jsx } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import KitsInputText from '../../../../form/inputs/InputText/index.web.js';

const timeoutPeriod = 500;
const TextEditor = (options) => {
  const [value, setValue] = useState("");
  const [timeoutId, setTimeoutId] = useState(null);
  useEffect(() => {
    if (options && "value" in options) {
      if (typeof options.value == "string") {
        setValue(options.value);
      } else {
        setValue("");
      }
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
      id: "editor-text",
      value,
      onChange: onInputChange,
      onKeyDown: (e) => {
        if (e.key === "Enter") {
          if (timeoutId) clearTimeout(timeoutId);
          options.editorCallback && options.editorCallback(value);
        }
      },
      inputSize: "sm",
      localProps: { style: { width: "100%" } }
    }
  );
};

export { TextEditor as default };
//# sourceMappingURL=TextEditor.js.map
