import { jsx } from 'react/jsx-runtime';
import 'react-icons/fa';
import 'react-icons/ai';
import 'react-icons/io';
import '../../packages/types/src/Components/Molecules/Form/FilePicker/types/filesTypes.js';
import 'yup';
import ResponsiveElement from '../../apps/web/src/Factory/ResponsiveElement.js';
import useSeparator from '../../apps/web/src/Factory/useSeparator.js';
import Flex from '../../layout/Flex/index.js';

const SkeletonText = ({
  isLoaded,
  startColor,
  speed,
  variant,
  container,
  ...props
}) => {
  const { cssProps, nativeProps } = useSeparator(props);
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
  return /* @__PURE__ */ jsx(Flex, { ...container, children: /* @__PURE__ */ jsx(
    ResponsiveElement,
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

export { SkeletonText as default };
//# sourceMappingURL=index.web.js.map
