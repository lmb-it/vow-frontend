'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('react-icons/fa');
require('react-icons/ai');
require('react-icons/io');
require('../../../../packages/types/src/Components/Molecules/Form/FilePicker/types/filesTypes.cjs');
require('yup');
var index_web = require('../../../../packages/types/src/Css/map/index.web.cjs');

const split = (props) => {
  let tempMapCssProperties = {}, tempOtherProps = {};
  for (let key in props) {
    if (key in index_web.default) {
      tempMapCssProperties[key] = props[key];
    } else {
      tempOtherProps[key] = props[key];
    }
  }
  return {
    cssProps: tempMapCssProperties,
    nativeProps: tempOtherProps
  };
};
const useSeparator = (props) => {
  const afterSplit = split(props);
  const cssProps = afterSplit.cssProps;
  const nativeProps = afterSplit.nativeProps;
  return {
    cssProps,
    nativeProps
  };
};

exports.default = useSeparator;
exports.split = split;
//# sourceMappingURL=useSeparator.cjs.map
