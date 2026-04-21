'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
require('react-icons/fa');
require('react-icons/ai');
require('react-icons/io');
require('../../../packages/types/src/Components/Molecules/Form/FilePicker/types/filesTypes.cjs');
require('yup');
require('../../../apps/web/src/Factory/ResponsiveElement.cjs');
var useSeparator = require('../../../apps/web/src/Factory/useSeparator.cjs');
var usePhoneInput = require('./usePhoneInput.cjs');
require('../../../contexts/DialogContext.cjs');
var useComponentDefaults = require('../../../hooks/useComponentDefaults.cjs');
var useResolvedStyle = require('../../../hooks/useResolvedStyle.cjs');
var index_web = require('../../../primitives/Image/index.web.cjs');
var index_web$1 = require('../../../primitives/Icon/index.web.cjs');
var index_web$2 = require('../InputText/index.web.cjs');
var index_web$3 = require('../../helpers/FormContainer/index.web.cjs');
require('axios');
require('../../selects/SelectContext.cjs');

const KitsPhoneComponent = ({
  ref,
  ...rawProps
}) => {
  const { mergedProps: props, themeStyle, elementStyles } = useComponentDefaults.default("PhoneInput", rawProps, "Input");
  const resolvedThemeStyle = useResolvedStyle.default(themeStyle);
  const resolvedRootStyle = useResolvedStyle.default(elementStyles?.root || {});
  const {
    isWithCountryCode,
    label,
    value,
    placeholder,
    onChange,
    invalid,
    disabled,
    required,
    errors,
    hideError,
    id,
    defaultCountry,
    inputSize,
    isFloatedLabel,
    leftAddon,
    rightAddon,
    includedCountries,
    excludedCountries,
    outputFormat = "string",
    attached,
    containerStyle,
    ...rest
  } = props;
  const { nativeProps } = useSeparator.default(rest);
  const {
    displayValue,
    e164Value,
    objectValue,
    countryFlagUrl,
    countryISO,
    handleChange
  } = usePhoneInput.usePhoneInput({
    value,
    onChange,
    outputFormat,
    isWithCountryCode,
    defaultCountry,
    includedCountries,
    excludedCountries
  });
  React.useImperativeHandle(ref, () => ({
    value: outputFormat === "object" ? objectValue ?? e164Value : e164Value,
    setValue: (v) => handleChange(typeof v === "string" ? v : "")
  }));
  const flagAddon = React.useMemo(() => {
    if (!isWithCountryCode) return leftAddon;
    if (countryFlagUrl) {
      return /* @__PURE__ */ jsxRuntime.jsx(
        index_web.default,
        {
          src: countryFlagUrl,
          alt: countryISO ?? "",
          w: 23,
          h: 23,
          imageStyle: { width: "100%", height: "100%", objectFit: "contain", borderRadius: 2 }
        }
      );
    }
    return /* @__PURE__ */ jsxRuntime.jsx(index_web$1.Icon, { name: "pi pi-phone", size: "2xs" });
  }, [isWithCountryCode, countryFlagUrl, countryISO, leftAddon]);
  const Element = /* @__PURE__ */ jsxRuntime.jsx(
    index_web$2.default,
    {
      id: `${id}-phone`,
      value: displayValue,
      onChange: (e) => handleChange(e.target.value),
      invalid,
      disabled,
      className: nativeProps.className,
      placeholder: placeholder ?? (isWithCountryCode ? "+1 (555) 123-4567" : ""),
      attached: true,
      localProps: {
        keyfilter: /[\d\s\-+()]/,
        style: resolvedRootStyle || resolvedThemeStyle
      }
    }
  );
  if (attached) {
    return Element;
  }
  return /* @__PURE__ */ jsxRuntime.jsx(
    index_web$3.default,
    {
      id,
      inputSize,
      isFloatedLabel,
      rightAddon,
      leftAddon: flagAddon,
      errors,
      required,
      hideError,
      invalid,
      label,
      containerStyle,
      elementStyles,
      children: Element
    }
  );
};

exports.default = KitsPhoneComponent;
//# sourceMappingURL=index.web.cjs.map
