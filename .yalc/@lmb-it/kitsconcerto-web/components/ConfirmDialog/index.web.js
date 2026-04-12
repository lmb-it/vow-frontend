import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { ConfirmDialog } from 'primereact/confirmdialog';
import { useSeverityColors } from '../../hooks/useSeverityColors.js';
import { useKitsTheme } from '../../contexts/Theme/KitsThemeProvider.web.js';
import { Button } from '../Button/Button.web.js';
import 'react';
import Text from '../../primitives/Text/index.web.js';

function KitsConfirm(props) {
  const {
    visible = true,
    defaultUI,
    headless,
    type = "secondary",
    icon: IconN,
    message,
    onHide,
    accept,
    reject,
    acceptLabel,
    rejectLabel,
    acceptIcon,
    rejectIcon,
    acceptClassName,
    rejectClassName,
    buttons,
    async: asyncMode,
    children,
    appendTo,
    ...rest
  } = props;
  const colors = useSeverityColors(type);
  const { resolveToken, theme } = useKitsTheme();
  const surfaceColor = resolveToken("surface-card");
  const brandLogo = type === "brand" ? theme.config.logo : null;
  const buildBody = () => ({
    headerRef,
    contentRef,
    footerRef,
    hide,
    message: msg
  }) => {
    const realHeader = msg?.header ?? "";
    const realMessage = msg?.message ?? message;
    const doClick = async (callback, e) => {
      if (asyncMode) {
        await callback?.();
        hide(e);
      } else {
        hide(e);
        callback?.();
      }
    };
    return /* @__PURE__ */ jsxs(
      "div",
      {
        className: "flex flex-column align-items-center p-5 relative w-full",
        style: {
          backgroundColor: surfaceColor,
          ...type !== "secondary" && {
            background: `linear-gradient(${colors.bgTint} 0%, ${surfaceColor} 40%)`
          },
          borderRadius: 16,
          boxShadow: "0 25px 50px -12px rgba(0,0,0,0.25)",
          maxWidth: 420
        },
        children: [
          headless && (IconN || brandLogo) && /* @__PURE__ */ jsx(
            "div",
            {
              style: {
                width: 80,
                height: 80,
                borderRadius: 40,
                backgroundColor: colors.iconBg,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: -40,
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
              },
              children: brandLogo ? brandLogo : typeof IconN === "string" ? /* @__PURE__ */ jsx("i", { className: IconN, style: { fontSize: "2rem", color: colors.iconFg } }) : IconN
            }
          ),
          /* @__PURE__ */ jsx(
            Button,
            {
              icon: "pi pi-times",
              className: "absolute top-0 right-0 mr-2 mt-2 w-2rem h-2rem",
              severity: "secondary",
              outlined: true,
              onClick: (e) => hide(e)
            }
          ),
          /* @__PURE__ */ jsx(
            "span",
            {
              ref: headerRef,
              className: "font-bold text-2xl block mt-3 mb-2 text-center w-full",
              children: realHeader
            }
          ),
          /* @__PURE__ */ jsx(
            Text,
            {
              ref: contentRef,
              as: "p",
              className: "text-color text-center",
              style: { width: "100%" },
              children: realMessage
            }
          ),
          /* @__PURE__ */ jsx(
            "div",
            {
              ref: footerRef,
              className: "flex align-items-center gap-2 mt-5 w-full justify-content-center flex-wrap",
              children: buttons?.length ? buttons.map((b, i) => /* @__PURE__ */ jsx(
                Button,
                {
                  label: b.title,
                  outlined: b.outlined,
                  rounded: b.rounded,
                  severity: b.type ?? type,
                  disabled: b.disabled,
                  loading: b.loading,
                  style: {
                    borderRadius: b.rounded ? 9999 : void 0
                  },
                  className: "min-w-7rem",
                  onClick: () => b.onClick(hide, accept, reject)
                },
                i
              )) : /* @__PURE__ */ jsxs(Fragment, { children: [
                /* @__PURE__ */ jsx(
                  Button,
                  {
                    label: acceptLabel ?? "Accept",
                    icon: acceptIcon,
                    severity: type,
                    className: `min-w-7rem ${acceptClassName ?? ""}`,
                    onClick: (e) => doClick(accept, e)
                  }
                ),
                /* @__PURE__ */ jsx(
                  Button,
                  {
                    label: rejectLabel ?? "Reject",
                    icon: rejectIcon,
                    outlined: true,
                    severity: type,
                    className: `min-w-7rem ${rejectClassName ?? ""}`,
                    onClick: (e) => doClick(reject, e)
                  }
                )
              ] })
            }
          )
        ]
      }
    );
  };
  if (defaultUI) {
    return (
      // @ts-ignore
      /* @__PURE__ */ jsx(
        ConfirmDialog,
        {
          ...rest,
          visible,
          onHide,
          accept,
          reject,
          message,
          icon: typeof IconN === "string" ? IconN : void 0,
          acceptLabel,
          rejectLabel,
          acceptIcon,
          rejectIcon,
          acceptClassName,
          rejectClassName,
          className: `kits-confirm-dialog kits-confirm-${type}`
        }
      )
    );
  }
  const renderedContent = children ?? buildBody();
  return (
    // @ts-ignore
    /* @__PURE__ */ jsx(
      ConfirmDialog,
      {
        ...rest,
        visible,
        onHide,
        accept,
        reject,
        content: renderedContent,
        className: `kits-confirm-dialog kits-confirm-${type}`
      }
    )
  );
}

export { KitsConfirm as default };
//# sourceMappingURL=index.web.js.map
