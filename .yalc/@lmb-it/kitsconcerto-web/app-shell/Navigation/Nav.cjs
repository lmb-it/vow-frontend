'use strict';

var jsxRuntime = require('react/jsx-runtime');
var ripple = require('primereact/ripple');
var reactRouterDom = require('react-router-dom');
var React = require('react');
var index = require('../../primitives/Box/index.cjs');
var index$1 = require('../../layout/Flex/index.cjs');
var locale = require('../../hooks/locale.cjs');

const Linking = ({ icon, title, path, currentRoute }) => {
  const navigate = reactRouterDom.useNavigate();
  const { t, isKeyExists } = locale.useLanguage();
  const realPath = !path ? "/" : path;
  const isCurrent = currentRoute === path;
  const classesNames = React.useMemo(() => {
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
  return /* @__PURE__ */ jsxRuntime.jsx("li", { children: /* @__PURE__ */ jsxRuntime.jsxs(
    "a",
    {
      className: classesNames,
      onClick: () => realPath && navigate(realPath.toString()),
      children: [
        /* @__PURE__ */ jsxRuntime.jsxs(index$1.default, { gap: 10, alignItems: "center", children: [
          /* @__PURE__ */ jsxRuntime.jsx(index$1.default, { aspectRatio: 1, w: 15, children: React.isValidElement(icon) && icon }),
          /* @__PURE__ */ jsxRuntime.jsx("span", { className: "font-normal", children: isKeyExists(key) ? t(key) : title })
        ] }),
        /* @__PURE__ */ jsxRuntime.jsx(ripple.Ripple, {})
      ]
    }
  ) });
};
const NavItem = ({ icon, title, links, path, collapsable = true, defaultOpen = false, currentRoute }) => {
  const { t } = locale.useLanguage();
  const [isOpen, setIsOpen] = React.useState(defaultOpen);
  const hidden = (routes) => !!routes?.every((item) => item.hide);
  return /* @__PURE__ */ jsxRuntime.jsxs("li", { children: [
    collapsable && /* @__PURE__ */ jsxRuntime.jsxs(
      "div",
      {
        className: "nav-header p-ripple p-2 mt-2 mb-1 border-round flex align-items-center justify-content-between text-500 hover:text-700 cursor-pointer transition-colors transition-duration-200 uppercase text-xs tracking-wide font-bold",
        onClick: () => setIsOpen((prev) => !prev),
        children: [
          /* @__PURE__ */ jsxRuntime.jsx("span", { children: t(title) }),
          /* @__PURE__ */ jsxRuntime.jsxs(index$1.default, { gap: 2, alignItems: "center", children: [
            icon && /* @__PURE__ */ jsxRuntime.jsx("i", { className: `pi ${icon} text-sm` }),
            /* @__PURE__ */ jsxRuntime.jsx(
              "i",
              {
                className: `pi pi-chevron-right text-xs transition-transform ${isOpen ? "rotate-90" : ""}`
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntime.jsx(ripple.Ripple, {})
        ]
      }
    ),
    !collapsable && /* @__PURE__ */ jsxRuntime.jsx(
      "div",
      {
        className: "nav-header p-2 mt-2 mb-1 flex align-items-center justify-content-between text-500 uppercase text-xs tracking-wide font-bold",
        children: /* @__PURE__ */ jsxRuntime.jsx("span", { children: t(title) })
      }
    ),
    links && links.length > 0 && !hidden(links) && /* @__PURE__ */ jsxRuntime.jsx(
      "div",
      {
        className: `nav-children-wrapper ${isOpen || !collapsable ? "open" : ""}`,
        children: /* @__PURE__ */ jsxRuntime.jsx("ul", { className: "list-none p-0 ml-2", children: links.map((subItem, subIndex) => {
          if (subItem.hide) return null;
          if (subItem.links && subItem.links.length > 0 && !hidden(subItem.links)) {
            return /* @__PURE__ */ jsxRuntime.jsx(
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
            return /* @__PURE__ */ jsxRuntime.jsx(
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
  return /* @__PURE__ */ jsxRuntime.jsx(index.default, { as: "ul", p: [0, 0, 0, 13], className: "list-none", gap: "5px", children: items.map((item, index) => {
    if (item.hide) return null;
    if (item.links && item.links.length > 0) {
      return /* @__PURE__ */ jsxRuntime.jsx(
        NavItem,
        {
          currentRoute,
          ...item
        },
        index
      );
    }
    if (item.element) {
      return /* @__PURE__ */ jsxRuntime.jsx(
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

exports.NavList = NavList;
//# sourceMappingURL=Nav.cjs.map
