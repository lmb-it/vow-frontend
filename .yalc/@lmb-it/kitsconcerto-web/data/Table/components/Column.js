import { jsx } from 'react/jsx-runtime';
import { showFilterMenu, matchModesOptions, getPrimeDataType } from './Constants.js';
import { PickFilterElement } from './Filter.js';
import { Column } from 'primereact/column';
import { fontSizeMapping, sizeMapping } from '../constants.js';
import { matchModeDefaultValues } from './assets.js';
import moment from 'moment/moment';
import BodyTemplate from './BodyTemplate.js';
import { PickEditorElement } from './Editor.js';
import Flex from '../../../layout/Flex/index.js';

const columnFunction = ({
  field,
  index,
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
        matchMode = matchModeDefaultValues["multiSelect"];
      } else {
        matchMode = matchModeDefaultValues[filter.type];
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
      return /* @__PURE__ */ jsx(Flex, { alignItems: "center", justifyContent: "center", children: /* @__PURE__ */ jsx(
        BodyTemplate,
        {
          value,
          body: toReturn,
          bodyTemplate
        }
      ) });
    }
    return toReturn;
  };
  return /* @__PURE__ */ jsx(
    Column,
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
        padding: sizeMapping[tableSize],
        fontSize: "small",
        ...themeBodyCellStyle,
        ...bodyStyle,
        ...globalStyle
      },
      headerStyle: {
        //Style of columns in the headers row
        fontSize: fontSizeMapping[tableSize],
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
      dataType: getPrimeDataType(filter),
      showClearButton: !["tristate", "buttons"].includes(filter?.type ?? " "),
      filterMatchModeOptions: matchModesOptions(filter, t),
      showFilterMenu: showFilterMenu(filter),
      body: !isLoading ? bodyBuilder(field) : void 0,
      editor: editor ? (e) => {
        return /* @__PURE__ */ jsx(PickEditorElement, { Editor: editor, options: e, isLoading });
      } : void 0,
      filterMatchMode: matchMode,
      filterElement: (options) => /* @__PURE__ */ jsx(
        PickFilterElement,
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
    index
  );
};

export { columnFunction as default };
//# sourceMappingURL=Column.js.map
