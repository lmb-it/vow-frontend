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

const spaceScale = {
  xs: "0.25rem",
  sm: "0.5rem",
  md: "0.75rem",
  lg: "1rem",
  xl: "1.25rem",
  "2xl": "1.5rem",
  "3xl": "1.75rem",
  "4xl": "2rem"
};
const VStack = (props) => {
  const { cssProps, nativeProps } = useSeparator.default(props);
  const { space = "md", reversed = false, children, style, entering, exiting, ...rest } = nativeProps;
  const additionalStyles = {
    display: "flex",
    flexDirection: reversed ? "column-reverse" : "column",
    gap: spaceScale[space] ?? spaceScale.md
  };
  return /* @__PURE__ */ jsxRuntime.jsx(
    ResponsiveElement.default,
    {
      ref: props.ref,
      entering,
      exiting,
      nativeProps: rest,
      cssProps,
      additionalStyles,
      children
    }
  );
};

exports.default = VStack;
//# sourceMappingURL=index.web.cjs.map
