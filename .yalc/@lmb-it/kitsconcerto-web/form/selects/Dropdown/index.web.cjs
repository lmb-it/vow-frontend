'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var dropdown = require('primereact/dropdown');
var useSelectBase = require('../hooks/useSelectBase.cjs');
require('react');
require('../../../contexts/DialogContext.cjs');
var useComponentDefaults = require('../../../hooks/useComponentDefaults.cjs');
var useResolvedStyle = require('../../../hooks/useResolvedStyle.cjs');
var KitsThemeProvider_web = require('../../../contexts/Theme/KitsThemeProvider.web.cjs');
var index_web = require('../../helpers/FormContainer/index.web.cjs');

const KitsDropdown = ({ className, ref, ...rawProps }) => {
  const { mergedProps: props, themeStyle, elementStyles } = useComponentDefaults.default("DropdownSelect", rawProps, "Select");
  const resolvedThemeStyle = useResolvedStyle.default(themeStyle);
  const resolvedRootStyle = useResolvedStyle.default(elementStyles?.root || {});
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
  const { list, keys, onChange, selectedValue } = useSelectBase.useSelectBase();
  const { resolveToken } = KitsThemeProvider_web.useKitsTheme();
  const primaryColor = resolveToken("primary");
  resolveToken("border");
  const Element = /* @__PURE__ */ jsxRuntime.jsx(
    dropdown.Dropdown,
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

exports.default = KitsDropdown;
//# sourceMappingURL=index.web.cjs.map
