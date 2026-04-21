import { jsx } from 'react/jsx-runtime';
import { useMemo } from 'react';
import KitsContainer from '../../../../form/helpers/FormContainer/index.web.js';
import { FormRenderer } from '../../FormRenderer/index.web.js';
import Flex from '../../../../layout/Flex/index.js';

const ObjectElement = ({
  element,
  control,
  getValues,
  groupField,
  focusedField,
  setFocusedField,
  fieldLogic
}) => {
  const { isShown, label, elements, helperText, style: elementStyle, fieldState, hideError, isRequired, slots } = fieldLogic;
  const objectElement = element;
  const { grid } = objectElement;
  const renderer = useMemo(() => {
    if (!elements) {
      return null;
    }
    return /* @__PURE__ */ jsx(
      FormRenderer,
      {
        elements,
        control,
        getValues,
        groupField,
        parentPath: `${element.id.toString()}.`,
        focusedField,
        setFocusedField,
        grid
      }
    );
  }, [elements, focusedField, groupField, grid]);
  if (!isShown) {
    return null;
  }
  return /* @__PURE__ */ jsx(
    KitsContainer,
    {
      id: element.id.toString(),
      label,
      helperText,
      errors: fieldState?.error?.message,
      invalid: fieldState?.invalid,
      hideError,
      required: isRequired,
      bare: true,
      containerStyle: elementStyle?.container,
      elementStyles: slots,
      children: /* @__PURE__ */ jsx(Flex, { w: "full", flexDirection: "column", gap: 6, children: renderer })
    }
  );
};

export { ObjectElement, ObjectElement as default };
//# sourceMappingURL=index.js.map
