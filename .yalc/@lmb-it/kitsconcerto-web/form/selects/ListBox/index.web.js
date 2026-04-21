import { jsx } from 'react/jsx-runtime';
import { ListBox } from 'primereact/listbox';
import KitsContainer from '../../helpers/FormContainer/index.web.js';
import 'react';
import '../../../contexts/DialogContext.js';
import useComponentDefaults from '../../../hooks/useComponentDefaults.js';
import useResolvedStyle from '../../../hooks/useResolvedStyle.js';
import { useSelectBase } from '../hooks/useSelectBase.js';
import { useKitsTheme } from '../../../contexts/Theme/KitsThemeProvider.web.js';

const KitsListBox = (rawProps) => {
  const { mergedProps: props, themeStyle, elementStyles } = useComponentDefaults("ListBox", rawProps);
  const resolvedThemeStyle = useResolvedStyle(themeStyle);
  const resolvedRootStyle = useResolvedStyle(elementStyles?.root || {});
  const {
    id,
    label,
    disabled,
    invalid,
    errors,
    helperText,
    inputSize = "md",
    withFilter,
    loading,
    virtualScroll,
    localProps,
    isMultiple,
    filterBy,
    hideError,
    attached,
    containerStyle
  } = props;
  const { list, keys, onChange, selectedValue } = useSelectBase();
  const { resolveToken } = useKitsTheme();
  const primaryColor = resolveToken("primary");
  const borderColor = resolveToken("border");
  const Element = /* @__PURE__ */ jsx(
    ListBox,
    {
      id,
      value: selectedValue,
      options: list,
      onChange: (e) => onChange({ target: { value: e.value } }, e.value),
      ...keys,
      disabled: disabled || loading,
      filter: withFilter,
      filterBy: filterBy ?? "label",
      virtualScrollerOptions: virtualScroll,
      multiple: isMultiple,
      className: "w-full",
      style: { borderRadius: 0, border: "none", ...resolvedRootStyle || resolvedThemeStyle },
      listStyle: { maxHeight: "250px" },
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
      label,
      invalid: !!invalid,
      hideError,
      helperText,
      errors,
      inputSize,
      containerStyle,
      elementStyles,
      children: Element
    }
  );
};

export { KitsListBox as default };
//# sourceMappingURL=index.web.js.map
