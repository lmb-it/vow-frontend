'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var tree = require('primereact/tree');
var useTreeViewController = require('./useTreeViewController.cjs');
var index_web = require('./Toolbar/index.web.cjs');
var KitsThemeProvider_web = require('../../contexts/Theme/KitsThemeProvider.web.cjs');
var index = require('../../layout/Flex/index.cjs');

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
  } = useTreeViewController.useTreeViewController(props);
  const {
    nodeTemplate,
    containerProps,
    hideSearchBox,
    hideDisabledButton,
    expendableControls,
    hideToolbar: propsHideToolbar
    // If passed from parent
  } = props;
  const { resolveToken } = KitsThemeProvider_web.useKitsTheme();
  const primaryColor = resolveToken("primary");
  const primaryTextColor = resolveToken("bg") || "#fff";
  const treeRef = React.useRef(null);
  const shouldHideToolbar = propsHideToolbar || !!hideSearchBox && !!hideDisabledButton && !expendableControls;
  return /* @__PURE__ */ jsxRuntime.jsxs(index.default, { id: "tree-view", w: "full", h: "full", flexDirection: "column", ...containerProps, children: [
    !shouldHideToolbar && /* @__PURE__ */ jsxRuntime.jsx(
      index_web.default,
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
    /* @__PURE__ */ jsxRuntime.jsx(
      tree.Tree,
      {
        ref: treeRef,
        className: `${!shouldHideToolbar ? "border-none" : ""} h-auto overflow-auto`,
        ...treeProps,
        filter: !shouldHideToolbar,
        filterMode: "lenient",
        filterTemplate: /* @__PURE__ */ jsxRuntime.jsx(jsxRuntime.Fragment, {}),
        nodeTemplate: (node, options) => {
          const isSelected = node.key == selectedNode?.key;
          return /* @__PURE__ */ jsxRuntime.jsxs(
            index.default,
            {
              w: "full",
              justifyContent: "flex-start",
              alignItems: "center",
              children: [
                !!nodeTemplate && nodeTemplate(node, options),
                !nodeTemplate && /* @__PURE__ */ jsxRuntime.jsx("span", { className: options.className, children: node.label }),
                isSelected && /* @__PURE__ */ jsxRuntime.jsx("style", { children: `
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

exports.default = TreeView;
//# sourceMappingURL=index.web.cjs.map
