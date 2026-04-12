'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');

const Collapse = ({
  isOpen,
  children,
  duration = 300
}) => {
  const contentRef = React.useRef(null);
  const [height, setHeight] = React.useState(0);
  const [shouldRenderAuto, setShouldRenderAuto] = React.useState(false);
  React.useEffect(() => {
    const el = contentRef.current;
    if (!el) return;
    if (isOpen) {
      const scrollHeight = el.scrollHeight;
      setShouldRenderAuto(false);
      setHeight(scrollHeight);
      const timer = setTimeout(() => {
        setShouldRenderAuto(true);
      }, duration);
      return () => clearTimeout(timer);
    } else {
      setShouldRenderAuto(false);
      const currentHeight = el.offsetHeight;
      setHeight(currentHeight);
      requestAnimationFrame(() => {
        setHeight(0);
      });
    }
  }, [isOpen, duration]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    {
      style: {
        height: shouldRenderAuto && isOpen ? "auto" : `${height}px`,
        overflow: "hidden",
        transition: `height ${duration}ms ease`
      },
      children: /* @__PURE__ */ jsxRuntime.jsx("div", { ref: contentRef, children })
    }
  );
};

exports.default = Collapse;
//# sourceMappingURL=index.web.cjs.map
