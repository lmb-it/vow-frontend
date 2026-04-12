'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var reactRouterDom = require('react-router-dom');
require('primereact/menu');
require('primereact/avatar');
var Nav = require('./Nav.cjs');
require('react-icons/fa');
require('react-icons/ai');
require('react-icons/io');
require('../../packages/types/src/Components/Molecules/Form/FilePicker/types/filesTypes.cjs');
require('yup');
var ResponsiveElement = require('../../apps/web/src/Factory/ResponsiveElement.cjs');
var main = require('../../hooks/main.cjs');
var index = require('../../layout/Flex/index.cjs');
var index$1 = require('../../layout/Center/index.cjs');
var Button_web = require('../../components/Button/Button.web.cjs');
var locale = require('../../hooks/locale.cjs');

const SidebarMenu = ({ visible, setVisible, placement, routes }) => {
  React.useRef(null);
  const { logo, menuItems, mq } = main.useKitsConcerto();
  const { t } = locale.useLanguage();
  reactRouterDom.useNavigate();
  React.useRef(null);
  const { pathname } = reactRouterDom.useLocation();
  const currentRoute = pathname.replace(/^\/|\/$/g, "");
  const contents = React.useMemo(
    () => /* @__PURE__ */ jsxRuntime.jsx(index.default, { className: "min-h-screen relative lg:static", children: /* @__PURE__ */ jsxRuntime.jsx(
      "div",
      {
        id: "app-sidebar-2",
        className: "h-screen lg:block flex-shrink-0 absolute lg:static left-0 top-0 z-1 surface-border select-none",
        style: { width: "100%" },
        children: /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex flex-column h-full", children: [
          !mq.isSmall && /* @__PURE__ */ jsxRuntime.jsx(
            "div",
            {
              className: "flex align-items-center justify-content-between px-4 pt-3 flex-shrink-0 w-12 lg:w-12 sm:w-4",
              children: /* @__PURE__ */ jsxRuntime.jsx("span", { className: "inline-flex align-items-center gap-2", children: logo && /* @__PURE__ */ jsxRuntime.jsx(index$1.default, { w: "100%", overflow: "hidden", children: logo }) })
            }
          ),
          /* @__PURE__ */ jsxRuntime.jsx("div", { className: mq.isSmall ? "" : "overflow-y-auto", children: /* @__PURE__ */ jsxRuntime.jsx(index.default, { flexDirection: "column", justifyContent: "space-between", h: "auto", children: /* @__PURE__ */ jsxRuntime.jsx(Nav.NavList, { items: routes, currentRoute }) }) })
        ] })
      }
    ) }),
    [logo, routes, currentRoute, mq.isSmall]
  );
  return /* @__PURE__ */ jsxRuntime.jsxs(
    index.default,
    {
      w: "full",
      position: "relative",
      flexDirection: "column",
      shadow: 4,
      className: "nav-container",
      style: { direction: placement },
      children: [
        !mq.isSmall && contents,
        mq.isSmall && /* @__PURE__ */ jsxRuntime.jsx(
          ResponsiveElement.default,
          {
            as: "Sidebar",
            nativeProps: {
              visible,
              header: () => {
                return /* @__PURE__ */ jsxRuntime.jsxs(index.default, { children: [
                  /* @__PURE__ */ jsxRuntime.jsx(index$1.default, { children: logo }),
                  /* @__PURE__ */ jsxRuntime.jsx(index.default, { position: "absolute", top: 10, right: 10, children: /* @__PURE__ */ jsxRuntime.jsx(
                    Button_web.Button,
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

exports.default = SidebarMenu;
//# sourceMappingURL=index.cjs.map
