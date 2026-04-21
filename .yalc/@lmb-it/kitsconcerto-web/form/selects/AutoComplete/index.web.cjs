'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var autocomplete = require('primereact/autocomplete');
var index_web = require('../../helpers/FormContainer/index.web.cjs');
require('react-icons/fa');
require('react-icons/ai');
require('react-icons/io');
require('../../../packages/types/src/Components/Molecules/Form/FilePicker/types/filesTypes.cjs');
require('yup');
require('../../../apps/web/src/Factory/ResponsiveElement.cjs');
var useSeparator = require('../../../apps/web/src/Factory/useSeparator.cjs');
require('react');
require('../../../contexts/DialogContext.cjs');
var useComponentDefaults = require('../../../hooks/useComponentDefaults.cjs');
var useResolvedStyle = require('../../../hooks/useResolvedStyle.cjs');
var useAutoCompleteLogic = require('../hooks/useAutoCompleteLogic.cjs');
var KitsThemeProvider_web = require('../../../contexts/Theme/KitsThemeProvider.web.cjs');

const KitsAutoComplete = ({ ref, ...rawProps }) => {
  const { mergedProps: props, themeStyle, elementStyles } = useComponentDefaults.default("AutoComplete", rawProps, "Input");
  const resolvedThemeStyle = useResolvedStyle.default(themeStyle);
  const resolvedRootStyle = useResolvedStyle.default(elementStyles?.root || {});
  const {
    id,
    rightAddon,
    leftAddon,
    errors,
    invalid,
    label,
    hideError,
    disabled,
    required,
    isFloatedLabel,
    inputSize = "md",
    forceSelection,
    completeMethod,
    helperText,
    withArrow,
    placeholder,
    isMultiple,
    localProps,
    delay,
    minLength,
    selectionLimit,
    showEmptyMessage,
    attached,
    containerStyle
  } = props;
  const { nativeProps } = useSeparator.default(props);
  const { resolveToken } = KitsThemeProvider_web.useKitsTheme();
  const primaryColor = resolveToken("primary");
  resolveToken("border");
  const {
    inputValue,
    setInputValue,
    filteredList,
    search,
    handleOnChange,
    list,
    childrenKey,
    labelKey
  } = useAutoCompleteLogic.useAutoCompleteLogic({ isMultiple, forceSelection, completeMethod, ref });
  const Element = /* @__PURE__ */ jsxRuntime.jsx(
    autocomplete.AutoComplete,
    {
      className: `w-full ${nativeProps.className ?? ""}`,
      disabled,
      placeholder,
      value: inputValue,
      forceSelection,
      suggestions: Array.isArray(filteredList) ? filteredList : list,
      completeMethod: search,
      dropdown: withArrow,
      multiple: isMultiple,
      field: labelKey,
      showEmptyMessage: showEmptyMessage ?? true,
      emptyMessage: "No results found",
      ...delay != null ? { delay } : {},
      ...minLength != null ? { minLength } : {},
      ...selectionLimit != null ? { selectionLimit } : {},
      inputStyle: { width: "100%", borderRadius: 0, border: "none", backgroundColor: "transparent" },
      style: { flexDirection: "row", borderRadius: 0, border: "none", width: "100%", backgroundColor: "transparent", ...resolvedRootStyle || resolvedThemeStyle },
      pt: {
        container: {
          style: {
            backgroundColor: "transparent",
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
        }
      },
      optionGroupChildren: childrenKey ?? void 0,
      optionGroupLabel: childrenKey ? labelKey : void 0,
      onChange: (event) => {
        setInputValue(event.value);
        handleOnChange(event);
      },
      onSelect: (event) => {
        handleOnChange(
          { originalEvent: event.originalEvent, value: event.value }
        );
      },
      "aria-label": "List",
      ...localProps ? localProps : {},
      dropdownAriaLabel: "Select Item"
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
      hideError,
      rightAddon,
      leftAddon,
      required,
      helperText,
      errors,
      invalid,
      label,
      containerStyle,
      elementStyles,
      children: Element
    }
  );
};

exports.default = KitsAutoComplete;
//# sourceMappingURL=index.web.cjs.map
