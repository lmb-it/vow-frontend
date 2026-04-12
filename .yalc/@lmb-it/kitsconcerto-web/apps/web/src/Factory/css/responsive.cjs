'use strict';

const BREAKPOINT_KEYS = ["base", "xs", "sm", "md", "lg", "xl", "xxl", "xxxl"];
const isPrimitive = (v) => typeof v === "string" || typeof v === "number";
const expandResponsiveValue = (value) => {
  const out = {};
  if (value == null) return out;
  if (isPrimitive(value)) {
    out.base = value;
    return out;
  }
  if (Array.isArray(value)) {
    value.forEach((v, i) => {
      if (v !== void 0 && i < BREAKPOINT_KEYS.length) {
        out[BREAKPOINT_KEYS[i]] = v;
      }
    });
    return out;
  }
  Object.entries(value).forEach(([k, v]) => {
    if (v == null) return;
    if (typeof v === "object" && !Array.isArray(v)) {
      const nested = expandResponsiveValue(v);
      Object.entries(nested).forEach(([nk, nv]) => {
        out[`${k}:${nk}`] = nv;
      });
    } else {
      out[k] = v;
    }
  });
  return out;
};
const generateResponsiveObject = (_property, values, transform) => {
  const classes = {};
  if (Array.isArray(values)) {
    values.forEach((item, index) => {
      if (index < BREAKPOINT_KEYS.length) {
        classes[BREAKPOINT_KEYS[index]] = transform ? transform(item) : item;
      }
    });
  } else if (typeof values === "object" && values !== null) {
    Object.entries(values).forEach(([k, v]) => {
      classes[k] = transform ? transform(v) : v;
    });
  } else {
    if (values === 0 || values) {
      classes.base = transform ? transform(values) : values;
    }
  }
  return classes;
};

exports.expandResponsiveValue = expandResponsiveValue;
exports.generateResponsiveObject = generateResponsiveObject;
//# sourceMappingURL=responsive.cjs.map
