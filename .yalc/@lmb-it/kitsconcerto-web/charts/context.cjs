'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var index$1 = require('./LineChart/index.cjs');
var index$2 = require('./PieChart/index.cjs');
var index$5 = require('./DoughnutChart/index.cjs');
var index = require('./BarChart/index.cjs');
var index$3 = require('./RadarChart/index.cjs');
var index$4 = require('./PolarAreaChart/index.cjs');
var index_web = require('../contexts/Theme/index.web.cjs');

const WidgetsContext = React.createContext(
  {}
);
WidgetsContext.displayName = "WidgetsContext";
const Widgets = ({
  data,
  id = Math.random().toString(16).slice(2),
  label,
  enableMultipleDatasets = true,
  enableExportButton,
  type,
  containerProps = {},
  aspectRatio,
  info,
  horizontal = false,
  isLoading,
  height,
  centerDisplay
}) => {
  const { theme } = index_web.useTheme();
  const gridLines = "rgba(0, 0, 0, 0.3)";
  const labels = "black";
  const colors = {
    labels,
    gridLines
  };
  return /* @__PURE__ */ jsxRuntime.jsxs(
    WidgetsContext.Provider,
    {
      value: {
        data,
        isDarkMode: theme == "dark",
        id,
        label,
        isLoading,
        info,
        aspectRatio,
        horizontal,
        containerProps,
        enableMultipleDatasets,
        enableExportButton,
        colors,
        height,
        centerDisplay
      },
      children: [
        type === "BarChart" && /* @__PURE__ */ jsxRuntime.jsx(index.default, {}),
        type === "LineChart" && /* @__PURE__ */ jsxRuntime.jsx(index$1.default, {}),
        type === "PieChart" && /* @__PURE__ */ jsxRuntime.jsx(index$2.default, {}),
        type === "RadarChart" && /* @__PURE__ */ jsxRuntime.jsx(index$3.default, {}),
        type === "PolarAreaChart" && /* @__PURE__ */ jsxRuntime.jsx(index$4.default, {}),
        type === "DoughnutChart" && /* @__PURE__ */ jsxRuntime.jsx(index$5.default, {})
      ]
    }
  );
};

exports.WidgetsContext = WidgetsContext;
exports.default = Widgets;
//# sourceMappingURL=context.cjs.map
