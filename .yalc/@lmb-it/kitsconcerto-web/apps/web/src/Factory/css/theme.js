import 'react-icons/fa';
import 'react-icons/ai';
import 'react-icons/io';
import '../../../../../packages/types/src/Components/Molecules/Form/FilePicker/types/filesTypes.js';
import 'yup';
import { sizingProperties, pxProperties } from '../../../../../packages/types/src/Css/map/index.web.js';
import { isThemeToken } from '../../../../../packages/types/src/Theme/resolvers.js';

const SEMANTIC_TOKEN_NAMES = /* @__PURE__ */ new Set([
  "primary",
  "secondary",
  "success",
  "danger",
  "warning",
  "info",
  "text",
  "text-secondary",
  "bg",
  "bg-subtle",
  "border",
  "surface-ground",
  "surface-card",
  "surface-overlay",
  "surface-hover"
]);
const resolveThemeTokenForWeb = (value) => {
  const dotMatch = value.match(/^([a-zA-Z]+)\.(\d+)$/);
  if (dotMatch) {
    return `var(--kits-${dotMatch[1]}-${dotMatch[2]})`;
  }
  if (value.startsWith("$")) {
    const dotIdx = value.indexOf(".");
    if (dotIdx > 1) {
      const category = value.substring(1, dotIdx);
      const key = value.substring(dotIdx + 1);
      switch (category) {
        case "spacing":
          return `var(--kits-space-${key})`;
        case "radii":
          return `var(--kits-radii-${key})`;
        case "shadows":
          return `var(--kits-shadow-${key})`;
        case "fontSizes":
          return `var(--kits-fontSize-${key})`;
        case "fonts":
          return `var(--kits-font-${key})`;
      }
    }
  }
  if (SEMANTIC_TOKEN_NAMES.has(value)) {
    return `var(--kits-${value})`;
  }
  return value;
};
const toCssValue = (key, value) => {
  if (typeof value === "string" && isThemeToken(value)) {
    const resolved = resolveThemeTokenForWeb(value);
    if (resolved !== value) return resolved;
  }
  if (key === "opacity" && typeof value === "number") {
    return value / 100;
  }
  if (Object.values(sizingProperties).includes(key)) {
    if (value === "full") return "100%";
    if (value === "screen") {
      const isH = key.toLowerCase().includes("h");
      const isNotW = !key.toLowerCase().includes("w");
      return isH && isNotW ? "100vh" : "100vw";
    }
  }
  if (typeof value === "number" && Object.values(pxProperties).includes(key)) {
    return `${value}px`;
  }
  return value;
};

export { toCssValue };
//# sourceMappingURL=theme.js.map
