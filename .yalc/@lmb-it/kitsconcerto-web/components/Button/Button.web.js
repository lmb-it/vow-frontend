import { jsx, jsxs } from 'react/jsx-runtime';
import React, { useMemo } from 'react';
import { useButton } from './useButton.js';
import 'react-icons/fa';
import 'react-icons/ai';
import 'react-icons/io';
import '../../packages/types/src/Components/Molecules/Form/FilePicker/types/filesTypes.js';
import 'yup';
import ResponsiveElement from '../../apps/web/src/Factory/ResponsiveElement.js';
import useSeparator from '../../apps/web/src/Factory/useSeparator.js';
import { useLanguage } from '../../hooks/locale.js';
import '../../contexts/DialogContext.js';
import useComponentDefaults from '../../hooks/useComponentDefaults.js';
import { useSeverityColors } from '../../hooks/useSeverityColors.js';
import { IconMap } from '../../assets/Icons/index.web.js';

function resolveIcon(icon, color) {
  if (!icon) return null;
  if (React.isValidElement(icon)) return icon;
  if (typeof icon !== "string") return null;
  if (icon.startsWith("pi ")) {
    return /* @__PURE__ */ jsx("i", { className: icon, style: { fontSize: "inherit", color: color ?? "inherit" } });
  }
  const Component = IconMap[icon];
  if (Component) return /* @__PURE__ */ jsx(Component, { size: "1em" });
  return null;
}
const Spinner = ({ color }) => /* @__PURE__ */ jsx(
  "span",
  {
    style: {
      display: "inline-block",
      width: "1em",
      height: "1em",
      border: "2px solid transparent",
      borderTopColor: color ?? "currentColor",
      borderLeftColor: color ?? "currentColor",
      borderRadius: "50%",
      animation: "kits-btn-spin 0.6s linear infinite"
    }
  }
);
const SIZE_MAP = {
  sm: { height: 32, fontSize: 12.25, px: 10, py: 6, gap: 6, iconSize: 14 },
  md: { height: 40, fontSize: 14, px: 16, py: 10, gap: 8, iconSize: 16 },
  lg: { height: 48, fontSize: 16, px: 24, py: 12, gap: 10, iconSize: 18 }
};
if (typeof document !== "undefined") {
  const id = "kits-btn-spin-keyframes";
  if (!document.getElementById(id)) {
    const sheet = document.createElement("style");
    sheet.id = id;
    sheet.textContent = `@keyframes kits-btn-spin { to { transform: rotate(360deg); } }`;
    document.head.appendChild(sheet);
  }
}
function Button(rawProps) {
  const { mergedProps: props, themeStyle, elementStyles } = useComponentDefaults("Button", rawProps);
  const {
    children,
    label,
    isLoadingText,
    severity,
    size = "md",
    loading,
    className,
    iconPos = "left",
    icon,
    id,
    testID,
    style,
    outlined,
    raised,
    rounded,
    tooltip,
    tooltipOptions,
    ...rest
  } = props;
  const { t } = useLanguage();
  const { cssProps, nativeProps } = useSeparator(rest);
  const sevColors = useSeverityColors(severity ?? "brand");
  const { handlers, isDisabled } = useButton(props);
  const sizeConfig = SIZE_MAP[size] ?? SIZE_MAP.md;
  const resolvedLabel = typeof children === "string" ? children : loading && isLoadingText ? isLoadingText : t(label ?? "");
  const severityStyles = useMemo(() => {
    if (outlined) {
      return {
        backgroundColor: "transparent",
        color: sevColors.solid,
        borderColor: sevColors.border || sevColors.solid,
        borderWidth: "1px",
        borderStyle: "solid"
      };
    }
    return {
      backgroundColor: sevColors.solid,
      color: sevColors.solidText,
      borderColor: sevColors.border || sevColors.solid,
      borderWidth: "1px",
      borderStyle: "solid"
    };
  }, [outlined, sevColors]);
  const isVertical = iconPos === "top" || iconPos === "bottom";
  const isReverse = iconPos === "right" || iconPos === "bottom";
  const iconElement = loading ? /* @__PURE__ */ jsx(Spinner, { color: severityStyles.color }) : resolveIcon(icon, severityStyles.color);
  const hasLabel = !!resolvedLabel;
  const isIconOnly = !hasLabel && !!iconElement;
  const computedCss = {
    ...themeStyle,
    ...elementStyles.root || {},
    ...cssProps,
    // Base button styles (matching PrimeReact defaults)
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: isVertical ? isReverse ? "column-reverse" : "column" : isReverse ? "row-reverse" : "row",
    gap: hasLabel && iconElement ? sizeConfig.gap : 0,
    height: sizeConfig.height,
    // Icon-only: force width = height for a perfect square
    ...isIconOnly ? { width: sizeConfig.height, minWidth: sizeConfig.height } : {},
    paddingLeft: hasLabel ? sizeConfig.px : sizeConfig.py,
    paddingRight: hasLabel ? sizeConfig.px : sizeConfig.py,
    paddingTop: sizeConfig.py,
    paddingBottom: sizeConfig.py,
    fontSize: sizeConfig.fontSize,
    fontWeight: "600",
    fontFamily: "inherit",
    lineHeight: "normal",
    cursor: isDisabled ? "not-allowed" : "pointer",
    ...isDisabled ? { opacity: "0.5" } : {},
    transition: "background-color 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s, opacity 0.2s",
    textDecoration: "none",
    userSelect: "none",
    overflow: "hidden",
    position: "relative",
    // Severity colors
    ...severityStyles,
    // Raised
    ...raised ? { boxShadow: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)" } : {},
    // Rounded
    ...rounded ? { borderRadius: 9999 } : { borderRadius: style?.borderRadius ?? 6 },
    // Style overrides from consumer
    ...style
  };
  const nativeButtonProps = {
    ...nativeProps,
    id,
    type: nativeProps?.type ?? "button",
    disabled: isDisabled,
    onClick: handlers.onClick,
    onMouseEnter: handlers.onMouseEnter,
    onMouseLeave: handlers.onMouseLeave,
    className,
    "data-testid": testID,
    title: tooltip,
    "aria-busy": loading || void 0,
    "aria-disabled": isDisabled || void 0
  };
  return /* @__PURE__ */ jsxs(
    ResponsiveElement,
    {
      as: "Button",
      cssProps: computedCss,
      nativeProps: nativeButtonProps,
      additionalStyles: {},
      children: [
        iconElement,
        hasLabel && /* @__PURE__ */ jsx("span", { style: { lineHeight: "inherit", pointerEvents: "none" }, children: resolvedLabel }),
        typeof children !== "string" ? children : void 0
      ]
    }
  );
}

export { Button, Button as default };
//# sourceMappingURL=Button.web.js.map
