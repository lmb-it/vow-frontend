import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { useState } from 'react';
import { Slider } from 'primereact/slider';
import { useKitsTheme } from '../../../contexts/Theme/KitsThemeProvider.web.js';
import Flex from '../../../layout/Flex/index.js';

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
  const [localValue, setLocalValue] = useState(
    isRange ? [minValue, minValue] : minValue
  );
  const currentValue = onChange ? value : localValue;
  const { resolveToken } = useKitsTheme();
  const primaryColor = resolveToken("primary");
  return /* @__PURE__ */ jsxs(
    Flex,
    {
      flexDirection: "column",
      gap: 1,
      justifyContent: "center",
      className: "card",
      w: "full",
      children: [
        /* @__PURE__ */ jsx(
          Slider,
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
        /* @__PURE__ */ jsx(Flex, { alignItems: "center", justifyContent: "space-between", children: isRange ? /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx("span", { children: Array.isArray(currentValue) ? currentValue[0] : minValue }),
          /* @__PURE__ */ jsx("span", { children: Array.isArray(currentValue) ? currentValue[1] : maxValue })
        ] }) : /* @__PURE__ */ jsx("span", { children: currentValue ? currentValue : 0 }) })
      ]
    }
  );
};

export { KitsSliders as default };
//# sourceMappingURL=index.web.js.map
