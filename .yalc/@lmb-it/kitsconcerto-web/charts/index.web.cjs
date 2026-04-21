'use strict';

var jsxRuntime = require('react/jsx-runtime');
var chart_js = require('chart.js');
var context = require('./context.cjs');

chart_js.Chart.register(
  chart_js.ArcElement,
  chart_js.BarElement,
  chart_js.CategoryScale,
  chart_js.LinearScale,
  chart_js.LineController,
  chart_js.BarController,
  chart_js.DoughnutController,
  chart_js.PointElement,
  chart_js.LineElement,
  chart_js.Title,
  chart_js.Tooltip,
  chart_js.Legend,
  chart_js.Filler
);
const Bar = (props) => {
  return /* @__PURE__ */ jsxRuntime.jsx(context.default, { ...props, type: "BarChart" });
};
const Line = (props) => {
  return /* @__PURE__ */ jsxRuntime.jsx(context.default, { ...props, type: "LineChart" });
};
const Pie = (props) => {
  return /* @__PURE__ */ jsxRuntime.jsx(context.default, { ...props, type: "PieChart" });
};
const Radar = (props) => {
  return /* @__PURE__ */ jsxRuntime.jsx(context.default, { ...props, type: "RadarChart" });
};
const PolarArea = (props) => {
  return /* @__PURE__ */ jsxRuntime.jsx(context.default, { ...props, type: "PolarAreaChart" });
};
const Doughnut = (props) => {
  return /* @__PURE__ */ jsxRuntime.jsx(context.default, { ...props, type: "DoughnutChart" });
};

exports.Bar = Bar;
exports.Doughnut = Doughnut;
exports.Line = Line;
exports.Pie = Pie;
exports.PolarArea = PolarArea;
exports.Radar = Radar;
//# sourceMappingURL=index.web.cjs.map
