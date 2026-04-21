import { jsx } from 'react/jsx-runtime';
import { KitsDropdown } from '../../../../form/selects/index.js';
import { useLanguage } from '../../../../hooks/locale.js';

const DropdownEditor = ({ list, ...options }) => {
  const { t } = useLanguage();
  const listArray = Array.isArray(list) ? list : [];
  return /* @__PURE__ */ jsx(
    KitsDropdown,
    {
      attached: true,
      id: "editor-dropdown",
      value: options.value,
      list: listArray,
      onChange: (e) => options.editorCallback && options.editorCallback(e.value),
      placeholder: t("any"),
      inputSize: "sm"
    }
  );
};

export { DropdownEditor as default };
//# sourceMappingURL=DropdownEditor.js.map
