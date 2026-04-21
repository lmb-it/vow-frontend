import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import { Toolbar } from 'primereact/toolbar';
import Flex from '../../../layout/Flex/index.js';
import { Button } from '../../../components/Button/Button.web.js';
import 'react';
import KitsInputText from '../../../form/inputs/InputText/index.web.js';
import { useLanguage } from '../../../hooks/locale.js';

const TreeViewToolbar = ({
  props,
  filterValue,
  setFilterValue,
  treeRef,
  selectedNode,
  expandAll,
  collapseAll,
  onAddNode,
  onAddNodeItem,
  onDeleteNode,
  onEditNode,
  build
}) => {
  const { t } = useLanguage();
  const {
    expendableControls,
    serverSide,
    text,
    rules,
    hideDisabledButton
  } = props;
  const itemButton = rules?.allowIndependentItem && rules?.addItem || rules?.addItem && !!selectedNode && !selectedNode.data?.isItem;
  const categoryButton = rules?.addCategory && !selectedNode || rules?.addSubCategory && !!selectedNode && !selectedNode.data?.isItem;
  const deleteButton = !!selectedNode && (rules?.deleteCategory && !selectedNode.data?.isItem && !selectedNode.data?.parentId || rules?.deleteSubCategory && !selectedNode.data?.isItem && !!selectedNode.data?.parentId || rules?.deleteItem && !!selectedNode.data?.isItem);
  const editButton = !!selectedNode && (rules?.updateCategory && !selectedNode.data?.isItem && !selectedNode.data?.parentId || rules?.updateSubCategory && !selectedNode.data?.isItem && !!selectedNode.data?.parentId || rules?.updateItem && !!selectedNode.data?.isItem);
  const startContent = /* @__PURE__ */ jsx(Flex, { flexDirection: "row", gap: 4, alignItems: "center", w: "full", justifyContent: "space-between", children: /* @__PURE__ */ jsx(
    KitsInputText,
    {
      leftAddon: /* @__PURE__ */ jsx("i", { className: "pi pi-search" }),
      id: "tree-view-filter",
      value: filterValue,
      onChange: (e) => {
        setFilterValue(e.target.value);
        treeRef?.filter?.(e.target.value);
      }
    }
  ) });
  const centerContent = /* @__PURE__ */ jsxs(Flex, { flexDirection: "row", gap: 4, children: [
    !!expendableControls && /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx(
        Button,
        {
          type: "button",
          icon: "pi pi-arrow-up-right-and-arrow-down-left-from-center",
          style: { w: "40px !important", h: "40px !important" },
          onClick: expandAll
        }
      ),
      /* @__PURE__ */ jsx(
        Button,
        {
          type: "button",
          icon: "pi pi-arrow-down-left-and-arrow-up-right-to-center",
          style: { w: "40px !important", h: "40px !important" },
          onClick: collapseAll
        }
      )
    ] }),
    !!serverSide?.listFetcher && /* @__PURE__ */ jsx(
      Button,
      {
        type: "button",
        icon: "pi pi-refresh",
        onClick: build,
        style: { w: "40px !important", h: "40px !important" }
      }
    )
  ] });
  const endContent = /* @__PURE__ */ jsxs(
    Flex,
    {
      w: "full",
      justifyContent: "space-between",
      flexDirection: ["row", "row", "row", "row", "row"],
      position: ["fixed", "fixed", "fixed", "fixed", "relative"],
      bottom: [50, 50, 50, 50, 0],
      right: [50, 50, 50, 50, 0],
      gap: 4,
      children: [
        (!hideDisabledButton && !categoryButton || categoryButton) && /* @__PURE__ */ jsx(
          Button,
          {
            type: "button",
            icon: "pi pi-plus",
            disabled: !categoryButton,
            tooltip: text?.addNode ?? t("addCategory"),
            style: { w: "40px !important", h: "40px !important" },
            onClick: () => onAddNode(selectedNode?.key),
            tooltipOptions: { position: "top" }
          }
        ),
        (!hideDisabledButton && !itemButton || itemButton) && /* @__PURE__ */ jsx(
          Button,
          {
            type: "button",
            severity: "secondary",
            disabled: !itemButton,
            icon: "pi pi-plus",
            tooltip: text?.addItem ?? t("addItem"),
            style: { w: "40px !important", h: "40px !important" },
            onClick: () => onAddNodeItem(selectedNode?.key),
            tooltipOptions: { position: "top" }
          }
        ),
        (!hideDisabledButton && !deleteButton || deleteButton) && /* @__PURE__ */ jsx(
          Button,
          {
            type: "button",
            severity: "danger",
            disabled: !deleteButton,
            icon: "pi pi-trash",
            tooltip: text?.deleteNode ?? t("delete"),
            style: { w: "40px !important", h: "40px !important" },
            onClick: () => onDeleteNode(selectedNode?.key),
            tooltipOptions: { position: "top" }
          }
        ),
        (!hideDisabledButton && !editButton || editButton) && /* @__PURE__ */ jsx(
          Button,
          {
            type: "button",
            severity: "secondary",
            disabled: !editButton,
            icon: "pi pi-pencil",
            tooltip: text?.editNode ?? t("edit"),
            style: { w: "40px !important", h: "40px !important" },
            onClick: () => onEditNode(selectedNode?.key),
            tooltipOptions: { position: "top" }
          }
        )
      ]
    }
  );
  return /* @__PURE__ */ jsx(
    Toolbar,
    {
      start: startContent,
      center: centerContent,
      end: endContent,
      style: { width: "100%" },
      className: "border-noround-bottom"
    }
  );
};

export { TreeViewToolbar as default };
//# sourceMappingURL=index.web.js.map
