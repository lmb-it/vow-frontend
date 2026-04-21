import { jsx } from 'react/jsx-runtime';
import { ConfirmPopup } from 'primereact/confirmpopup';

function KitsConfirmPopup(props) {
  const { visible, onHide, ...rest } = props;
  return /* @__PURE__ */ jsx(
    ConfirmPopup,
    {
      ...rest,
      visible,
      onHide: () => onHide?.()
    }
  );
}

export { KitsConfirmPopup as default };
//# sourceMappingURL=index.web.js.map
