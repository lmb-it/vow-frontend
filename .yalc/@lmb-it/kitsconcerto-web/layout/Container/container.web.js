import { jsxs, jsx } from 'react/jsx-runtime';
import Box from '../../primitives/Box/index.js';
import Flex from '../Flex/index.js';
import Heading from '../../primitives/Heading/index.web.js';

const Container = ({
  title,
  rightElement,
  children,
  childrenContainerProps = {},
  ...props
}) => {
  return /* @__PURE__ */ jsxs(
    Box,
    {
      bgColor: "surface-card",
      borderRadius: 8,
      w: "full",
      overflow: "hidden",
      marginBottom: 8,
      shadow: "md",
      ...props,
      children: [
        (!!title || !!rightElement) && /* @__PURE__ */ jsxs(
          Flex,
          {
            bgColor: "surface-hover",
            borderRadiusTop: 8,
            p: 10,
            flexDirection: "row",
            alignItems: "center",
            h: 58,
            justifyContent: "space-between",
            children: [
              !!title && /* @__PURE__ */ jsx(
                Heading,
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
        /* @__PURE__ */ jsx(
          Flex,
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

export { Container as default };
//# sourceMappingURL=container.web.js.map
