import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { useRef, useState, useEffect, useMemo, createContext, useContext } from 'react';
import SingleFileUploader from '../SingleFileUploader/index.web.js';
import SingleImageUploader from '../SingleImageUploader/index.web.js';
import MultipleFileUploader from '../MultipleFileUploader/index.web.js';
import MultipleImageUploader from '../MultipleImageUploader/index.web.js';
import 'react-icons/fa';
import 'react-icons/ai';
import 'react-icons/io';
import { getType } from '../../../packages/types/src/Components/Molecules/Form/FilePicker/types/filesTypes.js';
import 'yup';
import { AnyFile } from '../../../utils/File.js';
import Flex from '../../../layout/Flex/index.js';

const FileUploaderContext = createContext({
  onChangeAnyFileUploader: () => {
  },
  removeFile: () => () => {
  },
  onInvalidInput: () => {
  },
  disabled: false,
  limit: 1,
  isClassicUploader: true,
  selectedInitialFiles: [],
  selectedFiles: [],
  acceptedMemes: [],
  files: [],
  id: "",
  previewWidth: void 0,
  previewHeight: void 0
});
const base64ToJson = (base64Image) => {
  const splitImage = base64Image.split(",");
  let imageType = "";
  if (splitImage.length) {
    const t = splitImage[0]?.split(":");
    if (t) imageType = t[1]?.split(";")[0] ?? "";
  }
  return { type: imageType, base64: splitImage[1] ?? "" };
};
const jsonToBase64 = (base64, memeType) => `data:${memeType};base64,${base64}`;
const getBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const filename = file.name.replace(/\.[^/.]+$/, "");
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const v = reader.result;
      resolve({ filename, ...base64ToJson(v) });
    };
    reader.onerror = () => reject(null);
  });
};
const MainUploaderWeb = (props) => {
  const {
    acceptedTypes,
    type,
    classicUploader = true,
    limit = 1,
    onError,
    onFocus,
    placeholder,
    defaultValue,
    multiple,
    isJsonOutput = true,
    onChange,
    value,
    name,
    disabled,
    maxFileSize,
    minFileSize,
    children,
    previewWidth,
    previewHeight
  } = props;
  const initialValueSynced = useRef(false);
  const [selectedFilesAsBase64, setSelectedFilesAsBase64] = useState([]);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [selectedInitialFiles, setSelectedInitialFiles] = useState([]);
  const isImageSingle = type === "Image" && !multiple;
  const isImageMultiple = type === "Image" && !!multiple;
  const isFileSingle = type === "File" && !multiple;
  const isFileMultiple = type === "File" && !!multiple;
  const isOneFile = isImageSingle || isFileSingle || limit < 2;
  const onInvalidInput = (errors) => onError?.(errors);
  const onChangeAnyFileUploader = (files) => {
    if (disabled) return;
    const filesList = [];
    for (let i = 0; i < files.length; i++) {
      const f = files[i];
      if (!f) continue;
      const fileSize = f.size / 1e3;
      if ((!maxFileSize || fileSize <= maxFileSize) && (!minFileSize || fileSize >= minFileSize)) {
        filesList.push(f);
        onInvalidInput("clear");
      } else {
        let message = `File "${f.name}" is `;
        if (maxFileSize && fileSize > maxFileSize) {
          message += `too large. Maximum allowed is ${maxFileSize / 1e3} MB.`;
        } else if (minFileSize && fileSize < minFileSize) {
          message += `too small. Minimum allowed is ${minFileSize / 1e3} MB.`;
        }
        onInvalidInput(message);
      }
    }
    if (isOneFile) {
      if (filesList.length) setSelectedFiles(filesList.slice(0, 1));
    } else {
      setSelectedFiles((prev) => [...prev, ...filesList]);
    }
  };
  const removeFile = (fileIndex) => () => {
    if (fileIndex < selectedInitialFiles.length) {
      setSelectedInitialFiles((prev) => prev.filter((_, i) => i !== fileIndex));
    } else {
      const editIndex = fileIndex - selectedInitialFiles.length;
      setSelectedFiles((prev) => prev.filter((_, i) => i !== editIndex));
      setSelectedFilesAsBase64((prev) => prev.filter((_, i) => i !== editIndex));
    }
  };
  useEffect(() => {
    if (selectedFiles.length === 0) {
      setSelectedFilesAsBase64([]);
      return;
    }
    Promise.all(selectedFiles.map((f) => getBase64(f))).then((converted) => setSelectedFilesAsBase64(converted)).catch(() => {
    });
  }, [selectedFiles]);
  useEffect(() => {
    if (disabled) return;
    if (selectedFiles.length > 0 && selectedFilesAsBase64.length !== selectedFiles.length) return;
    if (selectedFiles.length === 0 && selectedInitialFiles.length === 0) {
      onChange?.([], []);
    } else {
      onChange?.(selectedFiles, selectedFilesAsBase64);
    }
  }, [selectedFilesAsBase64, selectedInitialFiles]);
  useEffect(() => {
    if (defaultValue) {
      setSelectedInitialFiles(Array.isArray(defaultValue) ? defaultValue : [defaultValue]);
    }
  }, [defaultValue]);
  useEffect(() => {
    if (initialValueSynced.current) return;
    if (value) {
      setSelectedInitialFiles(Array.isArray(value) ? value : [value]);
    }
    initialValueSynced.current = true;
  }, [value]);
  const getAcceptedFiles = useMemo(() => {
    return acceptedTypes ? acceptedTypes.map((ext) => getType(ext)) : [];
  }, [acceptedTypes]);
  const display = useMemo(() => {
    const allFiles = [
      ...selectedInitialFiles,
      ...isJsonOutput ? selectedFilesAsBase64 : selectedFiles
    ];
    return allFiles.map((file) => {
      if (typeof file === "string") {
        return {
          ...AnyFile.parts(file),
          shortName: AnyFile.shortName(file),
          file: { uri: file }
        };
      } else if (file instanceof File) {
        return {
          ...AnyFile.parts(file.name),
          shortName: AnyFile.shortName(file.name),
          file
        };
      } else {
        return {
          ...AnyFile.parts(file.filename),
          shortName: AnyFile.shortName(file.filename),
          file: jsonToBase64(file.base64, file.type)
        };
      }
    });
  }, [selectedFilesAsBase64, selectedInitialFiles, selectedFiles, isJsonOutput]);
  const updateFiles = (files) => {
    const arr = Array.isArray(files) ? files : [files];
    setSelectedFiles(arr);
    setSelectedInitialFiles([]);
    setSelectedFilesAsBase64([]);
  };
  const hiddenInputRef = useRef(null);
  const isImage = type === "Image";
  const browse = () => {
    if (disabled) return;
    hiddenInputRef.current?.click();
  };
  const handleHiddenInputChange = (e) => {
    if (e.target.files) {
      onChangeAnyFileUploader(e.target.files);
    }
    e.target.value = "";
  };
  const contextValue = {
    onChangeAnyFileUploader,
    removeFile,
    onInvalidInput,
    selectedFiles,
    selectedInitialFiles,
    disabled,
    limit,
    placeholder,
    isClassicUploader: classicUploader,
    acceptedMemes: getAcceptedFiles,
    files: display,
    id: name ?? "",
    previewWidth,
    previewHeight
  };
  return /* @__PURE__ */ jsx(FileUploaderContext.Provider, { value: contextValue, children: /* @__PURE__ */ jsx(Flex, { onFocus, w: "full", children: children ? /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      "input",
      {
        ref: hiddenInputRef,
        type: "file",
        accept: getAcceptedFiles.join(","),
        multiple: !isOneFile,
        style: { display: "none" },
        onChange: handleHiddenInputChange
      }
    ),
    children({
      values: selectedFiles,
      browse,
      update: updateFiles,
      remove: (index) => removeFile(index)(),
      type: isImage ? "image" : "file",
      isMultiple: !isOneFile
    })
  ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
    isImageSingle && /* @__PURE__ */ jsx(SingleImageUploader, {}),
    isFileSingle && /* @__PURE__ */ jsx(SingleFileUploader, {}),
    isFileMultiple && /* @__PURE__ */ jsx(MultipleFileUploader, {}),
    isImageMultiple && /* @__PURE__ */ jsx(MultipleImageUploader, {})
  ] }) }) });
};
const useUploader = () => useContext(FileUploaderContext);

export { FileUploaderContext, MainUploaderWeb as default, useUploader };
//# sourceMappingURL=index.web.js.map
