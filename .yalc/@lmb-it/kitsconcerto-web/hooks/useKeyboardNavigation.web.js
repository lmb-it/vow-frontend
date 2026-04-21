import { createContext, useContext } from 'react';

const noop = () => {
};
const noopNavProps = { register: noop, unregister: noop, setElementsOrder: noop, getNavProps: () => ({}), focusNext: noop };
const KeyboardNavContext = createContext(noopNavProps);
const useKeyboardNav = () => useContext(KeyboardNavContext);
function useKeyboardNavProvider() {
  return noopNavProps;
}

export { KeyboardNavContext, useKeyboardNav, useKeyboardNavProvider };
//# sourceMappingURL=useKeyboardNavigation.web.js.map
