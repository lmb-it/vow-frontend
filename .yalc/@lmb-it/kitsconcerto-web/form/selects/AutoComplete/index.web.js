import { jsx } from 'react/jsx-runtime';
import { AutoComplete } from 'primereact/autocomplete';
import KitsContainer from '../../helpers/FormContainer/index.web.js';
import 'react-icons/fa';
import 'react-icons/ai';
import 'react-icons/io';
import '../../../packages/types/src/Components/Molecules/Form/FilePicker/types/filesTypes.js';
import 'yup';
import '../../../apps/web/src/Factory/ResponsiveElement.js';
import useSeparator from '../../../apps/web/src/Factory/useSeparator.js';
import 'react';
import '../../../contexts/DialogContext.js';
import useComponentDefaults from '../../../hooks/useComponentDefaults.js';
import useResolvedStyle from '../../../hooks/useResolvedStyle.js';
import { useAutoCompleteLogic } from '../hooks/useAutoCompleteLogic.js';
import { useKitsTheme } from '../../../contexts/Theme/KitsThemeProvider.web.js';

const KitsAutoComplete = ({ ref, ...rawProps }) => {
  const { mergedProps: props, themeStyle, elementStyles } = useComponentDefaults("AutoComplete", rawProps, "Input");
  const resolvedThemeStyle = useResolvedStyle(themeStyle);
  const resolvedRootStyle = useResolvedStyle(elementStyles?.root || {});
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
  const { nativeProps } = useSeparator(props);
  const { resolveToken } = useKitsTheme();
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
  } = useAutoCompleteLogic({ isMultiple, forceSelection, completeMethod, ref });
  const Element = /* @__PURE__ */ jsx(
    AutoComplete,
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
  return /* @__PURE__ */ jsx(
    KitsContainer,
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

export { KitsAutoComplete as default };
//# sourceMappingURL=index.web.js.map
