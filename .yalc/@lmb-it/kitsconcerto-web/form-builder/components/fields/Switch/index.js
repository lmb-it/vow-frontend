import { jsx } from 'react/jsx-runtime';
import KitsInputSwitch from '../../../../form/inputs/InputSwitch/index.web.js';
import 'react';
import 'axios';

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
  return /* @__PURE__ */ jsx(
    KitsInputSwitch,
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

export { Switch, Switch as default };
//# sourceMappingURL=index.js.map
