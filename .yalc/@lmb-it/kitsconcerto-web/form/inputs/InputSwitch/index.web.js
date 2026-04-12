import { jsx, jsxs } from 'react/jsx-runtime';
import { InputSwitch } from 'primereact/inputswitch';
import 'react-icons/fa';
import 'react-icons/ai';
import 'react-icons/io';
import '../../../packages/types/src/Components/Molecules/Form/FilePicker/types/filesTypes.js';
import 'yup';
import '../../../apps/web/src/Factory/ResponsiveElement.js';
import useSeparator from '../../../apps/web/src/Factory/useSeparator.js';
import { ClHelper } from '../../helpers/Functions.js';
import { useFormInputController } from '../../helpers/useFormInputController/useFormInputController.web.js';
import 'react';
import '../../../contexts/DialogContext.js';
import useComponentDefaults from '../../../hooks/useComponentDefaults.js';
import useResolvedStyle from '../../../hooks/useResolvedStyle.js';
import CheckboxButton from '../../controls/Checkbox/checkbox.web.js';
import KitsContainer from '../../helpers/FormContainer/index.web.js';

const KitsInputSwitch = ({ ref, ...rawProps }) => {
  const { mergedProps: props, themeStyle, elementStyles } = useComponentDefaults("Switch", rawProps);
  const resolvedThemeStyle = useResolvedStyle(themeStyle);
  const resolvedRootStyle = useResolvedStyle(elementStyles?.root || {});
  const {
    id,
    label,
    helperText,
    errors,
    invalid,
    required,
    disabled,
    inputSize,
    localProps,
    value,
    checked,
    defaultValue,
    onChange,
    attached,
    displayAs,
    direction,
    containerStyle,
    ...rest
  } = props;
  const isCheckbox = displayAs === "checkbox";
  const controlledValue = typeof checked === "boolean" ? checked : typeof value === "boolean" ? value : void 0;
  const resolvedDefault = typeof defaultValue === "boolean" ? defaultValue : false;
  const { value: displayValue, emitChange } = useFormInputController({
    value: controlledValue,
    defaultValue: resolvedDefault,
    onChange
  });
  const { nativeProps } = useSeparator({ ...rest, ...localProps });
  const clState = ClHelper({
    inputSize: inputSize ?? "",
    isChecked: !!displayValue,
    isInvalid: false,
    isDisabled: !!disabled
  });
  const className = [nativeProps.className, clState].filter(Boolean).join(" ");
  const labelText = typeof label === "string" ? label : typeof label === "object" && label !== null && "text" in label ? label.text : void 0;
  const Element = isCheckbox ? /* @__PURE__ */ jsx(
    CheckboxButton,
    {
      item: {
        value: true,
        label: labelText ?? "",
        withBulbs: true,
        labelPosition: "right"
      },
      selected: !!displayValue,
      disabled,
      isInvalid: invalid,
      onToggle: () => emitChange(!displayValue)
    }
  ) : /* @__PURE__ */ jsx(
    InputSwitch,
    {
      ...nativeProps,
      className,
      style: resolvedRootStyle || (Object.keys(resolvedThemeStyle).length ? resolvedThemeStyle : void 0),
      ref,
      checked: !!displayValue,
      disabled,
      onChange: (e) => emitChange(e.target.value)
    }
  );
  if (attached) {
    return Element;
  }
  const isRow = direction === "row";
  if (isRow && !isCheckbox) {
    const rowLabelText = typeof label === "string" ? label : typeof label === "object" && label !== null && "text" in label ? label.text : void 0;
    return /* @__PURE__ */ jsxs("div", { style: { display: "flex", flexDirection: "column", width: "100%" }, children: [
      /* @__PURE__ */ jsxs("div", { style: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%"
      }, children: [
        rowLabelText && /* @__PURE__ */ jsx(
          "label",
          {
            htmlFor: id,
            style: {
              cursor: disabled ? "default" : "pointer",
              opacity: disabled ? 0.6 : 1
            },
            children: rowLabelText
          }
        ),
        Element
      ] }),
      helperText && /* @__PURE__ */ jsx("small", { style: { color: "var(--text-color-secondary)", marginTop: "0.25rem" }, children: typeof helperText === "string" ? helperText : helperText }),
      errors && /* @__PURE__ */ jsx("small", { style: { color: "var(--kits-danger)", marginTop: "0.25rem" }, children: errors })
    ] });
  }
  return /* @__PURE__ */ jsx(
    KitsContainer,
    {
      id,
      required,
      helperText,
      errors,
      invalid,
      label: isCheckbox ? void 0 : label,
      disabled,
      inputSize,
      additionalClassName: "unfocusable-element",
      bare: true,
      children: Element
    }
  );
};

export { KitsInputSwitch as default };
//# sourceMappingURL=index.web.js.map
