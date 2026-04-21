import { jsx } from 'react/jsx-runtime';
import { ColorPicker } from 'primereact/colorpicker';
import KitsContainer from '../../helpers/FormContainer/index.web.js';
import { useFormInputController } from '../../helpers/useFormInputController/useFormInputController.web.js';
import 'react';
import '../../../contexts/DialogContext.js';
import useComponentDefaults from '../../../hooks/useComponentDefaults.js';
import useResolvedStyle from '../../../hooks/useResolvedStyle.js';

const KitsInputColorPicker = ({ ref, ...rawProps }) => {
  const { mergedProps: props, themeStyle, elementStyles } = useComponentDefaults("ColorPicker", rawProps, "Input");
  const resolvedThemeStyle = useResolvedStyle(themeStyle);
  const resolvedRootStyle = useResolvedStyle(elementStyles?.root || {});
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
  const { value: displayValue, emitChange } = useFormInputController({
    value,
    defaultValue,
    onChange
  });
  const Element = /* @__PURE__ */ jsx(
    ColorPicker,
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
  return /* @__PURE__ */ jsx(
    KitsContainer,
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

export { KitsInputColorPicker as default };
//# sourceMappingURL=index.web.js.map
