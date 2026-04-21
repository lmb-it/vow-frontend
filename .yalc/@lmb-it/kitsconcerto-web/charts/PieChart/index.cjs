'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var index = require('../WidgetContainer/index.cjs');
var data = require('../helpers/data.cjs');
var context = require('../context.cjs');
var chart = require('primereact/chart');
var skeleton = require('primereact/skeleton');

const PieChart = () => {
  const {
    isLoading,
    id = Math.random().toString(16).slice(2),
    data: dataProp,
    aspectRatio,
    isDarkMode = false
  } = React.useContext(context.WidgetsContext);
  const { data: data$1 } = dataProp;
  const fontColor = isDarkMode ? "white" : "black";
  const pieOptions = React.useMemo(() => {
    return {
      color: fontColor,
      layout: {
        // padding: {
        //     top: 10,
        //     left: 10,
        //     bottom: 10
        // }
      },
      interaction: {
        mode: "index",
        intersect: false
      },
      cutout: 0,
      maintainAspectRatio: true,
      responsive: true,
      aspectRatio,
      plugins: {
        legend: {
          position: "right",
          labels: {
            usePointStyle: false,
            font: {
              family: "Poppins, Helvetica, sans-serif",
              size: 14
            }
          }
        }
      }
    };
  }, [isDarkMode]);
  return /* @__PURE__ */ jsxRuntime.jsx(index.default, { children: !isLoading ? /* @__PURE__ */ jsxRuntime.jsx(
    chart.Chart,
    {
      type: "pie",
      id,
      options: pieOptions,
      width: "100%",
      height: "100%",
      style: {
        justifyContent: "center",
        alignItems: "center",
        display: "flex"
      },
      data: data.generatePieData(data$1, isDarkMode)
    }
  ) : /* @__PURE__ */ jsxRuntime.jsx(skeleton.Skeleton, { height: "100%", width: "100%" }) });
};

exports.default = PieChart;
//# sourceMappingURL=index.cjs.map
