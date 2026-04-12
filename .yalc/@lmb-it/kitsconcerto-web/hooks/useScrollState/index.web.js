import { useRef, useState, useEffect } from 'react';
import { computeScrollState } from './helper.js';

function useScrollState(options = {}) {
  const { threshold = 60, target } = options;
  const lastY = useRef(0);
  const [scrollState, setScrollState] = useState({
    y: 0,
    isScrolled: false,
    direction: "up"
  });
  useEffect(() => {
    const el = target ?? window;
    const getScrollY = () => el === window ? window.scrollY : el.scrollTop;
    const onScroll = () => {
      const y = getScrollY();
      if (y === lastY.current) return;
      const prevY = lastY.current;
      lastY.current = y;
      setScrollState(
        computeScrollState(prevY, y, threshold)
      );
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, [threshold, target]);
  return { scrollState };
}

export { useScrollState as default };
//# sourceMappingURL=index.web.js.map
