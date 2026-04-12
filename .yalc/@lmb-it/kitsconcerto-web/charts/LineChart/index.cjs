'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var chart = require('primereact/chart');
var index = require('../WidgetContainer/index.cjs');
var data = require('../helpers/data.cjs');
var context = require('../context.cjs');
var skeleton = require('primereact/skeleton');

const LineChart = () => {
  const {
    isLoading,
    id = Math.random().toString(16).slice(2),
    data: dataProp,
    colors,
    isDarkMode,
    aspectRatio = void 0
  } = React.useContext(context.WidgetsContext);
  const { data: data$1 } = dataProp;
  const lineOptions = {
    color: colors.labels,
    scales: {
      x: {
        grid: {
          color: "transparent"
        },
        ticks: {
          color: colors.gridLines,
          autoSkip: true,
          maxTicksLimit: 15
        }
      },
      y: {
        grid: {
          color: colors.gridLines
        },
        ticks: {
          color: colors.gridLines,
          autoSkip: true,
          maxTicksLimit: 15
        }
      }
    },
    elements: {
      line: {
        tension: 0.35
      }
    },
    interaction: {
      mode: "index",
      intersect: false
    },
    responsive: true,
    maintainAspectRatio: false,
    aspectRatio,
    plugins: {
      legend: {
        labels: {
          usePointStyle: true
        }
      }
    }
  };
  return /* @__PURE__ */ jsxRuntime.jsx(index.default, { children: !isLoading ? /* @__PURE__ */ jsxRuntime.jsx(
    chart.Chart,
    {
      type: "line",
      id,
      options: lineOptions,
      width: "100%",
      height: "100%",
      data: data.generateLineData(data$1)
    }
  ) : /* @__PURE__ */ jsxRuntime.jsx(skeleton.Skeleton, { height: "100%", width: "100%" }) });
};

exports.default = LineChart;
//# sourceMappingURL=index.cjs.map
