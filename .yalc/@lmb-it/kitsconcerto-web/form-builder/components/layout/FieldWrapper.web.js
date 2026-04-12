import { jsx } from 'react/jsx-runtime';
import { useMemo, useCallback } from 'react';
import { useWatch } from 'react-hook-form';
import { useFieldLogic } from '../../hooks/useFieldLogic.js';
import '@hookform/resolvers/yup';
import 'yup';
import GridItem from '../../../layout/GridItem/index.web.js';

const FieldWrapper = ({
  element,
  control,
  getValues,
  setFocusedField,
  focusedField,
  children,
  groupField
}) => {
  const resolveDepPath = (dep, groupField2) => {
    if (!groupField2 || groupField2.index === void 0 || groupField2.index < 0) return dep;
    const parts = dep.split(".");
    const { name, index } = groupField2;
    if (parts.length < 2) return dep;
    if (parts[0] !== name) return dep;
    if (parts[1] === "current") {
      parts[1] = String(index);
      return parts.join(".");
    }
    return dep;
  };
  const flattenPaths = (obj, prefix = "") => Object.keys(obj ?? {}).flatMap((key) => {
    const path = prefix ? `${prefix}.${key}` : key;
    return typeof obj[key] === "object" && obj[key] !== null ? [path, ...flattenPaths(obj[key], path)] : [path];
  });
  const dependencies = useMemo(() => {
    const deps = /* @__PURE__ */ new Set([...element.deps ?? [], ...element.logic?.deps ?? []]);
    if (deps.has("*")) {
      return flattenPaths(getValues());
    }
    return Array.from(deps).map((d) => resolveDepPath(d, groupField));
  }, [element, groupField]);
  const watchedValues = useWatch({
    name: dependencies,
    compute: (fieldValue) => {
      return fieldValue;
    },
    // exact:true,
    disabled: dependencies.length === 0
  });
  const fieldLogic = useFieldLogic({ element, control, getValues, isFocused: focusedField === element.id, groupField, watchedValues });
  const {
    field,
    isShown,
    layout,
    style: elementStyle,
    animation
  } = fieldLogic;
  const isFocused = focusedField === field.name;
  const onFocus = useCallback(() => setFocusedField(field.name), [setFocusedField, field.name]);
  const onBlur = useCallback((event) => {
    const cl = typeof event.target?.className === "string" ? event.target.className : "";
    if (cl.includes(`${element.id.toString()}_option_item`) || cl.includes(`p-multiselect-filter`)) {
      return;
    }
    setFocusedField("");
    field.onBlur();
  }, [setFocusedField, field.onBlur]);
  if (!isShown) {
    return null;
  }
  const props = {
    id: element.id,
    colSpan: layout.colSpan,
    rowSpan: layout.rowSpan,
    colStart: layout.colOffset,
    area: layout.area,
    zIndex: isFocused ? 1e3 : "auto",
    onClick: onFocus,
    onBlur,
    style: {
      display: "block"
    }
  };
  return /* @__PURE__ */ jsx(
    GridItem,
    {
      ...props,
      ...elementStyle?.container,
      entering: animation?.entering,
      exiting: animation?.exiting,
      animationDuration: animation?.animationDuration,
      animationDelay: animation?.animationDelay,
      children: children(fieldLogic)
    }
  );
};

export { FieldWrapper };
//# sourceMappingURL=FieldWrapper.web.js.map
