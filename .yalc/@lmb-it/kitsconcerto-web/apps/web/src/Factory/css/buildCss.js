import 'react-icons/fa';
import 'react-icons/ai';
import 'react-icons/io';
import '../../../../../packages/types/src/Components/Molecules/Form/FilePicker/types/filesTypes.js';
import 'yup';
import mapCssProperties from '../../../../../packages/types/src/Css/map/index.web.js';
import { media } from './media.js';
import { expandResponsiveValue } from './responsive.js';
import { isCssValue } from './validate.js';
import { toCssValue } from './theme.js';
import { translateCss } from './translate.js';

const buildCssBlock = (translated) => {
  let css = "";
  Object.entries(translated).forEach(([key, raw]) => {
    if (raw == null || key.startsWith("_")) return;
    const cssKey = mapCssProperties[key];
    if (!cssKey) return;
    const expanded = expandResponsiveValue(raw);
    Object.entries(expanded).forEach(([cond, value]) => {
      if (!isCssValue(value, cssKey)) return;
      const rule = `${cssKey}: ${toCssValue(cssKey, value)};`;
      if (cond === "base") {
        css += rule;
        return;
      }
      if (cond.includes(":")) {
        const [a, b] = cond.split(":");
        css += `${media[a]} { ${media[b] ?? ""} { ${rule} } }`;
      } else {
        css += `${media[cond]} { ${rule} }`;
      }
    });
  });
  return css;
};
const PSEUDO_MAP = {
  _hover: "&:hover",
  _focus: "&:focus, &:focus-within",
  _focusVisible: "&:focus-visible",
  _active: "&:active",
  _disabled: '&:disabled, &[aria-disabled="true"]',
  _visited: "&:visited",
  _checked: "&:checked",
  _placeholder: "&::placeholder",
  _selection: "&::selection",
  _firstChild: "&:first-child",
  _lastChild: "&:last-child"
};
const style = (props, id = "") => {
  const translated = translateCss(props, id);
  let css = buildCssBlock(translated);
  for (const [propKey, selector] of Object.entries(PSEUDO_MAP)) {
    const pseudoProps = props?.[propKey];
    if (pseudoProps && typeof pseudoProps === "object") {
      const pseudoCss = buildCssBlock(translateCss(pseudoProps));
      if (pseudoCss) css += `${selector} { ${pseudoCss} }`;
    }
  }
  return css;
};

export { style };
//# sourceMappingURL=buildCss.js.map
