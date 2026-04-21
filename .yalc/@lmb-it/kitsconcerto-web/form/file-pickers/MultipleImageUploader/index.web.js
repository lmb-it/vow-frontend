import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { useRef, useState, useEffect } from 'react';
import { useUploader } from '../MainUploader/index.web.js';
import { useDrop } from 'react-dnd';
import { NativeTypes } from 'react-dnd-html5-backend';
import 'react-icons/fa';
import 'react-icons/ai';
import 'react-icons/io';
import { checkExtAgainstAccepted } from '../../../packages/types/src/Components/Molecules/Form/FilePicker/types/filesTypes.js';
import 'yup';
import { Tooltip } from 'primereact/tooltip';
import Flex from '../../../layout/Flex/index.js';
import Text from '../../../primitives/Text/index.web.js';
import { Button } from '../../../components/Button/Button.web.js';
import { useLanguage } from '../../../hooks/locale.js';

const generateUniqueID = () => {
  return Math.floor(Math.random() * 100);
};
const MultipleImageUploader = () => {
  const {
    onChangeAnyFileUploader,
    limit,
    acceptedMemes,
    files,
    removeFile,
    isClassicUploader,
    onInvalidInput,
    disabled
  } = useUploader();
  const { t } = useLanguage();
  const fileInputRef = useRef(null);
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: [NativeTypes.FILE],
    canDrop: (item) => {
      if (item && typeof item == "object" && "files" in item && Array.isArray(item.files) && item.files.length > 0) {
        return item.files.filter((file) => {
          if (file && "name" in file) {
            const isGranted = checkExtAgainstAccepted(
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
  };
  const ImagePreview = ({ imageFile }) => {
    const [imageToPreview, setImageToPreview] = useState("");
    const uniqueId = generateUniqueID();
    useEffect(() => {
      if (files.length > 0) {
        if (imageFile.file instanceof File) {
          const reader = new FileReader();
          reader.readAsDataURL(imageFile.file);
          reader.onloadend = function() {
            setImageToPreview(reader.result);
          };
        } else if (typeof imageFile.file === "string") {
          const isGranted = checkExtAgainstAccepted(
            imageFile.ext,
            acceptedMemes
          );
          if (!isGranted) {
            setImageToPreview(imageFile.file);
          }
        } else {
          const isGranted = checkExtAgainstAccepted(
            imageFile.file.uri,
            acceptedMemes
          );
          if (isGranted) {
            setImageToPreview(imageFile.file.uri);
          }
        }
      }
    }, [files, imageFile, acceptedMemes]);
    return /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx(
        Tooltip,
        {
          target: `.${uniqueId}`,
          autoHide: true,
          style: { padding: 0 },
          mouseTrackLeft: 10,
          children: /* @__PURE__ */ jsx(
            "img",
            {
              style: { objectFit: "cover", width: 200 },
              alt: "Preview",
              src: imageToPreview
            }
          )
        }
      ),
      /* @__PURE__ */ jsx(
        "img",
        {
          className: `image-preview ${uniqueId}`,
          style: { objectFit: "cover", width: 50, height: 50, borderRadius: 6 },
          alt: "Preview",
          src: imageToPreview
        }
      )
    ] });
  };
  return /* @__PURE__ */ jsxs(
    Flex,
    {
      flexDirection: "column",
      className: disabled ? "p-disabled" : "",
      borderRadius: "inherit",
      w: "full",
      gap: 8,
      children: [
        !isClassicUploader && /* @__PURE__ */ jsxs(
          Flex,
          {
            w: "full",
            flexDirection: "column",
            borderRadius: "inherit",
            onClick: onClickUpload,
            cursor: "pointer",
            ref: drop,
            children: [
              /* @__PURE__ */ jsxs(
                Flex,
                {
                  borderW: 2,
                  borderStyle: "dashed",
                  borderColor: isActive ? "primary" : "surface-300",
                  borderRadius: "inherit",
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
                    /* @__PURE__ */ jsx(Text, { fontSize: 32, color: "primary", children: /* @__PURE__ */ jsx("i", { className: "pi pi-cloud-upload" }) }),
                    /* @__PURE__ */ jsx(Text, { fontSize: 14, color: "text-secondary", textAlign: "center", children: isActive ? t("filesBeingDropped") : t("clickOrDragToUpload") })
                  ]
                }
              ),
              files.length > 0 && /* @__PURE__ */ jsxs(Text, { fontSize: 13, color: "text-secondary", textAlign: "center", mt: 4, children: [
                t("filesSelected", files.length),
                " / ",
                limit
              ] })
            ]
          }
        ),
        isClassicUploader && /* @__PURE__ */ jsxs(Fragment, { children: [
          files.map((file, index) => /* @__PURE__ */ jsxs(
            Flex,
            {
              justifyContent: "space-between",
              alignItems: "center",
              flexDirection: "row",
              w: "full",
              gap: 8,
              children: [
                /* @__PURE__ */ jsxs(Flex, { gap: 8, alignItems: "center", flex: 1, children: [
                  /* @__PURE__ */ jsx(ImagePreview, { imageFile: file }),
                  /* @__PURE__ */ jsx(
                    Text,
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
                /* @__PURE__ */ jsx(
                  Button,
                  {
                    "aria-label": t("remove"),
                    size: "sm",
                    severity: "danger",
                    icon: "pi pi-times",
                    onClick: removeFile(index)
                  }
                )
              ]
            },
            index
          )),
          /* @__PURE__ */ jsx(
            Flex,
            {
              flex: 1,
              onClick: onClickUpload,
              cursor: "pointer",
              ref: drop,
              children: /* @__PURE__ */ jsxs(
                Flex,
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
                    /* @__PURE__ */ jsx(Text, { fontSize: 24, color: "primary", children: /* @__PURE__ */ jsx("i", { className: "pi pi-cloud-upload" }) }),
                    /* @__PURE__ */ jsx(Text, { fontSize: 13, color: "text-secondary", textAlign: "center", children: isActive ? t("filesBeingDropped") : t("dragFilesHere") })
                  ]
                }
              )
            }
          )
        ] }),
        /* @__PURE__ */ jsx(
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

export { MultipleImageUploader as default };
//# sourceMappingURL=index.web.js.map
