import { jsx } from 'react/jsx-runtime';
import { useMemo } from 'react';
import KitsContainer from '../../helpers/FormContainer/index.web.js';
import { TreeSelect } from 'primereact/treeselect';
import '../../../contexts/DialogContext.js';
import useComponentDefaults from '../../../hooks/useComponentDefaults.js';
import useResolvedStyle from '../../../hooks/useResolvedStyle.js';
import { useTreeBuild } from '../hooks/useTreeBuild.js';
import { useKitsTheme } from '../../../contexts/Theme/KitsThemeProvider.web.js';

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
  const { mergedProps: props, themeStyle, elementStyles } = useComponentDefaults("TreeSelect", rawProps, "Input");
  const resolvedThemeStyle = useResolvedStyle(themeStyle);
  const resolvedRootStyle = useResolvedStyle(elementStyles?.root || {});
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
  const { nodes, value, handleChange } = useTreeBuild({
    isStructured: props.isStructured,
    ref
  });
  const filteredNodes = useMemo(() => {
    if (!onlyParentsWithChildren) return nodes;
    return filterParentsOnly(nodes);
  }, [nodes, onlyParentsWithChildren]);
  const selectedLabel = useMemo(() => {
    if (isMultiple || value == null) return void 0;
    return findNodeLabel(filteredNodes, value);
  }, [isMultiple, value, filteredNodes]);
  const { resolveToken } = useKitsTheme();
  const primaryColor = resolveToken("primary");
  const borderColor = resolveToken("border");
  const Element = /* @__PURE__ */ jsx(
    TreeSelect,
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
  return /* @__PURE__ */ jsx(
    KitsContainer,
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

export { KitsTreeSelect as default };
//# sourceMappingURL=index.web.js.map
