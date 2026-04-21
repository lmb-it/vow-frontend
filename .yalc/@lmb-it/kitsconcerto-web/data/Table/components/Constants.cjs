'use strict';

var api = require('primereact/api');

const showFilterMenu = (filter) => {
  if (!filter) {
    return false;
  }
  let showFilterMenu2;
  switch (filter?.type) {
    case "multiSelect":
    case "buttons":
    case "tristate":
      showFilterMenu2 = false;
      break;
    default:
      showFilterMenu2 = true;
      break;
  }
  return showFilterMenu2;
};
const matchModesOptions = (filter, t) => {
  const tr = (key, fallback) => t ? t(key) : fallback;
  const string = [
    { label: tr("contains", "Contains"), value: api.FilterMatchMode.CONTAINS },
    { label: tr("notContains", "Not contains"), value: api.FilterMatchMode.NOT_CONTAINS }
  ];
  const options = [
    { label: tr("equals", "Equals"), value: api.FilterMatchMode.EQUALS },
    { label: tr("notEquals", "Not equals"), value: api.FilterMatchMode.NOT_EQUALS }
  ];
  const number = [
    { label: tr("greaterThan", "Greater than"), value: api.FilterMatchMode.GREATER_THAN },
    {
      label: tr("greaterThanOrEqualTo", "Greater than or equal to"),
      value: api.FilterMatchMode.GREATER_THAN_OR_EQUAL_TO
    },
    { label: tr("equals", "Equals"), value: api.FilterMatchMode.EQUALS },
    { label: tr("notEquals", "Not equals"), value: api.FilterMatchMode.NOT_EQUALS },
    { label: tr("lessThan", "Less than"), value: api.FilterMatchMode.LESS_THAN },
    {
      label: tr("lessThanOrEqualTo", "Less than or equal to"),
      value: api.FilterMatchMode.LESS_THAN_OR_EQUAL_TO
    },
    { label: tr("between", "Between"), value: api.FilterMatchMode.BETWEEN }
  ];
  const multi = [{ label: tr("include", "Include"), value: api.FilterMatchMode.IN }];
  const date = [
    { label: tr("equal", "Equal"), value: api.FilterMatchMode.DATE_IS },
    { label: tr("after", "After"), value: api.FilterMatchMode.DATE_AFTER },
    { label: tr("before", "Before"), value: api.FilterMatchMode.DATE_BEFORE },
    { label: tr("not", "Not"), value: api.FilterMatchMode.DATE_IS_NOT },
    { label: tr("between", "Between"), value: api.FilterMatchMode.BETWEEN }
  ];
  switch (filter?.type) {
    case "multiSelect":
      return multi;
    case "buttons":
      if (filter.isMultiple) {
        return multi;
      } else {
        return string;
      }
    case "range":
    case "number":
      return number;
    case "date":
      return date;
    case "dropdown":
      return options;
    case "tristate":
      return void 0;
    default:
      return options;
  }
};
const getPrimeDataType = (filter) => {
  switch (filter?.type) {
    case "number":
    case "phone":
      return "numeric";
    case "dropdown":
    case "buttons":
    case "tristate":
    case "text":
      return "text";
    case "date":
      return "date";
    case "multiSelect":
    case "range":
      return void 0;
  }
};

exports.getPrimeDataType = getPrimeDataType;
exports.matchModesOptions = matchModesOptions;
exports.showFilterMenu = showFilterMenu;
//# sourceMappingURL=Constants.cjs.map
