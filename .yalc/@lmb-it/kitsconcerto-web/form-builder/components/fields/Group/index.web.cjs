'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var reactHookForm = require('react-hook-form');
var divider = require('primereact/divider');
var index_web = require('../../FormRenderer/index.web.cjs');
require('../../../../contexts/DialogContext.cjs');
var useComponentDefaults = require('../../../../hooks/useComponentDefaults.cjs');
var useResolvedElementStyles = require('../../../../hooks/useResolvedElementStyles.cjs');
var index = require('../../../../layout/Flex/index.cjs');
var label_web = require('../../../../form/helpers/Label/label.web.cjs');

const Group = ({
  element,
  control,
  getValues,
  groupField,
  focusedField,
  setFocusedField,
  fieldLogic
}) => {
  const { isShown, label, elements } = fieldLogic;
  const groupElement = element;
  const { groupsSettings } = groupElement;
  const resolvedGroupSlots = React.useMemo(() => {
    const gs = groupElement.groupSlots;
    if (!gs) return void 0;
    if (typeof gs === "function") {
      return gs(fieldLogic.watchedValues, fieldLogic.formContext.getValues(), fieldLogic.formContext, groupField);
    }
    return gs;
  }, [groupElement.groupSlots, fieldLogic.watchedValues, fieldLogic.formContext, groupField]);
  const { elementStyles: groupStyles } = useComponentDefaults.default("Group", {
    slots: resolvedGroupSlots
  });
  const elStyles = useResolvedElementStyles.default(groupStyles);
  const fieldArray = reactHookForm.useFieldArray({
    control,
    name: element.id
  });
  const { fields, append, remove } = fieldArray;
  const settings = React.useMemo(() => ({
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
  React.useEffect(() => {
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
  React.useImperativeHandle(groupsSettings?.ref, () => fieldArray, [fieldArray]);
  const reBuildElements = React.useCallback((field, index, element2) => {
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
  return /* @__PURE__ */ jsxRuntime.jsxs(
    index.default,
    {
      id: element.id.toString(),
      w: "full",
      flexDirection: "column",
      gap: 10,
      mb: 6,
      style: elStyles.root || void 0,
      children: [
        label && /* @__PURE__ */ jsxRuntime.jsx("div", { style: elStyles.header || void 0, children: /* @__PURE__ */ jsxRuntime.jsx(divider.Divider, { align: "left", children: /* @__PURE__ */ jsxRuntime.jsx(label_web.default, { className: "font-bold text-lg", label, elementId: element.id.toString() }) }) }),
        /* @__PURE__ */ jsxRuntime.jsx("div", { style: elStyles.body || void 0, children: fields.map((field, index$1) => {
          const fieldsElements = reBuildElements(field, index$1, element);
          return /* @__PURE__ */ jsxRuntime.jsxs(
            index.default,
            {
              w: "full",
              position: "relative",
              flexDirection: "column",
              rowGap: 10,
              columnGap: 10,
              style: elStyles.row || void 0,
              children: [
                /* @__PURE__ */ jsxRuntime.jsx(
                  index_web.FormRenderer,
                  {
                    elements: fieldsElements,
                    control,
                    groupField: {
                      index: index$1,
                      name: element.id.toString(),
                      values: getValues()[element.id][index$1],
                      append: handleAppend,
                      remove: () => handleRemove(index$1)
                    },
                    getValues,
                    parentPath: `${element.id.toString()}.${index$1}.`,
                    focusedField,
                    setFocusedField,
                    grid: groupsSettings?.grid
                  }
                ),
                settings.removeButtonRow && /* @__PURE__ */ jsxRuntime.jsx("div", { style: { zIndex: 1, ...elStyles.removeButton || {} }, children: settings.removeButtonRow(fields.length, () => handleRemove(index$1), index$1) }),
                settings.repeatable.minusButton && fields.length > settings.repeatable.minRepeats && /* @__PURE__ */ jsxRuntime.jsx("div", { style: { zIndex: 1, ...elStyles.removeButton || {} }, children: settings.repeatable.minusButton(fields.length, () => handleRemove(index$1)) })
              ]
            },
            field.id
          );
        }) }),
        settings.repeatable.plusButton && /* @__PURE__ */ jsxRuntime.jsx(
          index.default,
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
  );
};

exports.Group = Group;
exports.default = Group;
//# sourceMappingURL=index.web.cjs.map
