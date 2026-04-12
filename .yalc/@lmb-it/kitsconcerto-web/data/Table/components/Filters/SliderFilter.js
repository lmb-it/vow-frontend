import { jsx, jsxs } from 'react/jsx-runtime';
import { useState, useEffect, useRef } from 'react';
import { Slider } from 'primereact/slider';
import { InputNumber } from 'primereact/inputnumber';
import { isEqual } from 'lodash';

const NumberFilterElement = ({ min, max, debounceFilterWaitTime, filterMode, ...options }) => {
  const [value, setValue] = useState(null);
  const debounceRef = useRef(null);
  useEffect(() => {
    if (options.filterModel && "value" in options.filterModel) {
      const v = options.filterModel.value;
      setValue(typeof v === "number" ? v : null);
    }
  }, [options.filterModel]);
  const applyFilter = (val) => {
    if (debounceRef.current) clearTimeout(debounceRef.current);
    options.filterApplyCallback(val);
  };
  const onInputChange = (event) => {
    const newValue = event.value ?? null;
    setValue(newValue);
    if (filterMode === "debounce" && newValue !== null) {
      if (debounceRef.current) clearTimeout(debounceRef.current);
      debounceRef.current = setTimeout(() => {
        options.filterApplyCallback(newValue);
      }, debounceFilterWaitTime);
    }
  };
  useEffect(() => {
    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
    };
  }, []);
  return /* @__PURE__ */ jsx(
    InputNumber,
    {
      id: "filter-number",
      value,
      style: { width: "100%" },
      min,
      max,
      onChange: onInputChange,
      onKeyDown: (e) => {
        if (e.key === "Enter") applyFilter(value);
      },
      onBlur: () => applyFilter(value)
    }
  );
};
const RangeFilterElement = ({ min, max, ...options }) => {
  const [value, setValue] = useState([min, max]);
  useEffect(() => {
    if (options.filterModel && "value" in options.filterModel) {
      if (Array.isArray(options.filterModel.value) && options.filterModel.value.length == 2) {
        const v = options.filterModel.value;
        if (typeof v[0] == "number" && typeof v[1] === "number") {
          setValue([v[0], v[1]]);
        }
      } else {
        if (!options.filterModel["value"] && !isEqual(value, [min, max])) {
          setValue([min, max]);
        }
      }
    }
  }, [options.filterModel]);
  return /* @__PURE__ */ jsxs(
    "div",
    {
      style: {
        display: "flex",
        flexDirection: "row",
        gap: 2,
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center"
      },
      children: [
        /* @__PURE__ */ jsx("span", { children: value ? value[0] : min }),
        /* @__PURE__ */ jsx(
          Slider,
          {
            value,
            style: { width: "90%", margin: "0 13px" },
            onChange: (e) => {
              const v = e.value;
              Array.isArray(v) && setValue(v.sort((a, b) => a - b));
            },
            onSlideEnd: (event) => {
              Array.isArray(event.value) && options.filterApplyCallback(
                event.value.sort((a, b) => a - b)
              );
            },
            prefix: "%",
            range: true,
            min,
            max
          }
        ),
        /* @__PURE__ */ jsx("span", { children: value ? value[1] : max })
      ]
    }
  );
};
const SliderFilterElement = ({ debounceFilterWaitTime, filterMode, ...options }) => {
  const isRange = typeof options.filterModel?.matchMode == "string" && options.filterModel.matchMode == "between";
  if (isRange) {
    return /* @__PURE__ */ jsx(RangeFilterElement, { ...options });
  }
  return /* @__PURE__ */ jsx(
    NumberFilterElement,
    {
      ...options,
      debounceFilterWaitTime,
      filterMode
    }
  );
};

export { SliderFilterElement as default };
//# sourceMappingURL=SliderFilter.js.map
