import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useRef, useImperativeHandle } from 'react';
import { FiMenu } from 'react-icons/fi';
import { classNames } from 'primereact/utils';
import { Menu } from 'primereact/menu';
import { Avatar } from 'primereact/avatar';
import LanguageSwitcher from './LangButton/index.js';
import { useKitsConcerto } from '../../hooks/main.js';
import { useKitsTheme } from '../../contexts/Theme/KitsThemeProvider.web.js';
import Flex from '../../layout/Flex/index.js';
import { Button } from '../../components/Button/Button.web.js';
import { AppBreadcrumb } from '../../components/BreadCrumb/index.web.js';
import { Icon } from '../../primitives/Icon/index.web.js';
import { useLanguage } from '../../hooks/locale.js';

const Header = ({ setHide, hide, ref, routes }) => {
  const [children, setChildren] = useState();
  const openMenu = useRef(null);
  const { onLogOut, menuItems, userAvatar } = useKitsConcerto();
  const { colorMode, toggleColorMode, resolveToken } = useKitsTheme();
  const { t } = useLanguage();
  const appendToHeader = (element) => {
    setChildren(element);
  };
  useImperativeHandle(ref, () => ({ appendToHeader }), []);
  const isDark = colorMode === "dark";
  const surfaceCard = resolveToken("surface-card");
  const borderColor = resolveToken("border");
  resolveToken("text-secondary");
  const primaryColor = resolveToken("primary");
  return /* @__PURE__ */ jsxs(
    Flex,
    {
      w: "full",
      px: 16,
      py: 8,
      justifyContent: ["space-between", "space-between", "flex-end", "flex-end", "flex-end"],
      alignItems: "center",
      gap: 8,
      className: "card",
      children: [
        /* @__PURE__ */ jsx(
          Button,
          {
            style: { display: ["flex", "flex", "flex", "flex", "none"] },
            rounded: true,
            "aria-label": t("openMenu"),
            icon: /* @__PURE__ */ jsx(FiMenu, { size: 20 }),
            onClick: () => setHide(true)
          }
        ),
        /* @__PURE__ */ jsx(AppBreadcrumb, {}),
        /* @__PURE__ */ jsx(Flex, { flex: 1, px: 8, children }),
        /* @__PURE__ */ jsxs(Flex, { alignItems: "center", gap: 4, children: [
          /* @__PURE__ */ jsx(
            Button,
            {
              rounded: true,
              "aria-label": t("toggleColorMode"),
              onClick: toggleColorMode,
              icon: isDark ? /* @__PURE__ */ jsx(Icon, { name: "sun", size: "sm", color: "white" }) : /* @__PURE__ */ jsx(Icon, { name: "moon", size: "sm", color: "white" }),
              style: {
                width: 30,
                height: 30
              }
            }
          ),
          /* @__PURE__ */ jsxs(
            Flex,
            {
              alignItems: "center",
              onClick: (event) => openMenu.current?.toggle(event),
              cursor: "pointer",
              children: [
                /* @__PURE__ */ jsx(
                  Menu,
                  {
                    model: [
                      ...menuItems ?? [],
                      {
                        template: (_item, options) => /* @__PURE__ */ jsx(Flex, { p: 10, flexDirection: "column", gap: 10, children: /* @__PURE__ */ jsx(
                          Button,
                          {
                            onClick: (e) => onLogOut ? onLogOut() : options.onClick(e),
                            icon: "pi pi-sign-out",
                            className: classNames(options.className, "w-full flex align-items-center"),
                            label: t("signOut"),
                            severity: "danger"
                          }
                        ) })
                      },
                      { separator: true },
                      {
                        template: () => /* @__PURE__ */ jsx(Flex, { p: 10, justifyContent: "center", children: /* @__PURE__ */ jsx(LanguageSwitcher, {}) })
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
                userAvatar?.image ? /* @__PURE__ */ jsx(
                  Avatar,
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
                ) : /* @__PURE__ */ jsx(
                  Avatar,
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

export { Header as default };
//# sourceMappingURL=index.js.map
