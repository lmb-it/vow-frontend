import moment from 'moment';

function valueChecker(value) {
  if (typeof value !== "string") {
    return value;
  }
  const formats = [
    "YYYY-MM-DDTHH:mm:ss.SSSSSSZ",
    "YYYY-MM-DD",
    "DD/MM/YYYY hh:mm:ss A",
    "YYYY-MM-DD HH:mm:ss"
  ];
  for (let i = 0; i < formats.length; i++) {
    const m = moment(value, formats[i], true);
    if (m.isValid()) {
      return m.toDate();
    }
  }
  return value;
}
function fixData(data) {
  return [...data || []].map((d) => {
    const row = {};
    Object.entries(d).forEach(([key, value]) => {
      row[key] = valueChecker(value);
    });
    return row;
  });
}
function revertFilter(filters) {
  const row = {};
  const ff = "YYYY-MM-DD\\THH:mm:ss.000\\Z";
  Object.entries(filters).forEach(([key, value]) => {
    if ("value" in value && value.value instanceof Date) {
      row[key] = {
        ...value,
        value: moment(value.value).format(ff)
      };
    } else {
      row[key] = value;
    }
  });
  return row;
}

export { fixData, revertFilter, valueChecker };
//# sourceMappingURL=utils.js.map
