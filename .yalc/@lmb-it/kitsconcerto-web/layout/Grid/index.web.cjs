'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
require('react-icons/fa');
require('react-icons/ai');
require('react-icons/io');
require('../../packages/types/src/Components/Molecules/Form/FilePicker/types/filesTypes.cjs');
require('yup');
var ResponsiveElement = require('../../apps/web/src/Factory/ResponsiveElement.cjs');
var useSeparator = require('../../apps/web/src/Factory/useSeparator.cjs');

const Grid = React.forwardRef((props, ref) => {
  const { cssProps, nativeProps } = useSeparator.default(props);
  const { children, ...rest } = nativeProps;
  return /* @__PURE__ */ jsxRuntime.jsx(
    ResponsiveElement.default,
    {
      ref,
      nativeProps: rest,
      cssProps,
      additionalStyles: {
        //@ts-ignore
        display: "grid"
      },
      children
    }
  );
});

exports.default = Grid;
//# sourceMappingURL=index.web.cjs.map
