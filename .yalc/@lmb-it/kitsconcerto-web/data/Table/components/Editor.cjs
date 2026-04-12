'use strict';

var jsxRuntime = require('react/jsx-runtime');
var skeleton = require('primereact/skeleton');
var SliderEditor = require('./Editors/SliderEditor.cjs');
var TextEditor = require('./Editors/TextEditor.cjs');
var MultiSelectEditor = require('./Editors/MultiSelectEditor.cjs');
var ButtonsEditor = require('./Editors/ButtonsEditor.cjs');
var DropdownEditor = require('./Editors/DropdownEditor.cjs');
var TriStateEditor = require('./Editors/TriStateEditor.cjs');
var PhoneEditor = require('./Editors/PhoneEditor.cjs');
var DateEditor = require('./Editors/DateEditor.cjs');
var DateRangeEditor = require('./Editors/DateRangeEditor.cjs');

const PickEditorElement = ({ Editor, isLoading, options }) => {
  if (isLoading) {
    return /* @__PURE__ */ jsxRuntime.jsx(skeleton.Skeleton, { className: "mb-2" });
  }
  if (Editor?.type == "multiSelect") {
    return /* @__PURE__ */ jsxRuntime.jsx(MultiSelectEditor.default, { list: Editor.list, ...options });
  } else if (Editor?.type == "buttons") {
    return /* @__PURE__ */ jsxRuntime.jsx(
      ButtonsEditor.default,
      {
        list: Editor.list,
        isMultiple: Editor.isMultiple,
        ...options
      }
    );
  } else if (Editor?.type == "dropdown") {
    return /* @__PURE__ */ jsxRuntime.jsx(DropdownEditor.default, { list: Editor.list, ...options });
  } else if (Editor?.type == "tristate") {
    return /* @__PURE__ */ jsxRuntime.jsx(TriStateEditor.default, { ...options });
  } else if (Editor?.type == "range" || Editor?.type == "number") {
    return /* @__PURE__ */ jsxRuntime.jsx(
      SliderEditor.default,
      {
        min: Editor.min ?? 0,
        max: Editor.max ?? 100,
        ...options
      }
    );
  } else if (Editor?.type == "phone") {
    return /* @__PURE__ */ jsxRuntime.jsx(PhoneEditor.default, { ...options });
  } else if (Editor?.type == "date") {
    if (Editor.isRanged) {
      return /* @__PURE__ */ jsxRuntime.jsx(DateRangeEditor.default, { ...options });
    } else {
      return /* @__PURE__ */ jsxRuntime.jsx(DateEditor.default, { ...options });
    }
  } else if (Editor?.type == "text") {
    return /* @__PURE__ */ jsxRuntime.jsx(TextEditor.default, { ...options });
  } else {
    return null;
  }
};

exports.PickEditorElement = PickEditorElement;
//# sourceMappingURL=Editor.cjs.map
