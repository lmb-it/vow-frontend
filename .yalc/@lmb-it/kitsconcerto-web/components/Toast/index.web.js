import { jsxs, jsx } from 'react/jsx-runtime';
import { useRef, useImperativeHandle, Fragment } from 'react';
import { Toast } from 'primereact/toast';
import { ProgressSpinner } from 'primereact/progressspinner';
import Flex from '../../layout/Flex/index.js';

const KitsToast = ({ ref }) => {
  const topLeftRef = useRef(null);
  const topRightRef = useRef(null);
  const bottomLeftRef = useRef(null);
  const bottomRightRef = useRef(null);
  const topCenterRef = useRef(null);
  const bottomCenterRef = useRef(null);
  const getToastRef = (position) => {
    switch (position) {
      case "top-left":
        return topLeftRef;
      case "top-right":
        return topRightRef;
      case "bottom-left":
        return bottomLeftRef;
      case "bottom-right":
        return bottomRightRef;
      case "top-center":
        return topCenterRef;
      case "bottom-center":
      default:
        return bottomCenterRef;
    }
  };
  const toast = (severity, summary, body = "", position = "bottom-center", isUpdate = false) => {
    const toastRef = getToastRef(position);
    if (!toastRef.current) return;
    const action = isUpdate ? toastRef.current.replace : toastRef.current.show;
    if (severity === "loading") {
      action({
        severity: "info",
        summary,
        detail: body,
        sticky: true,
        content: /* @__PURE__ */ jsxs(Flex, { flex: 1, flexDirection: "row", alignItems: "center", gap: 10, children: [
          /* @__PURE__ */ jsx(
            ProgressSpinner,
            {
              style: { width: 25, height: 25 },
              strokeWidth: "8",
              fill: "var(--surface-ground)",
              animationDuration: ".5s"
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "font-medium text-lg text-900", children: summary })
        ] })
      });
      return;
    }
    if (severity === "brand") {
      action({
        severity: "info",
        summary,
        detail: body,
        life: 3e3,
        className: "kits-toast-brand"
      });
      return;
    }
    action({
      severity,
      summary,
      detail: body,
      life: 3e3
    });
  };
  const dismiss = (position) => {
    const toastRef = getToastRef(position ?? "bottom-center");
    toastRef.current?.clear();
  };
  const dismissAll = () => {
    topLeftRef.current?.clear();
    topRightRef.current?.clear();
    bottomLeftRef.current?.clear();
    bottomRightRef.current?.clear();
    topCenterRef.current?.clear();
    bottomCenterRef.current?.clear();
  };
  useImperativeHandle(ref, () => ({ toast, dismiss, dismissAll }));
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Toast, { ref: topLeftRef, position: "top-left" }),
    /* @__PURE__ */ jsx(Toast, { ref: topRightRef, position: "top-right" }),
    /* @__PURE__ */ jsx(Toast, { ref: bottomLeftRef, position: "bottom-left" }),
    /* @__PURE__ */ jsx(Toast, { ref: bottomRightRef, position: "bottom-right" }),
    /* @__PURE__ */ jsx(Toast, { ref: topCenterRef, position: "top-center" }),
    /* @__PURE__ */ jsx(Toast, { ref: bottomCenterRef, position: "bottom-center" })
  ] });
};

export { KitsToast as default };
//# sourceMappingURL=index.web.js.map
