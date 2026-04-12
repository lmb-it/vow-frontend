'use strict';

const enteringClassMap = {
  fadeIn: "fadein",
  fadeInUp: "fadeinup",
  fadeInDown: "fadeindown",
  fadeInLeft: "fadeinleft",
  fadeInRight: "fadeinright",
  slideInUp: "slideup",
  slideInDown: "slidedown",
  slideInLeft: "fadeinleft",
  slideInRight: "fadeinright",
  zoomIn: "zoomin",
  zoomInUp: "zoominup",
  zoomInDown: "zoomindown",
  zoomInLeft: "zoominleft",
  zoomInRight: "zoominright",
  scaleIn: "scalein",
  bounceIn: "scalein",
  flip: "flip",
  flipUp: "flipup",
  flipLeft: "flipleft",
  flipRight: "flipright"
};
const exitingClassMap = {
  fadeOut: "fadeout",
  fadeOutUp: "fadeoutup",
  fadeOutDown: "fadeoutdown",
  fadeOutLeft: "fadeoutleft",
  fadeOutRight: "fadeoutright",
  slideOutUp: "fadeoutup",
  slideOutDown: "fadeoutdown",
  slideOutLeft: "fadeoutleft",
  slideOutRight: "fadeoutright",
  zoomOut: "fadeout",
  bounceOut: "fadeout"
};
function buildAnimationClasses(options) {
  const classes = [];
  if (options.entering) classes.push(enteringClassMap[options.entering]);
  if (options.exiting) classes.push(exitingClassMap[options.exiting]);
  return classes.join(" ");
}

exports.buildAnimationClasses = buildAnimationClasses;
exports.enteringClassMap = enteringClassMap;
exports.exitingClassMap = exitingClassMap;
//# sourceMappingURL=animations.cjs.map
