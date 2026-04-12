import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import SkeletonRows from '../SkeletonRows/index.web.js';
import { Accordion, AccordionTab } from 'primereact/accordion';
import Box from '../../primitives/Box/index.js';
import Heading from '../../primitives/Heading/index.web.js';

const CustomAccordion = ({
  accordionTitle,
  accordionItems,
  isLoading,
  allOpenedByDefault,
  localProps
}) => {
  const [activeIndex, setActiveIndex] = useState(
    localProps?.multiple ? [0] : 0
  );
  useEffect(() => {
    if (allOpenedByDefault) {
      setActiveIndex(
        Array.from({ length: accordionItems?.length ?? 0 }, (_, i) => i)
      );
    }
  }, [allOpenedByDefault]);
  return /* @__PURE__ */ jsxs(
    Box,
    {
      className: "backgrounds base-bg",
      borderRadius: 8,
      overflow: "hidden",
      w: "100%",
      children: [
        !!accordionTitle && /* @__PURE__ */ jsx(
          Heading,
          {
            as: "h2",
            p: 4,
            fontSize: "lg",
            className: "backgrounds header-bg",
            children: accordionTitle
          }
        ),
        isLoading ? /* @__PURE__ */ jsx(SkeletonRows, { rowsLength: accordionItems?.length ?? 0 }) : /* @__PURE__ */ jsx(
          Accordion,
          {
            ...localProps,
            activeIndex,
            multiple: true,
            onTabChange: (e) => setActiveIndex(e.index),
            children: accordionItems && accordionItems.map(({ button, panel, onToggle }, i) => /* @__PURE__ */ jsx(AccordionTab, { header: button, children: panel }, i))
          }
        )
      ]
    }
  );
};

export { CustomAccordion as default };
//# sourceMappingURL=accordion.web.js.map
