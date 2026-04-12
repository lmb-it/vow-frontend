import { jsx } from 'react/jsx-runtime';
import { IconMap } from '../../assets/Icons/index.web.js';
import 'react-icons/fa';
import 'react-icons/ai';
import 'react-icons/io';
import '../../packages/types/src/Components/Molecules/Form/FilePicker/types/filesTypes.js';
import 'yup';
import ResponsiveElement from '../../apps/web/src/Factory/ResponsiveElement.js';
import useSeparator from '../../apps/web/src/Factory/useSeparator.js';
import { useKitsTheme } from '../../contexts/Theme/KitsThemeProvider.web.js';

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
  const IconComponent = typeof resolvedName === "string" ? IconMap[resolvedName] : resolvedName;
  const { cssProps, nativeProps } = useSeparator(rest);
  const { resolveToken } = useKitsTheme();
  if (!IconComponent) return null;
  const numericSize = typeof size === "number" ? size : SIZE_MAP[size] ?? 18;
  const resolvedColor = color ? resolveToken(color) : void 0;
  return /* @__PURE__ */ jsx(
    ResponsiveElement,
    {
      as: "Box",
      cssProps,
      nativeProps: { ...nativeProps, style: { display: "inline-flex", alignItems: "center" } },
      children: /* @__PURE__ */ jsx(IconComponent, { size: numericSize, color: resolvedColor, strokeWidth })
    }
  );
}

export { Icon };
//# sourceMappingURL=index.web.js.map
