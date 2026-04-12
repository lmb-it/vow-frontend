import { jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';
import 'react-icons/fa';
import 'react-icons/ai';
import 'react-icons/io';
import '../../packages/types/src/Components/Molecules/Form/FilePicker/types/filesTypes.js';
import 'yup';
import ResponsiveElement from '../../apps/web/src/Factory/ResponsiveElement.js';
import useSeparator from '../../apps/web/src/Factory/useSeparator.js';

const Grid = forwardRef((props, ref) => {
  const { cssProps, nativeProps } = useSeparator(props);
  const { children, ...rest } = nativeProps;
  return /* @__PURE__ */ jsx(
    ResponsiveElement,
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

export { Grid as default };
//# sourceMappingURL=index.web.js.map
