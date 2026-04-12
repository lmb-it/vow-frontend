'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var index_web = require('./MainUploader/index.web.cjs');
var reactDndHtml5Backend = require('react-dnd-html5-backend');
var reactDnd = require('react-dnd');
var index_web$1 = require('../helpers/FormContainer/index.web.cjs');

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
  const Element = /* @__PURE__ */ jsxRuntime.jsx(reactDnd.DndProvider, { backend: reactDndHtml5Backend.HTML5Backend, children: /* @__PURE__ */ jsxRuntime.jsx(
    index_web.default,
    {
      name: id,
      ...props
    }
  ) });
  if (attached) {
    return Element;
  }
  return /* @__PURE__ */ jsxRuntime.jsx(reactDnd.DndProvider, { backend: reactDndHtml5Backend.HTML5Backend, children: /* @__PURE__ */ jsxRuntime.jsx(
    index_web$1.default,
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
      children: /* @__PURE__ */ jsxRuntime.jsx(
        index_web.default,
        {
          name: id,
          ...props
        }
      )
    }
  ) });
};

exports.default = FilePicker;
//# sourceMappingURL=index.web.cjs.map
