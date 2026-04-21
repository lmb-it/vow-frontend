import { jsx } from 'react/jsx-runtime';
import { useRef, useState, useEffect } from 'react';

const Collapse = ({
  isOpen,
  children,
  duration = 300
}) => {
  const contentRef = useRef(null);
  const [height, setHeight] = useState(0);
  const [shouldRenderAuto, setShouldRenderAuto] = useState(false);
  useEffect(() => {
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
  return /* @__PURE__ */ jsx(
    "div",
    {
      style: {
        height: shouldRenderAuto && isOpen ? "auto" : `${height}px`,
        overflow: "hidden",
        transition: `height ${duration}ms ease`
      },
      children: /* @__PURE__ */ jsx("div", { ref: contentRef, children })
    }
  );
};

export { Collapse as default };
//# sourceMappingURL=index.web.js.map
