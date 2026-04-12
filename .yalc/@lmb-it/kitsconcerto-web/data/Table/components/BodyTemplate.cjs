'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var tag = require('primereact/tag');
var badge = require('primereact/badge');
var avatar = require('primereact/avatar');
var progressbar = require('primereact/progressbar');

const BodyTemplate = (props) => {
  const {
    bodyTemplate: { customStyle, ...template },
    body,
    value
  } = props;
  let style = customStyle ? typeof customStyle == "function" ? customStyle(value) : customStyle : {};
  if (template.type == "progress") {
    let color = template.color ? typeof template.color == "function" ? template.color(value) : template.color : void 0;
    return /* @__PURE__ */ jsxRuntime.jsx(progressbar.ProgressBar, { value, color, style });
  } else if (template.type == "tag") {
    let serv;
    if (typeof template.severity == "function") {
      serv = template.severity(value);
    } else {
      serv = template.severity;
    }
    return /* @__PURE__ */ jsxRuntime.jsx(tag.Tag, { severity: serv, value: body, style });
  } else if (template.type == "badge") {
    let serv;
    if (typeof template.severity == "function") {
      serv = template.severity(value);
    } else {
      serv = template.severity;
    }
    return /* @__PURE__ */ jsxRuntime.jsx(
      badge.Badge,
      {
        severity: serv,
        value: body,
        style: {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          ...style
        }
      }
    );
  } else if (template.type == "avatar") {
    return /* @__PURE__ */ jsxRuntime.jsx(avatar.Avatar, { label: body, size: template.size, style });
  }
  return null;
};

exports.default = BodyTemplate;
//# sourceMappingURL=BodyTemplate.cjs.map
