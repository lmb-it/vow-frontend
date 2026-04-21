'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var index_web = require('../../../../form/inputs/ColorPicker/index.web.cjs');
require('react');
require('axios');

const ColorPicker = ({
  element,
  control,
  getValues,
  fieldLogic
}) => {
  const {
    field,
    fieldState,
    label,
    isDisabled,
    isRequired,
    attached,
    style: elementStyle,
    slots
  } = fieldLogic;
  const colorPickerElement = element;
  const { colorFormat, inline } = colorPickerElement;
  return /* @__PURE__ */ jsxRuntime.jsx(
    index_web.default,
    {
      ...field,
      id: field.name,
      label,
      disabled: isDisabled,
      required: isRequired,
      invalid: fieldState.invalid,
      errors: fieldState.error?.message,
      attached,
      colorFormat,
      inline,
      style: elementStyle?.input,
      containerStyle: elementStyle?.container,
      slots
    }
  );
};

exports.ColorPicker = ColorPicker;
exports.default = ColorPicker;
//# sourceMappingURL=index.cjs.map
