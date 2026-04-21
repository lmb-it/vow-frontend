import { jsx } from 'react/jsx-runtime';
import 'react-icons/fa';
import 'react-icons/ai';
import 'react-icons/io';
import '../../packages/types/src/Components/Molecules/Form/FilePicker/types/filesTypes.js';
import 'yup';
import ResponsiveElement from '../../apps/web/src/Factory/ResponsiveElement.js';
import useSeparator from '../../apps/web/src/Factory/useSeparator.js';

const spaceScale = {
  xs: "0.25rem",
  sm: "0.5rem",
  md: "0.75rem",
  lg: "1rem",
  xl: "1.25rem",
  "2xl": "1.5rem",
  "3xl": "1.75rem",
  "4xl": "2rem"
};
const VStack = (props) => {
  const { cssProps, nativeProps } = useSeparator(props);
  const { space = "md", reversed = false, children, style, entering, exiting, ...rest } = nativeProps;
  const additionalStyles = {
    display: "flex",
    flexDirection: reversed ? "column-reverse" : "column",
    gap: spaceScale[space] ?? spaceScale.md
  };
  return /* @__PURE__ */ jsx(
    ResponsiveElement,
    {
      ref: props.ref,
      entering,
      exiting,
      nativeProps: rest,
      cssProps,
      additionalStyles,
      children
    }
  );
};

export { VStack as default };
//# sourceMappingURL=index.web.js.map
