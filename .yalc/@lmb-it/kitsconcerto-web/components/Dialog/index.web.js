import { jsxs, jsx } from 'react/jsx-runtime';
import { Dialog } from 'primereact/dialog';
import { useSeverityColors } from '../../hooks/useSeverityColors.js';
import { useKitsTheme } from '../../contexts/Theme/KitsThemeProvider.web.js';

function KitsDialogControlled({
  state,
  onHide
}) {
  const {
    children,
    onClose,
    asyncClose,
    type,
    icon,
    ...rest
  } = state;
  const severityColors = useSeverityColors(type || "secondary");
  const colors = type ? severityColors : null;
  const { resolveToken, theme } = useKitsTheme();
  const surfaceColor = resolveToken("surface-card");
  const brandLogo = type === "brand" ? theme.config.logo : null;
  const hide = async (event) => {
    if (asyncClose && typeof onClose === "function") {
      onClose();
    } else {
      onClose?.();
    }
    onHide();
  };
  const getContent = () => {
    if (typeof children === "function" && !type) {
      return ({ hide: hide2 }) => children(hide2);
    }
    return void 0;
  };
  const resolvedChildren = typeof children === "function" ? children(hide) : children;
  return /* @__PURE__ */ jsxs(
    Dialog,
    {
      ...rest,
      visible: state.visible,
      onHide: hide,
      content: getContent(),
      contentStyle: {
        ...rest?.contentStyle,
        ...colors ? {
          background: `linear-gradient(${colors.bgTint} 0%, ${surfaceColor} 120px)`
        } : {}
      },
      headerStyle: {
        ...rest?.headerStyle,
        ...colors ? {
          borderBottom: `2px solid ${colors.border}`
        } : {}
      },
      children: [
        (icon || brandLogo) && colors && /* @__PURE__ */ jsx("div", { style: {
          display: "flex",
          justifyContent: "center",
          marginBottom: 16
        }, children: /* @__PURE__ */ jsx("div", { style: {
          width: 48,
          height: 48,
          borderRadius: 24,
          backgroundColor: colors.iconBg,
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }, children: brandLogo ? brandLogo : typeof icon === "string" ? /* @__PURE__ */ jsx("i", { className: icon, style: { fontSize: "1.5rem", color: colors.iconFg } }) : icon }) }),
        getContent() ? null : resolvedChildren
      ]
    }
  );
}

export { KitsDialogControlled as default };
//# sourceMappingURL=index.web.js.map
