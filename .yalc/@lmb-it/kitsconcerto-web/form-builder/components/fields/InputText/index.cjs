'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var index_web = require('../../../../form/inputs/InputMask/index.web.cjs');
var index_web$1 = require('../../../../form/inputs/InputText/index.web.cjs');
require('react');
require('axios');

const InputText = ({
  element,
  control,
  getValues,
  fieldLogic
}) => {
  const {
    field,
    placeholder,
    isRequired,
    isDisabled,
    fieldState,
    label,
    helperText,
    rightAddon,
    leftAddon,
    withMask,
    keyFilter,
    layout,
    hideError,
    attached,
    isShown,
    style: elementStyle,
    slots,
    localProps = {}
  } = fieldLogic;
  if (withMask) {
    return /* @__PURE__ */ jsxRuntime.jsx(
      index_web.default,
      {
        ...field,
        id: field.name,
        placeholder,
        required: isRequired,
        disabled: isDisabled,
        errors: fieldState.error?.message,
        invalid: fieldState.invalid,
        hideError,
        helperText,
        leftAddon,
        rightAddon,
        label,
        attached,
        style: elementStyle?.input,
        containerStyle: elementStyle?.container,
        slots,
        ...localProps
      }
    );
  } else {
    const keyboardType = "keyboardType" in element ? element.keyboardType : void 0;
    return /* @__PURE__ */ jsxRuntime.jsx(
      index_web$1.default,
      {
        ...field,
        id: field.name,
        placeholder,
        required: isRequired,
        disabled: isDisabled,
        hideError,
        helperText,
        leftAddon,
        rightAddon,
        keyFilter,
        keyboardType,
        label,
        attached,
        errors: fieldState.error?.message,
        invalid: fieldState.invalid,
        style: elementStyle?.input,
        containerStyle: elementStyle?.container,
        slots,
        ...localProps
      }
    );
  }
};

exports.InputText = InputText;
exports.default = InputText;
//# sourceMappingURL=index.cjs.map
