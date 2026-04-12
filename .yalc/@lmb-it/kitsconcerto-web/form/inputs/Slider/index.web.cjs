'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var slider = require('primereact/slider');
var KitsThemeProvider_web = require('../../../contexts/Theme/KitsThemeProvider.web.cjs');
var index = require('../../../layout/Flex/index.cjs');

const KitsSliders = ({
  minValue = 0,
  maxValue = 100,
  prefix,
  orientation = "horizontal",
  value,
  isRange,
  onChange,
  required,
  onSlideEnd,
  className,
  ...props
}) => {
  const [localValue, setLocalValue] = React.useState(
    isRange ? [minValue, minValue] : minValue
  );
  const currentValue = onChange ? value : localValue;
  const { resolveToken } = KitsThemeProvider_web.useKitsTheme();
  const primaryColor = resolveToken("primary");
  return /* @__PURE__ */ jsxRuntime.jsxs(
    index.default,
    {
      flexDirection: "column",
      gap: 1,
      justifyContent: "center",
      className: "card",
      w: "full",
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(
          slider.Slider,
          {
            className: "w-full",
            value: currentValue,
            prefix,
            required,
            min: minValue,
            max: maxValue,
            orientation,
            onChange: (event) => {
              onChange ? onChange(event) : setLocalValue(event.value);
            },
            onSlideEnd,
            range: isRange,
            pt: {
              range: {
                style: { backgroundColor: primaryColor }
              },
              handle: {
                style: { backgroundColor: primaryColor, borderColor: primaryColor }
              }
            }
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(index.default, { alignItems: "center", justifyContent: "space-between", children: isRange ? /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
          /* @__PURE__ */ jsxRuntime.jsx("span", { children: Array.isArray(currentValue) ? currentValue[0] : minValue }),
          /* @__PURE__ */ jsxRuntime.jsx("span", { children: Array.isArray(currentValue) ? currentValue[1] : maxValue })
        ] }) : /* @__PURE__ */ jsxRuntime.jsx("span", { children: currentValue ? currentValue : 0 }) })
      ]
    }
  );
};

exports.default = KitsSliders;
//# sourceMappingURL=index.web.cjs.map
