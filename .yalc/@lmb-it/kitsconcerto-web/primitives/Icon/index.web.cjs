'use strict';

var jsxRuntime = require('react/jsx-runtime');
var index_web = require('../../assets/Icons/index.web.cjs');
require('react-icons/fa');
require('react-icons/ai');
require('react-icons/io');
require('../../packages/types/src/Components/Molecules/Form/FilePicker/types/filesTypes.cjs');
require('yup');
var ResponsiveElement = require('../../apps/web/src/Factory/ResponsiveElement.cjs');
var useSeparator = require('../../apps/web/src/Factory/useSeparator.cjs');
var KitsThemeProvider_web = require('../../contexts/Theme/KitsThemeProvider.web.cjs');

const SIZE_MAP = {
  "2xs": 12,
  "xs": 14,
  "sm": 16,
  "md": 18,
  "lg": 20,
  "xl": 24
};
function Icon({ name, size = "lg", color, strokeWidth, ...rest }) {
  const resolvedName = typeof name === "string" && name.startsWith("pi pi-") ? name.slice(6) : name;
  const IconComponent = typeof resolvedName === "string" ? index_web.IconMap[resolvedName] : resolvedName;
  const { cssProps, nativeProps } = useSeparator.default(rest);
  const { resolveToken } = KitsThemeProvider_web.useKitsTheme();
  if (!IconComponent) return null;
  const numericSize = typeof size === "number" ? size : SIZE_MAP[size] ?? 18;
  const resolvedColor = color ? resolveToken(color) : void 0;
  return /* @__PURE__ */ jsxRuntime.jsx(
    ResponsiveElement.default,
    {
      as: "Box",
      cssProps,
      nativeProps: { ...nativeProps, style: { display: "inline-flex", alignItems: "center" } },
      children: /* @__PURE__ */ jsxRuntime.jsx(IconComponent, { size: numericSize, color: resolvedColor, strokeWidth })
    }
  );
}

exports.Icon = Icon;
//# sourceMappingURL=index.web.cjs.map
