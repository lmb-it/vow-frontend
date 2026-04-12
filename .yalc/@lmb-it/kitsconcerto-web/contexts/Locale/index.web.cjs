'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var index = require('../../locale/index.cjs');
var api = require('primereact/api');

const LocaleContext = React.createContext({});
const LocaleContextProvider = ({
  children,
  languages,
  defaultLanguage = "en",
  onChangeLanguage
}) => {
  const defaultLocal = React.useRef("");
  const translationsKeys = React.useRef([]);
  const [language, setLanguage] = React.useState(defaultLanguage);
  const [isRTL, setIsRTL] = React.useState(defaultLanguage == "ar");
  const [refresh, setRefresh] = React.useState(/* @__PURE__ */ new Date());
  React.useEffect(() => {
    if (defaultLocal.current == defaultLanguage) return;
    defaultLocal.current = defaultLanguage;
    changeLanguage(defaultLanguage);
  }, [defaultLanguage]);
  const isKeyExists = (key) => {
    return translationsKeys.current.includes(key);
  };
  const setTranslations = () => {
    const translations = {};
    Object.entries(index.default).forEach(([key, obj]) => {
      translations[key] = obj;
    });
    languages?.forEach((item) => {
      if (item.lang in index.default) {
        const key = item.lang;
        const langTranslations = typeof index.default[key] === "object" ? index.default[key] : {};
        translations[item.lang] = {
          ...langTranslations,
          ...item.translations || {}
          // spread safely in case item.translations is undefined
        };
      } else {
        translations[item.lang] = { ...item.translations || {} };
      }
    });
    Object.entries(translations).forEach(([key, value]) => {
      api.addLocale(key, value);
    });
    translationsKeys.current = Object.keys(translations);
    setRefresh(/* @__PURE__ */ new Date());
  };
  React.useEffect(() => {
    setTranslations();
    changeLanguage();
  }, []);
  const currentLanguage = (() => {
    const fromLocal = localStorage.getItem("currentLanguage");
    if (fromLocal != language) {
      localStorage.setItem("currentLanguage", language);
    }
    return language;
  })();
  const changeLanguage = (key = null) => {
    const lang = key ?? currentLanguage;
    onChangeLanguage && onChangeLanguage(lang);
    api.locale(lang);
    setLanguage(lang);
    setIsRTL(lang === "ar");
    localStorage.setItem("currentLanguage", lang);
    setRefresh(/* @__PURE__ */ new Date());
  };
  languages?.length ? languages[0]?.translations : {};
  const t = (key, ...params) => {
    try {
      let found = api.localeOption(key.toString(), currentLanguage) ?? key;
      const placeholders = found.match(/:\w+/g) || [];
      placeholders.forEach((placeholder, index) => {
        found = found.replace(placeholder, params[index] || "");
      });
      return found;
    } catch (e) {
      return key;
    }
  };
  return /* @__PURE__ */ jsxRuntime.jsx(LocaleContext.Provider, { value: {
    changeLanguage,
    t,
    currentLanguage,
    isRTL,
    isKeyExists
  }, children });
};

exports.LocaleContext = LocaleContext;
exports.default = LocaleContextProvider;
//# sourceMappingURL=index.web.cjs.map
