'use strict';

require('react-icons/fa');
require('react-icons/ai');
require('react-icons/io');
require('../../../../../packages/types/src/Components/Molecules/Form/FilePicker/types/filesTypes.cjs');
require('yup');
var index_web = require('../../../../../packages/types/src/Css/constants/breakpoints/index.web.cjs');

const media = {
  base: "",
  xs: `@media (min-width: ${index_web.breakpoints.xs})`,
  sm: `@media (min-width: ${index_web.breakpoints.sm})`,
  md: `@media (min-width: ${index_web.breakpoints.md})`,
  lg: `@media (min-width: ${index_web.breakpoints.lg})`,
  xl: `@media (min-width: ${index_web.breakpoints.xl})`,
  xxl: `@media (min-width: ${index_web.breakpoints.xxl})`,
  xxxl: `@media (min-width: ${index_web.breakpoints.xxxl})`,
  portrait: `@media (orientation: portrait)`,
  landscape: `@media (orientation: landscape)`,
  phone: `@media (max-width: 767px)`,
  tablet: `@media (min-width: 768px)`
};

exports.media = media;
//# sourceMappingURL=media.cjs.map
