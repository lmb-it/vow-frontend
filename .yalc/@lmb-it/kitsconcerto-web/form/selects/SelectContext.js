import { jsxs, jsx } from 'react/jsx-runtime';
import { createContext, useState, useCallback, useEffect, useImperativeHandle, useContext } from 'react';
import { arrayType, checkKeys, reMapping } from './helper.js';
import KitsDropdown from './Dropdown/index.web.js';
import KitsMultiSelect from './MultiSelect/index.web.js';
import KitsAutoComplete from './AutoComplete/index.web.js';
import KitsTreeSelect from './TreeSelect/index.web.js';
import KitsListBox from './ListBox/index.web.js';
import KitsCascadeSelect from './CascadeSelect/index.web.js';

const IFormSelectContext = createContext({});
const FormSelect = ({ ref, ...props }) => {
  const [selectedValue, setSelectedValue] = useState(null);
  const [rendererList, setData] = useState([]);
  const {
    withFilter = false,
    shape = "dropdown",
    list,
    onChange,
    labelKey = "label",
    valueKey = "value",
    outputValueKey = "*",
    childrenKey,
    filterBy,
    hideError,
    value
  } = props;
  const isMultiple = "isMultiple" in props && props.isMultiple;
  const isAutocompleteComponent = shape == "autocomplete";
  const isListBoxComponent = shape == "listBox";
  const isDropdownComponent = shape == "dropdown";
  const isMultiSelectComponent = shape == "multiselect";
  const isCascadeSelectComponent = shape == "cascade";
  const isTreeSelectComponent = shape == "treeSelect";
  const onItemChange = (e, item = void 0) => {
    onChange && onChange(e, item);
    const val = e?.target?.value ?? e?.value;
    if (val !== void 0) {
      setSelectedValue(val);
    }
  };
  const bookTheList = (newList) => {
    checkKeys(newList, labelKey, valueKey);
    const mapped = reMapping(newList, 0, labelKey, valueKey, childrenKey);
    setData((prev) => {
      if (JSON.stringify(prev) === JSON.stringify(mapped)) return prev;
      return mapped;
    });
  };
  const getData = useCallback(() => {
    if (typeof list === "function") {
      list().then((res) => {
        if (res.success && res.data) {
          bookTheList(res.data);
        }
      });
    } else {
      if (list) {
        bookTheList(list);
      }
    }
  }, [list]);
  useEffect(() => {
    getData();
  }, [list]);
  useEffect(() => {
    setSelectedValue(value);
  }, [value]);
  useImperativeHandle(
    ref,
    () => ({
      value: selectedValue,
      setValue: setSelectedValue,
      focus: () => {
      }
    }),
    []
  );
  return /* @__PURE__ */ jsxs(
    IFormSelectContext.Provider,
    {
      value: {
        onChange: onItemChange,
        selectedValue,
        list: rendererList,
        labelKey,
        valueKey,
        outputValueKey,
        hideError,
        childrenKey: childrenKey ? childrenKey : arrayType(list) == 1 ? "children" : ""
      },
      children: [
        isAutocompleteComponent && /* @__PURE__ */ jsx(
          KitsAutoComplete,
          {
            isMultiple,
            withFilter,
            filterBy,
            ...props
          }
        ),
        isListBoxComponent && /* @__PURE__ */ jsx(
          KitsListBox,
          {
            ref,
            withFilter,
            filterBy,
            ...props
          }
        ),
        isDropdownComponent && /* @__PURE__ */ jsx(
          KitsDropdown,
          {
            withFilter,
            filterBy,
            ...props
          }
        ),
        isMultiSelectComponent && /* @__PURE__ */ jsx(
          KitsMultiSelect,
          {
            withFilter,
            filterBy,
            ...props
          }
        ),
        isCascadeSelectComponent && /* @__PURE__ */ jsx(
          KitsCascadeSelect,
          {
            withFilter,
            filterBy,
            ...props
          }
        ),
        isTreeSelectComponent && /* @__PURE__ */ jsx(
          KitsTreeSelect,
          {
            withFilter,
            filterBy,
            ...props
          }
        )
      ]
    }
  );
};
const useSelect = () => useContext(IFormSelectContext);

export { FormSelect as default, useSelect };
//# sourceMappingURL=SelectContext.js.map
