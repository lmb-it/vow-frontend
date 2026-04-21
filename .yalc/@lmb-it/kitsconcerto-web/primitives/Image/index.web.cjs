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

const Image = ({ ref, ...props }) => {
  const { cssProps, nativeProps } = useSeparator.default(props);
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
  return /* @__PURE__ */ jsxRuntime.jsx(
    ResponsiveElement.default,
    {
      nativeProps,
      ref,
      cssProps,
      as: "Image"
    }
  );
};

exports.default = Image;
//# sourceMappingURL=index.web.cjs.map
