import { jsx, jsxs } from 'react/jsx-runtime';
import { useState } from 'react';
import { SelectButton } from 'primereact/selectbutton';
import img from '../../../assets/Images/flags/sa.jpg.js';
import img$1 from '../../../assets/Images/flags/uk.png.js';
import Flex from '../../../layout/Flex/index.js';
import Text from '../../../primitives/Text/index.web.js';
import { useLanguage } from '../../../hooks/locale.js';

const LanguageSwitcher = () => {
  const { currentLanguage, changeLanguage } = useLanguage();
  const options = [
    {
      img: img,
      // text: 'AR',
      value: "ar"
    },
    {
      img: img$1,
      // text: 'EN',
      value: "en"
    }
  ];
  const [value, setValue] = useState(currentLanguage);
  const justifyTemplate = (option) => {
    return /* @__PURE__ */ jsxs(Flex, { gap: 5, justifyContent: "center", alignItems: "center", className: "sm", children: [
      /* @__PURE__ */ jsx(Text, { fontSize: "14px", children: option.text }),
      /* @__PURE__ */ jsx("img", { src: option.img, width: 30, height: 15, alt: "" })
    ] });
  };
  return /* @__PURE__ */ jsx(
    SelectButton,
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

export { LanguageSwitcher as default };
//# sourceMappingURL=index.js.map
