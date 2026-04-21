import { jsx } from 'react/jsx-runtime';
import { useMemo } from 'react';
import styled, { StyleSheetManager } from 'styled-components';
import 'react-icons/fa';
import 'react-icons/ai';
import 'react-icons/io';
import '../../../../packages/types/src/Components/Molecules/Form/FilePicker/types/filesTypes.js';
import 'yup';
import mapCssProperties from '../../../../packages/types/src/Css/map/index.web.js';
import { style } from './css/buildCss.js';
import { buildAnimationClasses } from './animations.js';
import isPropValid from '@emotion/is-prop-valid';
import { Image } from 'primereact/image';
import { Skeleton } from 'primereact/skeleton';
import { Sidebar } from 'primereact/sidebar';

const StyledComponent = styled.div`
    ${(p) => style(p.s, p.id)}
`;
const textComponents = {
  h1: styled.h1` ${(p) => style(p.s, p.id)} `,
  h2: styled.h2` ${(p) => style(p.s, p.id)} `,
  h3: styled.h3` ${(p) => style(p.s, p.id)} `,
  h4: styled.h4` ${(p) => style(p.s, p.id)} `,
  h5: styled.h5` ${(p) => style(p.s, p.id)} `,
  h6: styled.h6` ${(p) => style(p.s, p.id)} `,
  p: styled.p` ${(p) => style(p.s, p.id)} `,
  span: styled.span` ${(p) => style(p.s, p.id)} `,
  small: styled.small` ${(p) => style(p.s, p.id)} `,
  label: styled.label` ${(p) => style(p.s, p.id)} `
};
const primitiveMap = {
  Button: styled.button` ${(p) => style(p.s, p.id)} `,
  Image: styled(Image)` ${(p) => style(p.s, p.id)} `,
  Skeleton: styled(Skeleton)` ${(p) => style(p.s, p.id)} `,
  Card: styled.div` ${(p) => style(p.s, p.id)} `,
  Sidebar: styled(Sidebar)` ${(p) => style(p.s, p.id)} `,
  List: styled.ul` ${(p) => style(p.s, p.id)} `,
  ListItem: styled.li` ${(p) => style(p.s, p.id)} `,
  Svg: styled.svg` ${(p) => style(p.s, p.id)} `,
  a: styled.a` ${(p) => style(p.s, p.id)} `,
  span: styled.span` ${(p) => style(p.s, p.id)} `,
  ScrollView: styled.div` ${(p) => style(p.s, p.id)}; overflow: auto; `
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
  const mergedStyles = useMemo(
    () => ({ ...additionalStyles, ...cssProps, ...scrollable ? { overflow: "auto" } : {} }),
    [cssProps, additionalStyles, scrollable]
  );
  const animationClasses = useMemo(
    () => buildAnimationClasses({ entering, exiting }),
    [entering, exiting]
  );
  const className = useMemo(
    () => [nativeProps?.className, additionalClasses, animationClasses].filter(Boolean).join(" "),
    [nativeProps?.className, additionalClasses, animationClasses]
  );
  const TextTag = useMemo(() => {
    if (as !== "Text" && as !== "Heading") return null;
    const tag = nativeProps?.as;
    if (!tag) return null;
    return textComponents[tag] ?? null;
  }, [as, nativeProps?.as]);
  const Primitive = useMemo(() => {
    if (!as) return null;
    return primitiveMap[as] ?? null;
  }, [as]);
  return /* @__PURE__ */ jsx(StyleSheetManager, { shouldForwardProp: (prop) => (isPrimeComponent && !(prop in mapCssProperties) || isPropValid(prop)) && prop !== "s", children: TextTag ? /* @__PURE__ */ jsx(TextTag, { ref, ...nativeProps, s: mergedStyles, className, children }) : Primitive ? /* @__PURE__ */ jsx(Primitive, { ref, ...nativeProps, s: mergedStyles, className, children }) : /* @__PURE__ */ jsx(StyledComponent, { ref, ...nativeProps, s: mergedStyles, className, children }) });
};

export { ResponsiveElement as default };
//# sourceMappingURL=ResponsiveElement.js.map
