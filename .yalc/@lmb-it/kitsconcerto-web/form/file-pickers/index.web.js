import { jsx } from 'react/jsx-runtime';
import MainUploaderWeb from './MainUploader/index.web.js';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';
import KitsContainer from '../helpers/FormContainer/index.web.js';

const FilePicker = (props) => {
  const {
    id,
    helperText,
    disabled,
    label,
    errors,
    hideError,
    invalid,
    attached
  } = props;
  const Element = /* @__PURE__ */ jsx(DndProvider, { backend: HTML5Backend, children: /* @__PURE__ */ jsx(
    MainUploaderWeb,
    {
      name: id,
      ...props
    }
  ) });
  if (attached) {
    return Element;
  }
  return /* @__PURE__ */ jsx(DndProvider, { backend: HTML5Backend, children: /* @__PURE__ */ jsx(
    KitsContainer,
    {
      id,
      className: "file-picker-component",
      disabled,
      label,
      hideError,
      errors,
      invalid,
      helperText,
      isFloatedLabel: false,
      children: /* @__PURE__ */ jsx(
        MainUploaderWeb,
        {
          name: id,
          ...props
        }
      )
    }
  ) });
};

export { FilePicker as default };
//# sourceMappingURL=index.web.js.map
