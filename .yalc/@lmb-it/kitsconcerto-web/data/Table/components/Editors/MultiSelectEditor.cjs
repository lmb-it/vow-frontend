'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var index = require('../../../../form/selects/index.cjs');

const MultiSelectEditor = ({ list, ...options }) => {
  const listArray = Array.isArray(list) ? list : [];
  return /* @__PURE__ */ jsxRuntime.jsx(
    index.KitsMultiSelect,
    {
      attached: true,
      id: "editor-multiple",
      withFilter: true,
      value: options.value ?? void 0,
      list: listArray,
      filterBy: "label",
      onChange: (e) => options.editorCallback && options.editorCallback(e.value),
      inputSize: "sm"
    }
  );
};

exports.default = MultiSelectEditor;
//# sourceMappingURL=MultiSelectEditor.cjs.map
