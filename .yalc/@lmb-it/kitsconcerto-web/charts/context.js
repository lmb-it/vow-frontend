import { jsxs, jsx } from 'react/jsx-runtime';
import { createContext } from 'react';
import LineChart from './LineChart/index.js';
import PieChart from './PieChart/index.js';
import DoughnutChart from './DoughnutChart/index.js';
import BarChart from './BarChart/index.js';
import RadarChart from './RadarChart/index.js';
import PolarAreaChart from './PolarAreaChart/index.js';
import { useTheme } from '../contexts/Theme/index.web.js';

const WidgetsContext = createContext(
  {}
);
WidgetsContext.displayName = "WidgetsContext";
const Widgets = ({
  data,
  id = Math.random().toString(16).slice(2),
  label,
  enableMultipleDatasets = true,
  enableExportButton,
  type,
  containerProps = {},
  aspectRatio,
  info,
  horizontal = false,
  isLoading,
  height,
  centerDisplay
}) => {
  const { theme } = useTheme();
  const gridLines = "rgba(0, 0, 0, 0.3)";
  const labels = "black";
  const colors = {
    labels,
    gridLines
  };
  return /* @__PURE__ */ jsxs(
    WidgetsContext.Provider,
    {
      value: {
        data,
        isDarkMode: theme == "dark",
        id,
        label,
        isLoading,
        info,
        aspectRatio,
        horizontal,
        containerProps,
        enableMultipleDatasets,
        enableExportButton,
        colors,
        height,
        centerDisplay
      },
      children: [
        type === "BarChart" && /* @__PURE__ */ jsx(BarChart, {}),
        type === "LineChart" && /* @__PURE__ */ jsx(LineChart, {}),
        type === "PieChart" && /* @__PURE__ */ jsx(PieChart, {}),
        type === "RadarChart" && /* @__PURE__ */ jsx(RadarChart, {}),
        type === "PolarAreaChart" && /* @__PURE__ */ jsx(PolarAreaChart, {}),
        type === "DoughnutChart" && /* @__PURE__ */ jsx(DoughnutChart, {})
      ]
    }
  );
};

export { WidgetsContext, Widgets as default };
//# sourceMappingURL=context.js.map
