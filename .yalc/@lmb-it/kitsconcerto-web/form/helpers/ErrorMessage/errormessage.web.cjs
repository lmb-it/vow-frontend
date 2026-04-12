'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var _ = require('lodash');
var KitsThemeProvider_web = require('../../../contexts/Theme/KitsThemeProvider.web.cjs');
var index_web = require('../../../primitives/Text/index.web.cjs');

const ErrorMessage = ({ errors, invalid, style }) => {
  const { resolveToken } = KitsThemeProvider_web.useKitsTheme();
  const dangerColor = resolveToken("danger");
  if (!errors || !invalid) return null;
  const renderMessage = (message, key) => /* @__PURE__ */ jsxRuntime.jsx(index_web.default, { p: 0, m: 0, mt: 4, fontSize: 12, fontColor: dangerColor, style, children: message }, key);
  if (typeof errors === "string") {
    return renderMessage(errors);
  }
  if (Array.isArray(errors)) {
    return /* @__PURE__ */ jsxRuntime.jsx(jsxRuntime.Fragment, { children: errors.map((err, index) => renderMessage(err, index)) });
  }
  if (_.isObject(errors) && !("type" in errors)) {
    return /* @__PURE__ */ jsxRuntime.jsx(jsxRuntime.Fragment, { children: Object.values(errors).map(
      (err, i) => err?.message && renderMessage(err.message, i)
    ) });
  }
  return null;
};

exports.default = ErrorMessage;
//# sourceMappingURL=errormessage.web.cjs.map
