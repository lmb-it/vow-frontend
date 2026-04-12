'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var selectbutton = require('primereact/selectbutton');

const ButtonsFilterElement = ({ isMultiple, list, ...options }) => {
  return /* @__PURE__ */ jsxRuntime.jsx(
    selectbutton.SelectButton,
    {
      value: options.value,
      optionValue: "value",
      optionLabel: "label",
      multiple: isMultiple,
      style: {
        borderRadius: 0
      },
      onChange: (e) => options.editorCallback && options.editorCallback(e.value),
      options: list
    }
  );
};

exports.default = ButtonsFilterElement;
//# sourceMappingURL=ButtonsEditor.cjs.map
