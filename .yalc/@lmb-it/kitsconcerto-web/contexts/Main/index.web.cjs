'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var reactRouterDom = require('react-router-dom');
var api = require('primereact/api');
var index_web = require('../Theme/index.web.cjs');
var index_web$1 = require('../Locale/index.web.cjs');
var DialogContext = require('../DialogContext.cjs');
var PermissionsContext = require('../PermissionsContext.cjs');
var reactResponsive = require('react-responsive');
require('primeicons/primeicons.css');
require('primereact/resources/primereact.css');
var KitsThemeProvider_web = require('../Theme/KitsThemeProvider.web.cjs');
var index = require('../../app-shell/AuthLayout/index.cjs');
var index$1 = require('../../app-shell/AdminLayout/index.cjs');

const MainContext = React.createContext({});
const MainContextProvider = ({
  renderRouter = false,
  children,
  theme,
  kitsTheme,
  onLogOut,
  nonAuthRoutes,
  menuItems,
  userAvatar,
  permissions,
  logo,
  languages,
  defaultLanguage = "en",
  authedRoutes,
  onChangeLanguage,
  ref
}) => {
  const isSmall = reactResponsive.useMediaQuery({
    maxWidth: 991
  });
  const isTablet = reactResponsive.useMediaQuery({
    minWidth: 768,
    maxWidth: 1023
  });
  const isDesktop = reactResponsive.useMediaQuery({
    minWidth: 1024
  });
  const isLandscape = reactResponsive.useMediaQuery({
    orientation: "landscape"
  });
  const isPortrait = reactResponsive.useMediaQuery({
    orientation: "portrait"
  });
  const mq = {
    isSmall,
    isTablet,
    isDesktop,
    isLandscape,
    isPortrait
  };
  const headerRef = React.useRef(null);
  const appendToHeader = (element) => {
    if (headerRef.current) {
      headerRef.current.appendToHeader(element);
    }
  };
  const authLayout = renderRouter && !!nonAuthRoutes && nonAuthRoutes.length > 0 && authedRoutes?.length == 0;
  const adminLayout = renderRouter && !!authedRoutes && authedRoutes.length > 0 && nonAuthRoutes?.length == 0;
  return /* @__PURE__ */ jsxRuntime.jsx(reactRouterDom.BrowserRouter, { children: /* @__PURE__ */ jsxRuntime.jsx(MainContext.Provider, { value: { logo, onLogOut, appendToHeader, menuItems, userAvatar, mq }, children: /* @__PURE__ */ jsxRuntime.jsx(api.PrimeReactProvider, { value: { pt: theme }, children: /* @__PURE__ */ jsxRuntime.jsx(KitsThemeProvider_web.KitsThemeProvider, { theme: kitsTheme, children: /* @__PURE__ */ jsxRuntime.jsx(index_web.default, { theme, children: /* @__PURE__ */ jsxRuntime.jsx(
    index_web$1.default,
    {
      defaultLanguage,
      languages,
      onChangeLanguage,
      children: /* @__PURE__ */ jsxRuntime.jsx(DialogContext.default, { children: /* @__PURE__ */ jsxRuntime.jsxs(PermissionsContext.default, { roles: permissions, children: [
        authLayout && /* @__PURE__ */ jsxRuntime.jsx(index.default, { routes: nonAuthRoutes }),
        adminLayout && /* @__PURE__ */ jsxRuntime.jsx(index$1.default, { routes: authedRoutes, headerRef }),
        children
      ] }) })
    }
  ) }) }) }) }) });
};

exports.MainContext = MainContext;
exports.default = MainContextProvider;
//# sourceMappingURL=index.web.cjs.map
