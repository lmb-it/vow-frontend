'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var alert_web = require('./alert.web.cjs');

const Alert = ({ status, variant, className, withIcon, children, title, description }) => {
  return /* @__PURE__ */ jsxRuntime.jsxs(alert_web.default, { status, className, variant, children: [
    withIcon && /* @__PURE__ */ jsxRuntime.jsx(alert_web.AlertIcon, { status }),
    title && /* @__PURE__ */ jsxRuntime.jsx(alert_web.AlertTitle, { children: title }),
    description && /* @__PURE__ */ jsxRuntime.jsx(alert_web.AlertDescription, { children: description }),
    children
  ] });
};

exports.AlertDescription = alert_web.AlertDescription;
exports.AlertIcon = alert_web.AlertIcon;
exports.AlertTitle = alert_web.AlertTitle;
exports.default = Alert;
//# sourceMappingURL=index.web.cjs.map
