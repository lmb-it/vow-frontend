'use strict';

var jsxRuntime = require('react/jsx-runtime');
var tristatecheckbox = require('primereact/tristatecheckbox');
var useSelectionController = require('../../../hooks/useSelectionController.cjs');
require('react');
require('../../../contexts/DialogContext.cjs');

const TriStateCheckbox = (props) => {
  const { value, onChange } = useSelectionController.default({
    mode: "tristate",
    defaultValue: false
    // Start at false
  });
  return /* @__PURE__ */ jsxRuntime.jsx(tristatecheckbox.TriStateCheckbox, { value, onChange: () => onChange(), ...props });
};

exports.TriStateCheckbox = TriStateCheckbox;
//# sourceMappingURL=index.web.cjs.map
