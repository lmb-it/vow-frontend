import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { useMemo } from 'react';
import { Checkbox } from 'primereact/checkbox';
import { useKitsTheme } from '../../../contexts/Theme/KitsThemeProvider.web.js';
import Text from '../../../primitives/Text/index.web.js';
import Flex from '../../../layout/Flex/index.js';

const CheckboxButton = ({
  item,
  selected,
  disabled,
  isInvalid,
  onToggle
}) => {
  const { resolveToken } = useKitsTheme();
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
  const size = item.size ? sizes[item.size] : sizes.xs;
  const padding = item.size ? paddings[item.size] : paddings.xs;
  const classNames = useMemo(() => {
    const classes = ["check-button"];
    if (disabled) classes.push("opacity-40");
    if (selected) classes.push("checked-option");
    if (item.component) {
      classes.push("custom-checkbox-element");
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
    return /* @__PURE__ */ jsx(Text, { fontSize: size, children: item.label });
  };
  const renderBulb = () => /* @__PURE__ */ jsxs(
    Flex,
    {
      alignItems: "center",
      gap: "0.4rem",
      flexDirection: direction,
      children: [
        /* @__PURE__ */ jsx(
          Checkbox,
          {
            checked: selected,
            disabled,
            className: isInvalid ? "p-invalid" : void 0,
            onChange: () => {
              if (!disabled) onToggle();
            },
            pt: {
              box: {
                style: {
                  borderColor: isInvalid ? dangerColor : selected ? primaryColor : borderColor,
                  backgroundColor: selected ? primaryColor : "transparent"
                }
              },
              icon: {
                style: { color: "white" }
              }
            }
          }
        ),
        renderContent()
      ]
    }
  );
  const renderButton = () => /* @__PURE__ */ jsx(
    Flex,
    {
      fontSize: size,
      className: `${classNames} cursor-pointer px-${item.component ? 0 : padding?.[1]} py-${item.component ? 0 : padding?.[0]}`,
      onClick: () => {
        if (!disabled) onToggle();
      },
      children: renderContent()
    }
  );
  const renderComponent = () => /* @__PURE__ */ jsxs(Fragment, { children: [
    renderButton(),
    !!item.label && /* @__PURE__ */ jsx(Text, { as: "span", children: item.label })
  ] });
  return /* @__PURE__ */ jsx(
    Text,
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

export { CheckboxButton as default };
//# sourceMappingURL=checkbox.web.js.map
