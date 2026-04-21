import 'react-icons/fa';
import 'react-icons/ai';
import 'react-icons/io';
import '../../../../../packages/types/src/Components/Molecules/Form/FilePicker/types/filesTypes.js';
import 'yup';
import { breakpoints } from '../../../../../packages/types/src/Css/constants/breakpoints/index.web.js';

const media = {
  base: "",
  xs: `@media (min-width: ${breakpoints.xs})`,
  sm: `@media (min-width: ${breakpoints.sm})`,
  md: `@media (min-width: ${breakpoints.md})`,
  lg: `@media (min-width: ${breakpoints.lg})`,
  xl: `@media (min-width: ${breakpoints.xl})`,
  xxl: `@media (min-width: ${breakpoints.xxl})`,
  xxxl: `@media (min-width: ${breakpoints.xxxl})`,
  portrait: `@media (orientation: portrait)`,
  landscape: `@media (orientation: landscape)`,
  phone: `@media (max-width: 767px)`,
  tablet: `@media (min-width: 768px)`
};

export { media };
//# sourceMappingURL=media.js.map
