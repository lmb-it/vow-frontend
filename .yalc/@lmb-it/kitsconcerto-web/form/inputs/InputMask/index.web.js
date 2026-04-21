import { jsx } from 'react/jsx-runtime';
import { InputMask } from 'primereact/inputmask';
import KitsContainer from '../../helpers/FormContainer/index.web.js';
import 'react-icons/fa';
import 'react-icons/ai';
import 'react-icons/io';
import '../../../packages/types/src/Components/Molecules/Form/FilePicker/types/filesTypes.js';
import 'yup';
import '../../../apps/web/src/Factory/ResponsiveElement.js';
import useSeparator from '../../../apps/web/src/Factory/useSeparator.js';
import { useFormInputController } from '../../helpers/useFormInputController/useFormInputController.web.js';
import 'react';
import '../../../contexts/DialogContext.js';
import useComponentDefaults from '../../../hooks/useComponentDefaults.js';
import useResolvedStyle from '../../../hooks/useResolvedStyle.js';

const KitsInputMask = ({ ref, ...rawProps }) => {
  const { mergedProps: props, themeStyle, elementStyles } = useComponentDefaults("InputMask", rawProps, "Input");
  const resolvedThemeStyle = useResolvedStyle(themeStyle);
  const resolvedRootStyle = useResolvedStyle(elementStyles?.root || {});
  const {
    id,
    label,
    required,
    value,
    defaultValue,
    errors,
    hideError,
    invalid,
    isFloatedLabel,
    disabled,
    attached,
    helperText,
    inputSize,
    onChange,
    localProps,
    leftAddon,
    rightAddon,
    containerStyle,
    ...rest
  } = props;
  const { value: displayValue, emitChange } = useFormInputController({
    value,
    defaultValue,
    onChange
  });
  const { nativeProps } = useSeparator(rest);
  const className = `w-full ${nativeProps.className ?? ""}`;
  if (attached) {
    return /* @__PURE__ */ jsx(
      InputMask,
      {
        ref,
        disabled,
        value: displayValue ?? "",
        className,
        width: "100%",
        onChange: (e) => {
          const next = e.value ?? e.target?.value ?? "";
          emitChange(next);
        },
        ...nativeProps,
        ...localProps,
        style: { borderRadius: 0, ...resolvedRootStyle || resolvedThemeStyle }
      }
    );
  }
  return /* @__PURE__ */ jsx(
    KitsContainer,
    {
      id,
      helperText,
      isFloatedLabel,
      errors,
      invalid,
      label,
      hideError,
      required,
      disabled,
      inputSize,
      leftAddon,
      rightAddon,
      containerStyle,
      elementStyles,
      children: /* @__PURE__ */ jsx(
        InputMask,
        {
          ref,
          disabled,
          value: displayValue ?? "",
          className,
          onChange: (e) => {
            const next = e.value ?? e.target?.value ?? "";
            emitChange(next);
          },
          ...nativeProps,
          ...localProps,
          style: { borderRadius: 0, ...resolvedRootStyle || resolvedThemeStyle }
        }
      )
    }
  );
};

export { KitsInputMask as default };
//# sourceMappingURL=index.web.js.map
