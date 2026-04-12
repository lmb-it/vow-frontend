'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var toast = require('primereact/toast');
var progressspinner = require('primereact/progressspinner');
var index = require('../../layout/Flex/index.cjs');

const KitsToast = ({ ref }) => {
  const topLeftRef = React.useRef(null);
  const topRightRef = React.useRef(null);
  const bottomLeftRef = React.useRef(null);
  const bottomRightRef = React.useRef(null);
  const topCenterRef = React.useRef(null);
  const bottomCenterRef = React.useRef(null);
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
  const toast$1 = (severity, summary, body = "", position = "bottom-center", isUpdate = false) => {
    const toastRef = getToastRef(position);
    if (!toastRef.current) return;
    const action = isUpdate ? toastRef.current.replace : toastRef.current.show;
    if (severity === "loading") {
      action({
        severity: "info",
        summary,
        detail: body,
        sticky: true,
        content: /* @__PURE__ */ jsxRuntime.jsxs(index.default, { flex: 1, flexDirection: "row", alignItems: "center", gap: 10, children: [
          /* @__PURE__ */ jsxRuntime.jsx(
            progressspinner.ProgressSpinner,
            {
              style: { width: 25, height: 25 },
              strokeWidth: "8",
              fill: "var(--surface-ground)",
              animationDuration: ".5s"
            }
          ),
          /* @__PURE__ */ jsxRuntime.jsx("div", { className: "font-medium text-lg text-900", children: summary })
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
  React.useImperativeHandle(ref, () => ({ toast: toast$1, dismiss, dismissAll }));
  return /* @__PURE__ */ jsxRuntime.jsxs(React.Fragment, { children: [
    /* @__PURE__ */ jsxRuntime.jsx(toast.Toast, { ref: topLeftRef, position: "top-left" }),
    /* @__PURE__ */ jsxRuntime.jsx(toast.Toast, { ref: topRightRef, position: "top-right" }),
    /* @__PURE__ */ jsxRuntime.jsx(toast.Toast, { ref: bottomLeftRef, position: "bottom-left" }),
    /* @__PURE__ */ jsxRuntime.jsx(toast.Toast, { ref: bottomRightRef, position: "bottom-right" }),
    /* @__PURE__ */ jsxRuntime.jsx(toast.Toast, { ref: topCenterRef, position: "top-center" }),
    /* @__PURE__ */ jsxRuntime.jsx(toast.Toast, { ref: bottomCenterRef, position: "bottom-center" })
  ] });
};

exports.default = KitsToast;
//# sourceMappingURL=index.web.cjs.map
