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

const Svg = ({ className, children, ref, ...props }) => {
  const { cssProps, nativeProps } = useSeparator.default(props);
  return /* @__PURE__ */ jsxRuntime.jsx(
    ResponsiveElement.default,
    {
      ref,
      additionalClasses: className,
      cssProps,
      additionalStyles: {
        // @ts-ignore
        display: "inline-block",
        lineHeight: "1rem",
        flexShrink: 0,
        verticalAlign: "middle",
        marginInline: "2px",
        width: "1.5rem",
        height: "1.5rem"
      },
      nativeProps,
      as: "Svg",
      children
    }
  );
};

exports.default = Svg;
//# sourceMappingURL=index.cjs.map
