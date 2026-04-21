import { jsx, jsxs } from 'react/jsx-runtime';
import { useMemo, useEffect, useImperativeHandle, useCallback } from 'react';
import { useFieldArray } from 'react-hook-form';
import KitsContainer from '../../../../form/helpers/FormContainer/index.web.js';
import { FormRenderer } from '../../FormRenderer/index.web.js';
import '../../../../contexts/DialogContext.js';
import useComponentDefaults from '../../../../hooks/useComponentDefaults.js';
import useResolvedElementStyles from '../../../../hooks/useResolvedElementStyles.js';
import Flex from '../../../../layout/Flex/index.js';

const Group = ({
  element,
  control,
  getValues,
  groupField,
  focusedField,
  setFocusedField,
  fieldLogic
}) => {
  const { isShown, label, elements, helperText: groupHelperText, fieldState, hideError, isRequired, slots } = fieldLogic;
  const groupElement = element;
  const { groupsSettings } = groupElement;
  const resolvedGroupSlots = useMemo(() => {
    const gs = groupElement.groupSlots;
    if (!gs) return void 0;
    if (typeof gs === "function") {
      return gs(fieldLogic.watchedValues, fieldLogic.formContext.getValues(), fieldLogic.formContext, groupField);
    }
    return gs;
  }, [groupElement.groupSlots, fieldLogic.watchedValues, fieldLogic.formContext, groupField]);
  const { elementStyles: groupStyles } = useComponentDefaults("Group", {
    slots: resolvedGroupSlots
  });
  const elStyles = useResolvedElementStyles(groupStyles);
  const fieldArray = useFieldArray({
    control,
    name: element.id
  });
  const { fields, append, remove } = fieldArray;
  const settings = useMemo(() => ({
    grid: groupsSettings?.grid,
    repeatable: {
      minRepeats: groupsSettings?.repeatable?.minRepeats || 0,
      maxRepeats: groupsSettings?.repeatable?.maxRepeats || Infinity,
      plusButton: groupsSettings?.repeatable?.plusButton,
      minusButton: groupsSettings?.repeatable?.minusButton
    },
    removeButtonRow: groupsSettings?.removeButtonRow
  }), [groupsSettings]);
  const createDefaultItem = () => {
    const item = {};
    elements?.forEach((el) => {
      if ("displayOnly" in el && el.displayOnly) return;
      if ("initialUri" in el) {
        item[el.id] = el.initialUri;
      } else if ("initialValue" in el && el.initialValue !== void 0) {
        item[el.id] = el.initialValue;
      }
    });
    return item;
  };
  const handleAppend = (count = 1) => {
    const max = settings.repeatable.maxRepeats;
    if (max && fields.length >= max) {
      return;
    }
    const itemsToAdd = Array(count).fill(0).map(() => createDefaultItem());
    append(itemsToAdd, { shouldFocus: true });
  };
  const handleRemove = (index) => {
    if (fields.length > (settings.repeatable.minRepeats || 0)) {
      remove(index);
    }
  };
  useEffect(() => {
    const generateGroupElements = () => {
      const min = settings.repeatable.minRepeats || 0;
      if (fields.length < min) {
        const itemsToAppend = min - fields.length;
        handleAppend(itemsToAppend);
      }
    };
    const timer = setTimeout(generateGroupElements, 100);
    return () => clearTimeout(timer);
  }, [element.id, settings.repeatable.minRepeats]);
  useImperativeHandle(groupsSettings?.ref, () => fieldArray, [fieldArray]);
  const reBuildElements = useCallback((field, index, element2) => {
    if (element2.type !== "Group" || !Array.isArray(element2?.elements)) {
      return [];
    }
    return element2?.elements.map((childElement) => {
      const toArray = Object.entries(field);
      const findField = toArray.find(([name]) => name == childElement.id);
      return {
        ...childElement,
        initialValue: findField ? findField[1] : void 0
      };
    });
  }, []);
  if (!isShown) {
    return null;
  }
  return /* @__PURE__ */ jsx(
    KitsContainer,
    {
      id: element.id.toString(),
      label,
      helperText: groupHelperText,
      errors: fieldState?.error?.message,
      invalid: fieldState?.invalid,
      hideError,
      required: isRequired,
      bare: true,
      elementStyles: slots,
      children: /* @__PURE__ */ jsxs(
        Flex,
        {
          w: "full",
          flexDirection: "column",
          gap: 10,
          mb: 6,
          style: elStyles.root || void 0,
          children: [
            /* @__PURE__ */ jsx("div", { style: elStyles.body || void 0, children: fields.map((field, index) => {
              const fieldsElements = reBuildElements(field, index, element);
              return /* @__PURE__ */ jsxs(
                Flex,
                {
                  w: "full",
                  position: "relative",
                  flexDirection: "column",
                  rowGap: 10,
                  columnGap: 10,
                  style: elStyles.row || void 0,
                  children: [
                    /* @__PURE__ */ jsx(
                      FormRenderer,
                      {
                        elements: fieldsElements,
                        control,
                        groupField: {
                          index,
                          name: element.id.toString(),
                          values: getValues()[element.id][index],
                          append: handleAppend,
                          remove: () => handleRemove(index)
                        },
                        getValues,
                        parentPath: `${element.id.toString()}.${index}.`,
                        focusedField,
                        setFocusedField,
                        grid: groupsSettings?.grid
                      }
                    ),
                    settings.removeButtonRow && /* @__PURE__ */ jsx("div", { style: { zIndex: 1, ...elStyles.removeButton || {} }, children: settings.removeButtonRow(fields.length, () => handleRemove(index), index) }),
                    settings.repeatable.minusButton && fields.length > settings.repeatable.minRepeats && /* @__PURE__ */ jsx("div", { style: { zIndex: 1, ...elStyles.removeButton || {} }, children: settings.repeatable.minusButton(fields.length, () => handleRemove(index)) })
                  ]
                },
                field.id
              );
            }) }),
            settings.repeatable.plusButton && /* @__PURE__ */ jsx(
              Flex,
              {
                justifyContent: "flex-start",
                w: "full",
                mt: 8,
                style: elStyles.addButton || void 0,
                children: settings.repeatable.plusButton(fields.length, handleAppend)
              }
            )
          ]
        }
      )
    }
  );
};

export { Group, Group as default };
//# sourceMappingURL=index.web.js.map
