import { jsx } from 'react/jsx-runtime';
import { TriStateCheckbox } from 'primereact/tristatecheckbox';

const TriStateEditor = (options) => {
  return /* @__PURE__ */ jsx(
    TriStateCheckbox,
    {
      value: options.value,
      onChange: (e) => options.editorCallback && options.editorCallback(e.value)
    }
  );
};

export { TriStateEditor as default };
//# sourceMappingURL=TriStateEditor.js.map
