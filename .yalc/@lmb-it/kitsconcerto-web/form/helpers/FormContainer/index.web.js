import { jsxs, jsx } from 'react/jsx-runtime';
import React, { useMemo, useState, useCallback } from 'react';
import ErrorMessage from '../ErrorMessage/errormessage.web.js';
import { uniqueId } from 'lodash';
import Label from '../Label/label.web.js';
import '../../../contexts/DialogContext.js';
import useComponentDefaults from '../../../hooks/useComponentDefaults.js';
import useResolvedStyle from '../../../hooks/useResolvedStyle.js';
import useResolvedElementStyles from '../../../hooks/useResolvedElementStyles.js';
import Flex from '../../../layout/Flex/index.js';
import Text from '../../../primitives/Text/index.web.js';

const KitsContainer = (rawProps) => {
  const { mergedProps: props, themeStyle, elementStyles: ownElementStyles } = useComponentDefaults("FormContainer", rawProps);
  const resolvedThemeStyle = useResolvedStyle(themeStyle);
  const {
    id,
    helperText,
    className,
    children,
    rightAddon,
    leftAddon,
    errors,
    invalid,
    required,
    hideError,
    additionalClassName,
    label,
    isFloatedLabel,
    containerStyle,
    inputSize,
    bare,
    elementStyles: parentElementStyles
  } = props;
  const elStyles = useResolvedElementStyles(useMemo(() => {
    const merged = {};
    const allKeys = /* @__PURE__ */ new Set([
      ...Object.keys(ownElementStyles || {}),
      ...Object.keys(parentElementStyles || {})
    ]);
    for (const key of allKeys) {
      merged[key] = {
        ...ownElementStyles?.[key] || {},
        ...parentElementStyles?.[key] || {}
      };
    }
    return merged;
  }, [ownElementStyles, parentElementStyles]));
  const elementId = id ? `${id}_element` : uniqueId("element_");
  const mainClassName = className ? className + (required ? " required_field" : "") : required ? "required_field" : "";
  const classNameMerge = additionalClassName ?? "";
  const [isFocused, setIsFocused] = useState(false);
  const handleFocus = useCallback(() => setIsFocused(true), []);
  const handleBlur = useCallback((e) => {
    if (!e.currentTarget.contains(e.relatedTarget)) {
      setIsFocused(false);
    }
  }, []);
  const inputGroupClass = useMemo(() => {
    if (bare) return classNameMerge || void 0;
    const out = ["p-inputgroup"];
    if (classNameMerge) out.push(classNameMerge);
    if (invalid) out.push("p-invalid");
    if (isFocused) out.push("kits-focused");
    if (inputSize === "sm") out.push("p-inputtext-sm");
    if (inputSize === "lg") out.push("p-inputtext-lg");
    return out.join(" ");
  }, [bare, classNameMerge, invalid, isFocused, inputSize]);
  return /* @__PURE__ */ jsxs(
    Flex,
    {
      gap: 3,
      w: "full",
      h: "auto",
      flexDirection: "column",
      className: mainClassName,
      id: elementId,
      style: elStyles.container || void 0,
      children: [
        !isFloatedLabel && /* @__PURE__ */ jsx(
          Label,
          {
            label,
            elementId,
            required,
            style: elStyles.label || void 0
          }
        ),
        /* @__PURE__ */ jsxs(
          Flex,
          {
            flexDirection: "row",
            w: "full",
            h: bare ? void 0 : "full",
            overflow: bare ? void 0 : "hidden",
            className: inputGroupClass,
            style: bare ? {} : {
              ...Object.keys(resolvedThemeStyle).length ? resolvedThemeStyle : {},
              ...containerStyle,
              ...elStyles.inputGroup || {}
            },
            onFocus: handleFocus,
            onBlur: handleBlur,
            children: [
              leftAddon && /* @__PURE__ */ jsx(
                Flex,
                {
                  className: "p-inputgroup-addon",
                  style: { border: "none", borderRadius: 0, ...elStyles.leftAddon || {} },
                  children: typeof leftAddon === "string" ? /* @__PURE__ */ jsx("span", { style: { paddingBottom: 4 }, children: leftAddon }) : React.isValidElement(leftAddon) ? leftAddon : null
                }
              ),
              !!label && isFloatedLabel && /* @__PURE__ */ jsxs("span", { className: "p-float-label w-full h-full", children: [
                children,
                isFloatedLabel && /* @__PURE__ */ jsx(
                  Label,
                  {
                    label,
                    elementId,
                    required,
                    style: elStyles.label || void 0
                  }
                )
              ] }),
              !!label && !isFloatedLabel && children,
              !label && children,
              rightAddon && /* @__PURE__ */ jsx(
                Flex,
                {
                  className: "p-inputgroup-addon",
                  style: { border: "none", borderRadius: 0, ...elStyles.rightAddon || {} },
                  children: typeof rightAddon === "string" ? /* @__PURE__ */ jsx("span", { style: { paddingBottom: 4 }, children: rightAddon }) : React.isValidElement(rightAddon) ? rightAddon : null
                }
              )
            ]
          }
        ),
        helperText && typeof helperText != "function" && /* @__PURE__ */ jsx(Text, { fontSize: 10, as: "small", style: elStyles.helperText || void 0, children: helperText }),
        !hideError && /* @__PURE__ */ jsx(ErrorMessage, { invalid, errors, style: elStyles?.error || void 0 })
      ]
    }
  );
};

export { KitsContainer as default };
//# sourceMappingURL=index.web.js.map
