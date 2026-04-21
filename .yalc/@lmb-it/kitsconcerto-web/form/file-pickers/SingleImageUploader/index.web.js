import { jsxs, jsx } from 'react/jsx-runtime';
import { useRef, useMemo, useCallback, useState } from 'react';
import { useUploader } from '../MainUploader/index.web.js';
import { useDrop } from 'react-dnd';
import { NativeTypes } from 'react-dnd-html5-backend';
import 'react-icons/fa';
import 'react-icons/ai';
import 'react-icons/io';
import { checkExtAgainstAccepted } from '../../../packages/types/src/Components/Molecules/Form/FilePicker/types/filesTypes.js';
import 'yup';
import { FileUpload } from 'primereact/fileupload';
import Flex from '../../../layout/Flex/index.js';
import Image from '../../../primitives/Image/index.web.js';
import Text from '../../../primitives/Text/index.web.js';
import { Button } from '../../../components/Button/Button.web.js';
import { Icon } from '../../../primitives/Icon/index.web.js';
import { useLanguage } from '../../../hooks/locale.js';

const SingleImageUploader = () => {
  const { t } = useLanguage();
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
  } = useUploader();
  const fileUploadRef = useRef(null);
  const fileId = files.map((_, index) => index);
  const [{ isOver, canDrop }, drop] = useDrop(() => ({
    accept: [NativeTypes.FILE],
    canDrop: (item) => {
      if (!(item && typeof item == "object" && "files" in item && Array.isArray(item.files) && item.files.length < 2)) {
        return false;
      }
      const firstFile = item.files[0];
      if (firstFile && "name" in firstFile) {
        const isGranted = checkExtAgainstAccepted(firstFile.name, acceptedMemes);
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
  const currentFileName = useMemo(() => {
    if (files.length > 0) return files[0]?.name;
    return null;
  }, [files]);
  const isImage = !!currentFileName;
  const ImagePreview = useCallback(() => {
    const [imageToPreview, setImageToPreview] = useState("");
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
        const isGranted = currentFileName && checkExtAgainstAccepted(currentFileName, acceptedMemes);
        if (!isGranted) {
          ImageSrc = file?.file;
          imageName = file?.name;
        }
      } else {
        const isGranted = currentFileName && checkExtAgainstAccepted(currentFileName, acceptedMemes);
        if (isGranted) {
          ImageSrc = file?.file.uri;
        }
      }
    }
    return /* @__PURE__ */ jsxs(
      Flex,
      {
        justifyContent: "center",
        alignItems: "center",
        w: previewWidth ?? "full",
        ...previewHeight ? { h: previewHeight } : {},
        ...!previewHeight && !previewWidth ? { aspectRatio: 2 } : {},
        children: [
          /* @__PURE__ */ jsx(
            Image,
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
          imageName && /* @__PURE__ */ jsx(
            Text,
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
          /* @__PURE__ */ jsx(
            Button,
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
  const hiddenUpload = /* @__PURE__ */ jsx(
    FileUpload,
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
    return /* @__PURE__ */ jsxs(
      Flex,
      {
        w: "full",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 8,
        flexDirection: "row",
        ref: drop,
        children: [
          /* @__PURE__ */ jsx(
            FileUpload,
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
          /* @__PURE__ */ jsx(
            Button,
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
  return /* @__PURE__ */ jsxs(
    Flex,
    {
      flexDirection: "column",
      className: disabled ? "p-disabled" : "",
      w: "full",
      borderRadius: "inherit",
      alignItems: "center",
      gap: 8,
      children: [
        hiddenUpload,
        /* @__PURE__ */ jsxs(
          Flex,
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
              isImage && /* @__PURE__ */ jsx(ImagePreview, {}),
              !isImage && /* @__PURE__ */ jsxs(
                Flex,
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
                    /* @__PURE__ */ jsx(Icon, { name: "cloud-upload", size: "lg", color: isActive ? "brand.500" : "surface-300" }),
                    /* @__PURE__ */ jsx(Text, { fontSize: 14, color: "text-secondary", textAlign: "center", children: isActive ? t("filesBeingDropped") : t("clickOrDragToUpload") })
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

export { SingleImageUploader as default };
//# sourceMappingURL=index.web.js.map
