import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { useMemo } from 'react';
import 'react-icons/fa';
import 'react-icons/ai';
import 'react-icons/io';
import '../../packages/types/src/Components/Molecules/Form/FilePicker/types/filesTypes.js';
import 'yup';
import ResponsiveElement from '../../apps/web/src/Factory/ResponsiveElement.js';
import useSeparator from '../../apps/web/src/Factory/useSeparator.js';
import '../../contexts/DialogContext.js';
import useComponentDefaults from '../../hooks/useComponentDefaults.js';

const Card = (rawProps) => {
  const { mergedProps: props, themeStyle, elementStyles } = useComponentDefaults("Card", rawProps);
  const {
    title,
    subTitle,
    header,
    footer,
    className,
    variant = "elevated",
    size = "md",
    ref,
    children,
    localProps,
    style,
    ...rest
  } = props;
  const { cssProps, nativeProps } = useSeparator({ variant, size, ...rest });
  const { entering, exiting, ...restNativeProps } = nativeProps;
  const resolvedHeader = typeof header === "function" ? header(props) : header;
  const resolvedTitle = typeof title === "function" ? title(props) : title;
  const resolvedSubTitle = typeof subTitle === "function" ? subTitle(props) : subTitle;
  const resolvedFooter = typeof footer === "function" ? localProps ? footer(localProps) : null : footer;
  const classes = useMemo(() => {
    const c = [];
    if (className) c.push(className);
    return c.join(" ");
  }, [className]);
  const rootCss = {
    ...themeStyle,
    ...cssProps,
    ...style
  };
  const hasSlotStyle = (slotName) => {
    const s = elementStyles[slotName];
    return s && Object.keys(s).length > 0;
  };
  return /* @__PURE__ */ jsxs(
    ResponsiveElement,
    {
      ref,
      entering,
      exiting,
      additionalClasses: classes,
      cssProps: rootCss,
      nativeProps: restNativeProps,
      children: [
        resolvedHeader && (hasSlotStyle("header") ? /* @__PURE__ */ jsx(ResponsiveElement, { cssProps: elementStyles.header, nativeProps: {}, children: resolvedHeader }) : resolvedHeader),
        resolvedTitle && (hasSlotStyle("title") ? /* @__PURE__ */ jsx(ResponsiveElement, { cssProps: elementStyles.title, nativeProps: {}, children: typeof resolvedTitle === "string" ? resolvedTitle : resolvedTitle }) : /* @__PURE__ */ jsx(Fragment, { children: typeof resolvedTitle === "string" ? resolvedTitle : resolvedTitle })),
        resolvedSubTitle && (hasSlotStyle("subTitle") ? /* @__PURE__ */ jsx(ResponsiveElement, { cssProps: elementStyles.subTitle, nativeProps: {}, children: typeof resolvedSubTitle === "string" ? resolvedSubTitle : resolvedSubTitle }) : /* @__PURE__ */ jsx(Fragment, { children: typeof resolvedSubTitle === "string" ? resolvedSubTitle : resolvedSubTitle })),
        hasSlotStyle("content") ? /* @__PURE__ */ jsx(ResponsiveElement, { cssProps: elementStyles.content, nativeProps: {}, children }) : children,
        resolvedFooter && (hasSlotStyle("footer") ? /* @__PURE__ */ jsx(ResponsiveElement, { cssProps: elementStyles.footer, nativeProps: {}, children: resolvedFooter }) : resolvedFooter)
      ]
    }
  );
};

export { Card as default };
//# sourceMappingURL=index.web.js.map
