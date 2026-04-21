'use strict';

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
require('react-icons/fa');
require('react-icons/ai');
require('react-icons/io');
require('../../packages/types/src/Components/Molecules/Form/FilePicker/types/filesTypes.cjs');
require('yup');
var defaultTheme = require('../../packages/types/src/Theme/defaultTheme.cjs');
var extendTheme = require('../../packages/types/src/Theme/extendTheme.cjs');
var resolvers = require('../../packages/types/src/Theme/resolvers.cjs');
var resolvers_web = require('./resolvers.web.cjs');
var primeOverrides_web = require('./primeOverrides.web.cjs');

const KitsThemeContext = React.createContext(null);
function KitsThemeProvider({ theme: themeOverride, children }) {
  const mergedTheme = React.useMemo(
    () => themeOverride ? extendTheme.deepMerge(defaultTheme.defaultTheme, themeOverride) : defaultTheme.defaultTheme,
    [themeOverride]
  );
  const [colorMode, setColorMode] = React.useState(mergedTheme.config.initialColorMode);
  const manualOverrideRef = React.useRef(false);
  const toggleColorMode = React.useCallback(() => {
    manualOverrideRef.current = true;
    setColorMode((m) => m === "light" ? "dark" : "light");
  }, []);
  const setColorModeManual = React.useCallback((mode) => {
    manualOverrideRef.current = true;
    setColorMode(mode);
  }, []);
  React.useEffect(() => {
    const cssVars = resolvers_web.generateCssVariables(mergedTheme, colorMode);
    let styleEl = document.getElementById("kits-theme-vars");
    if (!styleEl) {
      styleEl = document.createElement("style");
      styleEl.id = "kits-theme-vars";
      document.head.appendChild(styleEl);
    }
    styleEl.textContent = `:root {
${cssVars}
}`;
    document.documentElement.classList.toggle("dark", colorMode === "dark");
    document.documentElement.setAttribute("data-theme", colorMode);
  }, [mergedTheme, colorMode]);
  React.useEffect(() => {
    if (document.getElementById("kits-prime-overrides")) return;
    const styleEl = document.createElement("style");
    styleEl.id = "kits-prime-overrides";
    styleEl.textContent = primeOverrides_web.PRIME_OVERRIDES_CSS;
    document.head.appendChild(styleEl);
  }, []);
  React.useEffect(() => {
    if (!mergedTheme.config.useSystemColorMode) return;
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    if (!manualOverrideRef.current) {
      setColorMode(mq.matches ? "dark" : "light");
    }
    const handler = (e) => {
      if (!manualOverrideRef.current) {
        setColorMode(e.matches ? "dark" : "light");
      }
    };
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, [mergedTheme.config.useSystemColorMode]);
  const resolveToken = React.useCallback(
    (token) => resolvers.resolveTokenValue(mergedTheme, colorMode, token, "web"),
    [mergedTheme, colorMode]
  );
  const value = React.useMemo(
    () => ({ theme: mergedTheme, colorMode, toggleColorMode, setColorMode: setColorModeManual, resolveToken }),
    [mergedTheme, colorMode, toggleColorMode, setColorModeManual, resolveToken]
  );
  return /* @__PURE__ */ jsxRuntime.jsx(KitsThemeContext.Provider, { value, children });
}
function useKitsTheme() {
  const ctx = React.useContext(KitsThemeContext);
  if (!ctx) {
    return {
      theme: defaultTheme.defaultTheme,
      colorMode: "light",
      toggleColorMode: () => {
      },
      setColorMode: () => {
      },
      resolveToken: (token) => resolvers.resolveTokenValue(defaultTheme.defaultTheme, "light", token, "web")
    };
  }
  return ctx;
}

exports.KitsThemeContext = KitsThemeContext;
exports.KitsThemeProvider = KitsThemeProvider;
exports.useKitsTheme = useKitsTheme;
//# sourceMappingURL=KitsThemeProvider.web.cjs.map
