import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import { useRef } from 'react';
import { OverlayPanel } from 'primereact/overlaypanel';
import { TimesIcon } from 'primereact/icons/times';
import { Button } from '../Button/Button.web.js';
import Flex from '../../layout/Flex/index.js';

const CustomPopover = ({
  children,
  label,
  onPopoverClosed,
  onPopoverOpened,
  closeButton = false
}) => {
  const op = useRef(null);
  const toggle = (event) => {
    op.current?.toggle(event);
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    typeof label == "string" && /* @__PURE__ */ jsx(Button, { onClick: toggle, children: label }),
    typeof label != "string" && /* @__PURE__ */ jsx(Flex, { onClick: toggle, children: label }),
    /* @__PURE__ */ jsx(
      OverlayPanel,
      {
        closeIcon: /* @__PURE__ */ jsx(TimesIcon, {}),
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

export { CustomPopover as default };
//# sourceMappingURL=index.web.js.map
