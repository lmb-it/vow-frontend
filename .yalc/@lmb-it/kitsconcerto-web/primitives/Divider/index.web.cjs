'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var divider = require('primereact/divider');
require('react-icons/fa');
require('react-icons/ai');
require('react-icons/io');
require('../../packages/types/src/Components/Molecules/Form/FilePicker/types/filesTypes.cjs');
require('yup');
var ResponsiveElement = require('../../apps/web/src/Factory/ResponsiveElement.cjs');
var useSeparator = require('../../apps/web/src/Factory/useSeparator.cjs');
var KitsThemeProvider_web = require('../../contexts/Theme/KitsThemeProvider.web.cjs');

const Divider = (props) => {
  const { cssProps, nativeProps } = useSeparator.default(props);
  const {
    align,
    children,
    layout = "horizontal",
    type: borderType = "solid",
    unstyled = false,
    ...rest
  } = nativeProps;
  const { resolveToken } = KitsThemeProvider_web.useKitsTheme();
  const dividerColor = resolveToken("divider");
  const style = {};
  if (!unstyled) {
    style["--surface-border"] = dividerColor;
  }
  return /* @__PURE__ */ jsxRuntime.jsx(
    ResponsiveElement.default,
    {
      cssProps,
      nativeProps: rest,
      additionalStyles: {},
      children: /* @__PURE__ */ jsxRuntime.jsx(
        divider.Divider,
        {
          align,
          layout,
          type: borderType,
          unstyled,
          style,
          children
        }
      )
    }
  );
};

exports.default = Divider;
//# sourceMappingURL=index.web.cjs.map
