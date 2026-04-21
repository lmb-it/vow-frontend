import { jsx } from 'react/jsx-runtime';
import { TriStateCheckbox as TriStateCheckbox$1 } from 'primereact/tristatecheckbox';
import useSelectionController from '../../../hooks/useSelectionController.js';
import 'react';
import '../../../contexts/DialogContext.js';

const TriStateCheckbox = (props) => {
  const { value, onChange } = useSelectionController({
    mode: "tristate",
    defaultValue: false
    // Start at false
  });
  return /* @__PURE__ */ jsx(TriStateCheckbox$1, { value, onChange: () => onChange(), ...props });
};

export { TriStateCheckbox };
//# sourceMappingURL=index.web.js.map
