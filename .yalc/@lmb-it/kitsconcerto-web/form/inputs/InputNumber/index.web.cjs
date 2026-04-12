'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var inputnumber = require('primereact/inputnumber');
var index_web$1 = require('../../helpers/FormContainer/index.web.cjs');
require('react-icons/fa');
require('react-icons/ai');
require('react-icons/io');
require('../../../packages/types/src/Components/Molecules/Form/FilePicker/types/filesTypes.cjs');
require('yup');
require('../../../apps/web/src/Factory/ResponsiveElement.cjs');
var useSeparator = require('../../../apps/web/src/Factory/useSeparator.cjs');
var useComponentDefaults = require('../../../hooks/useComponentDefaults.cjs');
require('react');
require('../../../contexts/DialogContext.cjs');
var useResolvedStyle = require('../../../hooks/useResolvedStyle.cjs');
var KitsThemeProvider_web = require('../../../contexts/Theme/KitsThemeProvider.web.cjs');
var index_web = require('../../../primitives/Icon/index.web.cjs');

const KitsInputNumber = ({ ref, ...rawProps }) => {
  const { mergedProps: props, themeStyle, elementStyles } = useComponentDefaults.default("Input", rawProps);
  const resolvedThemeStyle = useResolvedStyle.default(themeStyle);
  const resolvedRootStyle = useResolvedStyle.default(elementStyles?.root || {});
  const { resolveToken } = KitsThemeProvider_web.useKitsTheme();
  const primaryColor = resolveToken("brand.500");
  resolveToken("border");
  const {
    id,
    label,
    required,
    value,
    errors,
    hideError,
    invalid,
    isFloatedLabel,
    disabled,
    helperText,
    inputSize,
    localProps,
    onChange,
    attached,
    containerStyle,
    ...rest
  } = props;
  const { nativeProps } = useSeparator.default(rest);
  const Element = /* @__PURE__ */ jsxRuntime.jsx(
    inputnumber.InputNumber,
    {
      ref,
      inputStyle: { borderRadius: 0, border: "none", ...resolvedRootStyle || resolvedThemeStyle },
      value,
      disabled,
      ...nativeProps,
      ...localProps,
      onValueChange: (e) => onChange?.(e),
      incrementButtonIcon: /* @__PURE__ */ jsxRuntime.jsx(index_web.Icon, { name: "chevron-up", size: "xl" }),
      decrementButtonIcon: /* @__PURE__ */ jsxRuntime.jsx(index_web.Icon, { name: "chevron-down", size: "xl" }),
      pt: {
        decrementButton: {
          style: {
            backgroundColor: primaryColor,
            border: "none"
          }
        },
        incrementButton: {
          style: {
            backgroundColor: primaryColor,
            border: "none"
          }
        }
      }
    }
  );
  if (attached) {
    return Element;
  }
  return /* @__PURE__ */ jsxRuntime.jsx(
    index_web$1.default,
    {
      id,
      helperText,
      isFloatedLabel,
      errors,
      invalid,
      label,
      hideError,
      required,
      disabled,
      inputSize,
      containerStyle,
      elementStyles,
      children: Element
    }
  );
};

exports.default = KitsInputNumber;
//# sourceMappingURL=index.web.cjs.map
