import { jsx } from 'react/jsx-runtime';
import { KitsDropdown } from '../../../../form/selects/index.js';
import { useLanguage } from '../../../../hooks/locale.js';

const DropdownFilter = ({ list, filter = true, ...options }) => {
  const { t } = useLanguage();
  const listArray = Array.isArray(list) ? list : [];
  return /* @__PURE__ */ jsx(
    KitsDropdown,
    {
      attached: true,
      id: "filter-dropdown",
      value: options.value,
      list: listArray,
      withFilter: filter,
      onChange: (e) => options.filterApplyCallback(e.value),
      placeholder: t("any"),
      inputSize: "sm"
    }
  );
};

export { DropdownFilter as default };
//# sourceMappingURL=DropdownFilter.js.map
