'use strict';

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
require('react-icons/fa');
require('react-icons/ai');
require('react-icons/io');
require('../../packages/types/src/Components/Molecules/Form/FilePicker/types/filesTypes.cjs');
require('yup');
var ResponsiveElement = require('../../apps/web/src/Factory/ResponsiveElement.cjs');
var useSeparator = require('../../apps/web/src/Factory/useSeparator.cjs');
require('../../contexts/DialogContext.cjs');
var useComponentDefaults = require('../../hooks/useComponentDefaults.cjs');
var useSeverityColors = require('../../hooks/useSeverityColors.cjs');
var index_web = require('../../assets/Icons/index.web.cjs');

const SIZE_MAP = {
  sm: { fontSize: 10, px: 6, py: 2, gap: 4, iconSize: 12, dotSize: 6 },
  md: { fontSize: 12, px: 10, py: 4, gap: 6, iconSize: 14, dotSize: 8 },
  lg: { fontSize: 14, px: 12, py: 6, gap: 6, iconSize: 16, dotSize: 10 }
};
function resolveIcon(icon, color, iconSize) {
  if (!icon) return null;
  if (icon === "dot") {
    return /* @__PURE__ */ jsxRuntime.jsx("span", { style: {
      display: "inline-block",
      width: 6,
      height: 6,
      borderRadius: "50%",
      backgroundColor: color,
      flexShrink: 0
    } });
  }
  if (React.isValidElement(icon)) return icon;
  if (typeof icon !== "string") return null;
  if (icon.startsWith("pi ")) {
    return /* @__PURE__ */ jsxRuntime.jsx("i", { className: icon, style: { fontSize: iconSize, color: "inherit" } });
  }
  const Component = index_web.IconMap[icon];
  if (Component) return /* @__PURE__ */ jsxRuntime.jsx(Component, { size: iconSize });
  return null;
}
function Badge(rawProps) {
  const { mergedProps: props, themeStyle, elementStyles } = useComponentDefaults.default("Badge", rawProps);
  const {
    value,
    children,
    severity = "brand",
    size: rawSize,
    outlined,
    icon,
    className,
    testID,
    style,
    ...rest
  } = props;
  const { cssProps, nativeProps } = useSeparator.default(rest);
  const sizeStr = String(rawSize ?? "md");
  const size = sizeStr === "sm" || sizeStr === "md" || sizeStr === "lg" ? sizeStr : "md";
  const sizeConfig = SIZE_MAP[size];
  const sevColors = useSeverityColors.useSeverityColors(severity ?? "secondary");
  const severityStyles = React.useMemo(() => {
    if (outlined) {
      return {
        backgroundColor: "transparent",
        color: sevColors.solid,
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: sevColors.solid
      };
    }
    return {
      backgroundColor: sevColors.bgTint,
      color: sevColors.text,
      borderWidth: "1px",
      borderStyle: "solid",
      borderColor: sevColors.border
    };
  }, [outlined, sevColors]);
  outlined ? sevColors.solid : sevColors.iconFg;
  const resolvedIcon = resolveIcon(icon, sevColors.solid, sizeConfig.iconSize);
  const content = value ?? children;
  const computedCss = {
    ...themeStyle,
    ...elementStyles.root || {},
    ...cssProps,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: resolvedIcon ? sizeConfig.gap : 0,
    fontSize: sizeConfig.fontSize,
    fontWeight: "600",
    lineHeight: "1",
    paddingLeft: sizeConfig.px,
    paddingRight: sizeConfig.px,
    paddingTop: sizeConfig.py,
    paddingBottom: sizeConfig.py,
    borderRadius: 6,
    whiteSpace: "nowrap",
    ...severityStyles,
    ...style
  };
  return /* @__PURE__ */ jsxRuntime.jsxs(
    ResponsiveElement.default,
    {
      as: "span",
      cssProps: computedCss,
      nativeProps: {
        ...nativeProps,
        className,
        "data-testid": testID
      },
      children: [
        resolvedIcon,
        content != null && /* @__PURE__ */ jsxRuntime.jsx("span", { style: { lineHeight: "inherit" }, children: content })
      ]
    }
  );
}

exports.Badge = Badge;
//# sourceMappingURL=index.web.cjs.map
