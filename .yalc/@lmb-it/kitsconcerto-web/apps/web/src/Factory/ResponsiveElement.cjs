'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var styled = require('styled-components');
require('react-icons/fa');
require('react-icons/ai');
require('react-icons/io');
require('../../../../packages/types/src/Components/Molecules/Form/FilePicker/types/filesTypes.cjs');
require('yup');
var index_web = require('../../../../packages/types/src/Css/map/index.web.cjs');
var buildCss = require('./css/buildCss.cjs');
var animations = require('./animations.cjs');
var isPropValid = require('@emotion/is-prop-valid');
var image = require('primereact/image');
var skeleton = require('primereact/skeleton');
var sidebar = require('primereact/sidebar');

const StyledComponent = styled.div`
    ${(p) => buildCss.style(p.s, p.id)}
`;
const textComponents = {
  h1: styled.h1` ${(p) => buildCss.style(p.s, p.id)} `,
  h2: styled.h2` ${(p) => buildCss.style(p.s, p.id)} `,
  h3: styled.h3` ${(p) => buildCss.style(p.s, p.id)} `,
  h4: styled.h4` ${(p) => buildCss.style(p.s, p.id)} `,
  h5: styled.h5` ${(p) => buildCss.style(p.s, p.id)} `,
  h6: styled.h6` ${(p) => buildCss.style(p.s, p.id)} `,
  p: styled.p` ${(p) => buildCss.style(p.s, p.id)} `,
  span: styled.span` ${(p) => buildCss.style(p.s, p.id)} `,
  small: styled.small` ${(p) => buildCss.style(p.s, p.id)} `,
  label: styled.label` ${(p) => buildCss.style(p.s, p.id)} `
};
const primitiveMap = {
  Button: styled.button` ${(p) => buildCss.style(p.s, p.id)} `,
  Image: styled(image.Image)` ${(p) => buildCss.style(p.s, p.id)} `,
  Skeleton: styled(skeleton.Skeleton)` ${(p) => buildCss.style(p.s, p.id)} `,
  Card: styled.div` ${(p) => buildCss.style(p.s, p.id)} `,
  Sidebar: styled(sidebar.Sidebar)` ${(p) => buildCss.style(p.s, p.id)} `,
  List: styled.ul` ${(p) => buildCss.style(p.s, p.id)} `,
  ListItem: styled.li` ${(p) => buildCss.style(p.s, p.id)} `,
  Svg: styled.svg` ${(p) => buildCss.style(p.s, p.id)} `,
  a: styled.a` ${(p) => buildCss.style(p.s, p.id)} `,
  span: styled.span` ${(p) => buildCss.style(p.s, p.id)} `,
  ScrollView: styled.div` ${(p) => buildCss.style(p.s, p.id)}; overflow: auto; `
};
const PRIME_COMPONENTS = /* @__PURE__ */ new Set(["Image", "Sidebar", "Skeleton"]);
const ResponsiveElement = ({
  additionalStyles = {},
  additionalClasses,
  nativeProps,
  cssProps,
  children,
  as,
  scrollable,
  entering,
  exiting,
  ref
}) => {
  const isPrimeComponent = PRIME_COMPONENTS.has(as);
  const mergedStyles = React.useMemo(
    () => ({ ...additionalStyles, ...cssProps, ...scrollable ? { overflow: "auto" } : {} }),
    [cssProps, additionalStyles, scrollable]
  );
  const animationClasses = React.useMemo(
    () => animations.buildAnimationClasses({ entering, exiting }),
    [entering, exiting]
  );
  const className = React.useMemo(
    () => [nativeProps?.className, additionalClasses, animationClasses].filter(Boolean).join(" "),
    [nativeProps?.className, additionalClasses, animationClasses]
  );
  const TextTag = React.useMemo(() => {
    if (as !== "Text" && as !== "Heading") return null;
    const tag = nativeProps?.as;
    if (!tag) return null;
    return textComponents[tag] ?? null;
  }, [as, nativeProps?.as]);
  const Primitive = React.useMemo(() => {
    if (!as) return null;
    return primitiveMap[as] ?? null;
  }, [as]);
  return /* @__PURE__ */ jsxRuntime.jsx(styled.StyleSheetManager, { shouldForwardProp: (prop) => (isPrimeComponent && !(prop in index_web.default) || isPropValid(prop)) && prop !== "s", children: TextTag ? /* @__PURE__ */ jsxRuntime.jsx(TextTag, { ref, ...nativeProps, s: mergedStyles, className, children }) : Primitive ? /* @__PURE__ */ jsxRuntime.jsx(Primitive, { ref, ...nativeProps, s: mergedStyles, className, children }) : /* @__PURE__ */ jsxRuntime.jsx(StyledComponent, { ref, ...nativeProps, s: mergedStyles, className, children }) });
};

exports.default = ResponsiveElement;
//# sourceMappingURL=ResponsiveElement.cjs.map
