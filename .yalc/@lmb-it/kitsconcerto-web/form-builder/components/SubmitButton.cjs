'use strict';

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var Button_web = require('../../components/Button/Button.web.cjs');

const SubmitButton = ({ isSubmitting, handleSubmit, submitButtonProps, formMethods }) => {
  if (typeof submitButtonProps === "function") {
    return /* @__PURE__ */ jsxRuntime.jsx(jsxRuntime.Fragment, { children: submitButtonProps(handleSubmit, isSubmitting, formMethods) });
  }
  if (React.isValidElement(submitButtonProps)) {
    return submitButtonProps;
  }
  const props = {
    label: "Submit",
    severity: "secondary",
    isLoadingText: "Please Wait...",
    ...submitButtonProps && typeof submitButtonProps === "object" ? submitButtonProps : {}
  };
  return /* @__PURE__ */ jsxRuntime.jsx(
    Button_web.Button,
    {
      ...props,
      onClick: handleSubmit,
      loading: isSubmitting,
      disabled: isSubmitting
    }
  );
};

exports.SubmitButton = SubmitButton;
//# sourceMappingURL=SubmitButton.cjs.map
