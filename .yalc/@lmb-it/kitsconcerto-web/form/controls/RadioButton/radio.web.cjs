'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var useSelectionController = require('../../../hooks/useSelectionController.cjs');
require('../../../contexts/DialogContext.cjs');
var useComponentDefaults = require('../../../hooks/useComponentDefaults.cjs');
var radiobutton_web = require('./radiobutton.web.cjs');
var index = require('../../../layout/Flex/index.cjs');
var index_web = require('../../helpers/FormContainer/index.web.cjs');

const KitsRadio = ({
  ref,
  ...rawProps
}) => {
  const { mergedProps: props, themeStyle, elementStyles } = useComponentDefaults.default("Radio", rawProps, "Input");
  const {
    id,
    label,
    required,
    errors,
    hideError,
    isFloatedLabel,
    helperText,
    item,
    value,
    defaultValue,
    onChange,
    appearanceMode = "vertical",
    disabled,
    invalid,
    attached,
    containerStyle
  } = props;
  const items = React.useMemo(
    () => Array.isArray(item) ? item : [item],
    [item]
  );
  const lastToggledIndex = React.useRef(null);
  const controller = useSelectionController.default({
    mode: "single",
    value,
    defaultValue,
    onChange: (selectedValue) => {
      const index = lastToggledIndex.current;
      if (index == null) return;
      const currentItem = items[index];
      if (currentItem)
        onChange?.(selectedValue === currentItem?.value, {
          item: currentItem,
          index,
          value: currentItem.value
        });
    }
  });
  const direction = appearanceMode === "horizontal" ? "row" : "column";
  const Element = /* @__PURE__ */ jsxRuntime.jsx(index.default, { id: "radio-group" + id, w: "full", flexDirection: direction, gap: "1rem", flexWrap: "wrap", alignSelf: "center", children: items.map((it, index) => {
    const selected = controller.isSelected(it);
    return /* @__PURE__ */ jsxRuntime.jsx(
      radiobutton_web.default,
      {
        item: it,
        selected,
        disabled,
        isInvalid: invalid,
        onToggle: () => {
          lastToggledIndex.current = index;
          controller.onChange(it);
        }
      },
      String(it.value)
    );
  }) });
  if (attached) {
    return Element;
  }
  return /* @__PURE__ */ jsxRuntime.jsx(
    index_web.default,
    {
      id,
      helperText,
      isFloatedLabel,
      errors,
      invalid,
      label,
      hideError,
      required,
      disabled,
      bare: true,
      containerStyle,
      elementStyles,
      children: Element
    }
  );
};

exports.default = KitsRadio;
//# sourceMappingURL=radio.web.cjs.map
