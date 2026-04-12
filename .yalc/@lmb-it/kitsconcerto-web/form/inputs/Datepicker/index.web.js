import { jsx } from 'react/jsx-runtime';
import { useEffect } from 'react';
import { Calendar } from 'primereact/calendar';
import KitsContainer from '../../helpers/FormContainer/index.web.js';
import { useFormInputController } from '../../helpers/useFormInputController/useFormInputController.web.js';
import { useLanguage } from '../../../hooks/locale.js';
import '../../../contexts/DialogContext.js';
import useComponentDefaults from '../../../hooks/useComponentDefaults.js';
import useResolvedStyle from '../../../hooks/useResolvedStyle.js';
import { useKitsTheme } from '../../../contexts/Theme/KitsThemeProvider.web.js';

const KitsInputCalendar = ({ ref, ...rawProps }) => {
  const { mergedProps: props, themeStyle, elementStyles } = useComponentDefaults("Datepicker", rawProps, "Input");
  const resolvedThemeStyle = useResolvedStyle(themeStyle);
  const resolvedRootStyle = useResolvedStyle(elementStyles?.root || {});
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
  const { currentLanguage } = useLanguage();
  const { resolveToken } = useKitsTheme();
  const primaryColor = resolveToken("primary");
  const { value: internalVal, emitChange } = useFormInputController({
    value,
    defaultValue,
    onChange: (event) => {
      onChange?.(event.target.value);
    }
  });
  useEffect(() => {
  }, [value]);
  const Element = /* @__PURE__ */ jsx(
    Calendar,
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
  return /* @__PURE__ */ jsx(
    KitsContainer,
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

export { KitsInputCalendar as default };
//# sourceMappingURL=index.web.js.map
