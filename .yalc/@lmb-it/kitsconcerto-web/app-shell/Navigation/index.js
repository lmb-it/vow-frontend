import { jsx, jsxs } from 'react/jsx-runtime';
import { useRef, useMemo } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import 'primereact/menu';
import 'primereact/avatar';
import { NavList } from './Nav.js';
import 'react-icons/fa';
import 'react-icons/ai';
import 'react-icons/io';
import '../../packages/types/src/Components/Molecules/Form/FilePicker/types/filesTypes.js';
import 'yup';
import ResponsiveElement from '../../apps/web/src/Factory/ResponsiveElement.js';
import { useKitsConcerto } from '../../hooks/main.js';
import Flex from '../../layout/Flex/index.js';
import Center from '../../layout/Center/index.js';
import { Button } from '../../components/Button/Button.web.js';
import { useLanguage } from '../../hooks/locale.js';

const SidebarMenu = ({ visible, setVisible, placement, routes }) => {
  useRef(null);
  const { logo, menuItems, mq } = useKitsConcerto();
  const { t } = useLanguage();
  useNavigate();
  useRef(null);
  const { pathname } = useLocation();
  const currentRoute = pathname.replace(/^\/|\/$/g, "");
  const contents = useMemo(
    () => /* @__PURE__ */ jsx(Flex, { className: "min-h-screen relative lg:static", children: /* @__PURE__ */ jsx(
      "div",
      {
        id: "app-sidebar-2",
        className: "h-screen lg:block flex-shrink-0 absolute lg:static left-0 top-0 z-1 surface-border select-none",
        style: { width: "100%" },
        children: /* @__PURE__ */ jsxs("div", { className: "flex flex-column h-full", children: [
          !mq.isSmall && /* @__PURE__ */ jsx(
            "div",
            {
              className: "flex align-items-center justify-content-between px-4 pt-3 flex-shrink-0 w-12 lg:w-12 sm:w-4",
              children: /* @__PURE__ */ jsx("span", { className: "inline-flex align-items-center gap-2", children: logo && /* @__PURE__ */ jsx(Center, { w: "100%", overflow: "hidden", children: logo }) })
            }
          ),
          /* @__PURE__ */ jsx("div", { className: mq.isSmall ? "" : "overflow-y-auto", children: /* @__PURE__ */ jsx(Flex, { flexDirection: "column", justifyContent: "space-between", h: "auto", children: /* @__PURE__ */ jsx(NavList, { items: routes, currentRoute }) }) })
        ] })
      }
    ) }),
    [logo, routes, currentRoute, mq.isSmall]
  );
  return /* @__PURE__ */ jsxs(
    Flex,
    {
      w: "full",
      position: "relative",
      flexDirection: "column",
      shadow: 4,
      className: "nav-container",
      style: { direction: placement },
      children: [
        !mq.isSmall && contents,
        mq.isSmall && /* @__PURE__ */ jsx(
          ResponsiveElement,
          {
            as: "Sidebar",
            nativeProps: {
              visible,
              header: () => {
                return /* @__PURE__ */ jsxs(Flex, { children: [
                  /* @__PURE__ */ jsx(Center, { children: logo }),
                  /* @__PURE__ */ jsx(Flex, { position: "absolute", top: 10, right: 10, children: /* @__PURE__ */ jsx(
                    Button,
                    {
                      type: "button",
                      onClick: () => setVisible(false),
                      icon: "pi pi-times",
                      rounded: true,
                      outlined: true,
                      className: "h-2rem w-2rem"
                    }
                  ) })
                ] });
              },
              onHide: () => setVisible(false),
              showCloseIcon: false,
              maskStyle: {
                padding: 0
              },
              style: { padding: 0 }
            },
            cssProps: {
              width: ["100%", "50%", "40%"]
            },
            children: contents
          }
        )
      ]
    }
  );
};

export { SidebarMenu as default };
//# sourceMappingURL=index.js.map
