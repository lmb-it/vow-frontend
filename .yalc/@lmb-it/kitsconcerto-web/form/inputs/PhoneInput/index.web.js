import { jsx } from 'react/jsx-runtime';
import { useImperativeHandle, useMemo } from 'react';
import 'react-icons/fa';
import 'react-icons/ai';
import 'react-icons/io';
import '../../../packages/types/src/Components/Molecules/Form/FilePicker/types/filesTypes.js';
import 'yup';
import '../../../apps/web/src/Factory/ResponsiveElement.js';
import useSeparator from '../../../apps/web/src/Factory/useSeparator.js';
import { usePhoneInput } from './usePhoneInput.js';
import '../../../contexts/DialogContext.js';
import useComponentDefaults from '../../../hooks/useComponentDefaults.js';
import useResolvedStyle from '../../../hooks/useResolvedStyle.js';
import Image from '../../../primitives/Image/index.web.js';
import { Icon } from '../../../primitives/Icon/index.web.js';
import KitsInputText from '../InputText/index.web.js';
import KitsContainer from '../../helpers/FormContainer/index.web.js';
import 'axios';
import '../../selects/SelectContext.js';

const KitsPhoneComponent = ({
  ref,
  ...rawProps
}) => {
  const { mergedProps: props, themeStyle, elementStyles } = useComponentDefaults("PhoneInput", rawProps, "Input");
  const resolvedThemeStyle = useResolvedStyle(themeStyle);
  const resolvedRootStyle = useResolvedStyle(elementStyles?.root || {});
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
  const { nativeProps } = useSeparator(rest);
  const {
    displayValue,
    e164Value,
    objectValue,
    countryFlagUrl,
    countryISO,
    handleChange
  } = usePhoneInput({
    value,
    onChange,
    outputFormat,
    isWithCountryCode,
    defaultCountry,
    includedCountries,
    excludedCountries
  });
  useImperativeHandle(ref, () => ({
    value: outputFormat === "object" ? objectValue ?? e164Value : e164Value,
    setValue: (v) => handleChange(typeof v === "string" ? v : "")
  }));
  const flagAddon = useMemo(() => {
    if (!isWithCountryCode) return leftAddon;
    if (countryFlagUrl) {
      return /* @__PURE__ */ jsx(
        Image,
        {
          src: countryFlagUrl,
          alt: countryISO ?? "",
          w: 23,
          h: 23,
          imageStyle: { width: "100%", height: "100%", objectFit: "contain", borderRadius: 2 }
        }
      );
    }
    return /* @__PURE__ */ jsx(Icon, { name: "pi pi-phone", size: "2xs" });
  }, [isWithCountryCode, countryFlagUrl, countryISO, leftAddon]);
  const Element = /* @__PURE__ */ jsx(
    KitsInputText,
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
  return /* @__PURE__ */ jsx(
    KitsContainer,
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

export { KitsPhoneComponent as default };
//# sourceMappingURL=index.web.js.map
