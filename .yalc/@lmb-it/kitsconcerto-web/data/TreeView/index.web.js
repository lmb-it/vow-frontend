import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { useRef } from 'react';
import { Tree } from 'primereact/tree';
import { useTreeViewController } from './useTreeViewController.js';
import TreeViewToolbar from './Toolbar/index.web.js';
import { useKitsTheme } from '../../contexts/Theme/KitsThemeProvider.web.js';
import Flex from '../../layout/Flex/index.js';

const TreeView = (props) => {
  const {
    selectedNode,
    filterValue,
    build,
    setFilterValue,
    expandAll,
    collapseAll,
    operations,
    treeProps
  } = useTreeViewController(props);
  const {
    nodeTemplate,
    containerProps,
    hideSearchBox,
    hideDisabledButton,
    expendableControls,
    hideToolbar: propsHideToolbar
    // If passed from parent
  } = props;
  const { resolveToken } = useKitsTheme();
  const primaryColor = resolveToken("primary");
  const primaryTextColor = resolveToken("bg") || "#fff";
  const treeRef = useRef(null);
  const shouldHideToolbar = propsHideToolbar || !!hideSearchBox && !!hideDisabledButton && !expendableControls;
  return /* @__PURE__ */ jsxs(Flex, { id: "tree-view", w: "full", h: "full", flexDirection: "column", ...containerProps, children: [
    !shouldHideToolbar && /* @__PURE__ */ jsx(
      TreeViewToolbar,
      {
        props,
        filterValue,
        setFilterValue,
        treeRef: treeRef.current,
        selectedNode,
        expandAll,
        collapseAll,
        onAddNode: operations.onAddNode,
        onAddNodeItem: operations.onAddNodeItem,
        onDeleteNode: operations.onDeleteNode,
        onEditNode: operations.onEditNode,
        build
      }
    ),
    /* @__PURE__ */ jsx(
      Tree,
      {
        ref: treeRef,
        className: `${!shouldHideToolbar ? "border-none" : ""} h-auto overflow-auto`,
        ...treeProps,
        filter: !shouldHideToolbar,
        filterMode: "lenient",
        filterTemplate: /* @__PURE__ */ jsx(Fragment, {}),
        nodeTemplate: (node, options) => {
          const isSelected = node.key == selectedNode?.key;
          return /* @__PURE__ */ jsxs(
            Flex,
            {
              w: "full",
              justifyContent: "flex-start",
              alignItems: "center",
              children: [
                !!nodeTemplate && nodeTemplate(node, options),
                !nodeTemplate && /* @__PURE__ */ jsx("span", { className: options.className, children: node.label }),
                isSelected && /* @__PURE__ */ jsx("style", { children: `
                    #tree-view .p-treenode-content.${node.className} {
                        background-color: ${primaryColor} !important;
                        color: ${primaryTextColor} !important;
                    }
                  ` })
              ]
            }
          );
        },
        pt: {
          content: {
            style: {
              transition: "background-color 0.2s"
            },
            className: "hover:surface-200"
          },
          toggler: {
            style: {
              color: "inherit"
            }
          },
          nodeIcon: {
            style: {
              color: "inherit"
            }
          }
        }
      }
    )
  ] });
};

export { TreeView as default };
//# sourceMappingURL=index.web.js.map
