'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var index_web = require('../../helpers/FormContainer/index.web.cjs');
var cascadeselect = require('primereact/cascadeselect');
require('react');
require('../../../contexts/DialogContext.cjs');
var useComponentDefaults = require('../../../hooks/useComponentDefaults.cjs');
var useResolvedStyle = require('../../../hooks/useResolvedStyle.cjs');
var useSelectBase = require('../hooks/useSelectBase.cjs');
var KitsThemeProvider_web = require('../../../contexts/Theme/KitsThemeProvider.web.cjs');

const KitsCascadeSelect = ({ className, ref, ...rawProps }) => {
  const { mergedProps: props, themeStyle, elementStyles } = useComponentDefaults.default("CascadeSelect", rawProps, "Input");
  const resolvedThemeStyle = useResolvedStyle.default(themeStyle);
  const resolvedRootStyle = useResolvedStyle.default(elementStyles?.root || {});
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
  const { list, keys, onChange, selectedValue } = useSelectBase.useSelectBase();
  const { resolveToken } = KitsThemeProvider_web.useKitsTheme();
  const primaryColor = resolveToken("primary");
  const borderColor = resolveToken("border");
  const Element = /* @__PURE__ */ jsxRuntime.jsx(
    cascadeselect.CascadeSelect,
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

exports.default = KitsCascadeSelect;
//# sourceMappingURL=index.web.cjs.map
