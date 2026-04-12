import { jsx } from 'react/jsx-runtime';
import SliderFilterElement from './Filters/SliderFilter.js';
import TextFilter from './Filters/TextFilter.js';
import MultiSelectFilter from './Filters/MultiSelectFilter.js';
import ButtonsFilterElement from './Filters/ButtonsFilter.js';
import DropdownFilter from './Filters/DropdownFilter.js';
import TriStateFilter from './Filters/TriStateFilter.js';
import PhoneFilter from './Filters/PhoneFilter.js';
import DateFilterTemplate from './Filters/DateFilter.js';
import SkeletonText from '../../../primitives/Skeleton/index.web.js';

const PickFilterElement = ({ filter, isLoading, options, debounceFilterWaitTime, filterMode }) => {
  if (isLoading) {
    return /* @__PURE__ */ jsx(SkeletonText, { className: "mb-2" });
  }
  if (filter?.type == "multiSelect") {
    return /* @__PURE__ */ jsx(MultiSelectFilter, { list: filter.list, filter: filter.filter, ...options });
  } else if (filter?.type == "buttons") {
    return /* @__PURE__ */ jsx(
      ButtonsFilterElement,
      {
        list: filter.list,
        isMultiple: filter.isMultiple,
        ...options
      }
    );
  } else if (filter?.type == "dropdown") {
    return /* @__PURE__ */ jsx(DropdownFilter, { list: filter.list, filter: filter.filter, ...options });
  } else if (filter?.type == "tristate") {
    return /* @__PURE__ */ jsx(TriStateFilter, { ...options });
  } else if (filter?.type == "range" || filter?.type == "number") {
    return /* @__PURE__ */ jsx(
      SliderFilterElement,
      {
        min: filter.min ?? 0,
        max: filter.max ?? 100,
        debounceFilterWaitTime,
        filterMode,
        ...options
      }
    );
  } else if (filter?.type == "phone") {
    return /* @__PURE__ */ jsx(PhoneFilter, { ...options, debounceFilterWaitTime, filterMode });
  } else if (filter?.type == "date") {
    return /* @__PURE__ */ jsx(DateFilterTemplate, { ...options });
  } else if (filter?.type == "text") {
    return /* @__PURE__ */ jsx(TextFilter, { ...options, debounceFilterWaitTime, filterMode });
  } else {
    return null;
  }
};

export { PickFilterElement };
//# sourceMappingURL=Filter.js.map
