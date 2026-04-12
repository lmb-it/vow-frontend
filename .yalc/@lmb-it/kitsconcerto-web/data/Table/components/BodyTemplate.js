import { jsx } from 'react/jsx-runtime';
import { Tag } from 'primereact/tag';
import { Badge } from 'primereact/badge';
import { Avatar } from 'primereact/avatar';
import { ProgressBar } from 'primereact/progressbar';

const BodyTemplate = (props) => {
  const {
    bodyTemplate: { customStyle, ...template },
    body,
    value
  } = props;
  let style = customStyle ? typeof customStyle == "function" ? customStyle(value) : customStyle : {};
  if (template.type == "progress") {
    let color = template.color ? typeof template.color == "function" ? template.color(value) : template.color : void 0;
    return /* @__PURE__ */ jsx(ProgressBar, { value, color, style });
  } else if (template.type == "tag") {
    let serv;
    if (typeof template.severity == "function") {
      serv = template.severity(value);
    } else {
      serv = template.severity;
    }
    return /* @__PURE__ */ jsx(Tag, { severity: serv, value: body, style });
  } else if (template.type == "badge") {
    let serv;
    if (typeof template.severity == "function") {
      serv = template.severity(value);
    } else {
      serv = template.severity;
    }
    return /* @__PURE__ */ jsx(
      Badge,
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
    return /* @__PURE__ */ jsx(Avatar, { label: body, size: template.size, style });
  }
  return null;
};

export { BodyTemplate as default };
//# sourceMappingURL=BodyTemplate.js.map
