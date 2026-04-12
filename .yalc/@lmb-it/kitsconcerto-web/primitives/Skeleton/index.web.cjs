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
var index = require('../../layout/Flex/index.cjs');

const SkeletonText = ({
  isLoaded,
  startColor,
  speed,
  variant,
  container,
  ...props
}) => {
  const { cssProps, nativeProps } = useSeparator.default(props);
  if (isLoaded) {
    return null;
  }
  function mapVariantToPrimeShape(variant2) {
    switch (variant2) {
      case "circular":
        return "circle";
      case "sharp":
        return "rectangle";
      // Square or sharp cornered block
      case "rounded":
      default:
        return void 0;
    }
  }
  return /* @__PURE__ */ jsxRuntime.jsx(index.default, { ...container, children: /* @__PURE__ */ jsxRuntime.jsx(
    ResponsiveElement.default,
    {
      cssProps,
      nativeProps: {
        shape: mapVariantToPrimeShape(variant),
        ...nativeProps
      },
      as: "Skeleton"
    }
  ) });
};

exports.default = SkeletonText;
//# sourceMappingURL=index.web.cjs.map
