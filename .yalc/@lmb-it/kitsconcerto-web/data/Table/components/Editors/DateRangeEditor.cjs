'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var calendar = require('primereact/calendar');

const DateFilterTemplate = (options) => {
  const value = !Array.isArray(options.value) ? null : options.value;
  const [selectedValue, setSelectedValue] = React.useState(value);
  React.useEffect(() => {
    if (!Array.isArray(options.value)) {
      setSelectedValue(options.value);
    }
  }, [options.value]);
  const adjustDateTime = (date, isStart) => {
    if (!date) return date;
    const adjustedDate = new Date(date);
    if (isStart) {
      adjustedDate.setHours(0, 0, 0, 0);
    } else {
      adjustedDate.setHours(23, 59, 59, 999);
    }
    return adjustedDate;
  };
  return /* @__PURE__ */ jsxRuntime.jsx(
    calendar.Calendar,
    {
      id: "table-date-filter",
      value: options.value ?? selectedValue,
      dateFormat: "dd/mm/yy",
      placeholder: "dd/mm/yyyy - dd/mm/yyyy",
      selectionMode: "range",
      view: "date",
      numberOfMonths: 3,
      onChange: (event) => {
        let adjustedValue = event.value;
        if (Array.isArray(adjustedValue) && adjustedValue.length === 2) {
          adjustedValue = [
            adjustDateTime(adjustedValue[0], true),
            // Start of the first day
            adjustDateTime(adjustedValue[1], false)
            // End of the second day
          ];
        }
        options.editorCallback && options.editorCallback(adjustedValue);
        setSelectedValue(adjustedValue);
      }
    }
  );
};

exports.default = DateFilterTemplate;
//# sourceMappingURL=DateRangeEditor.cjs.map
