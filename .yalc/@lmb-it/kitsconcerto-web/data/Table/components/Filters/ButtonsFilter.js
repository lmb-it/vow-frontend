import { jsx } from 'react/jsx-runtime';
import { SelectButton } from 'primereact/selectbutton';

const ButtonsFilterElement = ({ isMultiple, list, ...options }) => {
  return /* @__PURE__ */ jsx(
    SelectButton,
    {
      value: options.value,
      optionValue: "value",
      optionLabel: "label",
      multiple: isMultiple,
      style: {
        borderRadius: 0
      },
      onChange: (e) => options.filterApplyCallback(e.value),
      options: list
    }
  );
};

export { ButtonsFilterElement as default };
//# sourceMappingURL=ButtonsFilter.js.map
