'use strict';

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var FieldWrapper_web = require('../layout/FieldWrapper.web.cjs');
var index$3 = require('../fields/Select/index.cjs');
var index$f = require('../fields/InputText/index.cjs');
var index$e = require('../fields/InputNumber/index.cjs');
var index$d = require('../fields/Password/index.cjs');
var index$8 = require('../fields/Radios/index.cjs');
var index$4 = require('../fields/Checkboxes/index.cjs');
var index$7 = require('../fields/Textarea/index.cjs');
var index$6 = require('../fields/FileUploader/index.cjs');
var index$5 = require('../fields/Switch/index.cjs');
var index$b = require('../fields/Phone/index.cjs');
var index$1 = require('../fields/Container/index.cjs');
var index$a = require('../fields/DateField/index.cjs');
var index$c = require('../fields/Location/index.cjs');
var index$9 = require('../fields/ColorPicker/index.cjs');
var index_web = require('../fields/Group/index.web.cjs');
var index$2 = require('../fields/Object/index.cjs');
var index = require('../fields/Combined/index.cjs');
var index_web$1 = require('../../../layout/Grid/index.web.cjs');

const FormRenderer = ({
  elements,
  control,
  getValues,
  groupField,
  grid = {},
  parentPath = "",
  focusedField,
  setFocusedField
}) => {
  const getElement = React.useCallback((elementType) => {
    switch (elementType) {
      case "Email":
      case "Text":
        return index$f.InputText;
      case "Number":
        return index$e.InputNumber;
      case "Password":
        return index$d.Password;
      case "Location":
        return index$c.Location;
      case "Phone":
        return index$b.Phone;
      case "Date":
        return index$a.DateField;
      case "ColorPicker":
        return index$9.ColorPicker;
      case "Radios":
        return index$8.Radios;
      case "Textarea":
        return index$7.Textarea;
      case "Image":
      case "File":
        return index$6.FileUploader;
      case "Switch":
        return index$5.Switch;
      case "Checkbox":
        return index$4.Checkboxes;
      case "Select":
        return index$3.Select;
      case "TreeSelect":
        return index$3.Select;
      case "Tags":
        return index$3.Select;
      case "ListBox":
        return index$3.Select;
      case "Multiselect":
        return index$3.Select;
      case "Group":
        return index_web.Group;
      case "Object":
        return index$2.ObjectElement;
      case "Container":
        return index$1.Container;
      case "Combined":
        return index.CombinedElement;
    }
  }, []);
  return /* @__PURE__ */ jsxRuntime.jsx(
    index_web$1.default,
    {
      columns: 12,
      rowGap: 10,
      colSpan: 12,
      columnGap: 10,
      w: "full",
      m: 0,
      id: "form-rerender",
      position: "relative",
      ...grid,
      children: elements.map((element) => {
        const FieldComponent = getElement(element.type);
        const elementId = `${parentPath}${element.id}`;
        const resolvedElement = elementId !== element.id ? { ...element, id: elementId } : element;
        if (!FieldComponent) {
          console.warn(`No component found for element type: "${resolvedElement.type}"`);
          return null;
        }
        return /* @__PURE__ */ jsxRuntime.jsx(
          FieldWrapper_web.FieldWrapper,
          {
            element: resolvedElement,
            control,
            groupField,
            getValues,
            focusedField,
            setFocusedField,
            children: (props) => /* @__PURE__ */ jsxRuntime.jsx(
              FieldComponent,
              {
                groupField,
                element: resolvedElement,
                control,
                getValues,
                focusedField,
                setFocusedField,
                fieldLogic: props
              }
            )
          },
          elementId
        );
      })
    }
  );
};

exports.FormRenderer = FormRenderer;
//# sourceMappingURL=index.web.cjs.map
