import { jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';
import 'react-icons/fa';
import 'react-icons/ai';
import 'react-icons/io';
import '../../packages/types/src/Components/Molecules/Form/FilePicker/types/filesTypes.js';
import 'yup';
import ResponsiveElement from '../../apps/web/src/Factory/ResponsiveElement.js';
import useSeparator from '../../apps/web/src/Factory/useSeparator.js';

const GridItem = forwardRef((props, ref) => {
  const { cssProps, nativeProps } = useSeparator(props);
  const { children, entering, exiting, ...rest } = nativeProps;
  return /* @__PURE__ */ jsx(
    ResponsiveElement,
    {
      ref,
      entering,
      exiting,
      nativeProps: rest,
      cssProps,
      children
    }
  );
});

export { GridItem as default };
//# sourceMappingURL=index.web.js.map
