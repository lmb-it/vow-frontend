'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
require('react-icons/fa');
require('react-icons/ai');
require('react-icons/io');
require('../../packages/types/src/Components/Molecules/Form/FilePicker/types/filesTypes.cjs');
require('yup');
var ResponsiveElement = require('../../apps/web/src/Factory/ResponsiveElement.cjs');
var useSeparator = require('../../apps/web/src/Factory/useSeparator.cjs');

const KitsScrollView = ({ children, ref, ...props }) => {
  const { cssProps, nativeProps } = useSeparator.default(props);
  return /* @__PURE__ */ jsxRuntime.jsx(
    ResponsiveElement.default,
    {
      ref,
      as: "ScrollView",
      cssProps,
      nativeProps,
      children
    }
  );
};

exports.default = KitsScrollView;
//# sourceMappingURL=index.web.cjs.map
