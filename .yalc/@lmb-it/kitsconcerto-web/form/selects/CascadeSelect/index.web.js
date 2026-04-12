import { jsx } from 'react/jsx-runtime';
import KitsContainer from '../../helpers/FormContainer/index.web.js';
import { CascadeSelect } from 'primereact/cascadeselect';
import 'react';
import '../../../contexts/DialogContext.js';
import useComponentDefaults from '../../../hooks/useComponentDefaults.js';
import useResolvedStyle from '../../../hooks/useResolvedStyle.js';
import { useSelectBase } from '../hooks/useSelectBase.js';
import { useKitsTheme } from '../../../contexts/Theme/KitsThemeProvider.web.js';

const KitsCascadeSelect = ({ className, ref, ...rawProps }) => {
  const { mergedProps: props, themeStyle, elementStyles } = useComponentDefaults("CascadeSelect", rawProps, "Input");
  const resolvedThemeStyle = useResolvedStyle(themeStyle);
  const resolvedRootStyle = useResolvedStyle(elementStyles?.root || {});
  const {
    rightAddon,
    leftAddon,
    errors,
    invalid,
    required,
    label,
    isFloatedLabel,
    id,
    localProps,
    disabled,
    inputSize,
    placeholder,
    helperText,
    attached,
    hideError,
    loading,
    withFilter,
    containerStyle
  } = props;
  const { list, keys, onChange, selectedValue } = useSelectBase();
  const { resolveToken } = useKitsTheme();
  const primaryColor = resolveToken("primary");
  const borderColor = resolveToken("border");
  const Element = /* @__PURE__ */ jsx(
    CascadeSelect,
    {
      value: selectedValue,
      options: Array.isArray(list) ? list : [],
      optionLabel: keys.optionLabel,
      optionGroupLabel: keys.optionGroupLabel,
      optionGroupChildren: keys.optionGroupChildren ? [keys.optionGroupChildren] : void 0,
      disabled,
      loading,
      placeholder,
      onChange: (e) => onChange({ target: { value: e.value } }, e.value),
      className: "w-full",
      style: { minWidth: "14rem", borderRadius: 0, ...resolvedRootStyle || resolvedThemeStyle },
      pt: {
        root: {
          style: {
            borderColor
          }
        },
        item: ({ context }) => context?.selected ? {
          style: { backgroundColor: primaryColor, color: "white" }
        } : context?.focused ? {
          style: { backgroundColor: `color-mix(in srgb, ${primaryColor} 12%, transparent)` }
        } : void 0
      },
      ...localProps ? localProps : {}
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
      leftAddon,
      required,
      hideError,
      errors,
      helperText,
      invalid,
      label,
      containerStyle,
      elementStyles,
      children: Element
    }
  );
};

export { KitsCascadeSelect as default };
//# sourceMappingURL=index.web.js.map
