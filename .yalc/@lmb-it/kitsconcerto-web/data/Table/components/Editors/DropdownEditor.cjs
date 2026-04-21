'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var index = require('../../../../form/selects/index.cjs');
var locale = require('../../../../hooks/locale.cjs');

const DropdownEditor = ({ list, ...options }) => {
  const { t } = locale.useLanguage();
  const listArray = Array.isArray(list) ? list : [];
  return /* @__PURE__ */ jsxRuntime.jsx(
    index.KitsDropdown,
    {
      attached: true,
      id: "editor-dropdown",
      value: options.value,
      list: listArray,
      onChange: (e) => options.editorCallback && options.editorCallback(e.value),
      placeholder: t("any"),
      inputSize: "sm"
    }
  );
};

exports.default = DropdownEditor;
//# sourceMappingURL=DropdownEditor.cjs.map
