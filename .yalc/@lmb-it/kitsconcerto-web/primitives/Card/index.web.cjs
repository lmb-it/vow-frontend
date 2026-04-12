'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
require('react-icons/fa');
require('react-icons/ai');
require('react-icons/io');
require('../../packages/types/src/Components/Molecules/Form/FilePicker/types/filesTypes.cjs');
require('yup');
var ResponsiveElement = require('../../apps/web/src/Factory/ResponsiveElement.cjs');
var useSeparator = require('../../apps/web/src/Factory/useSeparator.cjs');
require('../../contexts/DialogContext.cjs');
var useComponentDefaults = require('../../hooks/useComponentDefaults.cjs');

const Card = (rawProps) => {
  const { mergedProps: props, themeStyle, elementStyles } = useComponentDefaults.default("Card", rawProps);
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
  const { cssProps, nativeProps } = useSeparator.default({ variant, size, ...rest });
  const { entering, exiting, ...restNativeProps } = nativeProps;
  const resolvedHeader = typeof header === "function" ? header(props) : header;
  const resolvedTitle = typeof title === "function" ? title(props) : title;
  const resolvedSubTitle = typeof subTitle === "function" ? subTitle(props) : subTitle;
  const resolvedFooter = typeof footer === "function" ? localProps ? footer(localProps) : null : footer;
  const classes = React.useMemo(() => {
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
  return /* @__PURE__ */ jsxRuntime.jsxs(
    ResponsiveElement.default,
    {
      ref,
      entering,
      exiting,
      additionalClasses: classes,
      cssProps: rootCss,
      nativeProps: restNativeProps,
      children: [
        resolvedHeader && (hasSlotStyle("header") ? /* @__PURE__ */ jsxRuntime.jsx(ResponsiveElement.default, { cssProps: elementStyles.header, nativeProps: {}, children: resolvedHeader }) : resolvedHeader),
        resolvedTitle && (hasSlotStyle("title") ? /* @__PURE__ */ jsxRuntime.jsx(ResponsiveElement.default, { cssProps: elementStyles.title, nativeProps: {}, children: typeof resolvedTitle === "string" ? resolvedTitle : resolvedTitle }) : /* @__PURE__ */ jsxRuntime.jsx(jsxRuntime.Fragment, { children: typeof resolvedTitle === "string" ? resolvedTitle : resolvedTitle })),
        resolvedSubTitle && (hasSlotStyle("subTitle") ? /* @__PURE__ */ jsxRuntime.jsx(ResponsiveElement.default, { cssProps: elementStyles.subTitle, nativeProps: {}, children: typeof resolvedSubTitle === "string" ? resolvedSubTitle : resolvedSubTitle }) : /* @__PURE__ */ jsxRuntime.jsx(jsxRuntime.Fragment, { children: typeof resolvedSubTitle === "string" ? resolvedSubTitle : resolvedSubTitle })),
        hasSlotStyle("content") ? /* @__PURE__ */ jsxRuntime.jsx(ResponsiveElement.default, { cssProps: elementStyles.content, nativeProps: {}, children }) : children,
        resolvedFooter && (hasSlotStyle("footer") ? /* @__PURE__ */ jsxRuntime.jsx(ResponsiveElement.default, { cssProps: elementStyles.footer, nativeProps: {}, children: resolvedFooter }) : resolvedFooter)
      ]
    }
  );
};

exports.default = Card;
//# sourceMappingURL=index.web.cjs.map
