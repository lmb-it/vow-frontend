'use strict';

require('react-icons/fa');
require('react-icons/ai');
require('react-icons/io');
require('../../../../../packages/types/src/Components/Molecules/Form/FilePicker/types/filesTypes.cjs');
require('yup');
var index_web = require('../../../../../packages/types/src/Css/map/index.web.cjs');
var media = require('./media.cjs');
var responsive = require('./responsive.cjs');
var validate = require('./validate.cjs');
var theme = require('./theme.cjs');
var translate = require('./translate.cjs');

const buildCssBlock = (translated) => {
  let css = "";
  Object.entries(translated).forEach(([key, raw]) => {
    if (raw == null || key.startsWith("_")) return;
    const cssKey = index_web.default[key];
    if (!cssKey) return;
    const expanded = responsive.expandResponsiveValue(raw);
    Object.entries(expanded).forEach(([cond, value]) => {
      if (!validate.isCssValue(value, cssKey)) return;
      const rule = `${cssKey}: ${theme.toCssValue(cssKey, value)};`;
      if (cond === "base") {
        css += rule;
        return;
      }
      if (cond.includes(":")) {
        const [a, b] = cond.split(":");
        css += `${media.media[a]} { ${media.media[b] ?? ""} { ${rule} } }`;
      } else {
        css += `${media.media[cond]} { ${rule} }`;
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
  const translated = translate.translateCss(props, id);
  let css = buildCssBlock(translated);
  for (const [propKey, selector] of Object.entries(PSEUDO_MAP)) {
    const pseudoProps = props?.[propKey];
    if (pseudoProps && typeof pseudoProps === "object") {
      const pseudoCss = buildCssBlock(translate.translateCss(pseudoProps));
      if (pseudoCss) css += `${selector} { ${pseudoCss} }`;
    }
  }
  return css;
};

exports.style = style;
//# sourceMappingURL=buildCss.cjs.map
