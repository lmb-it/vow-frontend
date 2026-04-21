import { jsx, jsxs } from 'react/jsx-runtime';
import { createContext, useRef } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { PrimeReactProvider } from 'primereact/api';
import ThemeContextProvider from '../Theme/index.web.js';
import LocaleContextProvider from '../Locale/index.web.js';
import PopupProvider from '../DialogContext.js';
import PermissionsProvider from '../PermissionsContext.js';
import { useMediaQuery } from 'react-responsive';
import 'primeicons/primeicons.css';
import 'primereact/resources/primereact.css';
import { KitsThemeProvider } from '../Theme/KitsThemeProvider.web.js';
import AuthLayout from '../../app-shell/AuthLayout/index.js';
import AdminLayout from '../../app-shell/AdminLayout/index.js';

const MainContext = createContext({});
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
  const isSmall = useMediaQuery({
    maxWidth: 991
  });
  const isTablet = useMediaQuery({
    minWidth: 768,
    maxWidth: 1023
  });
  const isDesktop = useMediaQuery({
    minWidth: 1024
  });
  const isLandscape = useMediaQuery({
    orientation: "landscape"
  });
  const isPortrait = useMediaQuery({
    orientation: "portrait"
  });
  const mq = {
    isSmall,
    isTablet,
    isDesktop,
    isLandscape,
    isPortrait
  };
  const headerRef = useRef(null);
  const appendToHeader = (element) => {
    if (headerRef.current) {
      headerRef.current.appendToHeader(element);
    }
  };
  const authLayout = renderRouter && !!nonAuthRoutes && nonAuthRoutes.length > 0 && authedRoutes?.length == 0;
  const adminLayout = renderRouter && !!authedRoutes && authedRoutes.length > 0 && nonAuthRoutes?.length == 0;
  return /* @__PURE__ */ jsx(BrowserRouter, { children: /* @__PURE__ */ jsx(MainContext.Provider, { value: { logo, onLogOut, appendToHeader, menuItems, userAvatar, mq }, children: /* @__PURE__ */ jsx(PrimeReactProvider, { value: { pt: theme }, children: /* @__PURE__ */ jsx(KitsThemeProvider, { theme: kitsTheme, children: /* @__PURE__ */ jsx(ThemeContextProvider, { theme, children: /* @__PURE__ */ jsx(
    LocaleContextProvider,
    {
      defaultLanguage,
      languages,
      onChangeLanguage,
      children: /* @__PURE__ */ jsx(PopupProvider, { children: /* @__PURE__ */ jsxs(PermissionsProvider, { roles: permissions, children: [
        authLayout && /* @__PURE__ */ jsx(AuthLayout, { routes: nonAuthRoutes }),
        adminLayout && /* @__PURE__ */ jsx(AdminLayout, { routes: authedRoutes, headerRef }),
        children
      ] }) })
    }
  ) }) }) }) }) });
};

export { MainContext, MainContextProvider as default };
//# sourceMappingURL=index.web.js.map
