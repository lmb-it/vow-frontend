'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var selectbutton = require('primereact/selectbutton');
var sa = require('../../../assets/Images/flags/sa.jpg.cjs');
var uk = require('../../../assets/Images/flags/uk.png.cjs');
var index = require('../../../layout/Flex/index.cjs');
var index_web = require('../../../primitives/Text/index.web.cjs');
var locale = require('../../../hooks/locale.cjs');

const LanguageSwitcher = () => {
  const { currentLanguage, changeLanguage } = locale.useLanguage();
  const options = [
    {
      img: sa.default,
      // text: 'AR',
      value: "ar"
    },
    {
      img: uk.default,
      // text: 'EN',
      value: "en"
    }
  ];
  const [value, setValue] = React.useState(currentLanguage);
  const justifyTemplate = (option) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(index.default, { gap: 5, justifyContent: "center", alignItems: "center", className: "sm", children: [
      /* @__PURE__ */ jsxRuntime.jsx(index_web.default, { fontSize: "14px", children: option.text }),
      /* @__PURE__ */ jsxRuntime.jsx("img", { src: option.img, width: 30, height: 15, alt: "" })
    ] });
  };
  return /* @__PURE__ */ jsxRuntime.jsx(
    selectbutton.SelectButton,
    {
      value,
      className: "langSwitcher",
      onChange: (e) => {
        setValue(e.value);
        changeLanguage(e.value);
      },
      itemTemplate: justifyTemplate,
      options
    }
  );
};

exports.default = LanguageSwitcher;
//# sourceMappingURL=index.cjs.map
