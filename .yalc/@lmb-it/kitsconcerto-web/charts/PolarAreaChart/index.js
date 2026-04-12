import { jsx } from 'react/jsx-runtime';
import { useContext, useMemo } from 'react';
import ChartContainer from '../WidgetContainer/index.js';
import { generatePolarAreaData } from '../helpers/data.js';
import { WidgetsContext } from '../context.js';
import { Chart } from 'primereact/chart';
import { Skeleton } from 'primereact/skeleton';

const PolarAreaChart = () => {
  const {
    isLoading,
    id = Math.random().toString(16).slice(2),
    data: dataProp,
    aspectRatio,
    isDarkMode = false
  } = useContext(WidgetsContext);
  const { data } = dataProp;
  const fontColor = isDarkMode ? "white" : "black";
  const polarAreaOptions = useMemo(() => {
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
  return /* @__PURE__ */ jsx(ChartContainer, { children: !isLoading ? /* @__PURE__ */ jsx(
    Chart,
    {
      type: "polarArea",
      id,
      options: polarAreaOptions,
      width: "100%",
      height: "100%",
      style: {
        justifyContent: "center",
        alignItems: "center",
        display: "flex"
      },
      data: generatePolarAreaData(data, isDarkMode)
    }
  ) : /* @__PURE__ */ jsx(Skeleton, { height: "100%", width: "100%" }) });
};

export { PolarAreaChart as default };
//# sourceMappingURL=index.js.map
