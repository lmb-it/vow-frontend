import { jsx } from 'react/jsx-runtime';
import { useContext, useMemo, useState, useRef, useCallback, useEffect, createContext } from 'react';
import 'react-icons/fa';
import 'react-icons/ai';
import 'react-icons/io';
import '../../packages/types/src/Components/Molecules/Form/FilePicker/types/filesTypes.js';
import 'yup';
import { defaultTheme } from '../../packages/types/src/Theme/defaultTheme.js';
import { deepMerge } from '../../packages/types/src/Theme/extendTheme.js';
import { resolveTokenValue } from '../../packages/types/src/Theme/resolvers.js';
import { generateCssVariables } from './resolvers.web.js';
import { PRIME_OVERRIDES_CSS } from './primeOverrides.web.js';

const KitsThemeContext = createContext(null);
function KitsThemeProvider({ theme: themeOverride, children }) {
  const mergedTheme = useMemo(
    () => themeOverride ? deepMerge(defaultTheme, themeOverride) : defaultTheme,
    [themeOverride]
  );
  const [colorMode, setColorMode] = useState(mergedTheme.config.initialColorMode);
  const manualOverrideRef = useRef(false);
  const toggleColorMode = useCallback(() => {
    manualOverrideRef.current = true;
    setColorMode((m) => m === "light" ? "dark" : "light");
  }, []);
  const setColorModeManual = useCallback((mode) => {
    manualOverrideRef.current = true;
    setColorMode(mode);
  }, []);
  useEffect(() => {
    const cssVars = generateCssVariables(mergedTheme, colorMode);
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
  useEffect(() => {
    if (document.getElementById("kits-prime-overrides")) return;
    const styleEl = document.createElement("style");
    styleEl.id = "kits-prime-overrides";
    styleEl.textContent = PRIME_OVERRIDES_CSS;
    document.head.appendChild(styleEl);
  }, []);
  useEffect(() => {
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
  const resolveToken = useCallback(
    (token) => resolveTokenValue(mergedTheme, colorMode, token, "web"),
    [mergedTheme, colorMode]
  );
  const value = useMemo(
    () => ({ theme: mergedTheme, colorMode, toggleColorMode, setColorMode: setColorModeManual, resolveToken }),
    [mergedTheme, colorMode, toggleColorMode, setColorModeManual, resolveToken]
  );
  return /* @__PURE__ */ jsx(KitsThemeContext.Provider, { value, children });
}
function useKitsTheme() {
  const ctx = useContext(KitsThemeContext);
  if (!ctx) {
    return {
      theme: defaultTheme,
      colorMode: "light",
      toggleColorMode: () => {
      },
      setColorMode: () => {
      },
      resolveToken: (token) => resolveTokenValue(defaultTheme, "light", token, "web")
    };
  }
  return ctx;
}

export { KitsThemeContext, KitsThemeProvider, useKitsTheme };
//# sourceMappingURL=KitsThemeProvider.web.js.map
