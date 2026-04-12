'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var inputtext = require('primereact/inputtext');
var index_web = require('../../helpers/FormContainer/index.web.cjs');
require('react');
var locale = require('../../../hooks/locale.cjs');
require('../../../contexts/DialogContext.cjs');
var useComponentDefaults = require('../../../hooks/useComponentDefaults.cjs');
var useResolvedStyle = require('../../../hooks/useResolvedStyle.cjs');
var Functions = require('../../helpers/Functions.cjs');
require('react-icons/fa');
require('react-icons/ai');
require('react-icons/io');
require('../../../packages/types/src/Components/Molecules/Form/FilePicker/types/filesTypes.cjs');
require('yup');
require('../../../apps/web/src/Factory/ResponsiveElement.cjs');
var useSeparator = require('../../../apps/web/src/Factory/useSeparator.cjs');
var useFormInputController_web = require('../../helpers/useFormInputController/useFormInputController.web.cjs');

const KitsInputText = ({ ref, ...rawProps }) => {
  const { mergedProps: props, themeStyle, elementStyles } = useComponentDefaults.default("InputText", rawProps, "Input");
  useResolvedStyle.default(themeStyle);
  const resolvedRootStyle = useResolvedStyle.default(elementStyles?.root || {});
  const {
    id,
    label,
    rightAddon,
    leftAddon,
    errors,
    invalid,
    ignoreDirection,
    hideError,
    required,
    keyFilter,
    value,
    defaultValue,
    attached,
    onChange,
    isChecked,
    disabled,
    helperText,
    isFloatedLabel,
    inputSize,
    placeholder,
    containerStyle,
    localProps,
    keyboardType: _keyboardType,
    // native-only — consumed and discarded on web
    ...rest
  } = props;
  const { isRTL } = locale.useLanguage();
  const { value: displayValue, emitChange } = useFormInputController_web.useFormInputController({
    value,
    defaultValue,
    onChange
  });
  const ClState = Functions.ClHelper({
    inputSize: inputSize ?? "",
    isChecked: !!isChecked,
    isInvalid: !!invalid,
    isDisabled: !!disabled
  });
  const { nativeProps } = useSeparator.default(rest);
  const dirClass = isRTL && !ignoreDirection ? "text-right" : "";
  const Element = /* @__PURE__ */ jsxRuntime.jsx(
    inputtext.InputText,
    {
      ref,
      className: `w-full ${dirClass} ${ClState}`,
      style: { borderRadius: 0, border: "none", ...resolvedRootStyle },
      value: displayValue ?? "",
      ...nativeProps,
      ...localProps,
      onChange: (e) => {
        emitChange(
          e.target?.value ?? ""
        );
      },
      keyfilter: keyFilter,
      placeholder,
      disabled
    }
  );
  if (attached) {
    return Element;
  }
  return /* @__PURE__ */ jsxRuntime.jsx(
    index_web.default,
    {
      id,
      disabled,
      hideError,
      isFloatedLabel,
      helperText,
      rightAddon,
      leftAddon,
      required,
      errors,
      invalid,
      label,
      inputSize,
      containerStyle,
      elementStyles,
      children: Element
    }
  );
};

exports.default = KitsInputText;
//# sourceMappingURL=index.web.cjs.map
