'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var index = require('../../primitives/Box/index.cjs');
var index$1 = require('../Flex/index.cjs');
var index_web = require('../../primitives/Heading/index.web.cjs');

const Container = ({
  title,
  rightElement,
  children,
  childrenContainerProps = {},
  ...props
}) => {
  return /* @__PURE__ */ jsxRuntime.jsxs(
    index.default,
    {
      bgColor: "surface-card",
      borderRadius: 8,
      w: "full",
      overflow: "hidden",
      marginBottom: 8,
      shadow: "md",
      ...props,
      children: [
        (!!title || !!rightElement) && /* @__PURE__ */ jsxRuntime.jsxs(
          index$1.default,
          {
            bgColor: "surface-hover",
            borderRadiusTop: 8,
            p: 10,
            flexDirection: "row",
            alignItems: "center",
            h: 58,
            justifyContent: "space-between",
            children: [
              !!title && /* @__PURE__ */ jsxRuntime.jsx(
                index_web.default,
                {
                  as: "h2",
                  fontSize: "lg",
                  fontWeight: "bold",
                  fontColor: "text",
                  letterSpacing: 0,
                  fontFamily: "Poppins,Helvetica,sans-serif",
                  margin: 0,
                  padding: 0,
                  children: title
                }
              ),
              rightElement
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          index$1.default,
          {
            p: 10,
            flex: 1,
            flexDirection: "column",
            ...childrenContainerProps,
            children
          }
        )
      ]
    }
  );
};

exports.default = Container;
//# sourceMappingURL=container.web.cjs.map
