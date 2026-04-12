import { jsx } from 'react/jsx-runtime';
import { useContext } from 'react';
import { Chart } from 'primereact/chart';
import ChartContainer from '../WidgetContainer/index.js';
import { generateLineData } from '../helpers/data.js';
import { WidgetsContext } from '../context.js';
import { Skeleton } from 'primereact/skeleton';

const LineChart = () => {
  const {
    isLoading,
    id = Math.random().toString(16).slice(2),
    data: dataProp,
    colors,
    isDarkMode,
    aspectRatio = void 0
  } = useContext(WidgetsContext);
  const { data } = dataProp;
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
  return /* @__PURE__ */ jsx(ChartContainer, { children: !isLoading ? /* @__PURE__ */ jsx(
    Chart,
    {
      type: "line",
      id,
      options: lineOptions,
      width: "100%",
      height: "100%",
      data: generateLineData(data)
    }
  ) : /* @__PURE__ */ jsx(Skeleton, { height: "100%", width: "100%" }) });
};

export { LineChart as default };
//# sourceMappingURL=index.js.map
