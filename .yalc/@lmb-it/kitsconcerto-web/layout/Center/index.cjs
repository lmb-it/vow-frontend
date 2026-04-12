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

const Center = ({ className, children, ref, ...props }) => {
  const { cssProps, nativeProps } = useSeparator.default(props);
  const { entering, exiting, ...restNativeProps } = nativeProps;
  return /* @__PURE__ */ jsxRuntime.jsx(ResponsiveElement.default, { ref, as: "Center", entering, exiting, additionalStyles: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }, additionalClasses: className, cssProps, nativeProps: restNativeProps, children });
};

exports.default = Center;
//# sourceMappingURL=index.cjs.map
