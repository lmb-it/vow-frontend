import { jsx } from 'react/jsx-runtime';
import { TriStateCheckbox } from 'primereact/tristatecheckbox';

const TriStateFilter = (options) => {
  return /* @__PURE__ */ jsx(
    TriStateCheckbox,
    {
      value: options.value,
      onChange: (e) => options.filterApplyCallback(e.value)
    }
  );
};

export { TriStateFilter as default };
//# sourceMappingURL=TriStateFilter.js.map
