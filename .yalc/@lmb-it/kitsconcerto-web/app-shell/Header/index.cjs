'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var fi = require('react-icons/fi');
var utils = require('primereact/utils');
var menu = require('primereact/menu');
var avatar = require('primereact/avatar');
var index$1 = require('./LangButton/index.cjs');
var main = require('../../hooks/main.cjs');
var KitsThemeProvider_web = require('../../contexts/Theme/KitsThemeProvider.web.cjs');
var index = require('../../layout/Flex/index.cjs');
var Button_web = require('../../components/Button/Button.web.cjs');
var index_web = require('../../components/BreadCrumb/index.web.cjs');
var index_web$1 = require('../../primitives/Icon/index.web.cjs');
var locale = require('../../hooks/locale.cjs');

const Header = ({ setHide, hide, ref, routes }) => {
  const [children, setChildren] = React.useState();
  const openMenu = React.useRef(null);
  const { onLogOut, menuItems, userAvatar } = main.useKitsConcerto();
  const { colorMode, toggleColorMode, resolveToken } = KitsThemeProvider_web.useKitsTheme();
  const { t } = locale.useLanguage();
  const appendToHeader = (element) => {
    setChildren(element);
  };
  React.useImperativeHandle(ref, () => ({ appendToHeader }), []);
  const isDark = colorMode === "dark";
  const surfaceCard = resolveToken("surface-card");
  const borderColor = resolveToken("border");
  resolveToken("text-secondary");
  const primaryColor = resolveToken("primary");
  return /* @__PURE__ */ jsxRuntime.jsxs(
    index.default,
    {
      w: "full",
      px: 16,
      py: 8,
      justifyContent: ["space-between", "space-between", "flex-end", "flex-end", "flex-end"],
      alignItems: "center",
      gap: 8,
      className: "card",
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(
          Button_web.Button,
          {
            style: { display: ["flex", "flex", "flex", "flex", "none"] },
            rounded: true,
            "aria-label": t("openMenu"),
            icon: /* @__PURE__ */ jsxRuntime.jsx(fi.FiMenu, { size: 20 }),
            onClick: () => setHide(true)
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(index_web.AppBreadcrumb, {}),
        /* @__PURE__ */ jsxRuntime.jsx(index.default, { flex: 1, px: 8, children }),
        /* @__PURE__ */ jsxRuntime.jsxs(index.default, { alignItems: "center", gap: 4, children: [
          /* @__PURE__ */ jsxRuntime.jsx(
            Button_web.Button,
            {
              rounded: true,
              "aria-label": t("toggleColorMode"),
              onClick: toggleColorMode,
              icon: isDark ? /* @__PURE__ */ jsxRuntime.jsx(index_web$1.Icon, { name: "sun", size: "sm", color: "white" }) : /* @__PURE__ */ jsxRuntime.jsx(index_web$1.Icon, { name: "moon", size: "sm", color: "white" }),
              style: {
                width: 30,
                height: 30
              }
            }
          ),
          /* @__PURE__ */ jsxRuntime.jsxs(
            index.default,
            {
              alignItems: "center",
              onClick: (event) => openMenu.current?.toggle(event),
              cursor: "pointer",
              children: [
                /* @__PURE__ */ jsxRuntime.jsx(
                  menu.Menu,
                  {
                    model: [
                      ...menuItems ?? [],
                      {
                        template: (_item, options) => /* @__PURE__ */ jsxRuntime.jsx(index.default, { p: 10, flexDirection: "column", gap: 10, children: /* @__PURE__ */ jsxRuntime.jsx(
                          Button_web.Button,
                          {
                            onClick: (e) => onLogOut ? onLogOut() : options.onClick(e),
                            icon: "pi pi-sign-out",
                            className: utils.classNames(options.className, "w-full flex align-items-center"),
                            label: t("signOut"),
                            severity: "danger"
                          }
                        ) })
                      },
                      { separator: true },
                      {
                        template: () => /* @__PURE__ */ jsxRuntime.jsx(index.default, { p: 10, justifyContent: "center", children: /* @__PURE__ */ jsxRuntime.jsx(index$1.default, {}) })
                      }
                    ],
                    popup: true,
                    ref: openMenu,
                    id: "popup_menu_right",
                    popupAlignment: "right",
                    style: {
                      width: "18rem",
                      backgroundColor: surfaceCard,
                      borderColor,
                      borderRadius: "12px",
                      overflow: "hidden",
                      padding: 0,
                      border: `1px solid ${borderColor}`,
                      boxShadow: isDark ? "0 8px 32px rgba(0, 0, 0, 0.5), 0 2px 8px rgba(0, 0, 0, 0.3)" : "0 8px 32px rgba(0, 0, 0, 0.12), 0 2px 8px rgba(0, 0, 0, 0.06)"
                    }
                  }
                ),
                userAvatar?.image ? /* @__PURE__ */ jsxRuntime.jsx(
                  avatar.Avatar,
                  {
                    image: userAvatar.image,
                    shape: "circle",
                    "aria-controls": "popup_menu_right",
                    "aria-haspopup": true,
                    style: {
                      width: 30,
                      height: 30,
                      cursor: "pointer"
                    }
                  }
                ) : /* @__PURE__ */ jsxRuntime.jsx(
                  avatar.Avatar,
                  {
                    label: userAvatar?.label || "?",
                    shape: "circle",
                    "aria-controls": "popup_menu_right",
                    "aria-haspopup": true,
                    style: {
                      width: 30,
                      height: 30,
                      backgroundColor: userAvatar?.color || primaryColor,
                      color: "#FFFFFF",
                      fontWeight: 600,
                      fontSize: "14px",
                      cursor: "pointer"
                    }
                  }
                )
              ]
            }
          )
        ] })
      ]
    }
  );
};

exports.default = Header;
//# sourceMappingURL=index.cjs.map
