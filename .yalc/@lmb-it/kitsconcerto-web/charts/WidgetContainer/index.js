import { jsx, jsxs } from 'react/jsx-runtime';
import { useContext, useRef, useState, useCallback } from 'react';
import { handleDownload } from '../helpers/helper.js';
import { WidgetsContext } from '../context.js';
import { BsExclamationCircle } from 'react-icons/bs';
import useDisclosure from '../../hooks/useDisclosure.js';
import { useLanguage } from '../../hooks/locale.js';
import '../../contexts/DialogContext.js';
import { BiDownload } from 'react-icons/bi';
import { useUpdateEffect } from 'primereact/hooks';
import Container from '../../layout/Container/container.web.js';
import Flex from '../../layout/Flex/index.js';
import { Button } from '../../components/Button/Button.web.js';

const ChartContainer = ({
  children
}) => {
  const {
    enableExportButton = true,
    data: { stats, datasets },
    id = Math.random().toString(16).slice(2),
    label,
    info,
    isDarkMode = false,
    containerProps,
    height = 300,
    aspectRatio: _ = 1.5
  } = useContext(WidgetsContext);
  const { t } = useLanguage();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isFirstRun = useRef(true);
  const [mainFormData, setMainFormData] = useState(null);
  useCallback(
    (form) => setMainFormData(form),
    []
  );
  useUpdateEffect(() => {
    const notEmptyDataSets = !!datasets && Object.entries(datasets.fixedOptions).every(([key, value]) => !!value);
    if (!!mainFormData && notEmptyDataSets && isFirstRun.current) {
      mainFormData.setValues(datasets.fixedOptions);
      isFirstRun.current = false;
    }
  }, [datasets, !!mainFormData]);
  const chart = useRef(void 0);
  stats && stats.length > 0;
  return /* @__PURE__ */ jsx(
    Container,
    {
      title: label,
      rightElement: /* @__PURE__ */ jsxs(Flex, { gap: 3, justifyContent: "space-between", children: [
        !!info && /* @__PURE__ */ jsx(
          Button,
          {
            tooltip: info,
            size: "sm",
            severity: "secondary",
            "aria-label": info,
            icon: /* @__PURE__ */ jsx(BsExclamationCircle, {})
          }
        ),
        enableExportButton && /* @__PURE__ */ jsx(
          Button,
          {
            tooltip: t("generatePhoto"),
            size: "sm",
            severity: "secondary",
            "aria-label": t("settings"),
            icon: /* @__PURE__ */ jsx(BiDownload, {}),
            onClick: () => handleDownload(id, chart, isDarkMode)
          }
        )
      ] }),
      w: "full",
      h: "full",
      ...containerProps,
      children: /* @__PURE__ */ jsx(Flex, { flexDirection: "column", w: "full", h: "full", children: /* @__PURE__ */ jsx(
        Flex,
        {
          w: "100%",
          h: height ?? "100%",
          gap: 2,
          flexDirection: "row",
          justifyContent: "center",
          children: /* @__PURE__ */ jsx(Flex, { flex: 1, h: "full", children })
        }
      ) })
    }
  );
};

export { ChartContainer as default };
//# sourceMappingURL=index.js.map
