import { jsx, Fragment } from 'react/jsx-runtime';
import { IoInformationCircle, IoAlertCircle, IoCheckmarkCircle, IoCloseCircle } from 'react-icons/io5';
import Text from '../../primitives/Text/index.web.js';
import { useKitsTheme } from '../../contexts/Theme/KitsThemeProvider.web.js';
import Flex from '../../layout/Flex/index.js';

const icons = {
  error: /* @__PURE__ */ jsx(IoCloseCircle, { size: 22 }),
  success: /* @__PURE__ */ jsx(IoCheckmarkCircle, { size: 22 }),
  warning: /* @__PURE__ */ jsx(IoAlertCircle, { size: 22 }),
  info: /* @__PURE__ */ jsx(IoInformationCircle, { size: 22 })
};
const Alert = ({
  status = "info",
  variant = "subtle",
  children,
  className = "",
  ...props
}) => {
  const { resolveToken, theme } = useKitsTheme();
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
  return /* @__PURE__ */ jsx(
    Flex,
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
  const { theme } = useKitsTheme();
  if (status === "brand" && theme.config.logo) return /* @__PURE__ */ jsx(Fragment, { children: theme.config.logo });
  return /* @__PURE__ */ jsx(Fragment, { children: icons[status] });
};
const AlertTitle = ({ children }) => /* @__PURE__ */ jsx(Text, { fontWeight: "bold", children });
const AlertDescription = ({ children }) => /* @__PURE__ */ jsx(Text, { fontSize: "0.875rem", children });

export { AlertDescription, AlertIcon, AlertTitle, Alert as default };
//# sourceMappingURL=alert.web.js.map
