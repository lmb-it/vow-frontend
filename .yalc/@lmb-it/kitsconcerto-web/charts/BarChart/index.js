import { jsx } from 'react/jsx-runtime';
import { useContext, useMemo } from 'react';
import { Chart } from 'primereact/chart';
import ChartContainer from '../WidgetContainer/index.js';
import { generateBarData } from '../helpers/data.js';
import { WidgetsContext } from '../context.js';
import { Skeleton } from 'primereact/skeleton';

const BarChart = () => {
  const {
    isLoading,
    id = Math.random().toString(16).slice(2),
    data: dataProp,
    aspectRatio,
    colors,
    isDarkMode = false
  } = useContext(WidgetsContext);
  const { data } = dataProp;
  const barOptions = useMemo(() => {
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
  return /* @__PURE__ */ jsx(ChartContainer, { children: !isLoading ? /* @__PURE__ */ jsx(
    Chart,
    {
      type: "bar",
      id,
      options: barOptions,
      width: "100%",
      height: "100%",
      data: generateBarData(data, isDarkMode)
    }
  ) : /* @__PURE__ */ jsx(Skeleton, { height: "100%", width: "100%" }) });
};

export { BarChart as default };
//# sourceMappingURL=index.js.map
