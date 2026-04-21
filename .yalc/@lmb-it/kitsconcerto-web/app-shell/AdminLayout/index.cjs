'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var reactRouterDom = require('react-router-dom');
var helper = require('../Navigation/helper.cjs');
var reactResponsive = require('react-responsive');
var index_web$1 = require('../../hooks/useScrollState/index.web.cjs');
var locale = require('../../hooks/locale.cjs');
require('../../contexts/DialogContext.cjs');
var PermissionsContext = require('../../contexts/PermissionsContext.cjs');
require('react-icons/fa');
require('react-icons/ai');
require('react-icons/io');
require('../../packages/types/src/Components/Molecules/Form/FilePicker/types/filesTypes.cjs');
require('yup');
var index_web = require('../../packages/types/src/Css/constants/breakpoints/index.web.cjs');
var KitsThemeProvider_web = require('../../contexts/Theme/KitsThemeProvider.web.cjs');
var index = require('../../primitives/Box/index.cjs');
var index$1 = require('../Navigation/index.cjs');
var index$2 = require('../Header/index.cjs');

const Routes = ({ routes }) => {
  return reactRouterDom.useRoutes(routes);
};
const AdminLayout = ({ routes, headerRef }) => {
  const mainRef = React.useRef(null);
  const isSmallDevice = reactResponsive.useMediaQuery({ maxWidth: index_web.breakpoints.lg });
  const { scrollState } = index_web$1.default({
    target: mainRef.current
  });
  const isScrolledUp = scrollState.y >= 25;
  const [visible, setVisible] = React.useState(false);
  const { check } = PermissionsContext.usePermissions();
  const { t, currentLanguage } = locale.useLanguage();
  const { colorMode } = KitsThemeProvider_web.useKitsTheme();
  const layoutThemeClass = colorMode === "dark" ? "layout-dark" : "layout-light";
  const permittedRoutes = helper.checkPermissions(routes, check);
  const filteredRoutes = helper.mapSectionsToRoutes(permittedRoutes);
  const routeComponent = React.useMemo(() => {
    return /* @__PURE__ */ jsxRuntime.jsx(Routes, { routes: filteredRoutes });
  }, []);
  return /* @__PURE__ */ jsxRuntime.jsxs(index.default, { ref: mainRef, className: `layout-container ${layoutThemeClass} layout-colorscheme-menu layout-static p-ripple-disabled`, id: "admin-layout", children: [
    /* @__PURE__ */ jsxRuntime.jsx(
      index.default,
      {
        className: "layout-sidebar",
        children: /* @__PURE__ */ jsxRuntime.jsx(
          index$1.default,
          {
            setVisible,
            visible: isSmallDevice && visible,
            placement: currentLanguage === "ar" ? "rtl" : "ltr",
            routes: permittedRoutes
          }
        )
      }
    ),
    /* @__PURE__ */ jsxRuntime.jsxs(
      index.default,
      {
        className: "layout-content-wrapper",
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(
            index.default,
            {
              id: "layout-topbar",
              className: "layout-topbar transition-all animation-linear transition-duration-200 " + (isScrolledUp ? "sticky-bar" : ""),
              position: "sticky",
              top: 0,
              children: /* @__PURE__ */ jsxRuntime.jsx(index$2.default, { hide: visible, setHide: setVisible, ref: headerRef, routes: filteredRoutes })
            }
          ),
          /* @__PURE__ */ jsxRuntime.jsx(index.default, { className: "layout-content", overflow: "auto", children: routeComponent })
        ]
      }
    )
  ] });
};

exports.default = AdminLayout;
//# sourceMappingURL=index.cjs.map
