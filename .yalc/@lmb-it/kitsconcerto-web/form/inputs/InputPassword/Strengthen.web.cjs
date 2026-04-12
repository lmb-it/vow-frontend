'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var fa6 = require('react-icons/fa6');
var Yup = require('yup');
var index = require('../../../layout/Flex/index.cjs');
var index_web = require('../../../primitives/Text/index.web.cjs');

const Auth0PasswordStrength = ({
  value,
  show,
  schema
}) => {
  const condition = (con) => {
    return con ? "green" : "red";
  };
  return /* @__PURE__ */ jsxRuntime.jsx(
    index.default,
    {
      flexDirection: "column",
      position: "absolute",
      backgroundColor: "white",
      pointerEvents: "none",
      w: "100%",
      top: "100%",
      p: 10,
      opacity: show ? 100 : 0,
      borderRadius: "lg",
      fontSize: "sm",
      zIndex: 9999,
      shadow: "lg",
      children: schema.tests.map((test, index$1) => {
        const msg = test.OPTIONS?.message;
        const name = test.OPTIONS?.name;
        if (name == "required") return null;
        const ctx = {
          path: "password",
          parent: {},
          options: {},
          originalValue: value,
          resolve: (val) => val,
          createError: (params) => new Yup.ValidationError(params?.message?.toString() ?? "", value, "password")
        };
        const testFn = test.OPTIONS?.test;
        const testing = testFn?.call(ctx, value);
        return /* @__PURE__ */ jsxRuntime.jsxs(index.default, { flexDirection: "row", alignItems: "center", gap: 10, children: [
          /* @__PURE__ */ jsxRuntime.jsx(index.default, { children: /* @__PURE__ */ jsxRuntime.jsx(fa6.FaRegCircleCheck, { color: condition(!!testing) }) }),
          typeof msg == "string" ? /* @__PURE__ */ jsxRuntime.jsx(index_web.default, { fontSize: 13, children: msg }) : /* @__PURE__ */ jsxRuntime.jsx(index_web.default, { children: name })
        ] }, index$1);
      })
    }
  );
};

exports.default = Auth0PasswordStrength;
//# sourceMappingURL=Strengthen.web.cjs.map
