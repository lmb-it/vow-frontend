'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var listbox = require('primereact/listbox');
var index_web = require('../../helpers/FormContainer/index.web.cjs');
require('react');
require('../../../contexts/DialogContext.cjs');
var useComponentDefaults = require('../../../hooks/useComponentDefaults.cjs');
var useResolvedStyle = require('../../../hooks/useResolvedStyle.cjs');
var useSelectBase = require('../hooks/useSelectBase.cjs');
var KitsThemeProvider_web = require('../../../contexts/Theme/KitsThemeProvider.web.cjs');

const KitsListBox = (rawProps) => {
  const { mergedProps: props, themeStyle, elementStyles } = useComponentDefaults.default("ListBox", rawProps);
  const resolvedThemeStyle = useResolvedStyle.default(themeStyle);
  const resolvedRootStyle = useResolvedStyle.default(elementStyles?.root || {});
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
  const { list, keys, onChange, selectedValue } = useSelectBase.useSelectBase();
  const { resolveToken } = KitsThemeProvider_web.useKitsTheme();
  const primaryColor = resolveToken("primary");
  const borderColor = resolveToken("border");
  const Element = /* @__PURE__ */ jsxRuntime.jsx(
    listbox.ListBox,
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
  return /* @__PURE__ */ jsxRuntime.jsx(
    index_web.default,
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

exports.default = KitsListBox;
//# sourceMappingURL=index.web.cjs.map
