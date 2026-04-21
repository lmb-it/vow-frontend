'use strict';

var jsxRuntime = require('react/jsx-runtime');
var selectbutton = require('primereact/selectbutton');
var KitsThemeProvider_web = require('../../../contexts/Theme/KitsThemeProvider.web.cjs');

const SelectButton = (props) => {
  const { resolveToken } = KitsThemeProvider_web.useKitsTheme();
  const primaryColor = resolveToken("primary");
  return /* @__PURE__ */ jsxRuntime.jsx(
    selectbutton.SelectButton,
    {
      ...props,
      pt: {
        button: ({ context }) => context?.selected ? {
          style: { backgroundColor: primaryColor, color: "white", borderColor: primaryColor }
        } : void 0,
        ...props.pt
      }
    }
  );
};

exports.SelectButton = SelectButton;
//# sourceMappingURL=index.web.cjs.map
