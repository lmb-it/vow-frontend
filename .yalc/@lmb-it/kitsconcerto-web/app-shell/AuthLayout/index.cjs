'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var reactRouterDom = require('react-router-dom');
var helper = require('../Navigation/helper.cjs');
var index = require('../../layout/Flex/index.cjs');

const Routes = ({ routes }) => {
  return reactRouterDom.useRoutes(routes);
};
const AuthLayout = ({ routes }) => {
  const filteredRoutes = helper.mapSectionsToRoutes(routes);
  return /* @__PURE__ */ jsxRuntime.jsx(index.default, { w: "full", h: "full", children: /* @__PURE__ */ jsxRuntime.jsx(Routes, { routes: filteredRoutes }) });
};

exports.default = AuthLayout;
//# sourceMappingURL=index.cjs.map
