'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var colorpicker = require('primereact/colorpicker');
var index_web = require('../../helpers/FormContainer/index.web.cjs');
var useFormInputController_web = require('../../helpers/useFormInputController/useFormInputController.web.cjs');
require('react');
require('../../../contexts/DialogContext.cjs');
var useComponentDefaults = require('../../../hooks/useComponentDefaults.cjs');
var useResolvedStyle = require('../../../hooks/useResolvedStyle.cjs');

const KitsInputColorPicker = ({ ref, ...rawProps }) => {
  const { mergedProps: props, themeStyle, elementStyles } = useComponentDefaults.default("ColorPicker", rawProps, "Input");
  const resolvedThemeStyle = useResolvedStyle.default(themeStyle);
  const resolvedRootStyle = useResolvedStyle.default(elementStyles?.root || {});
  const {
    id,
    label,
    value,
    defaultValue,
    onChange,
    errors,
    invalid,
    required,
    disabled,
    helperText,
    leftAddon,
    rightAddon,
    colorFormat,
    inline,
    hideError,
    inputSize,
    isFloatedLabel,
    containerStyle,
    attached,
    ...rest
  } = props;
  const { value: displayValue, emitChange } = useFormInputController_web.useFormInputController({
    value,
    defaultValue,
    onChange
  });
  const Element = /* @__PURE__ */ jsxRuntime.jsx(
    colorpicker.ColorPicker,
    {
      inputRef: ref,
      format: colorFormat,
      inline,
      value: displayValue,
      onChange: (e) => emitChange(e.value),
      className: "w-full",
      disabled,
      style: { borderRadius: 0, ...resolvedRootStyle || resolvedThemeStyle }
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
      required,
      helperText,
      errors,
      invalid,
      label,
      inputSize,
      leftAddon,
      rightAddon,
      hideError,
      isFloatedLabel,
      containerStyle,
      elementStyles,
      children: Element
    }
  );
};

exports.default = KitsInputColorPicker;
//# sourceMappingURL=index.web.cjs.map
