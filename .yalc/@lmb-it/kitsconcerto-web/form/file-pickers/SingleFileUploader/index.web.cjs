'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var index_web = require('../MainUploader/index.web.cjs');
var reactDnd = require('react-dnd');
var reactDndHtml5Backend = require('react-dnd-html5-backend');
require('react-icons/fa');
require('react-icons/ai');
require('react-icons/io');
var filesTypes = require('../../../packages/types/src/Components/Molecules/Form/FilePicker/types/filesTypes.cjs');
require('yup');
var fileupload = require('primereact/fileupload');
var index = require('../../../layout/Flex/index.cjs');
var Button_web = require('../../../components/Button/Button.web.cjs');
var locale = require('../../../hooks/locale.cjs');

const SingleFileUploader = () => {
  const {
    onChangeAnyFileUploader,
    acceptedMemes,
    files,
    onInvalidInput,
    removeFile,
    selectedInitialFiles,
    disabled
  } = index_web.useUploader();
  const { t } = locale.useLanguage();
  const fileUploadRef = React.useRef(null);
  const fileId = files.map((_, index) => index);
  const [, drop] = reactDnd.useDrop(() => ({
    accept: [reactDndHtml5Backend.NativeTypes.FILE],
    canDrop: (item) => {
      if (!(item && typeof item == "object" && "files" in item && Array.isArray(item.files) && item.files.length < 2)) {
        return false;
      }
      const firstFile = item.files[0];
      if (firstFile && "name" in firstFile) {
        const isGranted = filesTypes.checkExtAgainstAccepted(firstFile.name, acceptedMemes);
        if (!isGranted) {
          onInvalidInput(t("typeNotSupported"));
        }
        return isGranted;
      }
      return true;
    },
    drop: (item) => {
      if (item && typeof item == "object" && "files" in item && Array.isArray(item.files) && item.files.length > 0) {
        const files2 = item.files;
        onChangeAnyFileUploader(files2);
      }
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop()
    })
  }));
  const currentFileName = React.useMemo(() => {
    if (files.length > 0) {
      return files[0]?.name;
    }
    if (selectedInitialFiles.length > 0) {
      return selectedInitialFiles[0]?.split("/").pop();
    }
    return null;
  }, [files]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    index.default,
    {
      flexDirection: "column",
      className: disabled ? "p-disabled" : "",
      w: "full",
      alignItems: "center",
      gap: 8,
      children: /* @__PURE__ */ jsxRuntime.jsxs(
        index.default,
        {
          w: "full",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 8,
          flexDirection: "row",
          ref: drop,
          children: [
            /* @__PURE__ */ jsxRuntime.jsx(
              fileupload.FileUpload,
              {
                ref: fileUploadRef,
                mode: "basic",
                auto: true,
                accept: acceptedMemes.length > 0 ? acceptedMemes.join(",") : "*",
                customUpload: true,
                chooseLabel: currentFileName ?? t("chooseFile"),
                className: "w-full",
                uploadHandler: (event) => {
                  onChangeAnyFileUploader(event.files);
                }
              }
            ),
            /* @__PURE__ */ jsxRuntime.jsx(
              Button_web.Button,
              {
                "aria-label": t("remove"),
                disabled: !currentFileName,
                severity: "danger",
                size: "sm",
                icon: "pi pi-times",
                onClick: (event) => {
                  event.stopPropagation();
                  if (fileUploadRef.current) {
                    fileUploadRef.current.clear();
                  }
                  if (fileId.length > 0 && fileId[0] !== void 0) {
                    removeFile(fileId[0])();
                  }
                }
              }
            )
          ]
        }
      )
    }
  );
};

exports.default = SingleFileUploader;
//# sourceMappingURL=index.web.cjs.map
