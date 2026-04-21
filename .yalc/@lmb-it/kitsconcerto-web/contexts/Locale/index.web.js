import { jsx } from 'react/jsx-runtime';
import { createContext, useRef, useState, useEffect } from 'react';
import localeFiles from '../../locale/index.js';
import { locale, addLocale, localeOption } from 'primereact/api';

const LocaleContext = createContext({});
const LocaleContextProvider = ({
  children,
  languages,
  defaultLanguage = "en",
  onChangeLanguage
}) => {
  const defaultLocal = useRef("");
  const translationsKeys = useRef([]);
  const [language, setLanguage] = useState(defaultLanguage);
  const [isRTL, setIsRTL] = useState(defaultLanguage == "ar");
  const [refresh, setRefresh] = useState(/* @__PURE__ */ new Date());
  useEffect(() => {
    if (defaultLocal.current == defaultLanguage) return;
    defaultLocal.current = defaultLanguage;
    changeLanguage(defaultLanguage);
  }, [defaultLanguage]);
  const isKeyExists = (key) => {
    return translationsKeys.current.includes(key);
  };
  const setTranslations = () => {
    const translations = {};
    Object.entries(localeFiles).forEach(([key, obj]) => {
      translations[key] = obj;
    });
    languages?.forEach((item) => {
      if (item.lang in localeFiles) {
        const key = item.lang;
        const langTranslations = typeof localeFiles[key] === "object" ? localeFiles[key] : {};
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
      addLocale(key, value);
    });
    translationsKeys.current = Object.keys(translations);
    setRefresh(/* @__PURE__ */ new Date());
  };
  useEffect(() => {
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
    locale(lang);
    setLanguage(lang);
    setIsRTL(lang === "ar");
    localStorage.setItem("currentLanguage", lang);
    setRefresh(/* @__PURE__ */ new Date());
  };
  languages?.length ? languages[0]?.translations : {};
  const t = (key, ...params) => {
    try {
      let found = localeOption(key.toString(), currentLanguage) ?? key;
      const placeholders = found.match(/:\w+/g) || [];
      placeholders.forEach((placeholder, index) => {
        found = found.replace(placeholder, params[index] || "");
      });
      return found;
    } catch (e) {
      return key;
    }
  };
  return /* @__PURE__ */ jsx(LocaleContext.Provider, { value: {
    changeLanguage,
    t,
    currentLanguage,
    isRTL,
    isKeyExists
  }, children });
};

export { LocaleContext, LocaleContextProvider as default };
//# sourceMappingURL=index.web.js.map
