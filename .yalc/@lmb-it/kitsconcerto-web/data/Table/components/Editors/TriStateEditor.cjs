'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var tristatecheckbox = require('primereact/tristatecheckbox');

const TriStateEditor = (options) => {
  return /* @__PURE__ */ jsxRuntime.jsx(
    tristatecheckbox.TriStateCheckbox,
    {
      value: options.value,
      onChange: (e) => options.editorCallback && options.editorCallback(e.value)
    }
  );
};

exports.default = TriStateEditor;
//# sourceMappingURL=TriStateEditor.cjs.map
