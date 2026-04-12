import { jsx } from 'react/jsx-runtime';
import { Divider as Divider$1 } from 'primereact/divider';
import 'react-icons/fa';
import 'react-icons/ai';
import 'react-icons/io';
import '../../packages/types/src/Components/Molecules/Form/FilePicker/types/filesTypes.js';
import 'yup';
import ResponsiveElement from '../../apps/web/src/Factory/ResponsiveElement.js';
import useSeparator from '../../apps/web/src/Factory/useSeparator.js';
import { useKitsTheme } from '../../contexts/Theme/KitsThemeProvider.web.js';

const Divider = (props) => {
  const { cssProps, nativeProps } = useSeparator(props);
  const {
    align,
    children,
    layout = "horizontal",
    type: borderType = "solid",
    unstyled = false,
    ...rest
  } = nativeProps;
  const { resolveToken } = useKitsTheme();
  const dividerColor = resolveToken("divider");
  const style = {};
  if (!unstyled) {
    style["--surface-border"] = dividerColor;
  }
  return /* @__PURE__ */ jsx(
    ResponsiveElement,
    {
      cssProps,
      nativeProps: rest,
      additionalStyles: {},
      children: /* @__PURE__ */ jsx(
        Divider$1,
        {
          align,
          layout,
          type: borderType,
          unstyled,
          style,
          children
        }
      )
    }
  );
};

export { Divider as default };
//# sourceMappingURL=index.web.js.map
