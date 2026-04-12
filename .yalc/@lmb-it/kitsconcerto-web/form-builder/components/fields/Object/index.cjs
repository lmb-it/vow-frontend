'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var index_web = require('../../FormRenderer/index.web.cjs');
var index = require('../../../../layout/Flex/index.cjs');
var label_web = require('../../../../form/helpers/Label/label.web.cjs');
var index_web$1 = require('../../../../primitives/Text/index.web.cjs');

const ObjectElement = ({
  element,
  control,
  getValues,
  groupField,
  focusedField,
  setFocusedField,
  fieldLogic
}) => {
  const { isShown, label, elements, helperText, style: elementStyle } = fieldLogic;
  const objectElement = element;
  const { grid } = objectElement;
  const renderer = React.useMemo(() => {
    if (!elements) {
      return null;
    }
    return /* @__PURE__ */ jsxRuntime.jsx(
      index_web.FormRenderer,
      {
        elements,
        control,
        getValues,
        groupField,
        parentPath: `${element.id.toString()}.`,
        focusedField,
        setFocusedField,
        grid
      }
    );
  }, [elements, focusedField, groupField, grid]);
  if (!isShown) {
    return null;
  }
  return /* @__PURE__ */ jsxRuntime.jsxs(index.default, { id: element.id.toString(), w: "full", flexDirection: "column", gap: 10, ...elementStyle?.container || {}, children: [
    label && /* @__PURE__ */ jsxRuntime.jsx(label_web.default, { as: "h2", label, elementId: element.id }),
    helperText && typeof helperText != "function" && /* @__PURE__ */ jsxRuntime.jsx(index_web$1.default, { fontSize: 10, as: "small", children: helperText }),
    renderer
  ] });
};

exports.ObjectElement = ObjectElement;
exports.default = ObjectElement;
//# sourceMappingURL=index.cjs.map
