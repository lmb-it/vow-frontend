'use strict';

require('react');

function ClHelper({
  isChecked,
  isInvalid,
  isDisabled,
  inputSize
}) {
  const classes = ["check-input"];
  if (isChecked) {
    classes.push("p-checked");
  }
  if (isDisabled) {
    classes.push("p-disable");
  }
  return classes.join(" ");
}

exports.ClHelper = ClHelper;
//# sourceMappingURL=Functions.cjs.map
