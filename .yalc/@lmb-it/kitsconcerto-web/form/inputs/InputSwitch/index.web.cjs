'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var inputswitch = require('primereact/inputswitch');
require('react-icons/fa');
require('react-icons/ai');
require('react-icons/io');
require('../../../packages/types/src/Components/Molecules/Form/FilePicker/types/filesTypes.cjs');
require('yup');
require('../../../apps/web/src/Factory/ResponsiveElement.cjs');
var useSeparator = require('../../../apps/web/src/Factory/useSeparator.cjs');
var Functions = require('../../helpers/Functions.cjs');
var useFormInputController_web = require('../../helpers/useFormInputController/useFormInputController.web.cjs');
require('react');
require('../../../contexts/DialogContext.cjs');
var useComponentDefaults = require('../../../hooks/useComponentDefaults.cjs');
var useResolvedStyle = require('../../../hooks/useResolvedStyle.cjs');
var checkbox_web = require('../../controls/Checkbox/checkbox.web.cjs');
var index_web = require('../../helpers/FormContainer/index.web.cjs');

const KitsInputSwitch = ({ ref, ...rawProps }) => {
  const { mergedProps: props, themeStyle, elementStyles } = useComponentDefaults.default("Switch", rawProps);
  const resolvedThemeStyle = useResolvedStyle.default(themeStyle);
  const resolvedRootStyle = useResolvedStyle.default(elementStyles?.root || {});
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
  const { value: displayValue, emitChange } = useFormInputController_web.useFormInputController({
    value: controlledValue,
    defaultValue: resolvedDefault,
    onChange
  });
  const { nativeProps } = useSeparator.default({ ...rest, ...localProps });
  const clState = Functions.ClHelper({
    inputSize: inputSize ?? "",
    isChecked: !!displayValue,
    isInvalid: false,
    isDisabled: !!disabled
  });
  const className = [nativeProps.className, clState].filter(Boolean).join(" ");
  const labelText = typeof label === "string" ? label : typeof label === "object" && label !== null && "text" in label ? label.text : void 0;
  const Element = isCheckbox ? /* @__PURE__ */ jsxRuntime.jsx(
    checkbox_web.default,
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
  ) : /* @__PURE__ */ jsxRuntime.jsx(
    inputswitch.InputSwitch,
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
    return /* @__PURE__ */ jsxRuntime.jsxs("div", { style: { display: "flex", flexDirection: "column", width: "100%" }, children: [
      /* @__PURE__ */ jsxRuntime.jsxs("div", { style: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%"
      }, children: [
        rowLabelText && /* @__PURE__ */ jsxRuntime.jsx(
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
      helperText && /* @__PURE__ */ jsxRuntime.jsx("small", { style: { color: "var(--text-color-secondary)", marginTop: "0.25rem" }, children: typeof helperText === "string" ? helperText : helperText }),
      errors && /* @__PURE__ */ jsxRuntime.jsx("small", { style: { color: "var(--kits-danger)", marginTop: "0.25rem" }, children: errors })
    ] });
  }
  return /* @__PURE__ */ jsxRuntime.jsx(
    index_web.default,
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

exports.default = KitsInputSwitch;
//# sourceMappingURL=index.web.cjs.map
