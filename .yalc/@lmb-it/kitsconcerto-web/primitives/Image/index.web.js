import { jsx } from 'react/jsx-runtime';
import 'react-icons/fa';
import 'react-icons/ai';
import 'react-icons/io';
import '../../packages/types/src/Components/Molecules/Form/FilePicker/types/filesTypes.js';
import 'yup';
import ResponsiveElement from '../../apps/web/src/Factory/ResponsiveElement.js';
import useSeparator from '../../apps/web/src/Factory/useSeparator.js';

const Image = ({ ref, ...props }) => {
  const { cssProps, nativeProps } = useSeparator(props);
  function sourceToWebSrc(source) {
    if (!source) return void 0;
    if (Array.isArray(source)) return source[0]?.uri;
    if (typeof source === "number") return void 0;
    return source.uri;
  }
  if (props.source) {
    props.src = sourceToWebSrc(props.source);
    delete props.source;
  }
  return /* @__PURE__ */ jsx(
    ResponsiveElement,
    {
      nativeProps,
      ref,
      cssProps,
      as: "Image"
    }
  );
};

export { Image as default };
//# sourceMappingURL=index.web.js.map
