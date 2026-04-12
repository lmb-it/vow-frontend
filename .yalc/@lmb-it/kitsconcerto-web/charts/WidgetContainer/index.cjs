'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var helper = require('../helpers/helper.cjs');
var context = require('../context.cjs');
var bs = require('react-icons/bs');
var useDisclosure = require('../../hooks/useDisclosure.cjs');
var locale = require('../../hooks/locale.cjs');
require('../../contexts/DialogContext.cjs');
var bi = require('react-icons/bi');
var hooks = require('primereact/hooks');
var container_web = require('../../layout/Container/container.web.cjs');
var index = require('../../layout/Flex/index.cjs');
var Button_web = require('../../components/Button/Button.web.cjs');

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
  } = React.useContext(context.WidgetsContext);
  const { t } = locale.useLanguage();
  const { isOpen, onOpen, onClose } = useDisclosure.default();
  const isFirstRun = React.useRef(true);
  const [mainFormData, setMainFormData] = React.useState(null);
  React.useCallback(
    (form) => setMainFormData(form),
    []
  );
  hooks.useUpdateEffect(() => {
    const notEmptyDataSets = !!datasets && Object.entries(datasets.fixedOptions).every(([key, value]) => !!value);
    if (!!mainFormData && notEmptyDataSets && isFirstRun.current) {
      mainFormData.setValues(datasets.fixedOptions);
      isFirstRun.current = false;
    }
  }, [datasets, !!mainFormData]);
  const chart = React.useRef(void 0);
  stats && stats.length > 0;
  return /* @__PURE__ */ jsxRuntime.jsx(
    container_web.default,
    {
      title: label,
      rightElement: /* @__PURE__ */ jsxRuntime.jsxs(index.default, { gap: 3, justifyContent: "space-between", children: [
        !!info && /* @__PURE__ */ jsxRuntime.jsx(
          Button_web.Button,
          {
            tooltip: info,
            size: "sm",
            severity: "secondary",
            "aria-label": info,
            icon: /* @__PURE__ */ jsxRuntime.jsx(bs.BsExclamationCircle, {})
          }
        ),
        enableExportButton && /* @__PURE__ */ jsxRuntime.jsx(
          Button_web.Button,
          {
            tooltip: t("generatePhoto"),
            size: "sm",
            severity: "secondary",
            "aria-label": t("settings"),
            icon: /* @__PURE__ */ jsxRuntime.jsx(bi.BiDownload, {}),
            onClick: () => helper.handleDownload(id, chart, isDarkMode)
          }
        )
      ] }),
      w: "full",
      h: "full",
      ...containerProps,
      children: /* @__PURE__ */ jsxRuntime.jsx(index.default, { flexDirection: "column", w: "full", h: "full", children: /* @__PURE__ */ jsxRuntime.jsx(
        index.default,
        {
          w: "100%",
          h: height ?? "100%",
          gap: 2,
          flexDirection: "row",
          justifyContent: "center",
          children: /* @__PURE__ */ jsxRuntime.jsx(index.default, { flex: 1, h: "full", children })
        }
      ) })
    }
  );
};

exports.default = ChartContainer;
//# sourceMappingURL=index.cjs.map
