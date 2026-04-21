'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var index_web = require('../../../../form/inputs/InputSwitch/index.web.cjs');
require('react');
require('axios');

const Switch = ({
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
    helperText,
    attached,
    style: elementStyle,
    slots
  } = fieldLogic;
  const switchElement = element;
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
      helperText,
      attached,
      displayAs: switchElement.displayAs,
      direction: switchElement.direction,
      style: elementStyle?.input,
      containerStyle: elementStyle?.container,
      slots,
      checked: !!field.value
    }
  );
};

exports.Switch = Switch;
exports.default = Switch;
//# sourceMappingURL=index.cjs.map
