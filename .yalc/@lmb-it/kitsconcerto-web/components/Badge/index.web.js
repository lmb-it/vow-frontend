import { jsxs, jsx } from 'react/jsx-runtime';
import React, { useMemo } from 'react';
import 'react-icons/fa';
import 'react-icons/ai';
import 'react-icons/io';
import '../../packages/types/src/Components/Molecules/Form/FilePicker/types/filesTypes.js';
import 'yup';
import ResponsiveElement from '../../apps/web/src/Factory/ResponsiveElement.js';
import useSeparator from '../../apps/web/src/Factory/useSeparator.js';
import '../../contexts/DialogContext.js';
import useComponentDefaults from '../../hooks/useComponentDefaults.js';
import { useSeverityColors } from '../../hooks/useSeverityColors.js';
import { IconMap } from '../../assets/Icons/index.web.js';

const SIZE_MAP = {
  sm: { fontSize: 10, px: 6, py: 2, gap: 4, iconSize: 12, dotSize: 6 },
  md: { fontSize: 12, px: 10, py: 4, gap: 6, iconSize: 14, dotSize: 8 },
  lg: { fontSize: 14, px: 12, py: 6, gap: 6, iconSize: 16, dotSize: 10 }
};
function resolveIcon(icon, color, iconSize) {
  if (!icon) return null;
  if (icon === "dot") {
    return /* @__PURE__ */ jsx("span", { style: {
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
    return /* @__PURE__ */ jsx("i", { className: icon, style: { fontSize: iconSize, color: "inherit" } });
  }
  const Component = IconMap[icon];
  if (Component) return /* @__PURE__ */ jsx(Component, { size: iconSize });
  return null;
}
function Badge(rawProps) {
  const { mergedProps: props, themeStyle, elementStyles } = useComponentDefaults("Badge", rawProps);
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
  const { cssProps, nativeProps } = useSeparator(rest);
  const sizeStr = String(rawSize ?? "md");
  const size = sizeStr === "sm" || sizeStr === "md" || sizeStr === "lg" ? sizeStr : "md";
  const sizeConfig = SIZE_MAP[size];
  const sevColors = useSeverityColors(severity ?? "secondary");
  const severityStyles = useMemo(() => {
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
  return /* @__PURE__ */ jsxs(
    ResponsiveElement,
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
        content != null && /* @__PURE__ */ jsx("span", { style: { lineHeight: "inherit" }, children: content })
      ]
    }
  );
}

export { Badge };
//# sourceMappingURL=index.web.js.map
