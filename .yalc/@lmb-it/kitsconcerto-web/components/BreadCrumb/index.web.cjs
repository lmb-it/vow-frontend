'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var reactRouterDom = require('react-router-dom');
var breadcrumb = require('primereact/breadcrumb');

const AppBreadcrumb = () => {
  const location = reactRouterDom.useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);
  const model = pathnames.map((value, index) => {
    const to = `/${pathnames.slice(0, index + 1).join("/")}`;
    return {
      // Capitalize first letter for better UI, or remove this to keep raw URL text
      label: value.charAt(0).toUpperCase() + value.slice(1),
      url: to,
      template: (item, options) => /* @__PURE__ */ jsxRuntime.jsx(
        reactRouterDom.Link,
        {
          to: item.url,
          className: options.className,
          onClick: options.onClick,
          children: /* @__PURE__ */ jsxRuntime.jsx("span", { className: options.labelClassName, children: item.label })
        }
      )
    };
  });
  const home = {
    icon: "pi pi-home",
    url: "/",
    template: (item, options) => /* @__PURE__ */ jsxRuntime.jsx(reactRouterDom.Link, { to: "/", className: options.className, onClick: options.onClick, children: /* @__PURE__ */ jsxRuntime.jsx("span", { className: `pi pi-home ${options.iconClassName}` }) })
  };
  return /* @__PURE__ */ jsxRuntime.jsx(breadcrumb.BreadCrumb, { style: { backgroundColor: "inherit" }, model, home });
};

exports.AppBreadcrumb = AppBreadcrumb;
exports.default = AppBreadcrumb;
//# sourceMappingURL=index.web.cjs.map
