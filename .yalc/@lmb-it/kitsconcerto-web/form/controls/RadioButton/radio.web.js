import { jsx } from 'react/jsx-runtime';
import { useMemo, useRef } from 'react';
import useSelectionController from '../../../hooks/useSelectionController.js';
import '../../../contexts/DialogContext.js';
import useComponentDefaults from '../../../hooks/useComponentDefaults.js';
import RadioButton from './radiobutton.web.js';
import Flex from '../../../layout/Flex/index.js';
import KitsContainer from '../../helpers/FormContainer/index.web.js';

const KitsRadio = ({
  ref,
  ...rawProps
}) => {
  const { mergedProps: props, themeStyle, elementStyles } = useComponentDefaults("Radio", rawProps, "Input");
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
  const items = useMemo(
    () => Array.isArray(item) ? item : [item],
    [item]
  );
  const lastToggledIndex = useRef(null);
  const controller = useSelectionController({
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
  const Element = /* @__PURE__ */ jsx(Flex, { id: "radio-group" + id, w: "full", flexDirection: direction, gap: "1rem", flexWrap: "wrap", alignSelf: "center", children: items.map((it, index) => {
    const selected = controller.isSelected(it);
    return /* @__PURE__ */ jsx(
      RadioButton,
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
  return /* @__PURE__ */ jsx(
    KitsContainer,
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

export { KitsRadio as default };
//# sourceMappingURL=radio.web.js.map
