import { jsx } from 'react/jsx-runtime';
import { SelectButton as SelectButton$1 } from 'primereact/selectbutton';
import { useKitsTheme } from '../../../contexts/Theme/KitsThemeProvider.web.js';

const SelectButton = (props) => {
  const { resolveToken } = useKitsTheme();
  const primaryColor = resolveToken("primary");
  return /* @__PURE__ */ jsx(
    SelectButton$1,
    {
      ...props,
      pt: {
        button: ({ context }) => context?.selected ? {
          style: { backgroundColor: primaryColor, color: "white", borderColor: primaryColor }
        } : void 0,
        ...props.pt
      }
    }
  );
};

export { SelectButton };
//# sourceMappingURL=index.web.js.map
