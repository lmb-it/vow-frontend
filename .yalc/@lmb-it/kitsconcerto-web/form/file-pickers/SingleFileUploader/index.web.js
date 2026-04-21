import { jsx, jsxs } from 'react/jsx-runtime';
import { useRef, useMemo } from 'react';
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
import { Button } from '../../../components/Button/Button.web.js';
import { useLanguage } from '../../../hooks/locale.js';

const SingleFileUploader = () => {
  const {
    onChangeAnyFileUploader,
    acceptedMemes,
    files,
    onInvalidInput,
    removeFile,
    selectedInitialFiles,
    disabled
  } = useUploader();
  const { t } = useLanguage();
  const fileUploadRef = useRef(null);
  const fileId = files.map((_, index) => index);
  const [, drop] = useDrop(() => ({
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
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop()
    })
  }));
  const currentFileName = useMemo(() => {
    if (files.length > 0) {
      return files[0]?.name;
    }
    if (selectedInitialFiles.length > 0) {
      return selectedInitialFiles[0]?.split("/").pop();
    }
    return null;
  }, [files]);
  return /* @__PURE__ */ jsx(
    Flex,
    {
      flexDirection: "column",
      className: disabled ? "p-disabled" : "",
      w: "full",
      alignItems: "center",
      gap: 8,
      children: /* @__PURE__ */ jsxs(
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
                accept: acceptedMemes.length > 0 ? acceptedMemes.join(",") : "*",
                customUpload: true,
                chooseLabel: currentFileName ?? t("chooseFile"),
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
      )
    }
  );
};

export { SingleFileUploader as default };
//# sourceMappingURL=index.web.js.map
