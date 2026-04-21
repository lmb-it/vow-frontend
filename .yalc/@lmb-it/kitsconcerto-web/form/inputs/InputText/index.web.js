import { jsx } from 'react/jsx-runtime';
import { InputText } from 'primereact/inputtext';
import KitsContainer from '../../helpers/FormContainer/index.web.js';
import 'react';
import { useLanguage } from '../../../hooks/locale.js';
import '../../../contexts/DialogContext.js';
import useComponentDefaults from '../../../hooks/useComponentDefaults.js';
import useResolvedStyle from '../../../hooks/useResolvedStyle.js';
import { ClHelper } from '../../helpers/Functions.js';
import 'react-icons/fa';
import 'react-icons/ai';
import 'react-icons/io';
import '../../../packages/types/src/Components/Molecules/Form/FilePicker/types/filesTypes.js';
import 'yup';
import '../../../apps/web/src/Factory/ResponsiveElement.js';
import useSeparator from '../../../apps/web/src/Factory/useSeparator.js';
import { useFormInputController } from '../../helpers/useFormInputController/useFormInputController.web.js';

const KitsInputText = ({ ref, ...rawProps }) => {
  const { mergedProps: props, themeStyle, elementStyles } = useComponentDefaults("InputText", rawProps, "Input");
  useResolvedStyle(themeStyle);
  const resolvedRootStyle = useResolvedStyle(elementStyles?.root || {});
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
  const { isRTL } = useLanguage();
  const { value: displayValue, emitChange } = useFormInputController({
    value,
    defaultValue,
    onChange
  });
  const ClState = ClHelper({
    inputSize: inputSize ?? "",
    isChecked: !!isChecked,
    isInvalid: !!invalid,
    isDisabled: !!disabled
  });
  const { nativeProps } = useSeparator(rest);
  const dirClass = isRTL && !ignoreDirection ? "text-right" : "";
  const Element = /* @__PURE__ */ jsx(
    InputText,
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
  return /* @__PURE__ */ jsx(
    KitsContainer,
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

export { KitsInputText as default };
//# sourceMappingURL=index.web.js.map
