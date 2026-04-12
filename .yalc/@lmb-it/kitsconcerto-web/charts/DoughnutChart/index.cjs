'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var index = require('../WidgetContainer/index.cjs');
var plugins = require('../helpers/plugins.cjs');
var context = require('../context.cjs');
var data = require('../helpers/data.cjs');
var chart = require('primereact/chart');
var skeleton = require('primereact/skeleton');

const DoughnutChart = () => {
  const {
    isLoading,
    id = Math.random().toString(16).slice(2),
    data: dataProp,
    aspectRatio = 1,
    colors,
    isDarkMode
  } = React.useContext(context.WidgetsContext);
  const { data: data$1 } = dataProp;
  const doughnutOptions = React.useMemo(() => {
    return {
      color: colors.labels,
      layout: {
        // padding: {
        //     top: 10,
        //     left: 10,
        //     bottom: 10
        // }
      },
      responsive: true,
      maintainAspectRatio: true,
      aspectRatio,
      plugins: {
        legend: {
          position: "right",
          labels: {
            usePointStyle: true,
            font: {
              family: "Poppins, Helvetica, sans-serif",
              size: 12
            }
          }
        }
      }
    };
  }, [isDarkMode]);
  return /* @__PURE__ */ jsxRuntime.jsx(index.default, { children: !isLoading ? /* @__PURE__ */ jsxRuntime.jsx(
    chart.Chart,
    {
      type: "doughnut",
      id,
      options: doughnutOptions,
      width: "100%",
      style: {
        justifyContent: "center",
        display: "flex"
      },
      plugins: [plugins.doughnut(data$1.datasets.length)],
      data: data.generateDoughnutData(data$1)
    }
  ) : /* @__PURE__ */ jsxRuntime.jsx(skeleton.Skeleton, { height: "100%", width: "100%" }) });
};

exports.default = DoughnutChart;
//# sourceMappingURL=index.cjs.map
