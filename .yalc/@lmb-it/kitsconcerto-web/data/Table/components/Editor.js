import { jsx } from 'react/jsx-runtime';
import { Skeleton } from 'primereact/skeleton';
import SliderFilterElement from './Editors/SliderEditor.js';
import TextEditor from './Editors/TextEditor.js';
import MultiSelectEditor from './Editors/MultiSelectEditor.js';
import ButtonsFilterElement from './Editors/ButtonsEditor.js';
import DropdownEditor from './Editors/DropdownEditor.js';
import TriStateEditor from './Editors/TriStateEditor.js';
import PhoneEditor from './Editors/PhoneEditor.js';
import DateFilterTemplate$1 from './Editors/DateEditor.js';
import DateFilterTemplate from './Editors/DateRangeEditor.js';

const PickEditorElement = ({ Editor, isLoading, options }) => {
  if (isLoading) {
    return /* @__PURE__ */ jsx(Skeleton, { className: "mb-2" });
  }
  if (Editor?.type == "multiSelect") {
    return /* @__PURE__ */ jsx(MultiSelectEditor, { list: Editor.list, ...options });
  } else if (Editor?.type == "buttons") {
    return /* @__PURE__ */ jsx(
      ButtonsFilterElement,
      {
        list: Editor.list,
        isMultiple: Editor.isMultiple,
        ...options
      }
    );
  } else if (Editor?.type == "dropdown") {
    return /* @__PURE__ */ jsx(DropdownEditor, { list: Editor.list, ...options });
  } else if (Editor?.type == "tristate") {
    return /* @__PURE__ */ jsx(TriStateEditor, { ...options });
  } else if (Editor?.type == "range" || Editor?.type == "number") {
    return /* @__PURE__ */ jsx(
      SliderFilterElement,
      {
        min: Editor.min ?? 0,
        max: Editor.max ?? 100,
        ...options
      }
    );
  } else if (Editor?.type == "phone") {
    return /* @__PURE__ */ jsx(PhoneEditor, { ...options });
  } else if (Editor?.type == "date") {
    if (Editor.isRanged) {
      return /* @__PURE__ */ jsx(DateFilterTemplate, { ...options });
    } else {
      return /* @__PURE__ */ jsx(DateFilterTemplate$1, { ...options });
    }
  } else if (Editor?.type == "text") {
    return /* @__PURE__ */ jsx(TextEditor, { ...options });
  } else {
    return null;
  }
};

export { PickEditorElement };
//# sourceMappingURL=Editor.js.map
