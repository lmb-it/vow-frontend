import { jsx, jsxs } from 'react/jsx-runtime';
import { useMemo, isValidElement } from 'react';
import { useKitsTheme } from '../../../contexts/Theme/KitsThemeProvider.web.js';
import Text from '../../../primitives/Text/index.web.js';
import Heading from '../../../primitives/Heading/index.web.js';
import { useLanguage } from '../../../hooks/locale.js';

const Label = ({ as = "label", className, label, elementId, required, style }) => {
  const { isRTL, t } = useLanguage();
  const { resolveToken } = useKitsTheme();
  const renderLabel = useMemo(() => {
    if (!label) {
      return "";
    }
    if (isValidElement(label) || typeof label == "string") {
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
  const labelState = useMemo(() => {
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
  const asterisk = required ? /* @__PURE__ */ jsx("span", { style: { color: resolveToken("danger"), marginInlineStart: 2 }, children: "*" }) : null;
  if (["p", "span", "small", "label"].includes(as)) {
    return !!label ? /* @__PURE__ */ jsxs(Text, { as, className: labelState, htmlFor: elementId, style, children: [
      renderLabel,
      asterisk
    ] }) : null;
  } else {
    return !!label ? /* @__PURE__ */ jsxs(Heading, { as, className: labelState, htmlFor: elementId, style, children: [
      renderLabel,
      asterisk
    ] }) : null;
  }
};

export { Label as default };
//# sourceMappingURL=label.web.js.map
