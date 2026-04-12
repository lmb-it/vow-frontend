import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import { Password } from 'primereact/password';
import KitsContainer from '../../helpers/FormContainer/index.web.js';
import 'react-icons/fa';
import 'react-icons/ai';
import 'react-icons/io';
import '../../../packages/types/src/Components/Molecules/Form/FilePicker/types/filesTypes.js';
import 'yup';
import '../../../apps/web/src/Factory/ResponsiveElement.js';
import useSeparator from '../../../apps/web/src/Factory/useSeparator.js';
import 'react';
import { useLanguage } from '../../../hooks/locale.js';
import '../../../contexts/DialogContext.js';
import useComponentDefaults from '../../../hooks/useComponentDefaults.js';
import useResolvedStyle from '../../../hooks/useResolvedStyle.js';
import { useFormInputController } from '../../helpers/useFormInputController/useFormInputController.web.js';
import Auth0PasswordStrength from './Strengthen.web.js';

const KitsInputPassword = ({ ref, ...rawProps }) => {
  const { mergedProps: props, themeStyle, elementStyles } = useComponentDefaults("InputPassword", rawProps, "Input");
  const resolvedThemeStyle = useResolvedStyle(themeStyle);
  const resolvedRootStyle = useResolvedStyle(elementStyles?.root || {});
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
  const { isRTL } = useLanguage();
  const { value: displayValue, emitChange } = useFormInputController({
    value,
    defaultValue,
    onChange
  });
  useSeparator(props);
  const dirClass = isRTL && !ignoreDirection ? "text-right" : "";
  const Element = /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      Password,
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
    showStrengthProgress && schema && /* @__PURE__ */ jsx(
      Auth0PasswordStrength,
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
  return /* @__PURE__ */ jsx(
    KitsContainer,
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

export { KitsInputPassword as default };
//# sourceMappingURL=index.web.js.map
