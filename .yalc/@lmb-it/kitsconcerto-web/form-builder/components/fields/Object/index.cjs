'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var index_web$1 = require('../../../../form/helpers/FormContainer/index.web.cjs');
var index_web = require('../../FormRenderer/index.web.cjs');
var index = require('../../../../layout/Flex/index.cjs');

const ObjectElement = ({
  element,
  control,
  getValues,
  groupField,
  focusedField,
  setFocusedField,
  fieldLogic
}) => {
  const { isShown, label, elements, helperText, style: elementStyle, fieldState, hideError, isRequired, slots } = fieldLogic;
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
  return /* @__PURE__ */ jsxRuntime.jsx(
    index_web$1.default,
    {
      id: element.id.toString(),
      label,
      helperText,
      errors: fieldState?.error?.message,
      invalid: fieldState?.invalid,
      hideError,
      required: isRequired,
      bare: true,
      containerStyle: elementStyle?.container,
      elementStyles: slots,
      children: /* @__PURE__ */ jsxRuntime.jsx(index.default, { w: "full", flexDirection: "column", gap: 6, children: renderer })
    }
  );
};

exports.ObjectElement = ObjectElement;
exports.default = ObjectElement;
//# sourceMappingURL=index.cjs.map
