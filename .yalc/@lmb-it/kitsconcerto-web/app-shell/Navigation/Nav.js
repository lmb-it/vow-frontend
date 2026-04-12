import { jsx, jsxs } from 'react/jsx-runtime';
import { Ripple } from 'primereact/ripple';
import { useNavigate } from 'react-router-dom';
import { useState, useMemo, isValidElement } from 'react';
import Box from '../../primitives/Box/index.js';
import Flex from '../../layout/Flex/index.js';
import { useLanguage } from '../../hooks/locale.js';

const Linking = ({ icon, title, path, currentRoute }) => {
  const navigate = useNavigate();
  const { t, isKeyExists } = useLanguage();
  const realPath = !path ? "/" : path;
  const isCurrent = currentRoute === path;
  const classesNames = useMemo(() => {
    let classes = "nav-link p-ripple flex align-items-center cursor-pointer p-2 mb-1 border-round transition-all transition-duration-200 w-full";
    if (isCurrent) {
      classes += " nav-link-active font-bold text-primary surface-100";
    } else {
      classes += " font-medium text-700 hover:surface-100";
    }
    return classes;
  }, [isCurrent]);
  function toCamelCase(title2) {
    return title2.toLowerCase().split(" ").map(
      (word, index) => index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)
    ).join("");
  }
  const key = toCamelCase(title);
  return /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(
    "a",
    {
      className: classesNames,
      onClick: () => realPath && navigate(realPath.toString()),
      children: [
        /* @__PURE__ */ jsxs(Flex, { gap: 10, alignItems: "center", children: [
          /* @__PURE__ */ jsx(Flex, { aspectRatio: 1, w: 15, children: isValidElement(icon) && icon }),
          /* @__PURE__ */ jsx("span", { className: "font-normal", children: isKeyExists(key) ? t(key) : title })
        ] }),
        /* @__PURE__ */ jsx(Ripple, {})
      ]
    }
  ) });
};
const NavItem = ({ icon, title, links, path, collapsable = true, defaultOpen = false, currentRoute }) => {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const hidden = (routes) => !!routes?.every((item) => item.hide);
  return /* @__PURE__ */ jsxs("li", { children: [
    collapsable && /* @__PURE__ */ jsxs(
      "div",
      {
        className: "nav-header p-ripple p-2 mt-2 mb-1 border-round flex align-items-center justify-content-between text-500 hover:text-700 cursor-pointer transition-colors transition-duration-200 uppercase text-xs tracking-wide font-bold",
        onClick: () => setIsOpen((prev) => !prev),
        children: [
          /* @__PURE__ */ jsx("span", { children: t(title) }),
          /* @__PURE__ */ jsxs(Flex, { gap: 2, alignItems: "center", children: [
            icon && /* @__PURE__ */ jsx("i", { className: `pi ${icon} text-sm` }),
            /* @__PURE__ */ jsx(
              "i",
              {
                className: `pi pi-chevron-right text-xs transition-transform ${isOpen ? "rotate-90" : ""}`
              }
            )
          ] }),
          /* @__PURE__ */ jsx(Ripple, {})
        ]
      }
    ),
    !collapsable && /* @__PURE__ */ jsx(
      "div",
      {
        className: "nav-header p-2 mt-2 mb-1 flex align-items-center justify-content-between text-500 uppercase text-xs tracking-wide font-bold",
        children: /* @__PURE__ */ jsx("span", { children: t(title) })
      }
    ),
    links && links.length > 0 && !hidden(links) && /* @__PURE__ */ jsx(
      "div",
      {
        className: `nav-children-wrapper ${isOpen || !collapsable ? "open" : ""}`,
        children: /* @__PURE__ */ jsx("ul", { className: "list-none p-0 ml-2", children: links.map((subItem, subIndex) => {
          if (subItem.hide) return null;
          if (subItem.links && subItem.links.length > 0 && !hidden(subItem.links)) {
            return /* @__PURE__ */ jsx(
              NavItem,
              {
                currentRoute,
                ...subItem,
                path: `${path}/${subItem.path}`
              },
              subIndex
            );
          }
          if (subItem.element) {
            return /* @__PURE__ */ jsx(
              Linking,
              {
                currentRoute,
                ...subItem,
                path: `${path}/${subItem.path}`
              },
              subIndex
            );
          }
          return null;
        }) })
      }
    )
  ] });
};
const NavList = ({ items, currentRoute }) => {
  return /* @__PURE__ */ jsx(Box, { as: "ul", p: [0, 0, 0, 13], className: "list-none", gap: "5px", children: items.map((item, index) => {
    if (item.hide) return null;
    if (item.links && item.links.length > 0) {
      return /* @__PURE__ */ jsx(
        NavItem,
        {
          currentRoute,
          ...item
        },
        index
      );
    }
    if (item.element) {
      return /* @__PURE__ */ jsx(
        Linking,
        {
          currentRoute,
          ...item
        },
        index
      );
    }
    return null;
  }) });
};

export { NavList };
//# sourceMappingURL=Nav.js.map
