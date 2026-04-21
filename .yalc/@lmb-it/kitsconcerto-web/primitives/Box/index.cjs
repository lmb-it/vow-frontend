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

const Box = ({ children, ref, ...props }) => {
  const { cssProps, nativeProps } = useSeparator.default(props);
  const { scrollable, entering, exiting, ...restNativeProps } = nativeProps;
  return /* @__PURE__ */ jsxRuntime.jsx(
    ResponsiveElement.default,
    {
      ref,
      as: "Box",
      scrollable,
      entering,
      exiting,
      additionalStyles: {
        display: "flex",
        flexDirection: "column"
      },
      cssProps,
      nativeProps: restNativeProps,
      children
    }
  );
};

exports.default = Box;
//# sourceMappingURL=index.cjs.map
