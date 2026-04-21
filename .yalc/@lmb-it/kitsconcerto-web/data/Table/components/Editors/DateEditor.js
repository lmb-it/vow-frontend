import { jsx } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import { Calendar } from 'primereact/calendar';

const DateFilterTemplate = (options) => {
  const value = Array.isArray(options.value) ? null : options.value;
  const [selectedValue, setSelectedValue] = useState(value);
  useEffect(() => {
    setSelectedValue(options.value);
  }, [options.value]);
  const adjustDateTime = (date, isStart) => {
    if (!date) return date;
    const adjustedDate = new Date(date);
    {
      adjustedDate.setHours(0, 0, 0, 0);
    }
    return adjustedDate;
  };
  return /* @__PURE__ */ jsx(
    Calendar,
    {
      id: "table-date-filter",
      value: options.value ?? selectedValue,
      dateFormat: "dd/mm/yy",
      placeholder: "dd/mm/yyyy",
      selectionMode: "single",
      view: "date",
      numberOfMonths: 1,
      onChange: (event) => {
        let adjustedValue = event.value;
        adjustedValue = adjustDateTime(adjustedValue);
        options?.editorCallback && options.editorCallback(adjustedValue);
        setSelectedValue(adjustedValue);
      }
    }
  );
};

export { DateFilterTemplate as default };
//# sourceMappingURL=DateEditor.js.map
