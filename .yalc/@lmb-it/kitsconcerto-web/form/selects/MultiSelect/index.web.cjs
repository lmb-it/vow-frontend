'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var multiselect = require('primereact/multiselect');
var index_web = require('../../helpers/FormContainer/index.web.cjs');
var ai = require('react-icons/ai');
var helper = require('../helper.cjs');
require('../../../contexts/DialogContext.cjs');
var useComponentDefaults = require('../../../hooks/useComponentDefaults.cjs');
var useResolvedStyle = require('../../../hooks/useResolvedStyle.cjs');
var useSelectBase = require('../hooks/useSelectBase.cjs');
var KitsThemeProvider_web = require('../../../contexts/Theme/KitsThemeProvider.web.cjs');

const KitsMultiSelect = ({ className, ref, ...rawProps }) => {
  const { mergedProps: props, themeStyle, elementStyles } = useComponentDefaults.default("MultiSelect", rawProps, "Select");
  const resolvedThemeStyle = useResolvedStyle.default(themeStyle);
  const resolvedRootStyle = useResolvedStyle.default(elementStyles?.root || {});
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
  const { list, keys, onChange, selectedValue, childrenKey, labelKey, valueKey } = useSelectBase.useSelectBase();
  const { resolveToken } = KitsThemeProvider_web.useKitsTheme();
  const primaryColor = resolveToken("primary");
  const borderColor = resolveToken("border");
  React.useEffect(() => {
    helper.checkKeys(list, labelKey, !childrenKey ? valueKey : void 0);
  }, [list]);
  const handleChange = React.useCallback((e) => {
    if (selectionLimit && Array.isArray(e?.value) && e.value.length > selectionLimit) {
      return;
    }
    onChange && onChange(e);
  }, [selectionLimit, onChange]);
  const Element = /* @__PURE__ */ jsxRuntime.jsx(
    multiselect.MultiSelect,
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
      clearIcon: /* @__PURE__ */ jsxRuntime.jsx(ai.AiOutlineClose, {}),
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
  return /* @__PURE__ */ jsxRuntime.jsx(
    index_web.default,
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

exports.default = KitsMultiSelect;
//# sourceMappingURL=index.web.cjs.map
