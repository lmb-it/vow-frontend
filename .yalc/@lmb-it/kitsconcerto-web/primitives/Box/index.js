import { jsx } from 'react/jsx-runtime';
import 'react-icons/fa';
import 'react-icons/ai';
import 'react-icons/io';
import '../../packages/types/src/Components/Molecules/Form/FilePicker/types/filesTypes.js';
import 'yup';
import ResponsiveElement from '../../apps/web/src/Factory/ResponsiveElement.js';
import useSeparator from '../../apps/web/src/Factory/useSeparator.js';

const Box = ({ children, ref, ...props }) => {
  const { cssProps, nativeProps } = useSeparator(props);
  const { scrollable, entering, exiting, ...restNativeProps } = nativeProps;
  return /* @__PURE__ */ jsx(
    ResponsiveElement,
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

export { Box as default };
//# sourceMappingURL=index.js.map
