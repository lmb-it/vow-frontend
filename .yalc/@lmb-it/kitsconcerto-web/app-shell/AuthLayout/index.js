import { jsx } from 'react/jsx-runtime';
import { useRoutes } from 'react-router-dom';
import { mapSectionsToRoutes } from '../Navigation/helper.js';
import Flex from '../../layout/Flex/index.js';

const Routes = ({ routes }) => {
  return useRoutes(routes);
};
const AuthLayout = ({ routes }) => {
  const filteredRoutes = mapSectionsToRoutes(routes);
  return /* @__PURE__ */ jsx(Flex, { w: "full", h: "full", children: /* @__PURE__ */ jsx(Routes, { routes: filteredRoutes }) });
};

export { AuthLayout as default };
//# sourceMappingURL=index.js.map
