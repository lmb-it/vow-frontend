'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var calendar = require('primereact/calendar');
var index_web = require('../../helpers/FormContainer/index.web.cjs');
var useFormInputController_web = require('../../helpers/useFormInputController/useFormInputController.web.cjs');
var locale = require('../../../hooks/locale.cjs');
require('../../../contexts/DialogContext.cjs');
var useComponentDefaults = require('../../../hooks/useComponentDefaults.cjs');
var useResolvedStyle = require('../../../hooks/useResolvedStyle.cjs');
var KitsThemeProvider_web = require('../../../contexts/Theme/KitsThemeProvider.web.cjs');

const KitsInputCalendar = ({ ref, ...rawProps }) => {
  const { mergedProps: props, themeStyle, elementStyles } = useComponentDefaults.default("Datepicker", rawProps, "Input");
  const resolvedThemeStyle = useResolvedStyle.default(themeStyle);
  const resolvedRootStyle = useResolvedStyle.default(elementStyles?.root || {});
  const {
    id,
    label,
    rightAddon,
    leftAddon,
    helperText,
    errors,
    invalid,
    required,
    hideError,
    isFloatedLabel,
    disabled,
    inputSize,
    localProps = {},
    defaultValue,
    value,
    onChange,
    attached,
    containerStyle,
    ...rest
  } = props;
  const { currentLanguage } = locale.useLanguage();
  const { resolveToken } = KitsThemeProvider_web.useKitsTheme();
  const primaryColor = resolveToken("primary");
  const { value: internalVal, emitChange } = useFormInputController_web.useFormInputController({
    value,
    defaultValue,
    onChange: (event) => {
      onChange?.(event.target.value);
    }
  });
  React.useEffect(() => {
  }, [value]);
  const Element = /* @__PURE__ */ jsxRuntime.jsx(
    calendar.Calendar,
    {
      ref,
      value: internalVal,
      onChange: (e) => emitChange(e.value),
      locale: currentLanguage,
      disabled,
      className: "w-full",
      inputStyle: { borderRadius: 0, border: "none", ...resolvedRootStyle || resolvedThemeStyle },
      pt: {
        day: ({ context }) => context?.selected ? {
          style: { backgroundColor: primaryColor, color: "white", borderRadius: "50%" }
        } : context?.today ? {
          style: { color: primaryColor, fontWeight: "bold" }
        } : void 0,
        previousButton: { style: { color: primaryColor } },
        nextButton: { style: { color: primaryColor } }
      },
      ...localProps
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
      helperText,
      errors,
      invalid,
      label,
      required,
      rightAddon,
      leftAddon,
      hideError,
      isFloatedLabel,
      inputSize,
      containerStyle,
      elementStyles,
      children: Element
    }
  );
};

exports.default = KitsInputCalendar;
//# sourceMappingURL=index.web.cjs.map
