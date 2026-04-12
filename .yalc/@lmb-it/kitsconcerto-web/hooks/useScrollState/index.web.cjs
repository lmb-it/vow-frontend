'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var helper = require('./helper.cjs');

function useScrollState(options = {}) {
  const { threshold = 60, target } = options;
  const lastY = React.useRef(0);
  const [scrollState, setScrollState] = React.useState({
    y: 0,
    isScrolled: false,
    direction: "up"
  });
  React.useEffect(() => {
    const el = target ?? window;
    const getScrollY = () => el === window ? window.scrollY : el.scrollTop;
    const onScroll = () => {
      const y = getScrollY();
      if (y === lastY.current) return;
      const prevY = lastY.current;
      lastY.current = y;
      setScrollState(
        helper.computeScrollState(prevY, y, threshold)
      );
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, [threshold, target]);
  return { scrollState };
}

exports.default = useScrollState;
//# sourceMappingURL=index.web.cjs.map
