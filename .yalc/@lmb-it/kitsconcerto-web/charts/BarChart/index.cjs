'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var chart = require('primereact/chart');
var index = require('../WidgetContainer/index.cjs');
var data = require('../helpers/data.cjs');
var context = require('../context.cjs');
var skeleton = require('primereact/skeleton');

const BarChart = () => {
  const {
    isLoading,
    id = Math.random().toString(16).slice(2),
    data: dataProp,
    aspectRatio,
    colors,
    isDarkMode = false
  } = React.useContext(context.WidgetsContext);
  const { data: data$1 } = dataProp;
  const barOptions = React.useMemo(() => {
    return {
      color: colors.labels,
      scales: {
        x: {
          grid: {
            color: colors.gridLines,
            tickWidth: 5
          },
          ticks: {
            color: colors.gridLines,
            textStrokeWidth: 25,
            autoSkip: true,
            maxTicksLimit: 15
          }
        },
        y: {
          grid: {
            color: colors.gridLines,
            tickWidth: 5
          },
          ticks: {
            color: colors.gridLines,
            textStrokeWidth: 25,
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
  }, [isDarkMode]);
  return /* @__PURE__ */ jsxRuntime.jsx(index.default, { children: !isLoading ? /* @__PURE__ */ jsxRuntime.jsx(
    chart.Chart,
    {
      type: "bar",
      id,
      options: barOptions,
      width: "100%",
      height: "100%",
      data: data.generateBarData(data$1, isDarkMode)
    }
  ) : /* @__PURE__ */ jsxRuntime.jsx(skeleton.Skeleton, { height: "100%", width: "100%" }) });
};

exports.default = BarChart;
//# sourceMappingURL=index.cjs.map
