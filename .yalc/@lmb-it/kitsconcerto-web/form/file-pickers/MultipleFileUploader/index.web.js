import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { useRef, useState } from 'react';
import { useUploader } from '../MainUploader/index.web.js';
import { useDrop } from 'react-dnd';
import { NativeTypes } from 'react-dnd-html5-backend';
import { fileTypeIcon } from '../../../packages/types/src/Components/Molecules/Form/FilePicker/types/filesIcons.js';
import { checkExtAgainstAccepted } from '../../../packages/types/src/Components/Molecules/Form/FilePicker/types/filesTypes.js';
import 'yup';
import Flex from '../../../layout/Flex/index.js';
import Text from '../../../primitives/Text/index.web.js';
import { Button } from '../../../components/Button/Button.web.js';
import { useLanguage } from '../../../hooks/locale.js';

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
  const [fileType, setFileType] = useState("");
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
  return /* @__PURE__ */ jsxs(
    Flex,
    {
      flexDirection: "column",
      className: disabled ? "p-disabled" : "",
      w: "full",
      gap: 8,
      children: [
        !isClassicUploader && /* @__PURE__ */ jsxs(
          Flex,
          {
            w: "full",
            flexDirection: "column",
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
          files.map((file, index) => {
            const IconComponent = fileType in fileTypeIcon ? fileTypeIcon[fileType] : fileTypeIcon["unknown"];
            return /* @__PURE__ */ jsxs(
              Flex,
              {
                justifyContent: "space-between",
                alignItems: "center",
                flexDirection: "row",
                w: "full",
                gap: 8,
                children: [
                  /* @__PURE__ */ jsxs(Flex, { gap: 8, alignItems: "center", flex: 1, children: [
                    /* @__PURE__ */ jsx(IconComponent, { size: 30 }),
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
            );
          }),
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
                    /* @__PURE__ */ jsx(Text, { fontSize: 13, color: "text-secondary", textAlign: "center", children: isActive ? t("filesBeingDropped") : placeholder ?? t("dragFilesHere") })
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

export { MultipleFileUploader as default };
//# sourceMappingURL=index.web.js.map
