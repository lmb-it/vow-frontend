import { jsx } from 'react/jsx-runtime';
import { useContext, useMemo } from 'react';
import ChartContainer from '../WidgetContainer/index.js';
import { generateRadarData } from '../helpers/data.js';
import { WidgetsContext } from '../context.js';
import { Chart } from 'primereact/chart';
import { Skeleton } from 'primereact/skeleton';

const RadarChart = () => {
  const {
    isLoading,
    id = Math.random().toString(16).slice(2),
    data: dataProp,
    aspectRatio,
    isDarkMode = false
  } = useContext(WidgetsContext);
  const { data } = dataProp;
  const fontColor = isDarkMode ? "white" : "black";
  const pieOptions = useMemo(() => {
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
      type: "radar",
      id,
      options: pieOptions,
      width: "100%",
      height: "100%",
      style: {
        justifyContent: "center",
        alignItems: "center",
        display: "flex"
      },
      data: generateRadarData(data, isDarkMode)
    }
  ) : /* @__PURE__ */ jsx(Skeleton, { height: "100%", width: "100%" }) });
};

export { RadarChart as default };
//# sourceMappingURL=index.js.map
