import { jsx } from 'react/jsx-runtime';
import { useMemo } from 'react';
import { useLanguage } from '../../hooks/locale.js';
import '../../contexts/DialogContext.js';
import 'react-icons/fa';
import 'react-icons/ai';
import 'react-icons/io';
import '../../packages/types/src/Components/Molecules/Form/FilePicker/types/filesTypes.js';
import 'yup';
import ResponsiveElement from '../../apps/web/src/Factory/ResponsiveElement.js';
import useSeparator from '../../apps/web/src/Factory/useSeparator.js';

const Link = ({
  variant,
  isExternal,
  as,
  children,
  to,
  href,
  ...props
}) => {
  const componentType = to ? "Router" : "a";
  const { t } = useLanguage();
  const classes = useMemo(() => {
    const classes2 = [];
    if (!variant) {
      classes2.push(`kits-text-${as}`);
    } else {
      classes2.push(`kits-text-${variant}`);
    }
    return classes2.join(" ");
  }, [as, variant]);
  const { cssProps, nativeProps } = useSeparator(props);
  const componentProps = to ? { to } : {
    href,
    target: isExternal ? "_blank" : void 0,
    rel: isExternal ? "noopener noreferrer" : void 0
  };
  return /* @__PURE__ */ jsx(
    ResponsiveElement,
    {
      as: componentType,
      additionalClasses: classes,
      additionalStyles: {
        display: "flex",
        fontFamily: "var(--font-family)"
      },
      cssProps,
      nativeProps: nativeProps ? { ...componentProps, ...nativeProps } : componentProps,
      children
    }
  );
};

export { Link as default };
//# sourceMappingURL=index.web.js.map
