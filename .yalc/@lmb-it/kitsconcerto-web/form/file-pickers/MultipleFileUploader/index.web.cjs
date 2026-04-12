'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var index_web = require('../MainUploader/index.web.cjs');
var reactDnd = require('react-dnd');
var reactDndHtml5Backend = require('react-dnd-html5-backend');
var filesIcons = require('../../../packages/types/src/Components/Molecules/Form/FilePicker/types/filesIcons.cjs');
var filesTypes = require('../../../packages/types/src/Components/Molecules/Form/FilePicker/types/filesTypes.cjs');
require('yup');
var index = require('../../../layout/Flex/index.cjs');
var index_web$1 = require('../../../primitives/Text/index.web.cjs');
var Button_web = require('../../../components/Button/Button.web.cjs');
var locale = require('../../../hooks/locale.cjs');

const MultipleFileUploader = () => {
  const {
    onChangeAnyFileUploader,
    limit,
    acceptedMemes,
    files,
    removeFile,
    isClassicUploader,
    placeholder,
    onInvalidInput,
    disabled
  } = index_web.useUploader();
  const { t } = locale.useLanguage();
  const fileInputRef = React.useRef(null);
  const [{ canDrop, isOver }, drop] = reactDnd.useDrop(() => ({
    accept: [reactDndHtml5Backend.NativeTypes.FILE],
    canDrop: (item) => {
      if (item && typeof item == "object" && "files" in item && Array.isArray(item.files) && item.files.length > 0) {
        return item.files.filter((file) => {
          if (file && "name" in file) {
            const isGranted = filesTypes.checkExtAgainstAccepted(
              file.name,
              acceptedMemes
            );
            if (!isGranted) {
              onInvalidInput(t("typeNotSupported"));
            }
            return isGranted;
          }
          return false;
        }).length == item.files.length;
      }
      return false;
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
  const isActive = canDrop && isOver;
  const onClickUpload = () => {
    fileInputRef.current && fileInputRef.current.click();
  };
  const [fileType, setFileType] = React.useState("");
  const onFileChange = (e) => {
    const inputFiles = e.target.files;
    if (inputFiles) {
      const sum = files.length + inputFiles.length;
      if (sum <= limit) {
        onChangeAnyFileUploader(inputFiles);
      } else {
        onInvalidInput(t("maximumAllowedFiles", limit));
      }
    }
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      const ft = selectedFile.type.split("/").pop().toLowerCase();
      setFileType(ft);
    }
  };
  return /* @__PURE__ */ jsxRuntime.jsxs(
    index.default,
    {
      flexDirection: "column",
      className: disabled ? "p-disabled" : "",
      w: "full",
      gap: 8,
      children: [
        !isClassicUploader && /* @__PURE__ */ jsxRuntime.jsxs(
          index.default,
          {
            w: "full",
            flexDirection: "column",
            onClick: onClickUpload,
            cursor: "pointer",
            ref: drop,
            children: [
              /* @__PURE__ */ jsxRuntime.jsxs(
                index.default,
                {
                  borderW: 2,
                  borderStyle: "dashed",
                  borderColor: isActive ? "primary" : "surface-300",
                  bgColor: isActive ? "highlight-bg" : "transparent",
                  borderRadiusLeft: "lg",
                  borderRadiusRight: "lg",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                  py: 32,
                  px: 16,
                  gap: 8,
                  w: "full",
                  className: "dropping_area",
                  style: { transition: "border-color 0.2s, background-color 0.2s" },
                  children: [
                    /* @__PURE__ */ jsxRuntime.jsx(index_web$1.default, { fontSize: 32, color: "primary", children: /* @__PURE__ */ jsxRuntime.jsx("i", { className: "pi pi-cloud-upload" }) }),
                    /* @__PURE__ */ jsxRuntime.jsx(index_web$1.default, { fontSize: 14, color: "text-secondary", textAlign: "center", children: isActive ? t("filesBeingDropped") : t("clickOrDragToUpload") })
                  ]
                }
              ),
              files.length > 0 && /* @__PURE__ */ jsxRuntime.jsxs(index_web$1.default, { fontSize: 13, color: "text-secondary", textAlign: "center", mt: 4, children: [
                t("filesSelected", files.length),
                " / ",
                limit
              ] })
            ]
          }
        ),
        isClassicUploader && /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
          files.map((file, index$1) => {
            const IconComponent = fileType in filesIcons.fileTypeIcon ? filesIcons.fileTypeIcon[fileType] : filesIcons.fileTypeIcon["unknown"];
            return /* @__PURE__ */ jsxRuntime.jsxs(
              index.default,
              {
                justifyContent: "space-between",
                alignItems: "center",
                flexDirection: "row",
                w: "full",
                gap: 8,
                children: [
                  /* @__PURE__ */ jsxRuntime.jsxs(index.default, { gap: 8, alignItems: "center", flex: 1, children: [
                    /* @__PURE__ */ jsxRuntime.jsx(IconComponent, { size: 30 }),
                    /* @__PURE__ */ jsxRuntime.jsx(
                      index_web$1.default,
                      {
                        as: "span",
                        fontSize: 13,
                        color: "text-secondary",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                        children: file.shortName
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntime.jsx(
                    Button_web.Button,
                    {
                      "aria-label": t("remove"),
                      size: "sm",
                      severity: "danger",
                      icon: "pi pi-times",
                      onClick: removeFile(index$1)
                    }
                  )
                ]
              },
              index$1
            );
          }),
          /* @__PURE__ */ jsxRuntime.jsx(
            index.default,
            {
              flex: 1,
              onClick: onClickUpload,
              cursor: "pointer",
              ref: drop,
              children: /* @__PURE__ */ jsxRuntime.jsxs(
                index.default,
                {
                  borderW: 2,
                  borderStyle: "dashed",
                  borderColor: isActive ? "primary" : "surface-300",
                  bgColor: isActive ? "highlight-bg" : "transparent",
                  borderRadiusLeft: "lg",
                  borderRadiusRight: "lg",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                  py: 16,
                  px: 16,
                  gap: 8,
                  w: "full",
                  className: "dropping_area",
                  style: { transition: "border-color 0.2s, background-color 0.2s" },
                  children: [
                    /* @__PURE__ */ jsxRuntime.jsx(index_web$1.default, { fontSize: 24, color: "primary", children: /* @__PURE__ */ jsxRuntime.jsx("i", { className: "pi pi-cloud-upload" }) }),
                    /* @__PURE__ */ jsxRuntime.jsx(index_web$1.default, { fontSize: 13, color: "text-secondary", textAlign: "center", children: isActive ? t("filesBeingDropped") : placeholder ?? t("dragFilesHere") })
                  ]
                }
              )
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntime.jsx(
          "input",
          {
            ref: fileInputRef,
            hidden: true,
            multiple: true,
            type: "file",
            accept: acceptedMemes.length > 0 ? acceptedMemes.join(",") : "*",
            onChange: onFileChange
          }
        )
      ]
    }
  );
};

exports.default = MultipleFileUploader;
//# sourceMappingURL=index.web.cjs.map
