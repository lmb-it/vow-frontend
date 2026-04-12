'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var index_web = require('../../../../form/inputs/InputTextarea/index.web.cjs');

const Textarea = ({
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
    hideError,
    helperText,
    keyFilter,
    // The hook resolves this dynamic prop
    attached,
    style: elementStyle,
    slots
  } = fieldLogic;
  const textareaElement = element;
  const { rows, cols, autoResize } = textareaElement;
  return /* @__PURE__ */ jsxRuntime.jsx(
    index_web.default,
    {
      ...field,
      id: field.name,
      label,
      placeholder,
      disabled: isDisabled,
      hideError,
      required: isRequired,
      invalid: fieldState.invalid,
      errors: fieldState.error?.message,
      helperText,
      keyFilter,
      attached,
      style: elementStyle?.input,
      containerStyle: elementStyle?.container,
      slots,
      rows,
      cols,
      autoResize
    }
  );
};

exports.Textarea = Textarea;
exports.default = Textarea;
//# sourceMappingURL=index.cjs.map
