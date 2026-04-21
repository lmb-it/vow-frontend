import { jsx } from 'react/jsx-runtime';
import { useContext, useState, useEffect, createContext } from 'react';
import { PrimeReactContext } from 'primereact/api';
export { KitsThemeProvider, useKitsTheme } from './KitsThemeProvider.web.js';
import 'react-icons/fa';
import 'react-icons/ai';
import 'react-icons/io';
import '../../packages/types/src/Components/Molecules/Form/FilePicker/types/filesTypes.js';
import 'yup';

const ThemeContext = createContext({});
const ThemeContextProvider = ({ children, theme }) => {
  const { changeTheme } = useContext(PrimeReactContext);
  const [selectedTheme, setSelectedTheme] = useState("light");
  const doc = () => document.getElementById("app-theme");
  useEffect(() => {
    theme && setSelectedTheme(theme);
  }, [theme]);
  useEffect(() => {
    const m = doc();
    if (m) {
      const href = m.getAttribute("href");
      const t = href?.includes("dark") ? "dark" : "light";
      setSelectedTheme(t);
    }
  }, []);
  const switchTheme = (themeFile = void 0) => {
    const m = doc();
    let getCurrentFileName = "light";
    const newTheme = selectedTheme === "dark" ? "light" : "dark";
    if (m) {
      getCurrentFileName = m.getAttribute("href") ?? "light";
    }
    let newFileName;
    if (!themeFile) {
      let toArray = getCurrentFileName.split(selectedTheme);
      newFileName = toArray.join(newTheme);
    } else {
      newFileName = `/node_modules/primereact/resources/themes/${themeFile}/theme.css`;
    }
    if (changeTheme) {
      changeTheme(
        getCurrentFileName,
        newFileName,
        "app-theme",
        () => setSelectedTheme(newTheme)
      );
    }
  };
  return /* @__PURE__ */ jsx(ThemeContext.Provider, { value: {
    switchTheme,
    theme: selectedTheme
  }, children });
};
const useTheme = () => useContext(ThemeContext);

export { ThemeContextProvider as default, useTheme };
//# sourceMappingURL=index.web.js.map
