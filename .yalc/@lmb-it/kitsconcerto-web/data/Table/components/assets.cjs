'use strict';

var api = require('primereact/api');

const matchModeDefaultValues = {
  multiSelect: api.FilterMatchMode.IN,
  buttons: api.FilterMatchMode.EQUALS,
  dropdown: api.FilterMatchMode.EQUALS,
  date: api.FilterMatchMode.DATE_IS,
  number: api.FilterMatchMode.EQUALS,
  phone: api.FilterMatchMode.CONTAINS,
  checkbox: api.FilterMatchMode.IN,
  tristate: api.FilterMatchMode.EQUALS,
  range: api.FilterMatchMode.BETWEEN,
  text: api.FilterMatchMode.CONTAINS
};

exports.matchModeDefaultValues = matchModeDefaultValues;
//# sourceMappingURL=assets.cjs.map
