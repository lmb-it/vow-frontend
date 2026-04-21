import { jsx } from 'react/jsx-runtime';
import { Dropdown } from 'primereact/dropdown';
import { useSelectBase } from '../hooks/useSelectBase.js';
import 'react';
import '../../../contexts/DialogContext.js';
import useComponentDefaults from '../../../hooks/useComponentDefaults.js';
import useResolvedStyle from '../../../hooks/useResolvedStyle.js';
import { useKitsTheme } from '../../../contexts/Theme/KitsThemeProvider.web.js';
import KitsContainer from '../../helpers/FormContainer/index.web.js';

const KitsDropdown = ({ className, ref, ...rawProps }) => {
  const { mergedProps: props, themeStyle, elementStyles } = useComponentDefaults("DropdownSelect", rawProps, "Select");
  const resolvedThemeStyle = useResolvedStyle(themeStyle);
  const resolvedRootStyle = useResolvedStyle(elementStyles?.root || {});
  const {
    id,
    rightAddon,
    leftAddon,
    errors,
    invalid,
    disabled,
    required,
    label,
    localProps,
    helperText,
    isFloatedLabel,
    withFilter,
    attached,
    inputSize,
    placeholder,
    hideError,
    virtualScroll,
    emptyFilterMessage,
    filterBy,
    loading,
    showClear,
    containerStyle
  } = props;
  const { list, keys, onChange, selectedValue } = useSelectBase();
  const { resolveToken } = useKitsTheme();
  const primaryColor = resolveToken("primary");
  resolveToken("border");
  const Element = /* @__PURE__ */ jsx(
    Dropdown,
    {
      emptyFilterMessage,
      value: selectedValue,
      placeholder,
      options: Array.isArray(list) ? list : [],
      disabled,
      loading,
      showClear: showClear ?? (!required && selectedValue != null),
      style: { width: "auto", height: attached ? "35px" : "100%", borderRadius: 0, ...resolvedRootStyle || resolvedThemeStyle },
      panelStyle: { width: "auto" },
      onChange,
      ...keys,
      filter: !!withFilter,
      filterBy: filterBy ?? "label",
      virtualScrollerOptions: virtualScroll,
      className: className ?? "",
      pt: {
        root: {
          style: {
            borderRadius: 0,
            border: "none",
            alignItems: "center"
          }
        },
        filterInput: {
          style: {
            borderRadius: 0,
            border: "none"
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

export { KitsDropdown as default };
//# sourceMappingURL=index.web.js.map
