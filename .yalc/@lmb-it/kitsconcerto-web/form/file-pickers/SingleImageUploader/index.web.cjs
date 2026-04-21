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
var index_web$1 = require('../../../primitives/Image/index.web.cjs');
var index_web$2 = require('../../../primitives/Text/index.web.cjs');
var Button_web = require('../../../components/Button/Button.web.cjs');
var index_web$3 = require('../../../primitives/Icon/index.web.cjs');
var locale = require('../../../hooks/locale.cjs');

const SingleImageUploader = () => {
  const { t } = locale.useLanguage();
  const {
    onChangeAnyFileUploader,
    acceptedMemes,
    files,
    isClassicUploader,
    onInvalidInput,
    removeFile,
    disabled,
    previewWidth,
    previewHeight
  } = index_web.useUploader();
  const fileUploadRef = React.useRef(null);
  const fileId = files.map((_, index) => index);
  const [{ isOver, canDrop }, drop] = reactDnd.useDrop(() => ({
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
      return item;
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop()
    })
  }));
  const isActive = canDrop && isOver;
  const onClickUpload = () => {
    fileUploadRef.current && fileUploadRef.current.getInput()?.click();
  };
  const currentFileName = React.useMemo(() => {
    if (files.length > 0) return files[0]?.name;
    return null;
  }, [files]);
  const isImage = !!currentFileName;
  const ImagePreview = React.useCallback(() => {
    const [imageToPreview, setImageToPreview] = React.useState("");
    let ImageSrc = imageToPreview;
    let imageName;
    if (files.length > 0) {
      const file = files[0];
      if (file?.file instanceof File) {
        const reader = new FileReader();
        reader.readAsDataURL(file.file);
        reader.onloadend = function() {
          setImageToPreview(reader.result);
        };
      } else if (typeof file?.file == "string") {
        const isGranted = currentFileName && filesTypes.checkExtAgainstAccepted(currentFileName, acceptedMemes);
        if (!isGranted) {
          ImageSrc = file?.file;
          imageName = file?.name;
        }
      } else {
        const isGranted = currentFileName && filesTypes.checkExtAgainstAccepted(currentFileName, acceptedMemes);
        if (isGranted) {
          ImageSrc = file?.file.uri;
        }
      }
    }
    return /* @__PURE__ */ jsxRuntime.jsxs(
      index.default,
      {
        justifyContent: "center",
        alignItems: "center",
        w: previewWidth ?? "full",
        ...previewHeight ? { h: previewHeight } : {},
        ...!previewHeight && !previewWidth ? { aspectRatio: 2 } : {},
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(
            index_web$1.default,
            {
              src: ImageSrc,
              alt: "Preview",
              preview: true,
              style: {
                objectFit: previewWidth || previewHeight ? "contain" : "cover",
                width: "100%",
                height: "100%"
              }
            }
          ),
          imageName && /* @__PURE__ */ jsxRuntime.jsx(
            index_web$2.default,
            {
              position: "absolute",
              bgColor: "surface-100",
              bottom: 0,
              p: 10,
              fontSize: 12,
              color: "text-secondary",
              children: imageName
            }
          ),
          /* @__PURE__ */ jsxRuntime.jsx(
            Button_web.Button,
            {
              "aria-label": t("remove"),
              style: {
                position: "absolute",
                right: 0,
                top: 0
              },
              size: "sm",
              severity: "danger",
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
    );
  }, [files]);
  const hiddenUpload = /* @__PURE__ */ jsxRuntime.jsx(
    fileupload.FileUpload,
    {
      ref: fileUploadRef,
      mode: "basic",
      auto: true,
      accept: acceptedMemes.length > 0 ? acceptedMemes.join(",") : "images/*",
      customUpload: true,
      style: { display: "none" },
      chooseLabel: t("filesSelected", files.length),
      uploadHandler: (event) => {
        onChangeAnyFileUploader(event.files);
      }
    }
  );
  if (isClassicUploader) {
    return /* @__PURE__ */ jsxRuntime.jsxs(
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
              accept: acceptedMemes.length > 0 ? acceptedMemes.join(",") : "images/*",
              customUpload: true,
              chooseLabel: isImage ? t("changeImage") : t("chooseImage"),
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
    );
  }
  return /* @__PURE__ */ jsxRuntime.jsxs(
    index.default,
    {
      flexDirection: "column",
      className: disabled ? "p-disabled" : "",
      w: "full",
      borderRadius: "inherit",
      alignItems: "center",
      gap: 8,
      children: [
        hiddenUpload,
        /* @__PURE__ */ jsxRuntime.jsxs(
          index.default,
          {
            flex: 1,
            w: "full",
            flexDirection: "column",
            onClick: onClickUpload,
            cursor: "pointer",
            borderRadius: "inherit",
            position: "relative",
            ref: drop,
            children: [
              isImage && /* @__PURE__ */ jsxRuntime.jsx(ImagePreview, {}),
              !isImage && /* @__PURE__ */ jsxRuntime.jsxs(
                index.default,
                {
                  borderW: 2,
                  borderStyle: "dashed",
                  borderColor: isActive ? "brand.500" : "surface-300",
                  bgColor: isActive ? "highlight-bg" : "transparent",
                  borderRadiusLeft: "lg",
                  borderRadiusRight: "lg",
                  borderRadius: "inherit",
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
                    /* @__PURE__ */ jsxRuntime.jsx(index_web$3.Icon, { name: "cloud-upload", size: "lg", color: isActive ? "brand.500" : "surface-300" }),
                    /* @__PURE__ */ jsxRuntime.jsx(index_web$2.default, { fontSize: 14, color: "text-secondary", textAlign: "center", children: isActive ? t("filesBeingDropped") : t("clickOrDragToUpload") })
                  ]
                }
              )
            ]
          }
        )
      ]
    }
  );
};

exports.default = SingleImageUploader;
//# sourceMappingURL=index.web.cjs.map
