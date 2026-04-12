'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
require('react-icons/fa');
require('react-icons/ai');
require('react-icons/io');
require('../../packages/types/src/Components/Molecules/Form/FilePicker/types/filesTypes.cjs');
require('yup');
var ResponsiveElement = require('../../apps/web/src/Factory/ResponsiveElement.cjs');
var useSeparator = require('../../apps/web/src/Factory/useSeparator.cjs');
require('react');
var locale = require('../../hooks/locale.cjs');
require('../../contexts/DialogContext.cjs');

const mapAsToSize = {
  small: "sm",
  label: "sm",
  span: "md",
  p: "md"
};
const mapSizeToStyle = (size) => {
  const scale = {
    "xs": "0.75rem",
    "sm": "0.875rem",
    "md": "1rem",
    "lg": "1.125rem",
    "xl": "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "3.75rem"
  };
  return { fontSize: scale[size] || "1rem" };
};
const buildStyleFromProps = (p) => {
  const style = {};
  if (p.bold) style.fontWeight = "700";
  if (p.italic) style.fontStyle = "italic";
  if (p.underline) style.textDecoration = "underline";
  if (p.strikeThrough)
    style.textDecoration = style.textDecoration ? `${style.textDecoration} line-through` : "line-through";
  if (p.sub) style.verticalAlign = "sub";
  if (p.highlight) style.backgroundColor = "yellow";
  if (p.isTruncated) {
    style.overflow = "hidden";
    style.textOverflow = "ellipsis";
    style.whiteSpace = "nowrap";
  }
  if (p.color) style.color = p.color;
  return style;
};
const Text = (props) => {
  const { t } = locale.useLanguage();
  const { cssProps, nativeProps } = useSeparator.default(props);
  const { as = "p", size, label, children, onPress, onLongPress, ...rest } = nativeProps;
  if (onPress) {
    rest.onClick = onPress;
  }
  if (onLongPress) {
    rest.onDoubleClick = onLongPress;
  }
  const resolvedSize = size || mapAsToSize[as] || "md";
  const sizeStyle = mapSizeToStyle(resolvedSize);
  const propStyle = buildStyleFromProps(nativeProps);
  return /* @__PURE__ */ jsxRuntime.jsx(
    ResponsiveElement.default,
    {
      as: "Text",
      nativeProps: { as, ...rest },
      cssProps,
      additionalStyles: { ...sizeStyle, ...propStyle },
      children: label ? t(label) : typeof children == "string" ? t(children) : children
    }
  );
};

exports.default = Text;
//# sourceMappingURL=index.web.cjs.map
