import { jsx, Fragment } from 'react/jsx-runtime';
import { isObject } from 'lodash';
import { useKitsTheme } from '../../../contexts/Theme/KitsThemeProvider.web.js';
import Text from '../../../primitives/Text/index.web.js';

const ErrorMessage = ({ errors, invalid, style }) => {
  const { resolveToken } = useKitsTheme();
  const dangerColor = resolveToken("danger");
  if (!errors || !invalid) return null;
  const renderMessage = (message, key) => /* @__PURE__ */ jsx(Text, { p: 0, m: 0, mt: 4, fontSize: 12, fontColor: dangerColor, style, children: message }, key);
  if (typeof errors === "string") {
    return renderMessage(errors);
  }
  if (Array.isArray(errors)) {
    return /* @__PURE__ */ jsx(Fragment, { children: errors.map((err, index) => renderMessage(err, index)) });
  }
  if (isObject(errors) && !("type" in errors)) {
    return /* @__PURE__ */ jsx(Fragment, { children: Object.values(errors).map(
      (err, i) => err?.message && renderMessage(err.message, i)
    ) });
  }
  return null;
};

export { ErrorMessage as default };
//# sourceMappingURL=errormessage.web.js.map
