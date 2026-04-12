'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var confirmpopup = require('primereact/confirmpopup');

function KitsConfirmPopup(props) {
  const { visible, onHide, ...rest } = props;
  return /* @__PURE__ */ jsxRuntime.jsx(
    confirmpopup.ConfirmPopup,
    {
      ...rest,
      visible,
      onHide: () => onHide?.()
    }
  );
}

exports.default = KitsConfirmPopup;
//# sourceMappingURL=index.web.cjs.map
