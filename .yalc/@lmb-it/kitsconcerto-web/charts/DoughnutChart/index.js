import { jsx } from 'react/jsx-runtime';
import { useContext, useMemo } from 'react';
import ChartContainer from '../WidgetContainer/index.js';
import { doughnut } from '../helpers/plugins.js';
import { WidgetsContext } from '../context.js';
import { generateDoughnutData } from '../helpers/data.js';
import { Chart } from 'primereact/chart';
import { Skeleton } from 'primereact/skeleton';

const DoughnutChart = () => {
  const {
    isLoading,
    id = Math.random().toString(16).slice(2),
    data: dataProp,
    aspectRatio = 1,
    colors,
    isDarkMode
  } = useContext(WidgetsContext);
  const { data } = dataProp;
  const doughnutOptions = useMemo(() => {
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
  return /* @__PURE__ */ jsx(ChartContainer, { children: !isLoading ? /* @__PURE__ */ jsx(
    Chart,
    {
      type: "doughnut",
      id,
      options: doughnutOptions,
      width: "100%",
      style: {
        justifyContent: "center",
        display: "flex"
      },
      plugins: [doughnut(data.datasets.length)],
      data: generateDoughnutData(data)
    }
  ) : /* @__PURE__ */ jsx(Skeleton, { height: "100%", width: "100%" }) });
};

export { DoughnutChart as default };
//# sourceMappingURL=index.js.map
