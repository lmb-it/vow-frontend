'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var inputtextarea = require('primereact/inputtextarea');
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

const KitsInputTextarea = ({ ref, ...rawProps }) => {
  const { mergedProps: props, themeStyle, elementStyles } = useComponentDefaults.default("Textarea", rawProps);
  const resolvedThemeStyle = useResolvedStyle.default(themeStyle);
  const resolvedRootStyle = useResolvedStyle.default(elementStyles?.root || {});
  const {
    id,
    autoResize,
    rows,
    cols,
    label,
    onChange,
    value,
    defaultValue,
    keyFilter,
    errors,
    hideError,
    invalid,
    isFloatedLabel,
    isChecked,
    disabled,
    helperText,
    inputSize,
    containerStyle,
    localProps,
    attached,
    ...rest
  } = props;
  const { value: displayValue, emitChange } = useFormInputController_web.useFormInputController({
    value,
    defaultValue,
    onChange
  });
  const { nativeProps } = useSeparator.default({
    ...rest,
    ...localProps
  });
  const Element = /* @__PURE__ */ jsxRuntime.jsx(
    inputtextarea.InputTextarea,
    {
      ref,
      value: displayValue ?? "",
      onChange: (e) => emitChange(e.target.value),
      keyfilter: keyFilter,
      disabled,
      autoResize,
      rows,
      cols,
      className: `w-full ${nativeProps.className ?? ""}`,
      style: { borderRadius: 0, border: "none", ...resolvedRootStyle || resolvedThemeStyle },
      ...nativeProps
    }
  );
  if (attached) {
    return Element;
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
      required: props.required,
      disabled,
      inputSize,
      containerStyle,
      elementStyles,
      children: Element
    }
  );
};

exports.default = KitsInputTextarea;
//# sourceMappingURL=index.web.cjs.map
