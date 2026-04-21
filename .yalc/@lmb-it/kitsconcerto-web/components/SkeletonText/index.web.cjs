'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var skeleton = require('primereact/skeleton');
require('react-icons/fa');
require('react-icons/ai');
require('react-icons/io');
require('../../packages/types/src/Components/Molecules/Form/FilePicker/types/filesTypes.cjs');
require('yup');
require('../../apps/web/src/Factory/ResponsiveElement.cjs');
var useSeparator = require('../../apps/web/src/Factory/useSeparator.cjs');
var index = require('../../layout/Flex/index.cjs');

const SkeletonText = ({
  lines = 3,
  width = "100%",
  spacing = "0.5rem",
  isLoaded,
  children,
  variant,
  style,
  ...props
}) => {
  const { nativeProps } = useSeparator.default(props);
  const lineArray = Array.from({ length: lines });
  if (isLoaded) {
    return /* @__PURE__ */ jsxRuntime.jsx(index.default, { flexDirection: "column", gap: spacing, ...style, ...nativeProps, children });
  }
  return /* @__PURE__ */ jsxRuntime.jsx(index.default, { flexDirection: "column", gap: spacing, ...style, ...nativeProps, children: lineArray.map((_, index) => /* @__PURE__ */ jsxRuntime.jsx(
    skeleton.Skeleton,
    {
      shape: "rectangle",
      width: "100%",
      className: props?.className
    },
    index
  )) });
};

exports.default = SkeletonText;
//# sourceMappingURL=index.web.cjs.map
