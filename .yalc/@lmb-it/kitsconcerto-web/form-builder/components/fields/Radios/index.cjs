'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var radio_web = require('../../../../form/controls/RadioButton/radio.web.cjs');
require('react');
require('../../../../contexts/DialogContext.cjs');

const Radios = ({
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
    hideError,
    list,
    attached,
    style: elementStyle,
    slots
  } = fieldLogic;
  const checkboxElement = element;
  const { vertical } = checkboxElement;
  return /* @__PURE__ */ jsxRuntime.jsx(
    radio_web.default,
    {
      ...field,
      onChange: (checked, event) => {
        field.onChange({
          target: {
            value: event.value
          }
        });
      },
      id: field.name,
      label,
      hideError,
      disabled: isDisabled,
      required: isRequired,
      invalid: fieldState.invalid,
      errors: fieldState.error?.message,
      helperText,
      item: list,
      attached,
      appearanceMode: vertical ? "vertical" : "horizontal",
      style: elementStyle?.input,
      containerStyle: elementStyle?.container,
      slots
    }
  );
};

exports.Radios = Radios;
exports.default = Radios;
//# sourceMappingURL=index.cjs.map
