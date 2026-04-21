import { jsx } from 'react/jsx-runtime';
import { useCallback } from 'react';
import { FieldWrapper } from '../layout/FieldWrapper.web.js';
import { Select } from '../fields/Select/index.js';
import { InputText } from '../fields/InputText/index.js';
import { InputNumber } from '../fields/InputNumber/index.js';
import { Password } from '../fields/Password/index.js';
import { Radios } from '../fields/Radios/index.js';
import { Checkboxes } from '../fields/Checkboxes/index.js';
import { Textarea } from '../fields/Textarea/index.js';
import { FileUploader } from '../fields/FileUploader/index.js';
import { Switch } from '../fields/Switch/index.js';
import { Phone } from '../fields/Phone/index.js';
import { Container } from '../fields/Container/index.js';
import { DateField } from '../fields/DateField/index.js';
import { Location } from '../fields/Location/index.js';
import { ColorPicker } from '../fields/ColorPicker/index.js';
import { Group } from '../fields/Group/index.web.js';
import { ObjectElement } from '../fields/Object/index.js';
import { CombinedElement } from '../fields/Combined/index.js';
import Grid from '../../../layout/Grid/index.web.js';

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
  const getElement = useCallback((elementType) => {
    switch (elementType) {
      case "Email":
      case "Text":
        return InputText;
      case "Number":
        return InputNumber;
      case "Password":
        return Password;
      case "Location":
        return Location;
      case "Phone":
        return Phone;
      case "Date":
        return DateField;
      case "ColorPicker":
        return ColorPicker;
      case "Radios":
        return Radios;
      case "Textarea":
        return Textarea;
      case "Image":
      case "File":
        return FileUploader;
      case "Switch":
        return Switch;
      case "Checkbox":
        return Checkboxes;
      case "Select":
        return Select;
      case "TreeSelect":
        return Select;
      case "Tags":
        return Select;
      case "ListBox":
        return Select;
      case "Multiselect":
        return Select;
      case "Group":
        return Group;
      case "Object":
        return ObjectElement;
      case "Container":
        return Container;
      case "Combined":
        return CombinedElement;
    }
  }, []);
  return /* @__PURE__ */ jsx(
    Grid,
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
        return /* @__PURE__ */ jsx(
          FieldWrapper,
          {
            element: resolvedElement,
            control,
            groupField,
            getValues,
            focusedField,
            setFocusedField,
            children: (props) => /* @__PURE__ */ jsx(
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

export { FormRenderer };
//# sourceMappingURL=index.web.js.map
