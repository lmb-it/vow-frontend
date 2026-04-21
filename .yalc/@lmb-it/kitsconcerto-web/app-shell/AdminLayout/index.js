import { jsx, jsxs } from 'react/jsx-runtime';
import { useRef, useState, useMemo } from 'react';
import { useRoutes } from 'react-router-dom';
import { checkPermissions, mapSectionsToRoutes } from '../Navigation/helper.js';
import { useMediaQuery } from 'react-responsive';
import useScrollState from '../../hooks/useScrollState/index.web.js';
import { useLanguage } from '../../hooks/locale.js';
import '../../contexts/DialogContext.js';
import { usePermissions } from '../../contexts/PermissionsContext.js';
import 'react-icons/fa';
import 'react-icons/ai';
import 'react-icons/io';
import '../../packages/types/src/Components/Molecules/Form/FilePicker/types/filesTypes.js';
import 'yup';
import { breakpoints } from '../../packages/types/src/Css/constants/breakpoints/index.web.js';
import { useKitsTheme } from '../../contexts/Theme/KitsThemeProvider.web.js';
import Box from '../../primitives/Box/index.js';
import SidebarMenu from '../Navigation/index.js';
import Header from '../Header/index.js';

const Routes = ({ routes }) => {
  return useRoutes(routes);
};
const AdminLayout = ({ routes, headerRef }) => {
  const mainRef = useRef(null);
  const isSmallDevice = useMediaQuery({ maxWidth: breakpoints.lg });
  const { scrollState } = useScrollState({
    target: mainRef.current
  });
  const isScrolledUp = scrollState.y >= 25;
  const [visible, setVisible] = useState(false);
  const { check } = usePermissions();
  const { t, currentLanguage } = useLanguage();
  const { colorMode } = useKitsTheme();
  const layoutThemeClass = colorMode === "dark" ? "layout-dark" : "layout-light";
  const permittedRoutes = checkPermissions(routes, check);
  const filteredRoutes = mapSectionsToRoutes(permittedRoutes);
  const routeComponent = useMemo(() => {
    return /* @__PURE__ */ jsx(Routes, { routes: filteredRoutes });
  }, []);
  return /* @__PURE__ */ jsxs(Box, { ref: mainRef, className: `layout-container ${layoutThemeClass} layout-colorscheme-menu layout-static p-ripple-disabled`, id: "admin-layout", children: [
    /* @__PURE__ */ jsx(
      Box,
      {
        className: "layout-sidebar",
        children: /* @__PURE__ */ jsx(
          SidebarMenu,
          {
            setVisible,
            visible: isSmallDevice && visible,
            placement: currentLanguage === "ar" ? "rtl" : "ltr",
            routes: permittedRoutes
          }
        )
      }
    ),
    /* @__PURE__ */ jsxs(
      Box,
      {
        className: "layout-content-wrapper",
        children: [
          /* @__PURE__ */ jsx(
            Box,
            {
              id: "layout-topbar",
              className: "layout-topbar transition-all animation-linear transition-duration-200 " + (isScrolledUp ? "sticky-bar" : ""),
              position: "sticky",
              top: 0,
              children: /* @__PURE__ */ jsx(Header, { hide: visible, setHide: setVisible, ref: headerRef, routes: filteredRoutes })
            }
          ),
          /* @__PURE__ */ jsx(Box, { className: "layout-content", overflow: "auto", children: routeComponent })
        ]
      }
    )
  ] });
};

export { AdminLayout as default };
//# sourceMappingURL=index.js.map
