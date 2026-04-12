'use strict';

var responsive = require('./responsive.cjs');

const translateCss = (props, id = "") => {
  if (!props) return props;
  let p = { ...props };
  if (p.translateY != null && p.translateX == null) {
    p.translate = `0 ${p.translateY}`;
    delete p.translateY;
  } else if (p.translateX != null && p.translateY == null) {
    p.translate = `${p.translateX} 0`;
    delete p.translateX;
  } else if (p.translateX != null && p.translateY != null) {
    p.translate = `${p.translateX} ${p.translateY}`;
    delete p.translateX;
    delete p.translateY;
  }
  if (p.mx != null) {
    p.ml = p.mx;
    p.mr = p.mx;
    delete p.mx;
  }
  if (p.my != null) {
    p.mt = p.my;
    p.mb = p.my;
    delete p.my;
  }
  if (p.px != null) {
    p.pl = p.px;
    p.pr = p.px;
    delete p.px;
  }
  if (p.py != null) {
    p.pt = p.py;
    p.pb = p.py;
    delete p.py;
  }
  if (p.paddingHorizontal != null) {
    p.pl = p.paddingHorizontal;
    p.pr = p.paddingHorizontal;
    delete p.paddingHorizontal;
  }
  if (p.paddingVertical != null) {
    p.pt = p.paddingVertical;
    p.pb = p.paddingVertical;
    delete p.paddingVertical;
  }
  if (p.marginHorizontal != null) {
    p.ml = p.marginHorizontal;
    p.mr = p.marginHorizontal;
    delete p.marginHorizontal;
  }
  if (p.marginVertical != null) {
    p.mt = p.marginVertical;
    p.mb = p.marginVertical;
    delete p.marginVertical;
  }
  if (p.columns != null) {
    if (typeof p.columns === "number") {
      p.gridTemplateColumns = `repeat(${p.columns}, minmax(0, 1fr))`;
    } else if (Array.isArray(p.columns)) {
      p.gridTemplateColumns = p.columns.map(
        (v) => `repeat(${v}, minmax(0, 1fr))`
      );
    } else {
      const obj = {};
      Object.entries(p.columns).forEach(([k, v]) => {
        obj[k] = `repeat(${v}, minmax(0, 1fr))`;
      });
      p.gridTemplateColumns = obj;
    }
    delete p.columns;
  }
  if (p.rows != null) {
    if (typeof p.rows === "number") {
      p.gridTemplateRows = `repeat(${p.rows}, minmax(0, 1fr))`;
    } else if (Array.isArray(p.rows)) {
      p.gridTemplateRows = p.rows.map(
        (v) => `repeat(${v}, minmax(0, 1fr))`
      );
    } else {
      const obj = {};
      Object.entries(p.rows).forEach(([k, v]) => {
        obj[k] = `repeat(${v}, minmax(0, 1fr))`;
      });
      p.gridTemplateRows = obj;
    }
    delete p.rows;
  }
  if (p.colSpan != null || p.rowSpan != null || p.colEnd != null || p.colStart != null || p.rowStart != null || p.rowEnd != null) {
    p = generateGridStyles(p);
  }
  if (p.borderRadiusTop != null) {
    p.borderTopLeftRadius = p.borderRadiusTop;
    p.borderTopRightRadius = p.borderRadiusTop;
    delete p.borderRadiusTop;
  }
  if (p.borderRadiusBottom != null) {
    p.borderBottomLeftRadius = p.borderRadiusBottom;
    p.borderBottomRightRadius = p.borderRadiusBottom;
    delete p.borderRadiusBottom;
  }
  if (p.borderRadiusLeft != null) {
    p.borderTopLeftRadius = p.borderRadiusLeft;
    p.borderBottomLeftRadius = p.borderRadiusLeft;
    delete p.borderRadiusLeft;
  }
  if (p.borderRadiusRight != null) {
    p.borderTopRightRadius = p.borderRadiusRight;
    p.borderBottomRightRadius = p.borderRadiusRight;
    delete p.borderRadiusRight;
  }
  return p;
};
const generateGridStyles = (props) => {
  const { colSpan, rowSpan, colEnd, colStart, rowStart, rowEnd } = props;
  if (colStart != null && colEnd != null && rowStart != null && rowEnd != null) {
    props.area = `span ${rowStart} / span ${colStart} / span ${rowEnd} / span ${colEnd}`;
  } else {
    if (rowStart != null && rowEnd != null) {
      props.rowSpan = `span ${rowStart} / span ${rowEnd}`;
    }
    if (colStart != null && colEnd != null) {
      props.colSpan = `span ${colStart} / span ${colEnd}`;
    }
  }
  delete props.colStart;
  delete props.colEnd;
  delete props.rowStart;
  delete props.rowEnd;
  const toSpanValue = (v) => {
    if (typeof v === "string" && v.includes("span")) return v;
    return `span ${v}`;
  };
  if (colSpan != null) {
    props.colSpan = responsive.generateResponsiveObject("colSpan", colSpan, toSpanValue);
  }
  if (rowSpan != null) {
    props.rowSpan = responsive.generateResponsiveObject("rowSpan", rowSpan, toSpanValue);
  }
  return props;
};

exports.generateGridStyles = generateGridStyles;
exports.translateCss = translateCss;
//# sourceMappingURL=translate.cjs.map
