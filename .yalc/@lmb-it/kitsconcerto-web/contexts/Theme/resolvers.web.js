import 'react-icons/fa';
import 'react-icons/ai';
import 'react-icons/io';
import '../../packages/types/src/Components/Molecules/Form/FilePicker/types/filesTypes.js';
import 'yup';
import { resolveTokenValue } from '../../packages/types/src/Theme/resolvers.js';

function generateCssVariables(theme, colorMode) {
  const lines = [];
  for (const [family, scale] of Object.entries(theme.colors)) {
    for (const [shade, hex] of Object.entries(scale)) {
      lines.push(`  --kits-${family}-${shade}: ${hex};`);
      lines.push(`  --${family}-${shade}: ${hex};`);
    }
  }
  const semantics = theme.semanticTokens[colorMode];
  for (const [name, ref] of Object.entries(semantics)) {
    const resolved = resolveTokenValue(theme, colorMode, ref, "native");
    lines.push(`  --kits-${name}: ${resolved};`);
  }
  const primary = resolveTokenValue(theme, colorMode, "primary", "native");
  const text = resolveTokenValue(theme, colorMode, "text", "native");
  const textSecondary = resolveTokenValue(theme, colorMode, "text-secondary", "native");
  const surfaceGround = resolveTokenValue(theme, colorMode, "surface-ground", "native");
  const surfaceCard = resolveTokenValue(theme, colorMode, "surface-card", "native");
  const surfaceOverlay = resolveTokenValue(theme, colorMode, "surface-overlay", "native");
  const surfaceHover = resolveTokenValue(theme, colorMode, "surface-hover", "native");
  const border = resolveTokenValue(theme, colorMode, "border", "native");
  const hexToRgb = (hex) => {
    const h = hex.replace("#", "");
    return `${parseInt(h.substring(0, 2), 16)}, ${parseInt(h.substring(2, 4), 16)}, ${parseInt(h.substring(4, 6), 16)}`;
  };
  lines.push(`  --focus-ring: 0 0 0 0.2rem rgba(${hexToRgb(primary)}, 0.25);`);
  lines.push(`  --primary-color: ${primary};`);
  lines.push(`  --primary: ${primary};`);
  lines.push(`  --primary-reverse: ${colorMode === "dark" ? theme.colors.gray[900] : "#FFFFFF"};`);
  lines.push(`  --text-color: ${text};`);
  lines.push(`  --text-color-secondary: ${textSecondary};`);
  lines.push(`  --surface-ground: ${surfaceGround};`);
  lines.push(`  --surface-card: ${surfaceCard};`);
  lines.push(`  --surface-overlay: ${surfaceOverlay};`);
  lines.push(`  --surface-hover: ${surfaceHover};`);
  lines.push(`  --surface-border: ${border};`);
  const grayEntries = Object.entries(theme.colors.gray);
  const shades = grayEntries.map(([s]) => s);
  const hexValues = grayEntries.map(([, h]) => h);
  if (colorMode === "dark") hexValues.reverse();
  shades.forEach((shade, i) => {
    lines.push(`  --surface-${shade}: ${hexValues[i]};`);
  });
  for (const [key, value] of Object.entries(theme.spacing)) {
    lines.push(`  --kits-space-${key}: ${value};`);
  }
  for (const [key, value] of Object.entries(theme.radii)) {
    lines.push(`  --kits-radii-${key}: ${value};`);
  }
  for (const [key, value] of Object.entries(theme.shadows)) {
    lines.push(`  --kits-shadow-${key}: ${value};`);
  }
  for (const [key, value] of Object.entries(theme.fontSizes)) {
    lines.push(`  --kits-fontSize-${key}: ${value};`);
  }
  for (const [key, value] of Object.entries(theme.fonts)) {
    lines.push(`  --kits-font-${key}: ${value};`);
  }
  return lines.join("\n");
}

export { generateCssVariables };
//# sourceMappingURL=resolvers.web.js.map
