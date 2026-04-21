import { jsxs, jsx } from 'react/jsx-runtime';
import { useKitsTheme } from '../../contexts/Theme/KitsThemeProvider.web.js';

const CircularProgress = ({
  size = 100,
  strokeWidth = 8,
  value,
  color,
  trackColor,
  loading = false,
  children
}) => {
  const { resolveToken } = useKitsTheme();
  const resolvedColor = color ?? resolveToken("primary");
  const resolvedTrackColor = trackColor ?? resolveToken("gray.200");
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - value / 100 * circumference;
  return /* @__PURE__ */ jsxs(
    "div",
    {
      style: {
        position: "relative",
        width: size,
        height: size,
        display: "inline-flex",
        justifyContent: "center",
        alignItems: "center"
      },
      children: [
        /* @__PURE__ */ jsxs(
          "svg",
          {
            width: size,
            height: size,
            style: {
              animation: loading ? "spin 1s linear infinite" : "none"
              // Spinner animation
            },
            children: [
              /* @__PURE__ */ jsx(
                "circle",
                {
                  cx: size / 2,
                  cy: size / 2,
                  r: radius,
                  fill: "none",
                  stroke: resolvedTrackColor,
                  strokeWidth
                }
              ),
              /* @__PURE__ */ jsx(
                "circle",
                {
                  cx: size / 2,
                  cy: size / 2,
                  r: radius,
                  fill: "none",
                  stroke: resolvedColor,
                  strokeWidth,
                  strokeDasharray: circumference,
                  strokeDashoffset: offset,
                  strokeLinecap: "round",
                  style: {
                    transition: loading ? "none" : "stroke-dashoffset 0.3s ease"
                  }
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsx(
          "div",
          {
            style: {
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            },
            children
          }
        ),
        /* @__PURE__ */ jsx("style", { children: `
          @keyframes spin {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }
        ` })
      ]
    }
  );
};

export { CircularProgress as default };
//# sourceMappingURL=index.web.js.map
