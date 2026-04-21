import { jsx } from 'react/jsx-runtime';
import { Skeleton } from 'primereact/skeleton';
import 'react-icons/fa';
import 'react-icons/ai';
import 'react-icons/io';
import '../../packages/types/src/Components/Molecules/Form/FilePicker/types/filesTypes.js';
import 'yup';
import '../../apps/web/src/Factory/ResponsiveElement.js';
import useSeparator from '../../apps/web/src/Factory/useSeparator.js';
import Flex from '../../layout/Flex/index.js';

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
  const { nativeProps } = useSeparator(props);
  const lineArray = Array.from({ length: lines });
  if (isLoaded) {
    return /* @__PURE__ */ jsx(Flex, { flexDirection: "column", gap: spacing, ...style, ...nativeProps, children });
  }
  return /* @__PURE__ */ jsx(Flex, { flexDirection: "column", gap: spacing, ...style, ...nativeProps, children: lineArray.map((_, index) => /* @__PURE__ */ jsx(
    Skeleton,
    {
      shape: "rectangle",
      width: "100%",
      className: props?.className
    },
    index
  )) });
};

export { SkeletonText as default };
//# sourceMappingURL=index.web.js.map
