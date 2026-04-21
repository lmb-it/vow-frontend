'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var index_web = require('../../helpers/FormContainer/index.web.cjs');
var treeselect = require('primereact/treeselect');
require('../../../contexts/DialogContext.cjs');
var useComponentDefaults = require('../../../hooks/useComponentDefaults.cjs');
var useResolvedStyle = require('../../../hooks/useResolvedStyle.cjs');
var useTreeBuild = require('../hooks/useTreeBuild.cjs');
var KitsThemeProvider_web = require('../../../contexts/Theme/KitsThemeProvider.web.cjs');

const findNodeLabel = (nodes, val) => {
  for (const n of nodes) {
    if (n.key == val) return n.label ?? void 0;
    if (n.children?.length) {
      const found = findNodeLabel(n.children, val);
      if (found !== void 0) return found;
    }
  }
  return void 0;
};
const filterParentsOnly = (nodes) => {
  return nodes.filter((node) => node.children && node.children.length > 0).map((node) => ({
    ...node,
    children: filterParentsOnly(node.children)
  }));
};
const KitsTreeSelect = ({ ref, ...rawProps }) => {
  const { mergedProps: props, themeStyle, elementStyles } = useComponentDefaults.default("TreeSelect", rawProps, "Input");
  const resolvedThemeStyle = useResolvedStyle.default(themeStyle);
  const resolvedRootStyle = useResolvedStyle.default(elementStyles?.root || {});
  const {
    rightAddon,
    leftAddon,
    errors,
    invalid,
    label,
    id,
    placeholder,
    required,
    disabled,
    helperText,
    attached,
    isFloatedLabel,
    inputSize,
    valueMode,
    isMultiple,
    localProps,
    withFilter,
    filterBy,
    hideError,
    onlyParentsWithChildren,
    resetFilterOnHide,
    scrollHeight,
    emptyMessage,
    showClear,
    containerStyle
  } = props;
  const { nodes, value, handleChange } = useTreeBuild.useTreeBuild({
    isStructured: props.isStructured,
    ref
  });
  const filteredNodes = React.useMemo(() => {
    if (!onlyParentsWithChildren) return nodes;
    return filterParentsOnly(nodes);
  }, [nodes, onlyParentsWithChildren]);
  const selectedLabel = React.useMemo(() => {
    if (isMultiple || value == null) return void 0;
    return findNodeLabel(filteredNodes, value);
  }, [isMultiple, value, filteredNodes]);
  const { resolveToken } = KitsThemeProvider_web.useKitsTheme();
  const primaryColor = resolveToken("primary");
  const borderColor = resolveToken("border");
  const Element = /* @__PURE__ */ jsxRuntime.jsx(
    treeselect.TreeSelect,
    {
      value,
      filter: withFilter,
      filterBy: filterBy ?? "label",
      options: filteredNodes,
      display: isMultiple ? valueMode : "comma",
      selectionMode: isMultiple ? "checkbox" : "single",
      onChange: handleChange,
      className: "w-full",
      style: { borderRadius: 0, ...resolvedRootStyle || resolvedThemeStyle },
      placeholder,
      disabled,
      showClear: showClear ?? !required,
      resetFilterOnHide,
      scrollHeight: scrollHeight ? `${scrollHeight}px` : void 0,
      emptyMessage,
      valueTemplate: selectedLabel ?? void 0,
      pt: {
        root: {
          style: {
            borderColor
          }
        },
        // @ts-ignore
        node: ({ context }) => context?.selected ? {
          style: {
            backgroundColor: primaryColor,
            color: "white"
          }
        } : context?.focused ? {
          style: { backgroundColor: `color-mix(in srgb, ${primaryColor} 12%, transparent)` }
        } : void 0,
        nodeCheckbox: {
          box: ({ context }) => ({
            style: {
              borderColor: context?.checked ? primaryColor : borderColor,
              backgroundColor: context?.checked ? primaryColor : "transparent"
            }
          }),
          icon: {
            style: { color: "white" }
          }
        }
      },
      ...localProps
    }
  );
  if (attached) {
    return Element;
  }
  return /* @__PURE__ */ jsxRuntime.jsx(
    index_web.default,
    {
      id,
      inputSize,
      isFloatedLabel,
      rightAddon,
      leftAddon,
      required,
      hideError,
      errors,
      helperText,
      invalid,
      label,
      containerStyle,
      elementStyles,
      children: Element
    }
  );
};

exports.default = KitsTreeSelect;
//# sourceMappingURL=index.web.cjs.map
