'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var password = require('primereact/password');
var index_web = require('../../helpers/FormContainer/index.web.cjs');
require('react-icons/fa');
require('react-icons/ai');
require('react-icons/io');
require('../../../packages/types/src/Components/Molecules/Form/FilePicker/types/filesTypes.cjs');
require('yup');
require('../../../apps/web/src/Factory/ResponsiveElement.cjs');
var useSeparator = require('../../../apps/web/src/Factory/useSeparator.cjs');
require('react');
var locale = require('../../../hooks/locale.cjs');
require('../../../contexts/DialogContext.cjs');
var useComponentDefaults = require('../../../hooks/useComponentDefaults.cjs');
var useResolvedStyle = require('../../../hooks/useResolvedStyle.cjs');
var useFormInputController_web = require('../../helpers/useFormInputController/useFormInputController.web.cjs');
var Strengthen_web = require('./Strengthen.web.cjs');

const KitsInputPassword = ({ ref, ...rawProps }) => {
  const { mergedProps: props, themeStyle, elementStyles } = useComponentDefaults.default("InputPassword", rawProps, "Input");
  const resolvedThemeStyle = useResolvedStyle.default(themeStyle);
  const resolvedRootStyle = useResolvedStyle.default(elementStyles?.root || {});
  const {
    id,
    label,
    rightAddon,
    leftAddon,
    value,
    defaultValue,
    onChange,
    errors,
    invalid,
    required,
    ignoreDirection,
    isFloatedLabel,
    promptLabel,
    weakLabel,
    mediumLabel,
    strongLabel,
    header,
    footer,
    feedback,
    toggleEye,
    disabled,
    helperText,
    inputSize,
    hideError,
    showStrengthProgress,
    schema,
    attached,
    containerStyle,
    ...rest
  } = props;
  const { isRTL } = locale.useLanguage();
  const { value: displayValue, emitChange } = useFormInputController_web.useFormInputController({
    value,
    defaultValue,
    onChange
  });
  useSeparator.default(props);
  const dirClass = isRTL && !ignoreDirection ? "text-right" : "";
  const Element = /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
    /* @__PURE__ */ jsxRuntime.jsx(
      password.Password,
      {
        inputRef: ref,
        className: `w-full`,
        inputClassName: `w-full ${dirClass}`,
        inputStyle: { borderRadius: 0, border: "none", ...resolvedRootStyle || resolvedThemeStyle },
        value: displayValue ?? "",
        onChange: (e) => emitChange(e.target.value),
        disabled: !!disabled,
        feedback,
        promptLabel,
        weakLabel,
        mediumLabel,
        strongLabel,
        header,
        footer,
        toggleMask: toggleEye,
        panelStyle: { width: "100%" }
      }
    ),
    showStrengthProgress && schema && /* @__PURE__ */ jsxRuntime.jsx(
      Strengthen_web.default,
      {
        value: displayValue ?? "",
        show: false,
        schema
      }
    )
  ] });
  if (attached) {
    return Element;
  }
  return /* @__PURE__ */ jsxRuntime.jsx(
    index_web.default,
    {
      id,
      helperText,
      isFloatedLabel,
      rightAddon,
      leftAddon,
      hideError,
      required,
      errors,
      invalid,
      label,
      disabled,
      inputSize,
      containerStyle,
      elementStyles,
      children: Element
    }
  );
};

exports.default = KitsInputPassword;
//# sourceMappingURL=index.web.cjs.map
