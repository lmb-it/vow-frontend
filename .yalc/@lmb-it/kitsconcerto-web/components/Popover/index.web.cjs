'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var overlaypanel = require('primereact/overlaypanel');
var times = require('primereact/icons/times');
var Button_web = require('../Button/Button.web.cjs');
var index = require('../../layout/Flex/index.cjs');

const CustomPopover = ({
  children,
  label,
  onPopoverClosed,
  onPopoverOpened,
  closeButton = false
}) => {
  const op = React.useRef(null);
  const toggle = (event) => {
    op.current?.toggle(event);
  };
  return /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
    typeof label == "string" && /* @__PURE__ */ jsxRuntime.jsx(Button_web.Button, { onClick: toggle, children: label }),
    typeof label != "string" && /* @__PURE__ */ jsxRuntime.jsx(index.default, { onClick: toggle, children: label }),
    /* @__PURE__ */ jsxRuntime.jsx(
      overlaypanel.OverlayPanel,
      {
        closeIcon: /* @__PURE__ */ jsxRuntime.jsx(times.TimesIcon, {}),
        showCloseIcon: closeButton,
        ref: op,
        onShow: () => {
          onPopoverOpened && onPopoverOpened();
        },
        onHide: () => {
          onPopoverClosed && onPopoverClosed();
        },
        children: typeof children == "function" ? children({ onClose: () => op.current?.hide() }) : children
      }
    )
  ] });
};

exports.default = CustomPopover;
//# sourceMappingURL=index.web.cjs.map
