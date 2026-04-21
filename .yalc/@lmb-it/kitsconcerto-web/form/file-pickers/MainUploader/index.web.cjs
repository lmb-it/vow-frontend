'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var index_web$1 = require('../SingleFileUploader/index.web.cjs');
var index_web = require('../SingleImageUploader/index.web.cjs');
var index_web$2 = require('../MultipleFileUploader/index.web.cjs');
var index_web$3 = require('../MultipleImageUploader/index.web.cjs');
require('react-icons/fa');
require('react-icons/ai');
require('react-icons/io');
var filesTypes = require('../../../packages/types/src/Components/Molecules/Form/FilePicker/types/filesTypes.cjs');
require('yup');
var File$1 = require('../../../utils/File.cjs');
var index = require('../../../layout/Flex/index.cjs');

const FileUploaderContext = React.createContext({
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
  const initialValueSynced = React.useRef(false);
  const [selectedFilesAsBase64, setSelectedFilesAsBase64] = React.useState([]);
  const [selectedFiles, setSelectedFiles] = React.useState([]);
  const [selectedInitialFiles, setSelectedInitialFiles] = React.useState([]);
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
  React.useEffect(() => {
    if (selectedFiles.length === 0) {
      setSelectedFilesAsBase64([]);
      return;
    }
    Promise.all(selectedFiles.map((f) => getBase64(f))).then((converted) => setSelectedFilesAsBase64(converted)).catch(() => {
    });
  }, [selectedFiles]);
  React.useEffect(() => {
    if (disabled) return;
    if (selectedFiles.length > 0 && selectedFilesAsBase64.length !== selectedFiles.length) return;
    if (selectedFiles.length === 0 && selectedInitialFiles.length === 0) {
      onChange?.([], []);
    } else {
      onChange?.(selectedFiles, selectedFilesAsBase64);
    }
  }, [selectedFilesAsBase64, selectedInitialFiles]);
  React.useEffect(() => {
    if (defaultValue) {
      setSelectedInitialFiles(Array.isArray(defaultValue) ? defaultValue : [defaultValue]);
    }
  }, [defaultValue]);
  React.useEffect(() => {
    if (initialValueSynced.current) return;
    if (value) {
      setSelectedInitialFiles(Array.isArray(value) ? value : [value]);
    }
    initialValueSynced.current = true;
  }, [value]);
  const getAcceptedFiles = React.useMemo(() => {
    return acceptedTypes ? acceptedTypes.map((ext) => filesTypes.getType(ext)) : [];
  }, [acceptedTypes]);
  const display = React.useMemo(() => {
    const allFiles = [
      ...selectedInitialFiles,
      ...isJsonOutput ? selectedFilesAsBase64 : selectedFiles
    ];
    return allFiles.map((file) => {
      if (typeof file === "string") {
        return {
          ...File$1.AnyFile.parts(file),
          shortName: File$1.AnyFile.shortName(file),
          file: { uri: file }
        };
      } else if (file instanceof File) {
        return {
          ...File$1.AnyFile.parts(file.name),
          shortName: File$1.AnyFile.shortName(file.name),
          file
        };
      } else {
        return {
          ...File$1.AnyFile.parts(file.filename),
          shortName: File$1.AnyFile.shortName(file.filename),
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
  const hiddenInputRef = React.useRef(null);
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
  return /* @__PURE__ */ jsxRuntime.jsx(FileUploaderContext.Provider, { value: contextValue, children: /* @__PURE__ */ jsxRuntime.jsx(index.default, { onFocus, w: "full", children: children ? /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
    /* @__PURE__ */ jsxRuntime.jsx(
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
  ] }) : /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
    isImageSingle && /* @__PURE__ */ jsxRuntime.jsx(index_web.default, {}),
    isFileSingle && /* @__PURE__ */ jsxRuntime.jsx(index_web$1.default, {}),
    isFileMultiple && /* @__PURE__ */ jsxRuntime.jsx(index_web$2.default, {}),
    isImageMultiple && /* @__PURE__ */ jsxRuntime.jsx(index_web$3.default, {})
  ] }) }) });
};
const useUploader = () => React.useContext(FileUploaderContext);

exports.FileUploaderContext = FileUploaderContext;
exports.default = MainUploaderWeb;
exports.useUploader = useUploader;
//# sourceMappingURL=index.web.cjs.map
