import 'react-icons/fa';
import 'react-icons/ai';
import 'react-icons/io';
import '../../../../packages/types/src/Components/Molecules/Form/FilePicker/types/filesTypes.js';
import 'yup';
import mapCssProperties from '../../../../packages/types/src/Css/map/index.web.js';

const split = (props) => {
  let tempMapCssProperties = {}, tempOtherProps = {};
  for (let key in props) {
    if (key in mapCssProperties) {
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

export { useSeparator as default, split };
//# sourceMappingURL=useSeparator.js.map
