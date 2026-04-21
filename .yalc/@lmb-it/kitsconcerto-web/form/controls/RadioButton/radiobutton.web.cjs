'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var radiobutton = require('primereact/radiobutton');
var KitsThemeProvider_web = require('../../../contexts/Theme/KitsThemeProvider.web.cjs');
var index_web = require('../../../primitives/Text/index.web.cjs');
var index = require('../../../layout/Flex/index.cjs');

const RadioButton = ({
  item,
  selected,
  disabled,
  isInvalid,
  onToggle
}) => {
  const { resolveToken } = KitsThemeProvider_web.useKitsTheme();
  const primaryColor = resolveToken("primary");
  const borderColor = resolveToken("border");
  const dangerColor = resolveToken("danger");
  const sizes = {
    xs: 13,
    sm: 17,
    md: 22,
    lg: 27,
    xl: 30
  };
  const paddings = {
    xs: [1, 3],
    sm: [2, 5],
    md: [3, 7],
    lg: [4, 9],
    xl: [5, 13]
  };
  const size = item.size ? sizes[item.size] : sizes.sm;
  const padding = item.size ? paddings[item.size] : paddings.sm;
  const classNames = React.useMemo(() => {
    const classes = ["check-button"];
    if (disabled) classes.push("opacity-40");
    if (selected) classes.push("checked-option");
    if (item.component) {
      classes.push("with-component");
    } else {
      classes.push("border-round-md", "shadow-2");
    }
    if (isInvalid) classes.push("p-invalid");
    return classes.join(" ");
  }, [selected, disabled, isInvalid, item.component]);
  const leftLabel = item.labelPosition === "left";
  const bottomLabel = item.labelPosition === "bottom";
  const topLabel = item.labelPosition === "top";
  const direction = leftLabel ? "row-reverse" : bottomLabel ? "column" : topLabel ? "column-reverse" : "row";
  const renderContent = () => {
    if (item.component) {
      return typeof item.component === "function" ? item.component({
        selected,
        value: item.value,
        isInvalid: !!isInvalid
      }) : item.component;
    }
    return /* @__PURE__ */ jsxRuntime.jsx(index_web.default, { fontSize: size, m: 0, children: item.label });
  };
  const renderBulb = () => /* @__PURE__ */ jsxRuntime.jsxs(
    index.default,
    {
      alignItems: "center",
      gap: "0.4rem",
      flexDirection: direction,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(
          radiobutton.RadioButton,
          {
            checked: selected,
            disabled,
            onChange: onToggle,
            pt: {
              box: {
                style: {
                  borderColor: isInvalid ? dangerColor : selected ? primaryColor : borderColor,
                  backgroundColor: isInvalid ? dangerColor : selected ? primaryColor : "transparent"
                }
              },
              icon: {
                style: {
                  borderColor: isInvalid ? dangerColor : selected ? primaryColor : borderColor
                }
              }
            }
          }
        ),
        renderContent()
      ]
    }
  );
  const renderButton = () => /* @__PURE__ */ jsxRuntime.jsx(
    index.default,
    {
      fontSize: size,
      className: `${classNames} cursor-pointer px-${item.component ? 0 : padding?.[1]} py-${item.component ? 0 : padding?.[0]}`,
      onClick: () => {
        if (!disabled) onToggle();
      },
      children: renderContent()
    }
  );
  const renderComponent = () => /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
    renderButton(),
    !!item.label && /* @__PURE__ */ jsxRuntime.jsx(index_web.default, { as: "span", children: item.label })
  ] });
  return /* @__PURE__ */ jsxRuntime.jsx(
    index_web.default,
    {
      as: "label",
      alignItems: "center",
      justifyContent: "center",
      w: item.w,
      pointerEvents: disabled ? "none" : "auto",
      children: item.withBulbs ? renderBulb() : item.component ? renderComponent() : renderButton()
    }
  );
};

exports.default = RadioButton;
//# sourceMappingURL=radiobutton.web.cjs.map
