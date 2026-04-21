import { jsx } from 'react/jsx-runtime';
import { KitsMultiSelect } from '../../../../form/selects/index.js';

const MultiSelectFilter = ({ list, filter = true, ...options }) => {
  const listArray = Array.isArray(list) ? list : [];
  return /* @__PURE__ */ jsx(
    KitsMultiSelect,
    {
      attached: true,
      id: "filter-multiple",
      withFilter: filter,
      value: options.value ?? void 0,
      list: listArray,
      filterBy: "label",
      onChange: (e) => options.filterApplyCallback(e.value),
      inputSize: "sm"
    }
  );
};

export { MultiSelectFilter as default };
//# sourceMappingURL=MultiSelectFilter.js.map
