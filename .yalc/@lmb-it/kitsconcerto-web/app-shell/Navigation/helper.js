const checkPermissions = (sections, check) => {
  const routes = [];
  sections.forEach((section) => {
    let r = section;
    const permissions = {};
    if (section.permissionsRequired) {
      permissions.permissionsRequired = section.permissionsRequired;
    }
    if (section.permissionsOptional) {
      permissions.permissionsOptional = section.permissionsOptional;
    }
    const isPermitted = !permissions.permissionsOptional && !permissions.permissionsRequired || !check || check(permissions);
    if (isPermitted || section.loginNotRequired) {
      r = {
        ...section
      };
      if (section.links && section.links.length > 0) {
        r.links = checkPermissions(section.links, check);
      }
      routes.push(r);
    }
  });
  return routes;
};
const mapSectionsToRoutes = (sections) => {
  const id = Math.random().toString(16).slice(2);
  const routes = sections.map((section) => {
    let obj = {
      id: section.id ?? id,
      path: section.path,
      element: section.element
    };
    if (section.links && section.links.length > 0) {
      obj.children = mapSectionsToRoutes(section.links);
    }
    return obj;
  });
  return routes.filter((item) => !!item);
};

export { checkPermissions, mapSectionsToRoutes };
//# sourceMappingURL=helper.js.map
