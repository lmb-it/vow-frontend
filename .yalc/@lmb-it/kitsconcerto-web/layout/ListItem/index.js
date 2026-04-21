import { jsx } from 'react/jsx-runtime';
import 'react-icons/fa';
import 'react-icons/ai';
import 'react-icons/io';
import '../../packages/types/src/Components/Molecules/Form/FilePicker/types/filesTypes.js';
import 'yup';
import ResponsiveElement from '../../apps/web/src/Factory/ResponsiveElement.js';
import useSeparator from '../../apps/web/src/Factory/useSeparator.js';

const ListItem = ({ className, children, ref, ...props }) => {
  const { cssProps, nativeProps } = useSeparator(props);
  return /* @__PURE__ */ jsx(
    ResponsiveElement,
    {
      ref,
      additionalClasses: className,
      cssProps,
      nativeProps,
      as: "ListItem",
      children
    }
  );
};

export { ListItem as default };
//# sourceMappingURL=index.js.map
