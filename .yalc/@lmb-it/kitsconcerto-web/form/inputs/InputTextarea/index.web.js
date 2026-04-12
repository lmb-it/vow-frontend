import { jsx } from 'react/jsx-runtime';
import { InputTextarea } from 'primereact/inputtextarea';
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

const KitsInputTextarea = ({ ref, ...rawProps }) => {
  const { mergedProps: props, themeStyle, elementStyles } = useComponentDefaults("Textarea", rawProps);
  const resolvedThemeStyle = useResolvedStyle(themeStyle);
  const resolvedRootStyle = useResolvedStyle(elementStyles?.root || {});
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
  const { value: displayValue, emitChange } = useFormInputController({
    value,
    defaultValue,
    onChange
  });
  const { nativeProps } = useSeparator({
    ...rest,
    ...localProps
  });
  const Element = /* @__PURE__ */ jsx(
    InputTextarea,
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
      required: props.required,
      disabled,
      inputSize,
      containerStyle,
      elementStyles,
      children: Element
    }
  );
};

export { KitsInputTextarea as default };
//# sourceMappingURL=index.web.js.map
