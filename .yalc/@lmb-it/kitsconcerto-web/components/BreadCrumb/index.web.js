import { jsx } from 'react/jsx-runtime';
import { useLocation, Link } from 'react-router-dom';
import { BreadCrumb } from 'primereact/breadcrumb';

const AppBreadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);
  const model = pathnames.map((value, index) => {
    const to = `/${pathnames.slice(0, index + 1).join("/")}`;
    return {
      // Capitalize first letter for better UI, or remove this to keep raw URL text
      label: value.charAt(0).toUpperCase() + value.slice(1),
      url: to,
      template: (item, options) => /* @__PURE__ */ jsx(
        Link,
        {
          to: item.url,
          className: options.className,
          onClick: options.onClick,
          children: /* @__PURE__ */ jsx("span", { className: options.labelClassName, children: item.label })
        }
      )
    };
  });
  const home = {
    icon: "pi pi-home",
    url: "/",
    template: (item, options) => /* @__PURE__ */ jsx(Link, { to: "/", className: options.className, onClick: options.onClick, children: /* @__PURE__ */ jsx("span", { className: `pi pi-home ${options.iconClassName}` }) })
  };
  return /* @__PURE__ */ jsx(BreadCrumb, { style: { backgroundColor: "inherit" }, model, home });
};

export { AppBreadcrumb, AppBreadcrumb as default };
//# sourceMappingURL=index.web.js.map
