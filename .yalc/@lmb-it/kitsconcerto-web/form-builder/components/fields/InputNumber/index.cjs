'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var index_web = require('../../../../form/inputs/InputNumber/index.web.cjs');

const InputNumber = ({
  element,
  control,
  getValues,
  fieldLogic
}) => {
  const {
    field,
    fieldState,
    label,
    placeholder,
    isDisabled,
    isRequired,
    helperText,
    keyFilter,
    // The hook can resolve this dynamic prop
    attached,
    style: elementStyle,
    slots
  } = fieldLogic;
  const numberElement = element;
  const { localProps } = numberElement;
  const handleOnChange = (event) => {
    field.onChange(event.value);
  };
  return /* @__PURE__ */ jsxRuntime.jsx(
    index_web.default,
    {
      id: field.name,
      name: field.name,
      value: field.value,
      onBlur: field.onBlur,
      ref: field.ref,
      onChange: handleOnChange,
      label,
      placeholder,
      disabled: isDisabled,
      required: isRequired,
      invalid: fieldState.invalid,
      errors: fieldState.error?.message,
      helperText,
      attached,
      style: elementStyle?.input,
      containerStyle: elementStyle?.container,
      slots,
      localProps
    }
  );
};

exports.InputNumber = InputNumber;
exports.default = InputNumber;
//# sourceMappingURL=index.cjs.map
