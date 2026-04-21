import { jsx } from 'react/jsx-runtime';
import { InputNumber } from 'primereact/inputnumber';
import KitsContainer from '../../helpers/FormContainer/index.web.js';
import 'react-icons/fa';
import 'react-icons/ai';
import 'react-icons/io';
import '../../../packages/types/src/Components/Molecules/Form/FilePicker/types/filesTypes.js';
import 'yup';
import '../../../apps/web/src/Factory/ResponsiveElement.js';
import useSeparator from '../../../apps/web/src/Factory/useSeparator.js';
import useComponentDefaults from '../../../hooks/useComponentDefaults.js';
import 'react';
import '../../../contexts/DialogContext.js';
import useResolvedStyle from '../../../hooks/useResolvedStyle.js';
import { useKitsTheme } from '../../../contexts/Theme/KitsThemeProvider.web.js';
import { Icon } from '../../../primitives/Icon/index.web.js';

const KitsInputNumber = ({ ref, ...rawProps }) => {
  const { mergedProps: props, themeStyle, elementStyles } = useComponentDefaults("Input", rawProps);
  const resolvedThemeStyle = useResolvedStyle(themeStyle);
  const resolvedRootStyle = useResolvedStyle(elementStyles?.root || {});
  const { resolveToken } = useKitsTheme();
  const primaryColor = resolveToken("brand.500");
  resolveToken("border");
  const {
    id,
    label,
    required,
    value,
    errors,
    hideError,
    invalid,
    isFloatedLabel,
    disabled,
    helperText,
    inputSize,
    localProps,
    onChange,
    attached,
    containerStyle,
    ...rest
  } = props;
  const { nativeProps } = useSeparator(rest);
  const Element = /* @__PURE__ */ jsx(
    InputNumber,
    {
      ref,
      inputStyle: { borderRadius: 0, border: "none", ...resolvedRootStyle || resolvedThemeStyle },
      value,
      disabled,
      ...nativeProps,
      ...localProps,
      onValueChange: (e) => onChange?.(e),
      incrementButtonIcon: /* @__PURE__ */ jsx(Icon, { name: "chevron-up", size: "xl" }),
      decrementButtonIcon: /* @__PURE__ */ jsx(Icon, { name: "chevron-down", size: "xl" }),
      pt: {
        decrementButton: {
          style: {
            backgroundColor: primaryColor,
            border: "none"
          }
        },
        incrementButton: {
          style: {
            backgroundColor: primaryColor,
            border: "none"
          }
        }
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
      helperText,
      isFloatedLabel,
      errors,
      invalid,
      label,
      hideError,
      required,
      disabled,
      inputSize,
      containerStyle,
      elementStyles,
      children: Element
    }
  );
};

export { KitsInputNumber as default };
//# sourceMappingURL=index.web.js.map
