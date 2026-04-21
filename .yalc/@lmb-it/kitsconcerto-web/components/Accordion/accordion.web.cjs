'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var index_web$1 = require('../SkeletonRows/index.web.cjs');
var accordion = require('primereact/accordion');
var index = require('../../primitives/Box/index.cjs');
var index_web = require('../../primitives/Heading/index.web.cjs');

const CustomAccordion = ({
  accordionTitle,
  accordionItems,
  isLoading,
  allOpenedByDefault,
  localProps
}) => {
  const [activeIndex, setActiveIndex] = React.useState(
    localProps?.multiple ? [0] : 0
  );
  React.useEffect(() => {
    if (allOpenedByDefault) {
      setActiveIndex(
        Array.from({ length: accordionItems?.length ?? 0 }, (_, i) => i)
      );
    }
  }, [allOpenedByDefault]);
  return /* @__PURE__ */ jsxRuntime.jsxs(
    index.default,
    {
      className: "backgrounds base-bg",
      borderRadius: 8,
      overflow: "hidden",
      w: "100%",
      children: [
        !!accordionTitle && /* @__PURE__ */ jsxRuntime.jsx(
          index_web.default,
          {
            as: "h2",
            p: 4,
            fontSize: "lg",
            className: "backgrounds header-bg",
            children: accordionTitle
          }
        ),
        isLoading ? /* @__PURE__ */ jsxRuntime.jsx(index_web$1.default, { rowsLength: accordionItems?.length ?? 0 }) : /* @__PURE__ */ jsxRuntime.jsx(
          accordion.Accordion,
          {
            ...localProps,
            activeIndex,
            multiple: true,
            onTabChange: (e) => setActiveIndex(e.index),
            children: accordionItems && accordionItems.map(({ button, panel, onToggle }, i) => /* @__PURE__ */ jsxRuntime.jsx(accordion.AccordionTab, { header: button, children: panel }, i))
          }
        )
      ]
    }
  );
};

exports.default = CustomAccordion;
//# sourceMappingURL=accordion.web.cjs.map
