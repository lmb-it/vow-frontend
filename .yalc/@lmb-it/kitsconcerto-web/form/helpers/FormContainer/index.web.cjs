'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var errormessage_web = require('../ErrorMessage/errormessage.web.cjs');
var _ = require('lodash');
var label_web = require('../Label/label.web.cjs');
require('../../../contexts/DialogContext.cjs');
var useComponentDefaults = require('../../../hooks/useComponentDefaults.cjs');
var useResolvedStyle = require('../../../hooks/useResolvedStyle.cjs');
var useResolvedElementStyles = require('../../../hooks/useResolvedElementStyles.cjs');
var index = require('../../../layout/Flex/index.cjs');
var index_web = require('../../../primitives/Text/index.web.cjs');

const KitsContainer = (rawProps) => {
  const { mergedProps: props, themeStyle, elementStyles: ownElementStyles } = useComponentDefaults.default("FormContainer", rawProps);
  const resolvedThemeStyle = useResolvedStyle.default(themeStyle);
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
  const elStyles = useResolvedElementStyles.default(React.useMemo(() => {
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
  const elementId = id ? `${id}_element` : _.uniqueId("element_");
  const mainClassName = className ? className + (required ? " required_field" : "") : required ? "required_field" : "";
  const classNameMerge = additionalClassName ?? "";
  const [isFocused, setIsFocused] = React.useState(false);
  const handleFocus = React.useCallback(() => setIsFocused(true), []);
  const handleBlur = React.useCallback((e) => {
    if (!e.currentTarget.contains(e.relatedTarget)) {
      setIsFocused(false);
    }
  }, []);
  const inputGroupClass = React.useMemo(() => {
    if (bare) return classNameMerge || void 0;
    const out = ["p-inputgroup"];
    if (classNameMerge) out.push(classNameMerge);
    if (invalid) out.push("p-invalid");
    if (isFocused) out.push("kits-focused");
    if (inputSize === "sm") out.push("p-inputtext-sm");
    if (inputSize === "lg") out.push("p-inputtext-lg");
    return out.join(" ");
  }, [bare, classNameMerge, invalid, isFocused, inputSize]);
  return /* @__PURE__ */ jsxRuntime.jsxs(
    index.default,
    {
      gap: 3,
      w: "full",
      h: "auto",
      flexDirection: "column",
      className: mainClassName,
      id: elementId,
      style: elStyles.container || void 0,
      children: [
        !isFloatedLabel && /* @__PURE__ */ jsxRuntime.jsx(
          label_web.default,
          {
            label,
            elementId,
            required,
            style: elStyles.label || void 0
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsxs(
          index.default,
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
              leftAddon && /* @__PURE__ */ jsxRuntime.jsx(
                index.default,
                {
                  className: "p-inputgroup-addon",
                  style: { border: "none", borderRadius: 0, ...elStyles.leftAddon || {} },
                  children: typeof leftAddon === "string" ? /* @__PURE__ */ jsxRuntime.jsx("span", { style: { paddingBottom: 4 }, children: leftAddon }) : React.isValidElement(leftAddon) ? leftAddon : null
                }
              ),
              !!label && isFloatedLabel && /* @__PURE__ */ jsxRuntime.jsxs("span", { className: "p-float-label w-full h-full", children: [
                children,
                isFloatedLabel && /* @__PURE__ */ jsxRuntime.jsx(
                  label_web.default,
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
              rightAddon && /* @__PURE__ */ jsxRuntime.jsx(
                index.default,
                {
                  className: "p-inputgroup-addon",
                  style: { border: "none", borderRadius: 0, ...elStyles.rightAddon || {} },
                  children: typeof rightAddon === "string" ? /* @__PURE__ */ jsxRuntime.jsx("span", { style: { paddingBottom: 4 }, children: rightAddon }) : React.isValidElement(rightAddon) ? rightAddon : null
                }
              )
            ]
          }
        ),
        helperText && typeof helperText != "function" && /* @__PURE__ */ jsxRuntime.jsx(index_web.default, { fontSize: 10, as: "small", style: elStyles.helperText || void 0, children: helperText }),
        !hideError && /* @__PURE__ */ jsxRuntime.jsx(errormessage_web.default, { invalid, errors, style: elStyles?.error || void 0 })
      ]
    }
  );
};

exports.default = KitsContainer;
//# sourceMappingURL=index.web.cjs.map
