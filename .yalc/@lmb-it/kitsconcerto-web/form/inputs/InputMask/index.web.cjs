'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var inputmask = require('primereact/inputmask');
var index_web = require('../../helpers/FormContainer/index.web.cjs');
require('react-icons/fa');
require('react-icons/ai');
require('react-icons/io');
require('../../../packages/types/src/Components/Molecules/Form/FilePicker/types/filesTypes.cjs');
require('yup');
require('../../../apps/web/src/Factory/ResponsiveElement.cjs');
var useSeparator = require('../../../apps/web/src/Factory/useSeparator.cjs');
var useFormInputController_web = require('../../helpers/useFormInputController/useFormInputController.web.cjs');
require('react');
require('../../../contexts/DialogContext.cjs');
var useComponentDefaults = require('../../../hooks/useComponentDefaults.cjs');
var useResolvedStyle = require('../../../hooks/useResolvedStyle.cjs');

const KitsInputMask = ({ ref, ...rawProps }) => {
  const { mergedProps: props, themeStyle, elementStyles } = useComponentDefaults.default("InputMask", rawProps, "Input");
  const resolvedThemeStyle = useResolvedStyle.default(themeStyle);
  const resolvedRootStyle = useResolvedStyle.default(elementStyles?.root || {});
  const {
    id,
    label,
    required,
    value,
    defaultValue,
    errors,
    hideError,
    invalid,
    isFloatedLabel,
    disabled,
    attached,
    helperText,
    inputSize,
    onChange,
    localProps,
    leftAddon,
    rightAddon,
    containerStyle,
    ...rest
  } = props;
  const { value: displayValue, emitChange } = useFormInputController_web.useFormInputController({
    value,
    defaultValue,
    onChange
  });
  const { nativeProps } = useSeparator.default(rest);
  const className = `w-full ${nativeProps.className ?? ""}`;
  if (attached) {
    return /* @__PURE__ */ jsxRuntime.jsx(
      inputmask.InputMask,
      {
        ref,
        disabled,
        value: displayValue ?? "",
        className,
        width: "100%",
        onChange: (e) => {
          const next = e.value ?? e.target?.value ?? "";
          emitChange(next);
        },
        ...nativeProps,
        ...localProps,
        style: { borderRadius: 0, ...resolvedRootStyle || resolvedThemeStyle }
      }
    );
  }
  return /* @__PURE__ */ jsxRuntime.jsx(
    index_web.default,
    {
      id,
      helperText,
      isFloatedLabel,
      errors,
      invalid,
      label,
      hideError,
      required,
      disabled,
      inputSize,
      leftAddon,
      rightAddon,
      containerStyle,
      elementStyles,
      children: /* @__PURE__ */ jsxRuntime.jsx(
        inputmask.InputMask,
        {
          ref,
          disabled,
          value: displayValue ?? "",
          className,
          onChange: (e) => {
            const next = e.value ?? e.target?.value ?? "";
            emitChange(next);
          },
          ...nativeProps,
          ...localProps,
          style: { borderRadius: 0, ...resolvedRootStyle || resolvedThemeStyle }
        }
      )
    }
  );
};

exports.default = KitsInputMask;
//# sourceMappingURL=index.web.cjs.map
