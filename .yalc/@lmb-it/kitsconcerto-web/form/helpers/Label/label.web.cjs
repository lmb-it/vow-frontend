'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var KitsThemeProvider_web = require('../../../contexts/Theme/KitsThemeProvider.web.cjs');
var index_web = require('../../../primitives/Text/index.web.cjs');
var index_web$1 = require('../../../primitives/Heading/index.web.cjs');
var locale = require('../../../hooks/locale.cjs');

const Label = ({ as = "label", className, label, elementId, required, style }) => {
  const { isRTL, t } = locale.useLanguage();
  const { resolveToken } = KitsThemeProvider_web.useKitsTheme();
  const renderLabel = React.useMemo(() => {
    if (!label) {
      return "";
    }
    if (React.isValidElement(label) || typeof label == "string") {
      return label;
    } else {
      if ("element" in label) {
        return label.element;
      }
      if ("text" in label) {
        return label.text;
      }
    }
    return "";
  }, [label]);
  const labelState = React.useMemo(() => {
    const classes = ["w-full", "label-position", "kits-form-label"];
    if (className) {
      classes.push(className);
    }
    if (typeof label === "string") {
      if (isRTL) {
        classes.push("text-right");
      }
      classes.push("");
    } else {
      if (label && "placement" in label) {
        if (label?.placement == "RL") {
          classes.push("RL");
        }
        if (label?.placement == "B") {
          classes.push("B");
        }
        if (label?.placement == "T") {
          classes.push("T");
        }
      }
    }
    return classes.join(" ");
  }, [isRTL]);
  const asterisk = required ? /* @__PURE__ */ jsxRuntime.jsx("span", { style: { color: resolveToken("danger"), marginInlineStart: 2 }, children: "*" }) : null;
  if (!label) return null;
  if (React.isValidElement(renderLabel)) {
    return /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
      renderLabel,
      asterisk
    ] });
  }
  if (["p", "span", "small", "label"].includes(as)) {
    return /* @__PURE__ */ jsxRuntime.jsxs(index_web.default, { as, className: labelState, htmlFor: elementId, style, children: [
      renderLabel,
      asterisk
    ] });
  } else {
    return /* @__PURE__ */ jsxRuntime.jsxs(index_web$1.default, { as, className: labelState, htmlFor: elementId, style, children: [
      renderLabel,
      asterisk
    ] });
  }
};

exports.default = Label;
//# sourceMappingURL=label.web.cjs.map
