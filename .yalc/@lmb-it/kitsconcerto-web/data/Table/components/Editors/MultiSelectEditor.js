import { jsx } from 'react/jsx-runtime';
import { KitsMultiSelect } from '../../../../form/selects/index.js';

const MultiSelectEditor = ({ list, ...options }) => {
  const listArray = Array.isArray(list) ? list : [];
  return /* @__PURE__ */ jsx(
    KitsMultiSelect,
    {
      attached: true,
      id: "editor-multiple",
      withFilter: true,
      value: options.value ?? void 0,
      list: listArray,
      filterBy: "label",
      onChange: (e) => options.editorCallback && options.editorCallback(e.value),
      inputSize: "sm"
    }
  );
};

export { MultiSelectEditor as default };
//# sourceMappingURL=MultiSelectEditor.js.map
