'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var api = require('primereact/api');
var KitsThemeProvider_web = require('./KitsThemeProvider.web.cjs');
require('react-icons/fa');
require('react-icons/ai');
require('react-icons/io');
require('../../packages/types/src/Components/Molecules/Form/FilePicker/types/filesTypes.cjs');
require('yup');

const ThemeContext = React.createContext({});
const ThemeContextProvider = ({ children, theme }) => {
  const { changeTheme } = React.useContext(api.PrimeReactContext);
  const [selectedTheme, setSelectedTheme] = React.useState("light");
  const doc = () => document.getElementById("app-theme");
  React.useEffect(() => {
    theme && setSelectedTheme(theme);
  }, [theme]);
  React.useEffect(() => {
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
  return /* @__PURE__ */ jsxRuntime.jsx(ThemeContext.Provider, { value: {
    switchTheme,
    theme: selectedTheme
  }, children });
};
const useTheme = () => React.useContext(ThemeContext);

exports.KitsThemeProvider = KitsThemeProvider_web.KitsThemeProvider;
exports.useKitsTheme = KitsThemeProvider_web.useKitsTheme;
exports.default = ThemeContextProvider;
exports.useTheme = useTheme;
//# sourceMappingURL=index.web.cjs.map
