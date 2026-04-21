'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var Constants = require('./Constants.cjs');
var Filter = require('./Filter.cjs');
var column = require('primereact/column');
var constants = require('../constants.cjs');
var assets = require('./assets.cjs');
var moment = require('moment/moment');
var BodyTemplate = require('./BodyTemplate.cjs');
var Editor = require('./Editor.cjs');
var index = require('../../../layout/Flex/index.cjs');

const columnFunction = ({
  field,
  index: index$1,
  serverSideRequest,
  keyColumn,
  tableSize,
  isLoading,
  debounceFilterWaitTime,
  filterMode,
  t,
  themeHeaderCellStyle,
  themeBodyCellStyle
}) => {
  const {
    label,
    labelTooltip,
    name,
    body,
    bodyTemplate,
    filter,
    editor,
    globalStyle,
    headerStyle,
    filterStyle,
    bodyStyle,
    isSortable,
    selectionMode,
    ...localProps
  } = field;
  let matchMode = void 0;
  if (name && name in serverSideRequest.filters && !!filter) {
    const a = serverSideRequest.filters[name];
    if ("matchMode" in a) {
      matchMode = a.matchMode;
    } else {
      if ("isMultiple" in filter && filter.isMultiple) {
        matchMode = assets.matchModeDefaultValues["multiSelect"];
      } else {
        matchMode = assets.matchModeDefaultValues[filter.type];
      }
    }
  }
  const bodyBuilder = (field2) => (data, options) => {
    if (!field2.name) {
      return null;
    }
    const value = data[field2.name];
    let toReturn = value;
    if (body) {
      toReturn = body(value, data, options);
    } else if (value instanceof Date) {
      const m = moment(value, "YYYY-MM-DDTHH:mm:ss.SSSSSSZ");
      toReturn = m.format("YYYY-MMM-DD");
    }
    if (bodyTemplate) {
      return /* @__PURE__ */ jsxRuntime.jsx(index.default, { alignItems: "center", justifyContent: "center", children: /* @__PURE__ */ jsxRuntime.jsx(
        BodyTemplate.default,
        {
          value,
          body: toReturn,
          bodyTemplate
        }
      ) });
    }
    return toReturn;
  };
  return /* @__PURE__ */ jsxRuntime.jsx(
    column.Column,
    {
      field: name,
      header: label,
      selectionMode,
      headerTooltip: labelTooltip,
      headerTooltipOptions: {
        position: "top"
      },
      sortable: isSortable,
      filter: !!filter,
      bodyStyle: {
        //Style of columns in the results
        padding: constants.sizeMapping[tableSize],
        fontSize: "small",
        ...themeBodyCellStyle,
        ...bodyStyle,
        ...globalStyle
      },
      headerStyle: {
        //Style of columns in the headers row
        fontSize: constants.fontSizeMapping[tableSize],
        ...themeHeaderCellStyle,
        ...headerStyle,
        ...globalStyle
      },
      filterHeaderStyle: {
        ...filterStyle,
        ...globalStyle
      },
      style: {
        //Style of columns in the filters row
        // ...filterStyle,
        ...globalStyle ?? {}
      },
      filterField: name,
      columnKey: keyColumn,
      filterType: filter?.type,
      dataType: Constants.getPrimeDataType(filter),
      showClearButton: !["tristate", "buttons"].includes(filter?.type ?? " "),
      filterMatchModeOptions: Constants.matchModesOptions(filter, t),
      showFilterMenu: Constants.showFilterMenu(filter),
      body: !isLoading ? bodyBuilder(field) : void 0,
      editor: editor ? (e) => {
        return /* @__PURE__ */ jsxRuntime.jsx(Editor.PickEditorElement, { Editor: editor, options: e, isLoading });
      } : void 0,
      filterMatchMode: matchMode,
      filterElement: (options) => /* @__PURE__ */ jsxRuntime.jsx(
        Filter.PickFilterElement,
        {
          isLoading,
          filter,
          options,
          debounceFilterWaitTime,
          filterMode
        }
      ),
      ...localProps
    },
    index$1
  );
};

exports.default = columnFunction;
//# sourceMappingURL=Column.cjs.map
