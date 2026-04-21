import { jsx } from 'react/jsx-runtime';
import { useEffect, useCallback } from 'react';
import { MultiSelect } from 'primereact/multiselect';
import KitsContainer from '../../helpers/FormContainer/index.web.js';
import { AiOutlineClose } from 'react-icons/ai';
import { checkKeys } from '../helper.js';
import '../../../contexts/DialogContext.js';
import useComponentDefaults from '../../../hooks/useComponentDefaults.js';
import useResolvedStyle from '../../../hooks/useResolvedStyle.js';
import { useSelectBase } from '../hooks/useSelectBase.js';
import { useKitsTheme } from '../../../contexts/Theme/KitsThemeProvider.web.js';

const KitsMultiSelect = ({ className, ref, ...rawProps }) => {
  const { mergedProps: props, themeStyle, elementStyles } = useComponentDefaults("MultiSelect", rawProps, "Select");
  const resolvedThemeStyle = useResolvedStyle(themeStyle);
  const resolvedRootStyle = useResolvedStyle(elementStyles?.root || {});
  const {
    id,
    disabled,
    isFloatedLabel,
    rightAddon,
    leftAddon,
    required,
    errors,
    invalid,
    attached,
    placeholder,
    virtualScroll,
    label,
    inputSize,
    helperText,
    emptyFilterMessage,
    selectionLimit,
    localProps,
    hideError,
    withFilter,
    loading,
    showClear,
    valueMode,
    containerStyle
  } = props;
  const { list, keys, onChange, selectedValue, childrenKey, labelKey, valueKey } = useSelectBase();
  const { resolveToken } = useKitsTheme();
  const primaryColor = resolveToken("primary");
  const borderColor = resolveToken("border");
  useEffect(() => {
    checkKeys(list, labelKey, !childrenKey ? valueKey : void 0);
  }, [list]);
  const handleChange = useCallback((e) => {
    if (selectionLimit && Array.isArray(e?.value) && e.value.length > selectionLimit) {
      return;
    }
    onChange && onChange(e);
  }, [selectionLimit, onChange]);
  const Element = /* @__PURE__ */ jsx(
    MultiSelect,
    {
      emptyFilterMessage,
      value: selectedValue,
      onChange: handleChange,
      disabled,
      loading,
      showClear,
      options: typeof list !== "function" ? list : [],
      placeholder,
      ...keys,
      filter: withFilter !== false,
      clearIcon: /* @__PURE__ */ jsx(AiOutlineClose, {}),
      selectionLimit,
      virtualScrollerOptions: virtualScroll,
      display: valueMode === "comma" ? "comma" : localProps?.maxSelectedLabels ? void 0 : "chip",
      maxSelectedLabels: localProps?.maxSelectedLabels,
      className: "w-full",
      style: { borderRadius: 0, border: "none" },
      pt: {
        root: {
          style: {
            borderRadius: 0,
            border: "none",
            ...resolvedRootStyle,
            ...resolvedThemeStyle
          }
        },
        input: {
          style: {
            borderRadius: 0,
            border: "none",
            height: "100%"
          }
        },
        label: {
          style: {
            marginTop: 3
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
        } : void 0,
        token: {
          style: {
            backgroundColor: `color-mix(in srgb, ${primaryColor} 15%, transparent)`,
            color: primaryColor
          }
        },
        headerCheckbox: {
          box: ({ context }) => ({
            style: {
              borderColor: context?.checked ? primaryColor : borderColor,
              backgroundColor: context?.checked ? primaryColor : "transparent"
            }
          }),
          icon: {
            style: { color: "white" }
          }
        },
        checkbox: {
          box: ({ context }) => ({
            style: {
              borderColor: context?.checked ? primaryColor : borderColor,
              backgroundColor: context?.checked ? primaryColor : "transparent"
            }
          }),
          icon: {
            style: { color: "white" }
          }
        }
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

export { KitsMultiSelect as default };
//# sourceMappingURL=index.web.js.map
