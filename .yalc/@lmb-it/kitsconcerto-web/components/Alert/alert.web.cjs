'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var io5 = require('react-icons/io5');
var index_web = require('../../primitives/Text/index.web.cjs');
var KitsThemeProvider_web = require('../../contexts/Theme/KitsThemeProvider.web.cjs');
var index = require('../../layout/Flex/index.cjs');

const icons = {
  error: /* @__PURE__ */ jsxRuntime.jsx(io5.IoCloseCircle, { size: 22 }),
  success: /* @__PURE__ */ jsxRuntime.jsx(io5.IoCheckmarkCircle, { size: 22 }),
  warning: /* @__PURE__ */ jsxRuntime.jsx(io5.IoAlertCircle, { size: 22 }),
  info: /* @__PURE__ */ jsxRuntime.jsx(io5.IoInformationCircle, { size: 22 })
};
const Alert = ({
  status = "info",
  variant = "subtle",
  children,
  className = "",
  ...props
}) => {
  const { resolveToken, theme } = KitsThemeProvider_web.useKitsTheme();
  const primary = resolveToken("primary");
  const statusColors = {
    error: { bg: resolveToken("red.100"), text: resolveToken("red.700"), border: resolveToken("red.500"), solid: resolveToken("red.600") },
    success: { bg: resolveToken("green.100"), text: resolveToken("green.700"), border: resolveToken("green.500"), solid: resolveToken("green.600") },
    warning: { bg: resolveToken("yellow.100"), text: resolveToken("yellow.700"), border: resolveToken("yellow.500"), solid: resolveToken("yellow.600") },
    info: { bg: resolveToken("blue.100"), text: resolveToken("blue.700"), border: resolveToken("blue.500"), solid: resolveToken("blue.600") },
    brand: { bg: resolveToken("cyan.100"), text: resolveToken("cyan.700"), border: primary, solid: primary }
  };
  const colors = statusColors[status];
  let bgColor;
  let fontColor;
  const borderStyle = {};
  if (variant === "subtle") {
    bgColor = colors.bg;
    fontColor = colors.text;
  } else if (variant === "solid") {
    bgColor = colors.solid;
    fontColor = "white";
  } else if (variant === "left-accent") {
    bgColor = colors.bg;
    fontColor = colors.text;
    borderStyle.borderLeft = `4px solid`;
    borderStyle.borderLeftColor = colors.border;
  } else if (variant === "top-accent") {
    bgColor = colors.bg;
    fontColor = colors.text;
    borderStyle.borderTop = `4px solid`;
    borderStyle.borderTopColor = colors.border;
  }
  return /* @__PURE__ */ jsxRuntime.jsx(
    index.default,
    {
      flexDirection: "row",
      alignItems: "center",
      gap: "0.5rem",
      p: "0.75rem",
      borderRadius: "0.5rem",
      bgColor,
      fontColor,
      className,
      style: borderStyle,
      ...props,
      children
    }
  );
};
const AlertIcon = ({ status = "info" }) => {
  const { theme } = KitsThemeProvider_web.useKitsTheme();
  if (status === "brand" && theme.config.logo) return /* @__PURE__ */ jsxRuntime.jsx(jsxRuntime.Fragment, { children: theme.config.logo });
  return /* @__PURE__ */ jsxRuntime.jsx(jsxRuntime.Fragment, { children: icons[status] });
};
const AlertTitle = ({ children }) => /* @__PURE__ */ jsxRuntime.jsx(index_web.default, { fontWeight: "bold", children });
const AlertDescription = ({ children }) => /* @__PURE__ */ jsxRuntime.jsx(index_web.default, { fontSize: "0.875rem", children });

exports.AlertDescription = AlertDescription;
exports.AlertIcon = AlertIcon;
exports.AlertTitle = AlertTitle;
exports.default = Alert;
//# sourceMappingURL=alert.web.cjs.map
