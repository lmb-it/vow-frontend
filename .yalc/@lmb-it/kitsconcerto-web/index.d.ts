import * as react_jsx_runtime from 'react/jsx-runtime';
import * as React$1 from 'react';
import React__default, { ReactNode, ReactElement, Ref, CSSProperties, RefObject, MouseEventHandler, HTMLProps, FocusEventHandler, ElementType, JSX, PropsWithChildren, FunctionComponent, FC, Dispatch, SetStateAction, RefCallback, ComponentType } from 'react';
import { ImageProps } from 'primereact/image';
import { IconType as IconType$1 } from 'primereact/utils';
import { FieldValues, UseFormReturn, ControllerFieldState, UseFieldArrayReturn, ControllerRenderProps, SubmitErrorHandler, DeepPartial as DeepPartial$2, Control, UseFormGetValues, FieldError } from 'react-hook-form';
import { InputTextProps } from 'primereact/inputtext';
import * as Yup from 'yup';
import { AnyObject as AnyObject$1 } from 'yup';
import { DropdownProps } from 'primereact/dropdown';
import { MultiSelectProps } from 'primereact/multiselect';
import { AutoCompleteProps } from 'primereact/autocomplete';
import { ListBoxProps } from 'primereact/listbox';
import { TreeSelectProps } from 'primereact/treeselect';
import { CascadeSelectProps } from 'primereact/cascadeselect';
import { RouteObject } from 'react-router-dom';
import { DialogProps } from 'primereact/dialog';
import { ConfirmDialogProps } from 'primereact/confirmdialog';
import { ConfirmPopupProps } from 'primereact/confirmpopup';
import { TooltipProps as TooltipProps$1 } from 'primereact/tooltip';
import { InputNumberProps, InputNumberChangeEvent, InputNumberValueChangeEvent } from 'primereact/inputnumber';
import { CalendarProps } from 'primereact/calendar';
import { SliderSlideEndEvent } from 'primereact/slider';
import { SelectButtonProps } from 'primereact/selectbutton';
import { TriStateCheckboxProps } from 'primereact/tristatecheckbox';
import { DataTableBaseProps, DataTableFilterMeta, DataTableSortMeta, DataTableProps, DataTable, DataTableSelectionSingleChangeEvent } from 'primereact/datatable';
import { PaginatorPageChangeEvent } from 'primereact/paginator';
import { ColumnProps, ColumnBodyOptions } from 'primereact/column';
import { TagProps } from 'primereact/tag';
import { BadgeProps } from 'primereact/badge';
import { ProgressBarProps } from 'primereact/progressbar';
import { TreeNode as TreeNode$1 } from 'primereact/treenode';
import { TreeNodeTemplateOptions } from 'primereact/tree';

export type EnteringAnimation =
    | 'fadeIn'
    | 'fadeInUp'
    | 'fadeInDown'
    | 'fadeInLeft'
    | 'fadeInRight'
    | 'slideInUp'
    | 'slideInDown'
    | 'slideInLeft'
    | 'slideInRight'
    | 'zoomIn'
    | 'zoomInUp'
    | 'zoomInDown'
    | 'zoomInLeft'
    | 'zoomInRight'
    | 'scaleIn'
    | 'bounceIn'
    | 'flip'
    | 'flipUp'
    | 'flipLeft'
    | 'flipRight';

export type ExitingAnimation =
    | 'fadeOut'
    | 'fadeOutUp'
    | 'fadeOutDown'
    | 'fadeOutLeft'
    | 'fadeOutRight'
    | 'slideOutUp'
    | 'slideOutDown'
    | 'slideOutLeft'
    | 'slideOutRight'
    | 'zoomOut'
    | 'bounceOut';

export interface IKitsAnimation {
    entering?: EnteringAnimation;
    exiting?: ExitingAnimation;
    animationDuration?: number;
    animationDelay?: number;
}

/**
 * Optional platform-specific overrides (Web injects router `To`, Native doesn't)
 */
export interface ILinkOverrides {
    To?: any; // Web: import { To } from "react-router-dom"
}

/**
 * Permission types (used in both menu & page)
 */
export interface Permissions<T = string> {
    permissionsRequired?: T | T[];
    permissionsOptional?: T[];
    loginNotRequired?: boolean;
}

/**
 * Section/page definition
 */
export interface IPageISection<
    T = string,
    L extends ILinkOverrides = ILinkOverrides
> extends Permissions<T> {
    id?: string;
    icon?: ReactNode;
    title: string;
    path?: L["To"];
    collapsable?:boolean;
    defaultOpen?:boolean;
    badge?:string;
    element?: ReactNode | null;
}

/**
 * Recursive menu definition
 */
export interface IMenuItem<
    T = string,
    L extends ILinkOverrides = ILinkOverrides
> extends IPageISection<T, L> {
    hide?: boolean;
    content?: ReactElement;
    links?: IMenuItem<T, L>[];
}

// --- Basic Building Blocks ---



export type ILabelElement = string | ReactElement;
export type IFormGrid = IStyleClasses;


/** Basic interface for address details from a location component. */


// --- Component-Specific Prop Extensions ---
// These are direct props passed to the underlying UI components.

export type ITextInputProps = IKitsInputText | IKitsInputMask;
export type IPasswordProps = Omit<IKitsInputPassword, 'value' | 'onChange'>;

/**
 * Unified severity type used across all messaging components
 * (KitsConfirm, KitsDialog, KitsToast).
 */
export type Severity =
    | 'success'
    | 'info'
    | 'warning'
    | 'danger'
    | 'help'
    | 'secondary'
    | 'brand';

/**
 * Color slots resolved per-severity.
 * Each value is a theme token reference (e.g. 'green.500'), NOT a raw hex value.
 * Resolution happens at render time via resolveToken().
 */
export interface ISeverityColorSlots {
    /** Solid accent color — icon bubble fill, solid button background */
    solid: string;
    /** Text color on solid background — used by filled buttons. Accepts any theme token. */
    solidText?: string;
    /** Light background tint — panel/toast background */
    bgTint: string;
    /** Icon foreground color on soft circle */
    iconFg: string;
    /** Icon circle background (soft circle fill, ~20% feel) */
    iconBg: string;
    /** Text color for severity-tinted surfaces (e.g. dark green on green-50 panel) */
    text: string;
    /** Border accent */
    border: string;
}

/**
 * Full severity theme map. Keyed by Severity.
 * Overridable via extendTheme().
 */
export type ISeverityThemeMap = Record<Severity, ISeverityColorSlots>;

export type Numbering0_12 = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
export type TimingNumbering = 100 | 150 | 200 | 300 | 400 | 500 | 1000
export type SizingValue = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl'
export type HighSizingValue = '4xl' | '5xl' | '6xl' | '7xl' | '8xl'
export type AnimationsValues =
    'fadein'
    | 'fadeout'
    | 'slidedown'
    | 'slideup'
    | 'scalein'
    | 'fadeinleft'
    | 'fadeoutleft'
    | 'fadeinright'
    | 'fadeoutright'
    | 'fadeinup'
    | 'fadeoutup'
    | 'fadeindown'
    | 'fadeoutdown'
    | 'animate-width'
    | 'flip'
    | 'flipleft'
    | 'flipright'
    | 'flipup'
    | 'zoomin'
    | 'zoomindown'
    | 'zoominleft'
    | 'zoomninright'
    | 'zoominup';
export type SidesValues = 'top' | 'bottom' | 'right' | 'left';


export type Various<T> = T;
export type KitsBreakpoint =
    | 'base'
    | 'xs'
    | 'sm'
    | 'md'
    | 'lg'
    | 'xl'
    | 'xxl'
    | 'xxxl';

export type KitsResponsiveObject<T> = {
    [K in KitsBreakpoint]?: Various<T>;
};

export type KitsConditionalObject<T> = {
    ios?: KitsResponsiveValue<T>;
    android?: KitsResponsiveValue<T>;
    web?: KitsResponsiveValue<T>;


    portrait?: KitsResponsiveValue<T>;
    landscape?: KitsResponsiveValue<T>;

    phone?: KitsResponsiveValue<T>;
    tablet?: KitsResponsiveValue<T>;
};

export type KitsResponsiveValue<T> =
    | Various<T>
    | KitsResponsiveObject<T>
    | KitsConditionalObject<T>
    | [
    Various<T>?, // base
    Various<T>?, // xs
    Various<T>?, // sm
    Various<T>?, // md
    Various<T>?, // lg
    Various<T>?, // xl
    Various<T>?, // xxl
    Various<T>?  // xxxl
] | T;


export type ColorValue =
    | 'primary-color'
    | 'primary-color-text'
    | 'surface-ground'
    | 'surface-section'
    | 'surface-card'
    | 'surface-overlay'
    | 'surface-border'
    | 'surface-hover'
    | 'surface-0'
    | 'surface-50'
    | 'surface-100'
    | 'surface-200'
    | 'surface-300'
    | 'surface-400'
    | 'surface-500'
    | 'surface-600'
    | 'surface-700'
    | 'surface-800'
    | 'surface-900'
    | 'blue-50'
    | 'blue-100'
    | 'blue-200'
    | 'blue-300'
    | 'blue-400'
    | 'blue-500'
    | 'blue-600'
    | 'blue-700'
    | 'blue-800'
    | 'blue-900'
    | 'green-50'
    | 'green-100'
    | 'green-200'
    | 'green-300'
    | 'green-400'
    | 'green-500'
    | 'green-600'
    | 'green-700'
    | 'green-800'
    | 'green-900'
    | 'yellow-50'
    | 'yellow-100'
    | 'yellow-200'
    | 'yellow-300'
    | 'yellow-400'
    | 'yellow-500'
    | 'yellow-600'
    | 'yellow-700'
    | 'yellow-800'
    | 'yellow-900'
    | 'cyan-50'
    | 'cyan-100'
    | 'cyan-200'
    | 'cyan-300'
    | 'cyan-400'
    | 'cyan-500'
    | 'cyan-600'
    | 'cyan-700'
    | 'cyan-800'
    | 'cyan-900'
    | 'pink-50'
    | 'pink-100'
    | 'pink-200'
    | 'pink-300'
    | 'pink-400'
    | 'pink-500'
    | 'pink-600'
    | 'pink-700'
    | 'pink-800'
    | 'pink-900'
    | 'indigo-50'
    | 'indigo-100'
    | 'indigo-200'
    | 'indigo-300'
    | 'indigo-400'
    | 'indigo-500'
    | 'indigo-600'
    | 'indigo-700'
    | 'indigo-800'
    | 'indigo-900'
    | 'teal-50'
    | 'teal-100'
    | 'teal-200'
    | 'teal-300'
    | 'teal-400'
    | 'teal-500'
    | 'teal-600'
    | 'teal-700'
    | 'teal-800'
    | 'teal-900'
    | 'orange-50'
    | 'orange-100'
    | 'orange-200'
    | 'orange-300'
    | 'orange-400'
    | 'orange-500'
    | 'orange-600'
    | 'orange-700'
    | 'orange-800'
    | 'orange-900'
    | 'bluegray-50'
    | 'bluegray-100'
    | 'bluegray-200'
    | 'bluegray-300'
    | 'bluegray-400'
    | 'bluegray-500'
    | 'bluegray-600'
    | 'bluegray-700'
    | 'bluegray-800'
    | 'bluegray-900'
    | 'purple-50'
    | 'purple-100'
    | 'purple-200'
    | 'purple-300'
    | 'purple-400'
    | 'purple-500'
    | 'purple-600'
    | 'purple-700'
    | 'purple-800'
    | 'purple-900'
    | 'red-50'
    | 'red-100'
    | 'red-200'
    | 'red-300'
    | 'red-400'
    | 'red-500'
    | 'red-600'
    | 'red-700'
    | 'red-800'
    | 'red-900'
    | 'primary-50'
    | 'primary-100'
    | 'primary-200'
    | 'primary-300'
    | 'primary-400'
    | 'primary-500'
    | 'primary-600'
    | 'primary-700'
    | 'primary-800'
    | 'primary-900'
    | 'gray-50'
    | 'gray-100'
    | 'gray-200'
    | 'gray-300'
    | 'gray-400'
    | 'gray-500'
    | 'gray-600'
    | 'gray-700'
    | 'gray-800'
    | 'gray-900'
    | 'white-alpha-10'
    | 'white-alpha-20'
    | 'white-alpha-30'
    | 'white-alpha-40'
    | 'white-alpha-50'
    | 'white-alpha-60'
    | 'white-alpha-70'
    | 'white-alpha-80'
    | 'white-alpha-90'
    | 'black-alpha-10'
    | 'black-alpha-20'
    | 'black-alpha-30'
    | 'black-alpha-40'
    | 'black-alpha-50'
    | 'black-alpha-60'
    | 'black-alpha-70'
    | 'black-alpha-80'
    | 'black-alpha-90'

export interface StandardLonghandProperties<TLength = (string & {}) | 0, TTime = string & {}> {
  /**
   * This feature is not Baseline because it does not work in some of the most widely-used browsers.
   *
   * **Syntax**: `auto | <color>`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **93** | **92**  | **15.4** | **93** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/accent-color
   */
  accentColor?: Property.AccentColor | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2015.
   *
   * **Syntax**: `normal | <baseline-position> | <content-distribution> | <overflow-position>? <content-position>`
   *
   * **Initial value**: `normal`
   *
   * |  Chrome  | Firefox | Safari  |  Edge  |   IE   |
   * | :------: | :-----: | :-----: | :----: | :----: |
   * |  **29**  | **28**  |  **9**  | **12** | **11** |
   * | 21 _-x-_ |         | 7 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/align-content
   */
  alignContent?: Property.AlignContent | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2015.
   *
   * **Syntax**: `normal | stretch | <baseline-position> | [ <overflow-position>? <self-position> ] | anchor-center`
   *
   * **Initial value**: `normal`
   *
   * |  Chrome  | Firefox | Safari  |  Edge  |   IE   |
   * | :------: | :-----: | :-----: | :----: | :----: |
   * |  **29**  | **20**  |  **9**  | **12** | **11** |
   * | 21 _-x-_ |         | 7 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/align-items
   */
  alignItems?: Property.AlignItems | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2015.
   *
   * **Syntax**: `auto | normal | stretch | <baseline-position> | <overflow-position>? <self-position> | anchor-center`
   *
   * **Initial value**: `auto`
   *
   * |  Chrome  | Firefox | Safari  |  Edge  |   IE   |
   * | :------: | :-----: | :-----: | :----: | :----: |
   * |  **29**  | **20**  |  **9**  | **12** | **10** |
   * | 21 _-x-_ |         | 7 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/align-self
   */
  alignSelf?: Property.AlignSelf | undefined;
  /**
   * **Syntax**: `[ normal | <baseline-position> | <content-distribution> | <overflow-position>? <content-position> ]#`
   *
   * **Initial value**: `normal`
   */
  alignTracks?: Property.AlignTracks | undefined;
  /**
   * This feature is not Baseline because it does not work in some of the most widely-used browsers.
   *
   * **Syntax**: `baseline | alphabetic | ideographic | middle | central | mathematical | text-before-edge | text-after-edge`
   *
   * **Initial value**: `baseline`
   *
   * | Chrome | Firefox | Safari  |  Edge  | IE  |
   * | :----: | :-----: | :-----: | :----: | :-: |
   * | **1**  |   No    | **5.1** | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/alignment-baseline
   */
  alignmentBaseline?: Property.AlignmentBaseline | undefined;
  /**
   * This feature is not Baseline because it does not work in some of the most widely-used browsers.
   *
   * **Syntax**: `none | <dashed-ident>#`
   *
   * **Initial value**: `none`
   *
   * | Chrome  |   Firefox   | Safari |  Edge   | IE  |
   * | :-----: | :---------: | :----: | :-----: | :-: |
   * | **125** | **preview** | **26** | **125** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/anchor-name
   */
  anchorName?: Property.AnchorName | undefined;
  /**
   * **Syntax**: `none | all | <dashed-ident>#`
   *
   * **Initial value**: `none`
   *
   * | Chrome  |   Firefox   | Safari |  Edge   | IE  |
   * | :-----: | :---------: | :----: | :-----: | :-: |
   * | **131** | **preview** | **26** | **131** | No  |
   */
  anchorScope?: Property.AnchorScope | undefined;
  /**
   * Since July 2023, this feature works across the latest devices and browser versions. This feature might not work in older devices or browsers.
   *
   * **Syntax**: `<single-animation-composition>#`
   *
   * **Initial value**: `replace`
   *
   * | Chrome  | Firefox | Safari |  Edge   | IE  |
   * | :-----: | :-----: | :----: | :-----: | :-: |
   * | **112** | **115** | **16** | **112** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-composition
   */
  animationComposition?: Property.AnimationComposition | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2015.
   *
   * **Syntax**: `<time>#`
   *
   * **Initial value**: `0s`
   *
   * | Chrome  | Firefox | Safari  |  Edge  |   IE   |
   * | :-----: | :-----: | :-----: | :----: | :----: |
   * | **43**  | **16**  |  **9**  | **12** | **10** |
   * | 3 _-x-_ | 5 _-x-_ | 4 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-delay
   */
  animationDelay?: Property.AnimationDelay<TTime> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2015.
   *
   * **Syntax**: `<single-animation-direction>#`
   *
   * **Initial value**: `normal`
   *
   * | Chrome  | Firefox | Safari  |  Edge  |   IE   |
   * | :-----: | :-----: | :-----: | :----: | :----: |
   * | **43**  | **16**  |  **9**  | **12** | **10** |
   * | 3 _-x-_ | 5 _-x-_ | 4 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-direction
   */
  animationDirection?: Property.AnimationDirection | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2015.
   *
   * **Syntax**: `[ auto | <time [0s,∞]> ]#`
   *
   * **Initial value**: `0s`
   *
   * | Chrome  | Firefox | Safari  |  Edge  |   IE   |
   * | :-----: | :-----: | :-----: | :----: | :----: |
   * | **43**  | **16**  |  **9**  | **12** | **10** |
   * | 3 _-x-_ | 5 _-x-_ | 4 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-duration
   */
  animationDuration?: Property.AnimationDuration<TTime> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2015.
   *
   * **Syntax**: `<single-animation-fill-mode>#`
   *
   * **Initial value**: `none`
   *
   * | Chrome  | Firefox | Safari  |  Edge  |   IE   |
   * | :-----: | :-----: | :-----: | :----: | :----: |
   * | **43**  | **16**  |  **9**  | **12** | **10** |
   * | 3 _-x-_ | 5 _-x-_ | 5 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-fill-mode
   */
  animationFillMode?: Property.AnimationFillMode | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2015.
   *
   * **Syntax**: `<single-animation-iteration-count>#`
   *
   * **Initial value**: `1`
   *
   * | Chrome  | Firefox | Safari  |  Edge  |   IE   |
   * | :-----: | :-----: | :-----: | :----: | :----: |
   * | **43**  | **16**  |  **9**  | **12** | **10** |
   * | 3 _-x-_ | 5 _-x-_ | 4 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-iteration-count
   */
  animationIterationCount?: Property.AnimationIterationCount | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2015.
   *
   * **Syntax**: `[ none | <keyframes-name> ]#`
   *
   * **Initial value**: `none`
   *
   * | Chrome  | Firefox | Safari  |  Edge  |   IE   |
   * | :-----: | :-----: | :-----: | :----: | :----: |
   * | **43**  | **16**  |  **9**  | **12** | **10** |
   * | 3 _-x-_ | 5 _-x-_ | 4 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-name
   */
  animationName?: Property.AnimationName | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2015.
   *
   * **Syntax**: `<single-animation-play-state>#`
   *
   * **Initial value**: `running`
   *
   * | Chrome  | Firefox | Safari  |  Edge  |   IE   |
   * | :-----: | :-----: | :-----: | :----: | :----: |
   * | **43**  | **16**  |  **9**  | **12** | **10** |
   * | 3 _-x-_ | 5 _-x-_ | 4 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-play-state
   */
  animationPlayState?: Property.AnimationPlayState | undefined;
  /**
   * This feature is not Baseline because it does not work in some of the most widely-used browsers.
   *
   * **Syntax**: `[ normal | <length-percentage> | <timeline-range-name> <length-percentage>? ]#`
   *
   * **Initial value**: `normal`
   *
   * | Chrome  | Firefox | Safari |  Edge   | IE  |
   * | :-----: | :-----: | :----: | :-----: | :-: |
   * | **115** |   No    | **26** | **115** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-range-end
   */
  animationRangeEnd?: Property.AnimationRangeEnd<TLength> | undefined;
  /**
   * This feature is not Baseline because it does not work in some of the most widely-used browsers.
   *
   * **Syntax**: `[ normal | <length-percentage> | <timeline-range-name> <length-percentage>? ]#`
   *
   * **Initial value**: `normal`
   *
   * | Chrome  | Firefox | Safari |  Edge   | IE  |
   * | :-----: | :-----: | :----: | :-----: | :-: |
   * | **115** |   No    | **26** | **115** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-range-start
   */
  animationRangeStart?: Property.AnimationRangeStart<TLength> | undefined;
  /**
   * This feature is not Baseline because it does not work in some of the most widely-used browsers.
   *
   * **Syntax**: `<single-animation-timeline>#`
   *
   * **Initial value**: `auto`
   *
   * | Chrome  | Firefox | Safari |  Edge   | IE  |
   * | :-----: | :-----: | :----: | :-----: | :-: |
   * | **115** |   No    | **26** | **115** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-timeline
   */
  animationTimeline?: Property.AnimationTimeline | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2015.
   *
   * **Syntax**: `<easing-function>#`
   *
   * **Initial value**: `ease`
   *
   * | Chrome  | Firefox | Safari  |  Edge  |   IE   |
   * | :-----: | :-----: | :-----: | :----: | :----: |
   * | **43**  | **16**  |  **9**  | **12** | **10** |
   * | 3 _-x-_ | 5 _-x-_ | 4 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-timing-function
   */
  animationTimingFunction?: Property.AnimationTimingFunction | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since March 2022.
   *
   * **Syntax**: `none | auto | <compat-auto> | <compat-special>`
   *
   * **Initial value**: `none`
   *
   * | Chrome  | Firefox |  Safari  |   Edge   | IE  |
   * | :-----: | :-----: | :------: | :------: | :-: |
   * | **84**  | **80**  | **15.4** |  **84**  | No  |
   * | 1 _-x-_ | 1 _-x-_ | 3 _-x-_  | 12 _-x-_ |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/appearance
   */
  appearance?: Property.Appearance | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2021.
   *
   * **Syntax**: `auto || <ratio>`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * | **88** | **89**  | **15** | **88** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/aspect-ratio
   */
  aspectRatio?: Property.AspectRatio | undefined;
  /**
   * Since September 2024, this feature works across the latest devices and browser versions. This feature might not work in older devices or browsers.
   *
   * **Syntax**: `none | <filter-value-list>`
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari  |  Edge  | IE  |
   * | :----: | :-----: | :-----: | :----: | :-: |
   * | **76** | **103** | **18**  | **79** | No  |
   * |        |         | 9 _-x-_ |        |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/backdrop-filter
   */
  backdropFilter?: Property.BackdropFilter | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since March 2022.
   *
   * **Syntax**: `visible | hidden`
   *
   * **Initial value**: `visible`
   *
   * |  Chrome  | Firefox  |  Safari   |  Edge  |   IE   |
   * | :------: | :------: | :-------: | :----: | :----: |
   * |  **36**  |  **16**  | **15.4**  | **12** | **10** |
   * | 12 _-x-_ | 10 _-x-_ | 5.1 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/backface-visibility
   */
  backfaceVisibility?: Property.BackfaceVisibility | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `<attachment>#`
   *
   * **Initial value**: `scroll`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-attachment
   */
  backgroundAttachment?: Property.BackgroundAttachment | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since January 2020.
   *
   * **Syntax**: `<blend-mode>#`
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * | **35** | **30**  | **8**  | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-blend-mode
   */
  backgroundBlendMode?: Property.BackgroundBlendMode | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `<bg-clip>#`
   *
   * **Initial value**: `border-box`
   *
   * | Chrome | Firefox | Safari  |  Edge  |  IE   |
   * | :----: | :-----: | :-----: | :----: | :---: |
   * | **1**  |  **4**  |  **5**  | **12** | **9** |
   * |        |         | 3 _-x-_ |        |       |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-clip
   */
  backgroundClip?: Property.BackgroundClip | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `<color>`
   *
   * **Initial value**: `transparent`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-color
   */
  backgroundColor?: Property.BackgroundColor | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `<bg-image>#`
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-image
   */
  backgroundImage?: Property.BackgroundImage | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `<visual-box>#`
   *
   * **Initial value**: `padding-box`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **4**  | **3**  | **12** | **9** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-origin
   */
  backgroundOrigin?: Property.BackgroundOrigin | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2016.
   *
   * **Syntax**: `[ center | [ [ left | right | x-start | x-end ]? <length-percentage>? ]! ]#`
   *
   * **Initial value**: `0%`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  | **49**  | **1**  | **12** | **6** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-position-x
   */
  backgroundPositionX?: Property.BackgroundPositionX<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2016.
   *
   * **Syntax**: `[ center | [ [ top | bottom | y-start | y-end ]? <length-percentage>? ]! ]#`
   *
   * **Initial value**: `0%`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  | **49**  | **1**  | **12** | **6** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-position-y
   */
  backgroundPositionY?: Property.BackgroundPositionY<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `<repeat-style>#`
   *
   * **Initial value**: `repeat`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-repeat
   */
  backgroundRepeat?: Property.BackgroundRepeat | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `<bg-size>#`
   *
   * **Initial value**: `auto auto`
   *
   * | Chrome  | Firefox | Safari  |  Edge  |  IE   |
   * | :-----: | :-----: | :-----: | :----: | :---: |
   * |  **3**  |  **4**  |  **5**  | **12** | **9** |
   * | 1 _-x-_ |         | 3 _-x-_ |        |       |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-size
   */
  backgroundSize?: Property.BackgroundSize<TLength> | undefined;
  /**
   * **Syntax**: `<length-percentage> | sub | super | baseline`
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * | **1**  |   No    | **4**  | **79** | No  |
   */
  baselineShift?: Property.BaselineShift<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since January 2020.
   *
   * **Syntax**: `<'width'>`
   *
   * **Initial value**: `auto`
   *
   * |            Chrome            | Firefox |             Safari             |  Edge  | IE  |
   * | :--------------------------: | :-----: | :----------------------------: | :----: | :-: |
   * |            **57**            | **41**  |            **12.1**            | **79** | No  |
   * | 8 _(-webkit-logical-height)_ |         | 5.1 _(-webkit-logical-height)_ |        |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/block-size
   */
  blockSize?: Property.BlockSize<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since January 2020.
   *
   * **Syntax**: `<'border-top-color'>`
   *
   * **Initial value**: `currentcolor`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **69** | **41**  | **12.1** | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block-end-color
   */
  borderBlockEndColor?: Property.BorderBlockEndColor | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since January 2020.
   *
   * **Syntax**: `<'border-top-style'>`
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **69** | **41**  | **12.1** | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block-end-style
   */
  borderBlockEndStyle?: Property.BorderBlockEndStyle | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since January 2020.
   *
   * **Syntax**: `<'border-top-width'>`
   *
   * **Initial value**: `medium`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **69** | **41**  | **12.1** | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block-end-width
   */
  borderBlockEndWidth?: Property.BorderBlockEndWidth<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since January 2020.
   *
   * **Syntax**: `<'border-top-color'>`
   *
   * **Initial value**: `currentcolor`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **69** | **41**  | **12.1** | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block-start-color
   */
  borderBlockStartColor?: Property.BorderBlockStartColor | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since January 2020.
   *
   * **Syntax**: `<'border-top-style'>`
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **69** | **41**  | **12.1** | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block-start-style
   */
  borderBlockStartStyle?: Property.BorderBlockStartStyle | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since January 2020.
   *
   * **Syntax**: `<'border-top-width'>`
   *
   * **Initial value**: `medium`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **69** | **41**  | **12.1** | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block-start-width
   */
  borderBlockStartWidth?: Property.BorderBlockStartWidth<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `<'border-top-color'>`
   *
   * **Initial value**: `currentcolor`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-bottom-color
   */
  borderBottomColor?: Property.BorderBottomColor | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `<length-percentage [0,∞]>{1,2}`
   *
   * **Initial value**: `0`
   *
   * | Chrome  | Firefox | Safari  |  Edge  |  IE   |
   * | :-----: | :-----: | :-----: | :----: | :---: |
   * |  **4**  |  **4**  |  **5**  | **12** | **9** |
   * | 1 _-x-_ |         | 3 _-x-_ |        |       |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-bottom-left-radius
   */
  borderBottomLeftRadius?: Property.BorderBottomLeftRadius<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `<length-percentage [0,∞]>{1,2}`
   *
   * **Initial value**: `0`
   *
   * | Chrome  | Firefox | Safari  |  Edge  |  IE   |
   * | :-----: | :-----: | :-----: | :----: | :---: |
   * |  **4**  |  **4**  |  **5**  | **12** | **9** |
   * | 1 _-x-_ |         | 3 _-x-_ |        |       |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-bottom-right-radius
   */
  borderBottomRightRadius?: Property.BorderBottomRightRadius<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `<line-style>`
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE    |
   * | :----: | :-----: | :----: | :----: | :-----: |
   * | **1**  |  **1**  | **1**  | **12** | **5.5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-bottom-style
   */
  borderBottomStyle?: Property.BorderBottomStyle | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `<line-width>`
   *
   * **Initial value**: `medium`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-bottom-width
   */
  borderBottomWidth?: Property.BorderBottomWidth<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `separate | collapse`
   *
   * **Initial value**: `separate`
   *
   * | Chrome | Firefox | Safari  |  Edge  |  IE   |
   * | :----: | :-----: | :-----: | :----: | :---: |
   * | **1**  |  **1**  | **1.1** | **12** | **5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-collapse
   */
  borderCollapse?: Property.BorderCollapse | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2021.
   *
   * **Syntax**: `<'border-top-left-radius'>`
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * | **89** | **66**  | **15** | **89** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-end-end-radius
   */
  borderEndEndRadius?: Property.BorderEndEndRadius<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2021.
   *
   * **Syntax**: `<'border-top-left-radius'>`
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * | **89** | **66**  | **15** | **89** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-end-start-radius
   */
  borderEndStartRadius?: Property.BorderEndStartRadius<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `[ <length [0,∞]> | <number [0,∞]> ]{1,4}  `
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE   |
   * | :----: | :-----: | :----: | :----: | :----: |
   * | **15** | **15**  | **6**  | **12** | **11** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-image-outset
   */
  borderImageOutset?: Property.BorderImageOutset<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since March 2016.
   *
   * **Syntax**: `[ stretch | repeat | round | space ]{1,2}`
   *
   * **Initial value**: `stretch`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE   |
   * | :----: | :-----: | :----: | :----: | :----: |
   * | **15** | **15**  | **6**  | **12** | **11** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-image-repeat
   */
  borderImageRepeat?: Property.BorderImageRepeat | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `[ <number [0,∞]> | <percentage [0,∞]> ]{1,4}  && fill?`
   *
   * **Initial value**: `100%`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE   |
   * | :----: | :-----: | :----: | :----: | :----: |
   * | **15** | **15**  | **6**  | **12** | **11** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-image-slice
   */
  borderImageSlice?: Property.BorderImageSlice | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `none | <image>`
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE   |
   * | :----: | :-----: | :----: | :----: | :----: |
   * | **15** | **15**  | **6**  | **12** | **11** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-image-source
   */
  borderImageSource?: Property.BorderImageSource | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `[ <length-percentage [0,∞]> | <number [0,∞]> | auto ]{1,4}`
   *
   * **Initial value**: `1`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE   |
   * | :----: | :-----: | :----: | :----: | :----: |
   * | **16** | **13**  | **6**  | **12** | **11** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-image-width
   */
  borderImageWidth?: Property.BorderImageWidth<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since January 2020.
   *
   * **Syntax**: `<'border-top-color'>`
   *
   * **Initial value**: `currentcolor`
   *
   * | Chrome |           Firefox           |  Safari  |  Edge  | IE  |
   * | :----: | :-------------------------: | :------: | :----: | :-: |
   * | **69** |           **41**            | **12.1** | **79** | No  |
   * |        | 3 _(-moz-border-end-color)_ |          |        |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline-end-color
   */
  borderInlineEndColor?: Property.BorderInlineEndColor | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since January 2020.
   *
   * **Syntax**: `<'border-top-style'>`
   *
   * **Initial value**: `none`
   *
   * | Chrome |           Firefox           |  Safari  |  Edge  | IE  |
   * | :----: | :-------------------------: | :------: | :----: | :-: |
   * | **69** |           **41**            | **12.1** | **79** | No  |
   * |        | 3 _(-moz-border-end-style)_ |          |        |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline-end-style
   */
  borderInlineEndStyle?: Property.BorderInlineEndStyle | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since January 2020.
   *
   * **Syntax**: `<'border-top-width'>`
   *
   * **Initial value**: `medium`
   *
   * | Chrome |           Firefox           |  Safari  |  Edge  | IE  |
   * | :----: | :-------------------------: | :------: | :----: | :-: |
   * | **69** |           **41**            | **12.1** | **79** | No  |
   * |        | 3 _(-moz-border-end-width)_ |          |        |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline-end-width
   */
  borderInlineEndWidth?: Property.BorderInlineEndWidth<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since January 2020.
   *
   * **Syntax**: `<'border-top-color'>`
   *
   * **Initial value**: `currentcolor`
   *
   * | Chrome |            Firefox            |  Safari  |  Edge  | IE  |
   * | :----: | :---------------------------: | :------: | :----: | :-: |
   * | **69** |            **41**             | **12.1** | **79** | No  |
   * |        | 3 _(-moz-border-start-color)_ |          |        |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline-start-color
   */
  borderInlineStartColor?: Property.BorderInlineStartColor | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since January 2020.
   *
   * **Syntax**: `<'border-top-style'>`
   *
   * **Initial value**: `none`
   *
   * | Chrome |            Firefox            |  Safari  |  Edge  | IE  |
   * | :----: | :---------------------------: | :------: | :----: | :-: |
   * | **69** |            **41**             | **12.1** | **79** | No  |
   * |        | 3 _(-moz-border-start-style)_ |          |        |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline-start-style
   */
  borderInlineStartStyle?: Property.BorderInlineStartStyle | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since January 2020.
   *
   * **Syntax**: `<'border-top-width'>`
   *
   * **Initial value**: `medium`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **69** | **41**  | **12.1** | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline-start-width
   */
  borderInlineStartWidth?: Property.BorderInlineStartWidth<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `<color>`
   *
   * **Initial value**: `currentcolor`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-left-color
   */
  borderLeftColor?: Property.BorderLeftColor | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `<line-style>`
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE    |
   * | :----: | :-----: | :----: | :----: | :-----: |
   * | **1**  |  **1**  | **1**  | **12** | **5.5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-left-style
   */
  borderLeftStyle?: Property.BorderLeftStyle | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `<line-width>`
   *
   * **Initial value**: `medium`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-left-width
   */
  borderLeftWidth?: Property.BorderLeftWidth<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `<color>`
   *
   * **Initial value**: `currentcolor`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-right-color
   */
  borderRightColor?: Property.BorderRightColor | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `<line-style>`
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE    |
   * | :----: | :-----: | :----: | :----: | :-----: |
   * | **1**  |  **1**  | **1**  | **12** | **5.5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-right-style
   */
  borderRightStyle?: Property.BorderRightStyle | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `<line-width>`
   *
   * **Initial value**: `medium`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-right-width
   */
  borderRightWidth?: Property.BorderRightWidth<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `<length>{1,2}`
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **8** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-spacing
   */
  borderSpacing?: Property.BorderSpacing<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2021.
   *
   * **Syntax**: `<'border-top-left-radius'>`
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * | **89** | **66**  | **15** | **89** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-start-end-radius
   */
  borderStartEndRadius?: Property.BorderStartEndRadius<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2021.
   *
   * **Syntax**: `<'border-top-left-radius'>`
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * | **89** | **66**  | **15** | **89** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-start-start-radius
   */
  borderStartStartRadius?: Property.BorderStartStartRadius<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `<color>`
   *
   * **Initial value**: `currentcolor`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-top-color
   */
  borderTopColor?: Property.BorderTopColor | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `<length-percentage [0,∞]>{1,2}`
   *
   * **Initial value**: `0`
   *
   * | Chrome  | Firefox | Safari  |  Edge  |  IE   |
   * | :-----: | :-----: | :-----: | :----: | :---: |
   * |  **4**  |  **4**  |  **5**  | **12** | **9** |
   * | 1 _-x-_ |         | 3 _-x-_ |        |       |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-top-left-radius
   */
  borderTopLeftRadius?: Property.BorderTopLeftRadius<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `<length-percentage [0,∞]>{1,2}`
   *
   * **Initial value**: `0`
   *
   * | Chrome  | Firefox | Safari  |  Edge  |  IE   |
   * | :-----: | :-----: | :-----: | :----: | :---: |
   * |  **4**  |  **4**  |  **5**  | **12** | **9** |
   * | 1 _-x-_ |         | 3 _-x-_ |        |       |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-top-right-radius
   */
  borderTopRightRadius?: Property.BorderTopRightRadius<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `<line-style>`
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE    |
   * | :----: | :-----: | :----: | :----: | :-----: |
   * | **1**  |  **1**  | **1**  | **12** | **5.5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-top-style
   */
  borderTopStyle?: Property.BorderTopStyle | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `<line-width>`
   *
   * **Initial value**: `medium`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-top-width
   */
  borderTopWidth?: Property.BorderTopWidth<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `auto | <length-percentage> | <anchor()> | <anchor-size()>`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/bottom
   */
  bottom?: Property.Bottom<TLength> | undefined;
  /**
   * This feature is not Baseline because it does not work in some of the most widely-used browsers.
   *
   * **Syntax**: `slice | clone`
   *
   * **Initial value**: `slice`
   *
   * |  Chrome  | Firefox |   Safari    |   Edge   | IE  |
   * | :------: | :-----: | :---------: | :------: | :-: |
   * | **130**  | **32**  | **7** _-x-_ | **130**  | No  |
   * | 22 _-x-_ |         |             | 79 _-x-_ |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/box-decoration-break
   */
  boxDecorationBreak?: Property.BoxDecorationBreak | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `none | <shadow>#`
   *
   * **Initial value**: `none`
   *
   * | Chrome  | Firefox | Safari  |  Edge  |  IE   |
   * | :-----: | :-----: | :-----: | :----: | :---: |
   * | **10**  |  **4**  | **5.1** | **12** | **9** |
   * | 1 _-x-_ |         | 3 _-x-_ |        |       |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/box-shadow
   */
  boxShadow?: Property.BoxShadow | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `content-box | border-box`
   *
   * **Initial value**: `content-box`
   *
   * | Chrome  | Firefox | Safari  |  Edge  |  IE   |
   * | :-----: | :-----: | :-----: | :----: | :---: |
   * | **10**  | **29**  | **5.1** | **12** | **8** |
   * | 1 _-x-_ | 1 _-x-_ | 3 _-x-_ |        |       |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/box-sizing
   */
  boxSizing?: Property.BoxSizing | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since January 2019.
   *
   * **Syntax**: `auto | avoid | always | all | avoid-page | page | left | right | recto | verso | avoid-column | column | avoid-region | region`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE   |
   * | :----: | :-----: | :----: | :----: | :----: |
   * | **50** | **65**  | **10** | **12** | **10** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/break-after
   */
  breakAfter?: Property.BreakAfter | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since January 2019.
   *
   * **Syntax**: `auto | avoid | always | all | avoid-page | page | left | right | recto | verso | avoid-column | column | avoid-region | region`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE   |
   * | :----: | :-----: | :----: | :----: | :----: |
   * | **50** | **65**  | **10** | **12** | **10** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/break-before
   */
  breakBefore?: Property.BreakBefore | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since January 2019.
   *
   * **Syntax**: `auto | avoid | avoid-page | avoid-column | avoid-region`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE   |
   * | :----: | :-----: | :----: | :----: | :----: |
   * | **50** | **65**  | **10** | **12** | **10** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/break-inside
   */
  breakInside?: Property.BreakInside | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `top | bottom`
   *
   * **Initial value**: `top`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **8** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/caption-side
   */
  captionSide?: Property.CaptionSide | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since January 2020.
   *
   * **Syntax**: `auto | <color>`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **57** | **53**  | **11.1** | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/caret-color
   */
  caretColor?: Property.CaretColor | undefined;
  /**
   * **Syntax**: `auto | bar | block | underscore`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   |   No    |   No   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/caret-shape
   */
  caretShape?: Property.CaretShape | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `none | left | right | both | inline-start | inline-end`
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/clear
   */
  clear?: Property.Clear | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since January 2020.
   *
   * **Syntax**: `<clip-source> | [ <basic-shape> || <geometry-box> ] | none`
   *
   * **Initial value**: `none`
   *
   * |  Chrome  | Firefox | Safari  |  Edge  |   IE   |
   * | :------: | :-----: | :-----: | :----: | :----: |
   * |  **55**  | **3.5** | **9.1** | **79** | **10** |
   * | 23 _-x-_ |         | 7 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/clip-path
   */
  clipPath?: Property.ClipPath | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since January 2020.
   *
   * **Syntax**: `nonzero | evenodd`
   *
   * **Initial value**: `nonzero`
   *
   * | Chrome  | Firefox | Safari |  Edge  | IE  |
   * | :-----: | :-----: | :----: | :----: | :-: |
   * | **≤15** | **3.5** | **≤5** | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/clip-rule
   */
  clipRule?: Property.ClipRule | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `<color>`
   *
   * **Initial value**: `canvastext`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **3** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/color
   */
  color?: Property.Color | undefined;
  /**
   * Since May 2025, this feature works across the latest devices and browser versions. This feature might not work in older devices or browsers.
   *
   * **Syntax**: `economy | exact`
   *
   * **Initial value**: `economy`
   *
   * |  Chrome  |       Firefox       |  Safari  |   Edge   | IE  |
   * | :------: | :-----------------: | :------: | :------: | :-: |
   * | **136**  |       **97**        | **15.4** | **136**  | No  |
   * | 17 _-x-_ | 48 _(color-adjust)_ | 6 _-x-_  | 79 _-x-_ |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/print-color-adjust
   */
  colorAdjust?: Property.PrintColorAdjust | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since January 2020.
   *
   * **Syntax**: `auto | sRGB | linearRGB`
   *
   * **Initial value**: `linearRGB`
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * | **1**  |  **3**  | **3**  | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/color-interpolation-filters
   */
  colorInterpolationFilters?: Property.ColorInterpolationFilters | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since January 2022.
   *
   * **Syntax**: `normal | [ light | dark | <custom-ident> ]+ && only?`
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * | **81** | **96**  | **13** | **81** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/color-scheme
   */
  colorScheme?: Property.ColorScheme | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since March 2017.
   *
   * **Syntax**: `<integer> | auto`
   *
   * **Initial value**: `auto`
   *
   * | Chrome  | Firefox | Safari  |  Edge  |   IE   |
   * | :-----: | :-----: | :-----: | :----: | :----: |
   * | **50**  | **52**  |  **9**  | **12** | **10** |
   * | 1 _-x-_ |         | 3 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/column-count
   */
  columnCount?: Property.ColumnCount | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since March 2017.
   *
   * **Syntax**: `auto | balance`
   *
   * **Initial value**: `balance`
   *
   * | Chrome | Firefox | Safari  |  Edge  |   IE   |
   * | :----: | :-----: | :-----: | :----: | :----: |
   * | **50** | **52**  |  **9**  | **12** | **10** |
   * |        |         | 8 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/column-fill
   */
  columnFill?: Property.ColumnFill | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `normal | <length-percentage>`
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE   |
   * | :----: | :-----: | :----: | :----: | :----: |
   * | **1**  | **1.5** | **3**  | **12** | **10** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/column-gap
   */
  columnGap?: Property.ColumnGap<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since March 2017.
   *
   * **Syntax**: `<color>`
   *
   * **Initial value**: `currentcolor`
   *
   * | Chrome  | Firefox | Safari  |  Edge  |   IE   |
   * | :-----: | :-----: | :-----: | :----: | :----: |
   * | **50**  | **52**  |  **9**  | **12** | **10** |
   * | 1 _-x-_ |         | 3 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/column-rule-color
   */
  columnRuleColor?: Property.ColumnRuleColor | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since March 2017.
   *
   * **Syntax**: `<'border-style'>`
   *
   * **Initial value**: `none`
   *
   * | Chrome  | Firefox | Safari  |  Edge  |   IE   |
   * | :-----: | :-----: | :-----: | :----: | :----: |
   * | **50**  | **52**  |  **9**  | **12** | **10** |
   * | 1 _-x-_ |         | 3 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/column-rule-style
   */
  columnRuleStyle?: Property.ColumnRuleStyle | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since March 2017.
   *
   * **Syntax**: `<'border-width'>`
   *
   * **Initial value**: `medium`
   *
   * | Chrome  | Firefox | Safari  |  Edge  |   IE   |
   * | :-----: | :-----: | :-----: | :----: | :----: |
   * | **50**  | **52**  |  **9**  | **12** | **10** |
   * | 1 _-x-_ |         | 3 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/column-rule-width
   */
  columnRuleWidth?: Property.ColumnRuleWidth<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2020.
   *
   * **Syntax**: `none | all`
   *
   * **Initial value**: `none`
   *
   * | Chrome  | Firefox |  Safari   |  Edge  |   IE   |
   * | :-----: | :-----: | :-------: | :----: | :----: |
   * | **50**  | **71**  |   **9**   | **12** | **10** |
   * | 6 _-x-_ |         | 5.1 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/column-span
   */
  columnSpan?: Property.ColumnSpan | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since November 2016.
   *
   * **Syntax**: `<length> | auto`
   *
   * **Initial value**: `auto`
   *
   * | Chrome  | Firefox | Safari  |  Edge  |   IE   |
   * | :-----: | :-----: | :-----: | :----: | :----: |
   * | **50**  | **50**  |  **9**  | **12** | **10** |
   * | 1 _-x-_ |         | 3 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/column-width
   */
  columnWidth?: Property.ColumnWidth<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since March 2022.
   *
   * **Syntax**: `none | strict | content | [ [ size || inline-size ] || layout || style || paint ]`
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **52** | **69**  | **15.4** | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/contain
   */
  contain?: Property.Contain | undefined;
  /**
   * Since September 2023, this feature works across the latest devices and browser versions. This feature might not work in older devices or browsers.
   *
   * **Syntax**: `auto? [ none | <length> ]`
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * | **95** | **107** | **17** | **95** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/contain-intrinsic-block-size
   */
  containIntrinsicBlockSize?: Property.ContainIntrinsicBlockSize<TLength> | undefined;
  /**
   * Since September 2023, this feature works across the latest devices and browser versions. This feature might not work in older devices or browsers.
   *
   * **Syntax**: `auto? [ none | <length> ]`
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * | **95** | **107** | **17** | **95** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/contain-intrinsic-height
   */
  containIntrinsicHeight?: Property.ContainIntrinsicHeight<TLength> | undefined;
  /**
   * Since September 2023, this feature works across the latest devices and browser versions. This feature might not work in older devices or browsers.
   *
   * **Syntax**: `auto? [ none | <length> ]`
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * | **95** | **107** | **17** | **95** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/contain-intrinsic-inline-size
   */
  containIntrinsicInlineSize?: Property.ContainIntrinsicInlineSize<TLength> | undefined;
  /**
   * Since September 2023, this feature works across the latest devices and browser versions. This feature might not work in older devices or browsers.
   *
   * **Syntax**: `auto? [ none | <length> ]`
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * | **95** | **107** | **17** | **95** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/contain-intrinsic-width
   */
  containIntrinsicWidth?: Property.ContainIntrinsicWidth<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since February 2023.
   *
   * **Syntax**: `none | <custom-ident>+`
   *
   * **Initial value**: `none`
   *
   * | Chrome  | Firefox | Safari |  Edge   | IE  |
   * | :-----: | :-----: | :----: | :-----: | :-: |
   * | **105** | **110** | **16** | **105** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/container-name
   */
  containerName?: Property.ContainerName | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since February 2023.
   *
   * **Syntax**: `normal | [ [ size | inline-size ] || scroll-state ]`
   *
   * **Initial value**: `normal`
   *
   * | Chrome  | Firefox | Safari |  Edge   | IE  |
   * | :-----: | :-----: | :----: | :-----: | :-: |
   * | **105** | **110** | **16** | **105** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/container-type
   */
  containerType?: Property.ContainerType | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `normal | none | [ <content-replacement> | <content-list> ] [ / [ <string> | <counter> | <attr()> ]+ ]?`
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **8** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/content
   */
  content?: Property.Content | undefined;
  /**
   * Since September 2024, this feature works across the latest devices and browser versions. This feature might not work in older devices or browsers.
   *
   * **Syntax**: `visible | auto | hidden`
   *
   * **Initial value**: `visible`
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * | **85** | **125** | **18** | **85** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/content-visibility
   */
  contentVisibility?: Property.ContentVisibility | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `[ <counter-name> <integer>? ]+ | none`
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **2**  |  **1**  | **3**  | **12** | **8** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/counter-increment
   */
  counterIncrement?: Property.CounterIncrement | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `[ <counter-name> <integer>? | <reversed-counter-name> <integer>? ]+ | none`
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **2**  |  **1**  | **3**  | **12** | **8** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/counter-reset
   */
  counterReset?: Property.CounterReset | undefined;
  /**
   * Since December 2023, this feature works across the latest devices and browser versions. This feature might not work in older devices or browsers.
   *
   * **Syntax**: `[ <counter-name> <integer>? ]+ | none`
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **85** | **68**  | **17.2** | **85** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/counter-set
   */
  counterSet?: Property.CounterSet | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since December 2021.
   *
   * **Syntax**: `[ [ <url> [ <x> <y> ]? , ]* <cursor-predefined> ]`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari  |  Edge  |  IE   |
   * | :----: | :-----: | :-----: | :----: | :---: |
   * | **1**  |  **1**  | **1.2** | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/cursor
   */
  cursor?: Property.Cursor | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2020.
   *
   * **Syntax**: `<length> | <percentage>`
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * | **43** | **69**  | **9**  | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/cx
   */
  cx?: Property.Cx<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2020.
   *
   * **Syntax**: `<length> | <percentage>`
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * | **43** | **69**  | **9**  | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/cy
   */
  cy?: Property.Cy<TLength> | undefined;
  /**
   * This feature is not Baseline because it does not work in some of the most widely-used browsers.
   *
   * **Syntax**: `none | path(<string>)`
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * | **52** | **97**  |   No   | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/d
   */
  d?: Property.D | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `ltr | rtl`
   *
   * **Initial value**: `ltr`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE    |
   * | :----: | :-----: | :----: | :----: | :-----: |
   * | **2**  |  **1**  | **1**  | **12** | **5.5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/direction
   */
  direction?: Property.Direction | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `[ <display-outside> || <display-inside> ] | <display-listitem> | <display-internal> | <display-box> | <display-legacy>`
   *
   * **Initial value**: `inline`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/display
   */
  display?: Property.Display | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since January 2020.
   *
   * **Syntax**: `auto | text-bottom | alphabetic | ideographic | middle | central | mathematical | hanging | text-top`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * | **1**  |  **1**  | **4**  | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/dominant-baseline
   */
  dominantBaseline?: Property.DominantBaseline | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `show | hide`
   *
   * **Initial value**: `show`
   *
   * | Chrome | Firefox | Safari  |  Edge  |  IE   |
   * | :----: | :-----: | :-----: | :----: | :---: |
   * | **1**  |  **1**  | **1.2** | **12** | **8** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/empty-cells
   */
  emptyCells?: Property.EmptyCells | undefined;
  /**
   * This feature is not Baseline because it does not work in some of the most widely-used browsers.
   *
   * **Syntax**: `content | fixed`
   *
   * **Initial value**: `fixed`
   *
   * | Chrome  | Firefox |   Safari    |  Edge   | IE  |
   * | :-----: | :-----: | :---------: | :-----: | :-: |
   * | **123** |   No    | **preview** | **123** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/field-sizing
   */
  fieldSizing?: Property.FieldSizing | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since April 2017.
   *
   * **Syntax**: `<paint>`
   *
   * **Initial value**: `black`
   *
   * | Chrome | Firefox | Safari |  Edge   | IE  |
   * | :----: | :-----: | :----: | :-----: | :-: |
   * | **1**  |  **3**  | **4**  | **≤15** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/fill
   */
  fill?: Property.Fill | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since April 2017.
   *
   * **Syntax**: `<'opacity'>`
   *
   * **Initial value**: `1`
   *
   * | Chrome | Firefox | Safari |  Edge   | IE  |
   * | :----: | :-----: | :----: | :-----: | :-: |
   * | **1**  |  **1**  | **4**  | **≤15** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/fill-opacity
   */
  fillOpacity?: Property.FillOpacity | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since April 2017.
   *
   * **Syntax**: `nonzero | evenodd`
   *
   * **Initial value**: `nonzero`
   *
   * | Chrome | Firefox | Safari |  Edge   | IE  |
   * | :----: | :-----: | :----: | :-----: | :-: |
   * | **1**  |  **3**  | **4**  | **≤15** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/fill-rule
   */
  fillRule?: Property.FillRule | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2016.
   *
   * **Syntax**: `none | <filter-value-list>`
   *
   * **Initial value**: `none`
   *
   * |  Chrome  | Firefox | Safari  |  Edge  | IE  |
   * | :------: | :-----: | :-----: | :----: | :-: |
   * |  **53**  | **35**  | **9.1** | **12** | No  |
   * | 18 _-x-_ |         | 6 _-x-_ |        |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/filter
   */
  filter?: Property.Filter | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2015.
   *
   * **Syntax**: `content | <'width'>`
   *
   * **Initial value**: `auto`
   *
   * |  Chrome  | Firefox | Safari  |  Edge  |   IE   |
   * | :------: | :-----: | :-----: | :----: | :----: |
   * |  **29**  | **22**  |  **9**  | **12** | **11** |
   * | 22 _-x-_ |         | 7 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/flex-basis
   */
  flexBasis?: Property.FlexBasis<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2015.
   *
   * **Syntax**: `row | row-reverse | column | column-reverse`
   *
   * **Initial value**: `row`
   *
   * |  Chrome  | Firefox | Safari  |  Edge  |    IE    |
   * | :------: | :-----: | :-----: | :----: | :------: |
   * |  **29**  | **22**  |  **9**  | **12** |  **11**  |
   * | 21 _-x-_ |         | 7 _-x-_ |        | 10 _-x-_ |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/flex-direction
   */
  flexDirection?: Property.FlexDirection | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2015.
   *
   * **Syntax**: `<number>`
   *
   * **Initial value**: `0`
   *
   * |  Chrome  | Firefox | Safari  |  Edge  |            IE            |
   * | :------: | :-----: | :-----: | :----: | :----------------------: |
   * |  **29**  | **20**  |  **9**  | **12** |          **11**          |
   * | 22 _-x-_ |         | 7 _-x-_ |        | 10 _(-ms-flex-positive)_ |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/flex-grow
   */
  flexGrow?: Property.FlexGrow | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2015.
   *
   * **Syntax**: `<number>`
   *
   * **Initial value**: `1`
   *
   * |  Chrome  | Firefox | Safari  |  Edge  |   IE   |
   * | :------: | :-----: | :-----: | :----: | :----: |
   * |  **29**  | **20**  |  **9**  | **12** | **10** |
   * | 22 _-x-_ |         | 8 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/flex-shrink
   */
  flexShrink?: Property.FlexShrink | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2015.
   *
   * **Syntax**: `nowrap | wrap | wrap-reverse`
   *
   * **Initial value**: `nowrap`
   *
   * |  Chrome  | Firefox | Safari  |  Edge  |   IE   |
   * | :------: | :-----: | :-----: | :----: | :----: |
   * |  **29**  | **28**  |  **9**  | **12** | **11** |
   * | 21 _-x-_ |         | 7 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/flex-wrap
   */
  flexWrap?: Property.FlexWrap | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `left | right | none | inline-start | inline-end`
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/float
   */
  float?: Property.Float | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `<color>`
   *
   * **Initial value**: `black`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE    |
   * | :----: | :-----: | :----: | :----: | :-----: |
   * | **5**  |  **3**  | **6**  | **12** | **≤11** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/flood-color
   */
  floodColor?: Property.FloodColor | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `<'opacity'>`
   *
   * **Initial value**: `black`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE    |
   * | :----: | :-----: | :----: | :----: | :-----: |
   * | **5**  |  **3**  | **6**  | **12** | **≤11** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/flood-opacity
   */
  floodOpacity?: Property.FloodOpacity | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `[ <family-name> | <generic-family> ]#`
   *
   * **Initial value**: depends on user agent
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **3** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-family
   */
  fontFamily?: Property.FontFamily | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since April 2017.
   *
   * **Syntax**: `normal | <feature-tag-value>#`
   *
   * **Initial value**: `normal`
   *
   * |  Chrome  | Firefox  | Safari  |  Edge  |   IE   |
   * | :------: | :------: | :-----: | :----: | :----: |
   * |  **48**  |  **34**  | **9.1** | **15** | **10** |
   * | 16 _-x-_ | 15 _-x-_ |         |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-feature-settings
   */
  fontFeatureSettings?: Property.FontFeatureSettings | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since January 2020.
   *
   * **Syntax**: `auto | normal | none`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari  |  Edge  | IE  |
   * | :----: | :-----: | :-----: | :----: | :-: |
   * | **33** | **32**  |  **9**  | **79** | No  |
   * |        |         | 6 _-x-_ |        |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-kerning
   */
  fontKerning?: Property.FontKerning | undefined;
  /**
   * This feature is not Baseline because it does not work in some of the most widely-used browsers.
   *
   * **Syntax**: `normal | <string>`
   *
   * **Initial value**: `normal`
   *
   * | Chrome  | Firefox | Safari |  Edge   | IE  |
   * | :-----: | :-----: | :----: | :-----: | :-: |
   * | **143** | **34**  |   No   | **143** | No  |
   * |         | 4 _-x-_ |        |         |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-language-override
   */
  fontLanguageOverride?: Property.FontLanguageOverride | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since March 2020.
   *
   * **Syntax**: `auto | none`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **79** | **62**  | **13.1** | **17** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-optical-sizing
   */
  fontOpticalSizing?: Property.FontOpticalSizing | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since November 2022.
   *
   * **Syntax**: `normal | light | dark | <palette-identifier> | <palette-mix()>`
   *
   * **Initial value**: `normal`
   *
   * | Chrome  | Firefox |  Safari  |  Edge   | IE  |
   * | :-----: | :-----: | :------: | :-----: | :-: |
   * | **101** | **107** | **15.4** | **101** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-palette
   */
  fontPalette?: Property.FontPalette | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `<absolute-size> | <relative-size> | <length-percentage [0,∞]> | math`
   *
   * **Initial value**: `medium`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE    |
   * | :----: | :-----: | :----: | :----: | :-----: |
   * | **1**  |  **1**  | **1**  | **12** | **5.5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-size
   */
  fontSize?: Property.FontSize<TLength> | undefined;
  /**
   * Since July 2024, this feature works across the latest devices and browser versions. This feature might not work in older devices or browsers.
   *
   * **Syntax**: `none | [ ex-height | cap-height | ch-width | ic-width | ic-height ]? [ from-font | <number> ]`
   *
   * **Initial value**: `none`
   *
   * | Chrome  | Firefox |  Safari  |  Edge   | IE  |
   * | :-----: | :-----: | :------: | :-----: | :-: |
   * | **127** |  **3**  | **16.4** | **127** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-size-adjust
   */
  fontSizeAdjust?: Property.FontSizeAdjust | undefined;
  /**
   * The **`font-smooth`** CSS property controls the application of anti-aliasing when fonts are rendered.
   *
   * **Syntax**: `auto | never | always | <absolute-size> | <length>`
   *
   * **Initial value**: `auto`
   *
   * |              Chrome              |              Firefox               |              Safari              |               Edge                | IE  |
   * | :------------------------------: | :--------------------------------: | :------------------------------: | :-------------------------------: | :-: |
   * | **5** _(-webkit-font-smoothing)_ | **25** _(-moz-osx-font-smoothing)_ | **4** _(-webkit-font-smoothing)_ | **79** _(-webkit-font-smoothing)_ | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-smooth
   */
  fontSmooth?: Property.FontSmooth<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `normal | italic | oblique <angle>?`
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-style
   */
  fontStyle?: Property.FontStyle | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since January 2022.
   *
   * **Syntax**: `none | [ weight || style || small-caps || position]`
   *
   * **Initial value**: `weight style small-caps position `
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * | **97** | **34**  | **9**  | **97** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-synthesis
   */
  fontSynthesis?: Property.FontSynthesis | undefined;
  /**
   * This feature is not Baseline because it does not work in some of the most widely-used browsers.
   *
   * **Syntax**: `auto | none`
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   | **118** |   No   |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-synthesis-position
   */
  fontSynthesisPosition?: Property.FontSynthesisPosition | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since March 2023.
   *
   * **Syntax**: `auto | none`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **97** | **111** | **16.4** | **97** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-synthesis-small-caps
   */
  fontSynthesisSmallCaps?: Property.FontSynthesisSmallCaps | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since March 2023.
   *
   * **Syntax**: `auto | none`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **97** | **111** | **16.4** | **97** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-synthesis-style
   */
  fontSynthesisStyle?: Property.FontSynthesisStyle | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since March 2023.
   *
   * **Syntax**: `auto | none`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **97** | **111** | **16.4** | **97** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-synthesis-weight
   */
  fontSynthesisWeight?: Property.FontSynthesisWeight | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `normal | none | [ <common-lig-values> || <discretionary-lig-values> || <historical-lig-values> || <contextual-alt-values> || stylistic( <feature-value-name> ) || historical-forms || styleset( <feature-value-name># ) || character-variant( <feature-value-name># ) || swash( <feature-value-name> ) || ornaments( <feature-value-name> ) || annotation( <feature-value-name> ) || [ small-caps | all-small-caps | petite-caps | all-petite-caps | unicase | titling-caps ] || <numeric-figure-values> || <numeric-spacing-values> || <numeric-fraction-values> || ordinal || slashed-zero || <east-asian-variant-values> || <east-asian-width-values> || ruby ]`
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant
   */
  fontVariant?: Property.FontVariant | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since March 2023.
   *
   * **Syntax**: `normal | [ stylistic( <feature-value-name> ) || historical-forms || styleset( <feature-value-name># ) || character-variant( <feature-value-name># ) || swash( <feature-value-name> ) || ornaments( <feature-value-name> ) || annotation( <feature-value-name> ) ]`
   *
   * **Initial value**: `normal`
   *
   * | Chrome  | Firefox | Safari  |  Edge   | IE  |
   * | :-----: | :-----: | :-----: | :-----: | :-: |
   * | **111** | **34**  | **9.1** | **111** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant-alternates
   */
  fontVariantAlternates?: Property.FontVariantAlternates | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since January 2020.
   *
   * **Syntax**: `normal | small-caps | all-small-caps | petite-caps | all-petite-caps | unicase | titling-caps`
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari  |  Edge  | IE  |
   * | :----: | :-----: | :-----: | :----: | :-: |
   * | **52** | **34**  | **9.1** | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant-caps
   */
  fontVariantCaps?: Property.FontVariantCaps | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since January 2020.
   *
   * **Syntax**: `normal | [ <east-asian-variant-values> || <east-asian-width-values> || ruby ]`
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari  |  Edge  | IE  |
   * | :----: | :-----: | :-----: | :----: | :-: |
   * | **63** | **34**  | **9.1** | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant-east-asian
   */
  fontVariantEastAsian?: Property.FontVariantEastAsian | undefined;
  /**
   * This feature is not Baseline because it does not work in some of the most widely-used browsers.
   *
   * **Syntax**: `normal | text | emoji | unicode`
   *
   * **Initial value**: `normal`
   *
   * | Chrome  | Firefox | Safari |  Edge   | IE  |
   * | :-----: | :-----: | :----: | :-----: | :-: |
   * | **131** | **141** |   No   | **131** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant-emoji
   */
  fontVariantEmoji?: Property.FontVariantEmoji | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since January 2020.
   *
   * **Syntax**: `normal | none | [ <common-lig-values> || <discretionary-lig-values> || <historical-lig-values> || <contextual-alt-values> ]`
   *
   * **Initial value**: `normal`
   *
   * |  Chrome  | Firefox | Safari  |  Edge  | IE  |
   * | :------: | :-----: | :-----: | :----: | :-: |
   * |  **34**  | **34**  | **9.1** | **79** | No  |
   * | 31 _-x-_ |         | 7 _-x-_ |        |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant-ligatures
   */
  fontVariantLigatures?: Property.FontVariantLigatures | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since January 2020.
   *
   * **Syntax**: `normal | [ <numeric-figure-values> || <numeric-spacing-values> || <numeric-fraction-values> || ordinal || slashed-zero ]`
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari  |  Edge  | IE  |
   * | :----: | :-----: | :-----: | :----: | :-: |
   * | **52** | **34**  | **9.1** | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant-numeric
   */
  fontVariantNumeric?: Property.FontVariantNumeric | undefined;
  /**
   * This feature is not Baseline because it does not work in some of the most widely-used browsers.
   *
   * **Syntax**: `normal | sub | super`
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari  | Edge | IE  |
   * | :----: | :-----: | :-----: | :--: | :-: |
   * |   No   | **34**  | **9.1** |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variant-position
   */
  fontVariantPosition?: Property.FontVariantPosition | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2018.
   *
   * **Syntax**: `normal | [ <string> <number> ]#`
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * | **62** | **62**  | **11** | **17** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-variation-settings
   */
  fontVariationSettings?: Property.FontVariationSettings | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `<font-weight-absolute> | bolder | lighter`
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **2**  |  **1**  | **1**  | **12** | **3** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font-weight
   */
  fontWeight?: Property.FontWeight | undefined;
  /**
   * **Syntax**: `normal | <percentage [0,∞]> | ultra-condensed | extra-condensed | condensed | semi-condensed | semi-expanded | expanded | extra-expanded | ultra-expanded`
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox |  Safari  | Edge | IE  |
   * | :----: | :-----: | :------: | :--: | :-: |
   * |   No   |   No    | **18.4** |  No  | No  |
   */
  fontWidth?: Property.FontWidth | undefined;
  /**
   * This feature is not Baseline because it does not work in some of the most widely-used browsers.
   *
   * **Syntax**: `auto | none | preserve-parent-color`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |              Edge               |                 IE                  |
   * | :----: | :-----: | :----: | :-----------------------------: | :---------------------------------: |
   * | **89** | **113** |   No   |             **79**              | **10** _(-ms-high-contrast-adjust)_ |
   * |        |         |        | 12 _(-ms-high-contrast-adjust)_ |                                     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/forced-color-adjust
   */
  forcedColorAdjust?: Property.ForcedColorAdjust | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2020.
   *
   * **Syntax**: `<track-size>+`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox |  Safari  |  Edge  |             IE              |
   * | :----: | :-----: | :------: | :----: | :-------------------------: |
   * | **57** | **70**  | **10.1** | **16** | **10** _(-ms-grid-columns)_ |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-auto-columns
   */
  gridAutoColumns?: Property.GridAutoColumns<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since October 2017.
   *
   * **Syntax**: `[ row | column ] || dense`
   *
   * **Initial value**: `row`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **57** | **52**  | **10.1** | **16** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-auto-flow
   */
  gridAutoFlow?: Property.GridAutoFlow | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2020.
   *
   * **Syntax**: `<track-size>+`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox |  Safari  |  Edge  |            IE            |
   * | :----: | :-----: | :------: | :----: | :----------------------: |
   * | **57** | **70**  | **10.1** | **16** | **10** _(-ms-grid-rows)_ |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-auto-rows
   */
  gridAutoRows?: Property.GridAutoRows<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since October 2017.
   *
   * **Syntax**: `<grid-line>`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **57** | **52**  | **10.1** | **16** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-column-end
   */
  gridColumnEnd?: Property.GridColumnEnd | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since October 2017.
   *
   * **Syntax**: `<grid-line>`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **57** | **52**  | **10.1** | **16** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-column-start
   */
  gridColumnStart?: Property.GridColumnStart | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since October 2017.
   *
   * **Syntax**: `<grid-line>`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **57** | **52**  | **10.1** | **16** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-row-end
   */
  gridRowEnd?: Property.GridRowEnd | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since October 2017.
   *
   * **Syntax**: `<grid-line>`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **57** | **52**  | **10.1** | **16** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-row-start
   */
  gridRowStart?: Property.GridRowStart | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since October 2017.
   *
   * **Syntax**: `none | <string>+`
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **57** | **52**  | **10.1** | **16** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-template-areas
   */
  gridTemplateAreas?: Property.GridTemplateAreas | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since October 2017.
   *
   * **Syntax**: `none | <track-list> | <auto-track-list> | subgrid <line-name-list>?`
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox |  Safari  |  Edge  |             IE              |
   * | :----: | :-----: | :------: | :----: | :-------------------------: |
   * | **57** | **52**  | **10.1** | **16** | **10** _(-ms-grid-columns)_ |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-template-columns
   */
  gridTemplateColumns?: Property.GridTemplateColumns<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since October 2017.
   *
   * **Syntax**: `none | <track-list> | <auto-track-list> | subgrid <line-name-list>?`
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox |  Safari  |  Edge  |            IE            |
   * | :----: | :-----: | :------: | :----: | :----------------------: |
   * | **57** | **52**  | **10.1** | **16** | **10** _(-ms-grid-rows)_ |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-template-rows
   */
  gridTemplateRows?: Property.GridTemplateRows<TLength> | undefined;
  /**
   * This feature is not Baseline because it does not work in some of the most widely-used browsers.
   *
   * **Syntax**: `none | [ first || [ force-end | allow-end ] || last ]`
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari | Edge | IE  |
   * | :----: | :-----: | :----: | :--: | :-: |
   * |   No   |   No    | **10** |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/hanging-punctuation
   */
  hangingPunctuation?: Property.HangingPunctuation | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `auto | <length-percentage [0,∞]> | min-content | max-content | fit-content | fit-content(<length-percentage [0,∞]>) | <calc-size()> | <anchor-size()>`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/height
   */
  height?: Property.Height<TLength> | undefined;
  /**
   * Since September 2023, this feature works across the latest devices and browser versions. This feature might not work in older devices or browsers.
   *
   * **Syntax**: `auto | <string>`
   *
   * **Initial value**: `auto`
   *
   * | Chrome  | Firefox |  Safari   |   Edge   | IE  |
   * | :-----: | :-----: | :-------: | :------: | :-: |
   * | **106** | **98**  |  **17**   | **106**  | No  |
   * | 6 _-x-_ |         | 5.1 _-x-_ | 79 _-x-_ |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/hyphenate-character
   */
  hyphenateCharacter?: Property.HyphenateCharacter | undefined;
  /**
   * This feature is not Baseline because it does not work in some of the most widely-used browsers.
   *
   * **Syntax**: `[ auto | <integer> ]{1,3}`
   *
   * **Initial value**: `auto`
   *
   * | Chrome  | Firefox | Safari |  Edge   | IE  |
   * | :-----: | :-----: | :----: | :-----: | :-: |
   * | **109** | **137** |   No   | **109** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/hyphenate-limit-chars
   */
  hyphenateLimitChars?: Property.HyphenateLimitChars | undefined;
  /**
   * Since September 2023, this feature works across the latest devices and browser versions. This feature might not work in older devices or browsers.
   *
   * **Syntax**: `none | manual | auto`
   *
   * **Initial value**: `manual`
   *
   * |  Chrome  | Firefox |  Safari   |  Edge  |      IE      |
   * | :------: | :-----: | :-------: | :----: | :----------: |
   * |  **55**  | **43**  |  **17**   | **79** | **10** _-x-_ |
   * | 13 _-x-_ | 6 _-x-_ | 5.1 _-x-_ |        |              |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/hyphens
   */
  hyphens?: Property.Hyphens | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since April 2020.
   *
   * **Syntax**: `from-image | <angle> | [ <angle>? flip ]`
   *
   * **Initial value**: `from-image`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **81** | **26**  | **13.1** | **81** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/image-orientation
   */
  imageOrientation?: Property.ImageOrientation | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since January 2020.
   *
   * **Syntax**: `auto | crisp-edges | pixelated | smooth`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * | **13** | **3.6** | **6**  | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/image-rendering
   */
  imageRendering?: Property.ImageRendering | undefined;
  /**
   * The **`image-resolution`** CSS property specifies the intrinsic resolution of all raster images used in or on the element. It affects content images such as replaced elements and generated content, and decorative images such as `background-image` images.
   *
   * **Syntax**: `[ from-image || <resolution> ] && snap?`
   *
   * **Initial value**: `1dppx`
   */
  imageResolution?: Property.ImageResolution | undefined;
  /**
   * This feature is not Baseline because it does not work in some of the most widely-used browsers.
   *
   * **Syntax**: `normal | [ <number> <integer>? ]`
   *
   * **Initial value**: `normal`
   *
   * | Chrome  | Firefox |   Safari    |  Edge   | IE  |
   * | :-----: | :-----: | :---------: | :-----: | :-: |
   * | **110** |   No    | **9** _-x-_ | **110** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/initial-letter
   */
  initialLetter?: Property.InitialLetter | undefined;
  /**
   * **Syntax**: `[ auto | alphabetic | hanging | ideographic ]`
   *
   * **Initial value**: `auto`
   */
  initialLetterAlign?: Property.InitialLetterAlign | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since January 2020.
   *
   * **Syntax**: `<'width'>`
   *
   * **Initial value**: `auto`
   *
   * |           Chrome            | Firefox |            Safari             |  Edge  | IE  |
   * | :-------------------------: | :-----: | :---------------------------: | :----: | :-: |
   * |           **57**            | **41**  |           **12.1**            | **79** | No  |
   * | 8 _(-webkit-logical-width)_ |         | 5.1 _(-webkit-logical-width)_ |        |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inline-size
   */
  inlineSize?: Property.InlineSize<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since April 2021.
   *
   * **Syntax**: `<'top'>`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **87** | **63**  | **14.1** | **87** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset-block-end
   */
  insetBlockEnd?: Property.InsetBlockEnd<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since April 2021.
   *
   * **Syntax**: `<'top'>`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **87** | **63**  | **14.1** | **87** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset-block-start
   */
  insetBlockStart?: Property.InsetBlockStart<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since April 2021.
   *
   * **Syntax**: `<'top'>`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **87** | **63**  | **14.1** | **87** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset-inline-end
   */
  insetInlineEnd?: Property.InsetInlineEnd<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since April 2021.
   *
   * **Syntax**: `<'top'>`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **87** | **63**  | **14.1** | **87** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset-inline-start
   */
  insetInlineStart?: Property.InsetInlineStart<TLength> | undefined;
  /**
   * This feature is not Baseline because it does not work in some of the most widely-used browsers.
   *
   * **Syntax**: `numeric-only | allow-keywords`
   *
   * **Initial value**: `numeric-only`
   *
   * | Chrome  | Firefox | Safari |  Edge   | IE  |
   * | :-----: | :-----: | :----: | :-----: | :-: |
   * | **129** |   No    |   No   | **129** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/interpolate-size
   */
  interpolateSize?: Property.InterpolateSize | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since January 2020.
   *
   * **Syntax**: `auto | isolate`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * | **41** | **36**  | **8**  | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/isolation
   */
  isolation?: Property.Isolation | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2015.
   *
   * **Syntax**: `normal | <content-distribution> | <overflow-position>? [ <content-position> | left | right ]`
   *
   * **Initial value**: `normal`
   *
   * |  Chrome  | Firefox | Safari  |  Edge  |   IE   |
   * | :------: | :-----: | :-----: | :----: | :----: |
   * |  **29**  | **20**  |  **9**  | **12** | **11** |
   * | 21 _-x-_ |         | 7 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/justify-content
   */
  justifyContent?: Property.JustifyContent | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2016.
   *
   * **Syntax**: `normal | stretch | <baseline-position> | <overflow-position>? [ <self-position> | left | right ] | legacy | legacy && [ left | right | center ] | anchor-center`
   *
   * **Initial value**: `legacy`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE   |
   * | :----: | :-----: | :----: | :----: | :----: |
   * | **52** | **20**  | **9**  | **12** | **11** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/justify-items
   */
  justifyItems?: Property.JustifyItems | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since October 2017.
   *
   * **Syntax**: `auto | normal | stretch | <baseline-position> | <overflow-position>? [ <self-position> | left | right ] | anchor-center`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox |  Safari  |  Edge  |   IE   |
   * | :----: | :-----: | :------: | :----: | :----: |
   * | **57** | **45**  | **10.1** | **16** | **10** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/justify-self
   */
  justifySelf?: Property.JustifySelf | undefined;
  /**
   * **Syntax**: `[ normal | <content-distribution> | <overflow-position>? [ <content-position> | left | right ] ]#`
   *
   * **Initial value**: `normal`
   */
  justifyTracks?: Property.JustifyTracks | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `auto | <length-percentage> | <anchor()> | <anchor-size()>`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE    |
   * | :----: | :-----: | :----: | :----: | :-----: |
   * | **1**  |  **1**  | **1**  | **12** | **5.5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/left
   */
  left?: Property.Left<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `normal | <length>`
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/letter-spacing
   */
  letterSpacing?: Property.LetterSpacing<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `<color>`
   *
   * **Initial value**: `white`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE    |
   * | :----: | :-----: | :----: | :----: | :-----: |
   * | **5**  |  **3**  | **6**  | **12** | **≤11** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/lighting-color
   */
  lightingColor?: Property.LightingColor | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2020.
   *
   * **Syntax**: `auto | loose | normal | strict | anywhere`
   *
   * **Initial value**: `auto`
   *
   * | Chrome  | Firefox | Safari  |  Edge  |   IE    |
   * | :-----: | :-----: | :-----: | :----: | :-----: |
   * | **58**  | **69**  | **11**  | **14** | **5.5** |
   * | 1 _-x-_ |         | 3 _-x-_ |        |         |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/line-break
   */
  lineBreak?: Property.LineBreak | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `normal | <number> | <length> | <percentage>`
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/line-height
   */
  lineHeight?: Property.LineHeight<TLength> | undefined;
  /**
   * The **`line-height-step`** CSS property sets the step unit for line box heights. When the property is set, line box heights are rounded up to the closest multiple of the unit.
   *
   * **Syntax**: `<length>`
   *
   * **Initial value**: `0`
   */
  lineHeightStep?: Property.LineHeightStep<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `<image> | none`
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/list-style-image
   */
  listStyleImage?: Property.ListStyleImage | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `inside | outside`
   *
   * **Initial value**: `outside`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/list-style-position
   */
  listStylePosition?: Property.ListStylePosition | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `<counter-style> | <string> | none`
   *
   * **Initial value**: `disc`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/list-style-type
   */
  listStyleType?: Property.ListStyleType | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since January 2020.
   *
   * **Syntax**: `<'margin-top'>`
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **69** | **41**  | **12.1** | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/margin-block-end
   */
  marginBlockEnd?: Property.MarginBlockEnd<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since January 2020.
   *
   * **Syntax**: `<'margin-top'>`
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **69** | **41**  | **12.1** | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/margin-block-start
   */
  marginBlockStart?: Property.MarginBlockStart<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `<length-percentage> | auto | <anchor-size()>`
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **3** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/margin-bottom
   */
  marginBottom?: Property.MarginBottom<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since January 2020.
   *
   * **Syntax**: `<'margin-top'>`
   *
   * **Initial value**: `0`
   *
   * |          Chrome          |        Firefox        |          Safari          |  Edge  | IE  |
   * | :----------------------: | :-------------------: | :----------------------: | :----: | :-: |
   * |          **69**          |        **41**         |         **12.1**         | **79** | No  |
   * | 2 _(-webkit-margin-end)_ | 3 _(-moz-margin-end)_ | 3 _(-webkit-margin-end)_ |        |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/margin-inline-end
   */
  marginInlineEnd?: Property.MarginInlineEnd<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since January 2020.
   *
   * **Syntax**: `<'margin-top'>`
   *
   * **Initial value**: `0`
   *
   * |           Chrome           |         Firefox         |           Safari           |  Edge  | IE  |
   * | :------------------------: | :---------------------: | :------------------------: | :----: | :-: |
   * |           **69**           |         **41**          |          **12.1**          | **79** | No  |
   * | 2 _(-webkit-margin-start)_ | 3 _(-moz-margin-start)_ | 3 _(-webkit-margin-start)_ |        |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/margin-inline-start
   */
  marginInlineStart?: Property.MarginInlineStart<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `<length-percentage> | auto | <anchor-size()>`
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **3** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/margin-left
   */
  marginLeft?: Property.MarginLeft<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `<length-percentage> | auto | <anchor-size()>`
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **3** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/margin-right
   */
  marginRight?: Property.MarginRight<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `<length-percentage> | auto | <anchor-size()>`
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **3** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/margin-top
   */
  marginTop?: Property.MarginTop<TLength> | undefined;
  /**
   * This feature is not Baseline because it does not work in some of the most widely-used browsers.
   *
   * **Syntax**: `none | in-flow | all`
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox |  Safari  | Edge | IE  |
   * | :----: | :-----: | :------: | :--: | :-: |
   * |   No   |   No    | **16.4** |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/margin-trim
   */
  marginTrim?: Property.MarginTrim | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since April 2017.
   *
   * **Syntax**: `none | <url>`
   *
   * | Chrome | Firefox | Safari |  Edge   | IE  |
   * | :----: | :-----: | :----: | :-----: | :-: |
   * | **1**  |  **3**  | **4**  | **≤15** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/marker
   */
  marker?: Property.Marker | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since April 2017.
   *
   * **Syntax**: `none | <url>`
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari |  Edge   | IE  |
   * | :----: | :-----: | :----: | :-----: | :-: |
   * | **1**  |  **3**  | **4**  | **≤15** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/marker-end
   */
  markerEnd?: Property.MarkerEnd | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since April 2017.
   *
   * **Syntax**: `none | <url>`
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari |  Edge   | IE  |
   * | :----: | :-----: | :----: | :-----: | :-: |
   * | **1**  |  **3**  | **4**  | **≤15** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/marker-mid
   */
  markerMid?: Property.MarkerMid | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since April 2017.
   *
   * **Syntax**: `none | <url>`
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari |  Edge   | IE  |
   * | :----: | :-----: | :----: | :-----: | :-: |
   * | **1**  |  **3**  | **4**  | **≤15** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/marker-start
   */
  markerStart?: Property.MarkerStart | undefined;
  /**
   * The **`mask-border-mode`** CSS property specifies the blending mode used in a mask border.
   *
   * **Syntax**: `luminance | alpha`
   *
   * **Initial value**: `alpha`
   */
  maskBorderMode?: Property.MaskBorderMode | undefined;
  /**
   * This feature is not Baseline because it does not work in some of the most widely-used browsers.
   *
   * **Syntax**: `[ <length> | <number> ]{1,4}`
   *
   * **Initial value**: `0`
   *
   * |                 Chrome                  | Firefox |                Safari                 |                   Edge                   | IE  |
   * | :-------------------------------------: | :-----: | :-----------------------------------: | :--------------------------------------: | :-: |
   * | **1** _(-webkit-mask-box-image-outset)_ |   No    |               **17.2**                | **79** _(-webkit-mask-box-image-outset)_ | No  |
   * |                                         |         | 3.1 _(-webkit-mask-box-image-outset)_ |                                          |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-border-outset
   */
  maskBorderOutset?: Property.MaskBorderOutset<TLength> | undefined;
  /**
   * This feature is not Baseline because it does not work in some of the most widely-used browsers.
   *
   * **Syntax**: `[ stretch | repeat | round | space ]{1,2}`
   *
   * **Initial value**: `stretch`
   *
   * |                 Chrome                  | Firefox |                Safari                 |                   Edge                   | IE  |
   * | :-------------------------------------: | :-----: | :-----------------------------------: | :--------------------------------------: | :-: |
   * | **1** _(-webkit-mask-box-image-repeat)_ |   No    |               **17.2**                | **79** _(-webkit-mask-box-image-repeat)_ | No  |
   * |                                         |         | 3.1 _(-webkit-mask-box-image-repeat)_ |                                          |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-border-repeat
   */
  maskBorderRepeat?: Property.MaskBorderRepeat | undefined;
  /**
   * This feature is not Baseline because it does not work in some of the most widely-used browsers.
   *
   * **Syntax**: `<number-percentage>{1,4} fill?`
   *
   * **Initial value**: `0`
   *
   * |                 Chrome                 | Firefox |                Safari                |                  Edge                   | IE  |
   * | :------------------------------------: | :-----: | :----------------------------------: | :-------------------------------------: | :-: |
   * | **1** _(-webkit-mask-box-image-slice)_ |   No    |               **17.2**               | **79** _(-webkit-mask-box-image-slice)_ | No  |
   * |                                        |         | 3.1 _(-webkit-mask-box-image-slice)_ |                                         |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-border-slice
   */
  maskBorderSlice?: Property.MaskBorderSlice | undefined;
  /**
   * This feature is not Baseline because it does not work in some of the most widely-used browsers.
   *
   * **Syntax**: `none | <image>`
   *
   * **Initial value**: `none`
   *
   * |                 Chrome                  | Firefox |                Safari                 |                   Edge                   | IE  |
   * | :-------------------------------------: | :-----: | :-----------------------------------: | :--------------------------------------: | :-: |
   * | **1** _(-webkit-mask-box-image-source)_ |   No    |               **17.2**                | **79** _(-webkit-mask-box-image-source)_ | No  |
   * |                                         |         | 3.1 _(-webkit-mask-box-image-source)_ |                                          |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-border-source
   */
  maskBorderSource?: Property.MaskBorderSource | undefined;
  /**
   * This feature is not Baseline because it does not work in some of the most widely-used browsers.
   *
   * **Syntax**: `[ <length-percentage> | <number> | auto ]{1,4}`
   *
   * **Initial value**: `auto`
   *
   * |                 Chrome                 | Firefox |                Safari                |                  Edge                   | IE  |
   * | :------------------------------------: | :-----: | :----------------------------------: | :-------------------------------------: | :-: |
   * | **1** _(-webkit-mask-box-image-width)_ |   No    |               **17.2**               | **79** _(-webkit-mask-box-image-width)_ | No  |
   * |                                        |         | 3.1 _(-webkit-mask-box-image-width)_ |                                         |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-border-width
   */
  maskBorderWidth?: Property.MaskBorderWidth<TLength> | undefined;
  /**
   * Since December 2023, this feature works across the latest devices and browser versions. This feature might not work in older devices or browsers.
   *
   * **Syntax**: `[ <coord-box> | no-clip ]#`
   *
   * **Initial value**: `border-box`
   *
   * | Chrome  | Firefox |  Safari  |   Edge   | IE  |
   * | :-----: | :-----: | :------: | :------: | :-: |
   * | **120** | **53**  | **15.4** | **120**  | No  |
   * | 1 _-x-_ |         | 4 _-x-_  | 79 _-x-_ |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-clip
   */
  maskClip?: Property.MaskClip | undefined;
  /**
   * Since December 2023, this feature works across the latest devices and browser versions. This feature might not work in older devices or browsers.
   *
   * **Syntax**: `<compositing-operator>#`
   *
   * **Initial value**: `add`
   *
   * | Chrome  | Firefox |  Safari  | Edge  | IE  |
   * | :-----: | :-----: | :------: | :---: | :-: |
   * | **120** | **53**  | **15.4** | 18-79 | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-composite
   */
  maskComposite?: Property.MaskComposite | undefined;
  /**
   * Since December 2023, this feature works across the latest devices and browser versions. This feature might not work in older devices or browsers.
   *
   * **Syntax**: `<mask-reference>#`
   *
   * **Initial value**: `none`
   *
   * | Chrome  | Firefox |  Safari  | Edge  | IE  |
   * | :-----: | :-----: | :------: | :---: | :-: |
   * | **120** | **53**  | **15.4** | 16-79 | No  |
   * | 1 _-x-_ |         | 4 _-x-_  |       |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-image
   */
  maskImage?: Property.MaskImage | undefined;
  /**
   * Since December 2023, this feature works across the latest devices and browser versions. This feature might not work in older devices or browsers.
   *
   * **Syntax**: `<masking-mode>#`
   *
   * **Initial value**: `match-source`
   *
   * | Chrome  | Firefox |  Safari  |  Edge   | IE  |
   * | :-----: | :-----: | :------: | :-----: | :-: |
   * | **120** | **53**  | **15.4** | **120** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-mode
   */
  maskMode?: Property.MaskMode | undefined;
  /**
   * Since December 2023, this feature works across the latest devices and browser versions. This feature might not work in older devices or browsers.
   *
   * **Syntax**: `<coord-box>#`
   *
   * **Initial value**: `border-box`
   *
   * | Chrome  | Firefox |  Safari  |   Edge   | IE  |
   * | :-----: | :-----: | :------: | :------: | :-: |
   * | **120** | **53**  | **15.4** | **120**  | No  |
   * | 1 _-x-_ |         | 4 _-x-_  | 79 _-x-_ |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-origin
   */
  maskOrigin?: Property.MaskOrigin | undefined;
  /**
   * Since December 2023, this feature works across the latest devices and browser versions. This feature might not work in older devices or browsers.
   *
   * **Syntax**: `<position>#`
   *
   * **Initial value**: `0% 0%`
   *
   * | Chrome  | Firefox |  Safari   | Edge  | IE  |
   * | :-----: | :-----: | :-------: | :---: | :-: |
   * | **120** | **53**  | **15.4**  | 18-79 | No  |
   * | 1 _-x-_ |         | 3.1 _-x-_ |       |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-position
   */
  maskPosition?: Property.MaskPosition<TLength> | undefined;
  /**
   * Since December 2023, this feature works across the latest devices and browser versions. This feature might not work in older devices or browsers.
   *
   * **Syntax**: `<repeat-style>#`
   *
   * **Initial value**: `repeat`
   *
   * | Chrome  | Firefox |  Safari   | Edge  | IE  |
   * | :-----: | :-----: | :-------: | :---: | :-: |
   * | **120** | **53**  | **15.4**  | 18-79 | No  |
   * | 1 _-x-_ |         | 3.1 _-x-_ |       |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-repeat
   */
  maskRepeat?: Property.MaskRepeat | undefined;
  /**
   * Since December 2023, this feature works across the latest devices and browser versions. This feature might not work in older devices or browsers.
   *
   * **Syntax**: `<bg-size>#`
   *
   * **Initial value**: `auto`
   *
   * | Chrome  | Firefox |  Safari  | Edge  | IE  |
   * | :-----: | :-----: | :------: | :---: | :-: |
   * | **120** | **53**  | **15.4** | 18-79 | No  |
   * | 4 _-x-_ |         | 4 _-x-_  |       |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-size
   */
  maskSize?: Property.MaskSize<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since January 2020.
   *
   * **Syntax**: `luminance | alpha`
   *
   * **Initial value**: `luminance`
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * | **24** | **35**  | **7**  | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-type
   */
  maskType?: Property.MaskType | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since October 2017.
   *
   * **Syntax**: `[ pack | next ] || [ definite-first | ordered ]`
   *
   * **Initial value**: `pack`
   */
  masonryAutoFlow?: Property.MasonryAutoFlow | undefined;
  /**
   * This feature is not Baseline because it does not work in some of the most widely-used browsers.
   *
   * **Syntax**: `auto-add | add(<integer>) | <integer>`
   *
   * **Initial value**: `0`
   *
   * | Chrome  | Firefox | Safari |  Edge   | IE  |
   * | :-----: | :-----: | :----: | :-----: | :-: |
   * | **109** | **117** |   No   | **109** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/math-depth
   */
  mathDepth?: Property.MathDepth | undefined;
  /**
   * This feature is not Baseline because it does not work in some of the most widely-used browsers.
   *
   * **Syntax**: `normal | compact`
   *
   * **Initial value**: `normal`
   *
   * | Chrome  | Firefox | Safari |  Edge   | IE  |
   * | :-----: | :-----: | :----: | :-----: | :-: |
   * | **109** |   No    |   No   | **109** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/math-shift
   */
  mathShift?: Property.MathShift | undefined;
  /**
   * Since August 2023, this feature works across the latest devices and browser versions. This feature might not work in older devices or browsers.
   *
   * **Syntax**: `normal | compact`
   *
   * **Initial value**: `normal`
   *
   * | Chrome  | Firefox |  Safari  |  Edge   | IE  |
   * | :-----: | :-----: | :------: | :-----: | :-: |
   * | **109** | **117** | **14.1** | **109** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/math-style
   */
  mathStyle?: Property.MathStyle | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since January 2020.
   *
   * **Syntax**: `<'max-width'>`
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **57** | **41**  | **12.1** | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/max-block-size
   */
  maxBlockSize?: Property.MaxBlockSize<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `none | <length-percentage [0,∞]> | min-content | max-content | fit-content | fit-content(<length-percentage [0,∞]>) | <calc-size()> | <anchor-size()>`
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari  |  Edge  |  IE   |
   * | :----: | :-----: | :-----: | :----: | :---: |
   * | **1**  |  **1**  | **1.3** | **12** | **7** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/max-height
   */
  maxHeight?: Property.MaxHeight<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since January 2020.
   *
   * **Syntax**: `<'max-width'>`
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox |   Safari   |  Edge  | IE  |
   * | :----: | :-----: | :--------: | :----: | :-: |
   * | **57** | **41**  |  **12.1**  | **79** | No  |
   * |        |         | 10.1 _-x-_ |        |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/max-inline-size
   */
  maxInlineSize?: Property.MaxInlineSize<TLength> | undefined;
  /**
   * **Syntax**: `none | <integer>`
   *
   * **Initial value**: `none`
   */
  maxLines?: Property.MaxLines | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `none | <length-percentage [0,∞]> | min-content | max-content | fit-content | fit-content(<length-percentage [0,∞]>) | <calc-size()> | <anchor-size()>`
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **7** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/max-width
   */
  maxWidth?: Property.MaxWidth<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since January 2020.
   *
   * **Syntax**: `<'min-width'>`
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **57** | **41**  | **12.1** | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/min-block-size
   */
  minBlockSize?: Property.MinBlockSize<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `auto | <length-percentage [0,∞]> | min-content | max-content | fit-content | fit-content(<length-percentage [0,∞]>) | <calc-size()> | <anchor-size()>`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari  |  Edge  |  IE   |
   * | :----: | :-----: | :-----: | :----: | :---: |
   * | **1**  |  **3**  | **1.3** | **12** | **7** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/min-height
   */
  minHeight?: Property.MinHeight<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since January 2020.
   *
   * **Syntax**: `<'min-width'>`
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **57** | **41**  | **12.1** | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/min-inline-size
   */
  minInlineSize?: Property.MinInlineSize<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `auto | <length-percentage [0,∞]> | min-content | max-content | fit-content | fit-content(<length-percentage [0,∞]>) | <calc-size()> | <anchor-size()>`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **7** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/min-width
   */
  minWidth?: Property.MinWidth<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since January 2020.
   *
   * **Syntax**: `<blend-mode> | plus-darker | plus-lighter`
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * | **41** | **32**  | **8**  | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mix-blend-mode
   */
  mixBlendMode?: Property.MixBlendMode | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2022.
   *
   * **Syntax**: `<length-percentage>`
   *
   * **Initial value**: `0`
   *
   * |         Chrome         | Firefox | Safari |  Edge  | IE  |
   * | :--------------------: | :-----: | :----: | :----: | :-: |
   * |         **55**         | **72**  | **16** | **79** | No  |
   * | 46 _(motion-distance)_ |         |        |        |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/offset-distance
   */
  motionDistance?: Property.OffsetDistance<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since March 2022.
   *
   * **Syntax**: `none | <offset-path> || <coord-box>`
   *
   * **Initial value**: `none`
   *
   * |       Chrome       | Firefox |  Safari  |  Edge  | IE  |
   * | :----------------: | :-----: | :------: | :----: | :-: |
   * |       **55**       | **72**  | **15.4** | **79** | No  |
   * | 46 _(motion-path)_ |         |          |        |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/offset-path
   */
  motionPath?: Property.OffsetPath | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2022.
   *
   * **Syntax**: `[ auto | reverse ] || <angle>`
   *
   * **Initial value**: `auto`
   *
   * |         Chrome         | Firefox | Safari |  Edge  | IE  |
   * | :--------------------: | :-----: | :----: | :----: | :-: |
   * |         **56**         | **72**  | **16** | **79** | No  |
   * | 46 _(motion-rotation)_ |         |        |        |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/offset-rotate
   */
  motionRotation?: Property.OffsetRotate | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since January 2020.
   *
   * **Syntax**: `fill | contain | cover | none | scale-down`
   *
   * **Initial value**: `fill`
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * | **32** | **36**  | **10** | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/object-fit
   */
  objectFit?: Property.ObjectFit | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since January 2020.
   *
   * **Syntax**: `<position>`
   *
   * **Initial value**: `50% 50%`
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * | **32** | **36**  | **10** | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/object-position
   */
  objectPosition?: Property.ObjectPosition<TLength> | undefined;
  /**
   * **Syntax**: `none | <basic-shape-rect>`
   *
   * **Initial value**: `none`
   *
   * | Chrome  | Firefox | Safari |  Edge   | IE  |
   * | :-----: | :-----: | :----: | :-----: | :-: |
   * | **104** |   No    |   No   | **104** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/object-view-box
   */
  objectViewBox?: Property.ObjectViewBox | undefined;
  /**
   * Since August 2023, this feature works across the latest devices and browser versions. This feature might not work in older devices or browsers.
   *
   * **Syntax**: `auto | <position>`
   *
   * **Initial value**: `auto`
   *
   * | Chrome  | Firefox | Safari |  Edge   | IE  |
   * | :-----: | :-----: | :----: | :-----: | :-: |
   * | **116** | **72**  | **16** | **116** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/offset-anchor
   */
  offsetAnchor?: Property.OffsetAnchor<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2022.
   *
   * **Syntax**: `<length-percentage>`
   *
   * **Initial value**: `0`
   *
   * |         Chrome         | Firefox | Safari |  Edge  | IE  |
   * | :--------------------: | :-----: | :----: | :----: | :-: |
   * |         **55**         | **72**  | **16** | **79** | No  |
   * | 46 _(motion-distance)_ |         |        |        |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/offset-distance
   */
  offsetDistance?: Property.OffsetDistance<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since March 2022.
   *
   * **Syntax**: `none | <offset-path> || <coord-box>`
   *
   * **Initial value**: `none`
   *
   * |       Chrome       | Firefox |  Safari  |  Edge  | IE  |
   * | :----------------: | :-----: | :------: | :----: | :-: |
   * |       **55**       | **72**  | **15.4** | **79** | No  |
   * | 46 _(motion-path)_ |         |          |        |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/offset-path
   */
  offsetPath?: Property.OffsetPath | undefined;
  /**
   * Since January 2024, this feature works across the latest devices and browser versions. This feature might not work in older devices or browsers.
   *
   * **Syntax**: `normal | auto | <position>`
   *
   * **Initial value**: `normal`
   *
   * | Chrome  | Firefox | Safari |  Edge   | IE  |
   * | :-----: | :-----: | :----: | :-----: | :-: |
   * | **116** | **122** | **16** | **116** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/offset-position
   */
  offsetPosition?: Property.OffsetPosition<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2022.
   *
   * **Syntax**: `[ auto | reverse ] || <angle>`
   *
   * **Initial value**: `auto`
   *
   * |         Chrome         | Firefox | Safari |  Edge  | IE  |
   * | :--------------------: | :-----: | :----: | :----: | :-: |
   * |         **56**         | **72**  | **16** | **79** | No  |
   * | 46 _(motion-rotation)_ |         |        |        |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/offset-rotate
   */
  offsetRotate?: Property.OffsetRotate | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2022.
   *
   * **Syntax**: `[ auto | reverse ] || <angle>`
   *
   * **Initial value**: `auto`
   *
   * |         Chrome         | Firefox | Safari |  Edge  | IE  |
   * | :--------------------: | :-----: | :----: | :----: | :-: |
   * |         **56**         | **72**  | **16** | **79** | No  |
   * | 46 _(motion-rotation)_ |         |        |        |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/offset-rotate
   */
  offsetRotation?: Property.OffsetRotate | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `<opacity-value>`
   *
   * **Initial value**: `1`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **2**  | **12** | **9** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/opacity
   */
  opacity?: Property.Opacity | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2015.
   *
   * **Syntax**: `<integer>`
   *
   * **Initial value**: `0`
   *
   * |  Chrome  | Firefox | Safari  |  Edge  |    IE    |
   * | :------: | :-----: | :-----: | :----: | :------: |
   * |  **29**  | **20**  |  **9**  | **12** |  **11**  |
   * | 21 _-x-_ |         | 7 _-x-_ |        | 10 _-x-_ |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/order
   */
  order?: Property.Order | undefined;
  /**
   * This feature is not Baseline because it does not work in some of the most widely-used browsers.
   *
   * **Syntax**: `<integer>`
   *
   * **Initial value**: `2`
   *
   * | Chrome | Firefox | Safari  |  Edge  |  IE   |
   * | :----: | :-----: | :-----: | :----: | :---: |
   * | **25** |   No    | **1.3** | **12** | **8** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/orphans
   */
  orphans?: Property.Orphans | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `auto | <color>`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari  |  Edge  |  IE   |
   * | :----: | :-----: | :-----: | :----: | :---: |
   * | **1**  | **1.5** | **1.2** | **12** | **8** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/outline-color
   */
  outlineColor?: Property.OutlineColor | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since April 2017.
   *
   * **Syntax**: `<length>`
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari  |  Edge  | IE  |
   * | :----: | :-----: | :-----: | :----: | :-: |
   * | **1**  | **1.5** | **1.2** | **15** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/outline-offset
   */
  outlineOffset?: Property.OutlineOffset<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `auto | <outline-line-style>`
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari  |  Edge  |  IE   |
   * | :----: | :-----: | :-----: | :----: | :---: |
   * | **1**  | **1.5** | **1.2** | **12** | **8** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/outline-style
   */
  outlineStyle?: Property.OutlineStyle | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `<line-width>`
   *
   * **Initial value**: `medium`
   *
   * | Chrome | Firefox | Safari  |  Edge  |  IE   |
   * | :----: | :-----: | :-----: | :----: | :---: |
   * | **1**  | **1.5** | **1.2** | **12** | **8** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/outline-width
   */
  outlineWidth?: Property.OutlineWidth<TLength> | undefined;
  /**
   * This feature is not Baseline because it does not work in some of the most widely-used browsers.
   *
   * **Syntax**: `auto | none`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox |   Safari    |  Edge  | IE  |
   * | :----: | :-----: | :---------: | :----: | :-: |
   * | **56** | **66**  | **preview** | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overflow-anchor
   */
  overflowAnchor?: Property.OverflowAnchor | undefined;
  /**
   * Since September 2025, this feature works across the latest devices and browser versions. This feature might not work in older devices or browsers.
   *
   * **Syntax**: `visible | hidden | clip | scroll | auto`
   *
   * **Initial value**: `auto`
   *
   * | Chrome  | Firefox | Safari |  Edge   | IE  |
   * | :-----: | :-----: | :----: | :-----: | :-: |
   * | **135** | **69**  | **26** | **135** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overflow-block
   */
  overflowBlock?: Property.OverflowBlock | undefined;
  /**
   * **Syntax**: `padding-box | content-box`
   *
   * **Initial value**: `padding-box`
   */
  overflowClipBox?: Property.OverflowClipBox | undefined;
  /**
   * This feature is not Baseline because it does not work in some of the most widely-used browsers.
   *
   * **Syntax**: `<visual-box> || <length [0,∞]>`
   *
   * **Initial value**: `0px`
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * | **90** | **102** |   No   | **90** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overflow-clip-margin
   */
  overflowClipMargin?: Property.OverflowClipMargin<TLength> | undefined;
  /**
   * Since September 2025, this feature works across the latest devices and browser versions. This feature might not work in older devices or browsers.
   *
   * **Syntax**: `visible | hidden | clip | scroll | auto`
   *
   * **Initial value**: `auto`
   *
   * | Chrome  | Firefox | Safari |  Edge   | IE  |
   * | :-----: | :-----: | :----: | :-----: | :-: |
   * | **135** | **69**  | **26** | **135** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overflow-inline
   */
  overflowInline?: Property.OverflowInline | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since October 2018.
   *
   * **Syntax**: `normal | break-word | anywhere`
   *
   * **Initial value**: `normal`
   *
   * |     Chrome      |      Firefox      |     Safari      |       Edge       |          IE           |
   * | :-------------: | :---------------: | :-------------: | :--------------: | :-------------------: |
   * |     **23**      |      **49**       |      **7**      |      **18**      | **5.5** _(word-wrap)_ |
   * | 1 _(word-wrap)_ | 3.5 _(word-wrap)_ | 1 _(word-wrap)_ | 12 _(word-wrap)_ |                       |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overflow-wrap
   */
  overflowWrap?: Property.OverflowWrap | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `visible | hidden | clip | scroll | auto`
   *
   * **Initial value**: `visible`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  | **3.5** | **3**  | **12** | **5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overflow-x
   */
  overflowX?: Property.OverflowX | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `visible | hidden | clip | scroll | auto`
   *
   * **Initial value**: `visible`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  | **3.5** | **3**  | **12** | **5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overflow-y
   */
  overflowY?: Property.OverflowY | undefined;
  /**
   * This feature is not Baseline because it does not work in some of the most widely-used browsers.
   *
   * **Syntax**: `none | auto`
   *
   * **Initial value**: `none`
   *
   * | Chrome  | Firefox | Safari |  Edge   | IE  |
   * | :-----: | :-----: | :----: | :-----: | :-: |
   * | **117** |   No    |   No   | **117** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overlay
   */
  overlay?: Property.Overlay | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2022.
   *
   * **Syntax**: `contain | none | auto`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * | **77** | **73**  | **16** | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overscroll-behavior-block
   */
  overscrollBehaviorBlock?: Property.OverscrollBehaviorBlock | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2022.
   *
   * **Syntax**: `contain | none | auto`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * | **77** | **73**  | **16** | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overscroll-behavior-inline
   */
  overscrollBehaviorInline?: Property.OverscrollBehaviorInline | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2022.
   *
   * **Syntax**: `contain | none | auto`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * | **63** | **59**  | **16** | **18** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overscroll-behavior-x
   */
  overscrollBehaviorX?: Property.OverscrollBehaviorX | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2022.
   *
   * **Syntax**: `contain | none | auto`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * | **63** | **59**  | **16** | **18** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overscroll-behavior-y
   */
  overscrollBehaviorY?: Property.OverscrollBehaviorY | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since January 2020.
   *
   * **Syntax**: `<'padding-top'>`
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **69** | **41**  | **12.1** | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/padding-block-end
   */
  paddingBlockEnd?: Property.PaddingBlockEnd<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since January 2020.
   *
   * **Syntax**: `<'padding-top'>`
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **69** | **41**  | **12.1** | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/padding-block-start
   */
  paddingBlockStart?: Property.PaddingBlockStart<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `<length-percentage [0,∞]>`
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/padding-bottom
   */
  paddingBottom?: Property.PaddingBottom<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since January 2020.
   *
   * **Syntax**: `<'padding-top'>`
   *
   * **Initial value**: `0`
   *
   * |          Chrome           |        Firefox         |          Safari           |  Edge  | IE  |
   * | :-----------------------: | :--------------------: | :-----------------------: | :----: | :-: |
   * |          **69**           |         **41**         |         **12.1**          | **79** | No  |
   * | 2 _(-webkit-padding-end)_ | 3 _(-moz-padding-end)_ | 3 _(-webkit-padding-end)_ |        |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/padding-inline-end
   */
  paddingInlineEnd?: Property.PaddingInlineEnd<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since January 2020.
   *
   * **Syntax**: `<'padding-top'>`
   *
   * **Initial value**: `0`
   *
   * |           Chrome            |         Firefox          |           Safari            |  Edge  | IE  |
   * | :-------------------------: | :----------------------: | :-------------------------: | :----: | :-: |
   * |           **69**            |          **41**          |          **12.1**           | **79** | No  |
   * | 2 _(-webkit-padding-start)_ | 3 _(-moz-padding-start)_ | 3 _(-webkit-padding-start)_ |        |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/padding-inline-start
   */
  paddingInlineStart?: Property.PaddingInlineStart<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `<length-percentage [0,∞]>`
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/padding-left
   */
  paddingLeft?: Property.PaddingLeft<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `<length-percentage [0,∞]>`
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/padding-right
   */
  paddingRight?: Property.PaddingRight<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `<length-percentage [0,∞]>`
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/padding-top
   */
  paddingTop?: Property.PaddingTop<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since February 2023.
   *
   * **Syntax**: `auto | <custom-ident>`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * | **85** | **110** | **1**  | **85** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/page
   */
  page?: Property.Page | undefined;
  /**
   * Since March 2024, this feature works across the latest devices and browser versions. This feature might not work in older devices or browsers.
   *
   * **Syntax**: `normal | [ fill || stroke || markers ]`
   *
   * **Initial value**: `normal`
   *
   * | Chrome  | Firefox | Safari |  Edge   | IE  |
   * | :-----: | :-----: | :----: | :-----: | :-: |
   * | **123** | **60**  | **11** | **123** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/paint-order
   */
  paintOrder?: Property.PaintOrder | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2015.
   *
   * **Syntax**: `none | <length>`
   *
   * **Initial value**: `none`
   *
   * |  Chrome  | Firefox  | Safari  |  Edge  |   IE   |
   * | :------: | :------: | :-----: | :----: | :----: |
   * |  **36**  |  **16**  |  **9**  | **12** | **10** |
   * | 12 _-x-_ | 10 _-x-_ | 4 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/perspective
   */
  perspective?: Property.Perspective<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2015.
   *
   * **Syntax**: `<position>`
   *
   * **Initial value**: `50% 50%`
   *
   * |  Chrome  | Firefox  | Safari  |  Edge  |   IE   |
   * | :------: | :------: | :-----: | :----: | :----: |
   * |  **36**  |  **16**  |  **9**  | **12** | **10** |
   * | 12 _-x-_ | 10 _-x-_ | 4 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/perspective-origin
   */
  perspectiveOrigin?: Property.PerspectiveOrigin<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `auto | none | visiblePainted | visibleFill | visibleStroke | visible | painted | fill | stroke | all | inherit`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE   |
   * | :----: | :-----: | :----: | :----: | :----: |
   * | **1**  | **1.5** | **4**  | **12** | **11** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/pointer-events
   */
  pointerEvents?: Property.PointerEvents | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `static | relative | absolute | sticky | fixed`
   *
   * **Initial value**: `static`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position
   */
  position?: Property.Position | undefined;
  /**
   * This feature is not Baseline because it does not work in some of the most widely-used browsers.
   *
   * **Syntax**: `auto | <anchor-name>`
   *
   * **Initial value**: `auto`
   *
   * | Chrome  |   Firefox   | Safari |  Edge   | IE  |
   * | :-----: | :---------: | :----: | :-----: | :-: |
   * | **125** | **preview** | **26** | **125** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-anchor
   */
  positionAnchor?: Property.PositionAnchor | undefined;
  /**
   * This feature is not Baseline because it does not work in some of the most widely-used browsers.
   *
   * **Syntax**: `none | <position-area>`
   *
   * **Initial value**: `none`
   *
   * | Chrome  |   Firefox   | Safari |  Edge   | IE  |
   * | :-----: | :---------: | :----: | :-----: | :-: |
   * | **129** | **preview** | **26** | **129** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-area
   */
  positionArea?: Property.PositionArea | undefined;
  /**
   * This feature is not Baseline because it does not work in some of the most widely-used browsers.
   *
   * **Syntax**: `none | [ [<dashed-ident> || <try-tactic>] | <'position-area'> ]#`
   *
   * **Initial value**: `none`
   *
   * | Chrome  |   Firefox   | Safari |  Edge   | IE  |
   * | :-----: | :---------: | :----: | :-----: | :-: |
   * | **128** | **preview** | **26** | **128** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-fallbacks
   */
  positionTryFallbacks?: Property.PositionTryFallbacks | undefined;
  /**
   * This feature is not Baseline because it does not work in some of the most widely-used browsers.
   *
   * **Syntax**: `normal | <try-size>`
   *
   * **Initial value**: `normal`
   *
   * | Chrome  | Firefox | Safari |  Edge   | IE  |
   * | :-----: | :-----: | :----: | :-----: | :-: |
   * | **125** |   No    | **26** | **125** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try-order
   */
  positionTryOrder?: Property.PositionTryOrder | undefined;
  /**
   * This feature is not Baseline because it does not work in some of the most widely-used browsers.
   *
   * **Syntax**: `always | [ anchors-valid || anchors-visible || no-overflow ]`
   *
   * **Initial value**: `anchors-visible`
   *
   * | Chrome  |   Firefox   | Safari |  Edge   | IE  |
   * | :-----: | :---------: | :----: | :-----: | :-: |
   * | **125** | **preview** |   No   | **125** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-visibility
   */
  positionVisibility?: Property.PositionVisibility | undefined;
  /**
   * Since May 2025, this feature works across the latest devices and browser versions. This feature might not work in older devices or browsers.
   *
   * **Syntax**: `economy | exact`
   *
   * **Initial value**: `economy`
   *
   * |  Chrome  |       Firefox       |  Safari  |   Edge   | IE  |
   * | :------: | :-----------------: | :------: | :------: | :-: |
   * | **136**  |       **97**        | **15.4** | **136**  | No  |
   * | 17 _-x-_ | 48 _(color-adjust)_ | 6 _-x-_  | 79 _-x-_ |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/print-color-adjust
   */
  printColorAdjust?: Property.PrintColorAdjust | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2015.
   *
   * **Syntax**: `none | auto | [ <string> <string> ]+`
   *
   * **Initial value**: depends on user agent
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **11** | **1.5** | **9**  | **12** | **8** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/quotes
   */
  quotes?: Property.Quotes | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2020.
   *
   * **Syntax**: `<length> | <percentage>`
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * | **43** | **69**  | **9**  | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/r
   */
  r?: Property.R<TLength> | undefined;
  /**
   * This feature is not Baseline because it does not work in some of the most widely-used browsers.
   *
   * **Syntax**: `none | both | horizontal | vertical | block | inline`
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * | **1**  |  **4**  | **3**  | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/resize
   */
  resize?: Property.Resize | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `auto | <length-percentage> | <anchor()> | <anchor-size()>`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE    |
   * | :----: | :-----: | :----: | :----: | :-----: |
   * | **1**  |  **1**  | **1**  | **12** | **5.5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/right
   */
  right?: Property.Right<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since August 2022.
   *
   * **Syntax**: `none | <angle> | [ x | y | z | <number>{3} ] && <angle>`
   *
   * **Initial value**: `none`
   *
   * | Chrome  | Firefox |  Safari  |  Edge   | IE  |
   * | :-----: | :-----: | :------: | :-----: | :-: |
   * | **104** | **72**  | **14.1** | **104** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/rotate
   */
  rotate?: Property.Rotate | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since October 2017.
   *
   * **Syntax**: `normal | <length-percentage>`
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **47** | **52**  | **10.1** | **16** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/row-gap
   */
  rowGap?: Property.RowGap<TLength> | undefined;
  /**
   * Since December 2024, this feature works across the latest devices and browser versions. This feature might not work in older devices or browsers.
   *
   * **Syntax**: `start | center | space-between | space-around`
   *
   * **Initial value**: `space-around`
   *
   * | Chrome  | Firefox |  Safari  |  Edge   | IE  |
   * | :-----: | :-----: | :------: | :-----: | :-: |
   * | **128** | **38**  | **18.2** | **128** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/ruby-align
   */
  rubyAlign?: Property.RubyAlign | undefined;
  /**
   * **Syntax**: `separate | collapse | auto`
   *
   * **Initial value**: `separate`
   */
  rubyMerge?: Property.RubyMerge | undefined;
  /**
   * **Syntax**: `auto | none`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox |  Safari  | Edge | IE  |
   * | :----: | :-----: | :------: | :--: | :-: |
   * |   No   |   No    | **18.2** |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/ruby-overhang
   */
  rubyOverhang?: Property.RubyOverhang | undefined;
  /**
   * Since December 2024, this feature works across the latest devices and browser versions. This feature might not work in older devices or browsers.
   *
   * **Syntax**: `[ alternate || [ over | under ] ] | inter-character`
   *
   * **Initial value**: `alternate`
   *
   * | Chrome  | Firefox |  Safari  | Edge  | IE  |
   * | :-----: | :-----: | :------: | :---: | :-: |
   * | **84**  | **38**  | **18.2** | 12-79 | No  |
   * | 1 _-x-_ |         | 7 _-x-_  |       |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/ruby-position
   */
  rubyPosition?: Property.RubyPosition | undefined;
  /**
   * Since March 2024, this feature works across the latest devices and browser versions. This feature might not work in older devices or browsers.
   *
   * **Syntax**: `<length> | <percentage>`
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **43** | **69**  | **17.4** | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/rx
   */
  rx?: Property.Rx<TLength> | undefined;
  /**
   * Since March 2024, this feature works across the latest devices and browser versions. This feature might not work in older devices or browsers.
   *
   * **Syntax**: `<length> | <percentage>`
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **43** | **69**  | **17.4** | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/ry
   */
  ry?: Property.Ry<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since August 2022.
   *
   * **Syntax**: `none | [ <number> | <percentage> ]{1,3}`
   *
   * **Initial value**: `none`
   *
   * | Chrome  | Firefox |  Safari  |  Edge   | IE  |
   * | :-----: | :-----: | :------: | :-----: | :-: |
   * | **104** | **72**  | **14.1** | **104** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scale
   */
  scale?: Property.Scale | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since March 2022.
   *
   * **Syntax**: `auto | smooth`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **61** | **36**  | **15.4** | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-behavior
   */
  scrollBehavior?: Property.ScrollBehavior | undefined;
  /**
   * **Syntax**: `none | nearest`
   *
   * **Initial value**: `none`
   *
   * | Chrome  | Firefox | Safari |  Edge   | IE  |
   * | :-----: | :-----: | :----: | :-----: | :-: |
   * | **133** |   No    |   No   | **133** | No  |
   */
  scrollInitialTarget?: Property.ScrollInitialTarget | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2021.
   *
   * **Syntax**: `<length>`
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * | **69** | **68**  | **15** | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-margin-block-end
   */
  scrollMarginBlockEnd?: Property.ScrollMarginBlockEnd<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2021.
   *
   * **Syntax**: `<length>`
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * | **69** | **68**  | **15** | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-margin-block-start
   */
  scrollMarginBlockStart?: Property.ScrollMarginBlockStart<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since April 2021.
   *
   * **Syntax**: `<length>`
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox |              Safari              |  Edge  | IE  |
   * | :----: | :-----: | :------------------------------: | :----: | :-: |
   * | **69** | **68**  |             **14.1**             | **79** | No  |
   * |        |         | 11 _(scroll-snap-margin-bottom)_ |        |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-margin-bottom
   */
  scrollMarginBottom?: Property.ScrollMarginBottom<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2021.
   *
   * **Syntax**: `<length>`
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * | **69** | **68**  | **15** | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-margin-inline-end
   */
  scrollMarginInlineEnd?: Property.ScrollMarginInlineEnd<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2021.
   *
   * **Syntax**: `<length>`
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * | **69** | **68**  | **15** | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-margin-inline-start
   */
  scrollMarginInlineStart?: Property.ScrollMarginInlineStart<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since April 2021.
   *
   * **Syntax**: `<length>`
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox |             Safari             |  Edge  | IE  |
   * | :----: | :-----: | :----------------------------: | :----: | :-: |
   * | **69** | **68**  |            **14.1**            | **79** | No  |
   * |        |         | 11 _(scroll-snap-margin-left)_ |        |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-margin-left
   */
  scrollMarginLeft?: Property.ScrollMarginLeft<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since April 2021.
   *
   * **Syntax**: `<length>`
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox |             Safari              |  Edge  | IE  |
   * | :----: | :-----: | :-----------------------------: | :----: | :-: |
   * | **69** | **68**  |            **14.1**             | **79** | No  |
   * |        |         | 11 _(scroll-snap-margin-right)_ |        |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-margin-right
   */
  scrollMarginRight?: Property.ScrollMarginRight<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since April 2021.
   *
   * **Syntax**: `<length>`
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox |            Safari             |  Edge  | IE  |
   * | :----: | :-----: | :---------------------------: | :----: | :-: |
   * | **69** | **68**  |           **14.1**            | **79** | No  |
   * |        |         | 11 _(scroll-snap-margin-top)_ |        |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-margin-top
   */
  scrollMarginTop?: Property.ScrollMarginTop<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2021.
   *
   * **Syntax**: `auto | <length-percentage>`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * | **69** | **68**  | **15** | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-padding-block-end
   */
  scrollPaddingBlockEnd?: Property.ScrollPaddingBlockEnd<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2021.
   *
   * **Syntax**: `auto | <length-percentage>`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * | **69** | **68**  | **15** | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-padding-block-start
   */
  scrollPaddingBlockStart?: Property.ScrollPaddingBlockStart<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since April 2021.
   *
   * **Syntax**: `auto | <length-percentage>`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **69** | **68**  | **14.1** | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-padding-bottom
   */
  scrollPaddingBottom?: Property.ScrollPaddingBottom<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2021.
   *
   * **Syntax**: `auto | <length-percentage>`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * | **69** | **68**  | **15** | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-padding-inline-end
   */
  scrollPaddingInlineEnd?: Property.ScrollPaddingInlineEnd<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2021.
   *
   * **Syntax**: `auto | <length-percentage>`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * | **69** | **68**  | **15** | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-padding-inline-start
   */
  scrollPaddingInlineStart?: Property.ScrollPaddingInlineStart<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since April 2021.
   *
   * **Syntax**: `auto | <length-percentage>`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **69** | **68**  | **14.1** | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-padding-left
   */
  scrollPaddingLeft?: Property.ScrollPaddingLeft<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since April 2021.
   *
   * **Syntax**: `auto | <length-percentage>`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **69** | **68**  | **14.1** | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-padding-right
   */
  scrollPaddingRight?: Property.ScrollPaddingRight<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since April 2021.
   *
   * **Syntax**: `auto | <length-percentage>`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **69** | **68**  | **14.1** | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-padding-top
   */
  scrollPaddingTop?: Property.ScrollPaddingTop<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since January 2020.
   *
   * **Syntax**: `[ none | start | end | center ]{1,2}`
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * | **69** | **68**  | **11** | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-snap-align
   */
  scrollSnapAlign?: Property.ScrollSnapAlign | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since April 2021.
   *
   * **Syntax**: `<length>`
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox |              Safari              |  Edge  | IE  |
   * | :----: | :-----: | :------------------------------: | :----: | :-: |
   * | **69** | **68**  |             **14.1**             | **79** | No  |
   * |        |         | 11 _(scroll-snap-margin-bottom)_ |        |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-margin-bottom
   */
  scrollSnapMarginBottom?: Property.ScrollMarginBottom<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since April 2021.
   *
   * **Syntax**: `<length>`
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox |             Safari             |  Edge  | IE  |
   * | :----: | :-----: | :----------------------------: | :----: | :-: |
   * | **69** | **68**  |            **14.1**            | **79** | No  |
   * |        |         | 11 _(scroll-snap-margin-left)_ |        |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-margin-left
   */
  scrollSnapMarginLeft?: Property.ScrollMarginLeft<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since April 2021.
   *
   * **Syntax**: `<length>`
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox |             Safari              |  Edge  | IE  |
   * | :----: | :-----: | :-----------------------------: | :----: | :-: |
   * | **69** | **68**  |            **14.1**             | **79** | No  |
   * |        |         | 11 _(scroll-snap-margin-right)_ |        |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-margin-right
   */
  scrollSnapMarginRight?: Property.ScrollMarginRight<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since April 2021.
   *
   * **Syntax**: `<length>`
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox |            Safari             |  Edge  | IE  |
   * | :----: | :-----: | :---------------------------: | :----: | :-: |
   * | **69** | **68**  |           **14.1**            | **79** | No  |
   * |        |         | 11 _(scroll-snap-margin-top)_ |        |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-margin-top
   */
  scrollSnapMarginTop?: Property.ScrollMarginTop<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2022.
   *
   * **Syntax**: `normal | always`
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * | **75** | **103** | **15** | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-snap-stop
   */
  scrollSnapStop?: Property.ScrollSnapStop | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since April 2022.
   *
   * **Syntax**: `none | [ x | y | block | inline | both ] [ mandatory | proximity ]?`
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari  |  Edge  |      IE      |
   * | :----: | :-----: | :-----: | :----: | :----------: |
   * | **69** |  39-68  | **11**  | **79** | **10** _-x-_ |
   * |        |         | 9 _-x-_ |        |              |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-snap-type
   */
  scrollSnapType?: Property.ScrollSnapType | undefined;
  /**
   * This feature is not Baseline because it does not work in some of the most widely-used browsers.
   *
   * **Syntax**: `[ block | inline | x | y ]#`
   *
   * **Initial value**: `block`
   *
   * | Chrome  | Firefox | Safari |  Edge   | IE  |
   * | :-----: | :-----: | :----: | :-----: | :-: |
   * | **115** |   No    | **26** | **115** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-timeline-axis
   */
  scrollTimelineAxis?: Property.ScrollTimelineAxis | undefined;
  /**
   * This feature is not Baseline because it does not work in some of the most widely-used browsers.
   *
   * **Syntax**: `[ none | <dashed-ident> ]#`
   *
   * **Initial value**: `none`
   *
   * | Chrome  | Firefox | Safari |  Edge   | IE  |
   * | :-----: | :-----: | :----: | :-----: | :-: |
   * | **115** |   No    | **26** | **115** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-timeline-name
   */
  scrollTimelineName?: Property.ScrollTimelineName | undefined;
  /**
   * This feature is not Baseline because it does not work in some of the most widely-used browsers.
   *
   * **Syntax**: `auto | <color>{2}`
   *
   * **Initial value**: `auto`
   *
   * | Chrome  | Firefox | Safari |  Edge   | IE  |
   * | :-----: | :-----: | :----: | :-----: | :-: |
   * | **121** | **64**  |   No   | **121** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scrollbar-color
   */
  scrollbarColor?: Property.ScrollbarColor | undefined;
  /**
   * Since December 2024, this feature works across the latest devices and browser versions. This feature might not work in older devices or browsers.
   *
   * **Syntax**: `auto | stable && both-edges?`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **94** | **97**  | **18.2** | **94** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scrollbar-gutter
   */
  scrollbarGutter?: Property.ScrollbarGutter | undefined;
  /**
   * Since December 2024, this feature works across the latest devices and browser versions. This feature might not work in older devices or browsers.
   *
   * **Syntax**: `auto | thin | none`
   *
   * **Initial value**: `auto`
   *
   * | Chrome  | Firefox |  Safari  |  Edge   | IE  |
   * | :-----: | :-----: | :------: | :-----: | :-: |
   * | **121** | **64**  | **18.2** | **121** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scrollbar-width
   */
  scrollbarWidth?: Property.ScrollbarWidth | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since January 2020.
   *
   * **Syntax**: `<opacity-value>`
   *
   * **Initial value**: `0.0`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **37** | **62**  | **10.1** | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/shape-image-threshold
   */
  shapeImageThreshold?: Property.ShapeImageThreshold | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since January 2020.
   *
   * **Syntax**: `<length-percentage>`
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **37** | **62**  | **10.1** | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/shape-margin
   */
  shapeMargin?: Property.ShapeMargin<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since January 2020.
   *
   * **Syntax**: `none | [ <shape-box> || <basic-shape> ] | <image>`
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **37** | **62**  | **10.1** | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/shape-outside
   */
  shapeOutside?: Property.ShapeOutside | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since January 2020.
   *
   * **Syntax**: `auto | optimizeSpeed | crispEdges | geometricPrecision`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * | **1**  |  **3**  | **4**  | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/shape-rendering
   */
  shapeRendering?: Property.ShapeRendering | undefined;
  /**
   * **Syntax**: `normal | spell-out || digits || [ literal-punctuation | no-punctuation ]`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox |  Safari  | Edge | IE  |
   * | :----: | :-----: | :------: | :--: | :-: |
   * |   No   |   No    | **11.1** |  No  | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/speak-as
   */
  speakAs?: Property.SpeakAs | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since April 2017.
   *
   * **Syntax**: `<'color'>`
   *
   * **Initial value**: `black`
   *
   * | Chrome | Firefox | Safari |  Edge   | IE  |
   * | :----: | :-----: | :----: | :-----: | :-: |
   * | **1**  |  **3**  | **4**  | **≤15** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/stop-color
   */
  stopColor?: Property.StopColor | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since April 2017.
   *
   * **Syntax**: `<'opacity'>`
   *
   * **Initial value**: `black`
   *
   * | Chrome | Firefox | Safari |  Edge   | IE  |
   * | :----: | :-----: | :----: | :-----: | :-: |
   * | **1**  |  **3**  | **4**  | **≤15** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/stop-opacity
   */
  stopOpacity?: Property.StopOpacity | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since April 2017.
   *
   * **Syntax**: `<paint>`
   *
   * | Chrome | Firefox | Safari |  Edge   | IE  |
   * | :----: | :-----: | :----: | :-----: | :-: |
   * | **1**  | **1.5** | **4**  | **≤15** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/stroke
   */
  stroke?: Property.Stroke | undefined;
  /**
   * **Syntax**: `<color>`
   *
   * **Initial value**: `transparent`
   *
   * | Chrome | Firefox |  Safari  | Edge | IE  |
   * | :----: | :-----: | :------: | :--: | :-: |
   * |   No   |   No    | **11.1** |  No  | No  |
   */
  strokeColor?: Property.StrokeColor | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since April 2017.
   *
   * **Syntax**: `none | <dasharray>`
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari |  Edge   | IE  |
   * | :----: | :-----: | :----: | :-----: | :-: |
   * | **1**  | **1.5** | **4**  | **≤15** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/stroke-dasharray
   */
  strokeDasharray?: Property.StrokeDasharray<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since April 2017.
   *
   * **Syntax**: `<length-percentage> | <number>`
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari |  Edge   | IE  |
   * | :----: | :-----: | :----: | :-----: | :-: |
   * | **1**  | **1.5** | **4**  | **≤15** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/stroke-dashoffset
   */
  strokeDashoffset?: Property.StrokeDashoffset<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since April 2017.
   *
   * **Syntax**: `butt | round | square`
   *
   * **Initial value**: `butt`
   *
   * | Chrome | Firefox | Safari |  Edge   | IE  |
   * | :----: | :-----: | :----: | :-----: | :-: |
   * | **1**  | **1.5** | **4**  | **≤15** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/stroke-linecap
   */
  strokeLinecap?: Property.StrokeLinecap | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since April 2017.
   *
   * **Syntax**: `miter | miter-clip | round | bevel | arcs`
   *
   * **Initial value**: `miter`
   *
   * | Chrome | Firefox | Safari |  Edge   | IE  |
   * | :----: | :-----: | :----: | :-----: | :-: |
   * | **1**  | **1.5** | **4**  | **≤15** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/stroke-linejoin
   */
  strokeLinejoin?: Property.StrokeLinejoin | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since April 2017.
   *
   * **Syntax**: `<number>`
   *
   * **Initial value**: `4`
   *
   * | Chrome | Firefox | Safari |  Edge   | IE  |
   * | :----: | :-----: | :----: | :-----: | :-: |
   * | **1**  | **1.5** | **4**  | **≤15** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/stroke-miterlimit
   */
  strokeMiterlimit?: Property.StrokeMiterlimit | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since April 2017.
   *
   * **Syntax**: `<'opacity'>`
   *
   * **Initial value**: `1`
   *
   * | Chrome | Firefox | Safari |  Edge   | IE  |
   * | :----: | :-----: | :----: | :-----: | :-: |
   * | **1**  | **1.5** | **4**  | **≤15** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/stroke-opacity
   */
  strokeOpacity?: Property.StrokeOpacity | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since April 2017.
   *
   * **Syntax**: `<length-percentage> | <number>`
   *
   * **Initial value**: `1px`
   *
   * | Chrome | Firefox | Safari |  Edge   | IE  |
   * | :----: | :-----: | :----: | :-----: | :-: |
   * | **1**  | **1.5** | **4**  | **≤15** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/stroke-width
   */
  strokeWidth?: Property.StrokeWidth<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since August 2021.
   *
   * **Syntax**: `<integer> | <length>`
   *
   * **Initial value**: `8`
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * | **21** | **91**  | **7**  | **79** | No  |
   * |        | 4 _-x-_ |        |        |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/tab-size
   */
  tabSize?: Property.TabSize<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `auto | fixed`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **14** |  **1**  | **1**  | **12** | **5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/table-layout
   */
  tableLayout?: Property.TableLayout | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `start | end | left | right | center | justify | match-parent`
   *
   * **Initial value**: `start`, or a nameless value that acts as `left` if _direction_ is `ltr`, `right` if _direction_ is `rtl` if `start` is not supported by the browser.
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **3** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-align
   */
  textAlign?: Property.TextAlign | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2022.
   *
   * **Syntax**: `auto | start | end | left | right | center | justify`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE    |
   * | :----: | :-----: | :----: | :----: | :-----: |
   * | **47** | **49**  | **16** | **12** | **5.5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-align-last
   */
  textAlignLast?: Property.TextAlignLast | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since August 2016.
   *
   * **Syntax**: `start | middle | end`
   *
   * **Initial value**: `start`
   *
   * | Chrome | Firefox | Safari |  Edge   | IE  |
   * | :----: | :-----: | :----: | :-----: | :-: |
   * | **1**  |  **3**  | **4**  | **≤14** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-anchor
   */
  textAnchor?: Property.TextAnchor | undefined;
  /**
   * This feature is not Baseline because it does not work in some of the most widely-used browsers.
   *
   * **Syntax**: `normal | <autospace> | auto`
   *
   * **Initial value**: `normal`
   *
   * | Chrome  | Firefox |  Safari  |  Edge   | IE  |
   * | :-----: | :-----: | :------: | :-----: | :-: |
   * | **140** | **145** | **18.4** | **140** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-autospace
   */
  textAutospace?: Property.TextAutospace | undefined;
  /**
   * **Syntax**: `normal | <'text-box-trim'> || <'text-box-edge'>`
   *
   * **Initial value**: `normal`
   *
   * | Chrome  | Firefox |  Safari  |  Edge   | IE  |
   * | :-----: | :-----: | :------: | :-----: | :-: |
   * | **133** |   No    | **18.2** | **133** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-box
   */
  textBox?: Property.TextBox | undefined;
  /**
   * **Syntax**: `auto | <text-edge>`
   *
   * **Initial value**: `auto`
   *
   * | Chrome  | Firefox |  Safari  |  Edge   | IE  |
   * | :-----: | :-----: | :------: | :-----: | :-: |
   * | **133** |   No    | **18.2** | **133** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-box-edge
   */
  textBoxEdge?: Property.TextBoxEdge | undefined;
  /**
   * **Syntax**: `none | trim-start | trim-end | trim-both`
   *
   * **Initial value**: `none`
   *
   * | Chrome  | Firefox |  Safari  |  Edge   | IE  |
   * | :-----: | :-----: | :------: | :-----: | :-: |
   * | **133** |   No    | **18.2** | **133** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-box-trim
   */
  textBoxTrim?: Property.TextBoxTrim | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since March 2022.
   *
   * **Syntax**: `none | all | [ digits <integer>? ]`
   *
   * **Initial value**: `none`
   *
   * |           Chrome           | Firefox |            Safari            |  Edge  |                   IE                   |
   * | :------------------------: | :-----: | :--------------------------: | :----: | :------------------------------------: |
   * |           **48**           | **48**  |           **15.4**           | **79** | **11** _(-ms-text-combine-horizontal)_ |
   * | 9 _(-webkit-text-combine)_ |         | 5.1 _(-webkit-text-combine)_ |        |                                        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-combine-upright
   */
  textCombineUpright?: Property.TextCombineUpright | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since January 2020.
   *
   * **Syntax**: `<color>`
   *
   * **Initial value**: `currentcolor`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **57** | **36**  | **12.1** | **79** | No  |
   * |        |         | 8 _-x-_  |        |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-decoration-color
   */
  textDecorationColor?: Property.TextDecorationColor | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since January 2020.
   *
   * **Syntax**: `none | [ underline || overline || line-through || blink ] | spelling-error | grammar-error`
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **57** | **36**  | **12.1** | **79** | No  |
   * |        |         | 8 _-x-_  |        |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-decoration-line
   */
  textDecorationLine?: Property.TextDecorationLine | undefined;
  /**
   * This feature is not Baseline because it does not work in some of the most widely-used browsers.
   *
   * **Syntax**: `none | [ objects || [ spaces | [ leading-spaces || trailing-spaces ] ] || edges || box-decoration ]`
   *
   * **Initial value**: `objects`
   *
   * | Chrome | Firefox |  Safari  | Edge | IE  |
   * | :----: | :-----: | :------: | :--: | :-: |
   * | 57-64  |   No    | **12.1** |  No  | No  |
   * |        |         | 7 _-x-_  |      |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-decoration-skip
   */
  textDecorationSkip?: Property.TextDecorationSkip | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since March 2022.
   *
   * **Syntax**: `auto | all | none`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **64** | **70**  | **15.4** | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-decoration-skip-ink
   */
  textDecorationSkipInk?: Property.TextDecorationSkipInk | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since January 2020.
   *
   * **Syntax**: `solid | double | dotted | dashed | wavy`
   *
   * **Initial value**: `solid`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **57** | **36**  | **12.1** | **79** | No  |
   * |        |         | 8 _-x-_  |        |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-decoration-style
   */
  textDecorationStyle?: Property.TextDecorationStyle | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since March 2021.
   *
   * **Syntax**: `auto | from-font | <length> | <percentage> `
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **89** | **70**  | **12.1** | **89** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-decoration-thickness
   */
  textDecorationThickness?: Property.TextDecorationThickness<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since March 2022.
   *
   * **Syntax**: `<color>`
   *
   * **Initial value**: `currentcolor`
   *
   * |  Chrome  | Firefox | Safari |   Edge   | IE  |
   * | :------: | :-----: | :----: | :------: | :-: |
   * |  **99**  | **46**  | **7**  |  **99**  | No  |
   * | 25 _-x-_ |         |        | 79 _-x-_ |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-emphasis-color
   */
  textEmphasisColor?: Property.TextEmphasisColor | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since March 2022.
   *
   * **Syntax**: `auto | [ over | under ] && [ right | left ]?`
   *
   * **Initial value**: `auto`
   *
   * |  Chrome  | Firefox | Safari |   Edge   | IE  |
   * | :------: | :-----: | :----: | :------: | :-: |
   * |  **99**  | **46**  | **7**  |  **99**  | No  |
   * | 25 _-x-_ |         |        | 79 _-x-_ |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-emphasis-position
   */
  textEmphasisPosition?: Property.TextEmphasisPosition | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since March 2022.
   *
   * **Syntax**: `none | [ [ filled | open ] || [ dot | circle | double-circle | triangle | sesame ] ] | <string>`
   *
   * **Initial value**: `none`
   *
   * |  Chrome  | Firefox | Safari |   Edge   | IE  |
   * | :------: | :-----: | :----: | :------: | :-: |
   * |  **99**  | **46**  | **7**  |  **99**  | No  |
   * | 25 _-x-_ |         |        | 79 _-x-_ |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-emphasis-style
   */
  textEmphasisStyle?: Property.TextEmphasisStyle | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `<length-percentage> && hanging? && each-line?`
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **3** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-indent
   */
  textIndent?: Property.TextIndent<TLength> | undefined;
  /**
   * This feature is not Baseline because it does not work in some of the most widely-used browsers.
   *
   * **Syntax**: `auto | inter-character | inter-word | none`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari | Edge  |   IE   |
   * | :----: | :-----: | :----: | :---: | :----: |
   * |   No   | **55**  |   No   | 12-79 | **11** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-justify
   */
  textJustify?: Property.TextJustify | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2020.
   *
   * **Syntax**: `mixed | upright | sideways`
   *
   * **Initial value**: `mixed`
   *
   * |  Chrome  | Firefox |  Safari   |  Edge  | IE  |
   * | :------: | :-----: | :-------: | :----: | :-: |
   * |  **48**  | **41**  |  **14**   | **79** | No  |
   * | 12 _-x-_ |         | 5.1 _-x-_ |        |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-orientation
   */
  textOrientation?: Property.TextOrientation | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `[ clip | ellipsis | <string> ]{1,2}`
   *
   * **Initial value**: `clip`
   *
   * | Chrome | Firefox | Safari  |  Edge  |  IE   |
   * | :----: | :-----: | :-----: | :----: | :---: |
   * | **1**  |  **7**  | **1.3** | **12** | **6** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-overflow
   */
  textOverflow?: Property.TextOverflow | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since January 2020.
   *
   * **Syntax**: `auto | optimizeSpeed | optimizeLegibility | geometricPrecision`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * | **4**  |  **1**  | **5**  | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-rendering
   */
  textRendering?: Property.TextRendering | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `none | <shadow-t>#`
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari  |  Edge  |   IE   |
   * | :----: | :-----: | :-----: | :----: | :----: |
   * | **2**  | **3.5** | **1.1** | **12** | **10** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-shadow
   */
  textShadow?: Property.TextShadow | undefined;
  /**
   * This feature is not Baseline because it does not work in some of the most widely-used browsers.
   *
   * **Syntax**: `none | auto | <percentage>`
   *
   * **Initial value**: `auto` for smartphone browsers supporting inflation, `none` in other cases (and then not modifiable).
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * | **54** |   No    |   No   | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-size-adjust
   */
  textSizeAdjust?: Property.TextSizeAdjust | undefined;
  /**
   * This feature is not Baseline because it does not work in some of the most widely-used browsers.
   *
   * **Syntax**: `space-all | normal | space-first | trim-start`
   *
   * **Initial value**: `normal`
   *
   * | Chrome  | Firefox | Safari |  Edge   | IE  |
   * | :-----: | :-----: | :----: | :-----: | :-: |
   * | **123** |   No    |   No   | **123** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-spacing-trim
   */
  textSpacingTrim?: Property.TextSpacingTrim | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `none | [ capitalize | uppercase | lowercase ] || full-width || full-size-kana | math-auto`
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-transform
   */
  textTransform?: Property.TextTransform | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since November 2020.
   *
   * **Syntax**: `auto | <length> | <percentage> `
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **87** | **70**  | **12.1** | **87** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-underline-offset
   */
  textUnderlineOffset?: Property.TextUnderlineOffset<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2020.
   *
   * **Syntax**: `auto | from-font | [ under || [ left | right ] ]`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox |  Safari  |  Edge  |  IE   |
   * | :----: | :-----: | :------: | :----: | :---: |
   * | **33** | **74**  | **12.1** | **12** | **6** |
   * |        |         | 9 _-x-_  |        |       |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-underline-position
   */
  textUnderlinePosition?: Property.TextUnderlinePosition | undefined;
  /**
   * Since October 2024, this feature works across the latest devices and browser versions. This feature might not work in older devices or browsers.
   *
   * **Syntax**: `wrap | nowrap`
   *
   * **Initial value**: `wrap`
   *
   * | Chrome  | Firefox |  Safari  |  Edge   | IE  |
   * | :-----: | :-----: | :------: | :-----: | :-: |
   * | **130** | **124** | **17.4** | **130** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-wrap-mode
   */
  textWrapMode?: Property.TextWrapMode | undefined;
  /**
   * Since October 2024, this feature works across the latest devices and browser versions. This feature might not work in older devices or browsers.
   *
   * **Syntax**: `auto | balance | stable | pretty`
   *
   * **Initial value**: `auto`
   *
   * | Chrome  | Firefox |  Safari  |  Edge   | IE  |
   * | :-----: | :-----: | :------: | :-----: | :-: |
   * | **130** | **124** | **17.5** | **130** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-wrap-style
   */
  textWrapStyle?: Property.TextWrapStyle | undefined;
  /**
   * This feature is not Baseline because it does not work in some of the most widely-used browsers.
   *
   * **Syntax**: `none | <dashed-ident>#`
   *
   * **Initial value**: `none`
   *
   * | Chrome  | Firefox | Safari |  Edge   | IE  |
   * | :-----: | :-----: | :----: | :-----: | :-: |
   * | **116** |   No    | **26** | **116** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/timeline-scope
   */
  timelineScope?: Property.TimelineScope | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `auto | <length-percentage> | <anchor()> | <anchor-size()>`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/top
   */
  top?: Property.Top<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2019.
   *
   * **Syntax**: `auto | none | [ [ pan-x | pan-left | pan-right ] || [ pan-y | pan-up | pan-down ] || pinch-zoom ] | manipulation`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  |    IE    |
   * | :----: | :-----: | :----: | :----: | :------: |
   * | **36** | **52**  | **13** | **12** |  **11**  |
   * |        |         |        |        | 10 _-x-_ |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/touch-action
   */
  touchAction?: Property.TouchAction | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2015.
   *
   * **Syntax**: `none | <transform-list>`
   *
   * **Initial value**: `none`
   *
   * | Chrome  |  Firefox  |  Safari   |  Edge  |   IE    |
   * | :-----: | :-------: | :-------: | :----: | :-----: |
   * | **36**  |  **16**   |   **9**   | **12** | **10**  |
   * | 1 _-x-_ | 3.5 _-x-_ | 3.1 _-x-_ |        | 9 _-x-_ |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/transform
   */
  transform?: Property.Transform | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since January 2020.
   *
   * **Syntax**: `content-box | border-box | fill-box | stroke-box | view-box`
   *
   * **Initial value**: `view-box`
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * | **64** | **55**  | **11** | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/transform-box
   */
  transformBox?: Property.TransformBox | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2015.
   *
   * **Syntax**: `[ <length-percentage> | left | center | right | top | bottom ] | [ [ <length-percentage> | left | center | right ] && [ <length-percentage> | top | center | bottom ] ] <length>?`
   *
   * **Initial value**: `50% 50% 0`
   *
   * | Chrome  |  Firefox  | Safari  |  Edge  |   IE    |
   * | :-----: | :-------: | :-----: | :----: | :-----: |
   * | **36**  |  **16**   |  **9**  | **12** | **10**  |
   * | 1 _-x-_ | 3.5 _-x-_ | 2 _-x-_ |        | 9 _-x-_ |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/transform-origin
   */
  transformOrigin?: Property.TransformOrigin<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2015.
   *
   * **Syntax**: `flat | preserve-3d`
   *
   * **Initial value**: `flat`
   *
   * |  Chrome  | Firefox  | Safari  |  Edge  | IE  |
   * | :------: | :------: | :-----: | :----: | :-: |
   * |  **36**  |  **16**  |  **9**  | **12** | No  |
   * | 12 _-x-_ | 10 _-x-_ | 4 _-x-_ |        |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/transform-style
   */
  transformStyle?: Property.TransformStyle | undefined;
  /**
   * Since August 2024, this feature works across the latest devices and browser versions. This feature might not work in older devices or browsers.
   *
   * **Syntax**: `<transition-behavior-value>#`
   *
   * **Initial value**: `normal`
   *
   * | Chrome  | Firefox |  Safari  |  Edge   | IE  |
   * | :-----: | :-----: | :------: | :-----: | :-: |
   * | **117** | **129** | **17.4** | **117** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/transition-behavior
   */
  transitionBehavior?: Property.TransitionBehavior | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2015.
   *
   * **Syntax**: `<time>#`
   *
   * **Initial value**: `0s`
   *
   * | Chrome  | Firefox | Safari  |  Edge  |   IE   |
   * | :-----: | :-----: | :-----: | :----: | :----: |
   * | **26**  | **16**  |  **9**  | **12** | **10** |
   * | 1 _-x-_ |         | 4 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/transition-delay
   */
  transitionDelay?: Property.TransitionDelay<TTime> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2015.
   *
   * **Syntax**: `<time>#`
   *
   * **Initial value**: `0s`
   *
   * | Chrome  | Firefox |  Safari   |  Edge  |   IE   |
   * | :-----: | :-----: | :-------: | :----: | :----: |
   * | **26**  | **16**  |   **9**   | **12** | **10** |
   * | 1 _-x-_ |         | 3.1 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/transition-duration
   */
  transitionDuration?: Property.TransitionDuration<TTime> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2015.
   *
   * **Syntax**: `none | <single-transition-property>#`
   *
   * **Initial value**: all
   *
   * | Chrome  | Firefox |  Safari   |  Edge  |   IE   |
   * | :-----: | :-----: | :-------: | :----: | :----: |
   * | **26**  | **16**  |   **9**   | **12** | **10** |
   * | 1 _-x-_ |         | 3.1 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/transition-property
   */
  transitionProperty?: Property.TransitionProperty | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2015.
   *
   * **Syntax**: `<easing-function>#`
   *
   * **Initial value**: `ease`
   *
   * | Chrome  | Firefox |  Safari   |  Edge  |   IE   |
   * | :-----: | :-----: | :-------: | :----: | :----: |
   * | **26**  | **16**  |   **9**   | **12** | **10** |
   * | 1 _-x-_ |         | 3.1 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/transition-timing-function
   */
  transitionTimingFunction?: Property.TransitionTimingFunction | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since August 2022.
   *
   * **Syntax**: `none | <length-percentage> [ <length-percentage> <length>? ]?`
   *
   * **Initial value**: `none`
   *
   * | Chrome  | Firefox |  Safari  |  Edge   | IE  |
   * | :-----: | :-----: | :------: | :-----: | :-: |
   * | **104** | **72**  | **14.1** | **104** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/translate
   */
  translate?: Property.Translate<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `normal | embed | isolate | bidi-override | isolate-override | plaintext`
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari  |  Edge  |   IE    |
   * | :----: | :-----: | :-----: | :----: | :-----: |
   * | **2**  |  **1**  | **1.3** | **12** | **5.5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/unicode-bidi
   */
  unicodeBidi?: Property.UnicodeBidi | undefined;
  /**
   * This feature is not Baseline because it does not work in some of the most widely-used browsers.
   *
   * **Syntax**: `auto | text | none | all`
   *
   * **Initial value**: `auto`
   *
   * | Chrome  | Firefox |   Safari    |   Edge   |      IE      |
   * | :-----: | :-----: | :---------: | :------: | :----------: |
   * | **54**  | **69**  | **3** _-x-_ |  **79**  | **10** _-x-_ |
   * | 1 _-x-_ | 1 _-x-_ |             | 12 _-x-_ |              |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/user-select
   */
  userSelect?: Property.UserSelect | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since January 2020.
   *
   * **Syntax**: `none | non-scaling-stroke | non-scaling-size | non-rotation | fixed-position`
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox | Safari  |  Edge  | IE  |
   * | :----: | :-----: | :-----: | :----: | :-: |
   * | **6**  | **15**  | **5.1** | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/vector-effect
   */
  vectorEffect?: Property.VectorEffect | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `baseline | sub | super | text-top | text-bottom | middle | top | bottom | <percentage> | <length>`
   *
   * **Initial value**: `baseline`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/vertical-align
   */
  verticalAlign?: Property.VerticalAlign<TLength> | undefined;
  /**
   * This feature is not Baseline because it does not work in some of the most widely-used browsers.
   *
   * **Syntax**: `[ block | inline | x | y ]#`
   *
   * **Initial value**: `block`
   *
   * | Chrome  | Firefox | Safari |  Edge   | IE  |
   * | :-----: | :-----: | :----: | :-----: | :-: |
   * | **115** |   No    | **26** | **115** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/view-timeline-axis
   */
  viewTimelineAxis?: Property.ViewTimelineAxis | undefined;
  /**
   * This feature is not Baseline because it does not work in some of the most widely-used browsers.
   *
   * **Syntax**: `[ [ auto | <length-percentage> ]{1,2} ]#`
   *
   * **Initial value**: `auto`
   *
   * | Chrome  | Firefox | Safari |  Edge   | IE  |
   * | :-----: | :-----: | :----: | :-----: | :-: |
   * | **115** |   No    | **26** | **115** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/view-timeline-inset
   */
  viewTimelineInset?: Property.ViewTimelineInset<TLength> | undefined;
  /**
   * This feature is not Baseline because it does not work in some of the most widely-used browsers.
   *
   * **Syntax**: `[ none | <dashed-ident> ]#`
   *
   * **Initial value**: `none`
   *
   * | Chrome  | Firefox | Safari |  Edge   | IE  |
   * | :-----: | :-----: | :----: | :-----: | :-: |
   * | **115** |   No    | **26** | **115** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/view-timeline-name
   */
  viewTimelineName?: Property.ViewTimelineName | undefined;
  /**
   * **Syntax**: `none | <custom-ident>+`
   *
   * **Initial value**: `none`
   *
   * | Chrome  | Firefox |  Safari  |  Edge   | IE  |
   * | :-----: | :-----: | :------: | :-----: | :-: |
   * | **125** | **144** | **18.2** | **125** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/view-transition-class
   */
  viewTransitionClass?: Property.ViewTransitionClass | undefined;
  /**
   * Since October 2025, this feature works across the latest devices and browser versions. This feature might not work in older devices or browsers.
   *
   * **Syntax**: `none | <custom-ident> | match-element`
   *
   * **Initial value**: `none`
   *
   * | Chrome  | Firefox | Safari |  Edge   | IE  |
   * | :-----: | :-----: | :----: | :-----: | :-: |
   * | **111** | **144** | **18** | **111** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/view-transition-name
   */
  viewTransitionName?: Property.ViewTransitionName | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `visible | hidden | collapse`
   *
   * **Initial value**: `visible`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/visibility
   */
  visibility?: Property.Visibility | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `normal | pre | pre-wrap | pre-line | <'white-space-collapse'> || <'text-wrap-mode'>`
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE    |
   * | :----: | :-----: | :----: | :----: | :-----: |
   * | **1**  |  **1**  | **1**  | **12** | **5.5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/white-space
   */
  whiteSpace?: Property.WhiteSpace | undefined;
  /**
   * Since March 2024, this feature works across the latest devices and browser versions. This feature might not work in older devices or browsers.
   *
   * **Syntax**: `collapse | preserve | preserve-breaks | preserve-spaces | break-spaces`
   *
   * **Initial value**: `collapse`
   *
   * | Chrome  | Firefox |  Safari  |  Edge   | IE  |
   * | :-----: | :-----: | :------: | :-----: | :-: |
   * | **114** | **124** | **17.4** | **114** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/white-space-collapse
   */
  whiteSpaceCollapse?: Property.WhiteSpaceCollapse | undefined;
  /**
   * This feature is not Baseline because it does not work in some of the most widely-used browsers.
   *
   * **Syntax**: `<integer>`
   *
   * **Initial value**: `2`
   *
   * | Chrome | Firefox | Safari  |  Edge  |  IE   |
   * | :----: | :-----: | :-----: | :----: | :---: |
   * | **25** |   No    | **1.3** | **12** | **8** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/widows
   */
  widows?: Property.Widows | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `auto | <length-percentage [0,∞]> | min-content | max-content | fit-content | fit-content(<length-percentage [0,∞]>) | <calc-size()> | <anchor-size()>`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/width
   */
  width?: Property.Width<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since January 2020.
   *
   * **Syntax**: `auto | <animateable-feature>#`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari  |  Edge  | IE  |
   * | :----: | :-----: | :-----: | :----: | :-: |
   * | **36** | **36**  | **9.1** | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/will-change
   */
  willChange?: Property.WillChange | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `normal | break-all | keep-all | break-word | auto-phrase`
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE    |
   * | :----: | :-----: | :----: | :----: | :-----: |
   * | **1**  | **15**  | **3**  | **12** | **5.5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/word-break
   */
  wordBreak?: Property.WordBreak | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `normal | <length>`
   *
   * **Initial value**: `normal`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **6** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/word-spacing
   */
  wordSpacing?: Property.WordSpacing<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since October 2018.
   *
   * **Syntax**: `normal | break-word`
   *
   * **Initial value**: `normal`
   */
  wordWrap?: Property.WordWrap | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since March 2017.
   *
   * **Syntax**: `horizontal-tb | vertical-rl | vertical-lr | sideways-rl | sideways-lr`
   *
   * **Initial value**: `horizontal-tb`
   *
   * | Chrome  | Firefox |  Safari   |  Edge  |  IE   |
   * | :-----: | :-----: | :-------: | :----: | :---: |
   * | **48**  | **41**  | **10.1**  | **12** | **9** |
   * | 8 _-x-_ |         | 5.1 _-x-_ |        |       |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/writing-mode
   */
  writingMode?: Property.WritingMode | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2020.
   *
   * **Syntax**: `<length> | <percentage>`
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * | **42** | **69**  | **9**  | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/x
   */
  x?: Property.X<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2020.
   *
   * **Syntax**: `<length> | <percentage>`
   *
   * **Initial value**: `0`
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * | **42** | **69**  | **9**  | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/y
   */
  y?: Property.Y<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `auto | <integer>`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/z-index
   */
  zIndex?: Property.ZIndex | undefined;
  /**
   * Since May 2024, this feature works across the latest devices and browser versions. This feature might not work in older devices or browsers.
   *
   * **Syntax**: `normal | reset | <number [0,∞]> || <percentage [0,∞]>`
   *
   * **Initial value**: `1`
   *
   * | Chrome | Firefox | Safari  |  Edge  |   IE    |
   * | :----: | :-----: | :-----: | :----: | :-----: |
   * | **1**  | **126** | **3.1** | **12** | **5.5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/zoom
   */
  zoom?: Property.Zoom | undefined;
}

export interface StandardShorthandProperties<TLength = (string & {}) | 0, TTime = string & {}> {
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since January 2020.
   *
   * **Syntax**: `initial | inherit | unset | revert | revert-layer`
   *
   * **Initial value**: There is no practical initial value for it.
   *
   * | Chrome | Firefox | Safari  |  Edge  | IE  |
   * | :----: | :-----: | :-----: | :----: | :-: |
   * | **37** | **27**  | **9.1** | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/all
   */
  all?: Property.All | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2015.
   *
   * **Syntax**: `<single-animation>#`
   *
   * | Chrome  | Firefox | Safari  |  Edge  |   IE   |
   * | :-----: | :-----: | :-----: | :----: | :----: |
   * | **43**  | **16**  |  **9**  | **12** | **10** |
   * | 3 _-x-_ | 5 _-x-_ | 4 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation
   */
  animation?: Property.Animation<TTime> | undefined;
  /**
   * This feature is not Baseline because it does not work in some of the most widely-used browsers.
   *
   * **Syntax**: `[ <'animation-range-start'> <'animation-range-end'>? ]#`
   *
   * | Chrome  | Firefox | Safari |  Edge   | IE  |
   * | :-----: | :-----: | :----: | :-----: | :-: |
   * | **115** |   No    | **26** | **115** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/animation-range
   */
  animationRange?: Property.AnimationRange<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `<bg-layer>#? , <final-bg-layer>`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background
   */
  background?: Property.Background<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `<bg-position>#`
   *
   * **Initial value**: `0% 0%`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/background-position
   */
  backgroundPosition?: Property.BackgroundPosition<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `<line-width> || <line-style> || <color>`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border
   */
  border?: Property.Border<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since April 2021.
   *
   * **Syntax**: `<'border-block-start'>`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **87** | **66**  | **14.1** | **87** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block
   */
  borderBlock?: Property.BorderBlock<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since April 2021.
   *
   * **Syntax**: `<'border-top-color'>{1,2}`
   *
   * **Initial value**: `currentcolor`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **87** | **66**  | **14.1** | **87** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block-color
   */
  borderBlockColor?: Property.BorderBlockColor | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since January 2020.
   *
   * **Syntax**: `<'border-top-width'> || <'border-top-style'> || <color>`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **69** | **41**  | **12.1** | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block-end
   */
  borderBlockEnd?: Property.BorderBlockEnd<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since January 2020.
   *
   * **Syntax**: `<'border-top-width'> || <'border-top-style'> || <color>`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **69** | **41**  | **12.1** | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block-start
   */
  borderBlockStart?: Property.BorderBlockStart<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since April 2021.
   *
   * **Syntax**: `<'border-top-style'>{1,2}`
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **87** | **66**  | **14.1** | **87** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block-style
   */
  borderBlockStyle?: Property.BorderBlockStyle | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since April 2021.
   *
   * **Syntax**: `<'border-top-width'>{1,2}`
   *
   * **Initial value**: `medium`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **87** | **66**  | **14.1** | **87** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-block-width
   */
  borderBlockWidth?: Property.BorderBlockWidth<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `<line-width> || <line-style> || <color>`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-bottom
   */
  borderBottom?: Property.BorderBottom<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `<color>{1,4}`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-color
   */
  borderColor?: Property.BorderColor | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `<'border-image-source'> || <'border-image-slice'> [ / <'border-image-width'> | / <'border-image-width'>? / <'border-image-outset'> ]? || <'border-image-repeat'>`
   *
   * | Chrome  |  Firefox  | Safari  |  Edge  |   IE   |
   * | :-----: | :-------: | :-----: | :----: | :----: |
   * | **16**  |  **15**   |  **6**  | **12** | **11** |
   * | 7 _-x-_ | 3.5 _-x-_ | 3 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-image
   */
  borderImage?: Property.BorderImage | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since April 2021.
   *
   * **Syntax**: `<'border-block-start'>`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **87** | **66**  | **14.1** | **87** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline
   */
  borderInline?: Property.BorderInline<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since April 2021.
   *
   * **Syntax**: `<'border-top-color'>{1,2}`
   *
   * **Initial value**: `currentcolor`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **87** | **66**  | **14.1** | **87** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline-color
   */
  borderInlineColor?: Property.BorderInlineColor | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since January 2020.
   *
   * **Syntax**: `<'border-top-width'> || <'border-top-style'> || <color>`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **69** | **41**  | **12.1** | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline-end
   */
  borderInlineEnd?: Property.BorderInlineEnd<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since January 2020.
   *
   * **Syntax**: `<'border-top-width'> || <'border-top-style'> || <color>`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **69** | **41**  | **12.1** | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline-start
   */
  borderInlineStart?: Property.BorderInlineStart<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since April 2021.
   *
   * **Syntax**: `<'border-top-style'>{1,2}`
   *
   * **Initial value**: `none`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **87** | **66**  | **14.1** | **87** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline-style
   */
  borderInlineStyle?: Property.BorderInlineStyle | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since April 2021.
   *
   * **Syntax**: `<'border-top-width'>{1,2}`
   *
   * **Initial value**: `medium`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **87** | **66**  | **14.1** | **87** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-inline-width
   */
  borderInlineWidth?: Property.BorderInlineWidth<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `<line-width> || <line-style> || <color>`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-left
   */
  borderLeft?: Property.BorderLeft<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `<length-percentage [0,∞]>{1,4} [ / <length-percentage [0,∞]>{1,4} ]?`
   *
   * | Chrome  | Firefox | Safari  |  Edge  |  IE   |
   * | :-----: | :-----: | :-----: | :----: | :---: |
   * |  **4**  |  **4**  |  **5**  | **12** | **9** |
   * | 1 _-x-_ |         | 3 _-x-_ |        |       |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-radius
   */
  borderRadius?: Property.BorderRadius<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `<line-width> || <line-style> || <color>`
   *
   * | Chrome | Firefox | Safari |  Edge  |   IE    |
   * | :----: | :-----: | :----: | :----: | :-----: |
   * | **1**  |  **1**  | **1**  | **12** | **5.5** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-right
   */
  borderRight?: Property.BorderRight<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `<line-style>{1,4}`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-style
   */
  borderStyle?: Property.BorderStyle | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `<line-width> || <line-style> || <color>`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-top
   */
  borderTop?: Property.BorderTop<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `<line-width>{1,4}`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/border-width
   */
  borderWidth?: Property.BorderWidth<TLength> | undefined;
  /** **Syntax**: `<'caret-color'> || <'caret-shape'>` */
  caret?: Property.Caret | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since March 2017.
   *
   * **Syntax**: `<'column-rule-width'> || <'column-rule-style'> || <'column-rule-color'>`
   *
   * | Chrome  | Firefox | Safari  |  Edge  |   IE   |
   * | :-----: | :-----: | :-----: | :----: | :----: |
   * | **50**  | **52**  |  **9**  | **12** | **10** |
   * | 1 _-x-_ |         | 3 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/column-rule
   */
  columnRule?: Property.ColumnRule<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since March 2017.
   *
   * **Syntax**: `<'column-width'> || <'column-count'>`
   *
   * | Chrome | Firefox | Safari  |  Edge  |   IE   |
   * | :----: | :-----: | :-----: | :----: | :----: |
   * | **50** | **52**  |  **9**  | **12** | **10** |
   * |        |         | 3 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/columns
   */
  columns?: Property.Columns<TLength> | undefined;
  /**
   * Since September 2023, this feature works across the latest devices and browser versions. This feature might not work in older devices or browsers.
   *
   * **Syntax**: `[ auto? [ none | <length> ] ]{1,2}`
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * | **83** | **107** | **17** | **83** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/contain-intrinsic-size
   */
  containIntrinsicSize?: Property.ContainIntrinsicSize<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since February 2023.
   *
   * **Syntax**: `<'container-name'> [ / <'container-type'> ]?`
   *
   * | Chrome  | Firefox | Safari |  Edge   | IE  |
   * | :-----: | :-----: | :----: | :-----: | :-: |
   * | **105** | **110** | **16** | **105** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/container
   */
  container?: Property.Container | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2015.
   *
   * **Syntax**: `none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]`
   *
   * |  Chrome  | Firefox | Safari  |  Edge  |    IE    |
   * | :------: | :-----: | :-----: | :----: | :------: |
   * |  **29**  | **22**  |  **9**  | **12** |  **11**  |
   * | 21 _-x-_ |         | 7 _-x-_ |        | 10 _-x-_ |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/flex
   */
  flex?: Property.Flex<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2015.
   *
   * **Syntax**: `<'flex-direction'> || <'flex-wrap'>`
   *
   * |  Chrome  | Firefox | Safari  |  Edge  |   IE   |
   * | :------: | :-----: | :-----: | :----: | :----: |
   * |  **29**  | **28**  |  **9**  | **12** | **11** |
   * | 21 _-x-_ |         | 7 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/flex-flow
   */
  flexFlow?: Property.FlexFlow | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `[ [ <'font-style'> || <font-variant-css2> || <'font-weight'> || <font-width-css3> ]? <'font-size'> [ / <'line-height'> ]? <'font-family'># ] | <system-family-name>`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **3** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/font
   */
  font?: Property.Font | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since October 2017.
   *
   * **Syntax**: `<'row-gap'> <'column-gap'>?`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **57** | **52**  | **10.1** | **16** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/gap
   */
  gap?: Property.Gap<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since October 2017.
   *
   * **Syntax**: `<'grid-template'> | <'grid-template-rows'> / [ auto-flow && dense? ] <'grid-auto-columns'>? | [ auto-flow && dense? ] <'grid-auto-rows'>? / <'grid-template-columns'>`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **57** | **52**  | **10.1** | **16** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid
   */
  grid?: Property.Grid | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since October 2017.
   *
   * **Syntax**: `<grid-line> [ / <grid-line> ]{0,3}`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **57** | **52**  | **10.1** | **16** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-area
   */
  gridArea?: Property.GridArea | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since October 2017.
   *
   * **Syntax**: `<grid-line> [ / <grid-line> ]?`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **57** | **52**  | **10.1** | **16** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-column
   */
  gridColumn?: Property.GridColumn | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since October 2017.
   *
   * **Syntax**: `<grid-line> [ / <grid-line> ]?`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **57** | **52**  | **10.1** | **16** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-row
   */
  gridRow?: Property.GridRow | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since October 2017.
   *
   * **Syntax**: `none | [ <'grid-template-rows'> / <'grid-template-columns'> ] | [ <line-names>? <string> <track-size>? <line-names>? ]+ [ / <explicit-track-list> ]?`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **57** | **52**  | **10.1** | **16** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/grid-template
   */
  gridTemplate?: Property.GridTemplate | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since April 2021.
   *
   * **Syntax**: `<'top'>{1,4}`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **87** | **66**  | **14.1** | **87** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset
   */
  inset?: Property.Inset<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since April 2021.
   *
   * **Syntax**: `<'top'>{1,2}`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **87** | **63**  | **14.1** | **87** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset-block
   */
  insetBlock?: Property.InsetBlock<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since April 2021.
   *
   * **Syntax**: `<'top'>{1,2}`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **87** | **63**  | **14.1** | **87** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/inset-inline
   */
  insetInline?: Property.InsetInline<TLength> | undefined;
  /**
   * This feature is not Baseline because it does not work in some of the most widely-used browsers.
   *
   * **Syntax**: `none | <integer>`
   *
   * **Initial value**: `none`
   *
   * |   Chrome    |   Firefox    |  Safari   |     Edge     | IE  |
   * | :---------: | :----------: | :-------: | :----------: | :-: |
   * | **6** _-x-_ | **68** _-x-_ | 18.2-18.4 | **17** _-x-_ | No  |
   * |             |              |  5 _-x-_  |              |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/line-clamp
   */
  lineClamp?: Property.LineClamp | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `<'list-style-type'> || <'list-style-position'> || <'list-style-image'>`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/list-style
   */
  listStyle?: Property.ListStyle | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `<'margin-top'>{1,4}`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **3** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/margin
   */
  margin?: Property.Margin<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since April 2021.
   *
   * **Syntax**: `<'margin-top'>{1,2}`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **87** | **66**  | **14.1** | **87** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/margin-block
   */
  marginBlock?: Property.MarginBlock<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since April 2021.
   *
   * **Syntax**: `<'margin-top'>{1,2}`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **87** | **66**  | **14.1** | **87** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/margin-inline
   */
  marginInline?: Property.MarginInline<TLength> | undefined;
  /**
   * Since December 2023, this feature works across the latest devices and browser versions. This feature might not work in older devices or browsers.
   *
   * **Syntax**: `<mask-layer>#`
   *
   * | Chrome  | Firefox |  Safari   | Edge  | IE  |
   * | :-----: | :-----: | :-------: | :---: | :-: |
   * | **120** | **53**  | **15.4**  | 12-79 | No  |
   * | 1 _-x-_ |         | 3.1 _-x-_ |       |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask
   */
  mask?: Property.Mask<TLength> | undefined;
  /**
   * This feature is not Baseline because it does not work in some of the most widely-used browsers.
   *
   * **Syntax**: `<'mask-border-source'> || <'mask-border-slice'> [ / <'mask-border-width'>? [ / <'mask-border-outset'> ]? ]? || <'mask-border-repeat'> || <'mask-border-mode'>`
   *
   * |              Chrome              | Firefox |             Safari             |               Edge                | IE  |
   * | :------------------------------: | :-----: | :----------------------------: | :-------------------------------: | :-: |
   * | **1** _(-webkit-mask-box-image)_ |   No    |            **17.2**            | **79** _(-webkit-mask-box-image)_ | No  |
   * |                                  |         | 3.1 _(-webkit-mask-box-image)_ |                                   |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/mask-border
   */
  maskBorder?: Property.MaskBorder | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2022.
   *
   * **Syntax**: `[ <'offset-position'>? [ <'offset-path'> [ <'offset-distance'> || <'offset-rotate'> ]? ]? ]! [ / <'offset-anchor'> ]?`
   *
   * |    Chrome     | Firefox | Safari |  Edge  | IE  |
   * | :-----------: | :-----: | :----: | :----: | :-: |
   * |    **55**     | **72**  | **16** | **79** | No  |
   * | 46 _(motion)_ |         |        |        |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/offset
   */
  motion?: Property.Offset<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2022.
   *
   * **Syntax**: `[ <'offset-position'>? [ <'offset-path'> [ <'offset-distance'> || <'offset-rotate'> ]? ]? ]! [ / <'offset-anchor'> ]?`
   *
   * |    Chrome     | Firefox | Safari |  Edge  | IE  |
   * | :-----------: | :-----: | :----: | :----: | :-: |
   * |    **55**     | **72**  | **16** | **79** | No  |
   * | 46 _(motion)_ |         |        |        |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/offset
   */
  offset?: Property.Offset<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since March 2023.
   *
   * **Syntax**: `<'outline-width'> || <'outline-style'> || <'outline-color'>`
   *
   * | Chrome | Firefox |  Safari  |  Edge  |  IE   |
   * | :----: | :-----: | :------: | :----: | :---: |
   * | **94** | **88**  | **16.4** | **94** | **8** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/outline
   */
  outline?: Property.Outline<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `[ visible | hidden | clip | scroll | auto ]{1,2}`
   *
   * **Initial value**: `visible`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overflow
   */
  overflow?: Property.Overflow | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2022.
   *
   * **Syntax**: `[ contain | none | auto ]{1,2}`
   *
   * **Initial value**: `auto`
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * | **63** | **59**  | **16** | **18** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/overscroll-behavior
   */
  overscrollBehavior?: Property.OverscrollBehavior | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `<'padding-top'>{1,4}`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **4** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/padding
   */
  padding?: Property.Padding<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since April 2021.
   *
   * **Syntax**: `<'padding-top'>{1,2}`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **87** | **66**  | **14.1** | **87** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/padding-block
   */
  paddingBlock?: Property.PaddingBlock<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since April 2021.
   *
   * **Syntax**: `<'padding-top'>{1,2}`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **87** | **66**  | **14.1** | **87** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/padding-inline
   */
  paddingInline?: Property.PaddingInline<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since January 2020.
   *
   * **Syntax**: `<'align-content'> <'justify-content'>?`
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * | **59** | **45**  | **9**  | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/place-content
   */
  placeContent?: Property.PlaceContent | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since January 2020.
   *
   * **Syntax**: `<'align-items'> <'justify-items'>?`
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * | **59** | **45**  | **11** | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/place-items
   */
  placeItems?: Property.PlaceItems | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since January 2020.
   *
   * **Syntax**: `<'align-self'> <'justify-self'>?`
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * | **59** | **45**  | **11** | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/place-self
   */
  placeSelf?: Property.PlaceSelf | undefined;
  /**
   * This feature is not Baseline because it does not work in some of the most widely-used browsers.
   *
   * **Syntax**: `<'position-try-order'>? <'position-try-fallbacks'>`
   *
   * | Chrome  |   Firefox   | Safari |  Edge   | IE  |
   * | :-----: | :---------: | :----: | :-----: | :-: |
   * | **125** | **preview** | **26** | **125** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/position-try
   */
  positionTry?: Property.PositionTry | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2021.
   *
   * **Syntax**: `<length>{1,4}`
   *
   * | Chrome | Firefox |          Safari           |  Edge  | IE  |
   * | :----: | :-----: | :-----------------------: | :----: | :-: |
   * | **69** | **90**  |         **14.1**          | **79** | No  |
   * |        |         | 11 _(scroll-snap-margin)_ |        |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-margin
   */
  scrollMargin?: Property.ScrollMargin<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2021.
   *
   * **Syntax**: `<length>{1,2}`
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * | **69** | **68**  | **15** | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-margin-block
   */
  scrollMarginBlock?: Property.ScrollMarginBlock<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2021.
   *
   * **Syntax**: `<length>{1,2}`
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * | **69** | **68**  | **15** | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-margin-inline
   */
  scrollMarginInline?: Property.ScrollMarginInline<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since April 2021.
   *
   * **Syntax**: `[ auto | <length-percentage> ]{1,4}`
   *
   * | Chrome | Firefox |  Safari  |  Edge  | IE  |
   * | :----: | :-----: | :------: | :----: | :-: |
   * | **69** | **68**  | **14.1** | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-padding
   */
  scrollPadding?: Property.ScrollPadding<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2021.
   *
   * **Syntax**: `[ auto | <length-percentage> ]{1,2}`
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * | **69** | **68**  | **15** | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-padding-block
   */
  scrollPaddingBlock?: Property.ScrollPaddingBlock<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2021.
   *
   * **Syntax**: `[ auto | <length-percentage> ]{1,2}`
   *
   * | Chrome | Firefox | Safari |  Edge  | IE  |
   * | :----: | :-----: | :----: | :----: | :-: |
   * | **69** | **68**  | **15** | **79** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-padding-inline
   */
  scrollPaddingInline?: Property.ScrollPaddingInline<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2021.
   *
   * **Syntax**: `<length>{1,4}`
   *
   * | Chrome | Firefox |          Safari           |  Edge  | IE  |
   * | :----: | :-----: | :-----------------------: | :----: | :-: |
   * | **69** |  68-90  |         **14.1**          | **79** | No  |
   * |        |         | 11 _(scroll-snap-margin)_ |        |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-margin
   */
  scrollSnapMargin?: Property.ScrollMargin<TLength> | undefined;
  /**
   * This feature is not Baseline because it does not work in some of the most widely-used browsers.
   *
   * **Syntax**: `[ <'scroll-timeline-name'> <'scroll-timeline-axis'>? ]#`
   *
   * | Chrome  | Firefox | Safari |  Edge   | IE  |
   * | :-----: | :-----: | :----: | :-----: | :-: |
   * | **115** |   No    | **26** | **115** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/scroll-timeline
   */
  scrollTimeline?: Property.ScrollTimeline | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `<'text-decoration-line'> || <'text-decoration-style'> || <'text-decoration-color'> || <'text-decoration-thickness'>`
   *
   * | Chrome | Firefox | Safari |  Edge  |  IE   |
   * | :----: | :-----: | :----: | :----: | :---: |
   * | **1**  |  **1**  | **1**  | **12** | **3** |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-decoration
   */
  textDecoration?: Property.TextDecoration<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since March 2022.
   *
   * **Syntax**: `<'text-emphasis-style'> || <'text-emphasis-color'>`
   *
   * |  Chrome  | Firefox | Safari |   Edge   | IE  |
   * | :------: | :-----: | :----: | :------: | :-: |
   * |  **99**  | **46**  | **7**  |  **99**  | No  |
   * | 25 _-x-_ |         |        | 79 _-x-_ |     |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-emphasis
   */
  textEmphasis?: Property.TextEmphasis | undefined;
  /**
   * Since March 2024, this feature works across the latest devices and browser versions. This feature might not work in older devices or browsers.
   *
   * **Syntax**: `<'text-wrap-mode'> || <'text-wrap-style'>`
   *
   * **Initial value**: `wrap`
   *
   * | Chrome  | Firefox |  Safari  |  Edge   | IE  |
   * | :-----: | :-----: | :------: | :-----: | :-: |
   * | **114** | **121** | **17.4** | **114** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/text-wrap
   */
  textWrap?: Property.TextWrap | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2015.
   *
   * **Syntax**: `<single-transition>#`
   *
   * | Chrome  | Firefox |  Safari   |  Edge  |   IE   |
   * | :-----: | :-----: | :-------: | :----: | :----: |
   * | **26**  | **16**  |   **9**   | **12** | **10** |
   * | 1 _-x-_ |         | 3.1 _-x-_ |        |        |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/transition
   */
  transition?: Property.Transition<TTime> | undefined;
  /**
   * This feature is not Baseline because it does not work in some of the most widely-used browsers.
   *
   * **Syntax**: `[ <'view-timeline-name'> [ <'view-timeline-axis'> || <'view-timeline-inset'> ]? ]#`
   *
   * | Chrome  | Firefox | Safari |  Edge   | IE  |
   * | :-----: | :-----: | :----: | :-----: | :-: |
   * | **115** |   No    | **26** | **115** | No  |
   *
   * @see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/view-timeline
   */
  viewTimeline?: Property.ViewTimeline | undefined;
}

export interface StandardProperties<TLength = (string & {}) | 0, TTime = string & {}>
  extends StandardLonghandProperties<TLength, TTime>,
    StandardShorthandProperties<TLength, TTime> {}

export interface VendorLonghandProperties<TLength = (string & {}) | 0, TTime = string & {}> {
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2015.
   *
   * **Syntax**: `<time>#`
   *
   * **Initial value**: `0s`
   */
  MozAnimationDelay?: Property.AnimationDelay<TTime> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2015.
   *
   * **Syntax**: `<single-animation-direction>#`
   *
   * **Initial value**: `normal`
   */
  MozAnimationDirection?: Property.AnimationDirection | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2015.
   *
   * **Syntax**: `[ auto | <time [0s,∞]> ]#`
   *
   * **Initial value**: `0s`
   */
  MozAnimationDuration?: Property.AnimationDuration<TTime> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2015.
   *
   * **Syntax**: `<single-animation-fill-mode>#`
   *
   * **Initial value**: `none`
   */
  MozAnimationFillMode?: Property.AnimationFillMode | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2015.
   *
   * **Syntax**: `<single-animation-iteration-count>#`
   *
   * **Initial value**: `1`
   */
  MozAnimationIterationCount?: Property.AnimationIterationCount | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2015.
   *
   * **Syntax**: `[ none | <keyframes-name> ]#`
   *
   * **Initial value**: `none`
   */
  MozAnimationName?: Property.AnimationName | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2015.
   *
   * **Syntax**: `<single-animation-play-state>#`
   *
   * **Initial value**: `running`
   */
  MozAnimationPlayState?: Property.AnimationPlayState | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2015.
   *
   * **Syntax**: `<easing-function>#`
   *
   * **Initial value**: `ease`
   */
  MozAnimationTimingFunction?: Property.AnimationTimingFunction | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since March 2022.
   *
   * **Syntax**: `none | button | button-arrow-down | button-arrow-next | button-arrow-previous | button-arrow-up | button-bevel | button-focus | caret | checkbox | checkbox-container | checkbox-label | checkmenuitem | dualbutton | groupbox | listbox | listitem | menuarrow | menubar | menucheckbox | menuimage | menuitem | menuitemtext | menulist | menulist-button | menulist-text | menulist-textfield | menupopup | menuradio | menuseparator | meterbar | meterchunk | progressbar | progressbar-vertical | progresschunk | progresschunk-vertical | radio | radio-container | radio-label | radiomenuitem | range | range-thumb | resizer | resizerpanel | scale-horizontal | scalethumbend | scalethumb-horizontal | scalethumbstart | scalethumbtick | scalethumb-vertical | scale-vertical | scrollbarbutton-down | scrollbarbutton-left | scrollbarbutton-right | scrollbarbutton-up | scrollbarthumb-horizontal | scrollbarthumb-vertical | scrollbartrack-horizontal | scrollbartrack-vertical | searchfield | separator | sheet | spinner | spinner-downbutton | spinner-textfield | spinner-upbutton | splitter | statusbar | statusbarpanel | tab | tabpanel | tabpanels | tab-scroll-arrow-back | tab-scroll-arrow-forward | textfield | textfield-multiline | toolbar | toolbarbutton | toolbarbutton-dropdown | toolbargripper | toolbox | tooltip | treeheader | treeheadercell | treeheadersortarrow | treeitem | treeline | treetwisty | treetwistyopen | treeview | -moz-mac-unified-toolbar | -moz-win-borderless-glass | -moz-win-browsertabbar-toolbox | -moz-win-communicationstext | -moz-win-communications-toolbox | -moz-win-exclude-glass | -moz-win-glass | -moz-win-mediatext | -moz-win-media-toolbox | -moz-window-button-box | -moz-window-button-box-maximized | -moz-window-button-close | -moz-window-button-maximize | -moz-window-button-minimize | -moz-window-button-restore | -moz-window-frame-bottom | -moz-window-frame-left | -moz-window-frame-right | -moz-window-titlebar | -moz-window-titlebar-maximized`
   *
   * **Initial value**: `none` (but this value is overridden in the user agent CSS)
   */
  MozAppearance?: Property.MozAppearance | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since March 2022.
   *
   * **Syntax**: `visible | hidden`
   *
   * **Initial value**: `visible`
   */
  MozBackfaceVisibility?: Property.BackfaceVisibility | undefined;
  /**
   * **Syntax**: `<url> | none`
   *
   * **Initial value**: `none`
   */
  MozBinding?: Property.MozBinding | undefined;
  /**
   * **Syntax**: `<color>+ | none`
   *
   * **Initial value**: `none`
   */
  MozBorderBottomColors?: Property.MozBorderBottomColors | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since January 2020.
   *
   * **Syntax**: `<'border-top-color'>`
   *
   * **Initial value**: `currentcolor`
   */
  MozBorderEndColor?: Property.BorderInlineEndColor | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since January 2020.
   *
   * **Syntax**: `<'border-top-style'>`
   *
   * **Initial value**: `none`
   */
  MozBorderEndStyle?: Property.BorderInlineEndStyle | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since January 2020.
   *
   * **Syntax**: `<'border-top-width'>`
   *
   * **Initial value**: `medium`
   */
  MozBorderEndWidth?: Property.BorderInlineEndWidth<TLength> | undefined;
  /**
   * **Syntax**: `<color>+ | none`
   *
   * **Initial value**: `none`
   */
  MozBorderLeftColors?: Property.MozBorderLeftColors | undefined;
  /**
   * **Syntax**: `<color>+ | none`
   *
   * **Initial value**: `none`
   */
  MozBorderRightColors?: Property.MozBorderRightColors | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since January 2020.
   *
   * **Syntax**: `<'border-top-color'>`
   *
   * **Initial value**: `currentcolor`
   */
  MozBorderStartColor?: Property.BorderInlineStartColor | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since January 2020.
   *
   * **Syntax**: `<'border-top-style'>`
   *
   * **Initial value**: `none`
   */
  MozBorderStartStyle?: Property.BorderInlineStartStyle | undefined;
  /**
   * **Syntax**: `<color>+ | none`
   *
   * **Initial value**: `none`
   */
  MozBorderTopColors?: Property.MozBorderTopColors | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `content-box | border-box`
   *
   * **Initial value**: `content-box`
   */
  MozBoxSizing?: Property.BoxSizing | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since March 2017.
   *
   * **Syntax**: `<color>`
   *
   * **Initial value**: `currentcolor`
   */
  MozColumnRuleColor?: Property.ColumnRuleColor | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since March 2017.
   *
   * **Syntax**: `<'border-style'>`
   *
   * **Initial value**: `none`
   */
  MozColumnRuleStyle?: Property.ColumnRuleStyle | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since March 2017.
   *
   * **Syntax**: `<'border-width'>`
   *
   * **Initial value**: `medium`
   */
  MozColumnRuleWidth?: Property.ColumnRuleWidth<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since November 2016.
   *
   * **Syntax**: `<length> | auto`
   *
   * **Initial value**: `auto`
   */
  MozColumnWidth?: Property.ColumnWidth<TLength> | undefined;
  /**
   * **Syntax**: `none | [ fill | fill-opacity | stroke | stroke-opacity ]#`
   *
   * **Initial value**: `none`
   */
  MozContextProperties?: Property.MozContextProperties | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since April 2017.
   *
   * **Syntax**: `normal | <feature-tag-value>#`
   *
   * **Initial value**: `normal`
   */
  MozFontFeatureSettings?: Property.FontFeatureSettings | undefined;
  /**
   * This feature is not Baseline because it does not work in some of the most widely-used browsers.
   *
   * **Syntax**: `normal | <string>`
   *
   * **Initial value**: `normal`
   */
  MozFontLanguageOverride?: Property.FontLanguageOverride | undefined;
  /**
   * Since September 2023, this feature works across the latest devices and browser versions. This feature might not work in older devices or browsers.
   *
   * **Syntax**: `none | manual | auto`
   *
   * **Initial value**: `manual`
   */
  MozHyphens?: Property.Hyphens | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since January 2020.
   *
   * **Syntax**: `<'margin-top'>`
   *
   * **Initial value**: `0`
   */
  MozMarginEnd?: Property.MarginInlineEnd<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since January 2020.
   *
   * **Syntax**: `<'margin-top'>`
   *
   * **Initial value**: `0`
   */
  MozMarginStart?: Property.MarginInlineStart<TLength> | undefined;
  /**
   * The **`-moz-orient`** CSS property specifies the orientation of the element to which it's applied.
   *
   * **Syntax**: `inline | block | horizontal | vertical`
   *
   * **Initial value**: `inline`
   */
  MozOrient?: Property.MozOrient | undefined;
  /**
   * The **`font-smooth`** CSS property controls the application of anti-aliasing when fonts are rendered.
   *
   * **Syntax**: `auto | never | always | <absolute-size> | <length>`
   *
   * **Initial value**: `auto`
   */
  MozOsxFontSmoothing?: Property.FontSmooth<TLength> | undefined;
  /**
   * **Syntax**: `<outline-radius>`
   *
   * **Initial value**: `0`
   */
  MozOutlineRadiusBottomleft?: Property.MozOutlineRadiusBottomleft<TLength> | undefined;
  /**
   * **Syntax**: `<outline-radius>`
   *
   * **Initial value**: `0`
   */
  MozOutlineRadiusBottomright?: Property.MozOutlineRadiusBottomright<TLength> | undefined;
  /**
   * **Syntax**: `<outline-radius>`
   *
   * **Initial value**: `0`
   */
  MozOutlineRadiusTopleft?: Property.MozOutlineRadiusTopleft<TLength> | undefined;
  /**
   * **Syntax**: `<outline-radius>`
   *
   * **Initial value**: `0`
   */
  MozOutlineRadiusTopright?: Property.MozOutlineRadiusTopright<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since January 2020.
   *
   * **Syntax**: `<'padding-top'>`
   *
   * **Initial value**: `0`
   */
  MozPaddingEnd?: Property.PaddingInlineEnd<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since January 2020.
   *
   * **Syntax**: `<'padding-top'>`
   *
   * **Initial value**: `0`
   */
  MozPaddingStart?: Property.PaddingInlineStart<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2015.
   *
   * **Syntax**: `none | <length>`
   *
   * **Initial value**: `none`
   */
  MozPerspective?: Property.Perspective<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2015.
   *
   * **Syntax**: `<position>`
   *
   * **Initial value**: `50% 50%`
   */
  MozPerspectiveOrigin?: Property.PerspectiveOrigin<TLength> | undefined;
  /**
   * **Syntax**: `ignore | stretch-to-fit`
   *
   * **Initial value**: `stretch-to-fit`
   */
  MozStackSizing?: Property.MozStackSizing | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since August 2021.
   *
   * **Syntax**: `<integer> | <length>`
   *
   * **Initial value**: `8`
   */
  MozTabSize?: Property.TabSize<TLength> | undefined;
  /**
   * **Syntax**: `none | blink`
   *
   * **Initial value**: `none`
   */
  MozTextBlink?: Property.MozTextBlink | undefined;
  /**
   * This feature is not Baseline because it does not work in some of the most widely-used browsers.
   *
   * **Syntax**: `none | auto | <percentage>`
   *
   * **Initial value**: `auto` for smartphone browsers supporting inflation, `none` in other cases (and then not modifiable).
   */
  MozTextSizeAdjust?: Property.TextSizeAdjust | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2015.
   *
   * **Syntax**: `none | <transform-list>`
   *
   * **Initial value**: `none`
   */
  MozTransform?: Property.Transform | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2015.
   *
   * **Syntax**: `[ <length-percentage> | left | center | right | top | bottom ] | [ [ <length-percentage> | left | center | right ] && [ <length-percentage> | top | center | bottom ] ] <length>?`
   *
   * **Initial value**: `50% 50% 0`
   */
  MozTransformOrigin?: Property.TransformOrigin<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2015.
   *
   * **Syntax**: `flat | preserve-3d`
   *
   * **Initial value**: `flat`
   */
  MozTransformStyle?: Property.TransformStyle | undefined;
  /**
   * The **`user-modify`** property has no effect in Firefox. It was originally planned to determine whether or not the content of an element can be edited by a user.
   *
   * **Syntax**: `read-only | read-write | write-only`
   *
   * **Initial value**: `read-only`
   */
  MozUserModify?: Property.MozUserModify | undefined;
  /**
   * This feature is not Baseline because it does not work in some of the most widely-used browsers.
   *
   * **Syntax**: `auto | text | none | all`
   *
   * **Initial value**: `auto`
   */
  MozUserSelect?: Property.UserSelect | undefined;
  /**
   * **Syntax**: `drag | no-drag`
   *
   * **Initial value**: `drag`
   */
  MozWindowDragging?: Property.MozWindowDragging | undefined;
  /**
   * **Syntax**: `default | menu | tooltip | sheet | none`
   *
   * **Initial value**: `default`
   */
  MozWindowShadow?: Property.MozWindowShadow | undefined;
  /**
   * **Syntax**: `false | true`
   *
   * **Initial value**: `false`
   */
  msAccelerator?: Property.MsAccelerator | undefined;
  /**
   * **Syntax**: `tb | rl | bt | lr`
   *
   * **Initial value**: `tb`
   */
  msBlockProgression?: Property.MsBlockProgression | undefined;
  /**
   * **Syntax**: `none | chained`
   *
   * **Initial value**: `none`
   */
  msContentZoomChaining?: Property.MsContentZoomChaining | undefined;
  /**
   * **Syntax**: `<percentage>`
   *
   * **Initial value**: `400%`
   */
  msContentZoomLimitMax?: Property.MsContentZoomLimitMax | undefined;
  /**
   * **Syntax**: `<percentage>`
   *
   * **Initial value**: `100%`
   */
  msContentZoomLimitMin?: Property.MsContentZoomLimitMin | undefined;
  /**
   * **Syntax**: `snapInterval( <percentage>, <percentage> ) | snapList( <percentage># )`
   *
   * **Initial value**: `snapInterval(0%, 100%)`
   */
  msContentZoomSnapPoints?: Property.MsContentZoomSnapPoints | undefined;
  /**
   * **Syntax**: `none | proximity | mandatory`
   *
   * **Initial value**: `none`
   */
  msContentZoomSnapType?: Property.MsContentZoomSnapType | undefined;
  /**
   * **Syntax**: `none | zoom`
   *
   * **Initial value**: zoom for the top level element, none for all other elements
   */
  msContentZooming?: Property.MsContentZooming | undefined;
  /**
   * **Syntax**: `<string>`
   *
   * **Initial value**: "" (the empty string)
   */
  msFilter?: Property.MsFilter | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2015.
   *
   * **Syntax**: `row | row-reverse | column | column-reverse`
   *
   * **Initial value**: `row`
   */
  msFlexDirection?: Property.FlexDirection | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2015.
   *
   * **Syntax**: `<number>`
   *
   * **Initial value**: `0`
   */
  msFlexPositive?: Property.FlexGrow | undefined;
  /**
   * **Syntax**: `[ none | <custom-ident> ]#`
   *
   * **Initial value**: `none`
   */
  msFlowFrom?: Property.MsFlowFrom | undefined;
  /**
   * **Syntax**: `[ none | <custom-ident> ]#`
   *
   * **Initial value**: `none`
   */
  msFlowInto?: Property.MsFlowInto | undefined;
  /**
   * **Syntax**: `none | <track-list> | <auto-track-list>`
   *
   * **Initial value**: `none`
   */
  msGridColumns?: Property.MsGridColumns<TLength> | undefined;
  /**
   * **Syntax**: `none | <track-list> | <auto-track-list>`
   *
   * **Initial value**: `none`
   */
  msGridRows?: Property.MsGridRows<TLength> | undefined;
  /**
   * **Syntax**: `auto | none`
   *
   * **Initial value**: `auto`
   */
  msHighContrastAdjust?: Property.MsHighContrastAdjust | undefined;
  /**
   * **Syntax**: `auto | <integer>{1,3}`
   *
   * **Initial value**: `auto`
   */
  msHyphenateLimitChars?: Property.MsHyphenateLimitChars | undefined;
  /**
   * **Syntax**: `no-limit | <integer>`
   *
   * **Initial value**: `no-limit`
   */
  msHyphenateLimitLines?: Property.MsHyphenateLimitLines | undefined;
  /**
   * **Syntax**: `<percentage> | <length>`
   *
   * **Initial value**: `0`
   */
  msHyphenateLimitZone?: Property.MsHyphenateLimitZone<TLength> | undefined;
  /**
   * Since September 2023, this feature works across the latest devices and browser versions. This feature might not work in older devices or browsers.
   *
   * **Syntax**: `none | manual | auto`
   *
   * **Initial value**: `manual`
   */
  msHyphens?: Property.Hyphens | undefined;
  /**
   * **Syntax**: `auto | after`
   *
   * **Initial value**: `auto`
   */
  msImeAlign?: Property.MsImeAlign | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2020.
   *
   * **Syntax**: `auto | loose | normal | strict | anywhere`
   *
   * **Initial value**: `auto`
   */
  msLineBreak?: Property.LineBreak | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2015.
   *
   * **Syntax**: `<integer>`
   *
   * **Initial value**: `0`
   */
  msOrder?: Property.Order | undefined;
  /**
   * **Syntax**: `auto | none | scrollbar | -ms-autohiding-scrollbar`
   *
   * **Initial value**: `auto`
   */
  msOverflowStyle?: Property.MsOverflowStyle | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `visible | hidden | clip | scroll | auto`
   *
   * **Initial value**: `visible`
   */
  msOverflowX?: Property.OverflowX | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `visible | hidden | clip | scroll | auto`
   *
   * **Initial value**: `visible`
   */
  msOverflowY?: Property.OverflowY | undefined;
  /**
   * **Syntax**: `chained | none`
   *
   * **Initial value**: `chained`
   */
  msScrollChaining?: Property.MsScrollChaining | undefined;
  /**
   * **Syntax**: `auto | <length>`
   *
   * **Initial value**: `auto`
   */
  msScrollLimitXMax?: Property.MsScrollLimitXMax<TLength> | undefined;
  /**
   * **Syntax**: `<length>`
   *
   * **Initial value**: `0`
   */
  msScrollLimitXMin?: Property.MsScrollLimitXMin<TLength> | undefined;
  /**
   * **Syntax**: `auto | <length>`
   *
   * **Initial value**: `auto`
   */
  msScrollLimitYMax?: Property.MsScrollLimitYMax<TLength> | undefined;
  /**
   * **Syntax**: `<length>`
   *
   * **Initial value**: `0`
   */
  msScrollLimitYMin?: Property.MsScrollLimitYMin<TLength> | undefined;
  /**
   * **Syntax**: `none | railed`
   *
   * **Initial value**: `railed`
   */
  msScrollRails?: Property.MsScrollRails | undefined;
  /**
   * **Syntax**: `snapInterval( <length-percentage>, <length-percentage> ) | snapList( <length-percentage># )`
   *
   * **Initial value**: `snapInterval(0px, 100%)`
   */
  msScrollSnapPointsX?: Property.MsScrollSnapPointsX | undefined;
  /**
   * **Syntax**: `snapInterval( <length-percentage>, <length-percentage> ) | snapList( <length-percentage># )`
   *
   * **Initial value**: `snapInterval(0px, 100%)`
   */
  msScrollSnapPointsY?: Property.MsScrollSnapPointsY | undefined;
  /**
   * **Syntax**: `none | proximity | mandatory`
   *
   * **Initial value**: `none`
   */
  msScrollSnapType?: Property.MsScrollSnapType | undefined;
  /**
   * **Syntax**: `none | vertical-to-horizontal`
   *
   * **Initial value**: `none`
   */
  msScrollTranslation?: Property.MsScrollTranslation | undefined;
  /**
   * **Syntax**: `<color>`
   *
   * **Initial value**: depends on user agent
   */
  msScrollbar3dlightColor?: Property.MsScrollbar3dlightColor | undefined;
  /**
   * **Syntax**: `<color>`
   *
   * **Initial value**: `ButtonText`
   */
  msScrollbarArrowColor?: Property.MsScrollbarArrowColor | undefined;
  /**
   * **Syntax**: `<color>`
   *
   * **Initial value**: depends on user agent
   */
  msScrollbarBaseColor?: Property.MsScrollbarBaseColor | undefined;
  /**
   * **Syntax**: `<color>`
   *
   * **Initial value**: `ThreeDDarkShadow`
   */
  msScrollbarDarkshadowColor?: Property.MsScrollbarDarkshadowColor | undefined;
  /**
   * **Syntax**: `<color>`
   *
   * **Initial value**: `ThreeDFace`
   */
  msScrollbarFaceColor?: Property.MsScrollbarFaceColor | undefined;
  /**
   * **Syntax**: `<color>`
   *
   * **Initial value**: `ThreeDHighlight`
   */
  msScrollbarHighlightColor?: Property.MsScrollbarHighlightColor | undefined;
  /**
   * **Syntax**: `<color>`
   *
   * **Initial value**: `ThreeDDarkShadow`
   */
  msScrollbarShadowColor?: Property.MsScrollbarShadowColor | undefined;
  /**
   * **Syntax**: `<color>`
   *
   * **Initial value**: `Scrollbar`
   */
  msScrollbarTrackColor?: Property.MsScrollbarTrackColor | undefined;
  /**
   * **Syntax**: `none | ideograph-alpha | ideograph-numeric | ideograph-parenthesis | ideograph-space`
   *
   * **Initial value**: `none`
   */
  msTextAutospace?: Property.MsTextAutospace | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since March 2022.
   *
   * **Syntax**: `none | all | [ digits <integer>? ]`
   *
   * **Initial value**: `none`
   */
  msTextCombineHorizontal?: Property.TextCombineUpright | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `[ clip | ellipsis | <string> ]{1,2}`
   *
   * **Initial value**: `clip`
   */
  msTextOverflow?: Property.TextOverflow | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2019.
   *
   * **Syntax**: `auto | none | [ [ pan-x | pan-left | pan-right ] || [ pan-y | pan-up | pan-down ] || pinch-zoom ] | manipulation`
   *
   * **Initial value**: `auto`
   */
  msTouchAction?: Property.TouchAction | undefined;
  /**
   * **Syntax**: `grippers | none`
   *
   * **Initial value**: `grippers`
   */
  msTouchSelect?: Property.MsTouchSelect | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2015.
   *
   * **Syntax**: `none | <transform-list>`
   *
   * **Initial value**: `none`
   */
  msTransform?: Property.Transform | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2015.
   *
   * **Syntax**: `[ <length-percentage> | left | center | right | top | bottom ] | [ [ <length-percentage> | left | center | right ] && [ <length-percentage> | top | center | bottom ] ] <length>?`
   *
   * **Initial value**: `50% 50% 0`
   */
  msTransformOrigin?: Property.TransformOrigin<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2015.
   *
   * **Syntax**: `<time>#`
   *
   * **Initial value**: `0s`
   */
  msTransitionDelay?: Property.TransitionDelay<TTime> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2015.
   *
   * **Syntax**: `<time>#`
   *
   * **Initial value**: `0s`
   */
  msTransitionDuration?: Property.TransitionDuration<TTime> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2015.
   *
   * **Syntax**: `none | <single-transition-property>#`
   *
   * **Initial value**: all
   */
  msTransitionProperty?: Property.TransitionProperty | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2015.
   *
   * **Syntax**: `<easing-function>#`
   *
   * **Initial value**: `ease`
   */
  msTransitionTimingFunction?: Property.TransitionTimingFunction | undefined;
  /**
   * **Syntax**: `none | element | text`
   *
   * **Initial value**: `text`
   */
  msUserSelect?: Property.MsUserSelect | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `normal | break-all | keep-all | break-word | auto-phrase`
   *
   * **Initial value**: `normal`
   */
  msWordBreak?: Property.WordBreak | undefined;
  /**
   * **Syntax**: `auto | both | start | end | maximum | clear`
   *
   * **Initial value**: `auto`
   */
  msWrapFlow?: Property.MsWrapFlow | undefined;
  /**
   * **Syntax**: `<length>`
   *
   * **Initial value**: `0`
   */
  msWrapMargin?: Property.MsWrapMargin<TLength> | undefined;
  /**
   * **Syntax**: `wrap | none`
   *
   * **Initial value**: `wrap`
   */
  msWrapThrough?: Property.MsWrapThrough | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since March 2017.
   *
   * **Syntax**: `horizontal-tb | vertical-rl | vertical-lr | sideways-rl | sideways-lr`
   *
   * **Initial value**: `horizontal-tb`
   */
  msWritingMode?: Property.WritingMode | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2015.
   *
   * **Syntax**: `normal | <baseline-position> | <content-distribution> | <overflow-position>? <content-position>`
   *
   * **Initial value**: `normal`
   */
  WebkitAlignContent?: Property.AlignContent | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2015.
   *
   * **Syntax**: `normal | stretch | <baseline-position> | [ <overflow-position>? <self-position> ] | anchor-center`
   *
   * **Initial value**: `normal`
   */
  WebkitAlignItems?: Property.AlignItems | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2015.
   *
   * **Syntax**: `auto | normal | stretch | <baseline-position> | <overflow-position>? <self-position> | anchor-center`
   *
   * **Initial value**: `auto`
   */
  WebkitAlignSelf?: Property.AlignSelf | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2015.
   *
   * **Syntax**: `<time>#`
   *
   * **Initial value**: `0s`
   */
  WebkitAnimationDelay?: Property.AnimationDelay<TTime> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2015.
   *
   * **Syntax**: `<single-animation-direction>#`
   *
   * **Initial value**: `normal`
   */
  WebkitAnimationDirection?: Property.AnimationDirection | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2015.
   *
   * **Syntax**: `[ auto | <time [0s,∞]> ]#`
   *
   * **Initial value**: `0s`
   */
  WebkitAnimationDuration?: Property.AnimationDuration<TTime> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2015.
   *
   * **Syntax**: `<single-animation-fill-mode>#`
   *
   * **Initial value**: `none`
   */
  WebkitAnimationFillMode?: Property.AnimationFillMode | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2015.
   *
   * **Syntax**: `<single-animation-iteration-count>#`
   *
   * **Initial value**: `1`
   */
  WebkitAnimationIterationCount?: Property.AnimationIterationCount | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2015.
   *
   * **Syntax**: `[ none | <keyframes-name> ]#`
   *
   * **Initial value**: `none`
   */
  WebkitAnimationName?: Property.AnimationName | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2015.
   *
   * **Syntax**: `<single-animation-play-state>#`
   *
   * **Initial value**: `running`
   */
  WebkitAnimationPlayState?: Property.AnimationPlayState | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2015.
   *
   * **Syntax**: `<easing-function>#`
   *
   * **Initial value**: `ease`
   */
  WebkitAnimationTimingFunction?: Property.AnimationTimingFunction | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since March 2022.
   *
   * **Syntax**: `none | button | button-bevel | caret | checkbox | default-button | inner-spin-button | listbox | listitem | media-controls-background | media-controls-fullscreen-background | media-current-time-display | media-enter-fullscreen-button | media-exit-fullscreen-button | media-fullscreen-button | media-mute-button | media-overlay-play-button | media-play-button | media-seek-back-button | media-seek-forward-button | media-slider | media-sliderthumb | media-time-remaining-display | media-toggle-closed-captions-button | media-volume-slider | media-volume-slider-container | media-volume-sliderthumb | menulist | menulist-button | menulist-text | menulist-textfield | meter | progress-bar | progress-bar-value | push-button | radio | searchfield | searchfield-cancel-button | searchfield-decoration | searchfield-results-button | searchfield-results-decoration | slider-horizontal | slider-vertical | sliderthumb-horizontal | sliderthumb-vertical | square-button | textarea | textfield | -apple-pay-button`
   *
   * **Initial value**: `none` (but this value is overridden in the user agent CSS)
   */
  WebkitAppearance?: Property.WebkitAppearance | undefined;
  /**
   * Since September 2024, this feature works across the latest devices and browser versions. This feature might not work in older devices or browsers.
   *
   * **Syntax**: `none | <filter-value-list>`
   *
   * **Initial value**: `none`
   */
  WebkitBackdropFilter?: Property.BackdropFilter | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since March 2022.
   *
   * **Syntax**: `visible | hidden`
   *
   * **Initial value**: `visible`
   */
  WebkitBackfaceVisibility?: Property.BackfaceVisibility | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `<bg-clip>#`
   *
   * **Initial value**: `border-box`
   */
  WebkitBackgroundClip?: Property.BackgroundClip | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `<visual-box>#`
   *
   * **Initial value**: `padding-box`
   */
  WebkitBackgroundOrigin?: Property.BackgroundOrigin | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `<bg-size>#`
   *
   * **Initial value**: `auto auto`
   */
  WebkitBackgroundSize?: Property.BackgroundSize<TLength> | undefined;
  /**
   * **Syntax**: `<color>`
   *
   * **Initial value**: `currentcolor`
   */
  WebkitBorderBeforeColor?: Property.WebkitBorderBeforeColor | undefined;
  /**
   * **Syntax**: `<'border-style'>`
   *
   * **Initial value**: `none`
   */
  WebkitBorderBeforeStyle?: Property.WebkitBorderBeforeStyle | undefined;
  /**
   * **Syntax**: `<'border-width'>`
   *
   * **Initial value**: `medium`
   */
  WebkitBorderBeforeWidth?: Property.WebkitBorderBeforeWidth<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `<length-percentage [0,∞]>{1,2}`
   *
   * **Initial value**: `0`
   */
  WebkitBorderBottomLeftRadius?: Property.BorderBottomLeftRadius<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `<length-percentage [0,∞]>{1,2}`
   *
   * **Initial value**: `0`
   */
  WebkitBorderBottomRightRadius?: Property.BorderBottomRightRadius<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `[ <number [0,∞]> | <percentage [0,∞]> ]{1,4}  && fill?`
   *
   * **Initial value**: `100%`
   */
  WebkitBorderImageSlice?: Property.BorderImageSlice | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `<length-percentage [0,∞]>{1,2}`
   *
   * **Initial value**: `0`
   */
  WebkitBorderTopLeftRadius?: Property.BorderTopLeftRadius<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `<length-percentage [0,∞]>{1,2}`
   *
   * **Initial value**: `0`
   */
  WebkitBorderTopRightRadius?: Property.BorderTopRightRadius<TLength> | undefined;
  /**
   * This feature is not Baseline because it does not work in some of the most widely-used browsers.
   *
   * **Syntax**: `slice | clone`
   *
   * **Initial value**: `slice`
   */
  WebkitBoxDecorationBreak?: Property.BoxDecorationBreak | undefined;
  /**
   * The **`-webkit-box-reflect`** CSS property lets you reflect the content of an element in one specific direction.
   *
   * **Syntax**: `[ above | below | right | left ]? <length>? <image>?`
   *
   * **Initial value**: `none`
   */
  WebkitBoxReflect?: Property.WebkitBoxReflect<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `none | <shadow>#`
   *
   * **Initial value**: `none`
   */
  WebkitBoxShadow?: Property.BoxShadow | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `content-box | border-box`
   *
   * **Initial value**: `content-box`
   */
  WebkitBoxSizing?: Property.BoxSizing | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since January 2020.
   *
   * **Syntax**: `<clip-source> | [ <basic-shape> || <geometry-box> ] | none`
   *
   * **Initial value**: `none`
   */
  WebkitClipPath?: Property.ClipPath | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since March 2017.
   *
   * **Syntax**: `<integer> | auto`
   *
   * **Initial value**: `auto`
   */
  WebkitColumnCount?: Property.ColumnCount | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since March 2017.
   *
   * **Syntax**: `auto | balance`
   *
   * **Initial value**: `balance`
   */
  WebkitColumnFill?: Property.ColumnFill | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since March 2017.
   *
   * **Syntax**: `<color>`
   *
   * **Initial value**: `currentcolor`
   */
  WebkitColumnRuleColor?: Property.ColumnRuleColor | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since March 2017.
   *
   * **Syntax**: `<'border-style'>`
   *
   * **Initial value**: `none`
   */
  WebkitColumnRuleStyle?: Property.ColumnRuleStyle | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since March 2017.
   *
   * **Syntax**: `<'border-width'>`
   *
   * **Initial value**: `medium`
   */
  WebkitColumnRuleWidth?: Property.ColumnRuleWidth<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2020.
   *
   * **Syntax**: `none | all`
   *
   * **Initial value**: `none`
   */
  WebkitColumnSpan?: Property.ColumnSpan | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since November 2016.
   *
   * **Syntax**: `<length> | auto`
   *
   * **Initial value**: `auto`
   */
  WebkitColumnWidth?: Property.ColumnWidth<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2016.
   *
   * **Syntax**: `none | <filter-value-list>`
   *
   * **Initial value**: `none`
   */
  WebkitFilter?: Property.Filter | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2015.
   *
   * **Syntax**: `content | <'width'>`
   *
   * **Initial value**: `auto`
   */
  WebkitFlexBasis?: Property.FlexBasis<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2015.
   *
   * **Syntax**: `row | row-reverse | column | column-reverse`
   *
   * **Initial value**: `row`
   */
  WebkitFlexDirection?: Property.FlexDirection | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2015.
   *
   * **Syntax**: `<number>`
   *
   * **Initial value**: `0`
   */
  WebkitFlexGrow?: Property.FlexGrow | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2015.
   *
   * **Syntax**: `<number>`
   *
   * **Initial value**: `1`
   */
  WebkitFlexShrink?: Property.FlexShrink | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2015.
   *
   * **Syntax**: `nowrap | wrap | wrap-reverse`
   *
   * **Initial value**: `nowrap`
   */
  WebkitFlexWrap?: Property.FlexWrap | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since April 2017.
   *
   * **Syntax**: `normal | <feature-tag-value>#`
   *
   * **Initial value**: `normal`
   */
  WebkitFontFeatureSettings?: Property.FontFeatureSettings | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since January 2020.
   *
   * **Syntax**: `auto | normal | none`
   *
   * **Initial value**: `auto`
   */
  WebkitFontKerning?: Property.FontKerning | undefined;
  /**
   * The **`font-smooth`** CSS property controls the application of anti-aliasing when fonts are rendered.
   *
   * **Syntax**: `auto | never | always | <absolute-size> | <length>`
   *
   * **Initial value**: `auto`
   */
  WebkitFontSmoothing?: Property.FontSmooth<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since January 2020.
   *
   * **Syntax**: `normal | none | [ <common-lig-values> || <discretionary-lig-values> || <historical-lig-values> || <contextual-alt-values> ]`
   *
   * **Initial value**: `normal`
   */
  WebkitFontVariantLigatures?: Property.FontVariantLigatures | undefined;
  /**
   * Since September 2023, this feature works across the latest devices and browser versions. This feature might not work in older devices or browsers.
   *
   * **Syntax**: `auto | <string>`
   *
   * **Initial value**: `auto`
   */
  WebkitHyphenateCharacter?: Property.HyphenateCharacter | undefined;
  /**
   * Since September 2023, this feature works across the latest devices and browser versions. This feature might not work in older devices or browsers.
   *
   * **Syntax**: `none | manual | auto`
   *
   * **Initial value**: `manual`
   */
  WebkitHyphens?: Property.Hyphens | undefined;
  /**
   * This feature is not Baseline because it does not work in some of the most widely-used browsers.
   *
   * **Syntax**: `normal | [ <number> <integer>? ]`
   *
   * **Initial value**: `normal`
   */
  WebkitInitialLetter?: Property.InitialLetter | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2015.
   *
   * **Syntax**: `normal | <content-distribution> | <overflow-position>? [ <content-position> | left | right ]`
   *
   * **Initial value**: `normal`
   */
  WebkitJustifyContent?: Property.JustifyContent | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2020.
   *
   * **Syntax**: `auto | loose | normal | strict | anywhere`
   *
   * **Initial value**: `auto`
   */
  WebkitLineBreak?: Property.LineBreak | undefined;
  /**
   * This feature is not Baseline because it does not work in some of the most widely-used browsers.
   *
   * **Syntax**: `none | <integer>`
   *
   * **Initial value**: `none`
   */
  WebkitLineClamp?: Property.WebkitLineClamp | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since January 2020.
   *
   * **Syntax**: `<'width'>`
   *
   * **Initial value**: `auto`
   */
  WebkitLogicalHeight?: Property.BlockSize<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since January 2020.
   *
   * **Syntax**: `<'width'>`
   *
   * **Initial value**: `auto`
   */
  WebkitLogicalWidth?: Property.InlineSize<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since January 2020.
   *
   * **Syntax**: `<'margin-top'>`
   *
   * **Initial value**: `0`
   */
  WebkitMarginEnd?: Property.MarginInlineEnd<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since January 2020.
   *
   * **Syntax**: `<'margin-top'>`
   *
   * **Initial value**: `0`
   */
  WebkitMarginStart?: Property.MarginInlineStart<TLength> | undefined;
  /**
   * **Syntax**: `<attachment>#`
   *
   * **Initial value**: `scroll`
   */
  WebkitMaskAttachment?: Property.WebkitMaskAttachment | undefined;
  /**
   * This feature is not Baseline because it does not work in some of the most widely-used browsers.
   *
   * **Syntax**: `[ <length> | <number> ]{1,4}`
   *
   * **Initial value**: `0`
   */
  WebkitMaskBoxImageOutset?: Property.MaskBorderOutset<TLength> | undefined;
  /**
   * This feature is not Baseline because it does not work in some of the most widely-used browsers.
   *
   * **Syntax**: `[ stretch | repeat | round | space ]{1,2}`
   *
   * **Initial value**: `stretch`
   */
  WebkitMaskBoxImageRepeat?: Property.MaskBorderRepeat | undefined;
  /**
   * This feature is not Baseline because it does not work in some of the most widely-used browsers.
   *
   * **Syntax**: `<number-percentage>{1,4} fill?`
   *
   * **Initial value**: `0`
   */
  WebkitMaskBoxImageSlice?: Property.MaskBorderSlice | undefined;
  /**
   * This feature is not Baseline because it does not work in some of the most widely-used browsers.
   *
   * **Syntax**: `none | <image>`
   *
   * **Initial value**: `none`
   */
  WebkitMaskBoxImageSource?: Property.MaskBorderSource | undefined;
  /**
   * This feature is not Baseline because it does not work in some of the most widely-used browsers.
   *
   * **Syntax**: `[ <length-percentage> | <number> | auto ]{1,4}`
   *
   * **Initial value**: `auto`
   */
  WebkitMaskBoxImageWidth?: Property.MaskBorderWidth<TLength> | undefined;
  /**
   * Since December 2023, this feature works across the latest devices and browser versions. This feature might not work in older devices or browsers.
   *
   * **Syntax**: `[ <coord-box> | no-clip | border | padding | content | text ]#`
   *
   * **Initial value**: `border`
   */
  WebkitMaskClip?: Property.WebkitMaskClip | undefined;
  /**
   * The **`-webkit-mask-composite`** property specifies the manner in which multiple mask images applied to the same element are composited with one another. Mask images are composited in the opposite order that they are declared with the `-webkit-mask-image` property.
   *
   * **Syntax**: `<composite-style>#`
   *
   * **Initial value**: `source-over`
   */
  WebkitMaskComposite?: Property.WebkitMaskComposite | undefined;
  /**
   * Since December 2023, this feature works across the latest devices and browser versions. This feature might not work in older devices or browsers.
   *
   * **Syntax**: `<mask-reference>#`
   *
   * **Initial value**: `none`
   */
  WebkitMaskImage?: Property.WebkitMaskImage | undefined;
  /**
   * Since December 2023, this feature works across the latest devices and browser versions. This feature might not work in older devices or browsers.
   *
   * **Syntax**: `[ <coord-box> | border | padding | content ]#`
   *
   * **Initial value**: `padding`
   */
  WebkitMaskOrigin?: Property.WebkitMaskOrigin | undefined;
  /**
   * Since December 2023, this feature works across the latest devices and browser versions. This feature might not work in older devices or browsers.
   *
   * **Syntax**: `<position>#`
   *
   * **Initial value**: `0% 0%`
   */
  WebkitMaskPosition?: Property.WebkitMaskPosition<TLength> | undefined;
  /**
   * The `-webkit-mask-position-x` CSS property sets the initial horizontal position of a mask image.
   *
   * **Syntax**: `[ <length-percentage> | left | center | right ]#`
   *
   * **Initial value**: `0%`
   */
  WebkitMaskPositionX?: Property.WebkitMaskPositionX<TLength> | undefined;
  /**
   * The `-webkit-mask-position-y` CSS property sets the initial vertical position of a mask image.
   *
   * **Syntax**: `[ <length-percentage> | top | center | bottom ]#`
   *
   * **Initial value**: `0%`
   */
  WebkitMaskPositionY?: Property.WebkitMaskPositionY<TLength> | undefined;
  /**
   * Since December 2023, this feature works across the latest devices and browser versions. This feature might not work in older devices or browsers.
   *
   * **Syntax**: `<repeat-style>#`
   *
   * **Initial value**: `repeat`
   */
  WebkitMaskRepeat?: Property.WebkitMaskRepeat | undefined;
  /**
   * The `-webkit-mask-repeat-x` property specifies whether and how a mask image is repeated (tiled) horizontally.
   *
   * **Syntax**: `repeat | no-repeat | space | round`
   *
   * **Initial value**: `repeat`
   */
  WebkitMaskRepeatX?: Property.WebkitMaskRepeatX | undefined;
  /**
   * The `-webkit-mask-repeat-y` property sets whether and how a mask image is repeated (tiled) vertically.
   *
   * **Syntax**: `repeat | no-repeat | space | round`
   *
   * **Initial value**: `repeat`
   */
  WebkitMaskRepeatY?: Property.WebkitMaskRepeatY | undefined;
  /**
   * Since December 2023, this feature works across the latest devices and browser versions. This feature might not work in older devices or browsers.
   *
   * **Syntax**: `<bg-size>#`
   *
   * **Initial value**: `auto auto`
   */
  WebkitMaskSize?: Property.WebkitMaskSize<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since January 2020.
   *
   * **Syntax**: `<'max-width'>`
   *
   * **Initial value**: `none`
   */
  WebkitMaxInlineSize?: Property.MaxInlineSize<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2015.
   *
   * **Syntax**: `<integer>`
   *
   * **Initial value**: `0`
   */
  WebkitOrder?: Property.Order | undefined;
  /**
   * **Syntax**: `auto | touch`
   *
   * **Initial value**: `auto`
   */
  WebkitOverflowScrolling?: Property.WebkitOverflowScrolling | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since January 2020.
   *
   * **Syntax**: `<'padding-top'>`
   *
   * **Initial value**: `0`
   */
  WebkitPaddingEnd?: Property.PaddingInlineEnd<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since January 2020.
   *
   * **Syntax**: `<'padding-top'>`
   *
   * **Initial value**: `0`
   */
  WebkitPaddingStart?: Property.PaddingInlineStart<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2015.
   *
   * **Syntax**: `none | <length>`
   *
   * **Initial value**: `none`
   */
  WebkitPerspective?: Property.Perspective<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2015.
   *
   * **Syntax**: `<position>`
   *
   * **Initial value**: `50% 50%`
   */
  WebkitPerspectiveOrigin?: Property.PerspectiveOrigin<TLength> | undefined;
  /**
   * Since May 2025, this feature works across the latest devices and browser versions. This feature might not work in older devices or browsers.
   *
   * **Syntax**: `economy | exact`
   *
   * **Initial value**: `economy`
   */
  WebkitPrintColorAdjust?: Property.PrintColorAdjust | undefined;
  /**
   * Since December 2024, this feature works across the latest devices and browser versions. This feature might not work in older devices or browsers.
   *
   * **Syntax**: `[ alternate || [ over | under ] ] | inter-character`
   *
   * **Initial value**: `alternate`
   */
  WebkitRubyPosition?: Property.RubyPosition | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since April 2022.
   *
   * **Syntax**: `none | [ x | y | block | inline | both ] [ mandatory | proximity ]?`
   *
   * **Initial value**: `none`
   */
  WebkitScrollSnapType?: Property.ScrollSnapType | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since January 2020.
   *
   * **Syntax**: `<length-percentage>`
   *
   * **Initial value**: `0`
   */
  WebkitShapeMargin?: Property.ShapeMargin<TLength> | undefined;
  /**
   * **`-webkit-tap-highlight-color`** is a non-standard CSS property that sets the color of the highlight that appears over a link while it's being tapped. The highlighting indicates to the user that their tap is being successfully recognized, and indicates which element they're tapping on.
   *
   * **Syntax**: `<color>`
   *
   * **Initial value**: `black`
   */
  WebkitTapHighlightColor?: Property.WebkitTapHighlightColor | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since March 2022.
   *
   * **Syntax**: `none | all | [ digits <integer>? ]`
   *
   * **Initial value**: `none`
   */
  WebkitTextCombine?: Property.TextCombineUpright | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since January 2020.
   *
   * **Syntax**: `<color>`
   *
   * **Initial value**: `currentcolor`
   */
  WebkitTextDecorationColor?: Property.TextDecorationColor | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since January 2020.
   *
   * **Syntax**: `none | [ underline || overline || line-through || blink ] | spelling-error | grammar-error`
   *
   * **Initial value**: `none`
   */
  WebkitTextDecorationLine?: Property.TextDecorationLine | undefined;
  /**
   * This feature is not Baseline because it does not work in some of the most widely-used browsers.
   *
   * **Syntax**: `none | [ objects || [ spaces | [ leading-spaces || trailing-spaces ] ] || edges || box-decoration ]`
   *
   * **Initial value**: `objects`
   */
  WebkitTextDecorationSkip?: Property.TextDecorationSkip | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since January 2020.
   *
   * **Syntax**: `solid | double | dotted | dashed | wavy`
   *
   * **Initial value**: `solid`
   */
  WebkitTextDecorationStyle?: Property.TextDecorationStyle | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since March 2022.
   *
   * **Syntax**: `<color>`
   *
   * **Initial value**: `currentcolor`
   */
  WebkitTextEmphasisColor?: Property.TextEmphasisColor | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since March 2022.
   *
   * **Syntax**: `auto | [ over | under ] && [ right | left ]?`
   *
   * **Initial value**: `auto`
   */
  WebkitTextEmphasisPosition?: Property.TextEmphasisPosition | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since March 2022.
   *
   * **Syntax**: `none | [ [ filled | open ] || [ dot | circle | double-circle | triangle | sesame ] ] | <string>`
   *
   * **Initial value**: `none`
   */
  WebkitTextEmphasisStyle?: Property.TextEmphasisStyle | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2016.
   *
   * **Syntax**: `<color>`
   *
   * **Initial value**: `currentcolor`
   */
  WebkitTextFillColor?: Property.WebkitTextFillColor | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2020.
   *
   * **Syntax**: `mixed | upright | sideways`
   *
   * **Initial value**: `mixed`
   */
  WebkitTextOrientation?: Property.TextOrientation | undefined;
  /**
   * This feature is not Baseline because it does not work in some of the most widely-used browsers.
   *
   * **Syntax**: `none | auto | <percentage>`
   *
   * **Initial value**: `auto` for smartphone browsers supporting inflation, `none` in other cases (and then not modifiable).
   */
  WebkitTextSizeAdjust?: Property.TextSizeAdjust | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since April 2017.
   *
   * **Syntax**: `<color>`
   *
   * **Initial value**: `currentcolor`
   */
  WebkitTextStrokeColor?: Property.WebkitTextStrokeColor | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since April 2017.
   *
   * **Syntax**: `<length>`
   *
   * **Initial value**: `0`
   */
  WebkitTextStrokeWidth?: Property.WebkitTextStrokeWidth<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2020.
   *
   * **Syntax**: `auto | from-font | [ under || [ left | right ] ]`
   *
   * **Initial value**: `auto`
   */
  WebkitTextUnderlinePosition?: Property.TextUnderlinePosition | undefined;
  /**
   * The `-webkit-touch-callout` CSS property controls the display of the default callout shown when you touch and hold a touch target.
   *
   * **Syntax**: `default | none`
   *
   * **Initial value**: `default`
   */
  WebkitTouchCallout?: Property.WebkitTouchCallout | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2015.
   *
   * **Syntax**: `none | <transform-list>`
   *
   * **Initial value**: `none`
   */
  WebkitTransform?: Property.Transform | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2015.
   *
   * **Syntax**: `[ <length-percentage> | left | center | right | top | bottom ] | [ [ <length-percentage> | left | center | right ] && [ <length-percentage> | top | center | bottom ] ] <length>?`
   *
   * **Initial value**: `50% 50% 0`
   */
  WebkitTransformOrigin?: Property.TransformOrigin<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2015.
   *
   * **Syntax**: `flat | preserve-3d`
   *
   * **Initial value**: `flat`
   */
  WebkitTransformStyle?: Property.TransformStyle | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2015.
   *
   * **Syntax**: `<time>#`
   *
   * **Initial value**: `0s`
   */
  WebkitTransitionDelay?: Property.TransitionDelay<TTime> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2015.
   *
   * **Syntax**: `<time>#`
   *
   * **Initial value**: `0s`
   */
  WebkitTransitionDuration?: Property.TransitionDuration<TTime> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2015.
   *
   * **Syntax**: `none | <single-transition-property>#`
   *
   * **Initial value**: all
   */
  WebkitTransitionProperty?: Property.TransitionProperty | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2015.
   *
   * **Syntax**: `<easing-function>#`
   *
   * **Initial value**: `ease`
   */
  WebkitTransitionTimingFunction?: Property.TransitionTimingFunction | undefined;
  /**
   * **Syntax**: `read-only | read-write | read-write-plaintext-only`
   *
   * **Initial value**: `read-only`
   */
  WebkitUserModify?: Property.WebkitUserModify | undefined;
  /**
   * This feature is not Baseline because it does not work in some of the most widely-used browsers.
   *
   * **Syntax**: `auto | text | none | all`
   *
   * **Initial value**: `auto`
   */
  WebkitUserSelect?: Property.WebkitUserSelect | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since March 2017.
   *
   * **Syntax**: `horizontal-tb | vertical-rl | vertical-lr | sideways-rl | sideways-lr`
   *
   * **Initial value**: `horizontal-tb`
   */
  WebkitWritingMode?: Property.WritingMode | undefined;
}

export interface VendorShorthandProperties<TLength = (string & {}) | 0, TTime = string & {}> {
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2015.
   *
   * **Syntax**: `<single-animation>#`
   */
  MozAnimation?: Property.Animation<TTime> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `<'border-image-source'> || <'border-image-slice'> [ / <'border-image-width'> | / <'border-image-width'>? / <'border-image-outset'> ]? || <'border-image-repeat'>`
   */
  MozBorderImage?: Property.BorderImage | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since March 2017.
   *
   * **Syntax**: `<'column-rule-width'> || <'column-rule-style'> || <'column-rule-color'>`
   */
  MozColumnRule?: Property.ColumnRule<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since March 2017.
   *
   * **Syntax**: `<'column-width'> || <'column-count'>`
   */
  MozColumns?: Property.Columns<TLength> | undefined;
  /** **Syntax**: `<outline-radius>{1,4} [ / <outline-radius>{1,4} ]?` */
  MozOutlineRadius?: Property.MozOutlineRadius<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2015.
   *
   * **Syntax**: `<single-transition>#`
   */
  MozTransition?: Property.Transition<TTime> | undefined;
  /** **Syntax**: `<'-ms-content-zoom-limit-min'> <'-ms-content-zoom-limit-max'>` */
  msContentZoomLimit?: Property.MsContentZoomLimit | undefined;
  /** **Syntax**: `<'-ms-content-zoom-snap-type'> || <'-ms-content-zoom-snap-points'>` */
  msContentZoomSnap?: Property.MsContentZoomSnap | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2015.
   *
   * **Syntax**: `none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]`
   */
  msFlex?: Property.Flex<TLength> | undefined;
  /** **Syntax**: `<'-ms-scroll-limit-x-min'> <'-ms-scroll-limit-y-min'> <'-ms-scroll-limit-x-max'> <'-ms-scroll-limit-y-max'>` */
  msScrollLimit?: Property.MsScrollLimit | undefined;
  /** **Syntax**: `<'-ms-scroll-snap-type'> <'-ms-scroll-snap-points-x'>` */
  msScrollSnapX?: Property.MsScrollSnapX | undefined;
  /** **Syntax**: `<'-ms-scroll-snap-type'> <'-ms-scroll-snap-points-y'>` */
  msScrollSnapY?: Property.MsScrollSnapY | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2015.
   *
   * **Syntax**: `<single-transition>#`
   */
  msTransition?: Property.Transition<TTime> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2015.
   *
   * **Syntax**: `<single-animation>#`
   */
  WebkitAnimation?: Property.Animation<TTime> | undefined;
  /**
   * The **`-webkit-border-before`** CSS property is a shorthand property for setting the individual logical block start border property values in a single place in the style sheet.
   *
   * **Syntax**: `<'border-width'> || <'border-style'> || <color>`
   */
  WebkitBorderBefore?: Property.WebkitBorderBefore<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `<'border-image-source'> || <'border-image-slice'> [ / <'border-image-width'> | / <'border-image-width'>? / <'border-image-outset'> ]? || <'border-image-repeat'>`
   */
  WebkitBorderImage?: Property.BorderImage | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `<length-percentage [0,∞]>{1,4} [ / <length-percentage [0,∞]>{1,4} ]?`
   */
  WebkitBorderRadius?: Property.BorderRadius<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since March 2017.
   *
   * **Syntax**: `<'column-rule-width'> || <'column-rule-style'> || <'column-rule-color'>`
   */
  WebkitColumnRule?: Property.ColumnRule<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since March 2017.
   *
   * **Syntax**: `<'column-width'> || <'column-count'>`
   */
  WebkitColumns?: Property.Columns<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2015.
   *
   * **Syntax**: `none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]`
   */
  WebkitFlex?: Property.Flex<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2015.
   *
   * **Syntax**: `<'flex-direction'> || <'flex-wrap'>`
   */
  WebkitFlexFlow?: Property.FlexFlow | undefined;
  /**
   * Since December 2023, this feature works across the latest devices and browser versions. This feature might not work in older devices or browsers.
   *
   * **Syntax**: `[ <mask-reference> || <position> [ / <bg-size> ]? || <repeat-style> || [ <visual-box> | border | padding | content | text ] || [ <visual-box> | border | padding | content ] ]#`
   */
  WebkitMask?: Property.WebkitMask<TLength> | undefined;
  /**
   * This feature is not Baseline because it does not work in some of the most widely-used browsers.
   *
   * **Syntax**: `<'mask-border-source'> || <'mask-border-slice'> [ / <'mask-border-width'>? [ / <'mask-border-outset'> ]? ]? || <'mask-border-repeat'> || <'mask-border-mode'>`
   */
  WebkitMaskBoxImage?: Property.MaskBorder | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since March 2022.
   *
   * **Syntax**: `<'text-emphasis-style'> || <'text-emphasis-color'>`
   */
  WebkitTextEmphasis?: Property.TextEmphasis | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since April 2017.
   *
   * **Syntax**: `<length> || <color>`
   */
  WebkitTextStroke?: Property.WebkitTextStroke<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2015.
   *
   * **Syntax**: `<single-transition>#`
   */
  WebkitTransition?: Property.Transition<TTime> | undefined;
}

export interface VendorProperties<TLength = (string & {}) | 0, TTime = string & {}> extends VendorLonghandProperties<TLength, TTime>, VendorShorthandProperties<TLength, TTime> {}

export interface ObsoleteProperties<TLength = (string & {}) | 0, TTime = string & {}> {
  /**
   * The **`box-align`** CSS property specifies how an element aligns its contents across its layout in a perpendicular direction. The effect of the property is only visible if there is extra space in the box.
   *
   * **Syntax**: `start | center | end | baseline | stretch`
   *
   * **Initial value**: `stretch`
   *
   * @deprecated
   */
  boxAlign?: Property.BoxAlign | undefined;
  /**
   * The **`box-direction`** CSS property specifies whether a box lays out its contents normally (from the top or left edge), or in reverse (from the bottom or right edge).
   *
   * **Syntax**: `normal | reverse | inherit`
   *
   * **Initial value**: `normal`
   *
   * @deprecated
   */
  boxDirection?: Property.BoxDirection | undefined;
  /**
   * The **`-moz-box-flex`** and **`-webkit-box-flex`** CSS properties specify how a `-moz-box` or `-webkit-box` grows to fill the box that contains it, in the direction of the containing box's layout.
   *
   * **Syntax**: `<number>`
   *
   * **Initial value**: `0`
   *
   * @deprecated
   */
  boxFlex?: Property.BoxFlex | undefined;
  /**
   * The **`box-flex-group`** CSS property assigns the flexbox's child elements to a flex group.
   *
   * **Syntax**: `<integer>`
   *
   * **Initial value**: `1`
   *
   * @deprecated
   */
  boxFlexGroup?: Property.BoxFlexGroup | undefined;
  /**
   * The **`box-lines`** CSS property determines whether the box may have a single or multiple lines (rows for horizontally oriented boxes, columns for vertically oriented boxes).
   *
   * **Syntax**: `single | multiple`
   *
   * **Initial value**: `single`
   *
   * @deprecated
   */
  boxLines?: Property.BoxLines | undefined;
  /**
   * The **`box-ordinal-group`** CSS property assigns the flexbox's child elements to an ordinal group.
   *
   * **Syntax**: `<integer>`
   *
   * **Initial value**: `1`
   *
   * @deprecated
   */
  boxOrdinalGroup?: Property.BoxOrdinalGroup | undefined;
  /**
   * The **`box-orient`** CSS property sets whether an element lays out its contents horizontally or vertically.
   *
   * **Syntax**: `horizontal | vertical | inline-axis | block-axis | inherit`
   *
   * **Initial value**: `inline-axis`
   *
   * @deprecated
   */
  boxOrient?: Property.BoxOrient | undefined;
  /**
   * The **`-moz-box-pack`** and **`-webkit-box-pack`** CSS properties specify how a `-moz-box` or `-webkit-box` packs its contents in the direction of its layout. The effect of this is only visible if there is extra space in the box.
   *
   * **Syntax**: `start | center | end | justify`
   *
   * **Initial value**: `start`
   *
   * @deprecated
   */
  boxPack?: Property.BoxPack | undefined;
  /**
   * The **`clip`** CSS property defines a visible portion of an element. The `clip` property applies only to absolutely positioned elements — that is, elements with `position:absolute` or `position:fixed`.
   *
   * **Syntax**: `<shape> | auto`
   *
   * **Initial value**: `auto`
   *
   * @deprecated
   */
  clip?: Property.Clip | undefined;
  /**
   * The **`font-stretch`** CSS property selects a normal, condensed, or expanded face from a font.
   *
   * **Syntax**: `<font-stretch-absolute>`
   *
   * **Initial value**: `normal`
   *
   * @deprecated
   */
  fontStretch?: Property.FontStretch | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `<length-percentage>`
   *
   * **Initial value**: `0`
   *
   * @deprecated
   */
  gridColumnGap?: Property.GridColumnGap<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since October 2017.
   *
   * **Syntax**: `<'grid-row-gap'> <'grid-column-gap'>?`
   *
   * @deprecated
   */
  gridGap?: Property.GridGap<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since October 2017.
   *
   * **Syntax**: `<length-percentage>`
   *
   * **Initial value**: `0`
   *
   * @deprecated
   */
  gridRowGap?: Property.GridRowGap<TLength> | undefined;
  /**
   * **Syntax**: `auto | normal | active | inactive | disabled`
   *
   * **Initial value**: `auto`
   *
   * @deprecated
   */
  imeMode?: Property.ImeMode | undefined;
  /**
   * This feature is not Baseline because it does not work in some of the most widely-used browsers.
   *
   * **Syntax**: `none | <position-area>`
   *
   * **Initial value**: `none`
   *
   * @deprecated
   */
  insetArea?: Property.PositionArea | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since April 2021.
   *
   * **Syntax**: `<'top'>{1,2}`
   *
   * @deprecated
   */
  offsetBlock?: Property.InsetBlock<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since April 2021.
   *
   * **Syntax**: `<'top'>`
   *
   * **Initial value**: `auto`
   *
   * @deprecated
   */
  offsetBlockEnd?: Property.InsetBlockEnd<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since April 2021.
   *
   * **Syntax**: `<'top'>`
   *
   * **Initial value**: `auto`
   *
   * @deprecated
   */
  offsetBlockStart?: Property.InsetBlockStart<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since April 2021.
   *
   * **Syntax**: `<'top'>{1,2}`
   *
   * @deprecated
   */
  offsetInline?: Property.InsetInline<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since April 2021.
   *
   * **Syntax**: `<'top'>`
   *
   * **Initial value**: `auto`
   *
   * @deprecated
   */
  offsetInlineEnd?: Property.InsetInlineEnd<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since April 2021.
   *
   * **Syntax**: `<'top'>`
   *
   * **Initial value**: `auto`
   *
   * @deprecated
   */
  offsetInlineStart?: Property.InsetInlineStart<TLength> | undefined;
  /**
   * The **`page-break-after`** CSS property adjusts page breaks _after_ the current element.
   *
   * **Syntax**: `auto | always | avoid | left | right | recto | verso`
   *
   * **Initial value**: `auto`
   *
   * @deprecated
   */
  pageBreakAfter?: Property.PageBreakAfter | undefined;
  /**
   * The **`page-break-before`** CSS property adjusts page breaks _before_ the current element.
   *
   * **Syntax**: `auto | always | avoid | left | right | recto | verso`
   *
   * **Initial value**: `auto`
   *
   * @deprecated
   */
  pageBreakBefore?: Property.PageBreakBefore | undefined;
  /**
   * The **`page-break-inside`** CSS property adjusts page breaks _inside_ the current element.
   *
   * **Syntax**: `auto | avoid`
   *
   * **Initial value**: `auto`
   *
   * @deprecated
   */
  pageBreakInside?: Property.PageBreakInside | undefined;
  /**
   * This feature is not Baseline because it does not work in some of the most widely-used browsers.
   *
   * **Syntax**: `none | [ [<dashed-ident> || <try-tactic>] | <'position-area'> ]#`
   *
   * **Initial value**: `none`
   *
   * @deprecated
   */
  positionTryOptions?: Property.PositionTryFallbacks | undefined;
  /**
   * **Syntax**: `none | <position>#`
   *
   * **Initial value**: `none`
   *
   * @deprecated
   */
  scrollSnapCoordinate?: Property.ScrollSnapCoordinate<TLength> | undefined;
  /**
   * **Syntax**: `<position>`
   *
   * **Initial value**: `0px 0px`
   *
   * @deprecated
   */
  scrollSnapDestination?: Property.ScrollSnapDestination<TLength> | undefined;
  /**
   * **Syntax**: `none | repeat( <length-percentage> )`
   *
   * **Initial value**: `none`
   *
   * @deprecated
   */
  scrollSnapPointsX?: Property.ScrollSnapPointsX | undefined;
  /**
   * **Syntax**: `none | repeat( <length-percentage> )`
   *
   * **Initial value**: `none`
   *
   * @deprecated
   */
  scrollSnapPointsY?: Property.ScrollSnapPointsY | undefined;
  /**
   * **Syntax**: `none | mandatory | proximity`
   *
   * **Initial value**: `none`
   *
   * @deprecated
   */
  scrollSnapTypeX?: Property.ScrollSnapTypeX | undefined;
  /**
   * **Syntax**: `none | mandatory | proximity`
   *
   * **Initial value**: `none`
   *
   * @deprecated
   */
  scrollSnapTypeY?: Property.ScrollSnapTypeY | undefined;
  /**
   * The **`box-align`** CSS property specifies how an element aligns its contents across its layout in a perpendicular direction. The effect of the property is only visible if there is extra space in the box.
   *
   * **Syntax**: `start | center | end | baseline | stretch`
   *
   * **Initial value**: `stretch`
   *
   * @deprecated
   */
  KhtmlBoxAlign?: Property.BoxAlign | undefined;
  /**
   * The **`box-direction`** CSS property specifies whether a box lays out its contents normally (from the top or left edge), or in reverse (from the bottom or right edge).
   *
   * **Syntax**: `normal | reverse | inherit`
   *
   * **Initial value**: `normal`
   *
   * @deprecated
   */
  KhtmlBoxDirection?: Property.BoxDirection | undefined;
  /**
   * The **`-moz-box-flex`** and **`-webkit-box-flex`** CSS properties specify how a `-moz-box` or `-webkit-box` grows to fill the box that contains it, in the direction of the containing box's layout.
   *
   * **Syntax**: `<number>`
   *
   * **Initial value**: `0`
   *
   * @deprecated
   */
  KhtmlBoxFlex?: Property.BoxFlex | undefined;
  /**
   * The **`box-flex-group`** CSS property assigns the flexbox's child elements to a flex group.
   *
   * **Syntax**: `<integer>`
   *
   * **Initial value**: `1`
   *
   * @deprecated
   */
  KhtmlBoxFlexGroup?: Property.BoxFlexGroup | undefined;
  /**
   * The **`box-lines`** CSS property determines whether the box may have a single or multiple lines (rows for horizontally oriented boxes, columns for vertically oriented boxes).
   *
   * **Syntax**: `single | multiple`
   *
   * **Initial value**: `single`
   *
   * @deprecated
   */
  KhtmlBoxLines?: Property.BoxLines | undefined;
  /**
   * The **`box-ordinal-group`** CSS property assigns the flexbox's child elements to an ordinal group.
   *
   * **Syntax**: `<integer>`
   *
   * **Initial value**: `1`
   *
   * @deprecated
   */
  KhtmlBoxOrdinalGroup?: Property.BoxOrdinalGroup | undefined;
  /**
   * The **`box-orient`** CSS property sets whether an element lays out its contents horizontally or vertically.
   *
   * **Syntax**: `horizontal | vertical | inline-axis | block-axis | inherit`
   *
   * **Initial value**: `inline-axis`
   *
   * @deprecated
   */
  KhtmlBoxOrient?: Property.BoxOrient | undefined;
  /**
   * The **`-moz-box-pack`** and **`-webkit-box-pack`** CSS properties specify how a `-moz-box` or `-webkit-box` packs its contents in the direction of its layout. The effect of this is only visible if there is extra space in the box.
   *
   * **Syntax**: `start | center | end | justify`
   *
   * **Initial value**: `start`
   *
   * @deprecated
   */
  KhtmlBoxPack?: Property.BoxPack | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2020.
   *
   * **Syntax**: `auto | loose | normal | strict | anywhere`
   *
   * **Initial value**: `auto`
   *
   * @deprecated
   */
  KhtmlLineBreak?: Property.LineBreak | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `<opacity-value>`
   *
   * **Initial value**: `1`
   *
   * @deprecated
   */
  KhtmlOpacity?: Property.Opacity | undefined;
  /**
   * This feature is not Baseline because it does not work in some of the most widely-used browsers.
   *
   * **Syntax**: `auto | text | none | all`
   *
   * **Initial value**: `auto`
   *
   * @deprecated
   */
  KhtmlUserSelect?: Property.UserSelect | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `<bg-clip>#`
   *
   * **Initial value**: `border-box`
   *
   * @deprecated
   */
  MozBackgroundClip?: Property.BackgroundClip | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `<visual-box>#`
   *
   * **Initial value**: `padding-box`
   *
   * @deprecated
   */
  MozBackgroundOrigin?: Property.BackgroundOrigin | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `<bg-size>#`
   *
   * **Initial value**: `auto auto`
   *
   * @deprecated
   */
  MozBackgroundSize?: Property.BackgroundSize<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `<length-percentage [0,∞]>{1,4} [ / <length-percentage [0,∞]>{1,4} ]?`
   *
   * @deprecated
   */
  MozBorderRadius?: Property.BorderRadius<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `<length-percentage [0,∞]>{1,2}`
   *
   * **Initial value**: `0`
   *
   * @deprecated
   */
  MozBorderRadiusBottomleft?: Property.BorderBottomLeftRadius<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `<length-percentage [0,∞]>{1,2}`
   *
   * **Initial value**: `0`
   *
   * @deprecated
   */
  MozBorderRadiusBottomright?: Property.BorderBottomRightRadius<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `<length-percentage [0,∞]>{1,2}`
   *
   * **Initial value**: `0`
   *
   * @deprecated
   */
  MozBorderRadiusTopleft?: Property.BorderTopLeftRadius<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `<length-percentage [0,∞]>{1,2}`
   *
   * **Initial value**: `0`
   *
   * @deprecated
   */
  MozBorderRadiusTopright?: Property.BorderTopRightRadius<TLength> | undefined;
  /**
   * The **`box-align`** CSS property specifies how an element aligns its contents across its layout in a perpendicular direction. The effect of the property is only visible if there is extra space in the box.
   *
   * **Syntax**: `start | center | end | baseline | stretch`
   *
   * **Initial value**: `stretch`
   *
   * @deprecated
   */
  MozBoxAlign?: Property.BoxAlign | undefined;
  /**
   * The **`box-direction`** CSS property specifies whether a box lays out its contents normally (from the top or left edge), or in reverse (from the bottom or right edge).
   *
   * **Syntax**: `normal | reverse | inherit`
   *
   * **Initial value**: `normal`
   *
   * @deprecated
   */
  MozBoxDirection?: Property.BoxDirection | undefined;
  /**
   * The **`-moz-box-flex`** and **`-webkit-box-flex`** CSS properties specify how a `-moz-box` or `-webkit-box` grows to fill the box that contains it, in the direction of the containing box's layout.
   *
   * **Syntax**: `<number>`
   *
   * **Initial value**: `0`
   *
   * @deprecated
   */
  MozBoxFlex?: Property.BoxFlex | undefined;
  /**
   * The **`box-ordinal-group`** CSS property assigns the flexbox's child elements to an ordinal group.
   *
   * **Syntax**: `<integer>`
   *
   * **Initial value**: `1`
   *
   * @deprecated
   */
  MozBoxOrdinalGroup?: Property.BoxOrdinalGroup | undefined;
  /**
   * The **`box-orient`** CSS property sets whether an element lays out its contents horizontally or vertically.
   *
   * **Syntax**: `horizontal | vertical | inline-axis | block-axis | inherit`
   *
   * **Initial value**: `inline-axis`
   *
   * @deprecated
   */
  MozBoxOrient?: Property.BoxOrient | undefined;
  /**
   * The **`-moz-box-pack`** and **`-webkit-box-pack`** CSS properties specify how a `-moz-box` or `-webkit-box` packs its contents in the direction of its layout. The effect of this is only visible if there is extra space in the box.
   *
   * **Syntax**: `start | center | end | justify`
   *
   * **Initial value**: `start`
   *
   * @deprecated
   */
  MozBoxPack?: Property.BoxPack | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `none | <shadow>#`
   *
   * **Initial value**: `none`
   *
   * @deprecated
   */
  MozBoxShadow?: Property.BoxShadow | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since March 2017.
   *
   * **Syntax**: `<integer> | auto`
   *
   * **Initial value**: `auto`
   *
   * @deprecated
   */
  MozColumnCount?: Property.ColumnCount | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since March 2017.
   *
   * **Syntax**: `auto | balance`
   *
   * **Initial value**: `balance`
   *
   * @deprecated
   */
  MozColumnFill?: Property.ColumnFill | undefined;
  /**
   * The non-standard **`-moz-float-edge`** CSS property specifies whether the height and width properties of the element include the margin, border, or padding thickness.
   *
   * **Syntax**: `border-box | content-box | margin-box | padding-box`
   *
   * **Initial value**: `content-box`
   *
   * @deprecated
   */
  MozFloatEdge?: Property.MozFloatEdge | undefined;
  /**
   * The **`-moz-force-broken-image-icon`** extended CSS property can be used to force the broken image icon to be shown even when a broken image has an `alt` attribute.
   *
   * **Syntax**: `0 | 1`
   *
   * **Initial value**: `0`
   *
   * @deprecated
   */
  MozForceBrokenImageIcon?: Property.MozForceBrokenImageIcon | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `<opacity-value>`
   *
   * **Initial value**: `1`
   *
   * @deprecated
   */
  MozOpacity?: Property.Opacity | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since March 2023.
   *
   * **Syntax**: `<'outline-width'> || <'outline-style'> || <'outline-color'>`
   *
   * @deprecated
   */
  MozOutline?: Property.Outline<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `auto | <color>`
   *
   * **Initial value**: `auto`
   *
   * @deprecated
   */
  MozOutlineColor?: Property.OutlineColor | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `auto | <outline-line-style>`
   *
   * **Initial value**: `none`
   *
   * @deprecated
   */
  MozOutlineStyle?: Property.OutlineStyle | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `<line-width>`
   *
   * **Initial value**: `medium`
   *
   * @deprecated
   */
  MozOutlineWidth?: Property.OutlineWidth<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2022.
   *
   * **Syntax**: `auto | start | end | left | right | center | justify`
   *
   * **Initial value**: `auto`
   *
   * @deprecated
   */
  MozTextAlignLast?: Property.TextAlignLast | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since January 2020.
   *
   * **Syntax**: `<color>`
   *
   * **Initial value**: `currentcolor`
   *
   * @deprecated
   */
  MozTextDecorationColor?: Property.TextDecorationColor | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since January 2020.
   *
   * **Syntax**: `none | [ underline || overline || line-through || blink ] | spelling-error | grammar-error`
   *
   * **Initial value**: `none`
   *
   * @deprecated
   */
  MozTextDecorationLine?: Property.TextDecorationLine | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since January 2020.
   *
   * **Syntax**: `solid | double | dotted | dashed | wavy`
   *
   * **Initial value**: `solid`
   *
   * @deprecated
   */
  MozTextDecorationStyle?: Property.TextDecorationStyle | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2015.
   *
   * **Syntax**: `<time>#`
   *
   * **Initial value**: `0s`
   *
   * @deprecated
   */
  MozTransitionDelay?: Property.TransitionDelay<TTime> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2015.
   *
   * **Syntax**: `<time>#`
   *
   * **Initial value**: `0s`
   *
   * @deprecated
   */
  MozTransitionDuration?: Property.TransitionDuration<TTime> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2015.
   *
   * **Syntax**: `none | <single-transition-property>#`
   *
   * **Initial value**: all
   *
   * @deprecated
   */
  MozTransitionProperty?: Property.TransitionProperty | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2015.
   *
   * **Syntax**: `<easing-function>#`
   *
   * **Initial value**: `ease`
   *
   * @deprecated
   */
  MozTransitionTimingFunction?: Property.TransitionTimingFunction | undefined;
  /**
   * The **`-moz-user-focus`** CSS property is used to indicate whether an element can have the focus.
   *
   * **Syntax**: `ignore | normal | select-after | select-before | select-menu | select-same | select-all | none`
   *
   * **Initial value**: `none`
   *
   * @deprecated
   */
  MozUserFocus?: Property.MozUserFocus | undefined;
  /**
   * In Mozilla applications, **`-moz-user-input`** determines if an element will accept user input.
   *
   * **Syntax**: `auto | none | enabled | disabled`
   *
   * **Initial value**: `auto`
   *
   * @deprecated
   */
  MozUserInput?: Property.MozUserInput | undefined;
  /**
   * **Syntax**: `auto | normal | active | inactive | disabled`
   *
   * **Initial value**: `auto`
   *
   * @deprecated
   */
  msImeMode?: Property.ImeMode | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2015.
   *
   * **Syntax**: `<single-animation>#`
   *
   * @deprecated
   */
  OAnimation?: Property.Animation<TTime> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2015.
   *
   * **Syntax**: `<time>#`
   *
   * **Initial value**: `0s`
   *
   * @deprecated
   */
  OAnimationDelay?: Property.AnimationDelay<TTime> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2015.
   *
   * **Syntax**: `<single-animation-direction>#`
   *
   * **Initial value**: `normal`
   *
   * @deprecated
   */
  OAnimationDirection?: Property.AnimationDirection | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2015.
   *
   * **Syntax**: `[ auto | <time [0s,∞]> ]#`
   *
   * **Initial value**: `0s`
   *
   * @deprecated
   */
  OAnimationDuration?: Property.AnimationDuration<TTime> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2015.
   *
   * **Syntax**: `<single-animation-fill-mode>#`
   *
   * **Initial value**: `none`
   *
   * @deprecated
   */
  OAnimationFillMode?: Property.AnimationFillMode | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2015.
   *
   * **Syntax**: `<single-animation-iteration-count>#`
   *
   * **Initial value**: `1`
   *
   * @deprecated
   */
  OAnimationIterationCount?: Property.AnimationIterationCount | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2015.
   *
   * **Syntax**: `[ none | <keyframes-name> ]#`
   *
   * **Initial value**: `none`
   *
   * @deprecated
   */
  OAnimationName?: Property.AnimationName | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2015.
   *
   * **Syntax**: `<single-animation-play-state>#`
   *
   * **Initial value**: `running`
   *
   * @deprecated
   */
  OAnimationPlayState?: Property.AnimationPlayState | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2015.
   *
   * **Syntax**: `<easing-function>#`
   *
   * **Initial value**: `ease`
   *
   * @deprecated
   */
  OAnimationTimingFunction?: Property.AnimationTimingFunction | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `<bg-size>#`
   *
   * **Initial value**: `auto auto`
   *
   * @deprecated
   */
  OBackgroundSize?: Property.BackgroundSize<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `<'border-image-source'> || <'border-image-slice'> [ / <'border-image-width'> | / <'border-image-width'>? / <'border-image-outset'> ]? || <'border-image-repeat'>`
   *
   * @deprecated
   */
  OBorderImage?: Property.BorderImage | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since January 2020.
   *
   * **Syntax**: `fill | contain | cover | none | scale-down`
   *
   * **Initial value**: `fill`
   *
   * @deprecated
   */
  OObjectFit?: Property.ObjectFit | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since January 2020.
   *
   * **Syntax**: `<position>`
   *
   * **Initial value**: `50% 50%`
   *
   * @deprecated
   */
  OObjectPosition?: Property.ObjectPosition<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since August 2021.
   *
   * **Syntax**: `<integer> | <length>`
   *
   * **Initial value**: `8`
   *
   * @deprecated
   */
  OTabSize?: Property.TabSize<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
   *
   * **Syntax**: `[ clip | ellipsis | <string> ]{1,2}`
   *
   * **Initial value**: `clip`
   *
   * @deprecated
   */
  OTextOverflow?: Property.TextOverflow | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2015.
   *
   * **Syntax**: `none | <transform-list>`
   *
   * **Initial value**: `none`
   *
   * @deprecated
   */
  OTransform?: Property.Transform | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2015.
   *
   * **Syntax**: `[ <length-percentage> | left | center | right | top | bottom ] | [ [ <length-percentage> | left | center | right ] && [ <length-percentage> | top | center | bottom ] ] <length>?`
   *
   * **Initial value**: `50% 50% 0`
   *
   * @deprecated
   */
  OTransformOrigin?: Property.TransformOrigin<TLength> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2015.
   *
   * **Syntax**: `<single-transition>#`
   *
   * @deprecated
   */
  OTransition?: Property.Transition<TTime> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2015.
   *
   * **Syntax**: `<time>#`
   *
   * **Initial value**: `0s`
   *
   * @deprecated
   */
  OTransitionDelay?: Property.TransitionDelay<TTime> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2015.
   *
   * **Syntax**: `<time>#`
   *
   * **Initial value**: `0s`
   *
   * @deprecated
   */
  OTransitionDuration?: Property.TransitionDuration<TTime> | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2015.
   *
   * **Syntax**: `none | <single-transition-property>#`
   *
   * **Initial value**: all
   *
   * @deprecated
   */
  OTransitionProperty?: Property.TransitionProperty | undefined;
  /**
   * This feature is well established and works across many devices and browser versions. It’s been available across browsers since September 2015.
   *
   * **Syntax**: `<easing-function>#`
   *
   * **Initial value**: `ease`
   *
   * @deprecated
   */
  OTransitionTimingFunction?: Property.TransitionTimingFunction | undefined;
  /**
   * The **`box-align`** CSS property specifies how an element aligns its contents across its layout in a perpendicular direction. The effect of the property is only visible if there is extra space in the box.
   *
   * **Syntax**: `start | center | end | baseline | stretch`
   *
   * **Initial value**: `stretch`
   *
   * @deprecated
   */
  WebkitBoxAlign?: Property.BoxAlign | undefined;
  /**
   * The **`box-direction`** CSS property specifies whether a box lays out its contents normally (from the top or left edge), or in reverse (from the bottom or right edge).
   *
   * **Syntax**: `normal | reverse | inherit`
   *
   * **Initial value**: `normal`
   *
   * @deprecated
   */
  WebkitBoxDirection?: Property.BoxDirection | undefined;
  /**
   * The **`-moz-box-flex`** and **`-webkit-box-flex`** CSS properties specify how a `-moz-box` or `-webkit-box` grows to fill the box that contains it, in the direction of the containing box's layout.
   *
   * **Syntax**: `<number>`
   *
   * **Initial value**: `0`
   *
   * @deprecated
   */
  WebkitBoxFlex?: Property.BoxFlex | undefined;
  /**
   * The **`box-flex-group`** CSS property assigns the flexbox's child elements to a flex group.
   *
   * **Syntax**: `<integer>`
   *
   * **Initial value**: `1`
   *
   * @deprecated
   */
  WebkitBoxFlexGroup?: Property.BoxFlexGroup | undefined;
  /**
   * The **`box-lines`** CSS property determines whether the box may have a single or multiple lines (rows for horizontally oriented boxes, columns for vertically oriented boxes).
   *
   * **Syntax**: `single | multiple`
   *
   * **Initial value**: `single`
   *
   * @deprecated
   */
  WebkitBoxLines?: Property.BoxLines | undefined;
  /**
   * The **`box-ordinal-group`** CSS property assigns the flexbox's child elements to an ordinal group.
   *
   * **Syntax**: `<integer>`
   *
   * **Initial value**: `1`
   *
   * @deprecated
   */
  WebkitBoxOrdinalGroup?: Property.BoxOrdinalGroup | undefined;
  /**
   * The **`box-orient`** CSS property sets whether an element lays out its contents horizontally or vertically.
   *
   * **Syntax**: `horizontal | vertical | inline-axis | block-axis | inherit`
   *
   * **Initial value**: `inline-axis`
   *
   * @deprecated
   */
  WebkitBoxOrient?: Property.BoxOrient | undefined;
  /**
   * The **`-moz-box-pack`** and **`-webkit-box-pack`** CSS properties specify how a `-moz-box` or `-webkit-box` packs its contents in the direction of its layout. The effect of this is only visible if there is extra space in the box.
   *
   * **Syntax**: `start | center | end | justify`
   *
   * **Initial value**: `start`
   *
   * @deprecated
   */
  WebkitBoxPack?: Property.BoxPack | undefined;
}

export interface SvgProperties<TLength = (string & {}) | 0, TTime = string & {}> {
  alignmentBaseline?: Property.AlignmentBaseline | undefined;
  baselineShift?: Property.BaselineShift<TLength> | undefined;
  clip?: Property.Clip | undefined;
  clipPath?: Property.ClipPath | undefined;
  clipRule?: Property.ClipRule | undefined;
  color?: Property.Color | undefined;
  colorInterpolation?: Property.ColorInterpolation | undefined;
  colorRendering?: Property.ColorRendering | undefined;
  cursor?: Property.Cursor | undefined;
  direction?: Property.Direction | undefined;
  display?: Property.Display | undefined;
  dominantBaseline?: Property.DominantBaseline | undefined;
  fill?: Property.Fill | undefined;
  fillOpacity?: Property.FillOpacity | undefined;
  fillRule?: Property.FillRule | undefined;
  filter?: Property.Filter | undefined;
  floodColor?: Property.FloodColor | undefined;
  floodOpacity?: Property.FloodOpacity | undefined;
  font?: Property.Font | undefined;
  fontFamily?: Property.FontFamily | undefined;
  fontSize?: Property.FontSize<TLength> | undefined;
  fontSizeAdjust?: Property.FontSizeAdjust | undefined;
  fontStretch?: Property.FontStretch | undefined;
  fontStyle?: Property.FontStyle | undefined;
  fontVariant?: Property.FontVariant | undefined;
  fontWeight?: Property.FontWeight | undefined;
  glyphOrientationVertical?: Property.GlyphOrientationVertical | undefined;
  imageRendering?: Property.ImageRendering | undefined;
  letterSpacing?: Property.LetterSpacing<TLength> | undefined;
  lightingColor?: Property.LightingColor | undefined;
  lineHeight?: Property.LineHeight<TLength> | undefined;
  marker?: Property.Marker | undefined;
  markerEnd?: Property.MarkerEnd | undefined;
  markerMid?: Property.MarkerMid | undefined;
  markerStart?: Property.MarkerStart | undefined;
  mask?: Property.Mask<TLength> | undefined;
  opacity?: Property.Opacity | undefined;
  overflow?: Property.Overflow | undefined;
  paintOrder?: Property.PaintOrder | undefined;
  pointerEvents?: Property.PointerEvents | undefined;
  shapeRendering?: Property.ShapeRendering | undefined;
  stopColor?: Property.StopColor | undefined;
  stopOpacity?: Property.StopOpacity | undefined;
  stroke?: Property.Stroke | undefined;
  strokeDasharray?: Property.StrokeDasharray<TLength> | undefined;
  strokeDashoffset?: Property.StrokeDashoffset<TLength> | undefined;
  strokeLinecap?: Property.StrokeLinecap | undefined;
  strokeLinejoin?: Property.StrokeLinejoin | undefined;
  strokeMiterlimit?: Property.StrokeMiterlimit | undefined;
  strokeOpacity?: Property.StrokeOpacity | undefined;
  strokeWidth?: Property.StrokeWidth<TLength> | undefined;
  textAnchor?: Property.TextAnchor | undefined;
  textDecoration?: Property.TextDecoration<TLength> | undefined;
  textRendering?: Property.TextRendering | undefined;
  unicodeBidi?: Property.UnicodeBidi | undefined;
  vectorEffect?: Property.VectorEffect | undefined;
  visibility?: Property.Visibility | undefined;
  whiteSpace?: Property.WhiteSpace | undefined;
  wordSpacing?: Property.WordSpacing<TLength> | undefined;
  writingMode?: Property.WritingMode | undefined;
}

export interface Properties<TLength = (string & {}) | 0, TTime = string & {}>
  extends StandardProperties<TLength, TTime>,
    VendorProperties<TLength, TTime>,
    ObsoleteProperties<TLength, TTime>,
    SvgProperties<TLength, TTime> {}

export type Globals = "-moz-initial" | "inherit" | "initial" | "revert" | "revert-layer" | "unset";

declare namespace Property {
  export type AccentColor = Globals | DataType.Color | "auto";

  export type AlignContent = Globals | DataType.ContentDistribution | DataType.ContentPosition | "baseline" | "normal" | (string & {});

  export type AlignItems = Globals | DataType.SelfPosition | "anchor-center" | "baseline" | "normal" | "stretch" | (string & {});

  export type AlignSelf = Globals | DataType.SelfPosition | "anchor-center" | "auto" | "baseline" | "normal" | "stretch" | (string & {});

  export type AlignTracks = Globals | DataType.ContentDistribution | DataType.ContentPosition | "baseline" | "normal" | (string & {});

  export type AlignmentBaseline = Globals | "alphabetic" | "baseline" | "central" | "ideographic" | "mathematical" | "middle" | "text-after-edge" | "text-before-edge";

  export type All = Globals;

  export type AnchorName = Globals | "none" | (string & {});

  export type AnchorScope = Globals | "all" | "none" | (string & {});

  export type Animation<TTime = string & {}> = Globals | DataType.SingleAnimation<TTime> | (string & {});

  export type AnimationComposition = Globals | DataType.SingleAnimationComposition | (string & {});

  export type AnimationDelay<TTime = string & {}> = Globals | TTime | (string & {});

  export type AnimationDirection = Globals | DataType.SingleAnimationDirection | (string & {});

  export type AnimationDuration<TTime = string & {}> = Globals | TTime | "auto" | (string & {});

  export type AnimationFillMode = Globals | DataType.SingleAnimationFillMode | (string & {});

  export type AnimationIterationCount = Globals | "infinite" | (string & {}) | (number & {});

  export type AnimationName = Globals | "none" | (string & {});

  export type AnimationPlayState = Globals | "paused" | "running" | (string & {});

  export type AnimationRange<TLength = (string & {}) | 0> = Globals | DataType.TimelineRangeName | TLength | "normal" | (string & {});

  export type AnimationRangeEnd<TLength = (string & {}) | 0> = Globals | DataType.TimelineRangeName | TLength | "normal" | (string & {});

  export type AnimationRangeStart<TLength = (string & {}) | 0> = Globals | DataType.TimelineRangeName | TLength | "normal" | (string & {});

  export type AnimationTimeline = Globals | DataType.SingleAnimationTimeline | (string & {});

  export type AnimationTimingFunction = Globals | DataType.EasingFunction | (string & {});

  export type Appearance = Globals | DataType.CompatAuto | "auto" | "menulist-button" | "none" | "textfield";

  export type AspectRatio = Globals | "auto" | (string & {}) | (number & {});

  export type BackdropFilter = Globals | "none" | (string & {});

  export type BackfaceVisibility = Globals | "hidden" | "visible";

  export type Background<TLength = (string & {}) | 0> = Globals | DataType.BgLayer<TLength> | DataType.FinalBgLayer<TLength> | (string & {});

  export type BackgroundAttachment = Globals | DataType.Attachment | (string & {});

  export type BackgroundBlendMode = Globals | DataType.BlendMode | (string & {});

  export type BackgroundClip = Globals | DataType.BgClip | (string & {});

  export type BackgroundColor = Globals | DataType.Color;

  export type BackgroundImage = Globals | "none" | (string & {});

  export type BackgroundOrigin = Globals | DataType.VisualBox | (string & {});

  export type BackgroundPosition<TLength = (string & {}) | 0> = Globals | DataType.BgPosition<TLength> | (string & {});

  export type BackgroundPositionX<TLength = (string & {}) | 0> = Globals | TLength | "center" | "left" | "right" | "x-end" | "x-start" | (string & {});

  export type BackgroundPositionY<TLength = (string & {}) | 0> = Globals | TLength | "bottom" | "center" | "top" | "y-end" | "y-start" | (string & {});

  export type BackgroundRepeat = Globals | DataType.RepeatStyle | (string & {});

  export type BackgroundSize<TLength = (string & {}) | 0> = Globals | DataType.BgSize<TLength> | (string & {});

  export type BaselineShift<TLength = (string & {}) | 0> = Globals | TLength | "baseline" | "sub" | "super" | (string & {});

  export type BlockSize<TLength = (string & {}) | 0> =
    | Globals
    | TLength
    | "-moz-fit-content"
    | "-moz-max-content"
    | "-moz-min-content"
    | "auto"
    | "fit-content"
    | "max-content"
    | "min-content"
    | (string & {});

  export type Border<TLength = (string & {}) | 0> = Globals | DataType.LineWidth<TLength> | DataType.LineStyle | DataType.Color | (string & {});

  export type BorderBlock<TLength = (string & {}) | 0> = Globals | DataType.LineWidth<TLength> | DataType.LineStyle | DataType.Color | (string & {});

  export type BorderBlockColor = Globals | DataType.Color | (string & {});

  export type BorderBlockEnd<TLength = (string & {}) | 0> = Globals | DataType.LineWidth<TLength> | DataType.LineStyle | DataType.Color | (string & {});

  export type BorderBlockEndColor = Globals | DataType.Color;

  export type BorderBlockEndStyle = Globals | DataType.LineStyle;

  export type BorderBlockEndWidth<TLength = (string & {}) | 0> = Globals | DataType.LineWidth<TLength>;

  export type BorderBlockStart<TLength = (string & {}) | 0> = Globals | DataType.LineWidth<TLength> | DataType.LineStyle | DataType.Color | (string & {});

  export type BorderBlockStartColor = Globals | DataType.Color;

  export type BorderBlockStartStyle = Globals | DataType.LineStyle;

  export type BorderBlockStartWidth<TLength = (string & {}) | 0> = Globals | DataType.LineWidth<TLength>;

  export type BorderBlockStyle = Globals | DataType.LineStyle | (string & {});

  export type BorderBlockWidth<TLength = (string & {}) | 0> = Globals | DataType.LineWidth<TLength> | (string & {});

  export type BorderBottom<TLength = (string & {}) | 0> = Globals | DataType.LineWidth<TLength> | DataType.LineStyle | DataType.Color | (string & {});

  export type BorderBottomColor = Globals | DataType.Color;

  export type BorderBottomLeftRadius<TLength = (string & {}) | 0> = Globals | TLength | (string & {});

  export type BorderBottomRightRadius<TLength = (string & {}) | 0> = Globals | TLength | (string & {});

  export type BorderBottomStyle = Globals | DataType.LineStyle;

  export type BorderBottomWidth<TLength = (string & {}) | 0> = Globals | DataType.LineWidth<TLength>;

  export type BorderCollapse = Globals | "collapse" | "separate";

  export type BorderColor = Globals | DataType.Color | (string & {});

  export type BorderEndEndRadius<TLength = (string & {}) | 0> = Globals | TLength | (string & {});

  export type BorderEndStartRadius<TLength = (string & {}) | 0> = Globals | TLength | (string & {});

  export type BorderImage = Globals | "none" | "repeat" | "round" | "space" | "stretch" | (string & {}) | (number & {});

  export type BorderImageOutset<TLength = (string & {}) | 0> = Globals | TLength | (string & {}) | (number & {});

  export type BorderImageRepeat = Globals | "repeat" | "round" | "space" | "stretch" | (string & {});

  export type BorderImageSlice = Globals | (string & {}) | (number & {});

  export type BorderImageSource = Globals | "none" | (string & {});

  export type BorderImageWidth<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {}) | (number & {});

  export type BorderInline<TLength = (string & {}) | 0> = Globals | DataType.LineWidth<TLength> | DataType.LineStyle | DataType.Color | (string & {});

  export type BorderInlineColor = Globals | DataType.Color | (string & {});

  export type BorderInlineEnd<TLength = (string & {}) | 0> = Globals | DataType.LineWidth<TLength> | DataType.LineStyle | DataType.Color | (string & {});

  export type BorderInlineEndColor = Globals | DataType.Color;

  export type BorderInlineEndStyle = Globals | DataType.LineStyle;

  export type BorderInlineEndWidth<TLength = (string & {}) | 0> = Globals | DataType.LineWidth<TLength>;

  export type BorderInlineStart<TLength = (string & {}) | 0> = Globals | DataType.LineWidth<TLength> | DataType.LineStyle | DataType.Color | (string & {});

  export type BorderInlineStartColor = Globals | DataType.Color;

  export type BorderInlineStartStyle = Globals | DataType.LineStyle;

  export type BorderInlineStartWidth<TLength = (string & {}) | 0> = Globals | DataType.LineWidth<TLength>;

  export type BorderInlineStyle = Globals | DataType.LineStyle | (string & {});

  export type BorderInlineWidth<TLength = (string & {}) | 0> = Globals | DataType.LineWidth<TLength> | (string & {});

  export type BorderLeft<TLength = (string & {}) | 0> = Globals | DataType.LineWidth<TLength> | DataType.LineStyle | DataType.Color | (string & {});

  export type BorderLeftColor = Globals | DataType.Color;

  export type BorderLeftStyle = Globals | DataType.LineStyle;

  export type BorderLeftWidth<TLength = (string & {}) | 0> = Globals | DataType.LineWidth<TLength>;

  export type BorderRadius<TLength = (string & {}) | 0> = Globals | TLength | (string & {});

  export type BorderRight<TLength = (string & {}) | 0> = Globals | DataType.LineWidth<TLength> | DataType.LineStyle | DataType.Color | (string & {});

  export type BorderRightColor = Globals | DataType.Color;

  export type BorderRightStyle = Globals | DataType.LineStyle;

  export type BorderRightWidth<TLength = (string & {}) | 0> = Globals | DataType.LineWidth<TLength>;

  export type BorderSpacing<TLength = (string & {}) | 0> = Globals | TLength | (string & {});

  export type BorderStartEndRadius<TLength = (string & {}) | 0> = Globals | TLength | (string & {});

  export type BorderStartStartRadius<TLength = (string & {}) | 0> = Globals | TLength | (string & {});

  export type BorderStyle = Globals | DataType.LineStyle | (string & {});

  export type BorderTop<TLength = (string & {}) | 0> = Globals | DataType.LineWidth<TLength> | DataType.LineStyle | DataType.Color | (string & {});

  export type BorderTopColor = Globals | DataType.Color;

  export type BorderTopLeftRadius<TLength = (string & {}) | 0> = Globals | TLength | (string & {});

  export type BorderTopRightRadius<TLength = (string & {}) | 0> = Globals | TLength | (string & {});

  export type BorderTopStyle = Globals | DataType.LineStyle;

  export type BorderTopWidth<TLength = (string & {}) | 0> = Globals | DataType.LineWidth<TLength>;

  export type BorderWidth<TLength = (string & {}) | 0> = Globals | DataType.LineWidth<TLength> | (string & {});

  export type Bottom<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {});

  export type BoxAlign = Globals | "baseline" | "center" | "end" | "start" | "stretch";

  export type BoxDecorationBreak = Globals | "clone" | "slice";

  export type BoxDirection = Globals | "inherit" | "normal" | "reverse";

  export type BoxFlex = Globals | (number & {}) | (string & {});

  export type BoxFlexGroup = Globals | (number & {}) | (string & {});

  export type BoxLines = Globals | "multiple" | "single";

  export type BoxOrdinalGroup = Globals | (number & {}) | (string & {});

  export type BoxOrient = Globals | "block-axis" | "horizontal" | "inherit" | "inline-axis" | "vertical";

  export type BoxPack = Globals | "center" | "end" | "justify" | "start";

  export type BoxShadow = Globals | "none" | (string & {});

  export type BoxSizing = Globals | "border-box" | "content-box";

  export type BreakAfter =
    | Globals
    | "all"
    | "always"
    | "auto"
    | "avoid"
    | "avoid-column"
    | "avoid-page"
    | "avoid-region"
    | "column"
    | "left"
    | "page"
    | "recto"
    | "region"
    | "right"
    | "verso";

  export type BreakBefore =
    | Globals
    | "all"
    | "always"
    | "auto"
    | "avoid"
    | "avoid-column"
    | "avoid-page"
    | "avoid-region"
    | "column"
    | "left"
    | "page"
    | "recto"
    | "region"
    | "right"
    | "verso";

  export type BreakInside = Globals | "auto" | "avoid" | "avoid-column" | "avoid-page" | "avoid-region";

  export type CaptionSide = Globals | "bottom" | "top";

  export type Caret = Globals | DataType.Color | "auto" | "bar" | "block" | "underscore" | (string & {});

  export type CaretColor = Globals | DataType.Color | "auto";

  export type CaretShape = Globals | "auto" | "bar" | "block" | "underscore";

  export type Clear = Globals | "both" | "inline-end" | "inline-start" | "left" | "none" | "right";

  export type Clip = Globals | "auto" | (string & {});

  export type ClipPath = Globals | DataType.GeometryBox | "none" | (string & {});

  export type ClipRule = Globals | "evenodd" | "nonzero";

  export type Color = Globals | DataType.Color;

  export type PrintColorAdjust = Globals | "economy" | "exact";

  export type ColorInterpolationFilters = Globals | "auto" | "linearRGB" | "sRGB";

  export type ColorScheme = Globals | "dark" | "light" | "normal" | (string & {});

  export type ColumnCount = Globals | "auto" | (number & {}) | (string & {});

  export type ColumnFill = Globals | "auto" | "balance";

  export type ColumnGap<TLength = (string & {}) | 0> = Globals | TLength | "normal" | (string & {});

  export type ColumnRule<TLength = (string & {}) | 0> = Globals | DataType.LineWidth<TLength> | DataType.LineStyle | DataType.Color | (string & {});

  export type ColumnRuleColor = Globals | DataType.Color;

  export type ColumnRuleStyle = Globals | DataType.LineStyle | (string & {});

  export type ColumnRuleWidth<TLength = (string & {}) | 0> = Globals | DataType.LineWidth<TLength> | (string & {});

  export type ColumnSpan = Globals | "all" | "none";

  export type ColumnWidth<TLength = (string & {}) | 0> = Globals | TLength | "auto";

  export type Columns<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {}) | (number & {});

  export type Contain = Globals | "content" | "inline-size" | "layout" | "none" | "paint" | "size" | "strict" | "style" | (string & {});

  export type ContainIntrinsicBlockSize<TLength = (string & {}) | 0> = Globals | TLength | "none" | (string & {});

  export type ContainIntrinsicHeight<TLength = (string & {}) | 0> = Globals | TLength | "none" | (string & {});

  export type ContainIntrinsicInlineSize<TLength = (string & {}) | 0> = Globals | TLength | "none" | (string & {});

  export type ContainIntrinsicSize<TLength = (string & {}) | 0> = Globals | TLength | "none" | (string & {});

  export type ContainIntrinsicWidth<TLength = (string & {}) | 0> = Globals | TLength | "none" | (string & {});

  export type Container = Globals | "none" | (string & {});

  export type ContainerName = Globals | "none" | (string & {});

  export type ContainerType = Globals | "inline-size" | "normal" | "scroll-state" | "size" | (string & {});

  export type Content = Globals | DataType.Quote | "none" | "normal" | (string & {});

  export type ContentVisibility = Globals | "auto" | "hidden" | "visible";

  export type CounterIncrement = Globals | "none" | (string & {});

  export type CounterReset = Globals | "none" | (string & {});

  export type CounterSet = Globals | "none" | (string & {});

  export type Cursor = Globals | DataType.CursorPredefined | (string & {});

  export type Cx<TLength = (string & {}) | 0> = Globals | TLength | (string & {});

  export type Cy<TLength = (string & {}) | 0> = Globals | TLength | (string & {});

  export type D = Globals | "none" | (string & {});

  export type Direction = Globals | "ltr" | "rtl";

  export type Display =
    | Globals
    | DataType.DisplayOutside
    | DataType.DisplayInside
    | DataType.DisplayInternal
    | DataType.DisplayLegacy
    | "contents"
    | "list-item"
    | "none"
    | (string & {});

  export type DominantBaseline = Globals | "alphabetic" | "auto" | "central" | "hanging" | "ideographic" | "mathematical" | "middle" | "text-bottom" | "text-top";

  export type EmptyCells = Globals | "hide" | "show";

  export type FieldSizing = Globals | "content" | "fixed";

  export type Fill = Globals | DataType.Paint;

  export type FillOpacity = Globals | (string & {}) | (number & {});

  export type FillRule = Globals | "evenodd" | "nonzero";

  export type Filter = Globals | "none" | (string & {});

  export type Flex<TLength = (string & {}) | 0> = Globals | TLength | "auto" | "content" | "fit-content" | "max-content" | "min-content" | "none" | (string & {}) | (number & {});

  export type FlexBasis<TLength = (string & {}) | 0> =
    | Globals
    | TLength
    | "-moz-fit-content"
    | "-moz-max-content"
    | "-moz-min-content"
    | "-webkit-auto"
    | "auto"
    | "content"
    | "fit-content"
    | "max-content"
    | "min-content"
    | (string & {});

  export type FlexDirection = Globals | "column" | "column-reverse" | "row" | "row-reverse";

  export type FlexFlow = Globals | "column" | "column-reverse" | "nowrap" | "row" | "row-reverse" | "wrap" | "wrap-reverse" | (string & {});

  export type FlexGrow = Globals | (number & {}) | (string & {});

  export type FlexShrink = Globals | (number & {}) | (string & {});

  export type FlexWrap = Globals | "nowrap" | "wrap" | "wrap-reverse";

  export type Float = Globals | "inline-end" | "inline-start" | "left" | "none" | "right";

  export type FloodColor = Globals | DataType.Color;

  export type FloodOpacity = Globals | (string & {}) | (number & {});

  export type Font = Globals | DataType.SystemFamilyName | (string & {});

  export type FontFamily = Globals | DataType.GenericFamily | (string & {});

  export type FontFeatureSettings = Globals | "normal" | (string & {});

  export type FontKerning = Globals | "auto" | "none" | "normal";

  export type FontLanguageOverride = Globals | "normal" | (string & {});

  export type FontOpticalSizing = Globals | "auto" | "none";

  export type FontPalette = Globals | "dark" | "light" | "normal" | (string & {});

  export type FontSize<TLength = (string & {}) | 0> = Globals | DataType.AbsoluteSize | TLength | "larger" | "math" | "smaller" | (string & {});

  export type FontSizeAdjust = Globals | "from-font" | "none" | (string & {}) | (number & {});

  export type FontSmooth<TLength = (string & {}) | 0> = Globals | DataType.AbsoluteSize | TLength | "always" | "auto" | "never";

  export type FontStretch = Globals | DataType.FontStretchAbsolute;

  export type FontStyle = Globals | "italic" | "normal" | "oblique" | (string & {});

  export type FontSynthesis = Globals | "none" | "position" | "small-caps" | "style" | "weight" | (string & {});

  export type FontSynthesisPosition = Globals | "auto" | "none";

  export type FontSynthesisSmallCaps = Globals | "auto" | "none";

  export type FontSynthesisStyle = Globals | "auto" | "none";

  export type FontSynthesisWeight = Globals | "auto" | "none";

  export type FontVariant =
    | Globals
    | DataType.EastAsianVariantValues
    | "all-petite-caps"
    | "all-small-caps"
    | "common-ligatures"
    | "contextual"
    | "diagonal-fractions"
    | "discretionary-ligatures"
    | "full-width"
    | "historical-forms"
    | "historical-ligatures"
    | "lining-nums"
    | "no-common-ligatures"
    | "no-contextual"
    | "no-discretionary-ligatures"
    | "no-historical-ligatures"
    | "none"
    | "normal"
    | "oldstyle-nums"
    | "ordinal"
    | "petite-caps"
    | "proportional-nums"
    | "proportional-width"
    | "ruby"
    | "slashed-zero"
    | "small-caps"
    | "stacked-fractions"
    | "tabular-nums"
    | "titling-caps"
    | "unicase"
    | (string & {});

  export type FontVariantAlternates = Globals | "historical-forms" | "normal" | (string & {});

  export type FontVariantCaps = Globals | "all-petite-caps" | "all-small-caps" | "normal" | "petite-caps" | "small-caps" | "titling-caps" | "unicase";

  export type FontVariantEastAsian = Globals | DataType.EastAsianVariantValues | "full-width" | "normal" | "proportional-width" | "ruby" | (string & {});

  export type FontVariantEmoji = Globals | "emoji" | "normal" | "text" | "unicode";

  export type FontVariantLigatures =
    | Globals
    | "common-ligatures"
    | "contextual"
    | "discretionary-ligatures"
    | "historical-ligatures"
    | "no-common-ligatures"
    | "no-contextual"
    | "no-discretionary-ligatures"
    | "no-historical-ligatures"
    | "none"
    | "normal"
    | (string & {});

  export type FontVariantNumeric =
    | Globals
    | "diagonal-fractions"
    | "lining-nums"
    | "normal"
    | "oldstyle-nums"
    | "ordinal"
    | "proportional-nums"
    | "slashed-zero"
    | "stacked-fractions"
    | "tabular-nums"
    | (string & {});

  export type FontVariantPosition = Globals | "normal" | "sub" | "super";

  export type FontVariationSettings = Globals | "normal" | (string & {});

  export type FontWeight = Globals | DataType.FontWeightAbsolute | "bolder" | "lighter";

  export type FontWidth =
    | Globals
    | "condensed"
    | "expanded"
    | "extra-condensed"
    | "extra-expanded"
    | "normal"
    | "semi-condensed"
    | "semi-expanded"
    | "ultra-condensed"
    | "ultra-expanded"
    | (string & {});

  export type ForcedColorAdjust = Globals | "auto" | "none" | "preserve-parent-color";

  export type Gap<TLength = (string & {}) | 0> = Globals | TLength | "normal" | (string & {});

  export type Grid = Globals | "none" | (string & {});

  export type GridArea = Globals | DataType.GridLine | (string & {});

  export type GridAutoColumns<TLength = (string & {}) | 0> = Globals | DataType.TrackBreadth<TLength> | (string & {});

  export type GridAutoFlow = Globals | "column" | "dense" | "row" | (string & {});

  export type GridAutoRows<TLength = (string & {}) | 0> = Globals | DataType.TrackBreadth<TLength> | (string & {});

  export type GridColumn = Globals | DataType.GridLine | (string & {});

  export type GridColumnEnd = Globals | DataType.GridLine;

  export type GridColumnGap<TLength = (string & {}) | 0> = Globals | TLength | (string & {});

  export type GridColumnStart = Globals | DataType.GridLine;

  export type GridGap<TLength = (string & {}) | 0> = Globals | TLength | (string & {});

  export type GridRow = Globals | DataType.GridLine | (string & {});

  export type GridRowEnd = Globals | DataType.GridLine;

  export type GridRowGap<TLength = (string & {}) | 0> = Globals | TLength | (string & {});

  export type GridRowStart = Globals | DataType.GridLine;

  export type GridTemplate = Globals | "none" | (string & {});

  export type GridTemplateAreas = Globals | "none" | (string & {});

  export type GridTemplateColumns<TLength = (string & {}) | 0> = Globals | DataType.TrackBreadth<TLength> | "none" | "subgrid" | (string & {});

  export type GridTemplateRows<TLength = (string & {}) | 0> = Globals | DataType.TrackBreadth<TLength> | "none" | "subgrid" | (string & {});

  export type HangingPunctuation = Globals | "allow-end" | "first" | "force-end" | "last" | "none" | (string & {});

  export type Height<TLength = (string & {}) | 0> =
    | Globals
    | TLength
    | "-moz-fit-content"
    | "-moz-max-content"
    | "-moz-min-content"
    | "-webkit-fit-content"
    | "auto"
    | "fit-content"
    | "max-content"
    | "min-content"
    | (string & {});

  export type HyphenateCharacter = Globals | "auto" | (string & {});

  export type HyphenateLimitChars = Globals | "auto" | (string & {}) | (number & {});

  export type Hyphens = Globals | "auto" | "manual" | "none";

  export type ImageOrientation = Globals | "flip" | "from-image" | (string & {});

  export type ImageRendering = Globals | "-moz-crisp-edges" | "-webkit-optimize-contrast" | "auto" | "crisp-edges" | "pixelated" | "smooth";

  export type ImageResolution = Globals | "from-image" | (string & {});

  export type ImeMode = Globals | "active" | "auto" | "disabled" | "inactive" | "normal";

  export type InitialLetter = Globals | "normal" | (string & {}) | (number & {});

  export type InitialLetterAlign = Globals | "alphabetic" | "auto" | "hanging" | "ideographic";

  export type InlineSize<TLength = (string & {}) | 0> =
    | Globals
    | TLength
    | "-moz-fit-content"
    | "-moz-max-content"
    | "-moz-min-content"
    | "-webkit-fill-available"
    | "auto"
    | "fit-content"
    | "max-content"
    | "min-content"
    | (string & {});

  export type Inset<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {});

  export type PositionArea = Globals | DataType.PositionArea | "none";

  export type InsetBlock<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {});

  export type InsetBlockEnd<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {});

  export type InsetBlockStart<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {});

  export type InsetInline<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {});

  export type InsetInlineEnd<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {});

  export type InsetInlineStart<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {});

  export type InterpolateSize = Globals | "allow-keywords" | "numeric-only";

  export type Isolation = Globals | "auto" | "isolate";

  export type JustifyContent = Globals | DataType.ContentDistribution | DataType.ContentPosition | "left" | "normal" | "right" | (string & {});

  export type JustifyItems = Globals | DataType.SelfPosition | "anchor-center" | "baseline" | "left" | "legacy" | "normal" | "right" | "stretch" | (string & {});

  export type JustifySelf = Globals | DataType.SelfPosition | "anchor-center" | "auto" | "baseline" | "left" | "normal" | "right" | "stretch" | (string & {});

  export type JustifyTracks = Globals | DataType.ContentDistribution | DataType.ContentPosition | "left" | "normal" | "right" | (string & {});

  export type Left<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {});

  export type LetterSpacing<TLength = (string & {}) | 0> = Globals | TLength | "normal";

  export type LightingColor = Globals | DataType.Color;

  export type LineBreak = Globals | "anywhere" | "auto" | "loose" | "normal" | "strict";

  export type LineClamp = Globals | "none" | (number & {}) | (string & {});

  export type LineHeight<TLength = (string & {}) | 0> = Globals | TLength | "normal" | (string & {}) | (number & {});

  export type LineHeightStep<TLength = (string & {}) | 0> = Globals | TLength;

  export type ListStyle = Globals | "inside" | "none" | "outside" | (string & {});

  export type ListStyleImage = Globals | "none" | (string & {});

  export type ListStylePosition = Globals | "inside" | "outside";

  export type ListStyleType = Globals | "none" | (string & {});

  export type Margin<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {});

  export type MarginBlock<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {});

  export type MarginBlockEnd<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {});

  export type MarginBlockStart<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {});

  export type MarginBottom<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {});

  export type MarginInline<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {});

  export type MarginInlineEnd<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {});

  export type MarginInlineStart<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {});

  export type MarginLeft<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {});

  export type MarginRight<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {});

  export type MarginTop<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {});

  export type MarginTrim = Globals | "all" | "in-flow" | "none";

  export type Marker = Globals | "none" | (string & {});

  export type MarkerEnd = Globals | "none" | (string & {});

  export type MarkerMid = Globals | "none" | (string & {});

  export type MarkerStart = Globals | "none" | (string & {});

  export type Mask<TLength = (string & {}) | 0> = Globals | DataType.MaskLayer<TLength> | (string & {});

  export type MaskBorder = Globals | "alpha" | "luminance" | "none" | "repeat" | "round" | "space" | "stretch" | (string & {}) | (number & {});

  export type MaskBorderMode = Globals | "alpha" | "luminance";

  export type MaskBorderOutset<TLength = (string & {}) | 0> = Globals | TLength | (string & {}) | (number & {});

  export type MaskBorderRepeat = Globals | "repeat" | "round" | "space" | "stretch" | (string & {});

  export type MaskBorderSlice = Globals | (string & {}) | (number & {});

  export type MaskBorderSource = Globals | "none" | (string & {});

  export type MaskBorderWidth<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {}) | (number & {});

  export type MaskClip = Globals | DataType.PaintBox | "no-clip" | "view-box" | (string & {});

  export type MaskComposite = Globals | DataType.CompositingOperator | (string & {});

  export type MaskImage = Globals | "none" | (string & {});

  export type MaskMode = Globals | DataType.MaskingMode | (string & {});

  export type MaskOrigin = Globals | DataType.PaintBox | "view-box" | (string & {});

  export type MaskPosition<TLength = (string & {}) | 0> = Globals | DataType.Position<TLength> | (string & {});

  export type MaskRepeat = Globals | DataType.RepeatStyle | (string & {});

  export type MaskSize<TLength = (string & {}) | 0> = Globals | DataType.BgSize<TLength> | (string & {});

  export type MaskType = Globals | "alpha" | "luminance";

  export type MasonryAutoFlow = Globals | "definite-first" | "next" | "ordered" | "pack" | (string & {});

  export type MathDepth = Globals | "auto-add" | (string & {}) | (number & {});

  export type MathShift = Globals | "compact" | "normal";

  export type MathStyle = Globals | "compact" | "normal";

  export type MaxBlockSize<TLength = (string & {}) | 0> =
    | Globals
    | TLength
    | "-moz-max-content"
    | "-moz-min-content"
    | "-webkit-fill-available"
    | "fit-content"
    | "max-content"
    | "min-content"
    | "none"
    | (string & {});

  export type MaxHeight<TLength = (string & {}) | 0> =
    | Globals
    | TLength
    | "-moz-fit-content"
    | "-moz-max-content"
    | "-moz-min-content"
    | "-webkit-fit-content"
    | "-webkit-max-content"
    | "-webkit-min-content"
    | "fit-content"
    | "intrinsic"
    | "max-content"
    | "min-content"
    | "none"
    | (string & {});

  export type MaxInlineSize<TLength = (string & {}) | 0> =
    | Globals
    | TLength
    | "-moz-fit-content"
    | "-moz-max-content"
    | "-moz-min-content"
    | "-webkit-fill-available"
    | "fit-content"
    | "max-content"
    | "min-content"
    | "none"
    | (string & {});

  export type MaxLines = Globals | "none" | (number & {}) | (string & {});

  export type MaxWidth<TLength = (string & {}) | 0> =
    | Globals
    | TLength
    | "-moz-fit-content"
    | "-moz-max-content"
    | "-moz-min-content"
    | "-webkit-fit-content"
    | "-webkit-max-content"
    | "-webkit-min-content"
    | "fit-content"
    | "intrinsic"
    | "max-content"
    | "min-content"
    | "none"
    | (string & {});

  export type MinBlockSize<TLength = (string & {}) | 0> =
    | Globals
    | TLength
    | "-moz-max-content"
    | "-moz-min-content"
    | "-webkit-fill-available"
    | "auto"
    | "fit-content"
    | "max-content"
    | "min-content"
    | (string & {});

  export type MinHeight<TLength = (string & {}) | 0> =
    | Globals
    | TLength
    | "-moz-fit-content"
    | "-moz-max-content"
    | "-moz-min-content"
    | "-webkit-fit-content"
    | "-webkit-max-content"
    | "-webkit-min-content"
    | "auto"
    | "fit-content"
    | "intrinsic"
    | "max-content"
    | "min-content"
    | (string & {});

  export type MinInlineSize<TLength = (string & {}) | 0> =
    | Globals
    | TLength
    | "-moz-fit-content"
    | "-moz-max-content"
    | "-moz-min-content"
    | "-webkit-fill-available"
    | "auto"
    | "fit-content"
    | "max-content"
    | "min-content"
    | (string & {});

  export type MinWidth<TLength = (string & {}) | 0> =
    | Globals
    | TLength
    | "-moz-fit-content"
    | "-moz-max-content"
    | "-moz-min-content"
    | "-webkit-fit-content"
    | "-webkit-max-content"
    | "-webkit-min-content"
    | "auto"
    | "fit-content"
    | "intrinsic"
    | "max-content"
    | "min-content"
    | "min-intrinsic"
    | (string & {});

  export type MixBlendMode = Globals | DataType.BlendMode | "plus-darker" | "plus-lighter";

  export type Offset<TLength = (string & {}) | 0> = Globals | DataType.Position<TLength> | DataType.PaintBox | "auto" | "none" | "normal" | "view-box" | (string & {});

  export type OffsetDistance<TLength = (string & {}) | 0> = Globals | TLength | (string & {});

  export type OffsetPath = Globals | DataType.PaintBox | "none" | "view-box" | (string & {});

  export type OffsetRotate = Globals | "auto" | "reverse" | (string & {});

  export type ObjectFit = Globals | "contain" | "cover" | "fill" | "none" | "scale-down";

  export type ObjectPosition<TLength = (string & {}) | 0> = Globals | DataType.Position<TLength>;

  export type ObjectViewBox = Globals | "none" | (string & {});

  export type OffsetAnchor<TLength = (string & {}) | 0> = Globals | DataType.Position<TLength> | "auto";

  export type OffsetPosition<TLength = (string & {}) | 0> = Globals | DataType.Position<TLength> | "auto" | "normal";

  export type Opacity = Globals | (string & {}) | (number & {});

  export type Order = Globals | (number & {}) | (string & {});

  export type Orphans = Globals | (number & {}) | (string & {});

  export type Outline<TLength = (string & {}) | 0> = Globals | DataType.LineWidth<TLength> | DataType.OutlineLineStyle | DataType.Color | "auto" | (string & {});

  export type OutlineColor = Globals | DataType.Color | "auto";

  export type OutlineOffset<TLength = (string & {}) | 0> = Globals | TLength;

  export type OutlineStyle = Globals | DataType.OutlineLineStyle | "auto";

  export type OutlineWidth<TLength = (string & {}) | 0> = Globals | DataType.LineWidth<TLength>;

  export type Overflow = Globals | "-moz-hidden-unscrollable" | "auto" | "clip" | "hidden" | "overlay" | "scroll" | "visible" | (string & {});

  export type OverflowAnchor = Globals | "auto" | "none";

  export type OverflowBlock = Globals | "auto" | "clip" | "hidden" | "scroll" | "visible";

  export type OverflowClipBox = Globals | "content-box" | "padding-box";

  export type OverflowClipMargin<TLength = (string & {}) | 0> = Globals | DataType.VisualBox | TLength | (string & {});

  export type OverflowInline = Globals | "auto" | "clip" | "hidden" | "scroll" | "visible";

  export type OverflowWrap = Globals | "anywhere" | "break-word" | "normal";

  export type OverflowX = Globals | "-moz-hidden-unscrollable" | "auto" | "clip" | "hidden" | "overlay" | "scroll" | "visible";

  export type OverflowY = Globals | "-moz-hidden-unscrollable" | "auto" | "clip" | "hidden" | "overlay" | "scroll" | "visible";

  export type Overlay = Globals | "auto" | "none";

  export type OverscrollBehavior = Globals | "auto" | "contain" | "none" | (string & {});

  export type OverscrollBehaviorBlock = Globals | "auto" | "contain" | "none";

  export type OverscrollBehaviorInline = Globals | "auto" | "contain" | "none";

  export type OverscrollBehaviorX = Globals | "auto" | "contain" | "none";

  export type OverscrollBehaviorY = Globals | "auto" | "contain" | "none";

  export type Padding<TLength = (string & {}) | 0> = Globals | TLength | (string & {});

  export type PaddingBlock<TLength = (string & {}) | 0> = Globals | TLength | (string & {});

  export type PaddingBlockEnd<TLength = (string & {}) | 0> = Globals | TLength | (string & {});

  export type PaddingBlockStart<TLength = (string & {}) | 0> = Globals | TLength | (string & {});

  export type PaddingBottom<TLength = (string & {}) | 0> = Globals | TLength | (string & {});

  export type PaddingInline<TLength = (string & {}) | 0> = Globals | TLength | (string & {});

  export type PaddingInlineEnd<TLength = (string & {}) | 0> = Globals | TLength | (string & {});

  export type PaddingInlineStart<TLength = (string & {}) | 0> = Globals | TLength | (string & {});

  export type PaddingLeft<TLength = (string & {}) | 0> = Globals | TLength | (string & {});

  export type PaddingRight<TLength = (string & {}) | 0> = Globals | TLength | (string & {});

  export type PaddingTop<TLength = (string & {}) | 0> = Globals | TLength | (string & {});

  export type Page = Globals | "auto" | (string & {});

  export type PageBreakAfter = Globals | "always" | "auto" | "avoid" | "left" | "recto" | "right" | "verso";

  export type PageBreakBefore = Globals | "always" | "auto" | "avoid" | "left" | "recto" | "right" | "verso";

  export type PageBreakInside = Globals | "auto" | "avoid";

  export type PaintOrder = Globals | "fill" | "markers" | "normal" | "stroke" | (string & {});

  export type Perspective<TLength = (string & {}) | 0> = Globals | TLength | "none";

  export type PerspectiveOrigin<TLength = (string & {}) | 0> = Globals | DataType.Position<TLength>;

  export type PlaceContent = Globals | DataType.ContentDistribution | DataType.ContentPosition | "baseline" | "normal" | (string & {});

  export type PlaceItems = Globals | DataType.SelfPosition | "anchor-center" | "baseline" | "normal" | "stretch" | (string & {});

  export type PlaceSelf = Globals | DataType.SelfPosition | "anchor-center" | "auto" | "baseline" | "normal" | "stretch" | (string & {});

  export type PointerEvents = Globals | "all" | "auto" | "fill" | "inherit" | "none" | "painted" | "stroke" | "visible" | "visibleFill" | "visiblePainted" | "visibleStroke";

  export type Position = Globals | "-webkit-sticky" | "absolute" | "fixed" | "relative" | "static" | "sticky";

  export type PositionAnchor = Globals | "auto" | (string & {});

  export type PositionTry = Globals | DataType.TryTactic | DataType.PositionArea | "none" | (string & {});

  export type PositionTryFallbacks = Globals | DataType.TryTactic | DataType.PositionArea | "none" | (string & {});

  export type PositionTryOrder = Globals | DataType.TrySize | "normal";

  export type PositionVisibility = Globals | "always" | "anchors-valid" | "anchors-visible" | "no-overflow" | (string & {});

  export type Quotes = Globals | "auto" | "none" | (string & {});

  export type R<TLength = (string & {}) | 0> = Globals | TLength | (string & {});

  export type Resize = Globals | "block" | "both" | "horizontal" | "inline" | "none" | "vertical";

  export type Right<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {});

  export type Rotate = Globals | "none" | (string & {});

  export type RowGap<TLength = (string & {}) | 0> = Globals | TLength | "normal" | (string & {});

  export type RubyAlign = Globals | "center" | "space-around" | "space-between" | "start";

  export type RubyMerge = Globals | "auto" | "collapse" | "separate";

  export type RubyOverhang = Globals | "auto" | "none";

  export type RubyPosition = Globals | "alternate" | "inter-character" | "over" | "under" | (string & {});

  export type Rx<TLength = (string & {}) | 0> = Globals | TLength | (string & {});

  export type Ry<TLength = (string & {}) | 0> = Globals | TLength | (string & {});

  export type Scale = Globals | "none" | (string & {}) | (number & {});

  export type ScrollBehavior = Globals | "auto" | "smooth";

  export type ScrollInitialTarget = Globals | "nearest" | "none";

  export type ScrollMargin<TLength = (string & {}) | 0> = Globals | TLength | (string & {});

  export type ScrollMarginBlock<TLength = (string & {}) | 0> = Globals | TLength | (string & {});

  export type ScrollMarginBlockEnd<TLength = (string & {}) | 0> = Globals | TLength;

  export type ScrollMarginBlockStart<TLength = (string & {}) | 0> = Globals | TLength;

  export type ScrollMarginBottom<TLength = (string & {}) | 0> = Globals | TLength;

  export type ScrollMarginInline<TLength = (string & {}) | 0> = Globals | TLength | (string & {});

  export type ScrollMarginInlineEnd<TLength = (string & {}) | 0> = Globals | TLength;

  export type ScrollMarginInlineStart<TLength = (string & {}) | 0> = Globals | TLength;

  export type ScrollMarginLeft<TLength = (string & {}) | 0> = Globals | TLength;

  export type ScrollMarginRight<TLength = (string & {}) | 0> = Globals | TLength;

  export type ScrollMarginTop<TLength = (string & {}) | 0> = Globals | TLength;

  export type ScrollPadding<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {});

  export type ScrollPaddingBlock<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {});

  export type ScrollPaddingBlockEnd<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {});

  export type ScrollPaddingBlockStart<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {});

  export type ScrollPaddingBottom<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {});

  export type ScrollPaddingInline<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {});

  export type ScrollPaddingInlineEnd<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {});

  export type ScrollPaddingInlineStart<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {});

  export type ScrollPaddingLeft<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {});

  export type ScrollPaddingRight<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {});

  export type ScrollPaddingTop<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {});

  export type ScrollSnapAlign = Globals | "center" | "end" | "none" | "start" | (string & {});

  export type ScrollSnapCoordinate<TLength = (string & {}) | 0> = Globals | DataType.Position<TLength> | "none" | (string & {});

  export type ScrollSnapDestination<TLength = (string & {}) | 0> = Globals | DataType.Position<TLength>;

  export type ScrollSnapPointsX = Globals | "none" | (string & {});

  export type ScrollSnapPointsY = Globals | "none" | (string & {});

  export type ScrollSnapStop = Globals | "always" | "normal";

  export type ScrollSnapType = Globals | "block" | "both" | "inline" | "none" | "x" | "y" | (string & {});

  export type ScrollSnapTypeX = Globals | "mandatory" | "none" | "proximity";

  export type ScrollSnapTypeY = Globals | "mandatory" | "none" | "proximity";

  export type ScrollTimeline = Globals | "none" | (string & {});

  export type ScrollTimelineAxis = Globals | "block" | "inline" | "x" | "y" | (string & {});

  export type ScrollTimelineName = Globals | "none" | (string & {});

  export type ScrollbarColor = Globals | "auto" | (string & {});

  export type ScrollbarGutter = Globals | "auto" | "stable" | (string & {});

  export type ScrollbarWidth = Globals | "auto" | "none" | "thin";

  export type ShapeImageThreshold = Globals | (string & {}) | (number & {});

  export type ShapeMargin<TLength = (string & {}) | 0> = Globals | TLength | (string & {});

  export type ShapeOutside = Globals | DataType.VisualBox | "margin-box" | "none" | (string & {});

  export type ShapeRendering = Globals | "auto" | "crispEdges" | "geometricPrecision" | "optimizeSpeed";

  export type SpeakAs = Globals | "digits" | "literal-punctuation" | "no-punctuation" | "normal" | "spell-out" | (string & {});

  export type StopColor = Globals | DataType.Color;

  export type StopOpacity = Globals | (string & {}) | (number & {});

  export type Stroke = Globals | DataType.Paint;

  export type StrokeColor = Globals | DataType.Color;

  export type StrokeDasharray<TLength = (string & {}) | 0> = Globals | DataType.Dasharray<TLength> | "none";

  export type StrokeDashoffset<TLength = (string & {}) | 0> = Globals | TLength | (string & {}) | (number & {});

  export type StrokeLinecap = Globals | "butt" | "round" | "square";

  export type StrokeLinejoin = Globals | "arcs" | "bevel" | "miter" | "miter-clip" | "round";

  export type StrokeMiterlimit = Globals | (number & {}) | (string & {});

  export type StrokeOpacity = Globals | (string & {}) | (number & {});

  export type StrokeWidth<TLength = (string & {}) | 0> = Globals | TLength | (string & {}) | (number & {});

  export type TabSize<TLength = (string & {}) | 0> = Globals | TLength | (number & {}) | (string & {});

  export type TableLayout = Globals | "auto" | "fixed";

  export type TextAlign =
    | Globals
    | "-khtml-center"
    | "-khtml-left"
    | "-khtml-right"
    | "-moz-center"
    | "-moz-left"
    | "-moz-right"
    | "-webkit-center"
    | "-webkit-left"
    | "-webkit-match-parent"
    | "-webkit-right"
    | "center"
    | "end"
    | "justify"
    | "left"
    | "match-parent"
    | "right"
    | "start";

  export type TextAlignLast = Globals | "auto" | "center" | "end" | "justify" | "left" | "right" | "start";

  export type TextAnchor = Globals | "end" | "middle" | "start";

  export type TextAutospace = Globals | DataType.Autospace | "auto" | "normal";

  export type TextBox = Globals | DataType.TextEdge | "auto" | "none" | "normal" | "trim-both" | "trim-end" | "trim-start" | (string & {});

  export type TextBoxEdge = Globals | DataType.TextEdge | "auto";

  export type TextBoxTrim = Globals | "none" | "trim-both" | "trim-end" | "trim-start";

  export type TextCombineUpright = Globals | "all" | "digits" | "none" | (string & {});

  export type TextDecoration<TLength = (string & {}) | 0> =
    | Globals
    | DataType.Color
    | TLength
    | "auto"
    | "blink"
    | "dashed"
    | "dotted"
    | "double"
    | "from-font"
    | "grammar-error"
    | "line-through"
    | "none"
    | "overline"
    | "solid"
    | "spelling-error"
    | "underline"
    | "wavy"
    | (string & {});

  export type TextDecorationColor = Globals | DataType.Color;

  export type TextDecorationLine = Globals | "blink" | "grammar-error" | "line-through" | "none" | "overline" | "spelling-error" | "underline" | (string & {});

  export type TextDecorationSkip = Globals | "box-decoration" | "edges" | "leading-spaces" | "none" | "objects" | "spaces" | "trailing-spaces" | (string & {});

  export type TextDecorationSkipInk = Globals | "all" | "auto" | "none";

  export type TextDecorationStyle = Globals | "dashed" | "dotted" | "double" | "solid" | "wavy";

  export type TextDecorationThickness<TLength = (string & {}) | 0> = Globals | TLength | "auto" | "from-font" | (string & {});

  export type TextEmphasis = Globals | DataType.Color | "circle" | "dot" | "double-circle" | "filled" | "none" | "open" | "sesame" | "triangle" | (string & {});

  export type TextEmphasisColor = Globals | DataType.Color;

  export type TextEmphasisPosition = Globals | "auto" | "over" | "under" | (string & {});

  export type TextEmphasisStyle = Globals | "circle" | "dot" | "double-circle" | "filled" | "none" | "open" | "sesame" | "triangle" | (string & {});

  export type TextIndent<TLength = (string & {}) | 0> = Globals | TLength | (string & {});

  export type TextJustify = Globals | "auto" | "distribute" | "inter-character" | "inter-word" | "none";

  export type TextOrientation = Globals | "mixed" | "sideways" | "sideways-right" | "upright";

  export type TextOverflow = Globals | "clip" | "ellipsis" | (string & {});

  export type TextRendering = Globals | "auto" | "geometricPrecision" | "optimizeLegibility" | "optimizeSpeed";

  export type TextShadow = Globals | "none" | (string & {});

  export type TextSizeAdjust = Globals | "auto" | "none" | (string & {});

  export type TextSpacingTrim = Globals | "normal" | "space-all" | "space-first" | "trim-start";

  export type TextTransform = Globals | "capitalize" | "full-size-kana" | "full-width" | "lowercase" | "math-auto" | "none" | "uppercase" | (string & {});

  export type TextUnderlineOffset<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {});

  export type TextUnderlinePosition = Globals | "auto" | "from-font" | "left" | "right" | "under" | (string & {});

  export type TextWrap = Globals | "auto" | "balance" | "nowrap" | "pretty" | "stable" | "wrap" | (string & {});

  export type TextWrapMode = Globals | "nowrap" | "wrap";

  export type TextWrapStyle = Globals | "auto" | "balance" | "pretty" | "stable";

  export type TimelineScope = Globals | "none" | (string & {});

  export type Top<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {});

  export type TouchAction =
    | Globals
    | "-ms-manipulation"
    | "-ms-none"
    | "-ms-pan-x"
    | "-ms-pan-y"
    | "-ms-pinch-zoom"
    | "auto"
    | "manipulation"
    | "none"
    | "pan-down"
    | "pan-left"
    | "pan-right"
    | "pan-up"
    | "pan-x"
    | "pan-y"
    | "pinch-zoom"
    | (string & {});

  export type Transform = Globals | "none" | (string & {});

  export type TransformBox = Globals | "border-box" | "content-box" | "fill-box" | "stroke-box" | "view-box";

  export type TransformOrigin<TLength = (string & {}) | 0> = Globals | TLength | "bottom" | "center" | "left" | "right" | "top" | (string & {});

  export type TransformStyle = Globals | "flat" | "preserve-3d";

  export type Transition<TTime = string & {}> = Globals | DataType.SingleTransition<TTime> | (string & {});

  export type TransitionBehavior = Globals | "allow-discrete" | "normal" | (string & {});

  export type TransitionDelay<TTime = string & {}> = Globals | TTime | (string & {});

  export type TransitionDuration<TTime = string & {}> = Globals | TTime | (string & {});

  export type TransitionProperty = Globals | "all" | "none" | (string & {});

  export type TransitionTimingFunction = Globals | DataType.EasingFunction | (string & {});

  export type Translate<TLength = (string & {}) | 0> = Globals | TLength | "none" | (string & {});

  export type UnicodeBidi =
    | Globals
    | "-moz-isolate"
    | "-moz-isolate-override"
    | "-moz-plaintext"
    | "-webkit-isolate"
    | "-webkit-isolate-override"
    | "-webkit-plaintext"
    | "bidi-override"
    | "embed"
    | "isolate"
    | "isolate-override"
    | "normal"
    | "plaintext";

  export type UserSelect = Globals | "-moz-none" | "all" | "auto" | "none" | "text";

  export type VectorEffect = Globals | "fixed-position" | "non-rotation" | "non-scaling-size" | "non-scaling-stroke" | "none";

  export type VerticalAlign<TLength = (string & {}) | 0> =
    | Globals
    | TLength
    | "baseline"
    | "bottom"
    | "middle"
    | "sub"
    | "super"
    | "text-bottom"
    | "text-top"
    | "top"
    | (string & {});

  export type ViewTimeline = Globals | "none" | (string & {});

  export type ViewTimelineAxis = Globals | "block" | "inline" | "x" | "y" | (string & {});

  export type ViewTimelineInset<TLength = (string & {}) | 0> = Globals | TLength | "auto" | (string & {});

  export type ViewTimelineName = Globals | "none" | (string & {});

  export type ViewTransitionClass = Globals | "none" | (string & {});

  export type ViewTransitionName = Globals | "match-element" | "none" | (string & {});

  export type Visibility = Globals | "collapse" | "hidden" | "visible";

  export type WhiteSpace =
    | Globals
    | "-moz-pre-wrap"
    | "break-spaces"
    | "collapse"
    | "normal"
    | "nowrap"
    | "pre"
    | "pre-line"
    | "pre-wrap"
    | "preserve"
    | "preserve-breaks"
    | "preserve-spaces"
    | "wrap"
    | (string & {});

  export type WhiteSpaceCollapse = Globals | "break-spaces" | "collapse" | "preserve" | "preserve-breaks" | "preserve-spaces";

  export type Widows = Globals | (number & {}) | (string & {});

  export type Width<TLength = (string & {}) | 0> =
    | Globals
    | TLength
    | "-moz-fit-content"
    | "-moz-max-content"
    | "-moz-min-content"
    | "-webkit-fit-content"
    | "-webkit-max-content"
    | "auto"
    | "fit-content"
    | "intrinsic"
    | "max-content"
    | "min-content"
    | "min-intrinsic"
    | (string & {});

  export type WillChange = Globals | DataType.AnimateableFeature | "auto" | (string & {});

  export type WordBreak = Globals | "auto-phrase" | "break-all" | "break-word" | "keep-all" | "normal";

  export type WordSpacing<TLength = (string & {}) | 0> = Globals | TLength | "normal";

  export type WordWrap = Globals | "break-word" | "normal";

  export type WritingMode = Globals | "horizontal-tb" | "sideways-lr" | "sideways-rl" | "vertical-lr" | "vertical-rl";

  export type X<TLength = (string & {}) | 0> = Globals | TLength | (string & {});

  export type Y<TLength = (string & {}) | 0> = Globals | TLength | (string & {});

  export type ZIndex = Globals | "auto" | (number & {}) | (string & {});

  export type Zoom = Globals | "normal" | "reset" | (string & {}) | (number & {});

  export type MozAppearance =
    | Globals
    | "-moz-mac-unified-toolbar"
    | "-moz-win-borderless-glass"
    | "-moz-win-browsertabbar-toolbox"
    | "-moz-win-communications-toolbox"
    | "-moz-win-communicationstext"
    | "-moz-win-exclude-glass"
    | "-moz-win-glass"
    | "-moz-win-media-toolbox"
    | "-moz-win-mediatext"
    | "-moz-window-button-box"
    | "-moz-window-button-box-maximized"
    | "-moz-window-button-close"
    | "-moz-window-button-maximize"
    | "-moz-window-button-minimize"
    | "-moz-window-button-restore"
    | "-moz-window-frame-bottom"
    | "-moz-window-frame-left"
    | "-moz-window-frame-right"
    | "-moz-window-titlebar"
    | "-moz-window-titlebar-maximized"
    | "button"
    | "button-arrow-down"
    | "button-arrow-next"
    | "button-arrow-previous"
    | "button-arrow-up"
    | "button-bevel"
    | "button-focus"
    | "caret"
    | "checkbox"
    | "checkbox-container"
    | "checkbox-label"
    | "checkmenuitem"
    | "dualbutton"
    | "groupbox"
    | "listbox"
    | "listitem"
    | "menuarrow"
    | "menubar"
    | "menucheckbox"
    | "menuimage"
    | "menuitem"
    | "menuitemtext"
    | "menulist"
    | "menulist-button"
    | "menulist-text"
    | "menulist-textfield"
    | "menupopup"
    | "menuradio"
    | "menuseparator"
    | "meterbar"
    | "meterchunk"
    | "none"
    | "progressbar"
    | "progressbar-vertical"
    | "progresschunk"
    | "progresschunk-vertical"
    | "radio"
    | "radio-container"
    | "radio-label"
    | "radiomenuitem"
    | "range"
    | "range-thumb"
    | "resizer"
    | "resizerpanel"
    | "scale-horizontal"
    | "scale-vertical"
    | "scalethumb-horizontal"
    | "scalethumb-vertical"
    | "scalethumbend"
    | "scalethumbstart"
    | "scalethumbtick"
    | "scrollbarbutton-down"
    | "scrollbarbutton-left"
    | "scrollbarbutton-right"
    | "scrollbarbutton-up"
    | "scrollbarthumb-horizontal"
    | "scrollbarthumb-vertical"
    | "scrollbartrack-horizontal"
    | "scrollbartrack-vertical"
    | "searchfield"
    | "separator"
    | "sheet"
    | "spinner"
    | "spinner-downbutton"
    | "spinner-textfield"
    | "spinner-upbutton"
    | "splitter"
    | "statusbar"
    | "statusbarpanel"
    | "tab"
    | "tab-scroll-arrow-back"
    | "tab-scroll-arrow-forward"
    | "tabpanel"
    | "tabpanels"
    | "textfield"
    | "textfield-multiline"
    | "toolbar"
    | "toolbarbutton"
    | "toolbarbutton-dropdown"
    | "toolbargripper"
    | "toolbox"
    | "tooltip"
    | "treeheader"
    | "treeheadercell"
    | "treeheadersortarrow"
    | "treeitem"
    | "treeline"
    | "treetwisty"
    | "treetwistyopen"
    | "treeview";

  export type MozBinding = Globals | "none" | (string & {});

  export type MozBorderBottomColors = Globals | DataType.Color | "none" | (string & {});

  export type MozBorderLeftColors = Globals | DataType.Color | "none" | (string & {});

  export type MozBorderRightColors = Globals | DataType.Color | "none" | (string & {});

  export type MozBorderTopColors = Globals | DataType.Color | "none" | (string & {});

  export type MozContextProperties = Globals | "fill" | "fill-opacity" | "none" | "stroke" | "stroke-opacity" | (string & {});

  export type MozFloatEdge = Globals | "border-box" | "content-box" | "margin-box" | "padding-box";

  export type MozForceBrokenImageIcon = Globals | 0 | (string & {}) | 1;

  export type MozOrient = Globals | "block" | "horizontal" | "inline" | "vertical";

  export type MozOutlineRadius<TLength = (string & {}) | 0> = Globals | TLength | (string & {});

  export type MozOutlineRadiusBottomleft<TLength = (string & {}) | 0> = Globals | TLength | (string & {});

  export type MozOutlineRadiusBottomright<TLength = (string & {}) | 0> = Globals | TLength | (string & {});

  export type MozOutlineRadiusTopleft<TLength = (string & {}) | 0> = Globals | TLength | (string & {});

  export type MozOutlineRadiusTopright<TLength = (string & {}) | 0> = Globals | TLength | (string & {});

  export type MozStackSizing = Globals | "ignore" | "stretch-to-fit";

  export type MozTextBlink = Globals | "blink" | "none";

  export type MozUserFocus = Globals | "ignore" | "none" | "normal" | "select-after" | "select-all" | "select-before" | "select-menu" | "select-same";

  export type MozUserInput = Globals | "auto" | "disabled" | "enabled" | "none";

  export type MozUserModify = Globals | "read-only" | "read-write" | "write-only";

  export type MozWindowDragging = Globals | "drag" | "no-drag";

  export type MozWindowShadow = Globals | "default" | "menu" | "none" | "sheet" | "tooltip";

  export type MsAccelerator = Globals | "false" | "true";

  export type MsBlockProgression = Globals | "bt" | "lr" | "rl" | "tb";

  export type MsContentZoomChaining = Globals | "chained" | "none";

  export type MsContentZoomLimit = Globals | (string & {});

  export type MsContentZoomLimitMax = Globals | (string & {});

  export type MsContentZoomLimitMin = Globals | (string & {});

  export type MsContentZoomSnap = Globals | "mandatory" | "none" | "proximity" | (string & {});

  export type MsContentZoomSnapPoints = Globals | (string & {});

  export type MsContentZoomSnapType = Globals | "mandatory" | "none" | "proximity";

  export type MsContentZooming = Globals | "none" | "zoom";

  export type MsFilter = Globals | (string & {});

  export type MsFlowFrom = Globals | "none" | (string & {});

  export type MsFlowInto = Globals | "none" | (string & {});

  export type MsGridColumns<TLength = (string & {}) | 0> = Globals | DataType.TrackBreadth<TLength> | "none" | (string & {});

  export type MsGridRows<TLength = (string & {}) | 0> = Globals | DataType.TrackBreadth<TLength> | "none" | (string & {});

  export type MsHighContrastAdjust = Globals | "auto" | "none";

  export type MsHyphenateLimitChars = Globals | "auto" | (string & {}) | (number & {});

  export type MsHyphenateLimitLines = Globals | "no-limit" | (number & {}) | (string & {});

  export type MsHyphenateLimitZone<TLength = (string & {}) | 0> = Globals | TLength | (string & {});

  export type MsImeAlign = Globals | "after" | "auto";

  export type MsOverflowStyle = Globals | "-ms-autohiding-scrollbar" | "auto" | "none" | "scrollbar";

  export type MsScrollChaining = Globals | "chained" | "none";

  export type MsScrollLimit = Globals | (string & {});

  export type MsScrollLimitXMax<TLength = (string & {}) | 0> = Globals | TLength | "auto";

  export type MsScrollLimitXMin<TLength = (string & {}) | 0> = Globals | TLength;

  export type MsScrollLimitYMax<TLength = (string & {}) | 0> = Globals | TLength | "auto";

  export type MsScrollLimitYMin<TLength = (string & {}) | 0> = Globals | TLength;

  export type MsScrollRails = Globals | "none" | "railed";

  export type MsScrollSnapPointsX = Globals | (string & {});

  export type MsScrollSnapPointsY = Globals | (string & {});

  export type MsScrollSnapType = Globals | "mandatory" | "none" | "proximity";

  export type MsScrollSnapX = Globals | (string & {});

  export type MsScrollSnapY = Globals | (string & {});

  export type MsScrollTranslation = Globals | "none" | "vertical-to-horizontal";

  export type MsScrollbar3dlightColor = Globals | DataType.Color;

  export type MsScrollbarArrowColor = Globals | DataType.Color;

  export type MsScrollbarBaseColor = Globals | DataType.Color;

  export type MsScrollbarDarkshadowColor = Globals | DataType.Color;

  export type MsScrollbarFaceColor = Globals | DataType.Color;

  export type MsScrollbarHighlightColor = Globals | DataType.Color;

  export type MsScrollbarShadowColor = Globals | DataType.Color;

  export type MsScrollbarTrackColor = Globals | DataType.Color;

  export type MsTextAutospace = Globals | "ideograph-alpha" | "ideograph-numeric" | "ideograph-parenthesis" | "ideograph-space" | "none";

  export type MsTouchSelect = Globals | "grippers" | "none";

  export type MsUserSelect = Globals | "element" | "none" | "text";

  export type MsWrapFlow = Globals | "auto" | "both" | "clear" | "end" | "maximum" | "start";

  export type MsWrapMargin<TLength = (string & {}) | 0> = Globals | TLength;

  export type MsWrapThrough = Globals | "none" | "wrap";

  export type WebkitAppearance =
    | Globals
    | "-apple-pay-button"
    | "button"
    | "button-bevel"
    | "caret"
    | "checkbox"
    | "default-button"
    | "inner-spin-button"
    | "listbox"
    | "listitem"
    | "media-controls-background"
    | "media-controls-fullscreen-background"
    | "media-current-time-display"
    | "media-enter-fullscreen-button"
    | "media-exit-fullscreen-button"
    | "media-fullscreen-button"
    | "media-mute-button"
    | "media-overlay-play-button"
    | "media-play-button"
    | "media-seek-back-button"
    | "media-seek-forward-button"
    | "media-slider"
    | "media-sliderthumb"
    | "media-time-remaining-display"
    | "media-toggle-closed-captions-button"
    | "media-volume-slider"
    | "media-volume-slider-container"
    | "media-volume-sliderthumb"
    | "menulist"
    | "menulist-button"
    | "menulist-text"
    | "menulist-textfield"
    | "meter"
    | "none"
    | "progress-bar"
    | "progress-bar-value"
    | "push-button"
    | "radio"
    | "searchfield"
    | "searchfield-cancel-button"
    | "searchfield-decoration"
    | "searchfield-results-button"
    | "searchfield-results-decoration"
    | "slider-horizontal"
    | "slider-vertical"
    | "sliderthumb-horizontal"
    | "sliderthumb-vertical"
    | "square-button"
    | "textarea"
    | "textfield";

  export type WebkitBorderBefore<TLength = (string & {}) | 0> = Globals | DataType.LineWidth<TLength> | DataType.LineStyle | DataType.Color | (string & {});

  export type WebkitBorderBeforeColor = Globals | DataType.Color;

  export type WebkitBorderBeforeStyle = Globals | DataType.LineStyle | (string & {});

  export type WebkitBorderBeforeWidth<TLength = (string & {}) | 0> = Globals | DataType.LineWidth<TLength> | (string & {});

  export type WebkitBoxReflect<TLength = (string & {}) | 0> = Globals | TLength | "above" | "below" | "left" | "right" | (string & {});

  export type WebkitLineClamp = Globals | "none" | (number & {}) | (string & {});

  export type WebkitMask<TLength = (string & {}) | 0> =
    | Globals
    | DataType.Position<TLength>
    | DataType.RepeatStyle
    | DataType.VisualBox
    | "border"
    | "content"
    | "none"
    | "padding"
    | "text"
    | (string & {});

  export type WebkitMaskAttachment = Globals | DataType.Attachment | (string & {});

  export type WebkitMaskClip = Globals | DataType.PaintBox | "border" | "content" | "no-clip" | "padding" | "text" | "view-box" | (string & {});

  export type WebkitMaskComposite = Globals | DataType.CompositeStyle | (string & {});

  export type WebkitMaskImage = Globals | "none" | (string & {});

  export type WebkitMaskOrigin = Globals | DataType.PaintBox | "border" | "content" | "padding" | "view-box" | (string & {});

  export type WebkitMaskPosition<TLength = (string & {}) | 0> = Globals | DataType.Position<TLength> | (string & {});

  export type WebkitMaskPositionX<TLength = (string & {}) | 0> = Globals | TLength | "center" | "left" | "right" | (string & {});

  export type WebkitMaskPositionY<TLength = (string & {}) | 0> = Globals | TLength | "bottom" | "center" | "top" | (string & {});

  export type WebkitMaskRepeat = Globals | DataType.RepeatStyle | (string & {});

  export type WebkitMaskRepeatX = Globals | "no-repeat" | "repeat" | "round" | "space";

  export type WebkitMaskRepeatY = Globals | "no-repeat" | "repeat" | "round" | "space";

  export type WebkitMaskSize<TLength = (string & {}) | 0> = Globals | DataType.BgSize<TLength> | (string & {});

  export type WebkitOverflowScrolling = Globals | "auto" | "touch";

  export type WebkitTapHighlightColor = Globals | DataType.Color;

  export type WebkitTextFillColor = Globals | DataType.Color;

  export type WebkitTextStroke<TLength = (string & {}) | 0> = Globals | DataType.Color | TLength | (string & {});

  export type WebkitTextStrokeColor = Globals | DataType.Color;

  export type WebkitTextStrokeWidth<TLength = (string & {}) | 0> = Globals | TLength;

  export type WebkitTouchCallout = Globals | "default" | "none";

  export type WebkitUserModify = Globals | "read-only" | "read-write" | "read-write-plaintext-only";

  export type WebkitUserSelect = Globals | "all" | "auto" | "none" | "text";

  export type ColorInterpolation = Globals | "auto" | "linearRGB" | "sRGB";

  export type ColorRendering = Globals | "auto" | "optimizeQuality" | "optimizeSpeed";

  export type GlyphOrientationVertical = Globals | "auto" | (string & {}) | (number & {});
}

/**
 * **Attention!** Data types receives its name from the spec. E.g. `<color>` becomes `DataType.Color` and
 * `<content-distribution>` becomes `DataType.ContentDistribution`. It happens quite frequent that these data types
 * are split into several data types or/and name changes as the spec develops. So there's a risk that a minor/patch
 * update from `csstype` can break your typing if you're using the `DataType` namespace.
 */
declare namespace DataType {
  type AbsoluteSize = "large" | "medium" | "small" | "x-large" | "x-small" | "xx-large" | "xx-small" | "xxx-large";

  type AnimateableFeature = "contents" | "scroll-position" | (string & {});

  type Attachment = "fixed" | "local" | "scroll";

  type Autospace = "ideograph-alpha" | "ideograph-numeric" | "insert" | "no-autospace" | "punctuation" | "replace" | (string & {});

  type BgClip = VisualBox | "border-area" | "text";

  type BgLayer<TLength> = BgPosition<TLength> | RepeatStyle | Attachment | VisualBox | "none" | (string & {});

  type BgPosition<TLength> = TLength | "bottom" | "center" | "left" | "right" | "top" | (string & {});

  type BgSize<TLength> = TLength | "auto" | "contain" | "cover" | (string & {});

  type BlendMode =
    | "color"
    | "color-burn"
    | "color-dodge"
    | "darken"
    | "difference"
    | "exclusion"
    | "hard-light"
    | "hue"
    | "lighten"
    | "luminosity"
    | "multiply"
    | "normal"
    | "overlay"
    | "saturation"
    | "screen"
    | "soft-light";

  type Color = ColorBase | SystemColor | DeprecatedSystemColor | "currentColor" | (string & {});

  type ColorBase = NamedColor | "transparent" | (string & {});

  type CompatAuto = "button" | "checkbox" | "listbox" | "menulist" | "meter" | "progress-bar" | "radio" | "searchfield" | "textarea";

  type CompositeStyle =
    | "clear"
    | "copy"
    | "destination-atop"
    | "destination-in"
    | "destination-out"
    | "destination-over"
    | "source-atop"
    | "source-in"
    | "source-out"
    | "source-over"
    | "xor";

  type CompositingOperator = "add" | "exclude" | "intersect" | "subtract";

  type ContentDistribution = "space-around" | "space-between" | "space-evenly" | "stretch";

  type ContentPosition = "center" | "end" | "flex-end" | "flex-start" | "start";

  type CubicBezierEasingFunction = "ease" | "ease-in" | "ease-in-out" | "ease-out" | (string & {});

  type CursorPredefined =
    | "-moz-grab"
    | "-moz-zoom-in"
    | "-moz-zoom-out"
    | "-webkit-grab"
    | "-webkit-grabbing"
    | "-webkit-zoom-in"
    | "-webkit-zoom-out"
    | "alias"
    | "all-scroll"
    | "auto"
    | "cell"
    | "col-resize"
    | "context-menu"
    | "copy"
    | "crosshair"
    | "default"
    | "e-resize"
    | "ew-resize"
    | "grab"
    | "grabbing"
    | "help"
    | "move"
    | "n-resize"
    | "ne-resize"
    | "nesw-resize"
    | "no-drop"
    | "none"
    | "not-allowed"
    | "ns-resize"
    | "nw-resize"
    | "nwse-resize"
    | "pointer"
    | "progress"
    | "row-resize"
    | "s-resize"
    | "se-resize"
    | "sw-resize"
    | "text"
    | "vertical-text"
    | "w-resize"
    | "wait"
    | "zoom-in"
    | "zoom-out";

  type Dasharray<TLength> = TLength | (string & {}) | (number & {});

  type DeprecatedSystemColor =
    | "ActiveBorder"
    | "ActiveCaption"
    | "AppWorkspace"
    | "Background"
    | "ButtonHighlight"
    | "ButtonShadow"
    | "CaptionText"
    | "InactiveBorder"
    | "InactiveCaption"
    | "InactiveCaptionText"
    | "InfoBackground"
    | "InfoText"
    | "Menu"
    | "MenuText"
    | "Scrollbar"
    | "ThreeDDarkShadow"
    | "ThreeDFace"
    | "ThreeDHighlight"
    | "ThreeDLightShadow"
    | "ThreeDShadow"
    | "Window"
    | "WindowFrame"
    | "WindowText";

  type DisplayInside = "-ms-flexbox" | "-ms-grid" | "-webkit-flex" | "flex" | "flow" | "flow-root" | "grid" | "ruby" | "table";

  type DisplayInternal =
    | "ruby-base"
    | "ruby-base-container"
    | "ruby-text"
    | "ruby-text-container"
    | "table-caption"
    | "table-cell"
    | "table-column"
    | "table-column-group"
    | "table-footer-group"
    | "table-header-group"
    | "table-row"
    | "table-row-group";

  type DisplayLegacy = "-ms-inline-flexbox" | "-ms-inline-grid" | "-webkit-inline-flex" | "inline-block" | "inline-flex" | "inline-grid" | "inline-list-item" | "inline-table";

  type DisplayOutside = "block" | "inline" | "run-in";

  type EasingFunction = CubicBezierEasingFunction | StepEasingFunction | "linear" | (string & {});

  type EastAsianVariantValues = "jis04" | "jis78" | "jis83" | "jis90" | "simplified" | "traditional";

  type FinalBgLayer<TLength> = BgPosition<TLength> | RepeatStyle | Attachment | VisualBox | Color | "none" | (string & {});

  type FontStretchAbsolute =
    | "condensed"
    | "expanded"
    | "extra-condensed"
    | "extra-expanded"
    | "normal"
    | "semi-condensed"
    | "semi-expanded"
    | "ultra-condensed"
    | "ultra-expanded"
    | (string & {});

  type FontWeightAbsolute = "bold" | "normal" | (number & {}) | (string & {});

  type GenericComplete = "-apple-system" | "cursive" | "fantasy" | "math" | "monospace" | "sans-serif" | "serif" | "system-ui";

  type GenericFamily = GenericComplete | GenericIncomplete | "emoji" | "fangsong";

  type GenericIncomplete = "ui-monospace" | "ui-rounded" | "ui-sans-serif" | "ui-serif";

  type GeometryBox = VisualBox | "fill-box" | "margin-box" | "stroke-box" | "view-box";

  type GridLine = "auto" | (string & {}) | (number & {});

  type LineStyle = "dashed" | "dotted" | "double" | "groove" | "hidden" | "inset" | "none" | "outset" | "ridge" | "solid";

  type LineWidth<TLength> = TLength | "medium" | "thick" | "thin";

  type MaskLayer<TLength> = Position<TLength> | RepeatStyle | GeometryBox | CompositingOperator | MaskingMode | "no-clip" | "none" | (string & {});

  type MaskingMode = "alpha" | "luminance" | "match-source";

  type NamedColor =
    | "aliceblue"
    | "antiquewhite"
    | "aqua"
    | "aquamarine"
    | "azure"
    | "beige"
    | "bisque"
    | "black"
    | "blanchedalmond"
    | "blue"
    | "blueviolet"
    | "brown"
    | "burlywood"
    | "cadetblue"
    | "chartreuse"
    | "chocolate"
    | "coral"
    | "cornflowerblue"
    | "cornsilk"
    | "crimson"
    | "cyan"
    | "darkblue"
    | "darkcyan"
    | "darkgoldenrod"
    | "darkgray"
    | "darkgreen"
    | "darkgrey"
    | "darkkhaki"
    | "darkmagenta"
    | "darkolivegreen"
    | "darkorange"
    | "darkorchid"
    | "darkred"
    | "darksalmon"
    | "darkseagreen"
    | "darkslateblue"
    | "darkslategray"
    | "darkslategrey"
    | "darkturquoise"
    | "darkviolet"
    | "deeppink"
    | "deepskyblue"
    | "dimgray"
    | "dimgrey"
    | "dodgerblue"
    | "firebrick"
    | "floralwhite"
    | "forestgreen"
    | "fuchsia"
    | "gainsboro"
    | "ghostwhite"
    | "gold"
    | "goldenrod"
    | "gray"
    | "green"
    | "greenyellow"
    | "grey"
    | "honeydew"
    | "hotpink"
    | "indianred"
    | "indigo"
    | "ivory"
    | "khaki"
    | "lavender"
    | "lavenderblush"
    | "lawngreen"
    | "lemonchiffon"
    | "lightblue"
    | "lightcoral"
    | "lightcyan"
    | "lightgoldenrodyellow"
    | "lightgray"
    | "lightgreen"
    | "lightgrey"
    | "lightpink"
    | "lightsalmon"
    | "lightseagreen"
    | "lightskyblue"
    | "lightslategray"
    | "lightslategrey"
    | "lightsteelblue"
    | "lightyellow"
    | "lime"
    | "limegreen"
    | "linen"
    | "magenta"
    | "maroon"
    | "mediumaquamarine"
    | "mediumblue"
    | "mediumorchid"
    | "mediumpurple"
    | "mediumseagreen"
    | "mediumslateblue"
    | "mediumspringgreen"
    | "mediumturquoise"
    | "mediumvioletred"
    | "midnightblue"
    | "mintcream"
    | "mistyrose"
    | "moccasin"
    | "navajowhite"
    | "navy"
    | "oldlace"
    | "olive"
    | "olivedrab"
    | "orange"
    | "orangered"
    | "orchid"
    | "palegoldenrod"
    | "palegreen"
    | "paleturquoise"
    | "palevioletred"
    | "papayawhip"
    | "peachpuff"
    | "peru"
    | "pink"
    | "plum"
    | "powderblue"
    | "purple"
    | "rebeccapurple"
    | "red"
    | "rosybrown"
    | "royalblue"
    | "saddlebrown"
    | "salmon"
    | "sandybrown"
    | "seagreen"
    | "seashell"
    | "sienna"
    | "silver"
    | "skyblue"
    | "slateblue"
    | "slategray"
    | "slategrey"
    | "snow"
    | "springgreen"
    | "steelblue"
    | "tan"
    | "teal"
    | "thistle"
    | "tomato"
    | "turquoise"
    | "violet"
    | "wheat"
    | "white"
    | "whitesmoke"
    | "yellow"
    | "yellowgreen";

  type OutlineLineStyle = "dashed" | "dotted" | "double" | "groove" | "inset" | "none" | "outset" | "ridge" | "solid";

  type PageSize = "A3" | "A4" | "A5" | "B4" | "B5" | "JIS-B4" | "JIS-B5" | "ledger" | "legal" | "letter";

  type Paint = Color | "context-fill" | "context-stroke" | "none" | (string & {});

  type PaintBox = VisualBox | "fill-box" | "stroke-box";

  type Position<TLength> = TLength | "bottom" | "center" | "left" | "right" | "top" | (string & {});

  type PositionArea =
    | "block-end"
    | "block-start"
    | "bottom"
    | "center"
    | "end"
    | "inline-end"
    | "inline-start"
    | "left"
    | "right"
    | "self-block-end"
    | "self-block-start"
    | "self-end"
    | "self-inline-end"
    | "self-inline-start"
    | "self-start"
    | "span-all"
    | "span-block-end"
    | "span-block-start"
    | "span-bottom"
    | "span-end"
    | "span-inline-end"
    | "span-inline-start"
    | "span-left"
    | "span-right"
    | "span-self-block-end"
    | "span-self-block-start"
    | "span-self-end"
    | "span-self-inline-end"
    | "span-self-inline-start"
    | "span-self-start"
    | "span-start"
    | "span-top"
    | "span-x-end"
    | "span-x-self-end"
    | "span-x-self-start"
    | "span-x-start"
    | "span-y-end"
    | "span-y-self-end"
    | "span-y-self-start"
    | "span-y-start"
    | "start"
    | "top"
    | "x-end"
    | "x-self-end"
    | "x-self-start"
    | "x-start"
    | "y-end"
    | "y-self-end"
    | "y-self-start"
    | "y-start"
    | (string & {});

  type Quote = "close-quote" | "no-close-quote" | "no-open-quote" | "open-quote";

  type RepeatStyle = "no-repeat" | "repeat" | "repeat-x" | "repeat-y" | "round" | "space" | (string & {});

  type SelfPosition = "center" | "end" | "flex-end" | "flex-start" | "self-end" | "self-start" | "start";

  type SingleAnimation<TTime> =
    | EasingFunction
    | SingleAnimationDirection
    | SingleAnimationFillMode
    | SingleAnimationTimeline
    | TTime
    | "auto"
    | "infinite"
    | "none"
    | "paused"
    | "running"
    | (string & {})
    | (number & {});

  type SingleAnimationComposition = "accumulate" | "add" | "replace";

  type SingleAnimationDirection = "alternate" | "alternate-reverse" | "normal" | "reverse";

  type SingleAnimationFillMode = "backwards" | "both" | "forwards" | "none";

  type SingleAnimationTimeline = "auto" | "none" | (string & {});

  type SingleTransition<TTime> = EasingFunction | TTime | "all" | "allow-discrete" | "none" | "normal" | (string & {});

  type StepEasingFunction = "step-end" | "step-start" | (string & {});

  type SystemColor =
    | "AccentColor"
    | "AccentColorText"
    | "ActiveText"
    | "ButtonBorder"
    | "ButtonFace"
    | "ButtonText"
    | "Canvas"
    | "CanvasText"
    | "Field"
    | "FieldText"
    | "GrayText"
    | "Highlight"
    | "HighlightText"
    | "LinkText"
    | "Mark"
    | "MarkText"
    | "SelectedItem"
    | "SelectedItemText"
    | "VisitedText";

  type SystemFamilyName = "caption" | "icon" | "menu" | "message-box" | "small-caption" | "status-bar";

  type TextEdge = "cap" | "ex" | "ideographic" | "ideographic-ink" | "text" | (string & {});

  type TimelineRangeName = "contain" | "cover" | "entry" | "entry-crossing" | "exit" | "exit-crossing";

  type TrackBreadth<TLength> = TLength | "auto" | "max-content" | "min-content" | (string & {});

  type TrySize = "most-block-size" | "most-height" | "most-inline-size" | "most-width";

  type TryTactic = "flip-block" | "flip-inline" | "flip-start" | (string & {});

  type VisualBox = "border-box" | "content-box" | "padding-box";
}

// type IntRange<F extends number, T extends number> = Exclude<Enumerate<T>, Enumerate<F>>

export interface ISpacing {
    p?: KitsResponsiveValue<Property.Padding | number>;
    padding?: KitsResponsiveValue<Property.Padding | number>;
    pt?: KitsResponsiveValue<Property.PaddingTop | number>;
    paddingTop?: KitsResponsiveValue<Property.PaddingTop | number>;
    pr?: KitsResponsiveValue<Property.PaddingRight | number>;
    paddingRight?: KitsResponsiveValue<Property.PaddingRight | number>;
    pb?: KitsResponsiveValue<Property.PaddingBottom | number>;
    paddingBottom?: KitsResponsiveValue<Property.PaddingBottom | number>;
    pl?: KitsResponsiveValue<Property.PaddingLeft | number>;
    paddingLeft?: KitsResponsiveValue<Property.PaddingLeft | number>;
    px?: KitsResponsiveValue<Property.Padding | number>;
    paddingX?: KitsResponsiveValue<Property.Padding | number>;
    paddingHorizontal?: KitsResponsiveValue<Property.Padding | number>;
    py?: KitsResponsiveValue<Property.Padding | number>;
    paddingY?: KitsResponsiveValue<Property.Padding | number>;
    paddingVertical?: KitsResponsiveValue<Property.Padding | number>;


    m?: KitsResponsiveValue<Property.Margin | number>;
    margin?: KitsResponsiveValue<Property.Margin | number>;
    mt?: KitsResponsiveValue<Property.MarginTop | number>;
    marginTop?: KitsResponsiveValue<Property.MarginTop | number>;
    mr?: KitsResponsiveValue<Property.MarginRight | number>;
    marginRight?: KitsResponsiveValue<Property.MarginRight | number>;
    mb?: KitsResponsiveValue<Property.MarginBottom | number>;
    marginBottom?: KitsResponsiveValue<Property.MarginBottom | number>;
    ml?: KitsResponsiveValue<Property.MarginLeft | number>;
    marginLeft?: KitsResponsiveValue<Property.MarginLeft | number>;
    mx?: KitsResponsiveValue<Property.Margin | number>;
    marginX?: KitsResponsiveValue<Property.Margin | number>;
    marginHorizontal?: KitsResponsiveValue<Property.Margin | number>;
    my?: KitsResponsiveValue<Property.Margin | number>;
    marginY?: KitsResponsiveValue<Property.Margin | number>;
    marginVertical?: KitsResponsiveValue<Property.Margin | number>;

    marginInline?: KitsResponsiveValue<Property.MarginInline | number>;
}

export interface ISizing {
    minW?: KitsResponsiveValue<
        Property.MinWidth | number | "full" | "screen"
    >;
    minWidth?: KitsResponsiveValue<
        Property.MinWidth | number | "full" | "screen"
    >;
    maxW?: KitsResponsiveValue<
        Property.MaxWidth | number | "full" | "screen"
    >;
    maxWidth?: KitsResponsiveValue<
        Property.MaxWidth | number | "full" | "screen"
    >;
    minH?: KitsResponsiveValue<
        Property.MinHeight | number | "full" | "screen"
    >;
    minHeight?: KitsResponsiveValue<
        Property.MinHeight | number | "full" | "screen"
    >;
    maxH?: KitsResponsiveValue<
        Property.MaxHeight | number | "full" | "screen"
    >;
    maxHeight?: KitsResponsiveValue<
        Property.MaxHeight | number | "full" | "screen"
    >;
    w?: KitsResponsiveValue<Property.Width | number | "full" | "screen">;
    width?: KitsResponsiveValue<Property.Width | number | "full" | "screen">;
    h?: KitsResponsiveValue<Property.Height | number | "full" | "screen">;
    height?: KitsResponsiveValue<
        Property.Height | number | "full" | "screen"
    >;
}

export interface IListing {
    listStyleType?: KitsResponsiveValue<Property.ListStyleType>;
    listStyle?: KitsResponsiveValue<Property.ListStyle>;
}

export interface IEffects {
    boxShadow?: KitsResponsiveValue<"none" | Omit<number | string, 0>>;
    shadow?: KitsResponsiveValue<"none" | Omit<number | string, 0>>;
    opacity?: KitsResponsiveValue<Property.Opacity>;

    shadowColor?: null;
    shadowOffset?: null;
    shadowRadius?: null;
    shadowOpacity?: null;

    elevation?: null;

    objectFit?:KitsResponsiveValue<Property.ObjectFit>;
    objectPosition?:KitsResponsiveValue<Property.ObjectPosition>;

    clipPath?:KitsResponsiveValue<Property.ClipPath>
}

export interface IInteractivity {
    appearance?: "appearance-none";
    cursor?: Property.Cursor;
    outline?: Property.Outline;
    pointerEvents?: "none" | "auto";
    userSelect?: "none" | "text" | "all" | "auto";
}

export interface ITransforms {
    translateX?: KitsResponsiveValue<number | string>;
    translateY?: KitsResponsiveValue<number | string>;
    translate?: KitsResponsiveValue<number | string>;
    transformOrigin?: KitsResponsiveValue<
        | SidesValues
        | "center"
        | "top-right"
        | "bottom-right"
        | "bottom-left"
        | "top-left"
    >;
    rotate?: KitsResponsiveValue<-180 | -90 | 90 | 180 | 0>;
}

export interface ITransition {
    transitionProperty?: "none" | "all" | "colors" | "transform";
    transitionDuration?: TimingNumbering | 2000 | 3000;
    transitionFunction?: "linear" | "ease-in" | "ease-out" | "ease-in-out";
    transitionDelay?: TimingNumbering;
}

export interface IBorder {
    borderRadius?: KitsResponsiveValue<
        "circle" | "round" | "none" | SizingValue | string | number | Property.BorderRadius
    >;
    borderRadiusTop?: KitsResponsiveValue<
        "full" | "none" | SizingValue | string | number | Property.BorderRadius
    >;
    borderRadiusBottom?: KitsResponsiveValue<
        "full" | "none" | SizingValue | string | number | Property.BorderRadius
    >;
    borderRadiusRight?: KitsResponsiveValue<
        "full" | "none" | SizingValue | string | number | Property.BorderRadius
    >;
    borderRadiusLeft?: KitsResponsiveValue<
        "full" | "none" | SizingValue | string | number | Property.BorderRadius
    >;
    borderTopLeftRadius?: KitsResponsiveValue<
        | "full"
        | "none"
        | SizingValue
        | string
        | number
        | Property.BorderEndEndRadius
    >;
    borderBottomLeftRadius?: KitsResponsiveValue<
        | "full"
        | "none"
        | SizingValue
        | string
        | number
        | Property.BorderEndStartRadius
    >;
    borderTopRightRadius?: KitsResponsiveValue<
        | "full"
        | "none"
        | SizingValue
        | string
        | number
        | Property.BorderStartStartRadius
    >;
    borderBottomRightRadius?: KitsResponsiveValue<
        | "full"
        | "none"
        | SizingValue
        | string
        | number
        | Property.BorderEndEndRadius
    >;
    borderWidth?: KitsResponsiveValue<Property.BorderWidth | number>;
    borderW?: KitsResponsiveValue<Property.BorderWidth | number>;
    borderX?: KitsResponsiveValue<Property.BorderWidth | number>;
    borderY?: KitsResponsiveValue<Property.BorderWidth | number>;
    borderTop?: KitsResponsiveValue<Property.BorderTop | number>;
    borderBottom?: KitsResponsiveValue<Property.BorderBottom | number>;
    borderRight?: KitsResponsiveValue<Property.BorderRight | number>;
    borderLeft?: KitsResponsiveValue<Property.BorderLeft | number>;
    borderStyle?: KitsResponsiveValue<Property.BorderStyle>;
    borderColor?: KitsResponsiveValue<ColorValue | Property.BorderColor>;
    borderStartStartRadius?: KitsResponsiveValue<
        | "full"
        | "none"
        | SizingValue
        | string
        | number
        | Property.BorderStartStartRadius
    >;
    borderStartEndRadius?: KitsResponsiveValue<
        | "full"
        | "none"
        | SizingValue
        | string
        | number
        | Property.BorderStartEndRadius
    >;
    borderEndStartRadius?: KitsResponsiveValue<
        | "full"
        | "none"
        | SizingValue
        | string
        | number
        | Property.BorderEndStartRadius
    >;
    borderEndEndRadius?: KitsResponsiveValue<
        | "full"
        | "none"
        | SizingValue
        | string
        | number
        | Property.BorderEndEndRadius
    >;
    borderCollapse?: KitsResponsiveValue<Property.BorderCollapse>;
    borderSpacing?: KitsResponsiveValue<
        Property.BorderSpacing<number | string>
    >;
    border?: KitsResponsiveValue<Property.Border<number | string>>;
    borderBlock?: KitsResponsiveValue<Property.BorderBlock | number>;
    borderBlockColor?: KitsResponsiveValue<Property.BorderBlockColor>;
    borderBlockStyle?: KitsResponsiveValue<Property.BorderBlockStyle>;
    borderBlockWidth?: KitsResponsiveValue<
        Property.BorderBlockWidth<number | string>
    >;
    borderBlockEnd?: KitsResponsiveValue<Property.BorderBlockEnd | number>;
    borderBlockStart?: KitsResponsiveValue<
        Property.BorderBlockStart | number
    >;
    borderInline?: KitsResponsiveValue<Property.BorderInline | number>;
    borderInlineColor?: KitsResponsiveValue<Property.BorderInlineColor>;
    borderInlineStyle?: KitsResponsiveValue<Property.BorderInlineStyle>;
    borderInlineWidth?: KitsResponsiveValue<
        Property.BorderInlineWidth<number | string>
    >;
    borderInlineEnd?: KitsResponsiveValue<Property.BorderInlineEnd | number>;
    borderInlineStart?: KitsResponsiveValue<
        Property.BorderInlineStart | number
    >;
    borderTopColor?: KitsResponsiveValue<Property.BorderTopColor>;
    borderTopStyle?: KitsResponsiveValue<Property.BorderTopStyle>;
    borderTopWidth?: KitsResponsiveValue<
        Property.BorderTopWidth<number | string>
    >;
    borderBottomColor?: KitsResponsiveValue<Property.BorderBottomColor>;
    borderBottomStyle?: KitsResponsiveValue<Property.BorderBottomStyle>;
    borderBottomWidth?: KitsResponsiveValue<
        Property.BorderBottomWidth<number | string>
    >;
    borderLeftColor?: KitsResponsiveValue<Property.BorderLeftColor>;
    borderLeftStyle?: KitsResponsiveValue<Property.BorderLeftStyle>;
    borderLeftWidth?: KitsResponsiveValue<
        Property.BorderLeftWidth<number | string>
    >;
    borderRightColor?: KitsResponsiveValue<Property.BorderRightColor>;
    borderRightStyle?: KitsResponsiveValue<Property.BorderRightStyle>;
    borderRightWidth?: KitsResponsiveValue<
        Property.BorderRightWidth<number | string>
    >;
}

export interface IBg {

    backgroundImage?: KitsResponsiveValue<Property.BackgroundImage>;
    bgImage?: KitsResponsiveValue<Property.BackgroundImage>;
    backgroundColor?: KitsResponsiveValue<
        ColorValue | Property.BackgroundColor
    >;
    bgColor?: KitsResponsiveValue<ColorValue | Property.BackgroundColor>;
    backgroundRepeat?: KitsResponsiveValue<Property.BackgroundRepeat>;
    bgRepeat?: KitsResponsiveValue<Property.BackgroundRepeat>;
    backgroundSize?: KitsResponsiveValue<Property.BackgroundSize>;
    bgSize?: KitsResponsiveValue<Property.BackgroundSize>;
    backgroundPosition?: KitsResponsiveValue<Property.BackgroundPosition>;
    bgPosition?: KitsResponsiveValue<Property.BackgroundPosition>;
}

export interface ILayout {
    display?: KitsResponsiveValue<Property.Display>;
    overflow?: KitsResponsiveValue<Property.Overflow>;
    overflowY?: KitsResponsiveValue<Property.OverflowY>;
    overflowX?: KitsResponsiveValue<Property.OverflowX>;
    position?: KitsResponsiveValue<Property.Position>;
    top?: KitsResponsiveValue<Property.Top | number>;
    bottom?: KitsResponsiveValue<Property.Bottom | number>;
    right?: KitsResponsiveValue<Property.Right | number>;
    left?: KitsResponsiveValue<Property.Left | number>;
    zIndex?: KitsResponsiveValue<Property.ZIndex>;
    aspectRatio?: KitsResponsiveValue<Property.AspectRatio>;
}

export interface IAnimation {
    transition?: KitsResponsiveValue<Property.Transition>;
    animation?: AnimationsValues;
    animationDuration?: number;
    animationDelay?: number;
    animationIteration?: "linear" | "ease-in" | "ease-out" | "ease-in-out";
    animationFunction?: "auto" | 0 | 50 | 100;
    animationFill?: "none" | "forwards" | "backwards" | "both";
}

export interface IDisplay {
    gap?: KitsResponsiveValue<number | string>;
    rowGap?: KitsResponsiveValue<number | string>;
    columnGap?: KitsResponsiveValue<number | string>;
}

export interface IAlignment {
    justifyContent?: KitsResponsiveValue<Property.JustifyContent>;
    alignContent?: KitsResponsiveValue<Property.AlignContent>;
    alignItems?: KitsResponsiveValue<Property.AlignItems>;
    alignSelf?: KitsResponsiveValue<Property.AlignSelf>;
    verticalAlign?: KitsResponsiveValue<Property.VerticalAlign>;
}

export interface IFlexAlignment {
    flex?: KitsResponsiveValue<Property.Flex>;
    flexDirection?: KitsResponsiveValue<Property.FlexDirection>;
    direction?: KitsResponsiveValue<Property.FlexDirection>;
    flexWrap?: KitsResponsiveValue<Property.FlexWrap>;
    flexGrow?: KitsResponsiveValue<Property.FlexGrow>;
    flexShrink?: KitsResponsiveValue<Property.FlexShrink>;
    flexOrder?: KitsResponsiveValue<number | string>;
}

export interface IText {
    letterSpacing?: KitsResponsiveValue<Property.LetterSpacing>;
    fontSize?: KitsResponsiveValue<
        | Property.FontSize
        | number
        | "base"
        | Omit<SizingValue, "md">
        | HighSizingValue
    >;
    fontWeight?: KitsResponsiveValue<
        | "light"
        | "normal"
        | "medium"
        | "semibold"
        | "bold"
        | Property.FontWeight
    >;
    color?: KitsResponsiveValue<Property.Color | ColorValue>;
    fontColor?: KitsResponsiveValue<Property.Color | ColorValue>;
    fontFamily?: KitsResponsiveValue<Property.FontFamily>;
    fontStyle?: KitsResponsiveValue<Property.FontStyle>;
    textAlign?: KitsResponsiveValue<"center" | "justify" | "left" | "right">;
    textDecoration?: "underline" | "line-through" | "no-underline" | "none";
    textOverflow?: KitsResponsiveValue<"clip" | "ellipsis">;
    textTransform?: "lowercase" | "uppercase" | "capitalize";
    lineHeight?: KitsResponsiveValue<Property.LineHeight>;
    whiteSpace?: "normal" | "nowrap";
}

export interface IGrid {
    templateAreas?: KitsResponsiveValue<string>;
    gridTemplateRows?: KitsResponsiveValue<string>;
    gridTemplateColumns?: KitsResponsiveValue<string>;
    /** Alias for gridTemplateColumns — Chakra-style shorthand */
    templateColumns?: KitsResponsiveValue<string>;
    /** Alias for gridTemplateRows — Chakra-style shorthand */
    templateRows?: KitsResponsiveValue<string>;
    /** Shorthand: columns={6} → repeat(6, minmax(0, 1fr)) */
    columns?: KitsResponsiveValue<number>;
    /** Shorthand: rows={3} → repeat(3, minmax(0, 1fr)) */
    rows?: KitsResponsiveValue<number>;
    /** grid-auto-flow: row | column | dense | row dense | column dense */
    autoFlow?: KitsResponsiveValue<string>;
    /** grid-auto-rows: auto | min-content | max-content | fr values */
    autoRows?: KitsResponsiveValue<string>;
    /** grid-auto-columns: auto | min-content | max-content | fr values */
    autoColumns?: KitsResponsiveValue<string>;
    area?: KitsResponsiveValue<number | string>;
    columnGap?: KitsResponsiveValue<Property.ColumnGap>;
    rowGap?: KitsResponsiveValue<Property.RowGap>;
    /** colSpan={6} → grid-column: span 6 / span 6 */
    colSpan?: KitsResponsiveValue<number | string>;
    /** rowSpan={2} → grid-row: span 2 / span 2 */
    rowSpan?: KitsResponsiveValue<number | string>;
    rowOffset?: KitsResponsiveValue<number | string>;
    colOffset?: KitsResponsiveValue<Numbering0_12>;
    colStart?: KitsResponsiveValue<number | string>;
    colEnd?: KitsResponsiveValue<number | string>;
    rowStart?: KitsResponsiveValue<number | string>;
    rowEnd?: KitsResponsiveValue<number | string>;
}

export type ICssStyling = ISpacing &
    ISizing &
    IBorder &
    IBg &
    IDisplay &
    IFlexAlignment &
    IGrid &
    IEffects &
    IInteractivity &
    ITransforms &
    ITransition &
    ILayout &
    IAnimation &
    IAlignment &
    IListing &
    IText;

export type IStyleClasses = ICssStyling & {
    _hover?: ICssStyling;
    _focus?: ICssStyling;
    _focusVisible?: ICssStyling;
    _active?: ICssStyling;
    _disabled?: ICssStyling;
    _visited?: ICssStyling;
    _checked?: ICssStyling;
    _placeholder?: ICssStyling;
    _selection?: ICssStyling;
    _firstChild?: ICssStyling;
    _lastChild?: ICssStyling;
};

/** A single color scale with shades from 50 to 900 */
export type ColorScale = {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
};

/** Semantic color aliases that resolve to a palette reference (e.g. 'blue.500') or raw hex */
export type SemanticColorTokens = {
    primary: string;
    secondary: string;
    success: string;
    danger: string;
    warning: string;
    info: string;
    text: string;
    'text-secondary': string;
    bg: string;
    'bg-subtle': string;
    border: string;
    'surface-ground': string;
    'surface-card': string;
    'surface-overlay': string;
    'surface-hover': string;
    [key: string]: string;
};

export type ColorMode = 'light' | 'dark';

export interface IKitsThemeColors {
    blue: ColorScale;
    green: ColorScale;
    red: ColorScale;
    yellow: ColorScale;
    orange: ColorScale;
    purple: ColorScale;
    teal: ColorScale;
    cyan: ColorScale;
    pink: ColorScale;
    gray: ColorScale;
    indigo: ColorScale;
    [key: string]: ColorScale;
}

export interface IKitsThemeSpacing {
    '0': string;
    '0.5': string;
    '1': string;
    '1.5': string;
    '2': string;
    '3': string;
    '4': string;
    '5': string;
    '6': string;
    '8': string;
    '10': string;
    '12': string;
    '16': string;
    '20': string;
    '24': string;
    [key: string]: string;
}

export interface IKitsThemeRadii {
    none: string;
    sm: string;
    base: string;
    md: string;
    lg: string;
    xl: string;
    '2xl': string;
    '3xl': string;
    full: string;
    [key: string]: string;
}

export interface IKitsThemeShadows {
    none: string;
    sm: string;
    base: string;
    md: string;
    lg: string;
    xl: string;
    '2xl': string;
    inner: string;
    [key: string]: string;
}

export interface IKitsThemeFonts {
    heading: string;
    body: string;
    mono: string;
}

export interface IKitsThemeFontSizes {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    '2xl': string;
    '3xl': string;
    '4xl': string;
    '5xl': string;
    '6xl': string;
    [key: string]: string;
}

export interface IKitsThemeFontWeights {
    light: number;
    normal: number;
    medium: number;
    semibold: number;
    bold: number;
    [key: string]: number;
}

export interface IKitsThemeLineHeights {
    none: number;
    tight: number;
    snug: number;
    normal: number;
    relaxed: number;
    loose: number;
    [key: string]: number;
}

// ─────────────────────────────────────────────────────────────
// Element Slot System
//
// Each component config is composed of element slots (root, label,
// container, etc.). Every slot accepts { props?, style? }.
//
// HOW TO ADD A NEW ELEMENT SLOT:
//   1. Add the key with type `IElementSlotConfig` to the relevant
//      interface below (IFormElementSlots, IButtonElementSlots, etc.)
//   2. In the component, read `elementStyles[key]` and apply it
//      to the correct DOM/RN element
//   3. Document the new slot in UML/Claude/kitsconcerto_doc.md
// ─────────────────────────────────────────────────────────────

/** Config for a single element slot — accepts both props and style */
export interface IElementSlotConfig<P = Record<string, any>> {
    /** Default prop values for this element. User props always win. */
    props?: Partial<P>;
    /** CSS style overrides (IStyleClasses) for this element. */
    style?: IStyleClasses;
}

/** Element slots for form inputs wrapped in KitsContainer */
export interface IFormElementSlots {
    /** The input element itself — props (inputSize, etc.) + style */
    root?: IElementSlotConfig;
    /** Outermost wrapping Flex (KitsContainer root) */
    container?: IElementSlotConfig;
    /** The label element */
    label?: IElementSlotConfig;
    /** The input group wrapper (Flex around leftAddon + input + rightAddon) */
    inputGroup?: IElementSlotConfig;
    /** Left addon wrapper */
    leftAddon?: IElementSlotConfig;
    /** Right addon wrapper */
    rightAddon?: IElementSlotConfig;
    /** Helper text element */
    helperText?: IElementSlotConfig;
    /** Error message element */
    error?: IElementSlotConfig;
}

/** Element slots for Button */
export interface IButtonElementSlots {
    /** The button element itself */
    root?: IElementSlotConfig;
    /** The icon inside the button */
    icon?: IElementSlotConfig;
    /** The text label inside the button */
    label?: IElementSlotConfig;
}

/** Element slots for Card */
export interface ICardElementSlots {
    /** The card root element (outer container) */
    root?: IElementSlotConfig;
    /** Card header area */
    header?: IElementSlotConfig;
    /** Card title text */
    title?: IElementSlotConfig;
    /** Card subtitle text */
    subTitle?: IElementSlotConfig;
    /** Card body content area (children wrapper) */
    content?: IElementSlotConfig;
    /** Card footer area */
    footer?: IElementSlotConfig;
}

/** Element slots for Table (PrimeReact DataTable styling) */
export interface ITableElementSlots {
    /** Outer table wrapper — border, border-radius, overflow */
    root?: IElementSlotConfig;
    /** Toolbar area above the table — search, column picker, export buttons */
    tableHeader?: IElementSlotConfig;
    /** Global search input in the toolbar */
    searchInput?: IElementSlotConfig;
    /** thead area — background */
    th?: IElementSlotConfig;
    
    header?: IElementSlotConfig;
    /** tr in thead */
    headerRow?: IElementSlotConfig;
    /** th element — font size, weight, color, padding, border, bg */
    headerCell?: IElementSlotConfig;
    /** Sorted column header — highlight color, icon color */
    sortedColumn?: IElementSlotConfig;
    /** tbody area */
    body?: IElementSlotConfig;
    /** tr in tbody — hover bg, transition */
    bodyRow?: IElementSlotConfig;
    /** Odd row in striped mode — background */
    stripedRow?: IElementSlotConfig;
    /** Selected/highlighted row — background, text color */
    selectedRow?: IElementSlotConfig;
    /** td element — padding, font size, color, border */
    bodyCell?: IElementSlotConfig;
    /** tfoot area */
    footer?: IElementSlotConfig;
    /** td in tfoot */
    footerCell?: IElementSlotConfig;
    /** Paginator wrapper — background, border, padding */
    paginator?: IElementSlotConfig;
    /** Individual page number buttons in the paginator */
    paginatorPageButton?: IElementSlotConfig;
    /** Active/current page number button in the paginator */
    paginatorActivePageButton?: IElementSlotConfig;
    /** Rows-per-page dropdown in the paginator */
    paginatorRowsPerPage?: IElementSlotConfig;
    /** Empty state row content */
    emptyMessage?: IElementSlotConfig;
}

/** Element slots for Group (repeatable field array) */
export interface IGroupElementSlots {
    /** Outermost wrapper of the entire group */
    root?: IElementSlotConfig;
    /** Header area (label + divider) */
    header?: IElementSlotConfig;
    /** Container wrapping all repeated rows */
    body?: IElementSlotConfig;
    /** Each individual repeated row */
    row?: IElementSlotConfig;
    /** The "add" button area */
    addButton?: IElementSlotConfig;
    /** The "remove" button area per row */
    removeButton?: IElementSlotConfig;
}

export interface ISidebarElementSlots {
    /** Outer sidebar panel — background, text color, border, box-shadow, width */
    root?: IElementSlotConfig;
    /** Header section — padding, border-bottom, background */
    header?: IElementSlotConfig;
    /** Header title text — font size, weight, color */
    headerTitle?: IElementSlotConfig;
    /** Close button — size, color, border-radius, hover/focus states */
    closeButton?: IElementSlotConfig;
    /** Content area — padding */
    content?: IElementSlotConfig;
    /** Overlay/mask behind sidebar — background color, opacity */
    mask?: IElementSlotConfig;
}

/**
 * Per-component theme config — composed entirely of element slots.
 * Each slot accepts `{ props?, style? }`.
 * The `root` slot replaces the old flat `props` / `style`.
 *
 * @typeParam E — Element slots shape (IFormElementSlots, IButtonElementSlots, etc.)
 */
export type IComponentThemeConfig<E = Record<string, IElementSlotConfig>> = Partial<E>;

/** Typed component defaults map */
export interface IKitsComponentDefaults {
    Button?: IComponentThemeConfig<IButtonElementSlots>;

    // Base groups — apply to all members of the group
    Input?: IComponentThemeConfig<IFormElementSlots>;
    Select?: IComponentThemeConfig<IFormElementSlots>;

    // Input group members (inherit from Input)
    InputText?: IComponentThemeConfig<IFormElementSlots>;
    InputNumber?: IComponentThemeConfig<IFormElementSlots>;
    InputMask?: IComponentThemeConfig<IFormElementSlots>;
    InputPassword?: IComponentThemeConfig<IFormElementSlots>;
    Textarea?: IComponentThemeConfig<IFormElementSlots>;
    Datepicker?: IComponentThemeConfig<IFormElementSlots>;
    ColorPicker?: IComponentThemeConfig<IFormElementSlots>;
    PhoneInput?: IComponentThemeConfig<IFormElementSlots>;

    // Select group members (inherit from Select)
    DropdownSelect?: IComponentThemeConfig<IFormElementSlots>;
    MultiSelect?: IComponentThemeConfig<IFormElementSlots>;
    TreeSelect?: IComponentThemeConfig<IFormElementSlots>;
    AutoComplete?: IComponentThemeConfig<IFormElementSlots>;
    ListBox?: IComponentThemeConfig<IFormElementSlots>;
    CascadeSelect?: IComponentThemeConfig<IFormElementSlots>;

    // Form container (wraps all form elements)
    FormContainer?: IComponentThemeConfig<IFormElementSlots>;

    // Standalone
    Card?: IComponentThemeConfig<ICardElementSlots>;
    Table?: IComponentThemeConfig<ITableElementSlots>;
    Sidebar?: IComponentThemeConfig<ISidebarElementSlots>;
    Group?: IComponentThemeConfig<IGroupElementSlots>;
    Switch?: IComponentThemeConfig<IFormElementSlots>;
    Checkbox?: IComponentThemeConfig<IFormElementSlots>;
    Radio?: IComponentThemeConfig<IFormElementSlots>;

    [componentName: string]: IComponentThemeConfig<any> | undefined;
}

export interface IKitsThemeConfig {
    initialColorMode: ColorMode;
    useSystemColorMode: boolean;
    /** Brand logo rendered as icon when severity is 'brand' (SVG, PNG, or any ReactNode) */
    logo?: ReactNode;
}

/** Full theme definition */
export interface IKitsTheme {
    colors: IKitsThemeColors;
    semanticTokens: {
        light: SemanticColorTokens;
        dark: SemanticColorTokens;
    };
    spacing: IKitsThemeSpacing;
    radii: IKitsThemeRadii;
    shadows: IKitsThemeShadows;
    fonts: IKitsThemeFonts;
    fontSizes: IKitsThemeFontSizes;
    fontWeights: IKitsThemeFontWeights;
    lineHeights: IKitsThemeLineHeights;
    severity: ISeverityThemeMap;
    components: IKitsComponentDefaults;
    config: IKitsThemeConfig;
}

/** Deep-partial version for consumer customization */
export type DeepPartial$1<T> = {
    [P in keyof T]?: T[P] extends object ? DeepPartial$1<T[P]> : T[P];
};

export type KitsThemeOverride = DeepPartial$1<IKitsTheme>;

/** Context value provided by KitsThemeProvider */
export interface IKitsThemeContextValues {
    theme: IKitsTheme;
    colorMode: ColorMode;
    toggleColorMode: () => void;
    setColorMode: (mode: ColorMode) => void;
    resolveToken: (token: string) => string;
}

/** Deep-merge source into target, returning a new object. Source values win. */
declare function deepMerge<T extends Record<string, any>>(target: T, source: Record<string, any>): T {
    const result = {...target} as Record<string, any>;

    for (const key of Object.keys(source)) {
        const srcVal = source[key];
        const tgtVal = result[key];

        if (isPlainObject(srcVal) && isPlainObject(tgtVal)) {
            result[key] = deepMerge(tgtVal, srcVal);
        } else if (srcVal !== undefined) {
            result[key] = srcVal;
        }
    }

    return result as T;
}

/**
 * Merges consumer overrides with the default theme.
 *
 * @example
 * const theme = extendTheme({
 *   colors: {
 *     brand: { 50: '#E6F0FF', 100: '#B3D4FF', ... },
 *   },
 *   semanticTokens: {
 *     light: { primary: 'brand.500' },
 *   },
 *   components: {
 *     Button: { rounded: true, colorScheme: 'brand' },
 *   },
 * });
 */
declare function extendTheme(overrides: KitsThemeOverride): IKitsTheme {
    return deepMerge(defaultTheme, overrides as Record<string, any>);
}

// types/user.types.ts



// --- Logic and Dynamic Properties ---

// --- Type definitions for repeatable buttons, giving them full context ---
export interface IButtonParams {
    /** The current number of items in the group. */
    total: number;
    /** A function to add a new item to the end of the group. */
    append: () => void;
    /** A function to remove a specific item from the group. */
    remove: () => void;
    /** The index of the current item (only available for the minusButton within a row). */
    index?: number;
}

export type IPlusButton = (total: number, append: IButtonParams['append']) => ReactNode;
export type IMinusButton = (total: number, append: IButtonParams['remove'], index?: number) => ReactNode;


export interface IRepeatableSettings {
    plusButton?: IPlusButton;
    minusButton?: IMinusButton;
    maxRepeats?: number;
    minRepeats?: number;
}

export interface IGroupSettings {
    repeatable?: IRepeatableSettings;
    grid?: IFormGrid; // The grid layout for the nested fields
    removeButtonRow?: IMinusButton;
    ref?: Ref<UseFieldArrayReturn<any>>;
}

/**
 * Defines a function that can be used for dynamic properties.
 * It receives watched values, all form values, and the form context.
 */
export type LogicFunction<T extends FieldValues, R = any> = (
    watchedValues: any[],
    allFormValues: T,
    formContext: UseFormReturn<T>,
    groupField: GroupFieldConfigs<T>['groupField'],
) => R;

export type IChildrenParams<F extends FieldValues, T extends FieldValues> = [
    field: F,
    formContext: UseFormReturn<T>,
    group?: GroupFieldConfigs<T>['groupField'],
    watchedValues?: any
]
export type IChildren<F extends FieldValues, T extends FieldValues> =
    | ((...args: IChildrenParams<F, T>) => ReactElement)
    | ReactElement;
/** A value that can either be static or dynamically calculated by a LogicFunction. */
export type DynamicValue<T extends FieldValues, R> = R | LogicFunction<T, R>;


export type IElementStyle = {
    container?: IStyleClasses;
    label?: IStyleClasses;
    input?: IStyleClasses;
    helperText?: IStyleClasses;
    errorMessage?: IStyleClasses;
}

/** Core properties shared by all form elements. */
export interface IElementBase<T extends FieldValues> {
    /** The unique identifier for the field. */
    id: keyof T | string;
    /** The label displayed for the field. */
    label?: DynamicValue<T, ILabelElement>;
    /** A list of field IDs to watch for changes. */
    deps?: (string | '*.current')[];

    onDepsChange?: LogicFunction<T, void>
    /** Advanced logic for dynamic properties, an alternative to individual function props. */
    logic?: {
        deps?: (string | '*.current')[];
        show?: LogicFunction<T, boolean>;
        disable?: LogicFunction<T, boolean>;
        colSpan?: LogicFunction<T, IStyleClasses["colSpan"]>;
    };
    /** A function to determine if the element should be rendered. */
    show?: LogicFunction<T, boolean>;
    /** A function or boolean to disable the element. */
    isDisabled?: DynamicValue<T, boolean>;
    /** Yup schema for validation. */
    schema?: Yup.Schema | Yup.AnySchema;
    /** The initial value of the field. */
    initialValue?: any;
    /** Grid layout properties. */
    hideError?: boolean;
    displayOnly?: boolean;
    /** When true, the molecule component renders without its KitsContainer wrapper (no label, no error). */
    attached?: boolean;
    placeholder?: DynamicValue<T, string>;
    colSpan?: DynamicValue<T, KitsResponsiveValue<string | number>>;
    rowSpan?: DynamicValue<T, KitsResponsiveValue<string | number>>;
    colOffset?: DynamicValue<T, KitsResponsiveValue<string | number>>;
    columnGap?: DynamicValue<T, KitsResponsiveValue<string | number>>;
    rowGap?: DynamicValue<T, KitsResponsiveValue<string | number>>;
    area?: DynamicValue<T, KitsResponsiveValue<string>>;
    leftAddon?: DynamicValue<T, ReactElement | IconType | string>;
    rightAddon?: DynamicValue<T, ReactElement | IconType | string>;
    /** Helper text displayed below the field. */
    helperText?: DynamicValue<T, string | ReactElement>;
    onChangeValue?: (
        value: any,
        fieldState: ControllerFieldState & { isFocused: boolean },
        formContext: UseFormReturn<T>,
    ) => void;
    style?: DynamicValue<T, IElementStyle>
    /**
     * Per-element slot style overrides. Spreads on top of theme elementStyles —
     * never replaces. Priority: theme base < theme component < slots.
     */
    slots?: DynamicValue<T, Partial<IFormElementSlots>>;
    /** Animation props for enter/exit transitions on the field wrapper. */
    animation?: IKitsAnimation;
}

// --- Specific Element Types ---

export interface ITextFieldProps<T extends FieldValues = any> extends IElementBase<T> {
    keyFilter?: EKeyFilter | RegExp;
}

export interface ITextInput<T extends FieldValues = any> extends ITextFieldProps<T> {
    type: 'Text';
    keyFilter?: EKeyFilter | RegExp;
    withMask?: boolean;
    /**
     * Controls the keyboard type on mobile. No effect on web.
     * @platform native
     */
    keyboardType?: 'default' | 'numeric' | 'email-address' | 'phone-pad' |
                   'decimal-pad' | 'url' | 'number-pad' | 'visible-password' |
                   'ascii-capable' | 'numbers-and-punctuation' | 'name-phone-pad' |
                   'twitter' | 'web-search';
    localProps?: ITextInputProps;
}


export interface IColorPicker<T extends FieldValues = any> extends ITextFieldProps<T> {
    type: "ColorPicker";
    colorFormat?: 'hex' | 'rgb' | 'hsb';
    inline?: boolean;
}

export interface IPassword<T extends FieldValues = any> extends ITextFieldProps<T> {
    type: 'Password';
    toggleEye?: boolean;
    showStrengthProgress?: boolean;
    localProps?: IPasswordProps;
}

export interface ITextarea<T extends FieldValues = any> extends ITextFieldProps<T> {
    type: 'Textarea';
    rows?: number;
    cols?: number;
    autoResize?: boolean;
}

export interface INumberInput<T extends FieldValues = any> extends Omit<ITextFieldProps<T>, 'initialValue'> {
    type: 'Number';
    keyFilter?: EKeyFilter | RegExp;
    initialValue?: number;
    localProps?: any;
}


export interface IEmail<T extends FieldValues = any> extends ITextFieldProps<T> {
    type: "Email";
    localProps?: IRTLDetection;
}

export interface ISelectBase<T extends FieldValues = any> extends IElementBase<T> {
    list: DynamicValue<T, any[] | Promise<any[]>>;
    placeholder?: DynamicValue<T, string>;
    labelKey?: string;
    valueKey?: string;
    outputValueKey?: string;
    childrenKey?: string;
    withFilter?: boolean;
    filterBy?: string;
    emptyFilterMessage?: ReactNode;
    virtualScroll?: boolean;
}

// --- Specific Select Shape Definitions ---

export interface IFormSelect<T extends FieldValues = any> extends ISelectBase<T> {
    type: 'Select'; // Corresponds to 'dropdown' shape
    withArrow?: boolean;
}

export interface IMultiselect<T extends FieldValues = any> extends ISelectBase<T> {
    type: 'Multiselect';
    withArrow?: boolean;
    valueMode?: 'chip' | 'comma';
    selectionLimit?: number
}

export interface ITags<T extends FieldValues = any> extends ISelectBase<T> {
    type: 'Tags'; // Corresponds to 'autocomplete' shape
    isMultiple?: boolean;
    forceSelection?: boolean;
    completeMethod?: (query: string) => Promise<any[]>;
    selectionLimit?: number;
}

export interface IListBoxElement<T extends FieldValues = any> extends ISelectBase<T> {
    type: 'ListBox';
    isMultiple?: boolean;
    selectionLimit?: number;
}

export interface ITreeSelectElement<T extends FieldValues = any> extends ISelectBase<T> {
    type: 'TreeSelect';
    isMultiple?: boolean;
    isStructured?: boolean;
    valueMode?: 'chip' | 'comma';
    selectionLimit?: number;
    onlyParentsWithChildren?: boolean;
}

export interface ICheckbox<T extends FieldValues = any> extends IElementBase<T> {
    type: 'Checkbox';
    mode?: "labeled" | "images" | "custom";
    list: DynamicValue<T, IRadioCheckboxListItem[]>;
    vertical?: boolean;
}

export interface IRadioGroup<T extends FieldValues = any> extends IElementBase<T> {
    type: 'Radios';
    mode?: "labeled" | "images" | "custom";
    list: DynamicValue<T, IRadioCheckboxListItem[]>;
    vertical?: boolean;
}

export interface IDate<T extends FieldValues = any> extends ITextFieldProps<T> {
    type: 'Date';
    localProps?: IKitsInputCalendar['localProps'];
}

export interface ISwitch<T extends FieldValues = any> extends IElementBase<T> {
    type: 'Switch';
    displayAs?: 'switch' | 'checkbox';
    direction?: 'row' | 'column';
}

export interface IFile<T extends FieldValues = any> extends IElementBase<T> {
    type: IFileUploaderTypes;
    multiple?: boolean;
    limit?: number;
    maxFileSize?: number; // in KB
    minFileSize?: number; // in KB
    acceptedTypes?: (IImagesExtTypeKeys | IFilesExtTypeKeys)[];
    classicUploader?: boolean;
    /** Custom render function for the uploader UI */
    children?: FileUploaderTemplate<any>;
}

export interface ILocation<T extends FieldValues = any> extends ITextFieldProps<T> {
    type: 'Location';
    forceSelection?: boolean;
    countryISO?: string;
    apiKey: string;
    provider?: 'google' | 'experian';
    onAddressClick?: (address: IAddressFormat, group?: GroupFieldConfigs<T>['groupField']) => void;
}

export interface IPhone<T extends FieldValues = any> extends IElementBase<T> {
    type: "Phone";
    isWithCountryCode?: boolean;
    inputSize?: "sm" | "md" | "lg";
    /** Default country ISO code for initial flag display (e.g., "US") */
    defaultCountry?: string;
    /**
     * Controls the shape of the onChange output.
     * - "string": emits E.164 string (e.g., "+15551234567")
     * - "object": emits IPhoneObjectValue with countryCode, nationalNumber, formatted values
     * @default "string"
     */
    outputFormat?: 'string' | 'object';
    /** @deprecated No longer needed — country selection removed */
    labelKey?: string;
    /** @deprecated No longer needed — country selection removed */
    valueKey?: string;
    /** @deprecated Masking is now handled automatically */
    withMask?: boolean;
    customCountriesCodesList?: { name: string; code: string | number; iso?: string; flag?: string }[];
    excludedCountries?: string[];
    includedCountries?: string[];
}

export interface IObjectGroup<T extends FieldValues = any> extends IElementBase<T> {
    type: 'Object';
    elements: DynamicValue<T, IFormElement<T>[]>;
    grid?: IFormGrid;
}

export interface IGroup<T extends FieldValues = any> extends IElementBase<T> {
    type: 'Group';
    elements: DynamicValue<T, IFormElement<T>[]>;
    groupsSettings?: IGroupSettings;
    /**
     * Per-element slot style overrides for the Group layout.
     * Spreads on top of theme.components.Group — never replaces.
     */
    groupSlots?: DynamicValue<T, Partial<IGroupElementSlots>>;
}


export interface IContainer<T extends FieldValues = any> extends IElementBase<T> {
    type: 'Container';
    /**
     * A render prop that receives the form's context and group-specific values.
     * This allows for creating complex, custom layouts and dynamic fields.
     */
    children: IChildren<ControllerRenderProps<T, any>, T>;
}

/**
 * A Combined element groups multiple child inputs under one logical field.
 * It renders a single container with one label and one validation schema,
 * while internally rendering multiple input elements.
 *
 * The `output` prop defines how the final value is derived from child values:
 * - A template string referencing child IDs (e.g., "firstName middleName lastName")
 *   will concatenate the child values with spaces.
 * - A single child ID (e.g., "stateRef") will map the output to that child's value directly.
 */
export interface ICombined<T extends FieldValues = any> extends IElementBase<T> {
    type: 'Combined';
    /** Child form elements rendered inside the Combined container. */
    elements: IFormElement<T>[];
    /**
     * Defines how the final value is produced from child field values.
     * - Multi-token string (e.g., "fname mname lname"): concatenates child values with spaces.
     * - Single token string (e.g., "stateRef"): maps output to that child's value directly.
     */
    output: string;
    /** Grid layout for the child elements. */
    grid?: IFormGrid;
}

// --- Union Type ---

export interface IFileUploaderElement<T extends FieldValues = any> extends IElementBase<T> {
    type: 'File' | 'Image';
    onChange?: (files: File[], base64Data: {
        filename: string;
        value: string;
    }[]) => void,
    onError?: (err: any) => void;
    classicUploader?: boolean;
    multiple?: boolean;
    limit?: number;
    minFileSize?: number;
    maxFileSize?: number;
    initialUri?: string | string[];
    placeholder?: string;
    acceptedTypes?: (IImagesExtTypeKeys | IFilesExtTypeKeys)[];
    /** Custom render function for the uploader UI */
    children?: FileUploaderTemplate<any>;
}


export type IFormSelectElements<T extends FieldValues = FieldValues> =
    | IFormSelect<T>
    | IMultiselect<T>
    | ITags<T>
    | IListBoxElement<T>
    | ITreeSelectElement<T>

export type IFormListsElements<T extends FieldValues = FieldValues> =
    ICheckbox<T>
    | IRadioGroup<T>
    | IFormSelectElements<T>

/** The single, unified type representing any possible form element a developer can define. */
export type IFormElement<T extends FieldValues = FieldValues> =
    | IObjectGroup<T>
    | IGroup<T>
    | ICombined<T>
    | ITextInput<T>
    | INumberInput<T>
    | ITextarea<T>
    | IFileUploaderElement<T>
    | IEmail<T>
    | IDate<T>
    | IPassword<T>
    | IPhone<T>
    | ILocation<T>
    | ISwitch<T>
    | IFormListsElements<T>
    | IContainer<T>
    | IFile<T>
    | IColorPicker<T>;

// types/internal.types.ts



export type GroupFieldConfigs<T extends FieldValues> = {
    groupField?:{
        index:number;
        name:string;
        values:any;
        /** Append a new item to this group array */
        append: (count?: number) => void;
        /** Remove this specific group item (pre-bound to the current index) */
        remove: () => void;
    };
}

export type OnSubmitHandler<T extends FieldValues | FormData> = ((
    data: T,
    setIsSubmitting: (isSubmitting:boolean)=>void,
    formContext?: UseFormReturn<T>
) => void);

export type CustomSubmitButtonProps =
    | "none"
    | ReactElement
    | ((
    onSubmit: () => void,
    isSubmitting: boolean,
    formContext?: UseFormReturn<any>,
) => ReactNode)
    | Omit<IButtonProps<any>, "onClick">;

export interface UseFormManagerEvents<T extends FieldValues> {
    onInvalidSubmit?: SubmitErrorHandler<T>;
    onChange?: (data: { [s: string]: any }) => void;
    onChangeSingleValue?: (key: string, value: any) => void;
}

export interface IFormContextPropsFormData<T extends FieldValues> {
    outputFormat?: "FormData";
    onSubmit?: OnSubmitHandler<FormData | any>;
}

export interface IFormContextPropsJSON<T extends FieldValues> {
    outputFormat?: "Json";
    onSubmit?: OnSubmitHandler<T>;
}

export type SetManyOpts = {
    shouldValidate?: boolean;
    shouldDirty?: boolean;
    shouldTouch?: boolean;
};

export type IUseFormReturn<T extends FieldValues = FieldValues> = UseFormReturn<T> & {
    id:string;
    setValues(
        patch: DeepPartial$2<T>,
        opts?: SetManyOpts,
    ): void
    mergeReset(patch: DeepPartial$2<T>): void;
    onFormSubmit:()=>void
    setIsSubmitting: (isSubmitting:boolean)=>void
};
// This is your detailed prop type, which we will now use as the single source of truth.
export type IFormComponent<T extends FieldValues> = UseFormManagerEvents<T> & ( //here is the main component props' type
    | IFormContextPropsFormData<T>
    | IFormContextPropsJSON<T>
    ) & {
    elements: IFormElement<T>[];
    submitButtonProps?: CustomSubmitButtonProps;
    isFloatedLabel?: boolean;
    grid?: IStyleClasses;
    id?: string;
    ref?: Ref<IUseFormReturn<T>>;
    onMount?: (formContext:UseFormReturn<T>)=>void;
    children?:
        | ((props: IUseFormReturn<any>) => ReactElement)
        | React__default.ReactElement;
    /** Animation for the form wrapper element. */
    animation?: IKitsAnimation;
    /** CSS style props applied to the form's outer Flex wrapper. */
    style?: IStyleClasses;
};

/**
 * Defines the props required by the central `useFieldLogic` hook.
 * This is the contract for providing a field's configuration to the logic engine.
 */
export interface UseFieldLogicProps<T extends FieldValues> extends GroupFieldConfigs<T>{
    /**
     * The full configuration object for a single form element, as defined by the developer.
     * This includes its type, id, label, schema, and any dynamic properties.
     */
    element: IFormElement<T>;

    /**
     * The main `control` object from react-hook-form's `useForm` return.
     * It's essential for registering the field and watching its state.
     */
    control: Control<T>;

    /**
     * The `getValues` function from react-hook-form's `useForm` return.
     * This allows the logic hook to access the current state of the entire form
     * for resolving dependencies, which is critical for fixing the validation race condition.
     */
    getValues: UseFormGetValues<T>;

    isFocused?:boolean;
    watchedValues:[]

}

export interface UseFieldLogicReturn<T extends FieldValues> {
    formContext: UseFormReturn<T>;
    onWatchedValuesChange?:()=>void;
    watchedValues?:any[];
    /**
     * The props to be spread directly onto the input component (value, onChange, onBlur, ref).
     */
    field: ControllerRenderProps<T, any>;
    /**
     * The state of the field (error, invalid, isTouched, isDirty).
     */
    fieldState: ControllerFieldState;
    /**
     * The dynamically resolved list of options for select, checkbox, or radio components.
     */
    // list?: any[];


    elements?:IFormElement<T>[];
    /**
     * Whether the field should be visible in the DOM.
     */
    displayOnly?: boolean;
    isShown: boolean;
    list?:IListItem[] | IRadioCheckboxListItem[];
    /**
     * Whether the field should be disabled.
     */
    isDisabled: boolean;
    /**
     * Whether the field is dynamically required based on its schema and form values.
     */
    isRequired: boolean;
    hideError?: boolean;
    /**
     * The dynamically calculated label for the field.
     */
    label?: ILabelElement;
    /**
     * The dynamically calculated placeholder text.
     */
    placeholder?: string;
    /**
     * Dynamically calculated grid layout properties.
     */
    layout: {
        colSpan: KitsResponsiveValue<string | number>;
        rowSpan?: KitsResponsiveValue<string | number>;
        rowGap?: KitsResponsiveValue<string | number>;
        columnGap?: KitsResponsiveValue<string | number>;
        colOffset?: KitsResponsiveValue<Numbering0_12>;
        area?: KitsResponsiveValue<string>;
    };
    style?:IElementStyle
    /** Per-element slot style overrides (resolved from element.slots). */
    slots?: Partial<IFormElementSlots>;
    helperText?: string | ReactElement;
    leftAddon?: IFormAddon;
    rightAddon?: IFormAddon;
    withMask?: boolean;
    keyFilter?: ITextFieldProps<T>['keyFilter'];
    localProps?: any;
    /** When true, the molecule component renders without its KitsContainer wrapper. */
    attached?: boolean;
    /** Animation config from the element definition. */
    animation?: IKitsAnimation;
}

export interface IDVMessages {
    emptyMessage?: string;
    clearFilter?: string;
    clearCache?: string;
    resetColumnsWidths?: string;
    globalFilterPlaceholder?: string;
    exportAsPdf?: string;
    exportAsCSV?: string;
    filter?: { key?: string; value?: string }[];
}

export interface IDataViewProps {
    id: string;
    dataViewTitle?: string;
    dataViewSize?: "small" | "normal" | "large";
    skeleton?: boolean;
    stateful?: boolean;
    globalSearch?: boolean;
    headless?: boolean;
    hideModeButtons?: boolean;
    pagination?: boolean;
    defaultMode?: "list" | "grid";
    scrollHeight?: DataTableBaseProps<any>["scrollHeight"];
    service?: (
        paginationRequest: IDVPaginationRequest,
    ) => Promise<ServerResponse<IDVPaginationResponse<any[]>>>;
    keyColumn?: string;
    data?: IDVPaginationResponse<any[]>["list"];
    text?: IDVMessages;
    moreButtons?: (context: IDataViewRefValues) => ReactNode[];
    listItem: (item: any, index: number) => ReactNode;
    gridItem: (item: any, index: number) => ReactNode;
    filtersFormElements?: IFormElement[];
    ref?: Ref<IDataViewRefValues>
}

export interface IDataViewRefValues {
    refresh: () => void;
    request: IDVPaginationRequest;
}

export interface IDVPaginationState {
    totalRecords: number;
    start: number;
    pageSize: number;
    onChangePage: (e: PaginatorPageChangeEvent) => void;
}

export interface IDataViewContextValues {
    isLoading: boolean;
    reloadClickHandler?: any;
    serverSideRequest: IDVPaginationRequest;
    skeleton?: boolean;
    paginationParams?: IDVPaginationState;
    fileName: string;

    refValues: IDataViewRefValues;
    dataList: any[];
    // onChangePageSize?: (pageSize: number) => void;
    // table?: Table<any>
}

export interface IDVPaginationRequest {
    filters: DataTableFilterMeta;
    search: string;
    start: number;
    length: number;
    sortBy: DataTableSortMeta[];
}

export interface IDVPaginationResponse<ListData> {
    list: ListData;
    requestedPageSize: number;
    actualPageSize: number;
    pageIndex: number;
    pageCount: number;
    total: number;
}

/**
 * Platform-agnostic Table types.
 *
 * These types have ZERO platform-specific imports (no primereact, no @lmb-it/kitsconcertomobile).
 * They are re-exported by both index.web.ts and index.native.ts so every consumer
 * gets the same definitions regardless of build target.
 */

// ─── Filter Interfaces ──────────────────────────────────────────────

export interface IMultiselectFilter {
    type: "multiSelect";
    filter?: boolean;
    list?: {
        label: string;
        value: any;
    }[];
}

export interface IDropdownFilter {
    type: "dropdown";
    filter?: boolean;
    list?: {
        label: string;
        value: any;
    }[];
}

/**
 * `list` uses an inline type that is structurally compatible with
 * PrimeReact's `SelectItemOptionsType` so web consumers can pass
 * the same objects without a cast, while native consumers do not
 * need to depend on primereact.
 */
export interface IButtonsFilter {
    type: "buttons";
    list?: {
        label: string;
        value: any;
    }[];
    isMultiple?: boolean;
}

export interface IDateFilter {
    type: "date";
    isRanged?: {
        min?: Date;
        max?: Date;
    };
}

export interface INumberFilter {
    type: "number";
    min?: number;
    max?: number;
}

export interface IPhoneFilter {
    type: "phone";
}

export interface ICheckboxFilter {
    type: "checkbox";
    list: {
        label: string;
        value: string | number | boolean;
    }[];
}

export interface ITriStateFilter {
    type: "tristate";
}

export interface IRangeFilter {
    type: "range";
    min?: number;
    max?: number;
}

export interface ITextFilter {
    type: "text";
}

// ─── Filter / Editor union types ────────────────────────────────────

export type IFilters =
    | IMultiselectFilter
    | IRangeFilter
    | IDropdownFilter
    | IButtonsFilter
    | ICheckboxFilter
    | ITriStateFilter
    | IDateFilter
    | INumberFilter
    | ITextFilter
    | IPhoneFilter;

export type IEditors =
    | IMultiselectFilter
    | IRangeFilter
    | IDropdownFilter
    | IButtonsFilter
    | ICheckboxFilter
    | ITriStateFilter
    | IDateFilter
    | INumberFilter
    | ITextFilter
    | IPhoneFilter;

// ─── Messages ───────────────────────────────────────────────────────

export interface IMessages {
    emptyMessage?: string;
    clearFilter?: string;
    clearCache?: string;
    resetColumnsWidths?: string;
    globalFilterPlaceholder?: string;
    exportAsPdf?: string;
    exportAsCSV?: string;
    filter?: { key?: string; value?: string }[];
}

// ─── Pagination (response shape — platform-agnostic) ────────────────

export interface IPaginationResponse<ListData> {
    list: ListData;
    requestedPageSize: number;
    actualPageSize: number;
    pageIndex: number;
    pageCount: number;
    total: number;
}

/**
 * Table types — Web platform.
 *
 * Re-exports all shared (platform-agnostic) types from ./types.ts and adds
 * web-specific interfaces that depend on PrimeReact.
 *
 * `T` represents the **row data object** — e.g. `IGeoCountry`.
 * The constraint `Record<string, any>` ensures `T[]` satisfies PrimeReact's
 * `DataTableValueArray` requirement.
 *
 * `IColumn<T>` is a **discriminated union** (mapped type) that gives
 * per-column key inference: when `name: 'price'` is set, `body`'s `value`
 * parameter is automatically narrowed to `T['price']`.
 */


// ─── Body Template ──────────────────────────────────────────────────

export type IBodyTemplate =
    | {
    type: "avatar";
    size?: "normal" | "large" | "xlarge";
    customStyle?: CSSProperties | ((value: any) => CSSProperties);
}
    | {
    type: "badge";
    severity?:
        | ((value: any) => BadgeProps["severity"])
        | BadgeProps["severity"];
    customStyle?: CSSProperties | ((value: any) => CSSProperties);
}
    | {
    type: "tag";
    severity?: ((value: any) => TagProps["severity"]) | TagProps["severity"];
    rounded?: boolean;
    customStyle?: CSSProperties | ((value: any) => CSSProperties);
}
    | {
    type: "progress";
    color?:
        | ProgressBarProps["color"]
        | ((value: any) => ProgressBarProps["color"]);
    customStyle?: CSSProperties | ((value: any) => CSSProperties);
};

// ─── Column (discriminated union) ───────────────────────────────────

/**
 * Shared base properties for every column variant.
 * Does NOT include `name` or `body` — those differ per variant.
 */
export interface IColumnBase extends Omit<ColumnProps, 'body' | 'filter' | 'editor'> {
    name?: string;
    label?: string;
    labelTooltip?: string;
    bodyTemplate?: IBodyTemplate;
    filter?: IFilters;
    editor?: IEditors;
    globalStyle?: CSSProperties;
    headerStyle?: CSSProperties;
    filterStyle?: CSSProperties;
    bodyStyle?: CSSProperties;
    isSortable?: boolean;
}

/**
 * A column bound to a specific key `K` of row type `T`.
 * `body`'s `value` parameter is `T[K]` — fully narrowed per column.
 */
export type IKeyedColumn<T extends Record<string, any>, K extends keyof T & string> = IColumnBase & {
    name: K;
    body?: (value: T[K], row: T, options: ColumnBodyOptions) => ReactNode;
};

/**
 * A column without a `name` — used for selection columns, expanders, etc.
 */
export type IUnkeyedColumn = IColumnBase & {
    name?: undefined;
    body?: never;
};

/**
 * Column definition for the Table component.
 *
 * This is a **discriminated union**: setting `name: 'price'` automatically
 * narrows `body`'s `value` to `T['price']`.
 *
 * When `T = any` (default), collapses to `{ name: string; body?: (value: any, ...) => ReactNode }`
 * for full backward compatibility.
 *
 * @typeParam T — the row data type.
 */
export type IColumn<T extends Record<string, any> = any> =
    | { [K in keyof T & string]: IKeyedColumn<T, K> }[keyof T & string]
    | IUnkeyedColumn;

// ─── Main Props ─────────────────────────────────────────────────────

/**
 * Props accepted by the `<GoTable>` / `<Datatable>` component.
 *
 * @typeParam T — the row data type, propagated to columns, service, etc.
 */
export interface IDataTableProps<T extends Record<string, any> = any> extends Omit<DataTableProps<T[]>, 'id'> {
    ref?: Ref<IDatatableRefValues<T>>;
    id: string;
    columns: IColumn<T>[];
    tableTitle?: string;
    onSelectChange?: (event: DataTableSelectionSingleChangeEvent<T[]>) => void;
    tableSize?: "small" | "normal" | "large";
    debounceFilterWaitTime?: number;
    filterMode?: 'enter' | 'debounce';
    skeleton?: boolean;
    stateful?: boolean;
    columnsPicker?: boolean;
    globalSearch?: boolean;
    headless?: boolean;
    rowLockable?: boolean;
    service?: (
        paginationRequest: IPaginationRequest,
    ) => Promise<ServerResponse<IPaginationResponse<T[]>>>;
    serviceRevalidateDeps?: any;
    keyColumn?: string;
    data?: T[];
    text?: IMessages;
    multiSorting?: boolean;
    exportPDFButton?: boolean;
    exportCSVButton?: boolean;
    moreButtons?: (context: IDatatableRefValues<T>) => ReactNode[];
}

// ─── Ref ────────────────────────────────────────────────────────────

export interface IDatatableRefValues<T extends Record<string, any> = any> extends DataTable<T[]> {
    refresh: (withLoading?: boolean) => void;
    visibleColumns: Pick<IColumnBase, "label" | "name">[];
    request: IPaginationRequest;
}

// ─── Pagination Request (platform-specific: uses PrimeReact filter/sort meta) ──

export interface IPaginationRequest {
    filters: DataTableFilterMeta;
    search: string;
    start: number;
    length: number;
    sortBy: DataTableSortMeta[];
}

// ─── Pagination State ───────────────────────────────────────────────

export interface PaginationState {
    totalRecords: number;
    start: number;
    pageSize: number;
    onChangePage: (e: PaginatorPageChangeEvent) => void;
}

// ─── Context ────────────────────────────────────────────────────────

export interface IDataTableContextValues<T extends Record<string, any> = any> {
    columns: IColumn<T>[];
    keyColumn: string;
    isLoading: boolean;
    globalSearch: boolean;
    lockedRows: T[];
    toggleLock: (data: T, frozen: boolean | undefined, index: number) => void;
    visibleColumns: Pick<IColumnBase, "label" | "name">[];
    rowLockable?: boolean;
    rowExpansionTemplate?: DataTableBaseProps<T[]>["rowExpansionTemplate"];
    onGlobalFilterChange: (value: string) => void;
    globalFilterValue: string;
    reloadClickHandler: (withLoading?: boolean) => void;
    serverSideRequest: IPaginationRequest;
    text: Required<IMessages>;
    skeleton?: boolean;
    resizableColumns?: boolean;
    stateful?: boolean;
    pagination?: PaginationState;

    onClearFilter(): void;

    onClearCache(): void;

    refValues: IDatatableRefValues<T>;
    fileName: string;
    buttons?: {
        exportAsPdf?: boolean;
        exportAsCSV?: boolean;
        moreButtons?: (context: IDatatableRefValues<T>) => ReactNode[];
    };
    tableRef: RefObject<DataTable<T[]> | null>;
    dataList: T[];
}

export type IRadioCheckboxListItem<T = any> = {
    id?: string;
    label?: string;
    component?:
        | ((args: {
        selected?: boolean;
        value?: T;
        isInvalid: boolean;
    }) => ReactElement)
        | ReactElement;

    /**
     * Identity value (kept in original type).
     * Internally stringified only when a provider requires it (e.g., Gluestack).
     */
    value: T;

    withBulbs?: boolean; // keep withBulbs
    size?: "xs" | "sm" | "md" | "lg" | "xl";
    labelPosition?: "left" | "right" | "top" | "bottom" | "default";

    w?: IStyleClasses["w"];

    /**
     * Optional per-item control (list mode).
     * - checked: controlled
     * - defaultChecked: uncontrolled initial
     */
    checked?: boolean;
    defaultChecked?: boolean;
};

export interface IconBaseProps extends React$1.SVGAttributes<SVGElement> {
    children?: React$1.ReactNode;
    size?: string | number;
    color?: string;
    title?: string;
}
export type IconType = (props: IconBaseProps) => React$1.ReactNode;

export interface IRTLDetection {
    ignoreDirection?: boolean;
}

declare enum EKeyFilter {
    INT = "int",
    PositiveInteger = "pint",
    Number = "num",
    PositiveNumber = "pnum",
    Money = "money",
    Alphabetic = "alpha",
    Alphanumeric = "alphanum",
    Email = "email",
}

export interface IButtonProps<IconT> extends IStyleClasses{
    id?:string;
    'type'?:'submit' | 'button';
    ref?:Ref<any>;
    // Unified props that work on both platforms
    children?: string | ReactNode;
    severity?: "secondary" | "success" | "info" | "warning" | "help" | "danger" | "contrast" | "brand" | undefined;
    icon?: IconT;
    iconPos?: 'left' | 'right' | 'top' | 'bottom';
    size?: 'sm' | 'md' | 'lg';
    disabled?: boolean;
    loading?: boolean;
    outlined?: boolean;
    raised?: boolean;
    rounded?: boolean;
    onPress?: MouseEventHandler<any>;
    onClick?: MouseEventHandler<any>;
    label?: string;
    isLoadingText?: string;

    tooltip?:string;
    tooltipOptions?:{
        position?:string
    }

    style?: IStyleClasses;
    // Optional styling
    className?: string; // For web Tailwind
    testID?: string;
}

export type ElementProps<T={}> = IStyleClasses & IKitsAnimation & T &
    Omit<
        Partial<HTMLProps<any>>,
        | "children"
        | "columns"
        | "rows"
        | "as"
        | "keyFilter"
        | "value"
        | "cursor"
        | "size"
        | "title"
        | "height"
        | "width"
        | "colSpan"
        | "rowSpan"
        | "translate"
    >;

export type LabelVariant =
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "warning"
    | "info"
    | "outline"
    | "link";

export type TextProps = HTMLProps<
    HTMLSpanElement | HTMLParagraphElement | HTMLHeadingElement | HTMLLabelElement
> & IStyleClasses;

export type DivProps = ElementProps<Omit<
    Partial<HTMLProps<any>>,
    | "children"
    | "columns"
    | "rows"
    | "keyFilter"
    | "cursor"
    | "title"
    | "height"
    | "width"
    | "colSpan"
    | "rowSpan"
    | "translate"
>>;

export interface IFlexComponent extends DivProps {
    // ref?: Ref<HTMLDivElement> | undefined;
    onFocus?: FocusEventHandler<any>;
    as?:HTMLProps<any>['as']
    /** Wrap children in ScrollView (native only) */
    scrollable?: boolean;
}

export interface ICollapseProps {
    isOpen: boolean;
    children: ReactNode;
    duration?: number;
}

/**
 * Grid component props.
 * All CSS Grid props are available via IStyleClasses (inherited through ElementProps).
 * Use: templateColumns, templateRows, columns, rows, gap, autoFlow, autoRows, autoColumns, etc.
 */
export interface IGridComponent extends ElementProps {
    ref?: Ref<HTMLDivElement> | undefined;
    children?: ReactNode;
}

/**
 * GridItem component props.
 * All CSS Grid item props are available via IStyleClasses (inherited through ElementProps).
 * Use: colSpan, rowSpan, colStart, colEnd, rowStart, rowEnd, area, etc.
 */
export interface IGridItemComponent extends ElementProps {
    children?: ReactNode;
    ref?: Ref<HTMLDivElement> | undefined;
}

export interface ISVGComponent extends ElementProps<React.SVGProps<SVGSVGElement>> {
    ref?: Ref<SVGSVGElement> | undefined;
}

export type ICardComponent<T = any> = ElementProps<T> & {
    footer?: ReactNode | ((props: T) => ReactNode);
    header?: ReactNode | ((props: T) => ReactNode);
    title?: ReactNode | ((props: T) => ReactNode);
    subTitle?: ReactNode | ((props: T) => ReactNode);
    size?:'sm'|'md'|'lg'
    variant?:'elevated' | 'outline' | 'ghost' | 'filled'
    coloring?: {
        backgroundColor: string;
        fontColor: string;
        iconColor: string;
    };
    localProps?:T;
    ref?: Ref<T> | undefined;
    /** Press handler — wraps card in Pressable on native, adds onClick on web */
    onPress?: () => void;
} & IStyleClasses

export type ImageSource =
    | number
    | { uri?: string }
    | Array<{ uri?: string }>;
export type IImageComponent = IStyleClasses & Omit<ImageProps, "pt" | "style"> & {
    preview?: boolean;
    zoomSrc?: string;
    indicatorIcon?: IconType$1<ImageProps>;
    style?: IStyleClasses;
    source?: ImageSource;
    ref?: Ref<ImageProps> | undefined;
}

export interface ITranslateComponent {
    ref?: Ref<HTMLSpanElement> | undefined;
    label?: string;
}

export interface ITextComponent extends Omit<
    TextProps,
    "width" | "height" | "colSpan" | "rowSpan" | "rows" | "translate" | "as" | 'size'
>{
    as?: "p" | "span" | "small" | "label";
    size?:
        | "xs"
        | "sm"
        | "md"
        | "lg"
        | "xl"
        | "2xl"
        | "3xl"
        | "4xl"
        | "5xl"
        | "6xl";
    isTruncated?: boolean;
    bold?: boolean;
    underline?: boolean;
    strikeThrough?: boolean;
    disabled?: boolean;
    sub?: boolean;
    italic?: boolean;
    highlight?: boolean;
    color?: string;
    children?: ReactNode;
    onClick?: () => void;
    onPress?: () => void;
    variant?: LabelVariant;
    onDoubleClick?:()=>void;
    onLongPress?:()=>void;
    htmlFor?:any
}

export interface ILinkComponent
    extends ElementProps<Omit<
        React.AnchorHTMLAttributes<HTMLAnchorElement>,
        "width" | "height" | "colSpan" | "rowSpan" | "rows" | "translate" | "as"
    >> {
    isExternal?: boolean;
    as?: ElementType;
    to?: string;
    // type?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'label' | 'small'
    variant?: LabelVariant;
}

export interface IHeadingComponent
    extends ElementProps<Omit<
        TextProps,
        "width" | "height" | "colSpan" | "rowSpan" | "rows" | "translate" | "size"
    >> {
    as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    size?:
        | "xs"
        | "sm"
        | "md"
        | "lg"
        | "xl"
        | "2xl"
        | "3xl"
        | "4xl"
        | "5xl"
        | "6xl";
    isTruncated?: boolean;
    bold?: boolean;
    underline?: boolean;
    strikeThrough?: boolean;
    sub?: boolean;
    italic?: boolean;
    highlight?: boolean;
    color?: string;
    children?: ReactNode;
    onClick?: () => void;
    onPress?: () => void;
    ref?: Ref<HTMLSpanElement | HTMLParagraphElement | HTMLLabelElement> | undefined
}

export interface IStackProps extends ElementProps{

    children?:ReactNode
    /** Gap between children (xs–4xl) */
    space?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl";
    /** Reverse children order */
    reversed?: boolean;
    /** Wrap children in ScrollView (native only) */
    scrollable?: boolean;
}

export interface ISkeletonText {
    lines?: number;
    width?: string | number;
    // height?: string | number;
    gap?: 1 | 2 | 3 | 4
    spacing?: string | number;
    variant?: 'rounded' | 'sharp' | 'circular'; // Gluestack
    shape?: 'rectangle' | 'circle'; // PrimeReact
    className?: string;
    startColor?: string;
    isLoaded?: boolean;
    speed?: 1 | 2 | 3 | 4
    animation?: 'wave' | 'none'; // PrimeReact only
    borderRadius?: string | number;
    size?: string | number;
    container?:IFlexComponent
    children?:string;
    style:IStyleClasses;

}

export interface ISkeleton {
    variant?: 'rounded' | 'sharp' | 'circular'; // Shape of the skeleton component
    startColor?: string;                        // Skeleton animation color
    isLoaded?: boolean;                         // Toggle to show content when loaded
    speed?: 1 | 2 | 3 | 4;                             // Animation speed
    className?: string;                         // Optional class name for styling
    container?:IFlexComponent;
    style?:any
}

export interface IScrollViewComponent extends ElementProps {
    ref?: Ref<HTMLDivElement> | undefined;
}

export interface IDividerComponent extends IStyleClasses {
    align?: 'center' | 'left' | 'top' | 'bottom' | 'right';
    children?: ReactNode;
    layout?: 'horizontal' | 'vertical';
    type?: 'dashed' | 'dotted' | 'solid';
    unstyled?: boolean;
}

export interface IBadgeProps extends IStyleClasses {
    /** Text content of the badge */
    value?: string | number | null;
    /** Alternative to value — rendered as children */
    children?: ReactNode;
    /** Severity determines the color scheme */
    severity?: 'success' | 'info' | 'warning' | 'danger' | 'secondary' | 'contrast' | 'brand' | null;
    /** Size variant */
    size?: 'sm' | 'md' | 'lg' | null;
    /** Render as outlined (border + text color, no fill) */
    outlined?: boolean;
    /**
     * Icon rendered before the value.
     * - ReactNode: rendered directly
     * - string "dot": renders a small pulsing severity-colored circle
     * - string (lucide name e.g. "check-circle-2"): resolved from IconMap
     * - string (pi class e.g. "pi pi-check"): rendered as <i> element
     */
    icon?: ReactNode | string;
    /** Additional class names */
    className?: string;
    /** Test ID */
    testID?: string;
    /** Style overrides */
    style?: IStyleClasses;
}

export type IFormAddon =
    | string
    | number
    | IconType
    | ReactNode
    | ((props: { size?: number; color?: string }) => ReactNode)
    | null
    | undefined;


export interface IFormSingleElement<Value = any> {
    id?: string;
    name?: string;
    ref?: any;
    onFocus?:()=>void
    value?: Value;
    defaultValue?: Value;
    attached?:boolean;

    required?: boolean;
    disabled?: boolean;
    invalid?: boolean;
    hideError?: boolean;

    isFloatedLabel?: boolean;
    inputSize?: "sm" | "md" | "lg";

    onChange?: (e: any, item?: any) => void;

    errors?: string | string[] | Record<string, FieldError> | FieldError;

    placeholder?:string;
    label?:
        | string
        | ReactElement
        | {
        placement?: "RL" | "B" | "T";
        text?: string;
        element?: ReactElement;
    };

    helperText?: ReactNode;

    leftAddon?: IFormAddon;
    rightAddon?: IFormAddon;

    ignoreDirection?: boolean;

    /** allow style props */
    style?: IStyleClasses;
    containerStyle?: IStyleClasses;

    /** Per-element slot style overrides (merged on top of theme defaults). */
    slots?: Partial<IFormElementSlots>;

}

export interface ILabelProps {
    label: IFormSingleElement["label"];
    isFormControl?:boolean;
    className?:string;
    elementId: string; // kept for API parity, unused on native
    as?: ITextComponent['as'] | IHeadingComponent['as']
    required?: boolean;
    /** Element-level style from theme.components[name].elements.label */
    style?: Record<string, any>;
}

export interface IKitsContainer
    extends IFormSingleElement,
        Omit<
            ElementProps,
            "onChange" | "onBlur" | "onFocus" | "value" | "defaultValue" | "ref" | "style" | "label" | "color"
        >,
        IStyleClasses {
    children?:ReactNode
    containerStyle?: IStyleClasses;
    additionalClassName?: string;
    /** Per-element styles (IStyleClasses) passed from the parent form input component */
    elementStyles?: Record<string, Record<string, any>>;
    /**
     * When true, strips the input-group chrome (border, border-radius, overflow, focus ring).
     * Used by Switch, Checkbox, and Radio which render their own visual controls
     * and don't need the standard bordered input container.
     */
    bare?: boolean;
}

export interface IEditableProps {
    defaultValue?: string;
    value?: string;

    onChange?: (value: string) => void;
    onSubmit?: (value: string) => void;

    activationMode?: "click" | "dblclick";
    disabled?: boolean;

    type?: "input" | "textarea";

    previewProps?: Record<string, any>;
    inputProps?: Record<string, any>;
    textareaProps?: Record<string, any>;

    controls?: (helpers: {
        submit(): void;
        cancel(): void;
    }) => ReactNode;
}

export interface IKitsInputNumber extends IFormSingleElement {
    value?: number | null;

    locale?: string;
    useGrouping?: boolean;
    minFractionDigits?: number;
    maxFractionDigits?: number;

    mode?: "decimal" | "currency";
    currency?: string;
    prefix?: string;
    suffix?: string;

    min?: number;
    max?: number;

    localProps?: InputNumberProps;

    onChange?: (
        event: InputNumberChangeEvent | InputNumberValueChangeEvent
    ) => void;

    ref?: Ref<HTMLInputElement>;
}

// ----------------------------------------------------------------
// 1. React Web Interface (Standard HTML Elements like div, p, etc.)
// ----------------------------------------------------------------
export interface IGlobalEvents<T = HTMLElement> {
    // Mouse / Pointer Events
    onClick?: React__default.MouseEventHandler<T>;
    onDoubleClick?: React__default.MouseEventHandler<T>;
    onMouseDown?: React__default.MouseEventHandler<T>;
    onMouseUp?: React__default.MouseEventHandler<T>;
    onMouseEnter?: React__default.MouseEventHandler<T>;
    onMouseLeave?: React__default.MouseEventHandler<T>;
    onMouseMove?: React__default.MouseEventHandler<T>;

    // Keyboard Events
    onKeyDown?: React__default.KeyboardEventHandler<T>;
    onKeyUp?: React__default.KeyboardEventHandler<T>;
    onKeyPress?: React__default.KeyboardEventHandler<T>;

    // Focus Events
    onFocus?: React__default.FocusEventHandler<T>;
    onBlur?: React__default.FocusEventHandler<T>;

    // Touch Events
    onTouchStart?: React__default.TouchEventHandler<T>;
    onTouchMove?: React__default.TouchEventHandler<T>;
    onTouchEnd?: React__default.TouchEventHandler<T>;
    onTouchCancel?: React__default.TouchEventHandler<T>;

    // UI Events
    onScroll?: React__default.UIEventHandler<T>;
}

export interface IKitsInputTextBase extends Omit<IFormSingleElement, 'onFocus'>, IGlobalEvents {
    value?: string;

    placeholder?: string;
    autoFocus?: boolean;
    isChecked?: boolean;
    hidden?: boolean;

    onSubmitEditing?:()=>void

    containerStyle?: IStyleClasses;

    keyFilter?: EKeyFilter | RegExp;

    /**
     * Controls the keyboard type displayed on mobile devices.
     * No effect on web — native-only prop.
     * @platform native
     */
    keyboardType?: 'default' | 'numeric' | 'email-address' | 'phone-pad' |
                   'decimal-pad' | 'url' | 'number-pad' | 'visible-password' |
                   'ascii-capable' | 'numbers-and-punctuation' | 'name-phone-pad' |
                   'twitter' | 'web-search';

    className?:string;
    /** platform-specific escape hatch */
    localProps?: unknown;

    style?:any;

    ref?: Ref<any>;
}

export interface IKitsInputMask extends IKitsInputTextBase {
    /** PrimeReact mask */
    mask?: string;

    /** Return unmasked value */
    unmask?: boolean;

}

/**
 * Web-only extension
 * DO NOT export as default
 */
export interface IKitsInputText extends IKitsInputTextBase {
    localProps?: InputTextProps;
}

export interface IKitsInputTextareaBase extends Omit<IFormSingleElement, 'onFocus'>,IGlobalEvents {
    value?: string;

    rows?: number;
    cols?: number;
    autoResize?: boolean;
    maxLength?: number;

    hidden?: boolean;
    isChecked?: boolean;
    autoFocus?: boolean;
    onSubmitEditing?:()=>void

    containerStyle?: IStyleClasses;
    keyFilter?: EKeyFilter | RegExp;

    localProps?: unknown;
    ref?: Ref<any>;
}

export interface IKitsInputTextarea extends IKitsInputTextareaBase {
    localProps?: React.TextareaHTMLAttributes<HTMLTextAreaElement>;
}

export interface IKitsInputSwitch extends Omit<IFormSingleElement, 'onChange'> {
    /** Controlled value for the switch (true/false) */
    value?: boolean;
    /** Primereact-like onChange handler */
    onChange?: (e: { target: { value: boolean }; value?: boolean }) => void;
    /** Pre-checked state for uncontrolled usage */
    checked?: boolean;
    /** Render as 'switch' (default) or 'checkbox' with inline label */
    displayAs?: 'switch' | 'checkbox';
    /** Layout direction: 'column' (label above, default) or 'row' (label + switch inline, space-between) */
    direction?: 'row' | 'column';
    /** For passing any extra props to underlying libs */
    localProps?: any;
    /** Ref forwarding */
    ref?: Ref<any>;
}

// packages/types/src/Components/Molecules/Form/Inputs/Password/index.ts


export interface IKitsInputPassword extends Omit<IFormSingleElement, 'onChange'> {
    value?: string;
    defaultValue?: string;
    onChange?: (e: { target: { value: string }; value?: string }) => void;

    promptLabel?: string;
    weakLabel?: string;
    mediumLabel?: string;
    strongLabel?: string;
    header?: ReactElement;
    footer?: ReactElement;
    feedback?: boolean;
    toggleEye?: boolean;
    showStrengthProgress?: boolean;
    localProps?: any;
    schema?:Yup.Schema | Yup.AnySchema
    ref?: Ref<any>;

    /** Custom icon shown when password is hidden (native only; web uses PrimeReact's built-in icon) */
    eyeIcon?: ReactNode;
    /** Custom icon shown when password is visible (native only; web uses PrimeReact's built-in icon) */
    eyeSlashIcon?: ReactNode;
}

export interface IKitsInputCalendar<T = any> extends IFormSingleElement {
    value?: Date | Date[] | null;
    defaultValue?: Date | Date[] | null;
    onChange?: (val: Date | Date[] | null) => void;
    placeholder?: string;
    localProps?: Omit<T, 'value' | 'onChange'> | {
        dateFormat?:string;
        placeholder?:string;
        selectionMode?:"range" | "single";
        view?:"date",
        numberOfMonths?:number
    };
}

export type FetchSuccess<T = any, Y = {}, X = {}> = {
  success: true;
  data: T;
  message?: string;
  meta?: Y
} & X;

export type FetchError = {
  pageCode: number;
  success: false;
  message: string;
};

export type ServerResponse<T = any, Y = {}, X = {}> = FetchSuccess<T, Y, X> | FetchError;

export interface TreeNode<T=any> extends Omit<TreeNode$1, 'data'>{
    data?: T;
}

export interface ServerMethod {
    (node: ITreeItem): Promise<ServerResponse<ITreeItem>> | null;
}

export type ITreeItem<T = any> = {
    isItem: boolean;
    label: string;
    value: number | string;
    parentId?: null | number | string;
    data: T;
    icon?: string;
    selectable?: boolean;
};

// Interface for server-side interactions
export interface ServerSideProps {
    listFetcher?: () => Promise<ServerResponse<ITreeItem[]>>;
    onAddCategory?: ServerMethod;
    onAddItem?: ServerMethod;
    onDeleteCategory?: (
        node: ITreeItem,
    ) => Promise<ServerResponse<ITreeItem>> | null;
    onDeleteItem?: (node: ITreeItem) => Promise<ServerResponse<ITreeItem>> | null;
    onUpdateCategory?: ServerMethod;
    onUpdateItem?: ServerMethod;
    onSortItem?: (
        node: ITreeItem,
        toNode: ITreeItem | null,
    ) => Promise<ServerResponse<ITreeItem>> | null;
}

// Interface for callback props
export interface CallbackProps<T> {
    onAddCategory?: (newItem: ITreeItem<T>) => void;
    onAddItem?: (newItem: ITreeItem<T>) => void;
    onDeleteCategory?: (node: ITreeItem<T>) => void;
    onDeleteItem?: (node: ITreeItem<T>) => void;
    onUpdateCategory?: (node: ITreeItem<T>) => void;
    onUpdateItem?: (node: ITreeItem<T>) => void;
    onSortItem?: (node: ITreeItem<T>, toNode: ITreeItem<T> | null) => void;
    onSelectItem?: (node: ITreeItem<T>) => void;
}

// Interface for validation methods
export interface ValidationProps<T> {
    beforeAddCategory?: (
        parentNode: ITreeItem<T> | null,
    ) => Promise<[boolean, ITreeItem<T>?]>;
    beforeAddItem?: (
        parentNode: ITreeItem<T> | null,
    ) => Promise<[boolean, ITreeItem<T>?]>;
    beforeDeleteCategory?: (node: ITreeItem<T>) => Promise<[boolean, string]>;
    beforeDeleteItem?: (node: ITreeItem<T>) => Promise<[boolean, string]>;
    beforeUpdateCategory?: (node: ITreeItem<T>) => Promise<[boolean, ITreeItem<T>?]>;
    beforeUpdateItem?: (node: ITreeItem<T>) => Promise<[boolean, ITreeItem<T>?]>;
    beforeSortItem?: (
        node: ITreeItem<T>,
        to: ITreeItem<T> | null,
    ) => Promise<[boolean, ITreeItem<T>?]>;
}

export type clearFunction = (
    specify?:
        | "all"
        | "checkedCategories"
        | "checkedItems"
        | "unCheckedCategories"
        | "unCheckedItems"
        | "newItems"
        | "newCategories"
        | "editedItems"
        | "editedCategories"
        | "deletedItems"
        | "deletedCategories",
) => void;

// Interface for tree change notification
export interface TreeChangeProps {
    onUpdateChecklist?: (oldNode: ITreeItem, newNode: ITreeItem) => void;
    onTreeChange?: (
        props: {
            checkedCategories: (string | number)[];
            checkedItems: (string | number)[];
            unCheckedCategories: (string | number)[];
            unCheckedItems: (string | number)[];
            newItems: ITreeItem[];
            newCategories: ITreeItem[];
            editedItems: ITreeItem[];
            editedCategories: ITreeItem[];
            deletedItems: ITreeItem[];
            deletedCategories: ITreeItem[];
        },
        clear: clearFunction,
    ) => void;
}

// Interface for customizable text labels
export interface TextLabels {
    addNode?: string;
    addItem?: string;
    deleteNode?: string;
    editNode?: string;
    deleteItem?: string;
    editItem?: string;
}

// Main interface for the CustomTreeView component props
export interface ITreeViewProps<T=any>
    extends CallbackProps<T>,
        ValidationProps<T>,
        TreeChangeProps {
    tree?: ITreeItem<T>[];
    checkbox?: boolean;
    nodeTemplate?: (
        node: TreeNode<ITreeItem<T>>,
        options: TreeNodeTemplateOptions,
    ) => ReactNode;
    allowNoCategoryItem?: boolean;
    expendableControls?: boolean;
    isExpended?: boolean;
    isStructured?: boolean;
    preselectList?: (string | number)[];
    isReadOnly?: boolean;
    containerProps?: IFlexComponent;
    rules?: {
        addCategory?: boolean;
        addSubCategory?: boolean;
        addItem?: boolean;

        updateCategory?: boolean;
        updateSubCategory?: boolean;
        updateItem?: boolean;

        deleteCategory?: boolean;
        deleteSubCategory?: boolean;
        deleteItem?: boolean;

        allowIndependentItem?: boolean;
    };
    hideDisabledButton?: boolean;
    serverSide?: ServerSideProps;
    isLoading?: boolean;
    hideSearchBox?: boolean;
    renderedItemTemplate?: (node: TreeNode<ITreeItem<T>>) => React.ReactNode;
    sortable?: boolean;
    text?: TextLabels;
    // New props for toolbar hiding logic passed from original implementation
    hideToolbar?: boolean;
}

// 1. Data Definitions
export type IListItem = Record<string, any> | string | number;


export type IList = IListItem[] | (() => Promise<ServerResponse<IListItem[]>>);

// 2. Base Props (Shared by ALL Select components)
// TStyle = CSSProperties (Web) | ViewStyle (Native)
// TLocalProps = PrimeReact Props | Gluestack Props
export interface ISelectCore<TStyle = any, TLocalProps = any> extends IFormSingleElement{
    // Data & State
    list: IList;
    loading?: boolean;

    attached?:boolean;

    // Keys Configuration
    labelKey?: string;
    valueKey?: string;
    childrenKey?: string;
    outputValueKey?: string;

    // UI / Layout
    inputSize?: "sm" | "md" | "lg";

    // Feature Flags
    withFilter?: boolean;
    filterBy?: string;
    virtualScroll?: boolean | any; // Type 'any' allows passing specific config objects
    emptyFilterMessage?: ReactNode;
    showClear?: boolean;
    itemTemplate?: (item: any) => ReactNode;

    // Platform Passthrough
    className?: string;
    localProps?: TLocalProps; // Escape hatch for library-specific props
}

// 3. Component Specific Cores

export interface ICascadeSelectCore<S, P> extends ISelectCore<S, P> {
    withArrow?: boolean;
}
export interface IDropdownCore<S, P> extends ISelectCore<S, P> {
    withArrow?: boolean;
}

export interface IMultiSelectCore<S, P> extends ISelectCore<S, P> {
    withArrow?: boolean;
    selectionLimit?: number;
    // 'chip' or 'comma' (web) / 'text' (native)
    valueMode?: "chip" | "comma" | "text";
}

export interface IAutoCompleteCore<S, P> extends ISelectCore<S, P> {
    completeMethod?: (query: string) => void | Promise<any>;
    forceSelection?: boolean;
    isMultiple?: boolean;
    withArrow?: boolean;
    delay?: number;
    minLength?: number;
    selectionLimit?: number;
    showEmptyMessage?: boolean;
}

export interface IListBoxCore<S, P> extends ISelectCore<S, P> {
    isMultiple?: boolean;
}

export interface ITreeSelectCore<S, P> extends ISelectCore<S, P> {
    isMultiple?: boolean;
    isStructured?: boolean; // If true, assumes data is already in ITreeSelectNode format
    valueMode?: "chip" | "comma";
    /** When true, only parent nodes that have children are rendered */
    onlyParentsWithChildren?: boolean;
    /** Resets filter value when the overlay panel is hidden */
    resetFilterOnHide?: boolean;
    /** Maximum height of the options panel in pixels (default: 350) */
    scrollHeight?: number;
    /** Text shown when there are no options */
    emptyMessage?: string;
}

export interface ISelectType {
    shape?: "cascade" | "dropdown" | "multiselect" | "autocomplete" | "listBox" | "treeSelect"
}

// Define the concrete types used by components
export type ICascadeSelect = ICascadeSelectCore<CSSProperties, CascadeSelectProps>;
export type IDropdownSelect = IDropdownCore<CSSProperties, DropdownProps>;
export type IMultiSelect = IMultiSelectCore<CSSProperties, MultiSelectProps>;
export type IAutoCompleteElement = IAutoCompleteCore<CSSProperties, AutoCompleteProps>;
export type IListBoxSelect = IListBoxCore<CSSProperties, ListBoxProps>;
export type ITreeSelect = ITreeSelectCore<CSSProperties, TreeSelectProps>;

// Union type
export type ISelectElement =
    | ICascadeSelect
    | IDropdownSelect
    | IMultiSelect
    | IAutoCompleteElement
    | IListBoxSelect
    | ITreeSelect;

export type IAddressFormat = {
    formatted_address?: string;
    city?: string;
    country?: string;
};

export interface IKitsInputLocation
    extends Omit<IAutoCompleteElement, "shape"> {
    onAddressClick?: (props: IAddressFormat) => void;
    countryISO?:string;
    provider?: "google" | "experian";
    api_key?: string;
    forceSelection?: boolean;
}

/** Structured phone output when outputFormat is "object" */
export interface IPhoneObjectValue {
    /** Country calling code (e.g., "61" for Australia) */
    countryCode: string;
    /** National phone number digits without country code (e.g., "412345678") */
    nationalNumber: string;
    /** Full international formatted display (e.g., "+61-4-1234-5678") */
    internationalFormatted: string;
    /** National formatted display without country prefix (e.g., "4-1234-5678") */
    nationalFormatted: string;
    /** ISO 3166-1 alpha-2 code (e.g., "AU") */
    iso: string;
}

/** Phone value — either E.164 string or structured object depending on outputFormat */
export type IPhoneValue = string | IPhoneObjectValue;

export interface IKitsPhoneInput
    extends Omit<IKitsInputMask, "onBlur" | "onFocus" | "onChange"> {
    value?: any;
    isWithCountryCode?: boolean;
    /**
     * Controls the shape of the onChange output.
     * - "string": emits E.164 string (e.g., "+15551234567")
     * - "object": emits IPhoneObjectValue with countryCode, nationalNumber, formatted values
     * @default "string"
     */
    outputFormat?: 'string' | 'object';
    /** Default country ISO code for initial flag display (e.g., "US") */
    defaultCountry?: string;
    onChange?: (value: any) => void;
    onFocus?: (value: any) => void;
    onBlur?: (value: any) => void;
    /** @deprecated Masking is now handled automatically via format-as-you-type */
    withMask?: boolean;
    /** @deprecated No longer needed — country selection removed */
    labelKey?: string;
    /** @deprecated No longer needed — country selection removed */
    valueKey?: string;
    customCountriesCodesList?: { name: string; code: string | number; iso?: string; flag?: string }[];
    includedCountries?: string[];
    excludedCountries?: string[];
    ref?: Ref<{
        value: IPhoneValue;
        setValue(value: any): void;
    }>;
}

export interface IKitsInputColorPicker extends IFormSingleElement {
    /** Controlled value (string or object depending on format) */
    value?: any;
    /** Uncontrolled default value */
    defaultValue?: any;
    /** Output the color change (string or object) */
    onChange?: (value: any) => void;
    /** Format: `hex` | `rgb` | `hsl` (for native, determine accordingly) */
    colorFormat?: 'hex' | 'rgb' | 'hsb';
    /** Inline display (web only) */
    inline?: boolean;
    /** Local props (web-only for Primereact `<ColorPicker>`), typed loosely */
    localProps?: Record<string, any>;

    containerStyle?:any
}

export interface ISliderProps extends Omit<ElementProps, 'onChange' | 'color'>, IStyleClasses {
    minValue: number;
    maxValue?: number;
    size?: KitsResponsiveValue<any>;
    prefix: string;
    orientation?: "horizontal" | "vertical";
    value?: any;
    isRange?: boolean;
    required?: boolean;

    step?: number;
    disabled?: boolean;
    onChange?(e: { value: number | [number, number] }): void;
    onSlideEnd?: (e: SliderSlideEndEvent) => void;
}

declare const imagesTypes = {
    "png": "image/png",
    "jpgv": "video/jpeg",
    "jpg": "image/jpeg",
    "jpe": "image/jpeg",
    "gif": "image/gif",
    "jpeg": "image/jpeg",
} as const;


declare const filesTypes = {
    allFiles: ["*/*", "public.item", "*"],
    pdf: ["application/pdf", "com.adobe.pdf"],
    json: ["application/json", "public.json"],
    txt: ["text/plain", "public.plain-text"],
    doc: ["application/msword", "com.microsoft.word.doc"],
    docx: [
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        "org.openxmlformats.wordprocessingml.document",
    ],
    xls: ["application/vnd.ms-excel", "com.microsoft.excel.xls"],
    xlsx: [
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        "org.openxmlformats.spreadsheetml.sheet",
    ],
    ppt: ["application/vnd.ms-powerpoint", "com.microsoft.powerpoint.ppt"],
    pptx: [
        "application/vnd.openxmlformats-officedocument.presentationml.presentation",
        "org.openxmlformats.presentationml.presentation",
    ],
    zip: ["application/zip", "public.zip-archive"],
    csv: ["text/csv", "public.comma-separated-values-text"],
    audio: ["audio/*", "public.audio"],
    video: ["video/*", "public.movie"],
    images: ["image/*", "public.image"],
    "123": "application/vnd.lotus-1-2-3",
    "1km": "application/vnd.1000minds.decision-model+xml",
    "3dml": "text/vnd.in3d.3dml",
    "3ds": "image/x-3ds",
    "3g2": "video/3gpp2",
    "3gp": "video/3gpp",
    "3gpp": "video/3gpp",
    "3mf": "model/3mf",
    "7z": "application/x-7z-compressed",
    "aab": "application/x-authorware-bin",
    "aac": "audio/x-aac",
    "aam": "application/x-authorware-map",
    "aas": "application/x-authorware-seg",
    "abw": "application/x-abiword",
    "ac": "application/vnd.nokia.n-gage.ac+xml",
    "acc": "application/vnd.americandynamics.acc",
    "ace": "application/x-ace-compressed",
    "acu": "application/vnd.acucobol",
    "acutc": "application/vnd.acucorp",
    "adp": "audio/adpcm",
    "adts": "audio/aac",
    "aep": "application/vnd.audiograph",
    "afm": "application/x-font-type1",
    "afp": "application/vnd.ibm.modcap",
    "age": "application/vnd.age",
    "ahead": "application/vnd.ahead.space",
    "ai": "application/postscript",
    "aif": "audio/x-aiff",
    "aifc": "audio/x-aiff",
    "aiff": "audio/x-aiff",
    "air": "application/vnd.adobe.air-application-installer-package+zip",
    "ait": "application/vnd.dvb.ait",
    "ami": "application/vnd.amiga.ami",
    "aml": "application/automationml-aml+xml",
    "amlx": "application/automationml-amlx+zip",
    "amr": "audio/amr",
    "apk": "application/vnd.android.package-archive",
    "apng": "image/apng",
    "appcache": "text/cache-manifest",
    "appinstaller": "application/appinstaller",
    "application": "application/x-ms-application",
    "appx": "application/appx",
    "appxbundle": "application/appxbundle",
    "apr": "application/vnd.lotus-approach",
    "arc": "application/x-freearc",
    "arj": "application/x-arj",
    "asc": "application/pgp-signature",
    "asf": "video/x-ms-asf",
    "asm": "text/x-asm",
    "aso": "application/vnd.accpac.simply.aso",
    "asx": "video/x-ms-asf",
    "atc": "application/vnd.acucorp",
    "atom": "application/atom+xml",
    "atomcat": "application/atomcat+xml",
    "atomdeleted": "application/atomdeleted+xml",
    "atomsvc": "application/atomsvc+xml",
    "atx": "application/vnd.antix.game-component",
    "au": "audio/basic",
    "avci": "image/avci",
    "avcs": "image/avcs",
    "avi": "video/x-msvideo",
    "avif": "image/avif",
    "aw": "application/applixware",
    "azf": "application/vnd.airzip.filesecure.azf",
    "azs": "application/vnd.airzip.filesecure.azs",
    "azv": "image/vnd.airzip.accelerator.azv",
    "azw": "application/vnd.amazon.ebook",
    "b16": "image/vnd.pco.b16",
    "bat": "application/x-msdownload",
    "bcpio": "application/x-bcpio",
    "bdf": "application/x-font-bdf",
    "bdm": "application/vnd.syncml.dm+wbxml",
    "bdoc": "application/x-bdoc",
    "bed": "application/vnd.realvnc.bed",
    "bh2": "application/vnd.fujitsu.oasysprs",
    "bin": "application/octet-stream",
    "blb": "application/x-blorb",
    "blorb": "application/x-blorb",
    "bmi": "application/vnd.bmi",
    "bmml": "application/vnd.balsamiq.bmml+xml",
    "bmp": "image/x-ms-bmp",
    "book": "application/vnd.framemaker",
    "box": "application/vnd.previewsystems.box",
    "boz": "application/x-bzip2",
    "bpk": "application/octet-stream",
    "bsp": "model/vnd.valve.source.compiled-map",
    "btf": "image/prs.btif",
    "btif": "image/prs.btif",
    "buffer": "application/octet-stream",
    "bz": "application/x-bzip",
    "bz2": "application/x-bzip2",
    "c": "text/x-c",
    "c11amc": "application/vnd.cluetrust.cartomobile-config",
    "c11amz": "application/vnd.cluetrust.cartomobile-config-pkg",
    "c4d": "application/vnd.clonk.c4group",
    "c4f": "application/vnd.clonk.c4group",
    "c4g": "application/vnd.clonk.c4group",
    "c4p": "application/vnd.clonk.c4group",
    "c4u": "application/vnd.clonk.c4group",
    "cab": "application/vnd.ms-cab-compressed",
    "caf": "audio/x-caf",
    "cap": "application/vnd.tcpdump.pcap",
    "car": "application/vnd.curl.car",
    "cat": "application/vnd.ms-pki.seccat",
    "cb7": "application/x-cbr",
    "cba": "application/x-cbr",
    "cbr": "application/x-cbr",
    "cbt": "application/x-cbr",
    "cbz": "application/x-cbr",
    "cc": "text/x-c",
    "cco": "application/x-cocoa",
    "cct": "application/x-director",
    "ccxml": "application/ccxml+xml",
    "cdbcmsg": "application/vnd.contact.cmsg",
    "cdf": "application/x-netcdf",
    "cdfx": "application/cdfx+xml",
    "cdkey": "application/vnd.mediastation.cdkey",
    "cdmia": "application/cdmi-capability",
    "cdmic": "application/cdmi-container",
    "cdmid": "application/cdmi-domain",
    "cdmio": "application/cdmi-object",
    "cdmiq": "application/cdmi-queue",
    "cdx": "chemical/x-cdx",
    "cdxml": "application/vnd.chemdraw+xml",
    "cdy": "application/vnd.cinderella",
    "cer": "application/pkix-cert",
    "cfs": "application/x-cfs-compressed",
    "cgm": "image/cgm",
    "chat": "application/x-chat",
    "chm": "application/vnd.ms-htmlhelp",
    "chrt": "application/vnd.kde.kchart",
    "cif": "chemical/x-cif",
    "cii": "application/vnd.anser-web-certificate-issue-initiation",
    "cil": "application/vnd.ms-artgalry",
    "cjs": "application/node",
    "cla": "application/vnd.claymore",
    "class": "application/java-vm",
    "cld": "model/vnd.cld",
    "clkk": "application/vnd.crick.clicker.keyboard",
    "clkp": "application/vnd.crick.clicker.palette",
    "clkt": "application/vnd.crick.clicker.template",
    "clkw": "application/vnd.crick.clicker.wordbank",
    "clkx": "application/vnd.crick.clicker",
    "clp": "application/x-msclip",
    "cmc": "application/vnd.cosmocaller",
    "cmdf": "chemical/x-cmdf",
    "cml": "chemical/x-cml",
    "cmp": "application/vnd.yellowriver-custom-menu",
    "cmx": "image/x-cmx",
    "cod": "application/vnd.rim.cod",
    "coffee": "text/coffeescript",
    "com": "application/x-msdownload",
    "conf": "text/plain",
    "cpio": "application/x-cpio",
    "cpl": "application/cpl+xml",
    "cpp": "text/x-c",
    "cpt": "application/mac-compactpro",
    "crd": "application/x-mscardfile",
    "crl": "application/pkix-crl",
    "crt": "application/x-x509-ca-cert",
    "crx": "application/x-chrome-extension",
    "cryptonote": "application/vnd.rig.cryptonote",
    "csh": "application/x-csh",
    "csl": "application/vnd.citationstyles.style+xml",
    "csml": "chemical/x-csml",
    "csp": "application/vnd.commonspace",
    "css": "text/css",
    "cst": "application/x-director",
    "cu": "application/cu-seeme",
    "curl": "text/vnd.curl",
    "cwl": "application/cwl",
    "cww": "application/prs.cww",
    "cxt": "application/x-director",
    "cxx": "text/x-c",
    "dae": "model/vnd.collada+xml",
    "daf": "application/vnd.mobius.daf",
    "dart": "application/vnd.dart",
    "dataless": "application/vnd.fdsn.seed",
    "davmount": "application/davmount+xml",
    "dbf": "application/vnd.dbf",
    "dbk": "application/docbook+xml",
    "dcr": "application/x-director",
    "dcurl": "text/vnd.curl.dcurl",
    "dd2": "application/vnd.oma.dd2+xml",
    "ddd": "application/vnd.fujixerox.ddd",
    "ddf": "application/vnd.syncml.dmddf+xml",
    "dds": "image/vnd.ms-dds",
    "deb": "application/x-debian-package",
    "def": "text/plain",
    "deploy": "application/octet-stream",
    "der": "application/x-x509-ca-cert",
    "dfac": "application/vnd.dreamfactory",
    "dgc": "application/x-dgc-compressed",
    "dib": "image/bmp",
    "dic": "text/x-c",
    "dir": "application/x-director",
    "dis": "application/vnd.mobius.dis",
    "disposition-notification": "message/disposition-notification",
    "dist": "application/octet-stream",
    "distz": "application/octet-stream",
    "djv": "image/vnd.djvu",
    "djvu": "image/vnd.djvu",
    "dll": "application/x-msdownload",
    "dmg": "application/x-apple-diskimage",
    "dmp": "application/vnd.tcpdump.pcap",
    "dms": "application/octet-stream",
    "dna": "application/vnd.dna",
    "docm": "application/vnd.ms-word.document.macroenabled.12",
    "dot": "application/msword",
    "dotm": "application/vnd.ms-word.template.macroenabled.12",
    "dotx": "application/vnd.openxmlformats-officedocument.wordprocessingml.template",
    "dp": "application/vnd.osgi.dp",
    "dpg": "application/vnd.dpgraph",
    "dpx": "image/dpx",
    "dra": "audio/vnd.dra",
    "drle": "image/dicom-rle",
    "dsc": "text/prs.lines.tag",
    "dssc": "application/dssc+der",
    "dtb": "application/x-dtbook+xml",
    "dtd": "application/xml-dtd",
    "dts": "audio/vnd.dts",
    "dtshd": "audio/vnd.dts.hd",
    "dump": "application/octet-stream",
    "dvb": "video/vnd.dvb.file",
    "dvi": "application/x-dvi",
    "dwd": "application/atsc-dwd+xml",
    "dwf": "model/vnd.dwf",
    "dwg": "image/vnd.dwg",
    "dxf": "image/vnd.dxf",
    "dxp": "application/vnd.spotfire.dxp",
    "dxr": "application/x-director",
    "ear": "application/java-archive",
    "ecelp4800": "audio/vnd.nuera.ecelp4800",
    "ecelp7470": "audio/vnd.nuera.ecelp7470",
    "ecelp9600": "audio/vnd.nuera.ecelp9600",
    "ecma": "application/ecmascript",
    "edm": "application/vnd.novadigm.edm",
    "edx": "application/vnd.novadigm.edx",
    "efif": "application/vnd.picsel",
    "ei6": "application/vnd.pg.osasli",
    "elc": "application/octet-stream",
    "emf": "image/emf",
    "eml": "message/rfc822",
    "emma": "application/emma+xml",
    "emotionml": "application/emotionml+xml",
    "emz": "application/x-msmetafile",
    "eol": "audio/vnd.digital-winds",
    "eot": "application/vnd.ms-fontobject",
    "eps": "application/postscript",
    "epub": "application/epub+zip",
    "es3": "application/vnd.eszigno3+xml",
    "esa": "application/vnd.osgi.subsystem",
    "esf": "application/vnd.epson.esf",
    "et3": "application/vnd.eszigno3+xml",
    "etx": "text/x-setext",
    "eva": "application/x-eva",
    "evy": "application/x-envoy",
    "exe": "application/x-msdownload",
    "exi": "application/exi",
    "exp": "application/express",
    "exr": "image/aces",
    "ext": "application/vnd.novadigm.ext",
    "ez": "application/andrew-inset",
    "ez2": "application/vnd.ezpix-album",
    "ez3": "application/vnd.ezpix-package",
    "f": "text/x-fortran",
    "f4v": "video/x-f4v",
    "f77": "text/x-fortran",
    "f90": "text/x-fortran",
    "fbs": "image/vnd.fastbidsheet",
    "fcdt": "application/vnd.adobe.formscentral.fcdt",
    "fcs": "application/vnd.isac.fcs",
    "fdf": "application/vnd.fdf",
    "fdt": "application/fdt+xml",
    "fe_launch": "application/vnd.denovo.fcselayout-link",
    "fg5": "application/vnd.fujitsu.oasysgp",
    "fgd": "application/x-director",
    "fh": "image/x-freehand",
    "fh4": "image/x-freehand",
    "fh5": "image/x-freehand",
    "fh7": "image/x-freehand",
    "fhc": "image/x-freehand",
    "fig": "application/x-xfig",
    "fits": "image/fits",
    "flac": "audio/x-flac",
    "fli": "video/x-fli",
    "flo": "application/vnd.micrografx.flo",
    "flv": "video/x-flv",
    "flw": "application/vnd.kde.kivio",
    "flx": "text/vnd.fmi.flexstor",
    "fly": "text/vnd.fly",
    "fm": "application/vnd.framemaker",
    "fnc": "application/vnd.frogans.fnc",
    "fo": "application/vnd.software602.filler.form+xml",
    "for": "text/x-fortran",
    "fpx": "image/vnd.fpx",
    "frame": "application/vnd.framemaker",
    "fsc": "application/vnd.fsc.weblaunch",
    "fst": "image/vnd.fst",
    "ftc": "application/vnd.fluxtime.clip",
    "fti": "application/vnd.anser-web-funds-transfer-initiation",
    "fvt": "video/vnd.fvt",
    "fxp": "application/vnd.adobe.fxp",
    "fxpl": "application/vnd.adobe.fxp",
    "fzs": "application/vnd.fuzzysheet",
    "g2w": "application/vnd.geoplan",
    "g3": "image/g3fax",
    "g3w": "application/vnd.geospace",
    "gac": "application/vnd.groove-account",
    "gam": "application/x-tads",
    "gbr": "application/rpki-ghostbusters",
    "gca": "application/x-gca-compressed",
    "gdl": "model/vnd.gdl",
    "gdoc": "application/vnd.google-apps.document",
    "ged": "text/vnd.familysearch.gedcom",
    "geo": "application/vnd.dynageo",
    "geojson": "application/geo+json",
    "gex": "application/vnd.geometry-explorer",
    "ggb": "application/vnd.geogebra.file",
    "ggt": "application/vnd.geogebra.tool",
    "ghf": "application/vnd.groove-help",
    "gim": "application/vnd.groove-identity-message",
    "glb": "model/gltf-binary",
    "gltf": "model/gltf+json",
    "gml": "application/gml+xml",
    "gmx": "application/vnd.gmx",
    "gnumeric": "application/x-gnumeric",
    "gph": "application/vnd.flographit",
    "gpx": "application/gpx+xml",
    "gqf": "application/vnd.grafeq",
    "gqs": "application/vnd.grafeq",
    "gram": "application/srgs",
    "gramps": "application/x-gramps-xml",
    "gre": "application/vnd.geometry-explorer",
    "grv": "application/vnd.groove-injector",
    "grxml": "application/srgs+xml",
    "gsf": "application/x-font-ghostscript",
    "gsheet": "application/vnd.google-apps.spreadsheet",
    "gslides": "application/vnd.google-apps.presentation",
    "gtar": "application/x-gtar",
    "gtm": "application/vnd.groove-tool-message",
    "gtw": "model/vnd.gtw",
    "gv": "text/vnd.graphviz",
    "gxf": "application/gxf",
    "gxt": "application/vnd.geonext",
    "gz": "application/gzip",
    "h": "text/x-c",
    "h261": "video/h261",
    "h263": "video/h263",
    "h264": "video/h264",
    "hal": "application/vnd.hal+xml",
    "hbci": "application/vnd.hbci",
    "hbs": "text/x-handlebars-template",
    "hdd": "application/x-virtualbox-hdd",
    "hdf": "application/x-hdf",
    "heic": "image/heic",
    "heics": "image/heic-sequence",
    "heif": "image/heif",
    "heifs": "image/heif-sequence",
    "hej2": "image/hej2k",
    "held": "application/atsc-held+xml",
    "hh": "text/x-c",
    "hjson": "application/hjson",
    "hlp": "application/winhlp",
    "hpgl": "application/vnd.hp-hpgl",
    "hpid": "application/vnd.hp-hpid",
    "hps": "application/vnd.hp-hps",
    "hqx": "application/mac-binhex40",
    "hsj2": "image/hsj2",
    "htc": "text/x-component",
    "htke": "application/vnd.kenameaapp",
    "htm": "text/html",
    "html": "text/html",
    "hvd": "application/vnd.yamaha.hv-dic",
    "hvp": "application/vnd.yamaha.hv-voice",
    "hvs": "application/vnd.yamaha.hv-script",
    "i2g": "application/vnd.intergeo",
    "icc": "application/vnd.iccprofile",
    "ice": "x-conference/x-cooltalk",
    "icm": "application/vnd.iccprofile",
    "ico": "image/x-icon",
    "ics": "text/calendar",
    "ief": "image/ief",
    "ifb": "text/calendar",
    "ifm": "application/vnd.shana.informed.formdata",
    "iges": "model/iges",
    "igl": "application/vnd.igloader",
    "igm": "application/vnd.insors.igm",
    "igs": "model/iges",
    "igx": "application/vnd.micrografx.igx",
    "iif": "application/vnd.shana.informed.interchange",
    "img": "application/octet-stream",
    "imp": "application/vnd.accpac.simply.imp",
    "ims": "application/vnd.ms-ims",
    "in": "text/plain",
    "ini": "text/plain",
    "ink": "application/inkml+xml",
    "inkml": "application/inkml+xml",
    "install": "application/x-install-instructions",
    "iota": "application/vnd.astraea-software.iota",
    "ipfix": "application/ipfix",
    "ipk": "application/vnd.shana.informed.package",
    "irm": "application/vnd.ibm.rights-management",
    "irp": "application/vnd.irepository.package+xml",
    "iso": "application/x-iso9660-image",
    "itp": "application/vnd.shana.informed.formtemplate",
    "its": "application/its+xml",
    "ivp": "application/vnd.immervision-ivp",
    "ivu": "application/vnd.immervision-ivu",
    "jad": "text/vnd.sun.j2me.app-descriptor",
    "jade": "text/jade",
    "jam": "application/vnd.jam",
    "jar": "application/java-archive",
    "jardiff": "application/x-java-archive-diff",
    "java": "text/x-java-source",
    "jhc": "image/jphc",
    "jisp": "application/vnd.jisp",
    "jls": "image/jls",
    "jlt": "application/vnd.hp-jlyt",
    "jng": "image/x-jng",
    "jnlp": "application/x-java-jnlp-file",
    "joda": "application/vnd.joost.joda-archive",
    "jp2": "image/jp2",
    "jpf": "image/jpx",
    "jpg2": "image/jp2",
    "jpgm": "video/jpm",
    "jph": "image/jph",
    "jpm": "video/jpm",
    "jpx": "image/jpx",
    "js": "text/javascript",
    "json5": "application/json5",
    "jsonld": "application/ld+json",
    "jsonml": "application/jsonml+json",
    "jsx": "text/jsx",
    "jt": "model/jt",
    "jxr": "image/jxr",
    "jxra": "image/jxra",
    "jxrs": "image/jxrs",
    "jxs": "image/jxs",
    "jxsc": "image/jxsc",
    "jxsi": "image/jxsi",
    "jxss": "image/jxss",
    "kar": "audio/midi",
    "karbon": "application/vnd.kde.karbon",
    "kdbx": "application/x-keepass2",
    "key": "application/x-iwork-keynote-sffkey",
    "kfo": "application/vnd.kde.kformula",
    "kia": "application/vnd.kidspiration",
    "kml": "application/vnd.google-earth.kml+xml",
    "kmz": "application/vnd.google-earth.kmz",
    "kne": "application/vnd.kinar",
    "knp": "application/vnd.kinar",
    "kon": "application/vnd.kde.kontour",
    "kpr": "application/vnd.kde.kpresenter",
    "kpt": "application/vnd.kde.kpresenter",
    "kpxx": "application/vnd.ds-keypoint",
    "ksp": "application/vnd.kde.kspread",
    "ktr": "application/vnd.kahootz",
    "ktx": "image/ktx",
    "ktx2": "image/ktx2",
    "ktz": "application/vnd.kahootz",
    "kwd": "application/vnd.kde.kword",
    "kwt": "application/vnd.kde.kword",
    "lasxml": "application/vnd.las.las+xml",
    "latex": "application/x-latex",
    "lbd": "application/vnd.llamagraphics.life-balance.desktop",
    "lbe": "application/vnd.llamagraphics.life-balance.exchange+xml",
    "les": "application/vnd.hhe.lesson-player",
    "less": "text/less",
    "lgr": "application/lgr+xml",
    "lha": "application/x-lzh-compressed",
    "link66": "application/vnd.route66.link66+xml",
    "list": "text/plain",
    "list3820": "application/vnd.ibm.modcap",
    "listafp": "application/vnd.ibm.modcap",
    "litcoffee": "text/coffeescript",
    "lnk": "application/x-ms-shortcut",
    "log": "text/plain",
    "lostxml": "application/lost+xml",
    "lrf": "application/octet-stream",
    "lrm": "application/vnd.ms-lrm",
    "ltf": "application/vnd.frogans.ltf",
    "lua": "text/x-lua",
    "luac": "application/x-lua-bytecode",
    "lvp": "audio/vnd.lucent.voice",
    "lwp": "application/vnd.lotus-wordpro",
    "lzh": "application/x-lzh-compressed",
    "m13": "application/x-msmediaview",
    "m14": "application/x-msmediaview",
    "m1v": "video/mpeg",
    "m21": "application/mp21",
    "m2a": "audio/mpeg",
    "m2v": "video/mpeg",
    "m3a": "audio/mpeg",
    "m3u": "audio/x-mpegurl",
    "m3u8": "application/vnd.apple.mpegurl",
    "m4a": "audio/x-m4a",
    "m4p": "application/mp4",
    "m4s": "video/iso.segment",
    "m4u": "video/vnd.mpegurl",
    "m4v": "video/x-m4v",
    "ma": "application/mathematica",
    "mads": "application/mads+xml",
    "maei": "application/mmt-aei+xml",
    "mag": "application/vnd.ecowin.chart",
    "maker": "application/vnd.framemaker",
    "man": "text/troff",
    "manifest": "text/cache-manifest",
    "map": "application/json",
    "mar": "application/octet-stream",
    "markdown": "text/markdown",
    "mathml": "application/mathml+xml",
    "mb": "application/mathematica",
    "mbk": "application/vnd.mobius.mbk",
    "mbox": "application/mbox",
    "mc1": "application/vnd.medcalcdata",
    "mcd": "application/vnd.mcd",
    "mcurl": "text/vnd.curl.mcurl",
    "md": "text/markdown",
    "mdb": "application/x-msaccess",
    "mdi": "image/vnd.ms-modi",
    "mdx": "text/mdx",
    "me": "text/troff",
    "mesh": "model/mesh",
    "meta4": "application/metalink4+xml",
    "metalink": "application/metalink+xml",
    "mets": "application/mets+xml",
    "mfm": "application/vnd.mfmp",
    "mft": "application/rpki-manifest",
    "mgp": "application/vnd.osgeo.mapguide.package",
    "mgz": "application/vnd.proteus.magazine",
    "mid": "audio/midi",
    "midi": "audio/midi",
    "mie": "application/x-mie",
    "mif": "application/vnd.mif",
    "mime": "message/rfc822",
    "mj2": "video/mj2",
    "mjp2": "video/mj2",
    "mjs": "text/javascript",
    "mk3d": "video/x-matroska",
    "mka": "audio/x-matroska",
    "mkd": "text/x-markdown",
    "mks": "video/x-matroska",
    "mkv": "video/x-matroska",
    "mlp": "application/vnd.dolby.mlp",
    "mmd": "application/vnd.chipnuts.karaoke-mmd",
    "mmf": "application/vnd.smaf",
    "mml": "text/mathml",
    "mmr": "image/vnd.fujixerox.edmics-mmr",
    "mng": "video/x-mng",
    "mny": "application/x-msmoney",
    "mobi": "application/x-mobipocket-ebook",
    "mods": "application/mods+xml",
    "mov": "video/quicktime",
    "movie": "video/x-sgi-movie",
    "mp2": "audio/mpeg",
    "mp21": "application/mp21",
    "mp2a": "audio/mpeg",
    "mp3": "audio/mpeg",
    "mp4": "video/mp4",
    "mp4a": "audio/mp4",
    "mp4s": "application/mp4",
    "mp4v": "video/mp4",
    "mpc": "application/vnd.mophun.certificate",
    "mpd": "application/dash+xml",
    "mpe": "video/mpeg",
    "mpeg": "video/mpeg",
    "mpf": "application/media-policy-dataset+xml",
    "mpg": "video/mpeg",
    "mpg4": "video/mp4",
    "mpga": "audio/mpeg",
    "mpkg": "application/vnd.apple.installer+xml",
    "mpm": "application/vnd.blueice.multipass",
    "mpn": "application/vnd.mophun.application",
    "mpp": "application/vnd.ms-project",
    "mpt": "application/vnd.ms-project",
    "mpy": "application/vnd.ibm.minipay",
    "mqy": "application/vnd.mobius.mqy",
    "mrc": "application/marc",
    "mrcx": "application/marcxml+xml",
    "ms": "text/troff",
    "mscml": "application/mediaservercontrol+xml",
    "mseed": "application/vnd.fdsn.mseed",
    "mseq": "application/vnd.mseq",
    "msf": "application/vnd.epson.msf",
    "msg": "application/vnd.ms-outlook",
    "msh": "model/mesh",
    "msi": "application/x-msdownload",
    "msix": "application/msix",
    "msixbundle": "application/msixbundle",
    "msl": "application/vnd.mobius.msl",
    "msm": "application/octet-stream",
    "msp": "application/octet-stream",
    "msty": "application/vnd.muvee.style",
    "mtl": "model/mtl",
    "mts": "model/vnd.mts",
    "mus": "application/vnd.musician",
    "musd": "application/mmt-usd+xml",
    "musicxml": "application/vnd.recordare.musicxml+xml",
    "mvb": "application/x-msmediaview",
    "mvt": "application/vnd.mapbox-vector-tile",
    "mwf": "application/vnd.mfer",
    "mxf": "application/mxf",
    "mxl": "application/vnd.recordare.musicxml",
    "mxmf": "audio/mobile-xmf",
    "mxml": "application/xv+xml",
    "mxs": "application/vnd.triscape.mxs",
    "mxu": "video/vnd.mpegurl",
    "n-gage": "application/vnd.nokia.n-gage.symbian.install",
    "n3": "text/n3",
    "nb": "application/mathematica",
    "nbp": "application/vnd.wolfram.player",
    "nc": "application/x-netcdf",
    "ncx": "application/x-dtbncx+xml",
    "nfo": "text/x-nfo",
    "ngdat": "application/vnd.nokia.n-gage.data",
    "nitf": "application/vnd.nitf",
    "nlu": "application/vnd.neurolanguage.nlu",
    "nml": "application/vnd.enliven",
    "nnd": "application/vnd.noblenet-directory",
    "nns": "application/vnd.noblenet-sealer",
    "nnw": "application/vnd.noblenet-web",
    "npx": "image/vnd.net-fpx",
    "nq": "application/n-quads",
    "nsc": "application/x-conference",
    "nsf": "application/vnd.lotus-notes",
    "nt": "application/n-triples",
    "ntf": "application/vnd.nitf",
    "numbers": "application/x-iwork-numbers-sffnumbers",
    "nzb": "application/x-nzb",
    "oa2": "application/vnd.fujitsu.oasys2",
    "oa3": "application/vnd.fujitsu.oasys3",
    "oas": "application/vnd.fujitsu.oasys",
    "obd": "application/x-msbinder",
    "obgx": "application/vnd.openblox.game+xml",
    "obj": "model/obj",
    "oda": "application/oda",
    "odb": "application/vnd.oasis.opendocument.database",
    "odc": "application/vnd.oasis.opendocument.chart",
    "odf": "application/vnd.oasis.opendocument.formula",
    "odft": "application/vnd.oasis.opendocument.formula-template",
    "odg": "application/vnd.oasis.opendocument.graphics",
    "odi": "application/vnd.oasis.opendocument.image",
    "odm": "application/vnd.oasis.opendocument.text-master",
    "odp": "application/vnd.oasis.opendocument.presentation",
    "ods": "application/vnd.oasis.opendocument.spreadsheet",
    "odt": "application/vnd.oasis.opendocument.text",
    "oga": "audio/ogg",
    "ogex": "model/vnd.opengex",
    "ogg": "audio/ogg",
    "ogv": "video/ogg",
    "ogx": "application/ogg",
    "omdoc": "application/omdoc+xml",
    "onepkg": "application/onenote",
    "onetmp": "application/onenote",
    "onetoc": "application/onenote",
    "onetoc2": "application/onenote",
    "opf": "application/oebps-package+xml",
    "opml": "text/x-opml",
    "oprc": "application/vnd.palm",
    "opus": "audio/ogg",
    "org": "text/x-org",
    "osf": "application/vnd.yamaha.openscoreformat",
    "osfpvg": "application/vnd.yamaha.openscoreformat.osfpvg+xml",
    "osm": "application/vnd.openstreetmap.data+xml",
    "otc": "application/vnd.oasis.opendocument.chart-template",
    "otf": "font/otf",
    "otg": "application/vnd.oasis.opendocument.graphics-template",
    "oth": "application/vnd.oasis.opendocument.text-web",
    "oti": "application/vnd.oasis.opendocument.image-template",
    "otp": "application/vnd.oasis.opendocument.presentation-template",
    "ots": "application/vnd.oasis.opendocument.spreadsheet-template",
    "ott": "application/vnd.oasis.opendocument.text-template",
    "ova": "application/x-virtualbox-ova",
    "ovf": "application/x-virtualbox-ovf",
    "owl": "application/rdf+xml",
    "oxps": "application/oxps",
    "oxt": "application/vnd.openofficeorg.extension",
    "p": "text/x-pascal",
    "p10": "application/pkcs10",
    "p12": "application/x-pkcs12",
    "p7b": "application/x-pkcs7-certificates",
    "p7c": "application/pkcs7-mime",
    "p7m": "application/pkcs7-mime",
    "p7r": "application/x-pkcs7-certreqresp",
    "p7s": "application/pkcs7-signature",
    "p8": "application/pkcs8",
    "pac": "application/x-ns-proxy-autoconfig",
    "pages": "application/x-iwork-pages-sffpages",
    "pas": "text/x-pascal",
    "paw": "application/vnd.pawaafile",
    "pbd": "application/vnd.powerbuilder6",
    "pbm": "image/x-portable-bitmap",
    "pcap": "application/vnd.tcpdump.pcap",
    "pcf": "application/x-font-pcf",
    "pcl": "application/vnd.hp-pcl",
    "pclxl": "application/vnd.hp-pclxl",
    "pct": "image/x-pict",
    "pcurl": "application/vnd.curl.pcurl",
    "pcx": "image/x-pcx",
    "pdb": "application/x-pilot",
    "pde": "text/x-processing",
    "pem": "application/x-x509-ca-cert",
    "pfa": "application/x-font-type1",
    "pfb": "application/x-font-type1",
    "pfm": "application/x-font-type1",
    "pfr": "application/font-tdpfr",
    "pfx": "application/x-pkcs12",
    "pgm": "image/x-portable-graymap",
    "pgn": "application/x-chess-pgn",
    "pgp": "application/pgp-encrypted",
    "php": "application/x-httpd-php",
    "pic": "image/x-pict",
    "pkg": "application/octet-stream",
    "pki": "application/pkixcmp",
    "pkipath": "application/pkix-pkipath",
    "pkpass": "application/vnd.apple.pkpass",
    "pl": "application/x-perl",
    "plb": "application/vnd.3gpp.pic-bw-large",
    "plc": "application/vnd.mobius.plc",
    "plf": "application/vnd.pocketlearn",
    "pls": "application/pls+xml",
    "pm": "application/x-perl",
    "pml": "application/vnd.ctc-posml",
    "pnm": "image/x-portable-anymap",
    "portpkg": "application/vnd.macports.portpkg",
    "pot": "application/vnd.ms-powerpoint",
    "potm": "application/vnd.ms-powerpoint.template.macroenabled.12",
    "potx": "application/vnd.openxmlformats-officedocument.presentationml.template",
    "ppam": "application/vnd.ms-powerpoint.addin.macroenabled.12",
    "ppd": "application/vnd.cups-ppd",
    "ppm": "image/x-portable-pixmap",
    "pps": "application/vnd.ms-powerpoint",
    "ppsm": "application/vnd.ms-powerpoint.slideshow.macroenabled.12",
    "ppsx": "application/vnd.openxmlformats-officedocument.presentationml.slideshow",
    "pptm": "application/vnd.ms-powerpoint.presentation.macroenabled.12",
    "pqa": "application/vnd.palm",
    "prc": "model/prc",
    "pre": "application/vnd.lotus-freelance",
    "prf": "application/pics-rules",
    "provx": "application/provenance+xml",
    "ps": "application/postscript",
    "psb": "application/vnd.3gpp.pic-bw-small",
    "psd": "image/vnd.adobe.photoshop",
    "psf": "application/x-font-linux-psf",
    "pskcxml": "application/pskc+xml",
    "pti": "image/prs.pti",
    "ptid": "application/vnd.pvi.ptid1",
    "pub": "application/x-mspublisher",
    "pvb": "application/vnd.3gpp.pic-bw-var",
    "pwn": "application/vnd.3m.post-it-notes",
    "pya": "audio/vnd.ms-playready.media.pya",
    "pyo": "model/vnd.pytha.pyox",
    "pyox": "model/vnd.pytha.pyox",
    "pyv": "video/vnd.ms-playready.media.pyv",
    "qam": "application/vnd.epson.quickanime",
    "qbo": "application/vnd.intu.qbo",
    "qfx": "application/vnd.intu.qfx",
    "qps": "application/vnd.publishare-delta-tree",
    "qt": "video/quicktime",
    "qwd": "application/vnd.quark.quarkxpress",
    "qwt": "application/vnd.quark.quarkxpress",
    "qxb": "application/vnd.quark.quarkxpress",
    "qxd": "application/vnd.quark.quarkxpress",
    "qxl": "application/vnd.quark.quarkxpress",
    "qxt": "application/vnd.quark.quarkxpress",
    "ra": "audio/x-realaudio",
    "ram": "audio/x-pn-realaudio",
    "raml": "application/raml+yaml",
    "rapd": "application/route-apd+xml",
    "rar": "application/x-rar-compressed",
    "ras": "image/x-cmu-raster",
    "rcprofile": "application/vnd.ipunplugged.rcprofile",
    "rdf": "application/rdf+xml",
    "rdz": "application/vnd.data-vision.rdz",
    "relo": "application/p2p-overlay+xml",
    "rep": "application/vnd.businessobjects",
    "res": "application/x-dtbresource+xml",
    "rgb": "image/x-rgb",
    "rif": "application/reginfo+xml",
    "rip": "audio/vnd.rip",
    "ris": "application/x-research-info-systems",
    "rl": "application/resource-lists+xml",
    "rlc": "image/vnd.fujixerox.edmics-rlc",
    "rld": "application/resource-lists-diff+xml",
    "rm": "application/vnd.rn-realmedia",
    "rmi": "audio/midi",
    "rmp": "audio/x-pn-realaudio-plugin",
    "rms": "application/vnd.jcp.javame.midlet-rms",
    "rmvb": "application/vnd.rn-realmedia-vbr",
    "rnc": "application/relax-ng-compact-syntax",
    "rng": "application/xml",
    "roa": "application/rpki-roa",
    "roff": "text/troff",
    "rp9": "application/vnd.cloanto.rp9",
    "rpm": "application/x-redhat-package-manager",
    "rpss": "application/vnd.nokia.radio-presets",
    "rpst": "application/vnd.nokia.radio-preset",
    "rq": "application/sparql-query",
    "rs": "application/rls-services+xml",
    "rsat": "application/atsc-rsat+xml",
    "rsd": "application/rsd+xml",
    "rsheet": "application/urc-ressheet+xml",
    "rss": "application/rss+xml",
    "rtf": "text/rtf",
    "rtx": "text/richtext",
    "run": "application/x-makeself",
    "rusd": "application/route-usd+xml",
    "s": "text/x-asm",
    "s3m": "audio/s3m",
    "saf": "application/vnd.yamaha.smaf-audio",
    "sass": "text/x-sass",
    "sbml": "application/sbml+xml",
    "sc": "application/vnd.ibm.secure-container",
    "scd": "application/x-msschedule",
    "scm": "application/vnd.lotus-screencam",
    "scq": "application/scvp-cv-request",
    "scs": "application/scvp-cv-response",
    "scss": "text/x-scss",
    "scurl": "text/vnd.curl.scurl",
    "sda": "application/vnd.stardivision.draw",
    "sdc": "application/vnd.stardivision.calc",
    "sdd": "application/vnd.stardivision.impress",
    "sdkd": "application/vnd.solent.sdkm+xml",
    "sdkm": "application/vnd.solent.sdkm+xml",
    "sdp": "application/sdp",
    "sdw": "application/vnd.stardivision.writer",
    "sea": "application/x-sea",
    "see": "application/vnd.seemail",
    "seed": "application/vnd.fdsn.seed",
    "sema": "application/vnd.sema",
    "semd": "application/vnd.semd",
    "semf": "application/vnd.semf",
    "senmlx": "application/senml+xml",
    "sensmlx": "application/sensml+xml",
    "ser": "application/java-serialized-object",
    "setpay": "application/set-payment-initiation",
    "setreg": "application/set-registration-initiation",
    "sfd-hdstx": "application/vnd.hydrostatix.sof-data",
    "sfs": "application/vnd.spotfire.sfs",
    "sfv": "text/x-sfv",
    "sgi": "image/sgi",
    "sgl": "application/vnd.stardivision.writer-global",
    "sgm": "text/sgml",
    "sgml": "text/sgml",
    "sh": "application/x-sh",
    "shar": "application/x-shar",
    "shex": "text/shex",
    "shf": "application/shf+xml",
    "shtml": "text/html",
    "sid": "image/x-mrsid-image",
    "sieve": "application/sieve",
    "sig": "application/pgp-signature",
    "sil": "audio/silk",
    "silo": "model/mesh",
    "sis": "application/vnd.symbian.install",
    "sisx": "application/vnd.symbian.install",
    "sit": "application/x-stuffit",
    "sitx": "application/x-stuffitx",
    "siv": "application/sieve",
    "skd": "application/vnd.koan",
    "skm": "application/vnd.koan",
    "skp": "application/vnd.koan",
    "skt": "application/vnd.koan",
    "sldm": "application/vnd.ms-powerpoint.slide.macroenabled.12",
    "sldx": "application/vnd.openxmlformats-officedocument.presentationml.slide",
    "slim": "text/slim",
    "slm": "text/slim",
    "sls": "application/route-s-tsid+xml",
    "slt": "application/vnd.epson.salt",
    "sm": "application/vnd.stepmania.stepchart",
    "smf": "application/vnd.stardivision.math",
    "smi": "application/smil+xml",
    "smil": "application/smil+xml",
    "smv": "video/x-smv",
    "smzip": "application/vnd.stepmania.package",
    "snd": "audio/basic",
    "snf": "application/x-font-snf",
    "so": "application/octet-stream",
    "spc": "application/x-pkcs7-certificates",
    "spdx": "text/spdx",
    "spf": "application/vnd.yamaha.smaf-phrase",
    "spl": "application/x-futuresplash",
    "spot": "text/vnd.in3d.spot",
    "spp": "application/scvp-vp-response",
    "spq": "application/scvp-vp-request",
    "spx": "audio/ogg",
    "sql": "application/x-sql",
    "src": "application/x-wais-source",
    "srt": "application/x-subrip",
    "sru": "application/sru+xml",
    "srx": "application/sparql-results+xml",
    "ssdl": "application/ssdl+xml",
    "sse": "application/vnd.kodak-descriptor",
    "ssf": "application/vnd.epson.ssf",
    "ssml": "application/ssml+xml",
    "st": "application/vnd.sailingtracker.track",
    "stc": "application/vnd.sun.xml.calc.template",
    "std": "application/vnd.sun.xml.draw.template",
    "stf": "application/vnd.wt.stf",
    "sti": "application/vnd.sun.xml.impress.template",
    "stk": "application/hyperstudio",
    "stl": "model/stl",
    "stpx": "model/step+xml",
    "stpxz": "model/step-xml+zip",
    "stpz": "model/step+zip",
    "str": "application/vnd.pg.format",
    "stw": "application/vnd.sun.xml.writer.template",
    "styl": "text/stylus",
    "stylus": "text/stylus",
    "sub": "text/vnd.dvb.subtitle",
    "sus": "application/vnd.sus-calendar",
    "susp": "application/vnd.sus-calendar",
    "sv4cpio": "application/x-sv4cpio",
    "sv4crc": "application/x-sv4crc",
    "svc": "application/vnd.dvb.service",
    "svd": "application/vnd.svd",
    "svg": "image/svg+xml",
    "svgz": "image/svg+xml",
    "swa": "application/x-director",
    "swf": "application/x-shockwave-flash",
    "swi": "application/vnd.aristanetworks.swi",
    "swidtag": "application/swid+xml",
    "sxc": "application/vnd.sun.xml.calc",
    "sxd": "application/vnd.sun.xml.draw",
    "sxg": "application/vnd.sun.xml.writer.global",
    "sxi": "application/vnd.sun.xml.impress",
    "sxm": "application/vnd.sun.xml.math",
    "sxw": "application/vnd.sun.xml.writer",
    "t": "text/troff",
    "t3": "application/x-t3vm-image",
    "t38": "image/t38",
    "taglet": "application/vnd.mynfc",
    "tao": "application/vnd.tao.intent-module-archive",
    "tap": "image/vnd.tencent.tap",
    "tar": "application/x-tar",
    "tcap": "application/vnd.3gpp2.tcap",
    "tcl": "application/x-tcl",
    "td": "application/urc-targetdesc+xml",
    "teacher": "application/vnd.smart.teacher",
    "tei": "application/tei+xml",
    "teicorpus": "application/tei+xml",
    "tex": "application/x-tex",
    "texi": "application/x-texinfo",
    "texinfo": "application/x-texinfo",
    "text": "text/plain",
    "tfi": "application/thraud+xml",
    "tfm": "application/x-tex-tfm",
    "tfx": "image/tiff-fx",
    "tga": "image/x-tga",
    "thmx": "application/vnd.ms-officetheme",
    "tif": "image/tiff",
    "tiff": "image/tiff",
    "tk": "application/x-tcl",
    "tmo": "application/vnd.tmobile-livetv",
    "toml": "application/toml",
    "torrent": "application/x-bittorrent",
    "tpl": "application/vnd.groove-tool-template",
    "tpt": "application/vnd.trid.tpt",
    "tr": "text/troff",
    "tra": "application/vnd.trueapp",
    "trig": "application/trig",
    "trm": "application/x-msterminal",
    "ts": "video/mp2t",
    "tsd": "application/timestamped-data",
    "tsv": "text/tab-separated-values",
    "ttc": "font/collection",
    "ttf": "font/ttf",
    "ttl": "text/turtle",
    "ttml": "application/ttml+xml",
    "twd": "application/vnd.simtech-mindmapper",
    "twds": "application/vnd.simtech-mindmapper",
    "txd": "application/vnd.genomatix.tuxedo",
    "txf": "application/vnd.mobius.txf",
    "u32": "application/x-authorware-bin",
    "u3d": "model/u3d",
    "u8dsn": "message/global-delivery-status",
    "u8hdr": "message/global-headers",
    "u8mdn": "message/global-disposition-notification",
    "u8msg": "message/global",
    "ubj": "application/ubjson",
    "udeb": "application/x-debian-package",
    "ufd": "application/vnd.ufdl",
    "ufdl": "application/vnd.ufdl",
    "ulx": "application/x-glulx",
    "umj": "application/vnd.umajin",
    "unityweb": "application/vnd.unity",
    "uo": "application/vnd.uoml+xml",
    "uoml": "application/vnd.uoml+xml",
    "uri": "text/uri-list",
    "uris": "text/uri-list",
    "urls": "text/uri-list",
    "usda": "model/vnd.usda",
    "usdz": "model/vnd.usdz+zip",
    "ustar": "application/x-ustar",
    "utz": "application/vnd.uiq.theme",
    "uu": "text/x-uuencode",
    "uva": "audio/vnd.dece.audio",
    "uvd": "application/vnd.dece.data",
    "uvf": "application/vnd.dece.data",
    "uvg": "image/vnd.dece.graphic",
    "uvh": "video/vnd.dece.hd",
    "uvi": "image/vnd.dece.graphic",
    "uvm": "video/vnd.dece.mobile",
    "uvp": "video/vnd.dece.pd",
    "uvs": "video/vnd.dece.sd",
    "uvt": "application/vnd.dece.ttml+xml",
    "uvu": "video/vnd.uvvu.mp4",
    "uvv": "video/vnd.dece.video",
    "uvva": "audio/vnd.dece.audio",
    "uvvd": "application/vnd.dece.data",
    "uvvf": "application/vnd.dece.data",
    "uvvg": "image/vnd.dece.graphic",
    "uvvh": "video/vnd.dece.hd",
    "uvvi": "image/vnd.dece.graphic",
    "uvvm": "video/vnd.dece.mobile",
    "uvvp": "video/vnd.dece.pd",
    "uvvs": "video/vnd.dece.sd",
    "uvvt": "application/vnd.dece.ttml+xml",
    "uvvu": "video/vnd.uvvu.mp4",
    "uvvv": "video/vnd.dece.video",
    "uvvx": "application/vnd.dece.unspecified",
    "uvvz": "application/vnd.dece.zip",
    "uvx": "application/vnd.dece.unspecified",
    "uvz": "application/vnd.dece.zip",
    "vbox": "application/x-virtualbox-vbox",
    "vbox-extpack": "application/x-virtualbox-vbox-extpack",
    "vcard": "text/vcard",
    "vcd": "application/x-cdlink",
    "vcf": "text/x-vcard",
    "vcg": "application/vnd.groove-vcard",
    "vcs": "text/x-vcalendar",
    "vcx": "application/vnd.vcx",
    "vdi": "application/x-virtualbox-vdi",
    "vds": "model/vnd.sap.vds",
    "vhd": "application/x-virtualbox-vhd",
    "vis": "application/vnd.visionary",
    "viv": "video/vnd.vivo",
    "vmdk": "application/x-virtualbox-vmdk",
    "vob": "video/x-ms-vob",
    "vor": "application/vnd.stardivision.writer",
    "vox": "application/x-authorware-bin",
    "vrml": "model/vrml",
    "vsd": "application/vnd.visio",
    "vsf": "application/vnd.vsf",
    "vss": "application/vnd.visio",
    "vst": "application/vnd.visio",
    "vsw": "application/vnd.visio",
    "vtf": "image/vnd.valve.source.texture",
    "vtt": "text/vtt",
    "vtu": "model/vnd.vtu",
    "vxml": "application/voicexml+xml",
    "w3d": "application/x-director",
    "wad": "application/x-doom",
    "wadl": "application/vnd.sun.wadl+xml",
    "war": "application/java-archive",
    "wasm": "application/wasm",
    "wav": "audio/x-wav",
    "wax": "audio/x-ms-wax",
    "wbmp": "image/vnd.wap.wbmp",
    "wbs": "application/vnd.criticaltools.wbs+xml",
    "wbxml": "application/vnd.wap.wbxml",
    "wcm": "application/vnd.ms-works",
    "wdb": "application/vnd.ms-works",
    "wdp": "image/vnd.ms-photo",
    "weba": "audio/webm",
    "webapp": "application/x-web-app-manifest+json",
    "webm": "video/webm",
    "webmanifest": "application/manifest+json",
    "webp": "image/webp",
    "wg": "application/vnd.pmi.widget",
    "wgsl": "text/wgsl",
    "wgt": "application/widget",
    "wif": "application/watcherinfo+xml",
    "wks": "application/vnd.ms-works",
    "wm": "video/x-ms-wm",
    "wma": "audio/x-ms-wma",
    "wmd": "application/x-ms-wmd",
    "wmf": "image/wmf",
    "wml": "text/vnd.wap.wml",
    "wmlc": "application/vnd.wap.wmlc",
    "wmls": "text/vnd.wap.wmlscript",
    "wmlsc": "application/vnd.wap.wmlscriptc",
    "wmv": "video/x-ms-wmv",
    "wmx": "video/x-ms-wmx",
    "wmz": "application/x-msmetafile",
    "woff": "font/woff",
    "woff2": "font/woff2",
    "wpd": "application/vnd.wordperfect",
    "wpl": "application/vnd.ms-wpl",
    "wps": "application/vnd.ms-works",
    "wqd": "application/vnd.wqd",
    "wri": "application/x-mswrite",
    "wrl": "model/vrml",
    "wsc": "message/vnd.wfa.wsc",
    "wsdl": "application/wsdl+xml",
    "wspolicy": "application/wspolicy+xml",
    "wtb": "application/vnd.webturbo",
    "wvx": "video/x-ms-wvx",
    "x32": "application/x-authorware-bin",
    "x3d": "model/x3d+xml",
    "x3db": "model/x3d+fastinfoset",
    "x3dbz": "model/x3d+binary",
    "x3dv": "model/x3d-vrml",
    "x3dvz": "model/x3d+vrml",
    "x3dz": "model/x3d+xml",
    "x_b": "model/vnd.parasolid.transmit.binary",
    "x_t": "model/vnd.parasolid.transmit.text",
    "xaml": "application/xaml+xml",
    "xap": "application/x-silverlight-app",
    "xar": "application/vnd.xara",
    "xav": "application/xcap-att+xml",
    "xbap": "application/x-ms-xbap",
    "xbd": "application/vnd.fujixerox.docuworks.binder",
    "xbm": "image/x-xbitmap",
    "xca": "application/xcap-caps+xml",
    "xcs": "application/calendar+xml",
    "xdf": "application/xcap-diff+xml",
    "xdm": "application/vnd.syncml.dm+xml",
    "xdp": "application/vnd.adobe.xdp+xml",
    "xdssc": "application/dssc+xml",
    "xdw": "application/vnd.fujixerox.docuworks",
    "xel": "application/xcap-el+xml",
    "xenc": "application/xenc+xml",
    "xer": "application/patch-ops-error+xml",
    "xfdf": "application/xfdf",
    "xfdl": "application/vnd.xfdl",
    "xht": "application/xhtml+xml",
    "xhtm": "application/vnd.pwg-xhtml-print+xml",
    "xhtml": "application/xhtml+xml",
    "xhvml": "application/xv+xml",
    "xif": "image/vnd.xiff",
    "xla": "application/vnd.ms-excel",
    "xlam": "application/vnd.ms-excel.addin.macroenabled.12",
    "xlc": "application/vnd.ms-excel",
    "xlf": "application/xliff+xml",
    "xlm": "application/vnd.ms-excel",
    "xlsb": "application/vnd.ms-excel.sheet.binary.macroenabled.12",
    "xlsm": "application/vnd.ms-excel.sheet.macroenabled.12",
    "xlt": "application/vnd.ms-excel",
    "xltm": "application/vnd.ms-excel.template.macroenabled.12",
    "xltx": "application/vnd.openxmlformats-officedocument.spreadsheetml.template",
    "xlw": "application/vnd.ms-excel",
    "xm": "audio/xm",
    "xml": "text/xml",
    "xns": "application/xcap-ns+xml",
    "xo": "application/vnd.olpc-sugar",
    "xop": "application/xop+xml",
    "xpi": "application/x-xpinstall",
    "xpl": "application/xproc+xml",
    "xpm": "image/x-xpixmap",
    "xpr": "application/vnd.is-xpr",
    "xps": "application/vnd.ms-xpsdocument",
    "xpw": "application/vnd.intercon.formnet",
    "xpx": "application/vnd.intercon.formnet",
    "xsd": "application/xml",
    "xsf": "application/prs.xsf+xml",
    "xsl": "application/xslt+xml",
    "xslt": "application/xslt+xml",
    "xsm": "application/vnd.syncml+xml",
    "xspf": "application/xspf+xml",
    "xul": "application/vnd.mozilla.xul+xml",
    "xvm": "application/xv+xml",
    "xvml": "application/xv+xml",
    "xwd": "image/x-xwindowdump",
    "xyz": "chemical/x-xyz",
    "xz": "application/x-xz",
    "yaml": "text/yaml",
    "yang": "application/yang",
    "yin": "application/yin+xml",
    "yml": "text/yaml",
    "ymp": "text/x-suse-ymp",
    "z1": "application/x-zmachine",
    "z2": "application/x-zmachine",
    "z3": "application/x-zmachine",
    "z4": "application/x-zmachine",
    "z5": "application/x-zmachine",
    "z6": "application/x-zmachine",
    "z7": "application/x-zmachine",
    "z8": "application/x-zmachine",
    "zaz": "application/vnd.zzazz.deck+xml",
    "zir": "application/vnd.zul",
    "zirz": "application/vnd.zul",
    "zmm": "application/vnd.handheld-entertainment+xml"
} as const

/* =========================
   DERIVED TYPES
   ========================= */

export type ImageTypeMap = typeof imagesTypes;
export type FileTypeMap = typeof filesTypes;

export type IImagesExtTypeKeys = keyof ImageTypeMap;
export type IFilesExtTypeKeys = keyof FileTypeMap;

export type IFileUploaderTypes = "File" | "Image";

export type File$1 = {
    uri: string;
    name: string;
    type?: string; // mime
    size?: number; // bytes
};

export type FileUploaderTemplateParams<T = File$1> = {
    /** Current selected files */
    values: T[];
    /** Trigger the native file/image picker */
    browse: () => void;
    /** Replace the entire file selection */
    update: (files: T | T[]) => void;
    /** Remove a file by index */
    remove: (index: number) => void;
    /** Whether the uploader is for files or images */
    type: 'file' | 'image';
    /** Whether multiple files can be selected */
    isMultiple: boolean;
};

export type FileUploaderTemplate<T = File$1> = (params: FileUploaderTemplateParams<T>) => ReactNode;

export interface IFileUploader<T = File$1>
    extends Omit<IFormSingleElement, "onChange" | "defaultValue"> {
    type: IFileUploaderTypes;
    isJsonOutput?: boolean;

    onChange?: (
        files: T[],
        base64Data: { filename: string; base64: string; type: string }[]
    ) => void;

    onError?: (err: any) => void;

    classicUploader?: boolean;
    multiple?: boolean;
    placeholder?: string;
    limit?: number;
    minFileSize?: number; // KB
    maxFileSize?: number; // KB
    acceptedTypes?: (IImagesExtTypeKeys | IFilesExtTypeKeys)[];
    defaultValue?: string | string[];
    text?: {
        ClickDragLabel?: string;
        selectedFile?: string;
    };
    /** Width of the uploader preview area. Defaults to 'auto' (full width). */
    previewWidth?: string | number;
    /** Height of the uploader preview area. Defaults to 'auto'. */
    previewHeight?: string | number;
    /** Custom render function for the uploader UI */
    children?: FileUploaderTemplate<T>;
}

export interface IKitsCheckboxProps<T> extends IFormSingleElement<Array<T>>{
    item: IRadioCheckboxListItem<T> | IRadioCheckboxListItem<T>[];

    checked?:boolean;
    limit?:number;

    onChange?: (
        checked:boolean,
        item: T,
        allItems?: T[]
    ) => void;

    appearanceMode?: "vertical" | "horizontal"; // default vertical
}

export interface IKitsRadioProps<T>  extends IFormSingleElement<T>{
    item: IRadioCheckboxListItem<T> | IRadioCheckboxListItem<T>[];

    onChange?: (
        checked: boolean,
        meta: {
            item: IRadioCheckboxListItem<T>;
            index: number;
            value: T;
        }
    ) => void;

    appearanceMode?: "vertical" | "horizontal"; // default vertical
}

export interface ISkeletonRowsProps {
    rowsLength: number;
    isTable?: boolean;
}

export type IAccordionProps<LocalType=any> = {
    accordionTitle?: ReactNode | string;
    accordionItems?: {
        button: ReactNode;
        panel: ReactNode;
        onToggle?: (isExpanded: boolean) => void;
    }[];
    allOpenedByDefault?: boolean;
    isLoading?: boolean;
    localProps?: LocalType;
};

export interface IAlertComponent {
    status?: "error" | "success" | "warning" | "info" | "brand";
    variant?: "subtle" | "solid" | "left-accent" | "top-accent";
    children: React$1.ReactNode;
    className?: string;
}

export interface IAlertProps {
    status?: "error" | "success" | "warning" | "info" | "brand";
    variant?: "subtle" | "solid" | "left-accent" | "top-accent";
    children?: React$1.ReactNode | string;
    className?: string;

    title?: string;
    description?: string;
    withIcon?: boolean;
}

export interface IContainerProps$1 extends IFlexComponent {
    title?: ReactNode | string;
    rightElement?: ReactNode | string;
    childrenContainerProps?: IFlexComponent;
}

export interface ICircularProgressProps {
    size?: number; // Diameter of the circle
    strokeWidth?: number; // Thickness of the circle
    value: number; // Progress value (0-100)
    color?: string; // Stroke color for progress
    trackColor?: string; // Stroke color for track
    loading?: boolean; // Show spinner animation
    children?: ReactNode; // Custom content in the center
}

export type Types = Severity;

export interface IDialogButton {
    title: string;
    outlined?: boolean;
    rounded?: boolean;
    type?: Types;
    loading?: boolean;
    disabled?: boolean;
    onClick: (
        hide: () => void,
        accept?: () => void,
        reject?: () => void
    ) => void;
}

export interface IConfirmDialogProps extends ConfirmDialogProps {
    visible?: boolean;
    defaultUI?: boolean; // fallback to native PrimeReact UI
    headless?: boolean; // force use of custom content renderer
    type?: Types; // color scheme
    buttons?: IDialogButton[];
    async?: boolean; // block close until onClick resolves
}

export interface IConfirmPopupProps extends Omit<ConfirmPopupProps, 'visible'> {
    visible?: boolean;
    type?: Types;
    async?: boolean;
}

export interface IDialogProps
    extends Omit<DialogProps, "visible" | "onHide" | "children" | "content"> {
    children?: React.ReactNode | ((props:any) => React.ReactNode);
    onClose?: () => void;
    asyncClose?: boolean;
    /** Severity determines background tint, icon colors, and accent styling */
    type?: Severity;
    /** Icon class string (e.g. 'pi pi-check') or ReactNode */
    icon?: string | React.ReactNode;
}

export interface IDialogState extends IDialogProps {
    visible?: boolean;
}

export interface IKitsDialogControlled {
    state: IDialogState;
    onHide: () => void;
}

export type ToastPosition =
    | "top-left"
    | "top-right"
    | "bottom-left"
    | "bottom-right"
    | "top-center"
    | "bottom-center";

export type ToastSeverity = "success" | "info" | "warn" | "error" | "loading" | "brand";

export type ToastSize = "sm" | "md" | "lg";

export type IToastParams = [
    severity: ToastSeverity,
    summary: string,
    body?: string,
    position?: ToastPosition,
    isUpdate?: boolean,
    size?: ToastSize,
];

export type IToastFunction = (...args: IToastParams) => void;

export interface IKitsToastRef {
    toast: IToastFunction;
    dismiss: (position?: ToastPosition) => void;
    dismissAll: () => void;
}

export interface TooltipDataAttributes {
    "data-pr-disabled"?: boolean; // Whether the tooltip should be hidden.
    "data-pr-classname"?: string; // Style class of the tooltip.
    "data-pr-position"?: "left" | "top" | "bottom" | "right" | "mouse"; // Position of the tooltip.
    "data-pr-my"?: string; // Defines the position on the tooltip being positioned to align with the target element.
    "data-pr-at"?: string; // Defines the position on the target element to align the tooltip.
    "data-pr-event"?: "both" | "focus" | "hover"; // Event to show the tooltip.
    "data-pr-showevent"?: string; // Event to show the tooltip if the event property is empty.
    "data-pr-hideevent"?: string; // Event to hide the tooltip if the event property is empty.
    "data-pr-mousetrack"?: boolean; // Whether the tooltip follows the mouse.
    "data-pr-mousetracktop"?: number; // Top position relative to the mouse when mouseTrack is enabled.
    "data-pr-mousetrackleft"?: number; // Left position relative to the mouse when mouseTrack is enabled.
    "data-pr-showdelay"?: number; // Delay to show the tooltip in milliseconds.
    "data-pr-updatedelay"?: number; // Delay to update the tooltip in milliseconds.
    "data-pr-hidedelay"?: number; // Delay to hide the tooltip in milliseconds.
    "data-pr-autohide"?: boolean; // Whether to hide the tooltip when hovering over its content.
    "data-pr-showondisabled"?: boolean; // Whether to show tooltip for disabled elements.
}

export interface TooltipProps extends Omit<TooltipProps$1, "target"> {
    children?: React$1.ReactNode;
    label: string;
    tooltipProps?: TooltipDataAttributes;
}

export type children =
  | JSX.Element
  | (({ onClose }: { onClose: () => void }) => JSX.Element);

export type IPopoverProps = {
  label: string | ReactNode | JSX.Element;
  onPopoverClosed?: () => void;
  onPopoverOpened?: () => void;
  tooltipMessage?: string;
  success?: boolean;
  error?: boolean;
  closeButton?: boolean;
  placement?: any; // PlacementWithLogical;
  disableOnSuccess?: boolean;
  children: children;
};

export type DetailItemInputType = 'text' | 'number' | 'textarea' | 'select' | 'multiselect';

export interface IDetailItem<T extends Record<string, any>> {
    /** The key from your data object */
    name: keyof T & string;
    /** The display label on the left */
    label: string;
    /** Controls which standalone form component renders during edit mode */
    type?: DetailItemInputType;
    /** Optional custom renderer for display mode (e.g., rendering stars, chips, badges) */
    body?: (value: T[keyof T & string], row: T) => ReactNode;
    /** Whether this specific row can be toggled into edit mode */
    editable?: boolean;
    /** Data source for 'select' or 'multiselect' input types */
    list?: any[];
    /** Key to use as option label in select/multiselect lists (default: "label") */
    labelKey?: string;
    /** Key to use as option value in select/multiselect lists (default: "value") */
    valueKey?: string;
    /** Additional props forwarded to the edit control */
    inputProps?: Record<string, any>;
    /** Handler triggered when the built-in save button is clicked */
    onSave?: (name: keyof T & string, newValue: any) => Promise<void> | void;
}

export interface IDetailListProps<T extends Record<string, any> = any> {
    /** Top-level heading */
    title?: string | ReactNode;
    /** Top-level description */
    description?: string | ReactNode;
    /** The actual data record */
    data: T;
    /** Array of field configurations */
    items: IDetailItem<T>[];
    /** Custom area on the top-right of the heading */
    headerActions?: ReactNode;
    /** Inject extra buttons for a specific row, rendered to the left of the Edit button */
    itemActions?: (item: IDetailItem<T>, row: T) => ReactNode;
}

/* eslint-disable @typescript-eslint/ban-types */

// DeepPartial implementation taken from the utility-types NPM package, which is
// Copyright (c) 2016 Piotr Witek <piotrek.witek@gmail.com> (http://piotrwitek.github.io)
// and used under the terms of the MIT license
export type DeepPartial<T> = T extends Function
  ? T
  : T extends Array<infer U>
    ? _DeepPartialArray<U>
    : T extends object
      ? _DeepPartialObject<T>
      : T | undefined;

export type _DeepPartialArray<T> = Array<DeepPartial<T>>
export type _DeepPartialObject<T> = { [P in keyof T]?: DeepPartial<T[P]> };

export type DistributiveArray<T> = [T] extends [unknown] ? Array<T> : never

// https://stackoverflow.com/a/50375286
export type UnionToIntersection<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

export type AnyObject = Record<string, any>;
export type EmptyObject = Record<string, never>;

/**
 * @namespace Chart._adapters
 * @since 2.8.0
 * @private
 */

export type TimeUnit = 'millisecond' | 'second' | 'minute' | 'hour' | 'day' | 'week' | 'month' | 'quarter' | 'year';

export interface ChartArea {
  top: number;
  left: number;
  right: number;
  bottom: number;
  width: number;
  height: number;
}

export interface Point {
  x: number | null;
  y: number | null;
}

export type TRBL = {
  top: number;
  right: number;
  bottom: number;
  left: number;
}

export type Padding = Partial<TRBL> | number | Point;

declare class Animation {
  constructor(cfg: AnyObject, target: AnyObject, prop: string, to?: unknown);
  active(): boolean;
  update(cfg: AnyObject, to: unknown, date: number): void;
  cancel(): void;
  tick(date: number): void;
  readonly _to: unknown;
}

export interface AnimationEvent {
  chart: Chart;
  numSteps: number;
  initial: boolean;
  currentStep: number;
}

declare class Element<T = AnyObject, O = AnyObject> {
    static defaults: {};
    static defaultRoutes: any;
    x: number;
    y: number;
    active: boolean;
    options: O;
    $animations: Record<keyof T, Animation>;
    tooltipPosition(useFinalPosition: boolean): Point;
    hasValue(): boolean;
    /**
     * Gets the current or final value of each prop. Can return extra properties (whole object).
     * @param props - properties to get
     * @param [final] - get the final value (animation target)
     */
    getProps<P extends (keyof T)[]>(props: P, final?: boolean): Pick<T, P[number]>;
    getProps<P extends string>(props: P[], final?: boolean): Partial<Record<P, unknown>>;
}

export type PointProps = Point;
declare class PointElement extends Element<PointProps, PointOptions & PointHoverOptions> {
    static id: string;
    parsed: CartesianParsedData;
    skip?: boolean;
    stop?: boolean;
    /**
     * @type {any}
     */
    static defaults: {
        borderWidth: number;
        hitRadius: number;
        hoverBorderWidth: number;
        hoverRadius: number;
        pointStyle: string;
        radius: number;
        rotation: number;
    };
    /**
     * @type {any}
     */
    static defaultRoutes: {
        backgroundColor: string;
        borderColor: string;
    };
    constructor(cfg: any);
    inRange(mouseX: number, mouseY: number, useFinalPosition?: boolean): boolean;
    inXRange(mouseX: number, useFinalPosition?: boolean): boolean;
    inYRange(mouseY: number, useFinalPosition?: boolean): boolean;
    getCenterPoint(useFinalPosition?: boolean): {
        x: number;
        y: number;
    };
    size(options?: Partial<PointOptions & PointHoverOptions>): number;
    draw(ctx: CanvasRenderingContext2D, area: ChartArea): void;
    getRange(): any;
}

/**
 * Easing functions adapted from Robert Penner's easing equations.
 * @namespace Chart.helpers.easing.effects
 * @see http://www.robertpenner.com/easing/
 */
declare const effects: {
    readonly linear: (t: number) => number;
    readonly easeInQuad: (t: number) => number;
    readonly easeOutQuad: (t: number) => number;
    readonly easeInOutQuad: (t: number) => number;
    readonly easeInCubic: (t: number) => number;
    readonly easeOutCubic: (t: number) => number;
    readonly easeInOutCubic: (t: number) => number;
    readonly easeInQuart: (t: number) => number;
    readonly easeOutQuart: (t: number) => number;
    readonly easeInOutQuart: (t: number) => number;
    readonly easeInQuint: (t: number) => number;
    readonly easeOutQuint: (t: number) => number;
    readonly easeInOutQuint: (t: number) => number;
    readonly easeInSine: (t: number) => number;
    readonly easeOutSine: (t: number) => number;
    readonly easeInOutSine: (t: number) => number;
    readonly easeInExpo: (t: number) => number;
    readonly easeOutExpo: (t: number) => number;
    readonly easeInOutExpo: (t: number) => number;
    readonly easeInCirc: (t: number) => number;
    readonly easeOutCirc: (t: number) => number;
    readonly easeInOutCirc: (t: number) => number;
    readonly easeInElastic: (t: number) => number;
    readonly easeOutElastic: (t: number) => number;
    readonly easeInOutElastic: (t: number) => number;
    readonly easeInBack: (t: number) => number;
    readonly easeOutBack: (t: number) => number;
    readonly easeInOutBack: (t: number) => number;
    readonly easeInBounce: (t: number) => number;
    readonly easeOutBounce: (t: number) => number;
    readonly easeInOutBounce: (t: number) => number;
};
export type EasingFunction = keyof typeof effects;

export type Color = string | CanvasGradient | CanvasPattern;

export type LayoutPosition = 'left' | 'top' | 'right' | 'bottom' | 'center' | 'chartArea' | {[scaleId: string]: number};

export interface LayoutItem {
  /**
   * The position of the item in the chart layout. Possible values are
   */
  position: LayoutPosition;
  /**
   * The weight used to sort the item. Higher weights are further away from the chart area
   */
  weight: number;
  /**
   * if true, and the item is horizontal, then push vertical boxes down
   */
  fullSize: boolean;
  /**
   * Width of item. Must be valid after update()
   */
  width: number;
  /**
   * Height of item. Must be valid after update()
   */
  height: number;
  /**
   * Left edge of the item. Set by layout system and cannot be used in update
   */
  left: number;
  /**
   * Top edge of the item. Set by layout system and cannot be used in update
   */
  top: number;
  /**
   * Right edge of the item. Set by layout system and cannot be used in update
   */
  right: number;
  /**
   * Bottom edge of the item. Set by layout system and cannot be used in update
   */
  bottom: number;

  /**
   * Called before the layout process starts
   */
  beforeLayout?(): void;
  /**
   * Draws the element
   */
  draw(chartArea: ChartArea): void;
  /**
   * Returns an object with padding on the edges
   */
  getPadding?(): ChartArea;
  /**
   * returns true if the layout item is horizontal (ie. top or bottom)
   */
  isHorizontal(): boolean;
  /**
   * Takes two parameters: width and height.
   * @param width
   * @param height
   */
  update(width: number, height: number, margins?: ChartArea): void;
}

export interface ColorsPluginOptions {
    enabled?: boolean;
    forceOverride?: boolean;
}

/* eslint-disable @typescript-eslint/ban-types */


export interface ScriptableContext<TType extends ChartType> {
  active: boolean;
  chart: Chart;
  dataIndex: number;
  dataset: UnionToIntersection<ChartDataset<TType>>;
  datasetIndex: number;
  type: string;
  mode: string;
  parsed: UnionToIntersection<ParsedDataType<TType>>;
  raw: unknown;
}

export interface ScriptableLineSegmentContext {
  type: 'segment',
  p0: PointElement,
  p1: PointElement,
  p0DataIndex: number,
  p1DataIndex: number,
  datasetIndex: number
}

export type Scriptable<T, TContext> = T | ((ctx: TContext, options: AnyObject) => T | undefined);
export type ScriptableOptions<T, TContext> = { [P in keyof T]: Scriptable<T[P], TContext> };
export type ScriptableAndScriptableOptions<T, TContext> = Scriptable<T, TContext> | ScriptableOptions<T, TContext>;
export type ScriptableAndArray<T, TContext> = readonly T[] | Scriptable<T, TContext>;
export type ScriptableAndArrayOptions<T, TContext> = { [P in keyof T]: ScriptableAndArray<T[P], TContext> };

export interface ParsingOptions {
  /**
   * How to parse the dataset. The parsing can be disabled by specifying parsing: false at chart options or dataset. If parsing is disabled, data must be sorted and in the formats the associated chart type and scales use internally.
   */
  parsing:
  {
    [key: string]: string;
  }
  | false;

  /**
   * Chart.js is fastest if you provide data with indices that are unique, sorted, and consistent across datasets and provide the normalized: true option to let Chart.js know that you have done so.
   */
  normalized: boolean;
}

export interface ControllerDatasetOptions extends ParsingOptions {
  /**
   * The base axis of the chart. 'x' for vertical charts and 'y' for horizontal charts.
   * @default 'x'
   */
  indexAxis: 'x' | 'y';
  /**
   * How to clip relative to chartArea. Positive value allows overflow, negative value clips that many pixels inside chartArea. 0 = clip at chartArea. Clipping can also be configured per side: `clip: {left: 5, top: false, right: -2, bottom: 0}`
   */
  clip: number | ChartArea | false;
  /**
   * The label for the dataset which appears in the legend and tooltips.
   */
  label: string;
  /**
   * The drawing order of dataset. Also affects order for stacking, tooltip and legend.
   */
  order: number;

  /**
   * The ID of the group to which this dataset belongs to (when stacked, each group will be a separate stack).
   */
  stack: string;
  /**
     * Configures the visibility state of the dataset. Set it to true, to hide the dataset from the chart.
   * @default false
   */
  hidden: boolean;
}

export interface BarControllerDatasetOptions
  extends ControllerDatasetOptions,
  ScriptableAndArrayOptions<BarOptions, ScriptableContext<'bar'>>,
  ScriptableAndArrayOptions<CommonHoverOptions, ScriptableContext<'bar'>>,
  AnimationOptions<'bar'> {
  /**
   * The ID of the x axis to plot this dataset on.
   */
  xAxisID: string;
  /**
   * The ID of the y axis to plot this dataset on.
   */
  yAxisID: string;

  /**
   * Percent (0-1) of the available width each bar should be within the category width. 1.0 will take the whole category width and put the bars right next to each other.
   * @default 0.9
   */
  barPercentage: number;
  /**
   * Percent (0-1) of the available width each category should be within the sample width.
   * @default 0.8
   */
  categoryPercentage: number;

  /**
   * Manually set width of each bar in pixels. If set to 'flex', it computes "optimal" sample widths that globally arrange bars side by side. If not set (default), bars are equally sized based on the smallest interval.
   */
  barThickness: number | 'flex';

  /**
   * Set this to ensure that bars are not sized thicker than this.
   */
  maxBarThickness: number;

  /**
   * Set this to ensure that bars have a minimum length in pixels.
   */
  minBarLength: number;

  /**
   * Point style for the legend
   * @default 'circle;
   */
  pointStyle: PointStyle;

  /**
   * Should the bars be grouped on index axis
   * @default true
   */
  grouped: boolean;
}

export interface BarControllerChartOptions {
  /**
   * Should null or undefined values be omitted from drawing
   */
  skipNull?: boolean;
}

export interface BubbleControllerDatasetOptions
  extends ControllerDatasetOptions,
  ScriptableAndArrayOptions<PointOptions, ScriptableContext<'bubble'>>,
  ScriptableAndArrayOptions<PointHoverOptions, ScriptableContext<'bubble'>> {
  /**
   * The ID of the x axis to plot this dataset on.
   */
  xAxisID: string;
  /**
   * The ID of the y axis to plot this dataset on.
   */
  yAxisID: string;
}

export interface BubbleDataPoint extends Point {
  /**
   * Bubble radius in pixels (not scaled).
   */
  r?: number;
}

export interface LineControllerDatasetOptions
  extends ControllerDatasetOptions,
  ScriptableAndArrayOptions<PointPrefixedOptions, ScriptableContext<'line'>>,
  ScriptableAndArrayOptions<PointPrefixedHoverOptions, ScriptableContext<'line'>>,
  ScriptableOptions<Omit<LineOptions, keyof CommonElementOptions>, ScriptableContext<'line'>>,
  ScriptableAndArrayOptions<CommonElementOptions, ScriptableContext<'line'>>,
  ScriptableOptions<Omit<LineHoverOptions, keyof CommonHoverOptions>, ScriptableContext<'line'>>,
  ScriptableAndArrayOptions<CommonHoverOptions, ScriptableContext<'line'>>,
  AnimationOptions<'line'> {
  /**
   * The ID of the x axis to plot this dataset on.
   */
  xAxisID: string;
  /**
   * The ID of the y axis to plot this dataset on.
   */
  yAxisID: string;

  /**
   * If true, lines will be drawn between points with no or null data. If false, points with NaN data will create a break in the line. Can also be a number specifying the maximum gap length to span. The unit of the value depends on the scale used.
   * @default false
   */
  spanGaps: boolean | number;

  showLine: boolean;
}

export interface LineControllerChartOptions {
  /**
   * If true, lines will be drawn between points with no or null data. If false, points with NaN data will create a break in the line. Can also be a number specifying the maximum gap length to span. The unit of the value depends on the scale used.
   * @default false
   */
  spanGaps: boolean | number;
  /**
   * If false, the lines between points are not drawn.
   * @default true
   */
  showLine: boolean;
}

export type ScatterControllerDatasetOptions = LineControllerDatasetOptions;

export type ScatterDataPoint = Point

export type ScatterControllerChartOptions = LineControllerChartOptions;

export interface DoughnutControllerDatasetOptions
  extends ControllerDatasetOptions,
  ScriptableAndArrayOptions<ArcOptions, ScriptableContext<'doughnut'>>,
  ScriptableAndArrayOptions<ArcHoverOptions, ScriptableContext<'doughnut'>>,
  AnimationOptions<'doughnut'> {

  /**
   * Sweep to allow arcs to cover.
   * @default 360
   */
  circumference: number;

  /**
   * Arc offset (in pixels).
   */
  offset: number | number[];

  /**
   * Starting angle to draw this dataset from.
   * @default 0
   */
  rotation: number;

  /**
   * The relative thickness of the dataset. Providing a value for weight will cause the pie or doughnut dataset to be drawn with a thickness relative to the sum of all the dataset weight values.
   * @default 1
   */
  weight: number;

  /**
   * Similar to the `offset` option, but applies to all arcs. This can be used to to add spaces
   * between arcs
   * @default 0
   */
  spacing: number;
}

export interface DoughnutAnimationOptions extends AnimationSpec<'doughnut'> {
  /**
   *   If true, the chart will animate in with a rotation animation. This property is in the options.animation object.
   * @default true
   */
  animateRotate: boolean;

  /**
   * If true, will animate scaling the chart from the center outwards.
   * @default false
   */
  animateScale: boolean;
}

export interface DoughnutControllerChartOptions {
  /**
   * Sweep to allow arcs to cover.
   * @default 360
   */
  circumference: number;

  /**
   * The portion of the chart that is cut out of the middle. ('50%' - for doughnut, 0 - for pie)
   * String ending with '%' means percentage, number means pixels.
   * @default 50
   */
  cutout: Scriptable<number | string, ScriptableContext<'doughnut'>>;

  /**
   * Arc offset (in pixels).
   */
  offset: number | number[];

  /**
   * The outer radius of the chart. String ending with '%' means percentage of maximum radius, number means pixels.
   * @default '100%'
   */
  radius: Scriptable<number | string, ScriptableContext<'doughnut'>>;

  /**
   * Starting angle to draw arcs from.
   * @default 0
   */
  rotation: number;

  /**
   * Spacing between the arcs
   * @default 0
   */
  spacing: number;

  animation: false | DoughnutAnimationOptions;
}

export type DoughnutDataPoint = number;

export interface DoughnutMetaExtensions {
  total: number;
}

export type PieControllerDatasetOptions = DoughnutControllerDatasetOptions;
export type PieControllerChartOptions = DoughnutControllerChartOptions;

export type PieDataPoint = DoughnutDataPoint;
export type PieMetaExtensions = DoughnutMetaExtensions;

export interface PolarAreaControllerDatasetOptions extends DoughnutControllerDatasetOptions {
  /**
   * Arc angle to cover. - for polar only
   * @default circumference / (arc count)
   */
  angle: number;
}

export type PolarAreaAnimationOptions = DoughnutAnimationOptions;

export interface PolarAreaControllerChartOptions {
  /**
   * Starting angle to draw arcs for the first item in a dataset. In degrees, 0 is at top.
   * @default 0
   */
  startAngle: number;

  animation: false | PolarAreaAnimationOptions;
}

export interface RadarControllerDatasetOptions
  extends ControllerDatasetOptions,
  ScriptableAndArrayOptions<PointOptions & PointHoverOptions & PointPrefixedOptions & PointPrefixedHoverOptions, ScriptableContext<'radar'>>,
  ScriptableAndArrayOptions<LineOptions & LineHoverOptions, ScriptableContext<'radar'>>,
  AnimationOptions<'radar'> {
  /**
   * The ID of the x axis to plot this dataset on.
   */
  xAxisID: string;
  /**
   * The ID of the y axis to plot this dataset on.
   */
  yAxisID: string;

  /**
   * If true, lines will be drawn between points with no or null data. If false, points with NaN data will create a break in the line. Can also be a number specifying the maximum gap length to span. The unit of the value depends on the scale used.
   */
  spanGaps: boolean | number;

  /**
   * If false, the line is not drawn for this dataset.
   */
  showLine: boolean;
}

export type RadarControllerChartOptions = LineControllerChartOptions;

export interface ChartMetaClip {
  left: number | boolean;
  top: number | boolean;
  right: number | boolean;
  bottom: number | boolean;
  disabled: boolean;
}

export interface ChartMetaCommon<TElement extends Element = Element, TDatasetElement extends Element = Element> {
  type: string;
  controller: DatasetController;
  order: number;

  label: string;
  index: number;
  visible: boolean;

  stack: number;

  indexAxis: 'x' | 'y';

  data: TElement[];
  dataset?: TDatasetElement;

  hidden: boolean;

  xAxisID?: string;
  yAxisID?: string;
  rAxisID?: string;
  iAxisID: string;
  vAxisID: string;

  xScale?: Scale;
  yScale?: Scale;
  rScale?: Scale;
  iScale?: Scale;
  vScale?: Scale;

  _sorted: boolean;
  _stacked: boolean | 'single';
  _parsed: unknown[];
  _clip: ChartMetaClip;
}

export type ChartMeta<
  TType extends ChartType = ChartType,
  TElement extends Element = Element,
  TDatasetElement extends Element = Element,
> = DeepPartial<
{ [key in ChartType]: ChartTypeRegistry[key]['metaExtensions'] }[TType]
> & ChartMetaCommon<TElement, TDatasetElement>;

export interface ActiveDataPoint {
  datasetIndex: number;
  index: number;
}

export interface ActiveElement extends ActiveDataPoint {
  element: Element;
}

declare class Chart<
  TType extends ChartType = ChartType,
  TData = DefaultDataPoint<TType>,
  TLabel = unknown
> {
  readonly platform: BasePlatform;
  readonly id: string;
  readonly canvas: HTMLCanvasElement;
  readonly ctx: CanvasRenderingContext2D;
  readonly config: ChartConfiguration<TType, TData, TLabel> | ChartConfigurationCustomTypesPerDataset<TType, TData, TLabel>;
  readonly width: number;
  readonly height: number;
  readonly aspectRatio: number;
  readonly boxes: LayoutItem[];
  readonly currentDevicePixelRatio: number;
  readonly chartArea: ChartArea;
  readonly scales: { [key: string]: Scale };
  readonly attached: boolean;

  readonly legend?: LegendElement<TType>; // Only available if legend plugin is registered and enabled
  readonly tooltip?: TooltipModel<TType>; // Only available if tooltip plugin is registered and enabled

  data: ChartData<TType, TData, TLabel>;
  options: ChartOptions<TType>;

  constructor(item: ChartItem, config: ChartConfiguration<TType, TData, TLabel> | ChartConfigurationCustomTypesPerDataset<TType, TData, TLabel>);

  clear(): this;
  stop(): this;

  resize(width?: number, height?: number): void;
  ensureScalesHaveIDs(): void;
  buildOrUpdateScales(): void;
  buildOrUpdateControllers(): void;
  reset(): void;
  update(mode?: UpdateMode | ((ctx: { datasetIndex: number }) => UpdateMode)): void;
  render(): void;
  draw(): void;

  isPointInArea(point: Point): boolean;
  getElementsAtEventForMode(e: Event, mode: string, options: InteractionOptions, useFinalPosition: boolean): InteractionItem[];

  getSortedVisibleDatasetMetas(): ChartMeta[];
  getDatasetMeta(datasetIndex: number): ChartMeta;
  getVisibleDatasetCount(): number;
  isDatasetVisible(datasetIndex: number): boolean;
  setDatasetVisibility(datasetIndex: number, visible: boolean): void;
  toggleDataVisibility(index: number): void;
  getDataVisibility(index: number): boolean;
  hide(datasetIndex: number, dataIndex?: number): void;
  show(datasetIndex: number, dataIndex?: number): void;

  getActiveElements(): ActiveElement[];
  setActiveElements(active: ActiveDataPoint[]): void;

  destroy(): void;
  toBase64Image(type?: string, quality?: unknown): string;
  bindEvents(): void;
  unbindEvents(): void;
  updateHoverStyle(items: InteractionItem[], mode: 'dataset', enabled: boolean): void;

  notifyPlugins(hook: string, args?: AnyObject): boolean | void;

  isPluginEnabled(pluginId: string): boolean;

  getContext(): { chart: Chart, type: string };

  static readonly defaults: Defaults;
  static readonly overrides: Overrides;
  static readonly version: string;
  static readonly instances: { [key: string]: Chart };
  static readonly registry: Registry;
  static getChart(key: string | CanvasRenderingContext2D | HTMLCanvasElement): Chart | undefined;
  static register(...items: ChartComponentLike[]): void;
  static unregister(...items: ChartComponentLike[]): void;
}

declare type ChartItem =
  | string
  | CanvasRenderingContext2D
  | HTMLCanvasElement
  | { canvas: HTMLCanvasElement }
  | ArrayLike<CanvasRenderingContext2D | HTMLCanvasElement>;

declare enum UpdateModeEnum {
  resize = 'resize',
  reset = 'reset',
  none = 'none',
  hide = 'hide',
  show = 'show',
  default = 'default',
  active = 'active'
}

export type UpdateMode = keyof typeof UpdateModeEnum;

declare class DatasetController<
  TType extends ChartType = ChartType,
  TElement extends Element = Element,
  TDatasetElement extends Element = Element,
  TParsedData = ParsedDataType<TType>,
> {
  constructor(chart: Chart, datasetIndex: number);

  readonly chart: Chart;
  readonly index: number;
  readonly _cachedMeta: ChartMeta<TType, TElement, TDatasetElement>;
  enableOptionSharing: boolean;
  // If true, the controller supports the decimation
  // plugin. Defaults to `false` for all controllers
  // except the LineController
  supportsDecimation: boolean;

  linkScales(): void;
  getAllParsedValues(scale: Scale): number[];
  protected getLabelAndValue(index: number): { label: string; value: string };
  updateElements(elements: TElement[], start: number, count: number, mode: UpdateMode): void;
  update(mode: UpdateMode): void;
  updateIndex(datasetIndex: number): void;
  protected getMaxOverflow(): boolean | number;
  draw(): void;
  reset(): void;
  getDataset(): ChartDataset;
  getMeta(): ChartMeta<TType, TElement, TDatasetElement>;
  getScaleForId(scaleID: string): Scale | undefined;
  configure(): void;
  initialize(): void;
  addElements(): void;
  buildOrUpdateElements(resetNewElements?: boolean): void;

  getStyle(index: number, active: boolean): AnyObject;
  protected resolveDatasetElementOptions(mode: UpdateMode): AnyObject;
  protected resolveDataElementOptions(index: number, mode: UpdateMode): AnyObject;
  /**
   * Utility for checking if the options are shared and should be animated separately.
   * @protected
   */
  protected getSharedOptions(options: AnyObject): undefined | AnyObject;
  /**
   * Utility for determining if `options` should be included in the updated properties
   * @protected
   */
  protected includeOptions(mode: UpdateMode, sharedOptions: AnyObject): boolean;
  /**
   * Utility for updating an element with new properties, using animations when appropriate.
   * @protected
   */

  protected updateElement(element: TElement | TDatasetElement, index: number | undefined, properties: AnyObject, mode: UpdateMode): void;
  /**
   * Utility to animate the shared options, that are potentially affecting multiple elements.
   * @protected
   */

  protected updateSharedOptions(sharedOptions: AnyObject, mode: UpdateMode, newOptions: AnyObject): void;
  removeHoverStyle(element: TElement, datasetIndex: number, index: number): void;
  setHoverStyle(element: TElement, datasetIndex: number, index: number): void;

  parse(start: number, count: number): void;
  protected parsePrimitiveData(meta: ChartMeta<TType, TElement, TDatasetElement>, data: AnyObject[], start: number, count: number): AnyObject[];
  protected parseArrayData(meta: ChartMeta<TType, TElement, TDatasetElement>, data: AnyObject[], start: number, count: number): AnyObject[];
  protected parseObjectData(meta: ChartMeta<TType, TElement, TDatasetElement>, data: AnyObject[], start: number, count: number): AnyObject[];
  protected getParsed(index: number): TParsedData;
  protected applyStack(scale: Scale, parsed: unknown[]): number;
  protected updateRangeFromParsed(
    range: { min: number; max: number },
    scale: Scale,
    parsed: unknown[],
    stack: boolean | string
  ): void;
  protected getMinMax(scale: Scale, canStack?: boolean): { min: number; max: number };
}

export interface Defaults extends CoreChartOptions<ChartType>, ElementChartOptions<ChartType>, PluginChartOptions<ChartType> {

  scale: ScaleOptionsByType;
  scales: {
    [key in ScaleType]: ScaleOptionsByType<key>;
  };

  set(values: AnyObject): AnyObject;
  set(scope: string, values: AnyObject): AnyObject;
  get(scope: string): AnyObject;

  describe(scope: string, values: AnyObject): AnyObject;
  override(scope: string, values: AnyObject): AnyObject;

  /**
   * Routes the named defaults to fallback to another scope/name.
   * This routing is useful when those target values, like defaults.color, are changed runtime.
   * If the values would be copied, the runtime change would not take effect. By routing, the
   * fallback is evaluated at each access, so its always up to date.
   *
   * Example:
   *
   *   defaults.route('elements.arc', 'backgroundColor', '', 'color')
   *    - reads the backgroundColor from defaults.color when undefined locally
   *
   * @param scope Scope this route applies to.
   * @param name Property name that should be routed to different namespace when not defined here.
   * @param targetScope The namespace where those properties should be routed to.
   * Empty string ('') is the root of defaults.
   * @param targetName The target name in the target scope the property should be routed to.
   */
  route(scope: string, name: string, targetScope: string, targetName: string): void;
}

export type Overrides = {
  [key in ChartType]:
  CoreChartOptions<key> &
  ElementChartOptions<key> &
  PluginChartOptions<key> &
  DatasetChartOptions<ChartType> &
  ScaleChartOptions<key> &
  ChartTypeRegistry[key]['chartOptions'];
}
export interface InteractionOptions {
  axis?: string;
  intersect?: boolean;
  includeInvisible?: boolean;
}

export interface InteractionItem {
  element: Element;
  datasetIndex: number;
  index: number;
}

export type InteractionModeFunction = (
  chart: Chart,
  e: ChartEvent,
  options: InteractionOptions,
  useFinalPosition?: boolean
) => InteractionItem[];

export interface InteractionModeMap {
  /**
   * Returns items at the same index. If the options.intersect parameter is true, we only return items if we intersect something
   * If the options.intersect mode is false, we find the nearest item and return the items at the same index as that item
   */
  index: InteractionModeFunction;

  /**
   * Returns items in the same dataset. If the options.intersect parameter is true, we only return items if we intersect something
   * If the options.intersect is false, we find the nearest item and return the items in that dataset
   */
  dataset: InteractionModeFunction;
  /**
   * Point mode returns all elements that hit test based on the event position
   * of the event
   */
  point: InteractionModeFunction;
  /**
   * nearest mode returns the element closest to the point
   */
  nearest: InteractionModeFunction;
  /**
   * x mode returns the elements that hit-test at the current x coordinate
   */
  x: InteractionModeFunction;
  /**
   * y mode returns the elements that hit-test at the current y coordinate
   */
  y: InteractionModeFunction;
}

export type InteractionMode = keyof InteractionModeMap;

export interface Plugin<TType extends ChartType = ChartType, O = AnyObject> extends ExtendedPlugin<TType, O> {
  id: string;

  /**
   * The events option defines the browser events that the plugin should listen.
   * @default ['mousemove', 'mouseout', 'click', 'touchstart', 'touchmove']
   */
  events?: (keyof HTMLElementEventMap)[]

  /**
   * @desc Called when plugin is installed for this chart instance. This hook is also invoked for disabled plugins (options === false).
   * @param {Chart} chart - The chart instance.
   * @param {object} args - The call arguments.
   * @param {object} options - The plugin options.
   * @since 3.0.0
   */
  install?(chart: Chart<TType>, args: EmptyObject, options: O): void;
  /**
   * @desc Called when a plugin is starting. This happens when chart is created or plugin is enabled.
   * @param {Chart} chart - The chart instance.
   * @param {object} args - The call arguments.
   * @param {object} options - The plugin options.
   * @since 3.0.0
   */
  start?(chart: Chart<TType>, args: EmptyObject, options: O): void;
  /**
   * @desc Called when a plugin stopping. This happens when chart is destroyed or plugin is disabled.
   * @param {Chart} chart - The chart instance.
   * @param {object} args - The call arguments.
   * @param {object} options - The plugin options.
   * @since 3.0.0
   */
  stop?(chart: Chart<TType>, args: EmptyObject, options: O): void;
  /**
   * @desc Called before initializing `chart`.
   * @param {Chart} chart - The chart instance.
   * @param {object} args - The call arguments.
   * @param {object} options - The plugin options.
   */
  beforeInit?(chart: Chart<TType>, args: EmptyObject, options: O): void;
  /**
   * @desc Called after `chart` has been initialized and before the first update.
   * @param {Chart} chart - The chart instance.
   * @param {object} args - The call arguments.
   * @param {object} options - The plugin options.
   */
  afterInit?(chart: Chart<TType>, args: EmptyObject, options: O): void;
  /**
   * @desc Called before updating `chart`. If any plugin returns `false`, the update
   * is cancelled (and thus subsequent render(s)) until another `update` is triggered.
   * @param {Chart} chart - The chart instance.
   * @param {object} args - The call arguments.
   * @param {UpdateMode} args.mode - The update mode
   * @param {object} options - The plugin options.
   * @returns {boolean} `false` to cancel the chart update.
   */
  beforeUpdate?(chart: Chart<TType>, args: { mode: UpdateMode, cancelable: true }, options: O): boolean | void;
  /**
   * @desc Called after `chart` has been updated and before rendering. Note that this
   * hook will not be called if the chart update has been previously cancelled.
   * @param {Chart} chart - The chart instance.
   * @param {object} args - The call arguments.
   * @param {UpdateMode} args.mode - The update mode
   * @param {object} options - The plugin options.
   */
  afterUpdate?(chart: Chart<TType>, args: { mode: UpdateMode }, options: O): void;
  /**
   * @desc Called during the update process, before any chart elements have been created.
   * This can be used for data decimation by changing the data array inside a dataset.
   * @param {Chart} chart - The chart instance.
   * @param {object} args - The call arguments.
   * @param {object} options - The plugin options.
   */
  beforeElementsUpdate?(chart: Chart<TType>, args: EmptyObject, options: O): void;
  /**
   * @desc Called during chart reset
   * @param {Chart} chart - The chart instance.
   * @param {object} args - The call arguments.
   * @param {object} options - The plugin options.
   * @since version 3.0.0
   */
  reset?(chart: Chart<TType>, args: EmptyObject, options: O): void;
  /**
   * @desc Called before updating the `chart` datasets. If any plugin returns `false`,
   * the datasets update is cancelled until another `update` is triggered.
   * @param {Chart} chart - The chart instance.
   * @param {object} args - The call arguments.
   * @param {UpdateMode} args.mode - The update mode.
   * @param {object} options - The plugin options.
   * @returns {boolean} false to cancel the datasets update.
   * @since version 2.1.5
   */
  beforeDatasetsUpdate?(chart: Chart<TType>, args: { mode: UpdateMode }, options: O): boolean | void;
  /**
   * @desc Called after the `chart` datasets have been updated. Note that this hook
   * will not be called if the datasets update has been previously cancelled.
   * @param {Chart} chart - The chart instance.
   * @param {object} args - The call arguments.
   * @param {UpdateMode} args.mode - The update mode.
   * @param {object} options - The plugin options.
   * @since version 2.1.5
   */
  afterDatasetsUpdate?(chart: Chart<TType>, args: { mode: UpdateMode, cancelable: true }, options: O): void;
  /**
   * @desc Called before updating the `chart` dataset at the given `args.index`. If any plugin
   * returns `false`, the datasets update is cancelled until another `update` is triggered.
   * @param {Chart} chart - The chart instance.
   * @param {object} args - The call arguments.
   * @param {number} args.index - The dataset index.
   * @param {object} args.meta - The dataset metadata.
   * @param {UpdateMode} args.mode - The update mode.
   * @param {object} options - The plugin options.
   * @returns {boolean} `false` to cancel the chart datasets drawing.
   */
  beforeDatasetUpdate?(chart: Chart<TType>, args: { index: number; meta: ChartMeta, mode: UpdateMode, cancelable: true }, options: O): boolean | void;
  /**
   * @desc Called after the `chart` datasets at the given `args.index` has been updated. Note
   * that this hook will not be called if the datasets update has been previously cancelled.
   * @param {Chart} chart - The chart instance.
   * @param {object} args - The call arguments.
   * @param {number} args.index - The dataset index.
   * @param {object} args.meta - The dataset metadata.
   * @param {UpdateMode} args.mode - The update mode.
   * @param {object} options - The plugin options.
   */
  afterDatasetUpdate?(chart: Chart<TType>, args: { index: number; meta: ChartMeta, mode: UpdateMode, cancelable: false }, options: O): void;
  /**
   * @desc Called before laying out `chart`. If any plugin returns `false`,
   * the layout update is cancelled until another `update` is triggered.
   * @param {Chart} chart - The chart instance.
   * @param {object} args - The call arguments.
   * @param {object} options - The plugin options.
   * @returns {boolean} `false` to cancel the chart layout.
   */
  beforeLayout?(chart: Chart<TType>, args: { cancelable: true }, options: O): boolean | void;
  /**
   * @desc Called before scale data limits are calculated. This hook is called separately for each scale in the chart.
   * @param {Chart} chart - The chart instance.
   * @param {object} args - The call arguments.
   * @param {Scale} args.scale - The scale.
   * @param {object} options - The plugin options.
   */
  beforeDataLimits?(chart: Chart<TType>, args: { scale: Scale }, options: O): void;
  /**
   * @desc Called after scale data limits are calculated. This hook is called separately for each scale in the chart.
   * @param {Chart} chart - The chart instance.
   * @param {object} args - The call arguments.
   * @param {Scale} args.scale - The scale.
   * @param {object} options - The plugin options.
   */
  afterDataLimits?(chart: Chart<TType>, args: { scale: Scale }, options: O): void;
  /**
   * @desc Called before scale builds its ticks. This hook is called separately for each scale in the chart.
   * @param {Chart} chart - The chart instance.
   * @param {object} args - The call arguments.
   * @param {Scale} args.scale - The scale.
   * @param {object} options - The plugin options.
   */
  beforeBuildTicks?(chart: Chart<TType>, args: { scale: Scale }, options: O): void;
  /**
   * @desc Called after scale has build its ticks. This hook is called separately for each scale in the chart.
   * @param {Chart} chart - The chart instance.
   * @param {object} args - The call arguments.
   * @param {Scale} args.scale - The scale.
   * @param {object} options - The plugin options.
   */
  afterBuildTicks?(chart: Chart<TType>, args: { scale: Scale }, options: O): void;
  /**
   * @desc Called after the `chart` has been laid out. Note that this hook will not
   * be called if the layout update has been previously cancelled.
   * @param {Chart} chart - The chart instance.
   * @param {object} args - The call arguments.
   * @param {object} options - The plugin options.
   */
  afterLayout?(chart: Chart<TType>, args: EmptyObject, options: O): void;
  /**
   * @desc Called before rendering `chart`. If any plugin returns `false`,
   * the rendering is cancelled until another `render` is triggered.
   * @param {Chart} chart - The chart instance.
   * @param {object} args - The call arguments.
   * @param {object} options - The plugin options.
   * @returns {boolean} `false` to cancel the chart rendering.
   */
  beforeRender?(chart: Chart<TType>, args: { cancelable: true }, options: O): boolean | void;
  /**
   * @desc Called after the `chart` has been fully rendered (and animation completed). Note
   * that this hook will not be called if the rendering has been previously cancelled.
   * @param {Chart} chart - The chart instance.
   * @param {object} args - The call arguments.
   * @param {object} options - The plugin options.
   */
  afterRender?(chart: Chart<TType>, args: EmptyObject, options: O): void;
  /**
   * @desc Called before drawing `chart` at every animation frame. If any plugin returns `false`,
   * the frame drawing is cancelled untilanother `render` is triggered.
   * @param {Chart} chart - The chart instance.
   * @param {object} args - The call arguments.
   * @param {object} options - The plugin options.
   * @returns {boolean} `false` to cancel the chart drawing.
   */
  beforeDraw?(chart: Chart<TType>, args: { cancelable: true }, options: O): boolean | void;
  /**
   * @desc Called after the `chart` has been drawn. Note that this hook will not be called
   * if the drawing has been previously cancelled.
   * @param {Chart} chart - The chart instance.
   * @param {object} args - The call arguments.
   * @param {object} options - The plugin options.
   */
  afterDraw?(chart: Chart<TType>, args: EmptyObject, options: O): void;
  /**
   * @desc Called before drawing the `chart` datasets. If any plugin returns `false`,
   * the datasets drawing is cancelled until another `render` is triggered.
   * @param {Chart} chart - The chart instance.
   * @param {object} args - The call arguments.
   * @param {object} options - The plugin options.
   * @returns {boolean} `false` to cancel the chart datasets drawing.
   */
  beforeDatasetsDraw?(chart: Chart<TType>, args: { cancelable: true }, options: O): boolean | void;
  /**
   * @desc Called after the `chart` datasets have been drawn. Note that this hook
   * will not be called if the datasets drawing has been previously cancelled.
   * @param {Chart} chart - The chart instance.
   * @param {object} args - The call arguments.
   * @param {object} options - The plugin options.
   */
  afterDatasetsDraw?(chart: Chart<TType>, args: EmptyObject, options: O, cancelable: false): void;
  /**
   * @desc Called before drawing the `chart` dataset at the given `args.index` (datasets
   * are drawn in the reverse order). If any plugin returns `false`, the datasets drawing
   * is cancelled until another `render` is triggered.
   * @param {Chart} chart - The chart instance.
   * @param {object} args - The call arguments.
   * @param {number} args.index - The dataset index.
   * @param {object} args.meta - The dataset metadata.
   * @param {object} options - The plugin options.
   * @returns {boolean} `false` to cancel the chart datasets drawing.
   */
  beforeDatasetDraw?(chart: Chart<TType>, args: { index: number; meta: ChartMeta }, options: O): boolean | void;
  /**
   * @desc Called after the `chart` datasets at the given `args.index` have been drawn
   * (datasets are drawn in the reverse order). Note that this hook will not be called
   * if the datasets drawing has been previously cancelled.
   * @param {Chart} chart - The chart instance.
   * @param {object} args - The call arguments.
   * @param {number} args.index - The dataset index.
   * @param {object} args.meta - The dataset metadata.
   * @param {object} options - The plugin options.
   */
  afterDatasetDraw?(chart: Chart<TType>, args: { index: number; meta: ChartMeta }, options: O): void;
  /**
   * @desc Called before processing the specified `event`. If any plugin returns `false`,
   * the event will be discarded.
   * @param {Chart} chart - The chart instance.
   * @param {object} args - The call arguments.
   * @param {ChartEvent} args.event - The event object.
   * @param {boolean} args.replay - True if this event is replayed from `Chart.update`
   * @param {boolean} args.inChartArea - The event position is inside chartArea
   * @param {boolean} [args.changed] - Set to true if the plugin needs a render. Should only be changed to true, because this args object is passed through all plugins.
   * @param {object} options - The plugin options.
   */
  beforeEvent?(chart: Chart<TType>, args: { event: ChartEvent, replay: boolean, changed?: boolean; cancelable: true, inChartArea: boolean }, options: O): boolean | void;
  /**
   * @desc Called after the `event` has been consumed. Note that this hook
   * will not be called if the `event` has been previously discarded.
   * @param {Chart} chart - The chart instance.
   * @param {object} args - The call arguments.
   * @param {ChartEvent} args.event - The event object.
   * @param {boolean} args.replay - True if this event is replayed from `Chart.update`
   * @param {boolean} args.inChartArea - The event position is inside chartArea
   * @param {boolean} [args.changed] - Set to true if the plugin needs a render. Should only be changed to true, because this args object is passed through all plugins.
   * @param {object} options - The plugin options.
   */
  afterEvent?(chart: Chart<TType>, args: { event: ChartEvent, replay: boolean, changed?: boolean, cancelable: false, inChartArea: boolean }, options: O): void;
  /**
   * @desc Called after the chart as been resized.
   * @param {Chart} chart - The chart instance.
   * @param {object} args - The call arguments.
   * @param {number} args.size - The new canvas display size (eq. canvas.style width & height).
   * @param {object} options - The plugin options.
   */
  resize?(chart: Chart<TType>, args: { size: { width: number, height: number } }, options: O): void;
  /**
   * Called before the chart is being destroyed.
   * @param {Chart} chart - The chart instance.
   * @param {object} args - The call arguments.
   * @param {object} options - The plugin options.
   */
  beforeDestroy?(chart: Chart<TType>, args: EmptyObject, options: O): void;
  /**
   * Called after the chart has been destroyed.
   * @param {Chart} chart - The chart instance.
   * @param {object} args - The call arguments.
   * @param {object} options - The plugin options.
   */
  afterDestroy?(chart: Chart<TType>, args: EmptyObject, options: O): void;
  /**
   * Called after chart is destroyed on all plugins that were installed for that chart. This hook is also invoked for disabled plugins (options === false).
   * @param {Chart} chart - The chart instance.
   * @param {object} args - The call arguments.
   * @param {object} options - The plugin options.
   * @since 3.0.0
   */
  uninstall?(chart: Chart<TType>, args: EmptyObject, options: O): void;

  /**
   * Default options used in the plugin
   */
  defaults?: Partial<O>;
}

declare type ChartComponentLike = ChartComponent | ChartComponent[] | { [key: string]: ChartComponent } | Plugin | Plugin[];

/**
 * Please use the module's default export which provides a singleton instance
 * Note: class is exported for typedoc
 */
export interface Registry {
  readonly controllers: TypedRegistry<DatasetController>;
  readonly elements: TypedRegistry<Element>;
  readonly plugins: TypedRegistry<Plugin>;
  readonly scales: TypedRegistry<Scale>;

  add(...args: ChartComponentLike[]): void;
  remove(...args: ChartComponentLike[]): void;

  addControllers(...args: ChartComponentLike[]): void;
  addElements(...args: ChartComponentLike[]): void;
  addPlugins(...args: ChartComponentLike[]): void;
  addScales(...args: ChartComponentLike[]): void;

  getController(id: string): DatasetController | undefined;
  getElement(id: string): Element | undefined;
  getPlugin(id: string): Plugin | undefined;
  getScale(id: string): Scale | undefined;
}

export interface Tick {
  value: number;
  label?: string | string[];
  major?: boolean;
}

export interface CoreScaleOptions {
  /**
   * Controls the axis global visibility (visible when true, hidden when false). When display: 'auto', the axis is visible only if at least one associated dataset is visible.
   * @default true
   */
  display: boolean | 'auto';
  /**
   * Align pixel values to device pixels
   */
  alignToPixels: boolean;
  /**
   * Background color of the scale area.
   */
  backgroundColor: Color;
  /**
   * Reverse the scale.
   * @default false
   */
  reverse: boolean;
  /**
   * Clip the dataset drawing against the size of the scale instead of chart area.
   * @default true
   */
  clip: boolean;
  /**
   * The weight used to sort the axis. Higher weights are further away from the chart area.
   * @default true
   */
  weight: number;
  /**
   * User defined minimum value for the scale, overrides minimum value from data.
   */
  min: unknown;
  /**
   * User defined maximum value for the scale, overrides maximum value from data.
   */
  max: unknown;
  /**
   * Adjustment used when calculating the maximum data value.
   */
  suggestedMin: unknown;
  /**
   * Adjustment used when calculating the minimum data value.
   */
  suggestedMax: unknown;
  /**
   * Callback called before the update process starts.
   */
  beforeUpdate(axis: Scale): void;
  /**
   * Callback that runs before dimensions are set.
   */
  beforeSetDimensions(axis: Scale): void;
  /**
   * Callback that runs after dimensions are set.
   */
  afterSetDimensions(axis: Scale): void;
  /**
   * Callback that runs before data limits are determined.
   */
  beforeDataLimits(axis: Scale): void;
  /**
   * Callback that runs after data limits are determined.
   */
  afterDataLimits(axis: Scale): void;
  /**
   * Callback that runs before ticks are created.
   */
  beforeBuildTicks(axis: Scale): void;
  /**
   * Callback that runs after ticks are created. Useful for filtering ticks.
   */
  afterBuildTicks(axis: Scale): void;
  /**
   * Callback that runs before ticks are converted into strings.
   */
  beforeTickToLabelConversion(axis: Scale): void;
  /**
   * Callback that runs after ticks are converted into strings.
   */
  afterTickToLabelConversion(axis: Scale): void;
  /**
   * Callback that runs before tick rotation is determined.
   */
  beforeCalculateLabelRotation(axis: Scale): void;
  /**
   * Callback that runs after tick rotation is determined.
   */
  afterCalculateLabelRotation(axis: Scale): void;
  /**
   * Callback that runs before the scale fits to the canvas.
   */
  beforeFit(axis: Scale): void;
  /**
   * Callback that runs after the scale fits to the canvas.
   */
  afterFit(axis: Scale): void;
  /**
   * Callback that runs at the end of the update process.
   */
  afterUpdate(axis: Scale): void;
}

export interface Scale<O extends CoreScaleOptions = CoreScaleOptions> extends Element<unknown, O>, LayoutItem {
  readonly id: string;
  readonly type: string;
  readonly ctx: CanvasRenderingContext2D;
  readonly chart: Chart;

  maxWidth: number;
  maxHeight: number;

  paddingTop: number;
  paddingBottom: number;
  paddingLeft: number;
  paddingRight: number;

  axis: string;
  labelRotation: number;
  min: number;
  max: number;
  ticks: Tick[];
  getMatchingVisibleMetas(type?: string): ChartMeta[];

  drawTitle(chartArea: ChartArea): void;
  drawLabels(chartArea: ChartArea): void;
  drawGrid(chartArea: ChartArea): void;

  /**
   * @param {number} pixel
   * @return {number}
   */
  getDecimalForPixel(pixel: number): number;
  /**
   * Utility for getting the pixel location of a percentage of scale
   * The coordinate (0, 0) is at the upper-left corner of the canvas
   * @param {number} decimal
   * @return {number}
   */
  getPixelForDecimal(decimal: number): number;
  /**
   * Returns the location of the tick at the given index
   * The coordinate (0, 0) is at the upper-left corner of the canvas
   * @param {number} index
   * @return {number}
   */
  getPixelForTick(index: number): number;
  /**
   * Used to get the label to display in the tooltip for the given value
   * @param {*} value
   * @return {string}
   */
  getLabelForValue(value: number): string;

  /**
   * Returns the grid line width at given value
   */
  getLineWidthForValue(value: number): number;

  /**
   * Returns the location of the given data point. Value can either be an index or a numerical value
   * The coordinate (0, 0) is at the upper-left corner of the canvas
   * @param {*} value
   * @param {number} [index]
   * @return {number}
   */
  getPixelForValue(value: number, index?: number): number;

  /**
   * Used to get the data value from a given pixel. This is the inverse of getPixelForValue
   * The coordinate (0, 0) is at the upper-left corner of the canvas
   * @param {number} pixel
   * @return {*}
   */
  getValueForPixel(pixel: number): number | undefined;

  getBaseValue(): number;
  /**
   * Returns the pixel for the minimum chart value
   * The coordinate (0, 0) is at the upper-left corner of the canvas
   * @return {number}
   */
  getBasePixel(): number;

  init(options: O): void;
  parse(raw: unknown, index?: number): unknown;
  getUserBounds(): { min: number; max: number; minDefined: boolean; maxDefined: boolean };
  getMinMax(canStack: boolean): { min: number; max: number };
  getTicks(): Tick[];
  getLabels(): string[];
  getLabelItems(chartArea?: ChartArea): LabelItem[];
  beforeUpdate(): void;
  configure(): void;
  afterUpdate(): void;
  beforeSetDimensions(): void;
  setDimensions(): void;
  afterSetDimensions(): void;
  beforeDataLimits(): void;
  determineDataLimits(): void;
  afterDataLimits(): void;
  beforeBuildTicks(): void;
  buildTicks(): Tick[];
  afterBuildTicks(): void;
  beforeTickToLabelConversion(): void;
  generateTickLabels(ticks: Tick[]): void;
  afterTickToLabelConversion(): void;
  beforeCalculateLabelRotation(): void;
  calculateLabelRotation(): void;
  afterCalculateLabelRotation(): void;
  beforeFit(): void;
  fit(): void;
  afterFit(): void;

  isFullSize(): boolean;
}
declare class Scale {
  constructor(cfg: {id: string, type: string, ctx: CanvasRenderingContext2D, chart: Chart});
}

export interface ScriptableScaleContext {
  chart: Chart;
  scale: Scale;
  index: number;
  tick: Tick;
}

export interface ScriptableScalePointLabelContext {
  chart: Chart;
  scale: Scale;
  index: number;
  label: string;
  type: string;
}

export interface RenderTextOpts {
  /**
   * The fill color of the text. If unset, the existing
   * fillStyle property of the canvas is unchanged.
   */
  color?: Color;

  /**
   * The width of the strikethrough / underline
   * @default 2
   */
  decorationWidth?: number;

  /**
   * The max width of the text in pixels
   */
  maxWidth?: number;

  /**
   * A rotation to be applied to the canvas
   * This is applied after the translation is applied
   */
  rotation?: number;

  /**
   * Apply a strikethrough effect to the text
   */
  strikethrough?: boolean;

  /**
   * The color of the text stroke. If unset, the existing
   * strokeStyle property of the context is unchanged
   */
  strokeColor?: Color;

  /**
   * The text stroke width. If unset, the existing
   * lineWidth property of the context is unchanged
   */
  strokeWidth?: number;

  /**
   * The text alignment to use. If unset, the existing
   * textAlign property of the context is unchanged
   */
  textAlign?: CanvasTextAlign;

  /**
   * The text baseline to use. If unset, the existing
   * textBaseline property of the context is unchanged
   */
  textBaseline?: CanvasTextBaseline;

  /**
   * If specified, a translation to apply to the context
   */
  translation?: [number, number];

  /**
   * Underline the text
   */
  underline?: boolean;

  /**
   * Dimensions for drawing the label backdrop
   */
  backdrop?: BackdropOptions;
}

export interface BackdropOptions {
  /**
   * Left position of backdrop as pixel
   */
  left: number;

  /**
   * Top position of backdrop as pixel
   */
  top: number;

  /**
   * Width of backdrop in pixels
   */
  width: number;

  /**
   * Height of backdrop in pixels
   */
  height: number;

  /**
   * Color of label backdrops.
   */
  color: Scriptable<Color, ScriptableScaleContext>;
}

export interface LabelItem {
  label: string | string[];
  font: CanvasFontSpec;
  textOffset: number;
  options: RenderTextOpts;
}

export interface TypedRegistry<T> {
  /**
   * @param {ChartComponent} item
   * @returns {string} The scope where items defaults were registered to.
   */
  register(item: ChartComponent): string;
  get(id: string): T | undefined;
  unregister(item: ChartComponent): void;
}

export interface ChartEvent {
  type:
  | 'contextmenu'
  | 'mouseenter'
  | 'mousedown'
  | 'mousemove'
  | 'mouseup'
  | 'mouseout'
  | 'click'
  | 'dblclick'
  | 'keydown'
  | 'keypress'
  | 'keyup'
  | 'resize';
  native: Event | null;
  x: number | null;
  y: number | null;
}
export interface ChartComponent {
  id: string;
  defaults?: AnyObject;
  defaultRoutes?: { [property: string]: string };

  beforeRegister?(): void;
  afterRegister?(): void;
  beforeUnregister?(): void;
  afterUnregister?(): void;
}

export type InteractionAxis = 'x' | 'y' | 'xy' | 'r';

export interface CoreInteractionOptions {
  /**
   * Sets which elements appear in the tooltip. See Interaction Modes for details.
   * @default 'nearest'
   */
  mode: InteractionMode;
  /**
   * if true, the hover mode only applies when the mouse position intersects an item on the chart.
   * @default true
   */
  intersect: boolean;

  /**
   * Defines which directions are used in calculating distances. Defaults to 'x' for 'index' mode and 'xy' in dataset and 'nearest' modes.
   */
  axis: InteractionAxis;

  /**
   * if true, the invisible points that are outside of the chart area will also be included when evaluating interactions.
   * @default false
   */
  includeInvisible: boolean;
}

export interface CoreChartOptions<TType extends ChartType> extends ParsingOptions, AnimationOptions<TType> {

  datasets: {
    [key in ChartType]: ChartTypeRegistry[key]['datasetOptions']
  }

  /**
   * The base axis of the chart. 'x' for vertical charts and 'y' for horizontal charts.
   * @default 'x'
   */
  indexAxis: 'x' | 'y';

  /**
   * How to clip relative to chartArea. Positive value allows overflow, negative value clips that many pixels inside chartArea. 0 = clip at chartArea. Clipping can also be configured per side: `clip: {left: 5, top: false, right: -2, bottom: 0}`
   */
  clip: number | ChartArea | false;

  /**
   * base color
   * @see Defaults.color
   */
  color: Scriptable<Color, ScriptableContext<TType>>;
  /**
   * base background color
   * @see Defaults.backgroundColor
   */
  backgroundColor: ScriptableAndArray<Color, ScriptableContext<TType>>;
  /**
   * base hover background color
   * @see Defaults.hoverBackgroundColor
   */
  hoverBackgroundColor: ScriptableAndArray<Color, ScriptableContext<TType>>;
  /**
   * base border color
   * @see Defaults.borderColor
   */
  borderColor: ScriptableAndArray<Color, ScriptableContext<TType>>;
  /**
   * base hover border color
   * @see Defaults.hoverBorderColor
   */
  hoverBorderColor: ScriptableAndArray<Color, ScriptableContext<TType>>;
  /**
   * base font
   * @see Defaults.font
   */
  font: Partial<FontSpec>;
  /**
   * Resizes the chart canvas when its container does (important note...).
   * @default true
   */
  responsive: boolean;
  /**
   * Maintain the original canvas aspect ratio (width / height) when resizing. For this option to work properly the chart must be in its own dedicated container.
   * @default true
   */
  maintainAspectRatio: boolean;
  /**
   * Delay the resize update by give amount of milliseconds. This can ease the resize process by debouncing update of the elements.
   * @default 0
   */
  resizeDelay: number;

  /**
   * Canvas aspect ratio (i.e. width / height, a value of 1 representing a square canvas). Note that this option is ignored if the height is explicitly defined either as attribute or via the style.
   * @default 2
   */
  aspectRatio: number;

  /**
   * Locale used for number formatting (using `Intl.NumberFormat`).
   * @default user's browser setting
   */
  locale: string;

  /**
   * Called when a resize occurs. Gets passed two arguments: the chart instance and the new size.
   */
  onResize(chart: Chart, size: { width: number; height: number }): void;

  /**
   * Override the window's default devicePixelRatio.
   * @default window.devicePixelRatio
   */
  devicePixelRatio: number;

  interaction: CoreInteractionOptions;

  hover: CoreInteractionOptions;

  /**
   * The events option defines the browser events that the chart should listen to for tooltips and hovering.
   * @default ['mousemove', 'mouseout', 'click', 'touchstart', 'touchmove']
   */
  events: (keyof HTMLElementEventMap)[]

  /**
   * Called when any of the events fire. Passed the event, an array of active elements (bars, points, etc), and the chart.
   */
  onHover(event: ChartEvent, elements: ActiveElement[], chart: Chart): void;

  /**
   * Called if the event is of type 'mouseup' or 'click'. Passed the event, an array of active elements, and the chart.
   */
  onClick(event: ChartEvent, elements: ActiveElement[], chart: Chart): void;

  layout: Partial<{
    autoPadding: boolean;
    padding: Scriptable<Padding, ScriptableContext<TType>>;
  }>;
}

export type AnimationSpec<TType extends ChartType> = {
  /**
   * The number of milliseconds an animation takes.
   * @default 1000
   */
  duration?: Scriptable<number, ScriptableContext<TType>>;
  /**
   * Easing function to use
   * @default 'easeOutQuart'
   */
  easing?: Scriptable<EasingFunction, ScriptableContext<TType>>;

  /**
   * Delay before starting the animations.
   * @default 0
   */
  delay?: Scriptable<number, ScriptableContext<TType>>;

  /**
   *   If set to true, the animations loop endlessly.
   * @default false
   */
  loop?: Scriptable<boolean, ScriptableContext<TType>>;
}

export type AnimationsSpec<TType extends ChartType> = {
  [name: string]: false | AnimationSpec<TType> & {
    properties: string[];

    /**
     * Type of property, determines the interpolator used. Possible values: 'number', 'color' and 'boolean'. Only really needed for 'color', because typeof does not get that right.
     */
    type: 'color' | 'number' | 'boolean';

    fn: <T>(from: T, to: T, factor: number) => T;

    /**
     * Start value for the animation. Current value is used when undefined
     */
    from: Scriptable<Color | number | boolean, ScriptableContext<TType>>;
    /**
     *
     */
    to: Scriptable<Color | number | boolean, ScriptableContext<TType>>;
  }
}

export type TransitionSpec<TType extends ChartType> = {
  animation: AnimationSpec<TType>;
  animations: AnimationsSpec<TType>;
}

export type TransitionsSpec<TType extends ChartType> = {
  [mode: string]: TransitionSpec<TType>
}

export type AnimationOptions<TType extends ChartType> = {
  animation: false | AnimationSpec<TType> & {
    /**
     * Callback called on each step of an animation.
     */
    onProgress?: (this: Chart, event: AnimationEvent) => void;
    /**
     * Callback called when all animations are completed.
     */
    onComplete?: (this: Chart, event: AnimationEvent) => void;
  };
  animations: AnimationsSpec<TType>;
  transitions: TransitionsSpec<TType>;
};

export interface FontSpec {
  /**
   * Default font family for all text, follows CSS font-family options.
   * @default "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif"
   */
  family: string;
  /**
   * Default font size (in px) for text. Does not apply to radialLinear scale point labels.
   * @default 12
   */
  size: number;
  /**
   * Default font style. Does not apply to tooltip title or footer. Does not apply to chart title. Follows CSS font-style options (i.e. normal, italic, oblique, initial, inherit)
   * @default 'normal'
   */
  style: 'normal' | 'italic' | 'oblique' | 'initial' | 'inherit';
  /**
   * Default font weight (boldness). (see MDN).
   */
  weight: 'normal' | 'bold' | 'lighter' | 'bolder' | number | null;
  /**
   * Height of an individual line of text (see MDN).
   * @default 1.2
   */
  lineHeight: number | string;
}

export interface CanvasFontSpec extends FontSpec {
  string: string;
}

export type TextAlign = 'left' | 'center' | 'right';
export type Align = 'start' | 'center' | 'end';

export interface CommonElementOptions {
  borderWidth: number;
  borderColor: Color;
  backgroundColor: Color;
}

export interface CommonHoverOptions {
  hoverBorderWidth: number;
  hoverBorderColor: Color;
  hoverBackgroundColor: Color;
}

export interface ArcBorderRadius {
  outerStart: number;
  outerEnd: number;
  innerStart: number;
  innerEnd: number;
}

export interface ArcOptions extends CommonElementOptions {
  /**
   * If true, Arc can take up 100% of a circular graph without any visual split or cut. This option doesn't support borderRadius and borderJoinStyle miter
   * @default true
   */
  selfJoin: boolean;

  /**
   * Arc stroke alignment.
   */
  borderAlign: 'center' | 'inner';
  /**
   * Line dash. See MDN.
   * @default []
   */
  borderDash: number[];
  /**
   * Line dash offset. See MDN.
   * @default 0.0
   */
  borderDashOffset: number;
  /**
   * Line join style. See MDN. Default is 'round' when `borderAlign` is 'inner', else 'bevel'.
   */
  borderJoinStyle: CanvasLineJoin;

  /**
   * Sets the border radius for arcs
   * @default 0
   */
  borderRadius: number | ArcBorderRadius;

  /**
   * Arc offset (in pixels).
   */
  offset: number;

  /**
   * If false, Arc will be flat.
   * @default true
   */
  circular: boolean;

  /**
   * Spacing between arcs
   */
  spacing: number
}

export interface ArcHoverOptions extends CommonHoverOptions {
  hoverBorderDash: number[];
  hoverBorderDashOffset: number;
  hoverOffset: number;
}

export interface LineOptions extends CommonElementOptions {
  /**
   * Line cap style. See MDN.
   * @default 'butt'
   */
  borderCapStyle: CanvasLineCap;
  /**
   * Line dash. See MDN.
   * @default []
   */
  borderDash: number[];
  /**
   * Line dash offset. See MDN.
   * @default 0.0
   */
  borderDashOffset: number;
  /**
   * Line join style. See MDN.
   * @default 'miter'
   */
  borderJoinStyle: CanvasLineJoin;
  /**
   *   true to keep Bézier control inside the chart, false for no restriction.
   * @default true
   */
  capBezierPoints: boolean;
  /**
   * Interpolation mode to apply.
   * @default 'default'
   */
  cubicInterpolationMode: 'default' | 'monotone';
  /**
   * Bézier curve tension (0 for no Bézier curves).
   * @default 0
   */
  tension: number;
  /**
   * true to show the line as a stepped line (tension will be ignored).
   * @default false
   */
  stepped: 'before' | 'after' | 'middle' | boolean;
  /**
   * Both line and radar charts support a fill option on the dataset object which can be used to create area between two datasets or a dataset and a boundary, i.e. the scale origin, start or end
   */
  fill: FillTarget | ComplexFillTarget;
  /**
   * If true, lines will be drawn between points with no or null data. If false, points with NaN data will create a break in the line. Can also be a number specifying the maximum gap length to span. The unit of the value depends on the scale used.
   */
  spanGaps: boolean | number;

  segment: {
    backgroundColor: Scriptable<Color|undefined, ScriptableLineSegmentContext>,
    borderColor: Scriptable<Color|undefined, ScriptableLineSegmentContext>,
    borderCapStyle: Scriptable<CanvasLineCap|undefined, ScriptableLineSegmentContext>;
    borderDash: Scriptable<number[]|undefined, ScriptableLineSegmentContext>;
    borderDashOffset: Scriptable<number|undefined, ScriptableLineSegmentContext>;
    borderJoinStyle: Scriptable<CanvasLineJoin|undefined, ScriptableLineSegmentContext>;
    borderWidth: Scriptable<number|undefined, ScriptableLineSegmentContext>;
  };
}

export interface LineHoverOptions extends CommonHoverOptions {
  hoverBorderCapStyle: CanvasLineCap;
  hoverBorderDash: number[];
  hoverBorderDashOffset: number;
  hoverBorderJoinStyle: CanvasLineJoin;
}

export type PointStyle =
  | 'circle'
  | 'cross'
  | 'crossRot'
  | 'dash'
  | 'line'
  | 'rect'
  | 'rectRounded'
  | 'rectRot'
  | 'star'
  | 'triangle'
  | false
  | HTMLImageElement
  | HTMLCanvasElement;

export interface PointOptions extends CommonElementOptions {
  /**
   * Point radius
   * @default 3
   */
  radius: number;
  /**
   * Extra radius added to point radius for hit detection.
   * @default 1
   */
  hitRadius: number;
  /**
   * Point style
   * @default 'circle;
   */
  pointStyle: PointStyle;
  /**
   * Point rotation (in degrees).
   * @default 0
   */
  rotation: number;
  /**
   * Draw the active elements over the other elements of the dataset,
   * @default true
   */
  drawActiveElementsOnTop: boolean;
}

export interface PointHoverOptions extends CommonHoverOptions {
  /**
   * Point radius when hovered.
   * @default 4
   */
  hoverRadius: number;
}

export interface PointPrefixedOptions {
  /**
   * The fill color for points.
   */
  pointBackgroundColor: Color;
  /**
   * The border color for points.
   */
  pointBorderColor: Color;
  /**
   * The width of the point border in pixels.
   */
  pointBorderWidth: number;
  /**
   * The pixel size of the non-displayed point that reacts to mouse events.
   */
  pointHitRadius: number;
  /**
   * The radius of the point shape. If set to 0, the point is not rendered.
   */
  pointRadius: number;
  /**
   * The rotation of the point in degrees.
   */
  pointRotation: number;
  /**
   * Style of the point.
   */
  pointStyle: PointStyle;
}

export interface PointPrefixedHoverOptions {
  /**
   * Point background color when hovered.
   */
  pointHoverBackgroundColor: Color;
  /**
   * Point border color when hovered.
   */
  pointHoverBorderColor: Color;
  /**
   * Border width of point when hovered.
   */
  pointHoverBorderWidth: number;
  /**
   * The radius of the point when hovered.
   */
  pointHoverRadius: number;
}

export interface BarOptions extends Omit<CommonElementOptions, 'borderWidth'> {
  /**
   * The base value for the bar in data units along the value axis.
   */
  base: number;

  /**
   * Skipped (excluded) border: 'start', 'end', 'left',  'right', 'bottom', 'top', 'middle', false (none) or true (all).
   * @default 'start'
   */
  borderSkipped: 'start' | 'end' | 'left' | 'right' | 'bottom' | 'top' | 'middle' | boolean;

  /**
   * Border radius
   * @default 0
   */
  borderRadius: number | BorderRadius;

  /**
   * Amount to inflate the rectangle(s). This can be used to hide artifacts between bars.
   * Unit is pixels. 'auto' translates to 0.33 pixels when barPercentage * categoryPercentage is 1, else 0.
   * @default 'auto'
   */
  inflateAmount: number | 'auto';

  /**
   * Width of the border, number for all sides, object to specify width for each side specifically
   * @default 0
   */
  borderWidth: number | { top?: number, right?: number, bottom?: number, left?: number };
}

export interface BorderRadius {
  topLeft: number;
  topRight: number;
  bottomLeft: number;
  bottomRight: number;
}

export interface BarHoverOptions extends CommonHoverOptions {
  hoverBorderRadius: number | BorderRadius;
}

export interface ElementOptionsByType<TType extends ChartType> {
  arc: ScriptableAndArrayOptions<ArcOptions & ArcHoverOptions, ScriptableContext<TType>>;
  bar: ScriptableAndArrayOptions<BarOptions & BarHoverOptions, ScriptableContext<TType>>;
  line: ScriptableAndArrayOptions<LineOptions & LineHoverOptions, ScriptableContext<TType>>;
  point: ScriptableAndArrayOptions<PointOptions & PointHoverOptions, ScriptableContext<TType>>;
}

export type ElementChartOptions<TType extends ChartType = ChartType> = {
  elements: ElementOptionsByType<TType>
};

declare class BasePlatform {
  /**
   * Called at chart construction time, returns a context2d instance implementing
   * the [W3C Canvas 2D Context API standard]{@link https://www.w3.org/TR/2dcontext/}.
   * @param {HTMLCanvasElement} canvas - The canvas from which to acquire context (platform specific)
   * @param options - The chart options
   */
  acquireContext(
    canvas: HTMLCanvasElement,
    options?: CanvasRenderingContext2DSettings
  ): CanvasRenderingContext2D | null;
  /**
   * Called at chart destruction time, releases any resources associated to the context
   * previously returned by the acquireContext() method.
   * @param {CanvasRenderingContext2D} context - The context2d instance
   * @returns {boolean} true if the method succeeded, else false
   */
  releaseContext(context: CanvasRenderingContext2D): boolean;
  /**
   * Registers the specified listener on the given chart.
   * @param {Chart} chart - Chart from which to listen for event
   * @param {string} type - The ({@link ChartEvent}) type to listen for
   * @param listener - Receives a notification (an object that implements
   * the {@link ChartEvent} interface) when an event of the specified type occurs.
   */
  addEventListener(chart: Chart, type: string, listener: (e: ChartEvent) => void): void;
  /**
   * Removes the specified listener previously registered with addEventListener.
   * @param {Chart} chart - Chart from which to remove the listener
   * @param {string} type - The ({@link ChartEvent}) type to remove
   * @param listener - The listener function to remove from the event target.
   */
  removeEventListener(chart: Chart, type: string, listener: (e: ChartEvent) => void): void;
  /**
   * @returns {number} the current devicePixelRatio of the device this platform is connected to.
   */
  getDevicePixelRatio(): number;
  /**
   * @param {HTMLCanvasElement} canvas - The canvas for which to calculate the maximum size
   * @param {number} [width] - Parent element's content width
   * @param {number} [height] - Parent element's content height
   * @param {number} [aspectRatio] - The aspect ratio to maintain
   * @returns { width: number, height: number } the maximum size available.
   */
  getMaximumSize(canvas: HTMLCanvasElement, width?: number, height?: number, aspectRatio?: number): { width: number, height: number };
  /**
   * @param {HTMLCanvasElement} canvas
   * @returns {boolean} true if the canvas is attached to the platform, false if not.
   */
  isAttached(canvas: HTMLCanvasElement): boolean;
  /**
   * Updates config with platform specific requirements
   * @param {ChartConfiguration | ChartConfigurationCustomTypes} config
   */
  updateConfig(config: ChartConfiguration | ChartConfigurationCustomTypesPerDataset): void;
}

declare const enum DecimationAlgorithm {
  lttb = 'lttb',
  minmax = 'min-max',
}
export interface BaseDecimationOptions {
  enabled: boolean;
  threshold?: number;
}

export interface LttbDecimationOptions extends BaseDecimationOptions {
  algorithm: DecimationAlgorithm.lttb | 'lttb';
  samples?: number;
}

export interface MinMaxDecimationOptions extends BaseDecimationOptions {
  algorithm: DecimationAlgorithm.minmax | 'min-max';
}

export type DecimationOptions = LttbDecimationOptions | MinMaxDecimationOptions;
export interface FillerOptions {
  drawTime: 'beforeDraw' | 'beforeDatasetDraw' | 'beforeDatasetsDraw';
  propagate: boolean;
}

export type FillTarget = number | string | { value: number } | 'start' | 'end' | 'origin' | 'stack' | 'shape' | boolean;

export interface ComplexFillTarget {
  /**
   * The accepted values are the same as the filling mode values, so you may use absolute and relative dataset indexes and/or boundaries.
   */
  target: FillTarget;
  /**
   * If no color is set, the default color will be the background color of the chart.
   */
  above: Color;
  /**
   * Same as the above.
   */
  below: Color;
}

export interface FillerControllerDatasetOptions {
  /**
   * Both line and radar charts support a fill option on the dataset object which can be used to create area between two datasets or a dataset and a boundary, i.e. the scale origin, start or end
   */
  fill: FillTarget | ComplexFillTarget;
}

export interface LegendItem {
  /**
   * Label that will be displayed
   */
  text: string;

  /**
   * Border radius of the legend box
   * @since 3.1.0
   */
  borderRadius?: number | BorderRadius;

  /**
   * Index of the associated dataset
   */
  datasetIndex?: number;

  /**
   * Index the associated label in the labels array
   */
  index?: number

  /**
   * Fill style of the legend box
   */
  fillStyle?: Color;

  /**
   * Font color for the text
   * Defaults to LegendOptions.labels.color
   */
  fontColor?: Color;

  /**
   * If true, this item represents a hidden dataset. Label will be rendered with a strike-through effect
   */
  hidden?: boolean;

  /**
   * For box border.
   * @see https://developer.mozilla.org/en/docs/Web/API/CanvasRenderingContext2D/lineCap
   */
  lineCap?: CanvasLineCap;

  /**
   * For box border.
   * @see https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/setLineDash
   */
  lineDash?: number[];

  /**
   * For box border.
   * @see https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset
   */
  lineDashOffset?: number;

  /**
   * For box border.
   * @see https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineJoin
   */
  lineJoin?: CanvasLineJoin;

  /**
   * Width of box border
   */
  lineWidth?: number;

  /**
   * Stroke style of the legend box
   */
  strokeStyle?: Color;

  /**
   * Point style of the legend box (only used if usePointStyle is true)
   */
  pointStyle?: PointStyle;

  /**
   * Rotation of the point in degrees (only used if usePointStyle is true)
   */
  rotation?: number;

  /**
   * Text alignment
   */
  textAlign?: TextAlign;
}

export interface LegendElement<TType extends ChartType> extends Element<AnyObject, LegendOptions<TType>>, LayoutItem {
  chart: Chart<TType>;
  ctx: CanvasRenderingContext2D;
  legendItems?: LegendItem[];
  options: LegendOptions<TType>;
  fit(): void;
}

export interface LegendOptions<TType extends ChartType> {
  /**
   * Is the legend shown?
   * @default true
   */
  display: boolean;
  /**
   * Position of the legend.
   * @default 'top'
   */
  position: LayoutPosition;
  /**
   * Alignment of the legend.
   * @default 'center'
   */
  align: Align;
  /**
   * Maximum height of the legend, in pixels
   */
  maxHeight: number;
  /**
   * Maximum width of the legend, in pixels
   */
  maxWidth: number;
  /**
   * Marks that this box should take the full width/height of the canvas (moving other boxes). This is unlikely to need to be changed in day-to-day use.
   * @default true
   */
  fullSize: boolean;
  /**
   * Legend will show datasets in reverse order.
   * @default false
   */
  reverse: boolean;
  /**
   * A callback that is called when a click event is registered on a label item.
   */
  onClick(this: LegendElement<TType>, e: ChartEvent, legendItem: LegendItem, legend: LegendElement<TType>): void;
  /**
   * A callback that is called when a 'mousemove' event is registered on top of a label item
   */
  onHover(this: LegendElement<TType>, e: ChartEvent, legendItem: LegendItem, legend: LegendElement<TType>): void;
  /**
   * A callback that is called when a 'mousemove' event is registered outside of a previously hovered label item.
   */
  onLeave(this: LegendElement<TType>, e: ChartEvent, legendItem: LegendItem, legend: LegendElement<TType>): void;

  labels: {
    /**
     * Width of colored box.
     * @default 40
     */
    boxWidth: number;
    /**
     * Height of the coloured box.
     * @default fontSize
     */
    boxHeight: number;
    /**
     * Color of label
     * @see Defaults.color
     */
    color: Color;
    /**
     * Font of label
     * @see Defaults.font
     */
    font: ScriptableAndScriptableOptions<Partial<FontSpec>, ScriptableChartContext>;
    /**
     * Padding between rows of colored boxes.
     * @default 10
     */
    padding: number;
    /**
     * If usePointStyle is true, the width of the point style used for the legend.
     */
    pointStyleWidth: number;
    /**
     * Generates legend items for each thing in the legend. Default implementation returns the text + styling for the color box. See Legend Item for details.
     */
    generateLabels(chart: Chart): LegendItem[];

    /**
     * Filters legend items out of the legend. Receives 2 parameters, a Legend Item and the chart data
     */
    filter(item: LegendItem, data: ChartData): boolean;

    /**
     * Sorts the legend items
     */
    sort(a: LegendItem, b: LegendItem, data: ChartData): number;

    /**
     * Override point style for the legend. Only applies if usePointStyle is true
     */
    pointStyle: PointStyle;

    /**
     * Text alignment
     */
    textAlign?: TextAlign;

    /**
     * Label style will match corresponding point style (size is based on the minimum value between boxWidth and font.size).
     * @default false
     */
    usePointStyle: boolean;

    /**
     * Label borderRadius will match corresponding borderRadius.
     * @default false
     */
    useBorderRadius: boolean;

    /**
     * Override the borderRadius to use.
     * @default undefined
     */
    borderRadius: number;
  };
  /**
   * true for rendering the legends from right to left.
   */
  rtl: boolean;
  /**
   * This will force the text direction 'rtl' or 'ltr' on the canvas for rendering the legend, regardless of the css specified on the canvas
   * @default canvas's default
   */
  textDirection: string;

  title: {
    /**
     * Is the legend title displayed.
     * @default false
     */
    display: boolean;
    /**
     * Color of title
     * @see Defaults.color
     */
    color: Color;
    /**
     * see Fonts
     */
    font: ScriptableAndScriptableOptions<Partial<FontSpec>, ScriptableChartContext>;
    position: 'center' | 'start' | 'end';
    padding?: number | ChartArea;
    /**
     * The string title.
     */
    text: string;
  };
}

export interface TitleOptions {
  /**
   * Alignment of the title.
   * @default 'center'
   */
  align: Align;
  /**
   * Is the title shown?
   * @default false
   */
  display: boolean;
  /**
   * Position of title
   * @default 'top'
   */
  position: 'top' | 'left' | 'bottom' | 'right';
  /**
   * Color of text
   * @see Defaults.color
   */
  color: Color;
  font: ScriptableAndScriptableOptions<Partial<FontSpec>, ScriptableChartContext>;

  /**
   * Marks that this box should take the full width/height of the canvas (moving other boxes). If set to `false`, places the box above/beside the
   * chart area
   * @default true
   */
  fullSize: boolean;
  /**
   *   Adds padding above and below the title text if a single number is specified. It is also possible to change top and bottom padding separately.
   */
  padding: number | { top: number; bottom: number };
  /**
   *   Title text to display. If specified as an array, text is rendered on multiple lines.
   */
  text: string | string[];
}

export type TooltipXAlignment = 'left' | 'center' | 'right';
export type TooltipYAlignment = 'top' | 'center' | 'bottom';
export interface TooltipLabelStyle {
  borderColor: Color;
  backgroundColor: Color;

  /**
   * Width of border line
   * @since 3.1.0
   */
  borderWidth?: number;

  /**
   * Border dash
   * @since 3.1.0
   */
  borderDash?: [number, number];

  /**
   * Border dash offset
   * @since 3.1.0
   */
  borderDashOffset?: number;

  /**
   * borderRadius
   * @since 3.1.0
   */
  borderRadius?: number | BorderRadius;
}
export interface TooltipModel<TType extends ChartType> extends Element<AnyObject, TooltipOptions<TType>> {
  readonly chart: Chart<TType>;

  // The items that we are rendering in the tooltip. See Tooltip Item Interface section
  dataPoints: TooltipItem<TType>[];

  // Positioning
  xAlign: TooltipXAlignment;
  yAlign: TooltipYAlignment;

  // X and Y properties are the top left of the tooltip
  x: number;
  y: number;
  width: number;
  height: number;
  // Where the tooltip points to
  caretX: number;
  caretY: number;

  // Body
  // The body lines that need to be rendered
  // Each object contains 3 parameters
  // before: string[] // lines of text before the line with the color square
  // lines: string[]; // lines of text to render as the main item with color square
  // after: string[]; // lines of text to render after the main lines
  body: { before: string[]; lines: string[]; after: string[] }[];
  // lines of text that appear after the title but before the body
  beforeBody: string[];
  // line of text that appear after the body and before the footer
  afterBody: string[];

  // Title
  // lines of text that form the title
  title: string[];

  // Footer
  // lines of text that form the footer
  footer: string[];

  // Styles to render for each item in body[]. This is the styling of the squares in the tooltip
  labelColors: TooltipLabelStyle[];
  labelTextColors: Color[];
  labelPointStyles: { pointStyle: PointStyle; rotation: number }[];

  // 0 opacity is a hidden tooltip
  opacity: number;

  // tooltip options
  options: TooltipOptions<TType>;

  getActiveElements(): ActiveElement[];
  setActiveElements(active: ActiveDataPoint[], eventPosition: Point): void;
}

export interface TooltipPosition extends Point {
  xAlign?: TooltipXAlignment;
  yAlign?: TooltipYAlignment;
}

export type TooltipPositionerFunction<TType extends ChartType> = (
  this: TooltipModel<TType>,
  items: readonly ActiveElement[],
  eventPosition: Point
) => TooltipPosition | false;

export interface TooltipPositionerMap {
  average: TooltipPositionerFunction<ChartType>;
  nearest: TooltipPositionerFunction<ChartType>;
}

export type TooltipPositioner = keyof TooltipPositionerMap;

export interface TooltipDatasetCallbacks<
  TType extends ChartType,
  Model = TooltipModel<TType>,
  Item = TooltipItem<TType>> {
  beforeLabel(this: Model, tooltipItem: Item): string | string[] | void;
  label(this: Model, tooltipItem: Item): string | string[] | void;
  afterLabel(this: Model, tooltipItem: Item): string | string[] | void;

  labelColor(this: Model, tooltipItem: Item): TooltipLabelStyle | void;
  labelTextColor(this: Model, tooltipItem: Item): Color | void;
  labelPointStyle(this: Model, tooltipItem: Item): { pointStyle: PointStyle; rotation: number } | void;
}

export interface TooltipCallbacks<
  TType extends ChartType,
  Model = TooltipModel<TType>,
  Item = TooltipItem<TType>> extends TooltipDatasetCallbacks<TType, Model, Item> {

  beforeTitle(this: Model, tooltipItems: Item[]): string | string[] | void;
  title(this: Model, tooltipItems: Item[]): string | string[] | void;
  afterTitle(this: Model, tooltipItems: Item[]): string | string[] | void;

  beforeBody(this: Model, tooltipItems: Item[]): string | string[] | void;
  afterBody(this: Model, tooltipItems: Item[]): string | string[] | void;

  beforeLabel(this: Model, tooltipItem: Item): string | string[] | void;
  label(this: Model, tooltipItem: Item): string | string[] | void;
  afterLabel(this: Model, tooltipItem: Item): string | string[] | void;

  labelColor(this: Model, tooltipItem: Item): TooltipLabelStyle | void;
  labelTextColor(this: Model, tooltipItem: Item): Color | void;
  labelPointStyle(this: Model, tooltipItem: Item): { pointStyle: PointStyle; rotation: number } | void;

  beforeFooter(this: Model, tooltipItems: Item[]): string | string[] | void;
  footer(this: Model, tooltipItems: Item[]): string | string[] | void;
  afterFooter(this: Model, tooltipItems: Item[]): string | string[] | void;
}

export interface ExtendedPlugin<
  TType extends ChartType,
  O = AnyObject,
  Model = TooltipModel<TType>> {
  /**
   * @desc Called before drawing the `tooltip`. If any plugin returns `false`,
   * the tooltip drawing is cancelled until another `render` is triggered.
   * @param {Chart} chart - The chart instance.
   * @param {object} args - The call arguments.
   * @param {Tooltip} args.tooltip - The tooltip.
   * @param {object} options - The plugin options.
   * @returns {boolean} `false` to cancel the chart tooltip drawing.
   */
  beforeTooltipDraw?(chart: Chart, args: { tooltip: Model, cancelable: true }, options: O): boolean | void;
  /**
   * @desc Called after drawing the `tooltip`. Note that this hook will not
   * be called if the tooltip drawing has been previously cancelled.
   * @param {Chart} chart - The chart instance.
   * @param {object} args - The call arguments.
   * @param {Tooltip} args.tooltip - The tooltip.
   * @param {object} options - The plugin options.
   */
  afterTooltipDraw?(chart: Chart, args: { tooltip: Model }, options: O): void;
}

export interface ScriptableTooltipContext<TType extends ChartType> {
  chart: UnionToIntersection<Chart<TType>>;
  tooltip: UnionToIntersection<TooltipModel<TType>>;
  tooltipItems: TooltipItem<TType>[];
}

export interface TooltipOptions<TType extends ChartType = ChartType> extends CoreInteractionOptions {
  /**
   * Are on-canvas tooltips enabled?
   * @default true
   */
  enabled: Scriptable<boolean, ScriptableTooltipContext<TType>>;
  /**
   *   See external tooltip section.
   */
  external(this: TooltipModel<TType>, args: { chart: Chart; tooltip: TooltipModel<TType> }): void;
  /**
   * The mode for positioning the tooltip
   */
  position: Scriptable<TooltipPositioner, ScriptableTooltipContext<TType>>

  /**
   * Override the tooltip alignment calculations
   */
  xAlign: Scriptable<TooltipXAlignment, ScriptableTooltipContext<TType>>;
  yAlign: Scriptable<TooltipYAlignment, ScriptableTooltipContext<TType>>;

  /**
   * Sort tooltip items.
   */
  itemSort: (a: TooltipItem<TType>, b: TooltipItem<TType>, data: ChartData) => number;

  filter: (e: TooltipItem<TType>, index: number, array: TooltipItem<TType>[], data: ChartData) => boolean;

  /**
   * Background color of the tooltip.
   * @default 'rgba(0, 0, 0, 0.8)'
   */
  backgroundColor: Scriptable<Color, ScriptableTooltipContext<TType>>;
  /**
   * Padding between the color box and the text.
   * @default 1
   */
  boxPadding: number;
  /**
   * Color of title
   * @default '#fff'
   */
  titleColor: Scriptable<Color, ScriptableTooltipContext<TType>>;
  /**
   * See Fonts
   * @default {weight: 'bold'}
   */
  titleFont: ScriptableAndScriptableOptions<Partial<FontSpec>, ScriptableTooltipContext<TType>>;
  /**
   * Spacing to add to top and bottom of each title line.
   * @default 2
   */
  titleSpacing: Scriptable<number, ScriptableTooltipContext<TType>>;
  /**
   * Margin to add on bottom of title section.
   * @default 6
   */
  titleMarginBottom: Scriptable<number, ScriptableTooltipContext<TType>>;
  /**
   * Horizontal alignment of the title text lines.
   * @default 'left'
   */
  titleAlign: Scriptable<TextAlign, ScriptableTooltipContext<TType>>;
  /**
   * Spacing to add to top and bottom of each tooltip item.
   * @default 2
   */
  bodySpacing: Scriptable<number, ScriptableTooltipContext<TType>>;
  /**
   * Color of body
   * @default '#fff'
   */
  bodyColor: Scriptable<Color, ScriptableTooltipContext<TType>>;
  /**
   * See Fonts.
   * @default {}
   */
  bodyFont: ScriptableAndScriptableOptions<Partial<FontSpec>, ScriptableTooltipContext<TType>>;
  /**
   * Horizontal alignment of the body text lines.
   * @default 'left'
   */
  bodyAlign: Scriptable<TextAlign, ScriptableTooltipContext<TType>>;
  /**
   * Spacing to add to top and bottom of each footer line.
   * @default 2
   */
  footerSpacing: Scriptable<number, ScriptableTooltipContext<TType>>;
  /**
   * Margin to add before drawing the footer.
   * @default 6
   */
  footerMarginTop: Scriptable<number, ScriptableTooltipContext<TType>>;
  /**
   * Color of footer
   * @default '#fff'
   */
  footerColor: Scriptable<Color, ScriptableTooltipContext<TType>>;
  /**
   * See Fonts
   * @default {weight: 'bold'}
   */
  footerFont: ScriptableAndScriptableOptions<Partial<FontSpec>, ScriptableTooltipContext<TType>>;
  /**
   * Horizontal alignment of the footer text lines.
   * @default 'left'
   */
  footerAlign: Scriptable<TextAlign, ScriptableTooltipContext<TType>>;
  /**
   * Padding to add to the tooltip
   * @default 6
   */
  padding: Scriptable<Padding, ScriptableTooltipContext<TType>>;
  /**
   * Extra distance to move the end of the tooltip arrow away from the tooltip point.
   * @default 2
   */
  caretPadding: Scriptable<number, ScriptableTooltipContext<TType>>;
  /**
   * Size, in px, of the tooltip arrow.
   * @default 5
   */
  caretSize: Scriptable<number, ScriptableTooltipContext<TType>>;
  /**
   * Radius of tooltip corner curves.
   * @default 6
   */
  cornerRadius: Scriptable<number | BorderRadius, ScriptableTooltipContext<TType>>;
  /**
   * Color to draw behind the colored boxes when multiple items are in the tooltip.
   * @default '#fff'
   */
  multiKeyBackground: Scriptable<Color, ScriptableTooltipContext<TType>>;
  /**
   * If true, color boxes are shown in the tooltip.
   * @default true
   */
  displayColors: Scriptable<boolean, ScriptableTooltipContext<TType>>;
  /**
   * Width of the color box if displayColors is true.
   * @default bodyFont.size
   */
  boxWidth: Scriptable<number, ScriptableTooltipContext<TType>>;
  /**
   * Height of the color box if displayColors is true.
   * @default bodyFont.size
   */
  boxHeight: Scriptable<number, ScriptableTooltipContext<TType>>;
  /**
   * Use the corresponding point style (from dataset options) instead of color boxes, ex: star, triangle etc. (size is based on the minimum value between boxWidth and boxHeight)
   * @default false
   */
  usePointStyle: Scriptable<boolean, ScriptableTooltipContext<TType>>;
  /**
   * Color of the border.
   * @default 'rgba(0, 0, 0, 0)'
   */
  borderColor: Scriptable<Color, ScriptableTooltipContext<TType>>;
  /**
   * Size of the border.
   * @default 0
   */
  borderWidth: Scriptable<number, ScriptableTooltipContext<TType>>;
  /**
   * true for rendering the legends from right to left.
   */
  rtl: Scriptable<boolean, ScriptableTooltipContext<TType>>;

  /**
   * This will force the text direction 'rtl' or 'ltr on the canvas for rendering the tooltips, regardless of the css specified on the canvas
   * @default canvas's default
   */
  textDirection: Scriptable<string, ScriptableTooltipContext<TType>>;

  animation: AnimationSpec<TType> | false;
  animations: AnimationsSpec<TType> | false;
  callbacks: TooltipCallbacks<TType>;
}

export interface TooltipDatasetOptions<TType extends ChartType = ChartType> {
  callbacks: TooltipDatasetCallbacks<TType>;
}

export interface TooltipItem<TType extends ChartType> {
  /**
   * The chart the tooltip is being shown on
   */
  chart: Chart;

  /**
   * Label for the tooltip
   */
  label: string;

  /**
   * Parsed data values for the given `dataIndex` and `datasetIndex`
   */
  parsed: UnionToIntersection<ParsedDataType<TType>>;

  /**
   * Raw data values for the given `dataIndex` and `datasetIndex`
   */
  raw: unknown;

  /**
   * Formatted value for the tooltip
   */
  formattedValue: string;

  /**
   * The dataset the item comes from
   */
  dataset: UnionToIntersection<ChartDataset<TType>>;

  /**
   * Index of the dataset the item comes from
   */
  datasetIndex: number;

  /**
   * Index of this data item in the dataset
   */
  dataIndex: number;

  /**
   * The chart element (point, arc, bar, etc.) for this tooltip item
   */
  element: Element;
}

export interface PluginDatasetOptionsByType<TType extends ChartType> {
  tooltip: TooltipDatasetOptions<TType>;
}

export interface PluginOptionsByType<TType extends ChartType> {
  colors: ColorsPluginOptions;
  decimation: DecimationOptions;
  filler: FillerOptions;
  legend: LegendOptions<TType>;
  subtitle: TitleOptions;
  title: TitleOptions;
  tooltip: TooltipOptions<TType>;
}
export interface PluginChartOptions<TType extends ChartType> {
  plugins: PluginOptionsByType<TType>;
}

export interface BorderOptions {
  /**
   * @default true
   */
  display: boolean
  /**
   * @default []
   */
  dash: Scriptable<number[], ScriptableScaleContext>;
  /**
   * @default 0
   */
  dashOffset: Scriptable<number, ScriptableScaleContext>;
  color: Color;
  width: number;
  z: number;
}

export interface GridLineOptions {
  /**
   * @default true
   */
  display: boolean;
  /**
   * @default false
   */
  circular: boolean;
  /**
   * @default 'rgba(0, 0, 0, 0.1)'
   */
  color: ScriptableAndArray<Color, ScriptableScaleContext>;
  /**
   * @default 1
   */
  lineWidth: ScriptableAndArray<number, ScriptableScaleContext>;
  /**
   * @default true
   */
  drawOnChartArea: boolean;
  /**
   * @default true
   */
  drawTicks: boolean;
  /**
   * @default []
   */
  tickBorderDash: Scriptable<number[], ScriptableScaleContext>;
  /**
   * @default 0
   */
  tickBorderDashOffset: Scriptable<number, ScriptableScaleContext>;
  /**
   * @default 'rgba(0, 0, 0, 0.1)'
   */
  tickColor: ScriptableAndArray<Color, ScriptableScaleContext>;
  /**
   * @default 10
   */
  tickLength: number;
  /**
   * @default 1
   */
  tickWidth: number;
  /**
   * @default false
   */
  offset: boolean;
  /**
   * @default 0
   */
  z: number;
}

export interface TickOptions {
  /**
   * Color of label backdrops.
   * @default 'rgba(255, 255, 255, 0.75)'
   */
  backdropColor: Scriptable<Color, ScriptableScaleContext>;
  /**
   * Padding of tick backdrop.
   * @default 2
   */
  backdropPadding: number | ChartArea;

  /**
   * Returns the string representation of the tick value as it should be displayed on the chart. See callback.
   */
  callback: (this: Scale, tickValue: number | string, index: number, ticks: Tick[]) => string | string[] | number | number[] | null | undefined;
  /**
   * If true, show tick labels.
   * @default true
   */
  display: boolean;
  /**
   * Color of tick
   * @see Defaults.color
   */
  color: ScriptableAndArray<Color, ScriptableScaleContext>;
  /**
   * see Fonts
   */
  font: ScriptableAndScriptableOptions<Partial<FontSpec>, ScriptableScaleContext>;
  /**
   * Sets the offset of the tick labels from the axis
   */
  padding: number;
  /**
   * If true, draw a background behind the tick labels.
   * @default false
   */
  showLabelBackdrop: Scriptable<boolean, ScriptableScaleContext>;
  /**
   * The color of the stroke around the text.
   * @default undefined
   */
  textStrokeColor: Scriptable<Color, ScriptableScaleContext>;
  /**
   * Stroke width around the text.
   * @default 0
   */
  textStrokeWidth: Scriptable<number, ScriptableScaleContext>;
  /**
   * z-index of tick layer. Useful when ticks are drawn on chart area. Values <= 0 are drawn under datasets, > 0 on top.
   * @default 0
   */
  z: number;

  major: {
    /**
     * If true, major ticks are generated. A major tick will affect autoskipping and major will be defined on ticks in the scriptable options context.
     * @default false
     */
    enabled: boolean;
  };
}

export type CartesianTickOptions = TickOptions & {
  /**
   * The number of ticks to examine when deciding how many labels will fit. Setting a smaller value will be faster, but may be less accurate when there is large variability in label length.
   * @default ticks.length
   */
  sampleSize: number;
  /**
   * The label alignment
   * @default 'center'
   */
  align: Align | 'inner';
  /**
   *   If true, automatically calculates how many labels can be shown and hides labels accordingly. Labels will be rotated up to maxRotation before skipping any. Turn autoSkip off to show all labels no matter what.
   * @default true
   */
  autoSkip: boolean;
  /**
   * Padding between the ticks on the horizontal axis when autoSkip is enabled.
   * @default 0
   */
  autoSkipPadding: number;

  /**
   * How is the label positioned perpendicular to the axis direction.
   * This only applies when the rotation is 0 and the axis position is one of "top", "left", "right", or "bottom"
   * @default 'near'
   */
  crossAlign: 'near' | 'center' | 'far';

  /**
   * Should the defined `min` and `max` values be presented as ticks even if they are not "nice".
   * @default: true
   */
  includeBounds: boolean;

  /**
   * Distance in pixels to offset the label from the centre point of the tick (in the x direction for the x axis, and the y direction for the y axis). Note: this can cause labels at the edges to be cropped by the edge of the canvas
   * @default 0
   */
  labelOffset: number;

  /**
   * Minimum rotation for tick labels. Note: Only applicable to horizontal scales.
   * @default 0
   */
  minRotation: number;
  /**
   * Maximum rotation for tick labels when rotating to condense labels. Note: Rotation doesn't occur until necessary. Note: Only applicable to horizontal scales.
   * @default 50
   */
  maxRotation: number;
  /**
   * Flips tick labels around axis, displaying the labels inside the chart instead of outside. Note: Only applicable to vertical scales.
   * @default false
   */
  mirror: boolean;
  /**
   *   Padding between the tick label and the axis. When set on a vertical axis, this applies in the horizontal (X) direction. When set on a horizontal axis, this applies in the vertical (Y) direction.
   * @default 0
   */
  padding: number;
  /**
   * Maximum number of ticks and gridlines to show.
   * @default 11
   */
  maxTicksLimit: number;
}

export interface ScriptableCartesianScaleContext {
  scale: keyof CartesianScaleTypeRegistry;
  type: string;
}

export interface ScriptableChartContext {
  chart: Chart;
  type: string;
}

export interface CartesianScaleOptions extends CoreScaleOptions {
  /**
   * Scale boundary strategy (bypassed by min/max time options)
   * - `data`: make sure data are fully visible, ticks outside are removed
   * - `ticks`: make sure ticks are fully visible, data outside are truncated
   * @since 2.7.0
   * @default 'ticks'
   */
  bounds: 'ticks' | 'data';

  /**
   * Position of the axis.
   */
  position: 'left' | 'top' | 'right' | 'bottom' | 'center' | { [scale: string]: number };

  /**
   * Stack group. Axes at the same `position` with same `stack` are stacked.
   */
  stack?: string;

  /**
   * Weight of the scale in stack group. Used to determine the amount of allocated space for the scale within the group.
   * @default 1
   */
  stackWeight?: number;

  /**
   *   Which type of axis this is. Possible values are: 'x', 'y', 'r'. If not set, this is inferred from the first character of the ID which should be 'x', 'y' or 'r'.
   */
  axis: 'x' | 'y' | 'r';

  /**
   * User defined minimum value for the scale, overrides minimum value from data.
   */
  min: number;

  /**
   * User defined maximum value for the scale, overrides maximum value from data.
   */
  max: number;

  /**
   *   If true, extra space is added to the both edges and the axis is scaled to fit into the chart area. This is set to true for a bar chart by default.
   * @default false
   */
  offset: boolean;

  grid: Partial<GridLineOptions>;

  border: BorderOptions;

  /** Options for the scale title. */
  title: {
    /** If true, displays the axis title. */
    display: boolean;
    /** Alignment of the axis title. */
    align: Align;
    /** The text for the title, e.g. "# of People" or "Response Choices". */
    text: string | string[];
    /** Color of the axis label. */
    color: Color;
    /** Information about the axis title font. */
    font: ScriptableAndScriptableOptions<Partial<FontSpec>, ScriptableCartesianScaleContext>;
    /** Padding to apply around scale labels. */
    padding: number | {
      /** Padding on the (relative) top side of this axis label. */
      top: number;
      /** Padding on the (relative) bottom side of this axis label. */
      bottom: number;
      /** This is a shorthand for defining top/bottom to the same values. */
      y: number;
    };
  };

  /**
   *   If true, data will be comprised between datasets of data
   * @default false
   */
  stacked?: boolean | 'single';

  ticks: CartesianTickOptions;
}

export type CategoryScaleOptions = Omit<CartesianScaleOptions, 'min' | 'max'> & {
  min: string | number;
  max: string | number;
  labels: string[] | string[][];
};

export type LinearScaleOptions = CartesianScaleOptions & {

  /**
   *  if true, scale will include 0 if it is not already included.
   * @default true
   */
  beginAtZero: boolean;
  /**
   * Adjustment used when calculating the minimum data value.
   */
  suggestedMin?: number;
  /**
   * Adjustment used when calculating the maximum data value.
   */
  suggestedMax?: number;
  /**
  * Percentage (string ending with %) or amount (number) for added room in the scale range above and below data.
  */
  grace?: string | number;

  ticks: {
    /**
     * The Intl.NumberFormat options used by the default label formatter
     */
    format: Intl.NumberFormatOptions;

    /**
     * if defined and stepSize is not specified, the step size will be rounded to this many decimal places.
     */
    precision: number;

    /**
     * User defined fixed step size for the scale
     */
    stepSize: number;

    /**
     * User defined count of ticks
     */
    count: number;
  };
};

export type LogarithmicScaleOptions = CartesianScaleOptions & {
  /**
   * Adjustment used when calculating the maximum data value.
   */
  suggestedMin?: number;
  /**
   * Adjustment used when calculating the minimum data value.
   */
  suggestedMax?: number;

  ticks: {
    /**
     * The Intl.NumberFormat options used by the default label formatter
     */
    format: Intl.NumberFormatOptions;
  };
};

export type TimeScaleTimeOptions = {
  /**
   * Custom parser for dates.
   */
  parser: string | ((v: unknown) => number);
  /**
   * If defined, dates will be rounded to the start of this unit. See Time Units below for the allowed units.
   */
  round: false | TimeUnit;
  /**
   * If boolean and true and the unit is set to 'week', then the first day of the week will be Monday. Otherwise, it will be Sunday.
   * If `number`, the index of the first day of the week (0 - Sunday, 6 - Saturday).
   * @default false
   */
  isoWeekday: boolean | number;
  /**
   * Sets how different time units are displayed.
   */
  displayFormats: {
    [key: string]: string;
  };
  /**
   * The format string to use for the tooltip.
   */
  tooltipFormat: string;
  /**
   * If defined, will force the unit to be a certain type. See Time Units section below for details.
   * @default false
   */
  unit: false | TimeUnit;
  /**
   * The minimum display format to be used for a time unit.
   * @default 'millisecond'
   */
  minUnit: TimeUnit;
};

export type TimeScaleTickOptions = {
  /**
   * Ticks generation input values:
   * - 'auto': generates "optimal" ticks based on scale size and time options.
   * - 'data': generates ticks from data (including labels from data `{t|x|y}` objects).
   * - 'labels': generates ticks from user given `data.labels` values ONLY.
   * @see https://github.com/chartjs/Chart.js/pull/4507
   * @since 2.7.0
   * @default 'auto'
   */
  source: 'labels' | 'auto' | 'data';
  /**
   * The number of units between grid lines.
   * @default 1
   */
  stepSize: number;
};

export type TimeScaleOptions = Omit<CartesianScaleOptions, 'min' | 'max'> & {
  min: string | number;
  max: string | number;
  suggestedMin: string | number;
  suggestedMax: string | number;
  /**
   * Scale boundary strategy (bypassed by min/max time options)
   * - `data`: make sure data are fully visible, ticks outside are removed
   * - `ticks`: make sure ticks are fully visible, data outside are truncated
   * @since 2.7.0
   * @default 'data'
   */
  bounds: 'ticks' | 'data';

  /**
   * If true, bar chart offsets are computed with skipped tick sizes
   * @since 3.8.0
   * @default false
   */
  offsetAfterAutoskip: boolean;

  /**
   * options for creating a new adapter instance
   */
  adapters: {
    date: unknown;
  };

  time: TimeScaleTimeOptions;

  ticks: TimeScaleTickOptions;
};

export type RadialTickOptions = TickOptions & {
  /**
   * The Intl.NumberFormat options used by the default label formatter
   */
  format: Intl.NumberFormatOptions;

  /**
   * Maximum number of ticks and gridlines to show.
   * @default 11
   */
  maxTicksLimit: number;

  /**
   * if defined and stepSize is not specified, the step size will be rounded to this many decimal places.
   */
  precision: number;

  /**
   * User defined fixed step size for the scale.
   */
  stepSize: number;

  /**
   * User defined number of ticks
   */
  count: number;
}

export type RadialLinearScaleOptions = CoreScaleOptions & {
  animate: boolean;

  startAngle: number;

  angleLines: {
    /**
     * if true, angle lines are shown.
     * @default true
     */
    display: boolean;
    /**
     * Color of angled lines.
     * @default 'rgba(0, 0, 0, 0.1)'
     */
    color: Scriptable<Color, ScriptableScaleContext>;
    /**
     * Width of angled lines.
     * @default 1
     */
    lineWidth: Scriptable<number, ScriptableScaleContext>;
    /**
     * Length and spacing of dashes on angled lines. See MDN.
     * @default []
     */
    borderDash: Scriptable<number[], ScriptableScaleContext>;
    /**
     * Offset for line dashes. See MDN.
     * @default 0
     */
    borderDashOffset: Scriptable<number, ScriptableScaleContext>;
  };

  /**
   * if true, scale will include 0 if it is not already included.
   * @default false
   */
  beginAtZero: boolean;

  grid: Partial<GridLineOptions>;

  /**
   * User defined minimum number for the scale, overrides minimum value from data.
   */
  min: number;
  /**
   * User defined maximum number for the scale, overrides maximum value from data.
   */
  max: number;

  pointLabels: {
    /**
     * Background color of the point label.
     * @default undefined
     */
    backdropColor: Scriptable<Color, ScriptableScalePointLabelContext>;
    /**
     * Padding of label backdrop.
     * @default 2
     */
    backdropPadding: Scriptable<number | ChartArea, ScriptableScalePointLabelContext>;

    /**
     * Border radius
     * @default 0
     * @since 3.8.0
     */
    borderRadius: Scriptable<number | BorderRadius, ScriptableScalePointLabelContext>;

    /**
     * if true, point labels are shown. When `display: 'auto'`, the label is hidden if it overlaps with another label.
     * @default true
     */
    display: boolean | 'auto';
    /**
     * Color of label
     * @see Defaults.color
     */
    color: Scriptable<Color, ScriptableScalePointLabelContext>;
    /**
     */
    font: ScriptableAndScriptableOptions<Partial<FontSpec>, ScriptableScalePointLabelContext>;

    /**
     * Callback function to transform data labels to point labels. The default implementation simply returns the current string.
     */
    callback: (label: string, index: number) => string | string[] | number | number[];

    /**
     * Padding around the pointLabels
     * @default 5
     */
    padding: Scriptable<number, ScriptableScalePointLabelContext>;

    /**
     * if true, point labels are centered.
     * @default false
     */
    centerPointLabels: boolean;
  };

  /**
   * Adjustment used when calculating the maximum data value.
   */
  suggestedMax: number;
  /**
   * Adjustment used when calculating the minimum data value.
   */
  suggestedMin: number;

  ticks: RadialTickOptions;
};

export interface CartesianScaleTypeRegistry {
  linear: {
    options: LinearScaleOptions;
  };
  logarithmic: {
    options: LogarithmicScaleOptions;
  };
  category: {
    options: CategoryScaleOptions;
  };
  time: {
    options: TimeScaleOptions;
  };
  timeseries: {
    options: TimeScaleOptions;
  };
}

export interface RadialScaleTypeRegistry {
  radialLinear: {
    options: RadialLinearScaleOptions;
  };
}

export interface ScaleTypeRegistry extends CartesianScaleTypeRegistry, RadialScaleTypeRegistry {
}

export type ScaleType = keyof ScaleTypeRegistry;

export interface CartesianParsedData extends Point {
  // Only specified when stacked bars are enabled
  _stacks?: {
    // Key is the stack ID which is generally the axis ID
    [key: string]: {
      // Inner key is the datasetIndex
      [key: number]: number;
    }
  }
}

export interface BarParsedData extends CartesianParsedData {
  // Only specified if floating bars are show
  _custom?: {
    barStart: number;
    barEnd: number;
    start: number;
    end: number;
    min: number;
    max: number;
  }
}

export interface BubbleParsedData extends CartesianParsedData {
  // The bubble radius value
  _custom: number;
}

export interface RadialParsedData {
  r: number;
}

export interface ChartTypeRegistry {
  bar: {
    chartOptions: BarControllerChartOptions;
    datasetOptions: BarControllerDatasetOptions;
    defaultDataPoint: number | [number, number] | null;
    metaExtensions: {};
    parsedDataType: BarParsedData,
    scales: keyof CartesianScaleTypeRegistry;
  };
  line: {
    chartOptions: LineControllerChartOptions;
    datasetOptions: LineControllerDatasetOptions & FillerControllerDatasetOptions;
    defaultDataPoint: ScatterDataPoint | number | null;
    metaExtensions: {};
    parsedDataType: CartesianParsedData;
    scales: keyof CartesianScaleTypeRegistry;
  };
  scatter: {
    chartOptions: ScatterControllerChartOptions;
    datasetOptions: ScatterControllerDatasetOptions;
    defaultDataPoint: ScatterDataPoint | number | null;
    metaExtensions: {};
    parsedDataType: CartesianParsedData;
    scales: keyof CartesianScaleTypeRegistry;
  };
  bubble: {
    chartOptions: unknown;
    datasetOptions: BubbleControllerDatasetOptions;
    defaultDataPoint: BubbleDataPoint;
    metaExtensions: {};
    parsedDataType: BubbleParsedData;
    scales: keyof CartesianScaleTypeRegistry;
  };
  pie: {
    chartOptions: PieControllerChartOptions;
    datasetOptions: PieControllerDatasetOptions;
    defaultDataPoint: PieDataPoint;
    metaExtensions: PieMetaExtensions;
    parsedDataType: number;
    scales: keyof CartesianScaleTypeRegistry;
  };
  doughnut: {
    chartOptions: DoughnutControllerChartOptions;
    datasetOptions: DoughnutControllerDatasetOptions;
    defaultDataPoint: DoughnutDataPoint;
    metaExtensions: DoughnutMetaExtensions;
    parsedDataType: number;
    scales: keyof CartesianScaleTypeRegistry;
  };
  polarArea: {
    chartOptions: PolarAreaControllerChartOptions;
    datasetOptions: PolarAreaControllerDatasetOptions;
    defaultDataPoint: number;
    metaExtensions: {};
    parsedDataType: RadialParsedData;
    scales: keyof RadialScaleTypeRegistry;
  };
  radar: {
    chartOptions: RadarControllerChartOptions;
    datasetOptions: RadarControllerDatasetOptions & FillerControllerDatasetOptions;
    defaultDataPoint: number | null;
    metaExtensions: {};
    parsedDataType: RadialParsedData;
    scales: keyof RadialScaleTypeRegistry;
  };
}

export type ChartType = keyof ChartTypeRegistry;

export type ScaleOptionsByType<TScale extends ScaleType = ScaleType> =
  { [key in ScaleType]: { type: key } & ScaleTypeRegistry[key]['options'] }[TScale]
;

export type DatasetChartOptions<TType extends ChartType = ChartType> = {
  [key in TType]: {
    datasets: ChartTypeRegistry[key]['datasetOptions'];
  };
};

export type ScaleChartOptions<TType extends ChartType = ChartType> = {
  scales: {
    [key: string]: ScaleOptionsByType<ChartTypeRegistry[TType]['scales']>;
  };
};

export type ChartOptions<TType extends ChartType = ChartType> = Exclude<
DeepPartial<
CoreChartOptions<TType> &
ElementChartOptions<TType> &
PluginChartOptions<TType> &
DatasetChartOptions<TType> &
ScaleChartOptions<TType> &
ChartTypeRegistry[TType]['chartOptions']
>,
DeepPartial<unknown[]>
>;

export type DefaultDataPoint<TType extends ChartType> = DistributiveArray<ChartTypeRegistry[TType]['defaultDataPoint']>;

export type ParsedDataType<TType extends ChartType = ChartType> = ChartTypeRegistry[TType]['parsedDataType'];

export interface ChartDatasetProperties<TType extends ChartType, TData> {
  type?: TType;
  data: TData;
}

export interface ChartDatasetPropertiesCustomTypesPerDataset<TType extends ChartType, TData> {
  type: TType;
  data: TData;
}

export type ChartDataset<
  TType extends ChartType = ChartType,
  TData = DefaultDataPoint<TType>
> = DeepPartial<
{ [key in ChartType]: { type: key } & ChartTypeRegistry[key]['datasetOptions'] }[TType]
> & DeepPartial<
PluginDatasetOptionsByType<TType>
> & ChartDatasetProperties<TType, TData>;

export type ChartDatasetCustomTypesPerDataset<
  TType extends ChartType = ChartType,
  TData = DefaultDataPoint<TType>
> = DeepPartial<
{ [key in ChartType]: { type: key } & ChartTypeRegistry[key]['datasetOptions'] }[TType]
> & DeepPartial<
PluginDatasetOptionsByType<TType>
> & ChartDatasetPropertiesCustomTypesPerDataset<TType, TData>;

/**
 * TData represents the data point type. If unspecified, a default is provided
 *   based on the chart type.
 * TLabel represents the label type
 */
export interface ChartData<
  TType extends ChartType = ChartType,
  TData = DefaultDataPoint<TType>,
  TLabel = unknown
> {
  labels?: TLabel[];
  xLabels?: TLabel[];
  yLabels?: TLabel[];
  datasets: ChartDataset<TType, TData>[];
}

export interface ChartDataCustomTypesPerDataset<
  TType extends ChartType = ChartType,
  TData = DefaultDataPoint<TType>,
  TLabel = unknown
> {
  labels?: TLabel[];
  xLabels?: TLabel[];
  yLabels?: TLabel[];
  datasets: ChartDatasetCustomTypesPerDataset<TType, TData>[];
}

export interface ChartConfiguration<
  TType extends ChartType = ChartType,
  TData = DefaultDataPoint<TType>,
  TLabel = unknown
> {
  type: TType;
  data: ChartData<TType, TData, TLabel>;
  options?: ChartOptions<TType> | undefined;
  plugins?: Plugin<TType>[];
  platform?: typeof BasePlatform;
}

export interface ChartConfigurationCustomTypesPerDataset<
  TType extends ChartType = ChartType,
  TData = DefaultDataPoint<TType>,
  TLabel = unknown
> {
  data: ChartDataCustomTypesPerDataset<TType, TData, TLabel>;
  options?: ChartOptions<TType> | undefined;
  plugins?: Plugin<TType>[];
}

export interface IWidgetChartProp<T> {
  //<Widget.BarChart
  data: T
  type: 'BarChart' | 'LineChart' | 'PieChart'| 'RadarChart'| 'PolarAreaChart' | 'DoughnutChart'
  label: string
  id?: string
  info?: string
  aspectRatio?: number
  height?: Property.Height
  enableExportButton?: boolean
  isLoading?: boolean
  colors: {
    labels: string
    gridLines: string
  }
  containerProps?:IContainerProps$1;
  horizontal?:boolean;
  isDarkMode: boolean
  centerDisplay?: (total: number) => string
  enableMultipleDatasets?: boolean
}

export type IBarChartProps = IWidgetData<ChartData<'bar'>>
export type ILineChartProps = IWidgetData<ChartData<'line'>>
export type IPieChartProps = IWidgetData<ChartData<'pie'>>
export type IRadarChartProps = IWidgetData<ChartData<'radar'>>
export type IPolarAreaChartProps = IWidgetData<ChartData<'polarArea'>>
export type IDoughnutChartProps = IWidgetData<ChartData<'doughnut'>>

export type IWidgetBarIncomingProp = IWidgetChartProp<IBarChartProps> //<Widget.Bar
export type IWidgetLineIncomingProp = IWidgetChartProp<ILineChartProps> //<Widget.Line
export type IWidgetPieIncomingProp = IWidgetChartProp<IPieChartProps> //<Widget.Pie
export type IWidgetRadarIncomingProp = IWidgetChartProp<IRadarChartProps> //<Widget.Pie
export type IWidgetPolarAreaIncomingProp = IWidgetChartProp<IPolarAreaChartProps> //<Widget.Pie
export type IWidgetDoughnutIncomingProp = IWidgetChartProp<IDoughnutChartProps> //<Widget

export interface IStats {
  label: string
  stats: {
    label: string
    value: number
  }[]
}

export interface settings1 {
  [x: string]: any
}

export interface settings2 {
  label: string
  value: settings1
}

export interface IWidgetData<T> {
  data: T
  stats?: IStats[]
  datasets?: {
    fixedOptions: settings1
    variableOptions: settings2[]
  }
  settings?: {
    [x: string]: any
  }
}

// Base, platform-agnostic
export interface ILoaderProps<
    TColor = string,
    TStyle = unknown,
    TLocal = Record<string, unknown>
> {
    localProps?: TLocal;
    animating?: boolean;
    /** The foreground color of the spinner (default is gray). */
    color?: TColor;
    /** Hide when not animating (true by default). */
    hidesWhenStopped?: boolean;
    /**
     * Size of the indicator.
     * Small ~20px, large ~36px.
     */
    size?: number | 'small' | 'large';
    style?: TStyle;
}

export interface IIconProps extends IStyleClasses {
    name: IconName | ElementType;
    size?: '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    color?: string;
    strokeWidth?: number;
}

export type IconName =
    | "address-book"
    | "align-center"
    | "align-justify"
    | "align-left"
    | "align-right"
    | "amazon"
    | "android"
    | "angle-double-down"
    | "angle-double-left"
    | "angle-double-right"
    | "angle-double-up"
    | "angle-down"
    | "angle-left"
    | "angle-right"
    | "angle-up"
    | "apple"
    | "arrow-circle-down"
    | "arrow-circle-left"
    | "arrow-circle-right"
    | "arrow-circle-up"
    | "arrow-down"
    | "arrow-down-left"
    | "arrow-down-left-and-arrow-up-right-to-center"
    | "arrow-down-right"
    | "arrow-left"
    | "arrow-right"
    | "arrow-right-arrow-left"
    | "arrow-up"
    | "arrow-up-left"
    | "arrow-up-right"
    | "arrow-up-right-and-arrow-down-left-from-center"
    | "arrows-alt"
    | "arrows-h"
    | "arrows-v"
    | "asterisk"
    | "at"
    | "backward"
    | "ban"
    | "barcode"
    | "bars"
    | "bell"
    | "bell-slash"
    | "bitcoin"
    | "bolt"
    | "book"
    | "bookmark"
    | "bookmark-fill"
    | "box"
    | "briefcase"
    | "building"
    | "building-columns"
    | "bullseye"
    | "calculator"
    | "calendar"
    | "calendar-clock"
    | "calendar-minus"
    | "calendar-plus"
    | "calendar-times"
    | "camera"
    | "car"
    | "caret-down"
    | "caret-left"
    | "caret-right"
    | "caret-up"
    | "cart-arrow-down"
    | "cart-minus"
    | "cart-plus"
    | "chart-bar"
    | "chart-line"
    | "chart-pie"
    | "chart-scatter"
    | "check"
    | "check-circle"
    | "check-square"
    | "chevron-circle-down"
    | "chevron-circle-left"
    | "chevron-circle-right"
    | "chevron-circle-up"
    | "chevron-down"
    | "chevron-left"
    | "chevron-right"
    | "chevron-up"
    | "circle"
    | "circle-fill"
    | "clipboard"
    | "clock"
    | "clone"
    | "cloud"
    | "cloud-download"
    | "cloud-upload"
    | "code"
    | "cog"
    | "comment"
    | "comments"
    | "compass"
    | "copy"
    | "credit-card"
    | "crown"
    | "database"
    | "delete-left"
    | "desktop"
    | "directions"
    | "directions-alt"
    | "discord"
    | "dollar"
    | "download"
    | "eject"
    | "ellipsis-h"
    | "ellipsis-v"
    | "envelope"
    | "equals"
    | "eraser"
    | "ethereum"
    | "euro"
    | "exclamation-circle"
    | "exclamation-triangle"
    | "expand"
    | "external-link"
    | "eye"
    | "eye-slash"
    | "face-smile"
    | "facebook"
    | "fast-backward"
    | "fast-forward"
    | "file"
    | "file-arrow-up"
    | "file-check"
    | "file-edit"
    | "file-excel"
    | "file-export"
    | "file-import"
    | "file-pdf"
    | "file-plus"
    | "file-word"
    | "filter"
    | "filter-fill"
    | "filter-slash"
    | "flag"
    | "flag-fill"
    | "folder"
    | "folder-open"
    | "folder-plus"
    | "forward"
    | "gauge"
    | "gift"
    | "github"
    | "globe"
    | "google"
    | "graduation-cap"
    | "hammer"
    | "hashtag"
    | "headphones"
    | "heart"
    | "heart-fill"
    | "history"
    | "home"
    | "hourglass"
    | "id-card"
    | "image"
    | "images"
    | "inbox"
    | "indian-rupee"
    | "info"
    | "info-circle"
    | "instagram"
    | "key"
    | "language"
    | "lightbulb"
    | "link"
    | "linkedin"
    | "list"
    | "list-check"
    | "lock"
    | "lock-open"
    | "map"
    | "map-marker"
    | "mars"
    | "megaphone"
    | "microchip"
    | "microchip-ai"
    | "microphone"
    | "microsoft"
    | "minus"
    | "minus-circle"
    | "mobile"
    | "money-bill"
    | "moon"
    | "objects-column"
    | "palette"
    | "paperclip"
    | "pause"
    | "pause-circle"
    | "paypal"
    | "pen-to-square"
    | "pencil"
    | "percentage"
    | "phone"
    | "pinterest"
    | "play"
    | "play-circle"
    | "plus"
    | "plus-circle"
    | "pound"
    | "power-off"
    | "prime"
    | "print"
    | "qrcode"
    | "question"
    | "question-circle"
    | "receipt"
    | "reddit"
    | "refresh"
    | "replay"
    | "reply"
    | "save"
    | "search"
    | "search-minus"
    | "search-plus"
    | "send"
    | "server"
    | "share-alt"
    | "shield"
    | "shop"
    | "shopping-bag"
    | "shopping-cart"
    | "sign-in"
    | "sign-out"
    | "sitemap"
    | "slack"
    | "sliders-h"
    | "sliders-v"
    | "sort"
    | "sort-alpha-down"
    | "sort-alpha-down-alt"
    | "sort-alpha-up"
    | "sort-alpha-up-alt"
    | "sort-alt"
    | "sort-alt-slash"
    | "sort-amount-down"
    | "sort-amount-down-alt"
    | "sort-amount-up"
    | "sort-amount-up-alt"
    | "sort-down"
    | "sort-down-fill"
    | "sort-numeric-down"
    | "sort-numeric-down-alt"
    | "sort-numeric-up"
    | "sort-numeric-up-alt"
    | "sort-up"
    | "sort-up-fill"
    | "sparkles"
    | "spinner"
    | "spinner-dotted"
    | "star"
    | "star-fill"
    | "star-half"
    | "star-half-fill"
    | "step-backward"
    | "step-backward-alt"
    | "step-forward"
    | "step-forward-alt"
    | "stop"
    | "stop-circle"
    | "stopwatch"
    | "sun"
    | "sync"
    | "table"
    | "tablet"
    | "tag"
    | "tags"
    | "telegram"
    | "th-large"
    | "thumbs-down"
    | "thumbs-down-fill"
    | "thumbs-up"
    | "thumbs-up-fill"
    | "thumbtack"
    | "ticket"
    | "tiktok"
    | "times"
    | "times-circle"
    | "trash"
    | "trophy"
    | "truck"
    | "turkish-lira"
    | "twitch"
    | "twitter"
    | "undo"
    | "unlock"
    | "upload"
    | "user"
    | "user-edit"
    | "user-minus"
    | "user-plus"
    | "users"
    | "venus"
    | "verified"
    | "video"
    | "vimeo"
    | "volume-down"
    | "volume-off"
    | "volume-up"
    | "wallet"
    | "warehouse"
    | "wave-pulse"
    | "whatsapp"
    | "wifi"
    | "window-maximize"
    | "window-minimize"
    | "wrench"
    | `pi pi-${string}`

/**
 * Language structure
 */
export type ILanguage = {
    lang: string; // e.g. 'en', 'ar', 'es', ...
    translations: Record<string, string>;
};
/**
 * Locale context props
 */
export interface ILocaleContextProps {
    languages?: ILanguage[];
    defaultLanguage?: string;
    onChangeLanguage?: (language: string) => void;
}

/**
 * Locale context values
 */
export interface ILocaleContextValues {
    changeLanguage(key: string | null): void;
    t(key: string, ...params: (number | string)[]): string;
    isKeyExists(key: string): boolean;
    currentLanguage: string;
    isRTL: boolean;
}

export interface IThemeContextProps {
    theme: 'light' | 'dark';
    kitsTheme?: KitsThemeOverride;
}

export interface IThemeContextValues {
    switchTheme(themeFile?: string): void;
    theme: 'light' | 'dark';
}

/** Avatar display config for the header user trigger. */
export interface IUserAvatar {
    /** Initials text, e.g. "FA" */
    label?: string;
    /** Photo URL — takes priority over label when provided */
    image?: string;
    /** Background color for the initials avatar (hex or CSS variable) */
    color?: string;
}

// Generic placeholders for non-cross-platform UI and theme types.
export interface IMainContextProps<
    TMenuItem = any,
    TTheme = any,
    TComponent = JSX.Element
> {
    renderRouter?: boolean;
    onLogOut?: () => void;
    languages?: ILanguage[];
    menuItems?: TMenuItem[];
    defaultLanguage?: string;
    logo?: TComponent;
    theme?: TTheme;
    /** KitsConcerto theme override — colors, spacing, radii, component defaults, etc. */
    kitsTheme?: KitsThemeOverride;
    nonAuthRoutes?: TMenuItem[];
    authedRoutes?: TMenuItem[];
    permissions?: string[] | null;
    onChangeLanguage?: (language: string) => void;
    /** Avatar config for the header user menu trigger */
    userAvatar?: IUserAvatar;
    ref?:Ref<any>
}

export interface IMainContextValues<TMenuItem = any, TComponent = JSX.Element> {
    onLogOut?: () => void;
    logo?: TComponent;
    menuItems?: TMenuItem[];
    /** Avatar config for the header user menu trigger */
    userAvatar?: IUserAvatar;
    mq: {
        isSmall: boolean;
        isTablet: boolean;
        isDesktop: boolean;
        isLandscape: boolean;
        isPortrait: boolean;
    };
    appendToHeader?: (element: ReactNode) => void;
}

export type UseDisclosureReturnType = {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
    onToggle: () => void;
};

declare const Box: ({ children, ref, ...props }: PropsWithChildren<IFlexComponent>) => react_jsx_runtime.JSX.Element;

declare const Text: React__default.FC<ITextComponent>;

declare const Heading: React__default.FC<IHeadingComponent>;

declare const Image: ({ ref, ...props }: IImageComponent) => react_jsx_runtime.JSX.Element;

declare function Icon({ name, size, color, strokeWidth, ...rest }: IIconProps): react_jsx_runtime.JSX.Element;

export type WebLoaderProps = ILoaderProps<Property.Color, Properties, any>;
declare const Loader: (props: WebLoaderProps) => react_jsx_runtime.JSX.Element;

declare const Divider: React__default.FC<IDividerComponent>;

declare const SkeletonText$1: React__default.FC<ISkeleton>;

declare const Svg: ({ className, children, ref, ...props }: PropsWithChildren<ISVGComponent>) => react_jsx_runtime.JSX.Element;

declare const Link: React__default.FC<ILinkComponent>;

/**
 * Card component — self-contained, no PrimeReact dependency.
 *
 * Theme element slots via kitsTheme.components.Card:
 *   root     — outer container (goes through ResponsiveElement)
 *   header   — header wrapper div (styled via ResponsiveElement)
 *   title    — title wrapper (styled via ResponsiveElement)
 *   subTitle — subtitle wrapper (styled via ResponsiveElement)
 *   content  — children wrapper (styled via ResponsiveElement)
 *   footer   — footer wrapper (styled via ResponsiveElement)
 *
 * All slot styles go through the full KitsConcerto CSS pipeline,
 * supporting shorthand props (p, m, px, etc.), theme tokens (color="primary"),
 * pseudo-classes (_hover), and responsive values.
 */
declare const Card: (rawProps: ICardComponent<Record<string, any>>) => react_jsx_runtime.JSX.Element;

declare const Grid: React__default.ForwardRefExoticComponent<Omit<React__default.PropsWithChildren<IGridComponent>, "ref"> & React__default.RefAttributes<any>>;

declare const GridItem: React__default.ForwardRefExoticComponent<Omit<React__default.PropsWithChildren<IGridItemComponent>, "ref"> & React__default.RefAttributes<any>>;

declare const Flex: {
    ({ className, children, ref, ...props }: PropsWithChildren<IFlexComponent>): react_jsx_runtime.JSX.Element;
    displayName: string;
};

declare const Center: ({ className, children, ref, ...props }: PropsWithChildren<IFlexComponent>) => react_jsx_runtime.JSX.Element;

declare const Collapse: React__default.FC<ICollapseProps>;

declare const List: ({ className, children, ref, ...props }: PropsWithChildren<IFlexComponent>) => react_jsx_runtime.JSX.Element;

declare const ListItem: ({ className, children, ref, ...props }: PropsWithChildren<IFlexComponent>) => react_jsx_runtime.JSX.Element;

declare const HStack: React__default.FC<PropsWithChildren<IStackProps>>;

declare const VStack: React__default.FC<PropsWithChildren<IStackProps>>;

declare const KitsScrollView: ({ children, ref, ...props }: PropsWithChildren<IScrollViewComponent>) => react_jsx_runtime.JSX.Element;

declare const KitsAnimatePresence: ({ children }: React__default.PropsWithChildren) => react_jsx_runtime.JSX.Element;

export interface IContainerProps extends IFlexComponent {
    title?: ReactNode | string;
    rightElement?: ReactNode | string;
    childrenContainerProps?: IFlexComponent;
}
declare const Container: FunctionComponent<PropsWithChildren<IContainerProps>>;

export interface IHeader {
    setHide: (hide: boolean) => void;
    hide: boolean;
    ref?: React__default.Ref<IHeaderRef>;
    routes: RouteObject[];
}
export interface IHeaderRef {
    appendToHeader: (element: ReactNode) => void;
}
declare const Header: ({ setHide, hide, ref, routes }: IHeader) => react_jsx_runtime.JSX.Element;

export interface ILTRProps$1 {
    routes: IMenuItem[];
    headerRef: Ref<IHeaderRef | null>;
}
declare const AdminLayout: ({ routes, headerRef }: ILTRProps$1) => react_jsx_runtime.JSX.Element;

export interface ILTRProps {
    routes: IMenuItem[];
}
declare const AuthLayout: ({ routes }: ILTRProps) => react_jsx_runtime.JSX.Element;

declare function Button(rawProps: IButtonProps<IconName | string | React__default.ReactNode>): react_jsx_runtime.JSX.Element;

/**
 * Badge component — no PrimeReact dependency.
 *
 * icon prop supports:
 *   - "dot"                → pulsing severity-colored circle
 *   - "check-circle-2"    → lucide icon name from IconMap
 *   - "pi pi-check"       → PrimeReact icon class string
 *   - <MyIcon size={14}/> → React element
 *
 * severity drives colors via kitsTheme severity system.
 * Default style: tinted background (bgTint) + dark text (text) + border.
 * outlined: transparent bg + solid text + solid border.
 */
declare function Badge(rawProps: IBadgeProps): react_jsx_runtime.JSX.Element;

declare const CustomAccordion: ({ accordionTitle, accordionItems, isLoading, allOpenedByDefault, localProps, }: IAccordionProps) => react_jsx_runtime.JSX.Element;

declare const AlertIcon: React__default.FC<{
    status: IAlertComponent["status"];
}>;
declare const AlertTitle: React__default.FC<{
    children: React__default.ReactNode;
}>;
declare const AlertDescription: React__default.FC<{
    children: React__default.ReactNode;
}>;

declare const Alert: ({ status, variant, className, withIcon, children, title, description }: IAlertProps) => react_jsx_runtime.JSX.Element;

declare const AppBreadcrumb: () => react_jsx_runtime.JSX.Element;

declare function KitsDialogControlled({ state, onHide }: IKitsDialogControlled): react_jsx_runtime.JSX.Element;

declare function KitsConfirm(props: IConfirmDialogProps): react_jsx_runtime.JSX.Element;

declare function KitsConfirmPopup(props: IConfirmPopupProps & {
    onHide?: () => void;
}): react_jsx_runtime.JSX.Element;

declare const KitsToast: ({ ref }: {
    ref?: Ref<IKitsToastRef>;
}) => react_jsx_runtime.JSX.Element;

declare const Tooltip: ({ children, label, tooltipProps, ...props }: TooltipProps) => react_jsx_runtime.JSX.Element;

declare const CustomPopover: FC<IPopoverProps>;

declare const SkeletonRows: ({ rowsLength, isTable, }: ISkeletonRowsProps) => react_jsx_runtime.JSX.Element;

declare const SkeletonText: React__default.FC<ISkeletonText>;

declare const DetailList: <T extends Record<string, any>>({ title, description, data, items, headerActions, itemActions, }: IDetailListProps<T>) => react_jsx_runtime.JSX.Element;

declare const CircularProgress: React__default.FC<ICircularProgressProps>;

declare const Translate: ({ label, children }: PropsWithChildren<ITranslateComponent>) => react_jsx_runtime.JSX.Element;

/**
 * KitsContainer — wraps all form inputs with label, addons, helper text, and errors.
 *
 * Supports element-level styling via the `elementStyles` prop, which is passed
 * from the parent form input component (resolved from theme.components[name].elements).
 *
 * Element slots applied here:
 *   container  → outer Flex wrapper
 *   label      → Label component
 *   inputGroup → input group Flex (around addons + input)
 *   leftAddon  → left addon wrapper
 *   rightAddon → right addon wrapper
 *   helperText → helper text element
 *   error      → error message element
 *
 * The `root` slot is NOT applied here — it is applied by the parent form input
 * component directly to the PrimeReact/native input element.
 */
declare const KitsContainer: FC<PropsWithChildren<IKitsContainer>>;

declare const KitsInputText: ({ ref, ...rawProps }: IKitsInputText) => react_jsx_runtime.JSX.Element;

declare const KitsInputNumber: ({ ref, ...rawProps }: IKitsInputNumber) => react_jsx_runtime.JSX.Element;

declare const KitsInputMask: ({ ref, ...rawProps }: IKitsInputMask) => react_jsx_runtime.JSX.Element;

/**
 * Web version of KitsInputColorPicker. Uses Primereact's ColorPicker.
 */
declare const KitsInputColorPicker: ({ ref, ...rawProps }: IKitsInputColorPicker) => react_jsx_runtime.JSX.Element;

declare const KitsInputTextarea: ({ ref, ...rawProps }: IKitsInputTextarea) => react_jsx_runtime.JSX.Element;

declare const KitsInputPassword: ({ ref, ...rawProps }: IKitsInputPassword) => react_jsx_runtime.JSX.Element;

declare const KitsPhoneComponent: ({ ref, ...rawProps }: IKitsPhoneInput) => react_jsx_runtime.JSX.Element;

declare const KitsInputLocation: ({ id, label, errors, invalid, value, hideError, onAddressClick, onChange, disabled, placeholder, countryISO, helperText, provider, api_key, labelKey, valueKey, list, ...rest }: IKitsInputLocation) => react_jsx_runtime.JSX.Element;

declare const KitsInputCalendar: <T = CalendarProps>({ ref, ...rawProps }: IKitsInputCalendar<T>) => react_jsx_runtime.JSX.Element;

declare const KitsInputSwitch: React__default.FC<IKitsInputSwitch>;

declare const KitsSliders: FC<ISliderProps>;

declare const Editable: FC<IEditableProps>;

declare const KitsCheckbox: <T>({ ref, ...rawProps }: IKitsCheckboxProps<T>) => react_jsx_runtime.JSX.Element;

declare const KitsRadio: <T>({ ref, ...rawProps }: IKitsRadioProps<T>) => react_jsx_runtime.JSX.Element;

declare const SelectButton: (props: SelectButtonProps) => react_jsx_runtime.JSX.Element;

declare const TriStateCheckbox: (props: TriStateCheckboxProps) => react_jsx_runtime.JSX.Element;

declare const KitsAutoComplete: FunctionComponent<IAutoCompleteElement>;
declare const KitsDropdown: FunctionComponent<IDropdownSelect>;
declare const KitsMultiSelect: FunctionComponent<IMultiSelect>;

declare const KitsTreeSelect: FunctionComponent<ITreeSelect>;

declare const KitsListBox: FunctionComponent<IListBoxSelect>;
declare const KitsCascadeSelect: FunctionComponent<ICascadeSelect>;

declare const FormSelect: ({ ref, ...props }: ISelectElement & ISelectType) => react_jsx_runtime.JSX.Element;

declare const FilePicker: FC<IFileUploader<File>>;

declare const Label: FunctionComponent<ILabelProps>;

declare const Form: <T extends FieldValues>({ elements, onSubmit, onInvalidSubmit, outputFormat, id, grid, onChangeSingleValue, onChange, submitButtonProps, onMount, ref, children, animation, style }: IFormComponent<T>) => react_jsx_runtime.JSX.Element;

/**
 * The core logic engine for an individual form field.
 * This hook replaces LogicContext and FormFieldContext. It watches dependencies,
 * calculates all dynamic properties (visibility, disabled state, required status, etc.),
 * and provides the necessary props from react-hook-form.
 *
 * @param {UseFieldLogicProps<T>} props - The element definition and form control.
 * @returns {UseFieldLogicReturn<T>} An object containing all necessary props and states for rendering the field.
 */
declare const useFieldLogic: <T extends FieldValues>({ element: { onDepsChange, ...element }, control, getValues, isFocused, groupField, watchedValues }: UseFieldLogicProps<T>) => UseFieldLogicReturn<T>;

export interface UseFormManagerReturn<T extends FieldValues> {
    /**
     * The original, unmodified methods returned from react-hook-form's useForm hook.
     * This is what gets passed to the FormProvider.
     */
    formMethods: UseFormReturn<T>;
    /**
     * Our custom loading state for the submit button.
     */
    isSubmitting: boolean;
    /**
     * Our wrapped submit handler that manages the isSubmitting state.
     * This is what the <form> element's onSubmit will call.
     */
    handleSubmit: () => void;
    setIsSubmitting: Dispatch<SetStateAction<boolean>>;
}
declare const useFormManager: <T extends FieldValues>({ elements, onSubmit, onInvalidSubmit, id, onChange, onChangeSingleValue, outputFormat }: IFormComponent<T>, isSubmitting: boolean, setIsSubmitting: Dispatch<SetStateAction<boolean>>) => UseFormManagerReturn<T>;

/**
 * Safely retrieves a nested property from an object using a string path (e.g., "a.b[0].c").
 * This is useful for accessing nested form errors from react-hook-form's formState.
 *
 * @param {object} obj The object to query.
 * @param {string} path The string path to the desired property.
 * @returns {any} The value at the specified path, or undefined if not found.
 */
declare const getPropertyByPath: (obj: Record<string, any>, path: string) => any;
export interface FileValidationProps {
    min?: number;
    max?: number;
    minKB?: number;
    maxKB?: number;
}
/**
 * A custom Yup validation test for file and image uploads.
 *
 * Handles all output shapes produced by KitsFilePicker:
 *   - string URL              — existing server file (defaultValue / initialUri)
 *   - {base64, filename, type}  — JSON output (isJsonOutput=true, native & web)
 *   - {uri, name, type?, size?} — FormData output on native
 *   - DOM File instance         — FormData output on web
 */
declare const formFileValidation: ({ min, max, minKB, maxKB }?: FileValidationProps) => Yup.MixedSchema<any, AnyObject$1, any>;
/**
 * Recursively checks for duplicate field IDs at each level of the element tree.
 * Throws an error if a duplicate is found.
 * @param fields The array of elements to check.
 */
declare const checkNameDuplication: (fields: IFormElement<any>[]) => void;
/**
 * Recursively builds the initial `defaultValues` object for react-hook-form.
 * @param fields The array of elements to process.
 * @returns An object with the form's default values.
 */
declare const getDefaultValues: (fields: IFormElement<any>[]) => Record<string, any>;
/**
 * Recursively collects the IDs of all child elements inside Combined elements.
 * These IDs are internal to the Combined and should not appear in the form's output data.
 */
declare const getCombinedChildIds: (fields: IFormElement<any>[]) => Set<string>;

/**
 * Recursively builds a Yup validation schema from an array of form element definitions.
 *
 * @param {IFormElement<T>[]} elements - The array of element configurations.
 * @param id
 * @returns {Yup.ObjectSchema<any>} A Yup object schema representing the form structure.
 */
declare const schemaBuilder: <T extends FieldValues>(elements: IFormElement<T>[], id: string) => Yup.ObjectSchema<any>;

declare function dynamicList<T extends FieldValues>(element: IFormElement<T>, watchedValues: any[], allFormValues: T, groupField: GroupFieldConfigs<T>["groupField"], ctx: UseFormReturn<T, any, T>): any[];

declare const TableContext: React$1.Context<IDataTableContextValues<any>>;
declare function useTable<T extends Record<string, any> = any>(): IDataTableContextValues<T>;

declare const Datatable: <T extends Record<string, any> = any>({ ref, ...props }: IDataTableProps<T>) => react_jsx_runtime.JSX.Element;

declare const DataViewContext: React__default.Context<IDataViewContextValues>;
declare const DataView: (props: IDataViewProps) => react_jsx_runtime.JSX.Element;

declare const useDataView: () => IDataViewContextValues;

declare const TreeView: <T = any>(props: ITreeViewProps<T>) => react_jsx_runtime.JSX.Element;

declare const Bar: FunctionComponent<Omit<IWidgetBarIncomingProp, 'type' | 'colors' | 'isDarkMode'>>;
declare const Line: FunctionComponent<Omit<IWidgetLineIncomingProp, 'type' | 'colors' | 'isDarkMode'>>;
declare const Pie: FunctionComponent<Omit<IWidgetPieIncomingProp, 'type' | 'colors' | 'isDarkMode'>>;
declare const Radar: FunctionComponent<Omit<IWidgetRadarIncomingProp, 'type' | 'colors' | 'isDarkMode'>>;
declare const PolarArea: FunctionComponent<Omit<IWidgetPolarAreaIncomingProp, 'type' | 'colors' | 'isDarkMode'>>;
declare const Doughnut: FunctionComponent<Omit<IWidgetDoughnutIncomingProp, 'type' | 'colors' | 'isDarkMode'>>;

declare const index_web_Bar: typeof Bar;
declare const index_web_Doughnut: typeof Doughnut;
declare const index_web_Line: typeof Line;
declare const index_web_Pie: typeof Pie;
declare const index_web_PolarArea: typeof PolarArea;
declare const index_web_Radar: typeof Radar;
declare namespace index_web {
  export {
    index_web_Bar as Bar,
    index_web_Doughnut as Doughnut,
    index_web_Line as Line,
    index_web_Pie as Pie,
    index_web_PolarArea as PolarArea,
    index_web_Radar as Radar,
  };
}

export interface ISidebarMenuProps {
    placement: 'rtl' | 'ltr';
    routes: IMenuItem[];
    visible: boolean;
    setVisible: (visible: boolean) => void;
}
declare const SidebarMenu: ({ visible, setVisible, placement, routes }: ISidebarMenuProps) => react_jsx_runtime.JSX.Element;

declare const LocaleContext: React__default.Context<ILocaleContextValues>;
declare const LocaleContextProvider: FC<PropsWithChildren<ILocaleContextProps>>;

export interface KitsThemeProviderProps {
    theme?: KitsThemeOverride;
    children: React__default.ReactNode;
}
declare function KitsThemeProvider({ theme: themeOverride, children }: KitsThemeProviderProps): react_jsx_runtime.JSX.Element;
declare function useKitsTheme(): IKitsThemeContextValues;

declare const ThemeContextProvider: FC<PropsWithChildren<IThemeContextProps>>;

declare const useTheme: () => IThemeContextValues;

declare const MainContext: React__default.Context<IMainContextValues<any, React__default.JSX.Element>>;
declare const MainContextProvider: ({ renderRouter, children, theme, kitsTheme, onLogOut, nonAuthRoutes, menuItems, userAvatar, permissions, logo, languages, defaultLanguage, authedRoutes, onChangeLanguage, ref }: PropsWithChildren<IMainContextProps>) => react_jsx_runtime.JSX.Element;

export interface Ctx {
    confirm: (props: IConfirmDialogProps) => void;
    confirmPopup: (props: IConfirmPopupProps) => void;
    dialog: (props: IDialogState) => void;
    toast: IToastFunction;
    toastDismiss: (position?: ToastPosition) => void;
    toastDismissAll: () => void;
    alert: (message: React__default.ReactNode, opts?: IConfirmDialogProps) => Promise<void>;
    confirmAsync: (opts: IConfirmDialogProps) => Promise<boolean>;
    prompt: (render: (api: {
        resolve: (v: any) => void;
        reject: () => void;
        hide: () => void;
    }) => React__default.ReactNode, opts?: IConfirmDialogProps) => Promise<any>;
}
declare const usePopup: () => Ctx;
declare const useDialog: () => Ctx;

export type BooleanParams = {
    mode: "boolean";
    value?: boolean;
    defaultValue?: boolean;
    onChange?: (checked: boolean) => void;
};
export type TristateParams = {
    mode: "tristate";
    value?: boolean | null;
    defaultValue?: boolean | null;
    onChange?: (val: boolean | null) => void;
};
export type SingleParams<T> = {
    mode: "single";
    value?: T;
    defaultValue?: T;
    onChange?: (val: T) => void;
    allowDeselect?: boolean;
};
export type MultiParams<T> = {
    mode: "multiple";
    value?: T[];
    defaultValue?: T[];
    onChange?: (val: T[]) => void;
};
export type Params<T> = BooleanParams | TristateParams | SingleParams<T> | MultiParams<T>;
declare function useSelectionController<T = string>(params: Params<T>): {
    mode: "boolean" | "multiple" | "single" | "tristate";
    /**
     * The current state.
     * Type: boolean | null | T | T[]
     */
    value: any;
    /**
     * Call this to toggle or select an item.
     * @param input Optional. The value or item object (required for single/multi).
     */
    onChange: (input?: T | IRadioCheckboxListItem<T>) => void;
    /**
     * Helper to check if a specific value is selected.
     */
    isSelected: (itemValue: T | IRadioCheckboxListItem<T>) => boolean;
    /**
     * Derived boolean state (mostly for simple checkboxes).
     */
    checked: any;
};

declare const useDisclosure: (defaultIsOpen?: boolean) => UseDisclosureReturnType;

export type ScrollDirection = "up" | "down";
export type ScrollState = {
    y: number;
    isScrolled: boolean;
    direction: ScrollDirection;
};

export type Options = {
    threshold?: number;
    target?: HTMLElement | null;
};
declare function useScrollState(options?: Options): {
    scrollState: ScrollState;
};

declare const useLanguage: () => ILocaleContextValues;

declare const useKitsConcerto: () => IMainContextValues<any, React$1.JSX.Element>;

export interface UseComponentDefaultsResult<T> {
    /** Props with theme defaults merged in (user props always win) */
    mergedProps: T;
    /**
     * CSS style from root slot — backwards compat for components
     * that read themeStyle instead of elementStyles.root
     */
    themeStyle: Record<string, any>;
    /**
     * Per-element style maps. Each key is a slot name, value is the
     * merged IStyleClasses (not yet resolved to CSSProperties).
     * Use `useResolvedElementStyles(elementStyles)` to resolve.
     */
    elementStyles: Record<string, Record<string, any>>;
}
/**
 * Merges theme-level component defaults with user-supplied props.
 *
 * Element slots (`root`, `label`, `container`, etc.) are direct keys
 * on the component config. Each slot accepts `{ props?, style? }`.
 *
 * The `root` slot's `props` are merged into `mergedProps` alongside
 * user props (user always wins). The `root` slot's `style` is returned
 * as both `themeStyle` (backwards compat) and `elementStyles.root`.
 *
 * Supports base-group inheritance: e.g. `useComponentDefaults('InputText', rawProps, 'Input')`
 * merges Input base config first, then InputText overrides, then user props.
 *
 * @example
 * const { mergedProps, themeStyle, elementStyles } = useComponentDefaults('InputText', rawProps, 'Input');
 * // mergedProps  → base.root.props + config.root.props + user props
 * // themeStyle   → base.root.style + config.root.style (backwards compat)
 * // elementStyles.root      → root element style
 * // elementStyles.label     → label element style
 * // elementStyles.container → container element style
 */
declare function useComponentDefaults<T extends Record<string, any>>(componentName: string, props: T, baseGroup?: string): UseComponentDefaultsResult<T>;

/**
 * Pure function: resolves theme tokens and maps CSS prop aliases to standard style keys.
 * Platform-agnostic — output is compatible with both web CSSProperties and native ViewStyle.
 * Extracted for reuse by useResolvedElementStyles without hook constraints.
 */
declare function resolveStyleRecord(themeStyle: Record<string, any>, resolveToken: (token: string) => string): Record<string, any>;
/**
 * Resolves theme tokens in a style object and maps KitsConcerto
 * CSS prop aliases to standard style keys (platform-agnostic).
 *
 * Used by components that don't use ResponsiveElement (e.g. PrimeReact form controls)
 * to apply theme.components[name].style as inline styles.
 */
declare function useResolvedStyle(themeStyle: Record<string, any>): Record<string, any>;

/**
 * Resolves all element slot styles at once, converting IStyleClasses
 * aliases and theme tokens to platform-appropriate style objects per slot.
 *
 * Platform-agnostic — output is compatible with both web CSSProperties
 * and native ViewStyle since resolveStyleRecord is platform-agnostic.
 *
 * @example
 * const { elementStyles } = useComponentDefaults('InputText', rawProps, 'Input');
 * const resolved = useResolvedElementStyles(elementStyles);
 * // resolved.container → resolved styles for the container
 * // resolved.label     → resolved styles for the label
 * // resolved.root      → resolved styles for the input element
 */
declare function useResolvedElementStyles(elementStyles: Record<string, Record<string, any>>): Record<string, Record<string, any>>;

/**
 * Derives color-related style props from a colorScheme name and optional variant.
 * Returns CSS prop overrides that can be spread into cssProps.
 *
 * @example
 * const colorStyles = useKitsColorScheme('blue', 'solid');
 * // colorStyles = { bgColor: 'blue.500', fontColor: 'white' }
 */
declare function useKitsColorScheme(colorScheme: string | undefined, variant?: 'solid' | 'subtle' | 'outline' | 'ghost'): Partial<IStyleClasses>;

export interface ResolvedSeverityColors {
    solid: string;
    solidText: string;
    bgTint: string;
    iconFg: string;
    iconBg: string;
    text: string;
    border: string;
}
/**
 * Resolves all severity color slots for a given severity using the current theme.
 * All slot values go through resolveToken() — so they support:
 *   - Raw values: '#ff0000', 'black', 'rgb(..)'
 *   - Semantic tokens: 'primary', 'danger'
 *   - Dot-notation: 'red.700', 'blue.500'
 *   - Prefixed tokens: '$spacing.4'
 *
 * solidText defaults to white if not explicitly set by the consumer.
 */
declare function useSeverityColors(severity: Severity): ResolvedSeverityColors;
/**
 * Returns the full resolved map for all severities.
 */
declare function useAllSeverityColors(): Record<Severity, ResolvedSeverityColors>;

/**
 * Web stub for useFocusStyles.
 * On web, focus styles are handled via CSS :focus pseudo-classes,
 * so this hook returns an empty object.
 */
declare function useFocusStyles(_themeStyle: IStyleClasses | undefined, _isFocused: boolean): {};

export interface KeyboardNavContextValue {
    register: (id: string, ref: any) => void;
    unregister: (id: string) => void;
    setElementsOrder: (ids: string[]) => void;
    getNavProps: (id: string) => Record<string, any>;
    focusNext: (currentId: string) => void;
}
declare const KeyboardNavContext: React$1.Context<KeyboardNavContextValue>;
declare const useKeyboardNav: () => KeyboardNavContextValue;
/** Web no-op — keyboard navigation is only needed on native. */
declare function useKeyboardNavProvider(): KeyboardNavContextValue;

/**
 * Web no-op — keyboard navigation between fields is only needed on React Native.
 */
declare function useFormFieldKeyboardNav(_id: string | undefined): {
    inputRef: any;
    navProps: {};
    focusNext: any;
};

declare const isValidURL: (url: string) => boolean;
declare const isNumber: (value: any) => value is number;

declare const getParams: (key: string) => string;

declare const dateTimeFormat: (datetimeValue: string) => string;

declare const downloadCanvas: (content: HTMLCanvasElement, filename: string, type: string) => void;

/**
 * @param strict Strict parsing disables the deprecated fallback to the native Date constructor when
 * parsing a string.
 */
declare function moment(inp?: moment.MomentInput, strict?: boolean): moment.Moment;
/**
 * @param strict Strict parsing requires that the format and input match exactly, including delimiters.
 * Strict parsing is frequently the best parsing option. For more information about choosing strict vs
 * forgiving parsing, see the [parsing guide](https://momentjs.com/guides/#/parsing/).
 */
declare function moment(inp?: moment.MomentInput, format?: moment.MomentFormatSpecification, strict?: boolean): moment.Moment;
/**
 * @param strict Strict parsing requires that the format and input match exactly, including delimiters.
 * Strict parsing is frequently the best parsing option. For more information about choosing strict vs
 * forgiving parsing, see the [parsing guide](https://momentjs.com/guides/#/parsing/).
 */
declare function moment(inp?: moment.MomentInput, format?: moment.MomentFormatSpecification, language?: string, strict?: boolean): moment.Moment;

declare namespace moment {
  type RelativeTimeKey = 's' | 'ss' | 'm' | 'mm' | 'h' | 'hh' | 'd' | 'dd' | 'w' | 'ww' | 'M' | 'MM' | 'y' | 'yy';
  type CalendarKey = 'sameDay' | 'nextDay' | 'lastDay' | 'nextWeek' | 'lastWeek' | 'sameElse' | string;
  type LongDateFormatKey = 'LTS' | 'LT' | 'L' | 'LL' | 'LLL' | 'LLLL' | 'lts' | 'lt' | 'l' | 'll' | 'lll' | 'llll';

  interface Locale {
    calendar(key?: CalendarKey, m?: Moment, now?: Moment): string;

    longDateFormat(key: LongDateFormatKey): string;
    invalidDate(): string;
    ordinal(n: number): string;

    preparse(inp: string): string;
    postformat(inp: string): string;
    relativeTime(n: number, withoutSuffix: boolean,
                 key: RelativeTimeKey, isFuture: boolean): string;
    pastFuture(diff: number, absRelTime: string): string;
    set(config: Object): void;

    months(): string[];
    months(m: Moment, format?: string): string;
    monthsShort(): string[];
    monthsShort(m: Moment, format?: string): string;
    monthsParse(monthName: string, format: string, strict: boolean): number;
    monthsRegex(strict: boolean): RegExp;
    monthsShortRegex(strict: boolean): RegExp;

    week(m: Moment): number;
    firstDayOfYear(): number;
    firstDayOfWeek(): number;

    weekdays(): string[];
    weekdays(m: Moment, format?: string): string;
    weekdaysMin(): string[];
    weekdaysMin(m: Moment): string;
    weekdaysShort(): string[];
    weekdaysShort(m: Moment): string;
    weekdaysParse(weekdayName: string, format: string, strict: boolean): number;
    weekdaysRegex(strict: boolean): RegExp;
    weekdaysShortRegex(strict: boolean): RegExp;
    weekdaysMinRegex(strict: boolean): RegExp;

    isPM(input: string): boolean;
    meridiem(hour: number, minute: number, isLower: boolean): string;
  }

  interface StandaloneFormatSpec {
    format: string[];
    standalone: string[];
    isFormat?: RegExp;
  }

  interface WeekSpec {
    dow: number;
    doy?: number;
  }

  type CalendarSpecVal = string | ((m?: MomentInput, now?: Moment) => string);
  interface CalendarSpec {
    sameDay?: CalendarSpecVal;
    nextDay?: CalendarSpecVal;
    lastDay?: CalendarSpecVal;
    nextWeek?: CalendarSpecVal;
    lastWeek?: CalendarSpecVal;
    sameElse?: CalendarSpecVal;

    // any additional properties might be used with moment.calendarFormat
    [x: string]: CalendarSpecVal | undefined;
  }

  type RelativeTimeSpecVal = (
    string |
    ((n: number, withoutSuffix: boolean,
      key: RelativeTimeKey, isFuture: boolean) => string)
  );
  type RelativeTimeFuturePastVal = string | ((relTime: string) => string);

  interface RelativeTimeSpec {
    future?: RelativeTimeFuturePastVal;
    past?: RelativeTimeFuturePastVal;
    s?: RelativeTimeSpecVal;
    ss?: RelativeTimeSpecVal;
    m?: RelativeTimeSpecVal;
    mm?: RelativeTimeSpecVal;
    h?: RelativeTimeSpecVal;
    hh?: RelativeTimeSpecVal;
    d?: RelativeTimeSpecVal;
    dd?: RelativeTimeSpecVal;
    w?: RelativeTimeSpecVal;
    ww?: RelativeTimeSpecVal;
    M?: RelativeTimeSpecVal;
    MM?: RelativeTimeSpecVal;
    y?: RelativeTimeSpecVal;
    yy?: RelativeTimeSpecVal;
  }

  interface LongDateFormatSpec {
    LTS: string;
    LT: string;
    L: string;
    LL: string;
    LLL: string;
    LLLL: string;

    // lets forget for a sec that any upper/lower permutation will also work
    lts?: string;
    lt?: string;
    l?: string;
    ll?: string;
    lll?: string;
    llll?: string;
  }

  type MonthWeekdayFn = (momentToFormat: Moment, format?: string) => string;
  type WeekdaySimpleFn = (momentToFormat: Moment) => string;

  interface LocaleSpecification {
    months?: string[] | StandaloneFormatSpec | MonthWeekdayFn;
    monthsShort?: string[] | StandaloneFormatSpec | MonthWeekdayFn;

    weekdays?: string[] | StandaloneFormatSpec | MonthWeekdayFn;
    weekdaysShort?: string[] | StandaloneFormatSpec | WeekdaySimpleFn;
    weekdaysMin?: string[] | StandaloneFormatSpec | WeekdaySimpleFn;

    meridiemParse?: RegExp;
    meridiem?: (hour: number, minute:number, isLower: boolean) => string;

    isPM?: (input: string) => boolean;

    longDateFormat?: LongDateFormatSpec;
    calendar?: CalendarSpec;
    relativeTime?: RelativeTimeSpec;
    invalidDate?: string;
    ordinal?: (n: number) => string;
    ordinalParse?: RegExp;

    week?: WeekSpec;

    // Allow anything: in general any property that is passed as locale spec is
    // put in the locale object so it can be used by locale functions
    [x: string]: any;
  }

  interface MomentObjectOutput {
    years: number;
    /* One digit */
    months: number;
    /* Day of the month */
    date: number;
    hours: number;
    minutes: number;
    seconds: number;
    milliseconds: number;
  }
  interface argThresholdOpts {
    ss?: number;
    s?: number;
    m?: number;
    h?: number;
    d?: number;
    w?: number | null;
    M?: number;
  }

  interface Duration {
    clone(): Duration;

    humanize(argWithSuffix?: boolean, argThresholds?: argThresholdOpts): string;
    
    humanize(argThresholds?: argThresholdOpts): string;

    abs(): Duration;

    as(units: unitOfTime.Base): number;
    get(units: unitOfTime.Base): number;

    milliseconds(): number;
    asMilliseconds(): number;

    seconds(): number;
    asSeconds(): number;

    minutes(): number;
    asMinutes(): number;

    hours(): number;
    asHours(): number;

    days(): number;
    asDays(): number;

    weeks(): number;
    asWeeks(): number;

    months(): number;
    asMonths(): number;

    years(): number;
    asYears(): number;

    add(inp?: DurationInputArg1, unit?: DurationInputArg2): Duration;
    subtract(inp?: DurationInputArg1, unit?: DurationInputArg2): Duration;

    locale(): string;
    locale(locale: LocaleSpecifier): Duration;
    localeData(): Locale;

    toISOString(): string;
    toJSON(): string;

    isValid(): boolean;

    /**
     * @deprecated since version 2.8.0
     */
    lang(locale: LocaleSpecifier): Moment;
    /**
     * @deprecated since version 2.8.0
     */
    lang(): Locale;
    /**
     * @deprecated
     */
    toIsoString(): string;
  }

  interface MomentRelativeTime {
    future: any;
    past: any;
    s: any;
    ss: any;
    m: any;
    mm: any;
    h: any;
    hh: any;
    d: any;
    dd: any;
    M: any;
    MM: any;
    y: any;
    yy: any;
  }

  interface MomentLongDateFormat {
    L: string;
    LL: string;
    LLL: string;
    LLLL: string;
    LT: string;
    LTS: string;

    l?: string;
    ll?: string;
    lll?: string;
    llll?: string;
    lt?: string;
    lts?: string;
  }

  interface MomentParsingFlags {
    empty: boolean;
    unusedTokens: string[];
    unusedInput: string[];
    overflow: number;
    charsLeftOver: number;
    nullInput: boolean;
    invalidMonth: string | null;
    invalidFormat: boolean;
    userInvalidated: boolean;
    iso: boolean;
    parsedDateParts: any[];
    meridiem: string | null;
  }

  interface MomentParsingFlagsOpt {
    empty?: boolean;
    unusedTokens?: string[];
    unusedInput?: string[];
    overflow?: number;
    charsLeftOver?: number;
    nullInput?: boolean;
    invalidMonth?: string;
    invalidFormat?: boolean;
    userInvalidated?: boolean;
    iso?: boolean;
    parsedDateParts?: any[];
    meridiem?: string | null;
  }

  interface MomentBuiltinFormat {
    __momentBuiltinFormatBrand: any;
  }

  type MomentFormatSpecification = string | MomentBuiltinFormat | (string | MomentBuiltinFormat)[];

  namespace unitOfTime {
    type Base = (
      "year" | "years" | "y" |
      "month" | "months" | "M" |
      "week" | "weeks" | "w" |
      "day" | "days" | "d" |
      "hour" | "hours" | "h" |
      "minute" | "minutes" | "m" |
      "second" | "seconds" | "s" |
      "millisecond" | "milliseconds" | "ms"
    );

    type _quarter = "quarter" | "quarters" | "Q";
    type _isoWeek = "isoWeek" | "isoWeeks" | "W";
    type _date = "date" | "dates" | "D";
    type DurationConstructor = Base | _quarter;

    type DurationAs = Base;

    type StartOf = Base | _quarter | _isoWeek | _date | null;

    type Diff = Base | _quarter;

    type MomentConstructor = Base | _date;

    type All = Base | _quarter | _isoWeek | _date |
      "weekYear" | "weekYears" | "gg" |
      "isoWeekYear" | "isoWeekYears" | "GG" |
      "dayOfYear" | "dayOfYears" | "DDD" |
      "weekday" | "weekdays" | "e" |
      "isoWeekday" | "isoWeekdays" | "E";
  }

  interface MomentInputObject {
    years?: number;
    year?: number;
    y?: number;

    months?: number;
    month?: number;
    M?: number;

    days?: number;
    day?: number;
    d?: number;

    dates?: number;
    date?: number;
    D?: number;

    hours?: number;
    hour?: number;
    h?: number;

    minutes?: number;
    minute?: number;
    m?: number;

    seconds?: number;
    second?: number;
    s?: number;

    milliseconds?: number;
    millisecond?: number;
    ms?: number;
  }

  interface DurationInputObject extends MomentInputObject {
    quarters?: number;
    quarter?: number;
    Q?: number;

    weeks?: number;
    week?: number;
    w?: number;
  }

  interface MomentSetObject extends MomentInputObject {
    weekYears?: number;
    weekYear?: number;
    gg?: number;

    isoWeekYears?: number;
    isoWeekYear?: number;
    GG?: number;

    quarters?: number;
    quarter?: number;
    Q?: number;

    weeks?: number;
    week?: number;
    w?: number;

    isoWeeks?: number;
    isoWeek?: number;
    W?: number;

    dayOfYears?: number;
    dayOfYear?: number;
    DDD?: number;

    weekdays?: number;
    weekday?: number;
    e?: number;

    isoWeekdays?: number;
    isoWeekday?: number;
    E?: number;
  }

  interface FromTo {
    from: MomentInput;
    to: MomentInput;
  }

  type MomentInput = Moment | Date | string | number | (number | string)[] | MomentInputObject | null | undefined;
  type DurationInputArg1 = Duration | number | string | FromTo | DurationInputObject | null | undefined;
  type DurationInputArg2 = unitOfTime.DurationConstructor;
  type LocaleSpecifier = string | Moment | Duration | string[] | boolean;

  interface MomentCreationData {
    input: MomentInput;
    format?: MomentFormatSpecification;
    locale: Locale;
    isUTC: boolean;
    strict?: boolean;
  }

  interface Moment extends Object {
    format(format?: string): string;

    startOf(unitOfTime: unitOfTime.StartOf): Moment;
    endOf(unitOfTime: unitOfTime.StartOf): Moment;

    add(amount?: DurationInputArg1, unit?: DurationInputArg2): Moment;
    /**
     * @deprecated reverse syntax
     */
    add(unit: unitOfTime.DurationConstructor, amount: number|string): Moment;

    subtract(amount?: DurationInputArg1, unit?: DurationInputArg2): Moment;
    /**
     * @deprecated reverse syntax
     */
    subtract(unit: unitOfTime.DurationConstructor, amount: number|string): Moment;

    calendar(): string;
    calendar(formats: CalendarSpec): string;
    calendar(time?: MomentInput, formats?: CalendarSpec): string;

    clone(): Moment;

    /**
     * @return Unix timestamp in milliseconds
     */
    valueOf(): number;

    // current date/time in local mode
    local(keepLocalTime?: boolean): Moment;
    isLocal(): boolean;

    // current date/time in UTC mode
    utc(keepLocalTime?: boolean): Moment;
    isUTC(): boolean;
    /**
     * @deprecated use isUTC
     */
    isUtc(): boolean;

    parseZone(): Moment;
    isValid(): boolean;
    invalidAt(): number;

    hasAlignedHourOffset(other?: MomentInput): boolean;

    creationData(): MomentCreationData;
    parsingFlags(): MomentParsingFlags;

    year(y: number): Moment;
    year(): number;
    /**
     * @deprecated use year(y)
     */
    years(y: number): Moment;
    /**
     * @deprecated use year()
     */
    years(): number;
    quarter(): number;
    quarter(q: number): Moment;
    quarters(): number;
    quarters(q: number): Moment;
    month(M: number|string): Moment;
    month(): number;
    /**
     * @deprecated use month(M)
     */
    months(M: number|string): Moment;
    /**
     * @deprecated use month()
     */
    months(): number;
    day(d: number|string): Moment;
    day(): number;
    days(d: number|string): Moment;
    days(): number;
    date(d: number): Moment;
    date(): number;
    /**
     * @deprecated use date(d)
     */
    dates(d: number): Moment;
    /**
     * @deprecated use date()
     */
    dates(): number;
    hour(h: number): Moment;
    hour(): number;
    hours(h: number): Moment;
    hours(): number;
    minute(m: number): Moment;
    minute(): number;
    minutes(m: number): Moment;
    minutes(): number;
    second(s: number): Moment;
    second(): number;
    seconds(s: number): Moment;
    seconds(): number;
    millisecond(ms: number): Moment;
    millisecond(): number;
    milliseconds(ms: number): Moment;
    milliseconds(): number;
    weekday(): number;
    weekday(d: number): Moment;
    isoWeekday(): number;
    isoWeekday(d: number|string): Moment;
    weekYear(): number;
    weekYear(d: number): Moment;
    isoWeekYear(): number;
    isoWeekYear(d: number): Moment;
    week(): number;
    week(d: number): Moment;
    weeks(): number;
    weeks(d: number): Moment;
    isoWeek(): number;
    isoWeek(d: number): Moment;
    isoWeeks(): number;
    isoWeeks(d: number): Moment;
    weeksInYear(): number;
    isoWeeksInYear(): number;
    isoWeeksInISOWeekYear(): number;
    dayOfYear(): number;
    dayOfYear(d: number): Moment;

    from(inp: MomentInput, suffix?: boolean): string;
    to(inp: MomentInput, suffix?: boolean): string;
    fromNow(withoutSuffix?: boolean): string;
    toNow(withoutPrefix?: boolean): string;

    diff(b: MomentInput, unitOfTime?: unitOfTime.Diff, precise?: boolean): number;

    toArray(): [number, number, number, number, number, number, number];
    toDate(): Date;
    toISOString(keepOffset?: boolean): string;
    inspect(): string;
    toJSON(): string;
    unix(): number;

    isLeapYear(): boolean;
    /**
     * @deprecated in favor of utcOffset
     */
    zone(): number;
    zone(b: number|string): Moment;
    utcOffset(): number;
    utcOffset(b: number|string, keepLocalTime?: boolean): Moment;
    isUtcOffset(): boolean;
    daysInMonth(): number;
    isDST(): boolean;

    zoneAbbr(): string;
    zoneName(): string;

    isBefore(inp?: MomentInput, granularity?: unitOfTime.StartOf): boolean;
    isAfter(inp?: MomentInput, granularity?: unitOfTime.StartOf): boolean;
    isSame(inp?: MomentInput, granularity?: unitOfTime.StartOf): boolean;
    isSameOrAfter(inp?: MomentInput, granularity?: unitOfTime.StartOf): boolean;
    isSameOrBefore(inp?: MomentInput, granularity?: unitOfTime.StartOf): boolean;
    isBetween(a: MomentInput, b: MomentInput, granularity?: unitOfTime.StartOf, inclusivity?: "()" | "[)" | "(]" | "[]"): boolean;

    /**
     * @deprecated as of 2.8.0, use locale
     */
    lang(language: LocaleSpecifier): Moment;
    /**
     * @deprecated as of 2.8.0, use locale
     */
    lang(): Locale;

    locale(): string;
    locale(locale: LocaleSpecifier): Moment;

    localeData(): Locale;

    /**
     * @deprecated no reliable implementation
     */
    isDSTShifted(): boolean;

    // NOTE(constructor): Same as moment constructor
    /**
     * @deprecated as of 2.7.0, use moment.min/max
     */
    max(inp?: MomentInput, format?: MomentFormatSpecification, strict?: boolean): Moment;
    /**
     * @deprecated as of 2.7.0, use moment.min/max
     */
    max(inp?: MomentInput, format?: MomentFormatSpecification, language?: string, strict?: boolean): Moment;

    // NOTE(constructor): Same as moment constructor
    /**
     * @deprecated as of 2.7.0, use moment.min/max
     */
    min(inp?: MomentInput, format?: MomentFormatSpecification, strict?: boolean): Moment;
    /**
     * @deprecated as of 2.7.0, use moment.min/max
     */
    min(inp?: MomentInput, format?: MomentFormatSpecification, language?: string, strict?: boolean): Moment;

    get(unit: unitOfTime.All): number;
    set(unit: unitOfTime.All, value: number): Moment;
    set(objectLiteral: MomentSetObject): Moment;

    toObject(): MomentObjectOutput;
  }

  export var version: string;
  export var fn: Moment;

  // NOTE(constructor): Same as moment constructor
  /**
   * @param strict Strict parsing disables the deprecated fallback to the native Date constructor when
   * parsing a string.
   */
  export function utc(inp?: MomentInput, strict?: boolean): Moment;
  /**
   * @param strict Strict parsing requires that the format and input match exactly, including delimiters.
   * Strict parsing is frequently the best parsing option. For more information about choosing strict vs
   * forgiving parsing, see the [parsing guide](https://momentjs.com/guides/#/parsing/).
   */
  export function utc(inp?: MomentInput, format?: MomentFormatSpecification, strict?: boolean): Moment;
  /**
   * @param strict Strict parsing requires that the format and input match exactly, including delimiters.
   * Strict parsing is frequently the best parsing option. For more information about choosing strict vs
   * forgiving parsing, see the [parsing guide](https://momentjs.com/guides/#/parsing/).
   */
  export function utc(inp?: MomentInput, format?: MomentFormatSpecification, language?: string, strict?: boolean): Moment;

  export function unix(timestamp: number): Moment;

  export function invalid(flags?: MomentParsingFlagsOpt): Moment;
  export function isMoment(m: any): m is Moment;
  export function isDate(m: any): m is Date;
  export function isDuration(d: any): d is Duration;

  /**
   * @deprecated in 2.8.0
   */
  export function lang(language?: string): string;
  /**
   * @deprecated in 2.8.0
   */
  export function lang(language?: string, definition?: Locale): string;

  export function locale(language?: string): string;
  export function locale(language?: string[]): string;
  export function locale(language?: string, definition?: LocaleSpecification | null | undefined): string;

  export function localeData(key?: string | string[]): Locale;

  export function duration(inp?: DurationInputArg1, unit?: DurationInputArg2): Duration;

  // NOTE(constructor): Same as moment constructor
  export function parseZone(inp?: MomentInput, format?: MomentFormatSpecification, strict?: boolean): Moment;
  export function parseZone(inp?: MomentInput, format?: MomentFormatSpecification, language?: string, strict?: boolean): Moment;

  export function months(): string[];
  export function months(index: number): string;
  export function months(format: string): string[];
  export function months(format: string, index: number): string;
  export function monthsShort(): string[];
  export function monthsShort(index: number): string;
  export function monthsShort(format: string): string[];
  export function monthsShort(format: string, index: number): string;

  export function weekdays(): string[];
  export function weekdays(index: number): string;
  export function weekdays(format: string): string[];
  export function weekdays(format: string, index: number): string;
  export function weekdays(localeSorted: boolean): string[];
  export function weekdays(localeSorted: boolean, index: number): string;
  export function weekdays(localeSorted: boolean, format: string): string[];
  export function weekdays(localeSorted: boolean, format: string, index: number): string;
  export function weekdaysShort(): string[];
  export function weekdaysShort(index: number): string;
  export function weekdaysShort(format: string): string[];
  export function weekdaysShort(format: string, index: number): string;
  export function weekdaysShort(localeSorted: boolean): string[];
  export function weekdaysShort(localeSorted: boolean, index: number): string;
  export function weekdaysShort(localeSorted: boolean, format: string): string[];
  export function weekdaysShort(localeSorted: boolean, format: string, index: number): string;
  export function weekdaysMin(): string[];
  export function weekdaysMin(index: number): string;
  export function weekdaysMin(format: string): string[];
  export function weekdaysMin(format: string, index: number): string;
  export function weekdaysMin(localeSorted: boolean): string[];
  export function weekdaysMin(localeSorted: boolean, index: number): string;
  export function weekdaysMin(localeSorted: boolean, format: string): string[];
  export function weekdaysMin(localeSorted: boolean, format: string, index: number): string;

  export function min(moments: Moment[]): Moment;
  export function min(...moments: Moment[]): Moment;
  export function max(moments: Moment[]): Moment;
  export function max(...moments: Moment[]): Moment;

  /**
   * Returns unix time in milliseconds. Overwrite for profit.
   */
  export function now(): number;

  export function defineLocale(language: string, localeSpec: LocaleSpecification | null): Locale;
  export function updateLocale(language: string, localeSpec: LocaleSpecification | null): Locale;

  export function locales(): string[];

  export function normalizeUnits(unit: unitOfTime.All): string;
  export function relativeTimeThreshold(threshold: string): number | boolean;
  export function relativeTimeThreshold(threshold: string, limit: number): boolean;
  export function relativeTimeRounding(fn: (num: number) => number): boolean;
  export function relativeTimeRounding(): (num: number) => number;
  export function calendarFormat(m: Moment, now: Moment): string;

  export function parseTwoDigitYear(input: string): number;
  /**
   * Constant used to enable explicit ISO_8601 format parsing.
   */
  export var ISO_8601: MomentBuiltinFormat;
  export var RFC_2822: MomentBuiltinFormat;

  export var defaultFormat: string;
  export var defaultFormatUtc: string;

  export var suppressDeprecationWarnings: boolean;
  export var deprecationHandler: ((name: string | null, msg: string) => void) | null | undefined;

  export var HTML5_FMT: {
    DATETIME_LOCAL: string,
    DATETIME_LOCAL_SECONDS: string,
    DATETIME_LOCAL_MS: string,
    DATE: string,
    TIME: string,
    TIME_SECONDS: string,
    TIME_MS: string,
    WEEK: string,
    MONTH: string
  };

}

declare const isToday: (date: moment.Moment) => boolean;
declare const timeAgo: (timestamp: string) => string;
declare const timeSince: (days: number) => string;
declare const getCustomDateTime: (value?: number, unit?: moment.unitOfTime.DurationConstructor, format?: string) => string;
declare const getDateElements: (date: string) => {
    day: string;
    time: string;
    date: true | {
        dateString: string;
        month: string;
        date: string;
        year: string;
    };
};

declare const capitalizeFirstLetter: (str: string) => string;
declare const getURLParams: (getKey: string) => string;

declare const AnyFile: {
    parts: (fileName: string) => {
        name: string;
        ext: string;
    };
    ext: (fileName: string) => string;
    shortName: (fileName: string, startLength?: number, endLength?: number) => string;
};

declare function setCookie(name: string, value: any, days: number): void;
declare function getCookie(name: string): string;
declare function eraseCookie(name: string): void;
declare function getCookieValue(name: string): any;

export type PossibleRef<T> = Ref<T> | undefined | null;
/**
 * Merges multiple React refs into a single ref callback.
 * Useful when a component needs both a local ref and a forwarded ref
 * pointing to the same DOM/native element.
 */
declare function mergeRefs<T>(...refs: PossibleRef<T>[]): RefCallback<T>;

declare const IconMap: Record<string, ComponentType<any>>;

declare const localeFiles: {
    ar: {
        startsWith: string;
        contains: string;
        notContains: string;
        endsWith: string;
        equals: string;
        notEquals: string;
        noFilter: string;
        filter: string;
        lt: string;
        lte: string;
        gt: string;
        gte: string;
        dateIs: string;
        dateIsNot: string;
        dateBefore: string;
        dateAfter: string;
        custom: string;
        clear: string;
        apply: string;
        matchAll: string;
        matchAny: string;
        addRule: string;
        removeRule: string;
        accept: string;
        reject: string;
        choose: string;
        upload: string;
        cancel: string;
        completed: string;
        pending: string;
        fileSizeTypes: string[];
        dayNames: string[];
        dayNamesShort: string[];
        dayNamesMin: string[];
        monthNames: string[];
        monthNamesShort: string[];
        chooseYear: string;
        chooseMonth: string;
        chooseDate: string;
        prevDecade: string;
        nextDecade: string;
        prevYear: string;
        nextYear: string;
        prevMonth: string;
        nextMonth: string;
        prevHour: string;
        nextHour: string;
        prevMinute: string;
        nextMinute: string;
        prevSecond: string;
        nextSecond: string;
        am: string;
        pm: string;
        today: string;
        now: string;
        weekHeader: string;
        firstDayOfWeek: number;
        showMonthAfterYear: boolean;
        dateFormat: string;
        weak: string;
        medium: string;
        strong: string;
        passwordPrompt: string;
        emptyFilterMessage: string;
        searchMessage: string;
        selectionMessage: string;
        emptySelectionMessage: string;
        emptySearchMessage: string;
        emptyMessage: string;
        emptyFileUploadMessage: string;
        password: string;
        openMenu: string;
        toggleColorMode: string;
        signOut: string;
        profile: string;
        filesSelected: string;
        dragFilesHere: string;
        filesBeingDropped: string;
        typeNotSupported: string;
        maximumAllowedFiles: string;
        remove: string;
        edit: string;
        save: string;
        generatePhoto: string;
        settings: string;
        addCategory: string;
        addItem: string;
        delete: string;
        any: string;
        chooseFile: string;
        chooseImage: string;
        changeImage: string;
        tapToUpload: string;
        clickOrDragToUpload: string;
        addImages: string;
        greaterThan: string;
        greaterThanOrEqualTo: string;
        lessThan: string;
        lessThanOrEqualTo: string;
        between: string;
        include: string;
        equal: string;
        after: string;
        before: string;
        not: string;
        aria: {
            trueLabel: string;
            falseLabel: string;
            nullLabel: string;
            star: string;
            stars: string;
            selectAll: string;
            unselectAll: string;
            close: string;
            previous: string;
            next: string;
            navigation: string;
            scrollTop: string;
            moveTop: string;
            moveUp: string;
            moveDown: string;
            moveBottom: string;
            moveToTarget: string;
            moveToSource: string;
            moveAllToTarget: string;
            moveAllToSource: string;
            pageLabel: string;
            firstPageLabel: string;
            lastPageLabel: string;
            nextPageLabel: string;
            previousPageLabel: string;
            rowsPerPageLabel: string;
            jumpToPageDropdownLabel: string;
            jumpToPageInputLabel: string;
            selectRow: string;
            unselectRow: string;
            expandRow: string;
            collapseRow: string;
            showFilterMenu: string;
            hideFilterMenu: string;
            filterOperator: string;
            filterConstraint: string;
            editRow: string;
            saveEdit: string;
            cancelEdit: string;
            listView: string;
            gridView: string;
            slide: string;
            slideNumber: string;
            zoomImage: string;
            zoomIn: string;
            zoomOut: string;
            rotateRight: string;
            rotateLeft: string;
        };
    };
    bg: {
        accept: string;
        reject: string;
        choose: string;
        upload: string;
        cancel: string;
        dayNames: string[];
        dayNamesShort: string[];
        dayNamesMin: string[];
        monthNames: string[];
        monthNamesShort: string[];
        today: string;
        clear: string;
        weekHeader: string;
        firstDayOfWeek: number;
        showMonthAfterYear: boolean;
        dateFormat: string;
        weak: string;
        medium: string;
        strong: string;
        passwordPrompt: string;
        startsWith: string;
        contains: string;
        notContains: string;
        endsWith: string;
        equals: string;
        notEquals: string;
        noFilter: string;
        lt: string;
        lte: string;
        gt: string;
        gte: string;
        dateIs: string;
        dateIsNot: string;
        dateBefore: string;
        dateAfter: string;
        custom: string;
        apply: string;
        matchAll: string;
        matchAny: string;
        addRule: string;
        removeRule: string;
        emptyFilterMessage: string;
        emptyMessage: string;
    };
    ca: {
        startsWith: string;
        contains: string;
        notContains: string;
        endsWith: string;
        equals: string;
        notEquals: string;
        noFilter: string;
        lt: string;
        lte: string;
        gt: string;
        gte: string;
        dateIs: string;
        dateIsNot: string;
        dateBefore: string;
        dateAfter: string;
        custom: string;
        clear: string;
        apply: string;
        matchAll: string;
        matchAny: string;
        addRule: string;
        removeRule: string;
        accept: string;
        reject: string;
        choose: string;
        upload: string;
        cancel: string;
        fileSizeTypes: string[];
        dayNames: string[];
        dayNamesShort: string[];
        dayNamesMin: string[];
        monthNames: string[];
        monthNamesShort: string[];
        today: string;
        now: string;
        weekHeader: string;
        firstDayOfWeek: number;
        showMonthAfterYear: boolean;
        dateFormat: string;
        weak: string;
        medium: string;
        strong: string;
        passwordPrompt: string;
        emptyFilterMessage: string;
        emptyMessage: string;
        openMenu: string;
        toggleColorMode: string;
        signOut: string;
        profile: string;
        filesSelected: string;
        dragFilesHere: string;
        filesBeingDropped: string;
        typeNotSupported: string;
        maximumAllowedFiles: string;
        remove: string;
        edit: string;
        save: string;
        generatePhoto: string;
        settings: string;
        addCategory: string;
        addItem: string;
        delete: string;
        any: string;
        chooseFile: string;
        greaterThan: string;
        greaterThanOrEqualTo: string;
        lessThan: string;
        lessThanOrEqualTo: string;
        between: string;
        include: string;
        equal: string;
        after: string;
        before: string;
        not: string;
        aria: {
            trueLabel: string;
            falseLabel: string;
            nullLabel: string;
            star: string;
            stars: string;
            selectAll: string;
            unselectAll: string;
            close: string;
            previous: string;
            next: string;
            navigation: string;
            scrollTop: string;
            moveTop: string;
            moveUp: string;
            moveDown: string;
            moveBottom: string;
            moveToTarget: string;
            moveToSource: string;
            moveAllToTarget: string;
            moveAllToSource: string;
            pageLabel: string;
            firstPageLabel: string;
            lastPageLabel: string;
            nextPageLabel: string;
            previousPageLabel: string;
            rowsPerPageLabel: string;
            jumpToPageDropdownLabel: string;
            jumpToPageInputLabel: string;
            selectRow: string;
            unselectRow: string;
            expandRow: string;
            collapseRow: string;
            showFilterMenu: string;
            hideFilterMenu: string;
            filterOperator: string;
            filterConstraint: string;
            editRow: string;
            saveEdit: string;
            cancelEdit: string;
            listView: string;
            gridView: string;
            slide: string;
            slideNumber: string;
            zoomImage: string;
            zoomIn: string;
            zoomOut: string;
            rotateRight: string;
            rotateLeft: string;
        };
    };
    cs: {
        startsWith: string;
        contains: string;
        notContains: string;
        endsWith: string;
        equals: string;
        notEquals: string;
        noFilter: string;
        filter: string;
        lt: string;
        lte: string;
        gt: string;
        gte: string;
        dateIs: string;
        dateIsNot: string;
        dateBefore: string;
        dateAfter: string;
        custom: string;
        clear: string;
        apply: string;
        matchAll: string;
        matchAny: string;
        addRule: string;
        removeRule: string;
        accept: string;
        reject: string;
        choose: string;
        upload: string;
        cancel: string;
        completed: string;
        pending: string;
        dayNames: string[];
        dayNamesShort: string[];
        dayNamesMin: string[];
        monthNames: string[];
        monthNamesShort: string[];
        chooseYear: string;
        chooseMonth: string;
        chooseDate: string;
        prevDecade: string;
        nextDecade: string;
        prevYear: string;
        nextYear: string;
        prevMonth: string;
        nextMonth: string;
        prevHour: string;
        nextHour: string;
        prevMinute: string;
        nextMinute: string;
        prevSecond: string;
        nextSecond: string;
        am: string;
        pm: string;
        today: string;
        weekHeader: string;
        firstDayOfWeek: number;
        showMonthAfterYear: boolean;
        dateFormat: string;
        weak: string;
        medium: string;
        strong: string;
        passwordPrompt: string;
        emptyFilterMessage: string;
        searchMessage: string;
        selectionMessage: string;
        emptySelectionMessage: string;
        emptySearchMessage: string;
        emptyMessage: string;
        openMenu: string;
        toggleColorMode: string;
        signOut: string;
        profile: string;
        filesSelected: string;
        dragFilesHere: string;
        filesBeingDropped: string;
        typeNotSupported: string;
        maximumAllowedFiles: string;
        remove: string;
        edit: string;
        save: string;
        generatePhoto: string;
        settings: string;
        addCategory: string;
        addItem: string;
        delete: string;
        any: string;
        chooseFile: string;
        greaterThan: string;
        greaterThanOrEqualTo: string;
        lessThan: string;
        lessThanOrEqualTo: string;
        between: string;
        include: string;
        equal: string;
        after: string;
        before: string;
        not: string;
        aria: {
            trueLabel: string;
            falseLabel: string;
            nullLabel: string;
            star: string;
            stars: string;
            selectAll: string;
            unselectAll: string;
            close: string;
            previous: string;
            next: string;
            navigation: string;
            scrollTop: string;
            moveTop: string;
            moveUp: string;
            moveDown: string;
            moveBottom: string;
            moveToTarget: string;
            moveToSource: string;
            moveAllToTarget: string;
            moveAllToSource: string;
            pageLabel: string;
            firstPageLabel: string;
            lastPageLabel: string;
            nextPageLabel: string;
            previousPageLabel: string;
            rowsPerPageLabel: string;
            jumpToPageDropdownLabel: string;
            jumpToPageInputLabel: string;
            selectRow: string;
            unselectRow: string;
            expandRow: string;
            collapseRow: string;
            showFilterMenu: string;
            hideFilterMenu: string;
            filterOperator: string;
            filterConstraint: string;
            editRow: string;
            saveEdit: string;
            cancelEdit: string;
            listView: string;
            gridView: string;
            slide: string;
            slideNumber: string;
            zoomImage: string;
            zoomIn: string;
            zoomOut: string;
            rotateRight: string;
            rotateLeft: string;
        };
    };
    da: {
        startsWith: string;
        contains: string;
        notContains: string;
        endsWith: string;
        equals: string;
        notEquals: string;
        noFilter: string;
        filter: string;
        lt: string;
        lte: string;
        gt: string;
        gte: string;
        dateIs: string;
        dateIsNot: string;
        dateBefore: string;
        dateAfter: string;
        custom: string;
        clear: string;
        apply: string;
        matchAll: string;
        matchAny: string;
        addRule: string;
        removeRule: string;
        accept: string;
        reject: string;
        choose: string;
        upload: string;
        cancel: string;
        completed: string;
        pending: string;
        dayNames: string[];
        dayNamesShort: string[];
        dayNamesMin: string[];
        monthNames: string[];
        monthNamesShort: string[];
        chooseYear: string;
        chooseMonth: string;
        chooseDate: string;
        prevDecade: string;
        nextDecade: string;
        prevYear: string;
        nextYear: string;
        prevMonth: string;
        nextMonth: string;
        prevHour: string;
        nextHour: string;
        prevMinute: string;
        nextMinute: string;
        prevSecond: string;
        nextSecond: string;
        am: string;
        pm: string;
        today: string;
        weekHeader: string;
        firstDayOfWeek: number;
        showMonthAfterYear: boolean;
        dateFormat: string;
        weak: string;
        medium: string;
        strong: string;
        passwordPrompt: string;
        emptyFilterMessage: string;
        searchMessage: string;
        selectionMessage: string;
        emptySelectionMessage: string;
        emptySearchMessage: string;
        emptyMessage: string;
        openMenu: string;
        toggleColorMode: string;
        signOut: string;
        profile: string;
        filesSelected: string;
        dragFilesHere: string;
        filesBeingDropped: string;
        typeNotSupported: string;
        maximumAllowedFiles: string;
        remove: string;
        edit: string;
        save: string;
        generatePhoto: string;
        settings: string;
        addCategory: string;
        addItem: string;
        delete: string;
        any: string;
        chooseFile: string;
        greaterThan: string;
        greaterThanOrEqualTo: string;
        lessThan: string;
        lessThanOrEqualTo: string;
        between: string;
        include: string;
        equal: string;
        after: string;
        before: string;
        not: string;
        aria: {
            trueLabel: string;
            falseLabel: string;
            nullLabel: string;
            star: string;
            stars: string;
            selectAll: string;
            unselectAll: string;
            close: string;
            previous: string;
            next: string;
            navigation: string;
            scrollTop: string;
            moveTop: string;
            moveUp: string;
            moveDown: string;
            moveBottom: string;
            moveToTarget: string;
            moveToSource: string;
            moveAllToTarget: string;
            moveAllToSource: string;
            pageLabel: string;
            firstPageLabel: string;
            lastPageLabel: string;
            nextPageLabel: string;
            previousPageLabel: string;
            rowsPerPageLabel: string;
            jumpToPageDropdownLabel: string;
            jumpToPageInputLabel: string;
            selectRow: string;
            unselectRow: string;
            expandRow: string;
            collapseRow: string;
            showFilterMenu: string;
            hideFilterMenu: string;
            filterOperator: string;
            filterConstraint: string;
            editRow: string;
            saveEdit: string;
            cancelEdit: string;
            listView: string;
            gridView: string;
            slide: string;
            slideNumber: string;
            zoomImage: string;
            zoomIn: string;
            zoomOut: string;
            rotateRight: string;
            rotateLeft: string;
        };
    };
    de: {
        startsWith: string;
        contains: string;
        notContains: string;
        endsWith: string;
        equals: string;
        notEquals: string;
        noFilter: string;
        filter: string;
        lt: string;
        lte: string;
        gt: string;
        gte: string;
        dateIs: string;
        dateIsNot: string;
        dateBefore: string;
        dateAfter: string;
        custom: string;
        clear: string;
        apply: string;
        matchAll: string;
        matchAny: string;
        addRule: string;
        removeRule: string;
        accept: string;
        reject: string;
        choose: string;
        upload: string;
        cancel: string;
        completed: string;
        pending: string;
        dayNames: string[];
        dayNamesShort: string[];
        dayNamesMin: string[];
        monthNames: string[];
        monthNamesShort: string[];
        chooseYear: string;
        chooseMonth: string;
        chooseDate: string;
        prevDecade: string;
        nextDecade: string;
        prevYear: string;
        nextYear: string;
        prevMonth: string;
        nextMonth: string;
        prevHour: string;
        nextHour: string;
        prevMinute: string;
        nextMinute: string;
        prevSecond: string;
        nextSecond: string;
        am: string;
        pm: string;
        today: string;
        now: string;
        weekHeader: string;
        firstDayOfWeek: number;
        showMonthAfterYear: boolean;
        dateFormat: string;
        weak: string;
        medium: string;
        strong: string;
        passwordPrompt: string;
        emptyFilterMessage: string;
        searchMessage: string;
        selectionMessage: string;
        emptySelectionMessage: string;
        emptySearchMessage: string;
        emptyMessage: string;
        openMenu: string;
        toggleColorMode: string;
        signOut: string;
        profile: string;
        filesSelected: string;
        dragFilesHere: string;
        filesBeingDropped: string;
        typeNotSupported: string;
        maximumAllowedFiles: string;
        remove: string;
        edit: string;
        save: string;
        generatePhoto: string;
        settings: string;
        addCategory: string;
        addItem: string;
        delete: string;
        any: string;
        chooseFile: string;
        greaterThan: string;
        greaterThanOrEqualTo: string;
        lessThan: string;
        lessThanOrEqualTo: string;
        between: string;
        include: string;
        equal: string;
        after: string;
        before: string;
        not: string;
        aria: {
            trueLabel: string;
            falseLabel: string;
            nullLabel: string;
            star: string;
            stars: string;
            selectAll: string;
            unselectAll: string;
            close: string;
            previous: string;
            next: string;
            navigation: string;
            scrollTop: string;
            moveTop: string;
            moveUp: string;
            moveDown: string;
            moveBottom: string;
            moveToTarget: string;
            moveToSource: string;
            moveAllToTarget: string;
            moveAllToSource: string;
            pageLabel: string;
            firstPageLabel: string;
            lastPageLabel: string;
            nextPageLabel: string;
            previousPageLabel: string;
            rowsPerPageLabel: string;
            jumpToPageDropdownLabel: string;
            jumpToPageInputLabel: string;
            selectRow: string;
            unselectRow: string;
            expandRow: string;
            collapseRow: string;
            showFilterMenu: string;
            hideFilterMenu: string;
            filterOperator: string;
            filterConstraint: string;
            editRow: string;
            saveEdit: string;
            cancelEdit: string;
            listView: string;
            gridView: string;
            slide: string;
            slideNumber: string;
            zoomImage: string;
            zoomIn: string;
            zoomOut: string;
            rotateRight: string;
            rotateLeft: string;
        };
    };
    en: {
        startsWith: string;
        contains: string;
        notContains: string;
        endsWith: string;
        equals: string;
        notEquals: string;
        noFilter: string;
        filter: string;
        lt: string;
        lte: string;
        gt: string;
        gte: string;
        dateIs: string;
        dateIsNot: string;
        dateBefore: string;
        dateAfter: string;
        custom: string;
        clear: string;
        apply: string;
        matchAll: string;
        matchAny: string;
        addRule: string;
        removeRule: string;
        accept: string;
        reject: string;
        choose: string;
        upload: string;
        cancel: string;
        completed: string;
        pending: string;
        fileSizeTypes: string[];
        dayNames: string[];
        dayNamesShort: string[];
        dayNamesMin: string[];
        monthNames: string[];
        monthNamesShort: string[];
        chooseYear: string;
        chooseMonth: string;
        chooseDate: string;
        prevDecade: string;
        nextDecade: string;
        prevYear: string;
        nextYear: string;
        prevMonth: string;
        nextMonth: string;
        prevHour: string;
        nextHour: string;
        prevMinute: string;
        nextMinute: string;
        prevSecond: string;
        nextSecond: string;
        am: string;
        pm: string;
        today: string;
        now: string;
        weekHeader: string;
        firstDayOfWeek: number;
        showMonthAfterYear: boolean;
        dateFormat: string;
        weak: string;
        medium: string;
        strong: string;
        passwordPrompt: string;
        emptyFilterMessage: string;
        searchMessage: string;
        selectionMessage: string;
        emptySelectionMessage: string;
        emptySearchMessage: string;
        emptyMessage: string;
        emptyFileUploadMessage: string;
        password: string;
        openMenu: string;
        toggleColorMode: string;
        signOut: string;
        profile: string;
        filesSelected: string;
        dragFilesHere: string;
        filesBeingDropped: string;
        typeNotSupported: string;
        maximumAllowedFiles: string;
        remove: string;
        edit: string;
        save: string;
        generatePhoto: string;
        settings: string;
        addCategory: string;
        addItem: string;
        delete: string;
        any: string;
        chooseFile: string;
        chooseImage: string;
        changeImage: string;
        tapToUpload: string;
        clickOrDragToUpload: string;
        addImages: string;
        greaterThan: string;
        greaterThanOrEqualTo: string;
        lessThan: string;
        lessThanOrEqualTo: string;
        between: string;
        include: string;
        equal: string;
        after: string;
        before: string;
        not: string;
        aria: {
            trueLabel: string;
            falseLabel: string;
            nullLabel: string;
            star: string;
            stars: string;
            selectAll: string;
            unselectAll: string;
            close: string;
            previous: string;
            next: string;
            navigation: string;
            scrollTop: string;
            moveTop: string;
            moveUp: string;
            moveDown: string;
            moveBottom: string;
            moveToTarget: string;
            moveToSource: string;
            moveAllToTarget: string;
            moveAllToSource: string;
            pageLabel: string;
            firstPageLabel: string;
            lastPageLabel: string;
            nextPageLabel: string;
            previousPageLabel: string;
            rowsPerPageLabel: string;
            jumpToPageDropdownLabel: string;
            jumpToPageInputLabel: string;
            selectRow: string;
            unselectRow: string;
            expandRow: string;
            collapseRow: string;
            showFilterMenu: string;
            hideFilterMenu: string;
            filterOperator: string;
            filterConstraint: string;
            editRow: string;
            saveEdit: string;
            cancelEdit: string;
            listView: string;
            gridView: string;
            slide: string;
            slideNumber: string;
            zoomImage: string;
            zoomIn: string;
            zoomOut: string;
            rotateRight: string;
            rotateLeft: string;
        };
    };
    es: {
        startsWith: string;
        contains: string;
        notContains: string;
        endsWith: string;
        equals: string;
        notEquals: string;
        noFilter: string;
        lt: string;
        lte: string;
        gt: string;
        gte: string;
        dateIs: string;
        dateIsNot: string;
        dateBefore: string;
        dateAfter: string;
        custom: string;
        clear: string;
        apply: string;
        matchAll: string;
        matchAny: string;
        addRule: string;
        removeRule: string;
        accept: string;
        reject: string;
        choose: string;
        upload: string;
        cancel: string;
        fileSizeTypes: string[];
        dayNames: string[];
        dayNamesShort: string[];
        dayNamesMin: string[];
        monthNames: string[];
        monthNamesShort: string[];
        today: string;
        now: string;
        weekHeader: string;
        firstDayOfWeek: number;
        showMonthAfterYear: boolean;
        dateFormat: string;
        weak: string;
        medium: string;
        strong: string;
        passwordPrompt: string;
        emptyFilterMessage: string;
        emptyMessage: string;
        openMenu: string;
        toggleColorMode: string;
        signOut: string;
        profile: string;
        filesSelected: string;
        dragFilesHere: string;
        filesBeingDropped: string;
        typeNotSupported: string;
        maximumAllowedFiles: string;
        remove: string;
        edit: string;
        save: string;
        generatePhoto: string;
        settings: string;
        addCategory: string;
        addItem: string;
        delete: string;
        any: string;
        chooseFile: string;
        greaterThan: string;
        greaterThanOrEqualTo: string;
        lessThan: string;
        lessThanOrEqualTo: string;
        between: string;
        include: string;
        equal: string;
        after: string;
        before: string;
        not: string;
        aria: {
            trueLabel: string;
            falseLabel: string;
            nullLabel: string;
            star: string;
            stars: string;
            selectAll: string;
            unselectAll: string;
            close: string;
            previous: string;
            next: string;
            navigation: string;
            scrollTop: string;
            moveTop: string;
            moveUp: string;
            moveDown: string;
            moveBottom: string;
            moveToTarget: string;
            moveToSource: string;
            moveAllToTarget: string;
            moveAllToSource: string;
            pageLabel: string;
            firstPageLabel: string;
            lastPageLabel: string;
            nextPageLabel: string;
            previousPageLabel: string;
            rowsPerPageLabel: string;
            jumpToPageDropdownLabel: string;
            jumpToPageInputLabel: string;
            selectRow: string;
            unselectRow: string;
            expandRow: string;
            collapseRow: string;
            showFilterMenu: string;
            hideFilterMenu: string;
            filterOperator: string;
            filterConstraint: string;
            editRow: string;
            saveEdit: string;
            cancelEdit: string;
            listView: string;
            gridView: string;
            slide: string;
            slideNumber: string;
            zoomImage: string;
            zoomIn: string;
            zoomOut: string;
            rotateRight: string;
            rotateLeft: string;
        };
    };
    fa: {
        accept: string;
        reject: string;
        choose: string;
        upload: string;
        cancel: string;
        dayNames: string[];
        dayNamesShort: string[];
        dayNamesMin: string[];
        monthNames: string[];
        monthNamesShort: string[];
        today: string;
        clear: string;
        weekHeader: string;
        firstDayOfWeek: number;
        showMonthAfterYear: boolean;
        dateFormat: string;
        weak: string;
        medium: string;
        strong: string;
        passwordPrompt: string;
        startsWith: string;
        contains: string;
        notContains: string;
        endsWith: string;
        equals: string;
        notEquals: string;
        noFilter: string;
        filter: string;
        lt: string;
        lte: string;
        gt: string;
        gte: string;
        dateIs: string;
        dateIsNot: string;
        dateBefore: string;
        dateAfter: string;
        custom: string;
        apply: string;
        matchAll: string;
        matchAny: string;
        addRule: string;
        removeRule: string;
        completed: string;
        pending: string;
        chooseYear: string;
        chooseMonth: string;
        chooseDate: string;
        prevDecade: string;
        nextDecade: string;
        prevYear: string;
        nextYear: string;
        prevMonth: string;
        nextMonth: string;
        prevHour: string;
        nextHour: string;
        prevMinute: string;
        nextMinute: string;
        prevSecond: string;
        nextSecond: string;
        am: string;
        pm: string;
        emptyFilterMessage: string;
        searchMessage: string;
        selectionMessage: string;
        emptySelectionMessage: string;
        emptySearchMessage: string;
        emptyMessage: string;
        openMenu: string;
        toggleColorMode: string;
        signOut: string;
        profile: string;
        filesSelected: string;
        dragFilesHere: string;
        filesBeingDropped: string;
        typeNotSupported: string;
        maximumAllowedFiles: string;
        remove: string;
        edit: string;
        save: string;
        generatePhoto: string;
        settings: string;
        addCategory: string;
        addItem: string;
        delete: string;
        any: string;
        chooseFile: string;
        greaterThan: string;
        greaterThanOrEqualTo: string;
        lessThan: string;
        lessThanOrEqualTo: string;
        between: string;
        include: string;
        equal: string;
        after: string;
        before: string;
        not: string;
        aria: {
            trueLabel: string;
            falseLabel: string;
            nullLabel: string;
            star: string;
            stars: string;
            selectAll: string;
            unselectAll: string;
            close: string;
            previous: string;
            next: string;
            navigation: string;
            scrollTop: string;
            moveTop: string;
            moveUp: string;
            moveDown: string;
            moveBottom: string;
            moveToTarget: string;
            moveToSource: string;
            moveAllToTarget: string;
            moveAllToSource: string;
            pageLabel: string;
            firstPageLabel: string;
            lastPageLabel: string;
            nextPageLabel: string;
            previousPageLabel: string;
            rowsPerPageLabel: string;
            jumpToPageDropdownLabel: string;
            jumpToPageInputLabel: string;
            selectRow: string;
            unselectRow: string;
            expandRow: string;
            collapseRow: string;
            showFilterMenu: string;
            hideFilterMenu: string;
            filterOperator: string;
            filterConstraint: string;
            editRow: string;
            saveEdit: string;
            cancelEdit: string;
            listView: string;
            gridView: string;
            slide: string;
            slideNumber: string;
            zoomImage: string;
            zoomIn: string;
            zoomOut: string;
            rotateRight: string;
            rotateLeft: string;
        };
    };
    fi: {
        startsWith: string;
        contains: string;
        notContains: string;
        endsWith: string;
        equals: string;
        notEquals: string;
        noFilter: string;
        lt: string;
        lte: string;
        gt: string;
        gte: string;
        dateIs: string;
        dateIsNot: string;
        dateBefore: string;
        dateAfter: string;
        custom: string;
        clear: string;
        apply: string;
        matchAll: string;
        matchAny: string;
        addRule: string;
        removeRule: string;
        accept: string;
        reject: string;
        choose: string;
        upload: string;
        cancel: string;
        dayNames: string[];
        dayNamesShort: string[];
        dayNamesMin: string[];
        monthNames: string[];
        monthNamesShort: string[];
        chooseYear: string;
        chooseMonth: string;
        chooseDate: string;
        prevDecade: string;
        nextDecade: string;
        prevYear: string;
        nextYear: string;
        prevMonth: string;
        nextMonth: string;
        prevHour: string;
        nextHour: string;
        prevMinute: string;
        nextMinute: string;
        prevSecond: string;
        nextSecond: string;
        am: string;
        pm: string;
        today: string;
        now: string;
        weekHeader: string;
        firstDayOfWeek: number;
        showMonthAfterYear: boolean;
        dateFormat: string;
        weak: string;
        medium: string;
        strong: string;
        passwordPrompt: string;
        emptyFilterMessage: string;
        searchMessage: string;
        selectionMessage: string;
        emptySelectionMessage: string;
        emptySearchMessage: string;
        emptyMessage: string;
        openMenu: string;
        toggleColorMode: string;
        signOut: string;
        profile: string;
        filesSelected: string;
        dragFilesHere: string;
        filesBeingDropped: string;
        typeNotSupported: string;
        maximumAllowedFiles: string;
        remove: string;
        edit: string;
        save: string;
        generatePhoto: string;
        settings: string;
        addCategory: string;
        addItem: string;
        delete: string;
        any: string;
        chooseFile: string;
        greaterThan: string;
        greaterThanOrEqualTo: string;
        lessThan: string;
        lessThanOrEqualTo: string;
        between: string;
        include: string;
        equal: string;
        after: string;
        before: string;
        not: string;
        aria: {
            trueLabel: string;
            falseLabel: string;
            nullLabel: string;
            star: string;
            stars: string;
            selectAll: string;
            unselectAll: string;
            close: string;
            previous: string;
            next: string;
            navigation: string;
            scrollTop: string;
            moveTop: string;
            moveUp: string;
            moveDown: string;
            moveBottom: string;
            moveToTarget: string;
            moveToSource: string;
            pageLabel: string;
            firstPageLabel: string;
            lastPageLabel: string;
            nextPageLabel: string;
            prevPageLabel: string;
            rowsPerPageLabel: string;
            jumpToPageDropdownLabel: string;
            jumpToPageInputLabel: string;
            selectRow: string;
            unselectRow: string;
            expandRow: string;
            collapseRow: string;
            showFilterMenu: string;
            hideFilterMenu: string;
            filterOperator: string;
            filterConstraint: string;
            editRow: string;
            saveEdit: string;
            cancelEdit: string;
            listView: string;
            gridView: string;
            slide: string;
            slideNumber: string;
            zoomImage: string;
            zoomIn: string;
            zoomOut: string;
            rotateRight: string;
            rotateLeft: string;
        };
    };
    fr: {
        startsWith: string;
        contains: string;
        notContains: string;
        endsWith: string;
        equals: string;
        notEquals: string;
        noFilter: string;
        filter: string;
        lt: string;
        lte: string;
        gt: string;
        gte: string;
        dateIs: string;
        dateIsNot: string;
        dateBefore: string;
        dateAfter: string;
        custom: string;
        clear: string;
        apply: string;
        matchAll: string;
        matchAny: string;
        addRule: string;
        removeRule: string;
        accept: string;
        reject: string;
        choose: string;
        upload: string;
        cancel: string;
        completed: string;
        pending: string;
        fileSizeTypes: string[];
        dayNames: string[];
        dayNamesShort: string[];
        dayNamesMin: string[];
        monthNames: string[];
        monthNamesShort: string[];
        chooseYear: string;
        chooseMonth: string;
        chooseDate: string;
        prevDecade: string;
        nextDecade: string;
        prevYear: string;
        nextYear: string;
        prevMonth: string;
        nextMonth: string;
        prevHour: string;
        nextHour: string;
        prevMinute: string;
        nextMinute: string;
        prevSecond: string;
        nextSecond: string;
        am: string;
        pm: string;
        today: string;
        now: string;
        weekHeader: string;
        firstDayOfWeek: number;
        showMonthAfterYear: boolean;
        dateFormat: string;
        weak: string;
        medium: string;
        strong: string;
        passwordPrompt: string;
        emptyFilterMessage: string;
        searchMessage: string;
        selectionMessage: string;
        emptySelectionMessage: string;
        emptySearchMessage: string;
        emptyMessage: string;
        openMenu: string;
        toggleColorMode: string;
        signOut: string;
        profile: string;
        filesSelected: string;
        dragFilesHere: string;
        filesBeingDropped: string;
        typeNotSupported: string;
        maximumAllowedFiles: string;
        remove: string;
        edit: string;
        save: string;
        generatePhoto: string;
        settings: string;
        addCategory: string;
        addItem: string;
        delete: string;
        any: string;
        chooseFile: string;
        greaterThan: string;
        greaterThanOrEqualTo: string;
        lessThan: string;
        lessThanOrEqualTo: string;
        between: string;
        include: string;
        equal: string;
        after: string;
        before: string;
        not: string;
        aria: {
            trueLabel: string;
            falseLabel: string;
            nullLabel: string;
            star: string;
            stars: string;
            selectAll: string;
            unselectAll: string;
            close: string;
            previous: string;
            next: string;
            navigation: string;
            scrollTop: string;
            moveTop: string;
            moveUp: string;
            moveDown: string;
            moveBottom: string;
            moveToTarget: string;
            moveToSource: string;
            moveAllToTarget: string;
            moveAllToSource: string;
            pageLabel: string;
            firstPageLabel: string;
            lastPageLabel: string;
            nextPageLabel: string;
            rowsPerPageLabel: string;
            previousPageLabel: string;
            jumpToPageDropdownLabel: string;
            jumpToPageInputLabel: string;
            selectRow: string;
            unselectRow: string;
            expandRow: string;
            collapseRow: string;
            showFilterMenu: string;
            hideFilterMenu: string;
            filterOperator: string;
            filterConstraint: string;
            editRow: string;
            saveEdit: string;
            cancelEdit: string;
            listView: string;
            gridView: string;
            slide: string;
            slideNumber: string;
            zoomImage: string;
            zoomIn: string;
            zoomOut: string;
            rotateRight: string;
            rotateLeft: string;
        };
    };
    gr: {
        startsWith: string;
        contains: string;
        notContains: string;
        endsWith: string;
        equals: string;
        notEquals: string;
        noFilter: string;
        lt: string;
        lte: string;
        gt: string;
        gte: string;
        dateIs: string;
        dateIsNot: string;
        dateBefore: string;
        dateAfter: string;
        custom: string;
        clear: string;
        apply: string;
        matchAll: string;
        matchAny: string;
        addRule: string;
        removeRule: string;
        accept: string;
        reject: string;
        choose: string;
        upload: string;
        cancel: string;
        dayNames: string[];
        dayNamesShort: string[];
        dayNamesMin: string[];
        monthNames: string[];
        monthNamesShort: string[];
        today: string;
        weekHeader: string;
        firstDayOfWeek: number;
        showMonthAfterYear: boolean;
        dateFormat: string;
        weak: string;
        medium: string;
        strong: string;
        passwordPrompt: string;
        emptyFilterMessage: string;
        emptyMessage: string;
        openMenu: string;
        toggleColorMode: string;
        signOut: string;
        profile: string;
        filesSelected: string;
        dragFilesHere: string;
        filesBeingDropped: string;
        typeNotSupported: string;
        maximumAllowedFiles: string;
        remove: string;
        edit: string;
        save: string;
        generatePhoto: string;
        settings: string;
        addCategory: string;
        addItem: string;
        delete: string;
        any: string;
        chooseFile: string;
        greaterThan: string;
        greaterThanOrEqualTo: string;
        lessThan: string;
        lessThanOrEqualTo: string;
        between: string;
        include: string;
        equal: string;
        after: string;
        before: string;
        not: string;
        aria: {
            close: string;
            previous: string;
            next: string;
            trueLabel: string;
            falseLabel: string;
            nullLabel: string;
            pageLabel: string;
            firstPageLabel: string;
            lastPageLabel: string;
            nextPageLabel: string;
            previousPageLabel: string;
        };
    };
    he: {
        startsWith: string;
        contains: string;
        notContains: string;
        endsWith: string;
        equals: string;
        notEquals: string;
        noFilter: string;
        filter: string;
        lt: string;
        lte: string;
        gt: string;
        gte: string;
        dateIs: string;
        dateIsNot: string;
        dateBefore: string;
        dateAfter: string;
        custom: string;
        clear: string;
        apply: string;
        matchAll: string;
        matchAny: string;
        addRule: string;
        removeRule: string;
        accept: string;
        reject: string;
        choose: string;
        upload: string;
        cancel: string;
        completed: string;
        pending: string;
        fileSizeTypes: string[];
        dayNames: string[];
        dayNamesShort: string[];
        dayNamesMin: string[];
        monthNames: string[];
        monthNamesShort: string[];
        chooseYear: string;
        chooseMonth: string;
        chooseDate: string;
        prevDecade: string;
        nextDecade: string;
        prevYear: string;
        nextYear: string;
        prevMonth: string;
        nextMonth: string;
        prevHour: string;
        nextHour: string;
        prevMinute: string;
        nextMinute: string;
        prevSecond: string;
        nextSecond: string;
        am: string;
        pm: string;
        today: string;
        now: string;
        weekHeader: string;
        firstDayOfWeek: number;
        showMonthAfterYear: boolean;
        dateFormat: string;
        weak: string;
        medium: string;
        strong: string;
        passwordPrompt: string;
        emptyFilterMessage: string;
        searchMessage: string;
        selectionMessage: string;
        emptySelectionMessage: string;
        emptySearchMessage: string;
        emptyMessage: string;
        openMenu: string;
        toggleColorMode: string;
        signOut: string;
        profile: string;
        filesSelected: string;
        dragFilesHere: string;
        filesBeingDropped: string;
        typeNotSupported: string;
        maximumAllowedFiles: string;
        remove: string;
        edit: string;
        save: string;
        generatePhoto: string;
        settings: string;
        addCategory: string;
        addItem: string;
        delete: string;
        any: string;
        chooseFile: string;
        greaterThan: string;
        greaterThanOrEqualTo: string;
        lessThan: string;
        lessThanOrEqualTo: string;
        between: string;
        include: string;
        equal: string;
        after: string;
        before: string;
        not: string;
        aria: {
            trueLabel: string;
            falseLabel: string;
            nullLabel: string;
            star: string;
            stars: string;
            selectAll: string;
            unselectAll: string;
            close: string;
            previous: string;
            next: string;
            navigation: string;
            scrollTop: string;
            moveTop: string;
            moveUp: string;
            moveDown: string;
            moveBottom: string;
            moveToTarget: string;
            moveToSource: string;
            moveAllToTarget: string;
            moveAllToSource: string;
            pageLabel: string;
            firstPageLabel: string;
            lastPageLabel: string;
            nextPageLabel: string;
            previousPageLabel: string;
            rowsPerPageLabel: string;
            jumpToPageDropdownLabel: string;
            jumpToPageInputLabel: string;
            selectRow: string;
            unselectRow: string;
            expandRow: string;
            collapseRow: string;
            showFilterMenu: string;
            hideFilterMenu: string;
            filterOperator: string;
            filterConstraint: string;
            editRow: string;
            saveEdit: string;
            cancelEdit: string;
            listView: string;
            gridView: string;
            slide: string;
            slideNumber: string;
            zoomImage: string;
            zoomIn: string;
            zoomOut: string;
            rotateRight: string;
            rotateLeft: string;
        };
    };
    hi: {
        startsWith: string;
        contains: string;
        notContains: string;
        endsWith: string;
        equals: string;
        notEquals: string;
        noFilter: string;
        filter: string;
        lt: string;
        lte: string;
        gt: string;
        gte: string;
        dateIs: string;
        dateIsNot: string;
        dateBefore: string;
        dateAfter: string;
        custom: string;
        clear: string;
        apply: string;
        matchAll: string;
        matchAny: string;
        addRule: string;
        removeRule: string;
        accept: string;
        reject: string;
        choose: string;
        upload: string;
        cancel: string;
        completed: string;
        pending: string;
        fileSizeTypes: string[];
        dayNames: string[];
        dayNamesShort: string[];
        dayNamesMin: string[];
        monthNames: string[];
        monthNamesShort: string[];
        chooseYear: string;
        chooseMonth: string;
        chooseDate: string;
        prevDecade: string;
        nextDecade: string;
        prevYear: string;
        nextYear: string;
        prevMonth: string;
        nextMonth: string;
        prevHour: string;
        nextHour: string;
        prevMinute: string;
        nextMinute: string;
        prevSecond: string;
        nextSecond: string;
        am: string;
        pm: string;
        today: string;
        now: string;
        weekHeader: string;
        firstDayOfWeek: number;
        showMonthAfterYear: boolean;
        dateFormat: string;
        weak: string;
        medium: string;
        strong: string;
        passwordPrompt: string;
        emptyFilterMessage: string;
        searchMessage: string;
        selectionMessage: string;
        emptySelectionMessage: string;
        emptySearchMessage: string;
        emptyMessage: string;
        openMenu: string;
        toggleColorMode: string;
        signOut: string;
        profile: string;
        filesSelected: string;
        dragFilesHere: string;
        filesBeingDropped: string;
        typeNotSupported: string;
        maximumAllowedFiles: string;
        remove: string;
        edit: string;
        save: string;
        generatePhoto: string;
        settings: string;
        addCategory: string;
        addItem: string;
        delete: string;
        any: string;
        chooseFile: string;
        greaterThan: string;
        greaterThanOrEqualTo: string;
        lessThan: string;
        lessThanOrEqualTo: string;
        between: string;
        include: string;
        equal: string;
        after: string;
        before: string;
        not: string;
        aria: {
            trueLabel: string;
            falseLabel: string;
            nullLabel: string;
            star: string;
            stars: string;
            selectAll: string;
            unselectAll: string;
            close: string;
            previous: string;
            next: string;
            navigation: string;
            scrollTop: string;
            moveTop: string;
            moveUp: string;
            moveDown: string;
            moveBottom: string;
            moveToTarget: string;
            moveToSource: string;
            moveAllToTarget: string;
            moveAllToSource: string;
            pageLabel: string;
            firstPageLabel: string;
            lastPageLabel: string;
            nextPageLabel: string;
            previousPageLabel: string;
            rowsPerPageLabel: string;
            jumpToPageDropdownLabel: string;
            jumpToPageInputLabel: string;
            selectRow: string;
            unselectRow: string;
            expandRow: string;
            collapseRow: string;
            showFilterMenu: string;
            hideFilterMenu: string;
            filterOperator: string;
            filterConstraint: string;
            editRow: string;
            saveEdit: string;
            cancelEdit: string;
            listView: string;
            gridView: string;
            slide: string;
            slideNumber: string;
            zoomImage: string;
            zoomIn: string;
            zoomOut: string;
            rotateRight: string;
            rotateLeft: string;
        };
    };
    hu: {
        startsWith: string;
        contains: string;
        notContains: string;
        endsWith: string;
        equals: string;
        notEquals: string;
        noFilter: string;
        filter: string;
        lt: string;
        lte: string;
        gt: string;
        gte: string;
        dateIs: string;
        dateIsNot: string;
        dateBefore: string;
        dateAfter: string;
        custom: string;
        clear: string;
        apply: string;
        matchAll: string;
        matchAny: string;
        addRule: string;
        removeRule: string;
        accept: string;
        reject: string;
        choose: string;
        upload: string;
        cancel: string;
        completed: string;
        pending: string;
        dayNames: string[];
        dayNamesShort: string[];
        dayNamesMin: string[];
        monthNames: string[];
        monthNamesShort: string[];
        chooseYear: string;
        chooseMonth: string;
        chooseDate: string;
        prevDecade: string;
        nextDecade: string;
        prevYear: string;
        nextYear: string;
        prevMonth: string;
        nextMonth: string;
        prevHour: string;
        nextHour: string;
        prevMinute: string;
        nextMinute: string;
        prevSecond: string;
        nextSecond: string;
        am: string;
        pm: string;
        today: string;
        now: string;
        weekHeader: string;
        firstDayOfWeek: number;
        showMonthAfterYear: boolean;
        dateFormat: string;
        weak: string;
        medium: string;
        strong: string;
        passwordPrompt: string;
        emptyFilterMessage: string;
        searchMessage: string;
        selectionMessage: string;
        emptySelectionMessage: string;
        emptySearchMessage: string;
        emptyMessage: string;
        openMenu: string;
        toggleColorMode: string;
        signOut: string;
        profile: string;
        filesSelected: string;
        dragFilesHere: string;
        filesBeingDropped: string;
        typeNotSupported: string;
        maximumAllowedFiles: string;
        remove: string;
        edit: string;
        save: string;
        generatePhoto: string;
        settings: string;
        addCategory: string;
        addItem: string;
        delete: string;
        any: string;
        chooseFile: string;
        greaterThan: string;
        greaterThanOrEqualTo: string;
        lessThan: string;
        lessThanOrEqualTo: string;
        between: string;
        include: string;
        equal: string;
        after: string;
        before: string;
        not: string;
        aria: {
            trueLabel: string;
            falseLabel: string;
            nullLabel: string;
            star: string;
            stars: string;
            selectAll: string;
            unselectAll: string;
            close: string;
            previous: string;
            next: string;
            navigation: string;
            scrollTop: string;
            moveTop: string;
            moveUp: string;
            moveDown: string;
            moveBottom: string;
            moveToTarget: string;
            moveToSource: string;
            moveAllToTarget: string;
            moveAllToSource: string;
            pageLabel: string;
            firstPageLabel: string;
            lastPageLabel: string;
            nextPageLabel: string;
            previousPageLabel: string;
            rowsPerPageLabel: string;
            jumpToPageDropdownLabel: string;
            jumpToPageInputLabel: string;
            selectRow: string;
            unselectRow: string;
            expandRow: string;
            collapseRow: string;
            showFilterMenu: string;
            hideFilterMenu: string;
            filterOperator: string;
            filterConstraint: string;
            editRow: string;
            saveEdit: string;
            cancelEdit: string;
            listView: string;
            gridView: string;
            slide: string;
            slideNumber: string;
            zoomImage: string;
            zoomIn: string;
            zoomOut: string;
            rotateRight: string;
            rotateLeft: string;
        };
    };
    id: {
        startsWith: string;
        contains: string;
        notContains: string;
        endsWith: string;
        equals: string;
        notEquals: string;
        noFilter: string;
        filter: string;
        lt: string;
        lte: string;
        gt: string;
        gte: string;
        dateIs: string;
        dateIsNot: string;
        dateBefore: string;
        dateAfter: string;
        custom: string;
        clear: string;
        apply: string;
        matchAll: string;
        matchAny: string;
        addRule: string;
        removeRule: string;
        accept: string;
        reject: string;
        choose: string;
        upload: string;
        cancel: string;
        completed: string;
        pending: string;
        dayNames: string[];
        dayNamesShort: string[];
        dayNamesMin: string[];
        monthNames: string[];
        monthNamesShort: string[];
        chooseYear: string;
        chooseMonth: string;
        chooseDate: string;
        prevDecade: string;
        nextDecade: string;
        prevYear: string;
        nextYear: string;
        prevMonth: string;
        nextMonth: string;
        prevHour: string;
        nextHour: string;
        prevMinute: string;
        nextMinute: string;
        prevSecond: string;
        nextSecond: string;
        am: string;
        pm: string;
        today: string;
        weekHeader: string;
        firstDayOfWeek: number;
        showMonthAfterYear: boolean;
        dateFormat: string;
        weak: string;
        medium: string;
        strong: string;
        passwordPrompt: string;
        emptyFilterMessage: string;
        searchMessage: string;
        selectionMessage: string;
        emptySelectionMessage: string;
        emptySearchMessage: string;
        emptyMessage: string;
        openMenu: string;
        toggleColorMode: string;
        signOut: string;
        profile: string;
        filesSelected: string;
        dragFilesHere: string;
        filesBeingDropped: string;
        typeNotSupported: string;
        maximumAllowedFiles: string;
        remove: string;
        edit: string;
        save: string;
        generatePhoto: string;
        settings: string;
        addCategory: string;
        addItem: string;
        delete: string;
        any: string;
        chooseFile: string;
        greaterThan: string;
        greaterThanOrEqualTo: string;
        lessThan: string;
        lessThanOrEqualTo: string;
        between: string;
        include: string;
        equal: string;
        after: string;
        before: string;
        not: string;
        aria: {
            trueLabel: string;
            falseLabel: string;
            nullLabel: string;
            star: string;
            stars: string;
            selectAll: string;
            unselectAll: string;
            close: string;
            previous: string;
            next: string;
            navigation: string;
            scrollTop: string;
            moveTop: string;
            moveUp: string;
            moveDown: string;
            moveBottom: string;
            moveToTarget: string;
            moveToSource: string;
            moveAllToTarget: string;
            moveAllToSource: string;
            pageLabel: string;
            firstPageLabel: string;
            lastPageLabel: string;
            nextPageLabel: string;
            previousPageLabel: string;
            rowsPerPageLabel: string;
            jumpToPageDropdownLabel: string;
            jumpToPageInputLabel: string;
            selectRow: string;
            unselectRow: string;
            expandRow: string;
            collapseRow: string;
            showFilterMenu: string;
            hideFilterMenu: string;
            filterOperator: string;
            filterConstraint: string;
            editRow: string;
            saveEdit: string;
            cancelEdit: string;
            listView: string;
            gridView: string;
            slide: string;
            slideNumber: string;
            zoomImage: string;
            zoomIn: string;
            zoomOut: string;
            rotateRight: string;
            rotateLeft: string;
        };
    };
    it: {
        startsWith: string;
        contains: string;
        notContains: string;
        endsWith: string;
        equals: string;
        notEquals: string;
        noFilter: string;
        filter: string;
        lt: string;
        lte: string;
        gt: string;
        gte: string;
        dateIs: string;
        dateIsNot: string;
        dateBefore: string;
        dateAfter: string;
        custom: string;
        clear: string;
        apply: string;
        matchAll: string;
        matchAny: string;
        addRule: string;
        removeRule: string;
        accept: string;
        reject: string;
        choose: string;
        upload: string;
        cancel: string;
        completed: string;
        pending: string;
        fileSizeTypes: string[];
        dayNames: string[];
        dayNamesShort: string[];
        dayNamesMin: string[];
        monthNames: string[];
        monthNamesShort: string[];
        chooseYear: string;
        chooseMonth: string;
        chooseDate: string;
        prevDecade: string;
        nextDecade: string;
        prevYear: string;
        nextYear: string;
        prevMonth: string;
        nextMonth: string;
        prevHour: string;
        nextHour: string;
        prevMinute: string;
        nextMinute: string;
        prevSecond: string;
        nextSecond: string;
        am: string;
        pm: string;
        today: string;
        now: string;
        weekHeader: string;
        firstDayOfWeek: number;
        showMonthAfterYear: boolean;
        dateFormat: string;
        weak: string;
        medium: string;
        strong: string;
        passwordPrompt: string;
        emptyFilterMessage: string;
        searchMessage: string;
        selectionMessage: string;
        emptySelectionMessage: string;
        emptySearchMessage: string;
        emptyMessage: string;
        openMenu: string;
        toggleColorMode: string;
        signOut: string;
        profile: string;
        filesSelected: string;
        dragFilesHere: string;
        filesBeingDropped: string;
        typeNotSupported: string;
        maximumAllowedFiles: string;
        remove: string;
        edit: string;
        save: string;
        generatePhoto: string;
        settings: string;
        addCategory: string;
        addItem: string;
        delete: string;
        any: string;
        chooseFile: string;
        greaterThan: string;
        greaterThanOrEqualTo: string;
        lessThan: string;
        lessThanOrEqualTo: string;
        between: string;
        include: string;
        equal: string;
        after: string;
        before: string;
        not: string;
        aria: {
            trueLabel: string;
            falseLabel: string;
            nullLabel: string;
            pageLabel: string;
            firstPageLabel: string;
            lastPageLabel: string;
            nextPageLabel: string;
            previousPageLabel: string;
            selectLabel: string;
            unselectLabel: string;
            expandLabel: string;
            collapseLabel: string;
            star: string;
            stars: string;
            selectAll: string;
            unselectAll: string;
            close: string;
            previous: string;
            next: string;
            navigation: string;
            scrollTop: string;
            moveTop: string;
            moveUp: string;
            moveDown: string;
            moveBottom: string;
            moveToTarget: string;
            moveToSource: string;
            moveAllToTarget: string;
            moveAllToSource: string;
            rowsPerPageLabel: string;
            jumpToPageDropdownLabel: string;
            jumpToPageInputLabel: string;
            selectRow: string;
            unselectRow: string;
            expandRow: string;
            collapseRow: string;
            showFilterMenu: string;
            hideFilterMenu: string;
            filterOperator: string;
            filterConstraint: string;
            editRow: string;
            saveEdit: string;
            cancelEdit: string;
            listView: string;
            gridView: string;
            slide: string;
            slideNumber: string;
            zoomImage: string;
            zoomIn: string;
            zoomOut: string;
            rotateRight: string;
            rotateLeft: string;
        };
    };
    ja: {
        startsWith: string;
        contains: string;
        notContains: string;
        endsWith: string;
        equals: string;
        notEquals: string;
        noFilter: string;
        filter: string;
        lt: string;
        lte: string;
        gt: string;
        gte: string;
        dateIs: string;
        dateIsNot: string;
        dateBefore: string;
        dateAfter: string;
        custom: string;
        clear: string;
        apply: string;
        matchAll: string;
        matchAny: string;
        addRule: string;
        removeRule: string;
        accept: string;
        reject: string;
        choose: string;
        upload: string;
        cancel: string;
        completed: string;
        pending: string;
        dayNames: string[];
        dayNamesShort: string[];
        dayNamesMin: string[];
        monthNames: string[];
        monthNamesShort: string[];
        chooseYear: string;
        chooseMonth: string;
        chooseDate: string;
        prevDecade: string;
        nextDecade: string;
        prevYear: string;
        nextYear: string;
        prevMonth: string;
        nextMonth: string;
        prevHour: string;
        nextHour: string;
        prevMinute: string;
        nextMinute: string;
        prevSecond: string;
        nextSecond: string;
        am: string;
        pm: string;
        today: string;
        weekHeader: string;
        firstDayOfWeek: number;
        showMonthAfterYear: boolean;
        dateFormat: string;
        weak: string;
        medium: string;
        strong: string;
        passwordPrompt: string;
        emptyFilterMessage: string;
        searchMessage: string;
        selectionMessage: string;
        emptySelectionMessage: string;
        emptySearchMessage: string;
        emptyMessage: string;
        openMenu: string;
        toggleColorMode: string;
        signOut: string;
        profile: string;
        filesSelected: string;
        dragFilesHere: string;
        filesBeingDropped: string;
        typeNotSupported: string;
        maximumAllowedFiles: string;
        remove: string;
        edit: string;
        save: string;
        generatePhoto: string;
        settings: string;
        addCategory: string;
        addItem: string;
        delete: string;
        any: string;
        chooseFile: string;
        greaterThan: string;
        greaterThanOrEqualTo: string;
        lessThan: string;
        lessThanOrEqualTo: string;
        between: string;
        include: string;
        equal: string;
        after: string;
        before: string;
        not: string;
        aria: {
            trueLabel: string;
            falseLabel: string;
            nullLabel: string;
            star: string;
            stars: string;
            selectAll: string;
            unselectAll: string;
            close: string;
            previous: string;
            next: string;
            navigation: string;
            scrollTop: string;
            moveTop: string;
            moveUp: string;
            moveDown: string;
            moveBottom: string;
            moveToTarget: string;
            moveToSource: string;
            moveAllToTarget: string;
            moveAllToSource: string;
            pageLabel: string;
            firstPageLabel: string;
            lastPageLabel: string;
            nextPageLabel: string;
            previousPageLabel: string;
            rowsPerPageLabel: string;
            jumpToPageDropdownLabel: string;
            jumpToPageInputLabel: string;
            selectRow: string;
            unselectRow: string;
            expandRow: string;
            collapseRow: string;
            showFilterMenu: string;
            hideFilterMenu: string;
            filterOperator: string;
            filterConstraint: string;
            editRow: string;
            saveEdit: string;
            cancelEdit: string;
            listView: string;
            gridView: string;
            slide: string;
            slideNumber: string;
            zoomImage: string;
            zoomIn: string;
            zoomOut: string;
            rotateRight: string;
            rotateLeft: string;
        };
    };
    kg: {
        startsWith: string;
        contains: string;
        notContains: string;
        endsWith: string;
        equals: string;
        notEquals: string;
        noFilter: string;
        filter: string;
        lt: string;
        lte: string;
        gt: string;
        gte: string;
        dateIs: string;
        dateIsNot: string;
        dateBefore: string;
        dateAfter: string;
        custom: string;
        clear: string;
        apply: string;
        matchAll: string;
        matchAny: string;
        addRule: string;
        removeRule: string;
        accept: string;
        reject: string;
        choose: string;
        upload: string;
        cancel: string;
        completed: string;
        pending: string;
        fileSizeTypes: string[];
        dayNames: string[];
        dayNamesShort: string[];
        dayNamesMin: string[];
        monthNames: string[];
        monthNamesShort: string[];
        chooseYear: string;
        chooseMonth: string;
        chooseDate: string;
        prevDecade: string;
        nextDecade: string;
        prevYear: string;
        nextYear: string;
        prevMonth: string;
        nextMonth: string;
        prevHour: string;
        nextHour: string;
        prevMinute: string;
        nextMinute: string;
        prevSecond: string;
        nextSecond: string;
        am: string;
        pm: string;
        today: string;
        now: string;
        weekHeader: string;
        firstDayOfWeek: number;
        showMonthAfterYear: boolean;
        dateFormat: string;
        weak: string;
        medium: string;
        strong: string;
        passwordPrompt: string;
        emptyFilterMessage: string;
        searchMessage: string;
        selectionMessage: string;
        emptySelectionMessage: string;
        emptySearchMessage: string;
        emptyMessage: string;
        openMenu: string;
        toggleColorMode: string;
        signOut: string;
        profile: string;
        filesSelected: string;
        dragFilesHere: string;
        filesBeingDropped: string;
        typeNotSupported: string;
        maximumAllowedFiles: string;
        remove: string;
        edit: string;
        save: string;
        generatePhoto: string;
        settings: string;
        addCategory: string;
        addItem: string;
        delete: string;
        any: string;
        chooseFile: string;
        greaterThan: string;
        greaterThanOrEqualTo: string;
        lessThan: string;
        lessThanOrEqualTo: string;
        between: string;
        include: string;
        equal: string;
        after: string;
        before: string;
        not: string;
        aria: {
            trueLabel: string;
            falseLabel: string;
            nullLabel: string;
            star: string;
            stars: string;
            selectAll: string;
            unselectAll: string;
            close: string;
            previous: string;
            next: string;
            navigation: string;
            scrollTop: string;
            moveTop: string;
            moveUp: string;
            moveDown: string;
            moveBottom: string;
            moveToTarget: string;
            moveToSource: string;
            moveAllToTarget: string;
            moveAllToSource: string;
            pageLabel: string;
            firstPageLabel: string;
            lastPageLabel: string;
            nextPageLabel: string;
            previousPageLabel: string;
            rowsPerPageLabel: string;
            jumpToPageDropdownLabel: string;
            jumpToPageInputLabel: string;
            selectRow: string;
            unselectRow: string;
            expandRow: string;
            collapseRow: string;
            showFilterMenu: string;
            hideFilterMenu: string;
            filterOperator: string;
            filterConstraint: string;
            editRow: string;
            saveEdit: string;
            cancelEdit: string;
            listView: string;
            gridView: string;
            slide: string;
            slideNumber: string;
            zoomImage: string;
            zoomIn: string;
            zoomOut: string;
            rotateRight: string;
            rotateLeft: string;
        };
    };
    ko: {
        startsWith: string;
        contains: string;
        notContains: string;
        endsWith: string;
        equals: string;
        notEquals: string;
        noFilter: string;
        filter: string;
        lt: string;
        lte: string;
        gt: string;
        gte: string;
        dateIs: string;
        dateIsNot: string;
        dateBefore: string;
        dateAfter: string;
        custom: string;
        clear: string;
        apply: string;
        matchAll: string;
        matchAny: string;
        addRule: string;
        removeRule: string;
        accept: string;
        reject: string;
        choose: string;
        upload: string;
        cancel: string;
        completed: string;
        pending: string;
        fileSizeTypes: string[];
        dayNames: string[];
        dayNamesShort: string[];
        dayNamesMin: string[];
        monthNames: string[];
        monthNamesShort: string[];
        chooseYear: string;
        chooseMonth: string;
        chooseDate: string;
        prevDecade: string;
        nextDecade: string;
        prevYear: string;
        nextYear: string;
        prevMonth: string;
        nextMonth: string;
        prevHour: string;
        nextHour: string;
        prevMinute: string;
        nextMinute: string;
        prevSecond: string;
        nextSecond: string;
        am: string;
        pm: string;
        today: string;
        now: string;
        weekHeader: string;
        firstDayOfWeek: number;
        showMonthAfterYear: boolean;
        dateFormat: string;
        weak: string;
        medium: string;
        strong: string;
        passwordPrompt: string;
        emptyFilterMessage: string;
        searchMessage: string;
        selectionMessage: string;
        emptySelectionMessage: string;
        emptySearchMessage: string;
        emptyMessage: string;
        openMenu: string;
        toggleColorMode: string;
        signOut: string;
        profile: string;
        filesSelected: string;
        dragFilesHere: string;
        filesBeingDropped: string;
        typeNotSupported: string;
        maximumAllowedFiles: string;
        remove: string;
        edit: string;
        save: string;
        generatePhoto: string;
        settings: string;
        addCategory: string;
        addItem: string;
        delete: string;
        any: string;
        chooseFile: string;
        greaterThan: string;
        greaterThanOrEqualTo: string;
        lessThan: string;
        lessThanOrEqualTo: string;
        between: string;
        include: string;
        equal: string;
        after: string;
        before: string;
        not: string;
        aria: {
            trueLabel: string;
            falseLabel: string;
            nullLabel: string;
            star: string;
            stars: string;
            selectAll: string;
            unselectAll: string;
            close: string;
            previous: string;
            next: string;
            navigation: string;
            scrollTop: string;
            moveTop: string;
            moveUp: string;
            moveDown: string;
            moveBottom: string;
            moveToTarget: string;
            moveToSource: string;
            moveAllToTarget: string;
            moveAllToSource: string;
            pageLabel: string;
            firstPageLabel: string;
            lastPageLabel: string;
            nextPageLabel: string;
            previousPageLabel: string;
            rowsPerPageLabel: string;
            jumpToPageDropdownLabel: string;
            jumpToPageInputLabel: string;
            selectRow: string;
            unselectRow: string;
            expandRow: string;
            collapseRow: string;
            showFilterMenu: string;
            hideFilterMenu: string;
            filterOperator: string;
            filterConstraint: string;
            editRow: string;
            saveEdit: string;
            cancelEdit: string;
            listView: string;
            gridView: string;
            slide: string;
            slideNumber: string;
            zoomImage: string;
            zoomIn: string;
            zoomOut: string;
            rotateRight: string;
            rotateLeft: string;
        };
    };
    ku: {
        startsWith: string;
        contains: string;
        notContains: string;
        endsWith: string;
        equals: string;
        notEquals: string;
        noFilter: string;
        filter: string;
        lt: string;
        lte: string;
        gt: string;
        gte: string;
        dateIs: string;
        dateIsNot: string;
        dateBefore: string;
        dateAfter: string;
        custom: string;
        clear: string;
        apply: string;
        matchAll: string;
        matchAny: string;
        addRule: string;
        removeRule: string;
        accept: string;
        reject: string;
        choose: string;
        upload: string;
        cancel: string;
        completed: string;
        pending: string;
        dayNames: string[];
        dayNamesShort: string[];
        dayNamesMin: string[];
        monthNames: string[];
        monthNamesShort: string[];
        chooseYear: string;
        chooseMonth: string;
        chooseDate: string;
        prevDecade: string;
        nextDecade: string;
        prevYear: string;
        nextYear: string;
        prevMonth: string;
        nextMonth: string;
        prevHour: string;
        nextHour: string;
        prevMinute: string;
        nextMinute: string;
        prevSecond: string;
        nextSecond: string;
        am: string;
        pm: string;
        today: string;
        weekHeader: string;
        firstDayOfWeek: number;
        showMonthAfterYear: boolean;
        dateFormat: string;
        weak: string;
        medium: string;
        strong: string;
        passwordPrompt: string;
        emptyFilterMessage: string;
        searchMessage: string;
        selectionMessage: string;
        emptySelectionMessage: string;
        emptySearchMessage: string;
        emptyMessage: string;
        openMenu: string;
        toggleColorMode: string;
        signOut: string;
        profile: string;
        filesSelected: string;
        dragFilesHere: string;
        filesBeingDropped: string;
        typeNotSupported: string;
        maximumAllowedFiles: string;
        remove: string;
        edit: string;
        save: string;
        generatePhoto: string;
        settings: string;
        addCategory: string;
        addItem: string;
        delete: string;
        any: string;
        chooseFile: string;
        greaterThan: string;
        greaterThanOrEqualTo: string;
        lessThan: string;
        lessThanOrEqualTo: string;
        between: string;
        include: string;
        equal: string;
        after: string;
        before: string;
        not: string;
        aria: {
            trueLabel: string;
            falseLabel: string;
            nullLabel: string;
            star: string;
            stars: string;
            selectAll: string;
            unselectAll: string;
            close: string;
            previous: string;
            next: string;
            navigation: string;
            scrollTop: string;
            moveTop: string;
            moveUp: string;
            moveDown: string;
            moveBottom: string;
            moveToTarget: string;
            moveToSource: string;
            moveAllToTarget: string;
            moveAllToSource: string;
            pageLabel: string;
            firstPageLabel: string;
            lastPageLabel: string;
            nextPageLabel: string;
            previousPageLabel: string;
            rowsPerPageLabel: string;
            jumpToPageDropdownLabel: string;
            jumpToPageInputLabel: string;
            selectRow: string;
            unselectRow: string;
            expandRow: string;
            collapseRow: string;
            showFilterMenu: string;
            hideFilterMenu: string;
            filterOperator: string;
            filterConstraint: string;
            editRow: string;
            saveEdit: string;
            cancelEdit: string;
            listView: string;
            gridView: string;
            slide: string;
            slideNumber: string;
            zoomImage: string;
            zoomIn: string;
            zoomOut: string;
            rotateRight: string;
            rotateLeft: string;
        };
    };
    lv: {
        startsWith: string;
        contains: string;
        notContains: string;
        endsWith: string;
        equals: string;
        notEquals: string;
        noFilter: string;
        filter: string;
        lt: string;
        lte: string;
        gt: string;
        gte: string;
        dateIs: string;
        dateIsNot: string;
        dateBefore: string;
        dateAfter: string;
        custom: string;
        clear: string;
        apply: string;
        matchAll: string;
        matchAny: string;
        addRule: string;
        removeRule: string;
        accept: string;
        reject: string;
        choose: string;
        upload: string;
        cancel: string;
        completed: string;
        pending: string;
        dayNames: string[];
        dayNamesShort: string[];
        dayNamesMin: string[];
        monthNames: string[];
        monthNamesShort: string[];
        chooseYear: string;
        chooseMonth: string;
        chooseDate: string;
        prevDecade: string;
        nextDecade: string;
        prevYear: string;
        nextYear: string;
        prevMonth: string;
        nextMonth: string;
        prevHour: string;
        nextHour: string;
        prevMinute: string;
        nextMinute: string;
        prevSecond: string;
        nextSecond: string;
        am: string;
        pm: string;
        today: string;
        now: string;
        weekHeader: string;
        firstDayOfWeek: number;
        showMonthAfterYear: boolean;
        dateFormat: string;
        weak: string;
        medium: string;
        strong: string;
        passwordPrompt: string;
        emptyFilterMessage: string;
        searchMessage: string;
        selectionMessage: string;
        emptySelectionMessage: string;
        emptySearchMessage: string;
        emptyMessage: string;
        openMenu: string;
        toggleColorMode: string;
        signOut: string;
        profile: string;
        filesSelected: string;
        dragFilesHere: string;
        filesBeingDropped: string;
        typeNotSupported: string;
        maximumAllowedFiles: string;
        remove: string;
        edit: string;
        save: string;
        generatePhoto: string;
        settings: string;
        addCategory: string;
        addItem: string;
        delete: string;
        any: string;
        chooseFile: string;
        greaterThan: string;
        greaterThanOrEqualTo: string;
        lessThan: string;
        lessThanOrEqualTo: string;
        between: string;
        include: string;
        equal: string;
        after: string;
        before: string;
        not: string;
        aria: {
            trueLabel: string;
            falseLabel: string;
            nullLabel: string;
            star: string;
            stars: string;
            selectAll: string;
            unselectAll: string;
            close: string;
            previous: string;
            next: string;
            navigation: string;
            scrollTop: string;
            moveTop: string;
            moveUp: string;
            moveDown: string;
            moveBottom: string;
            moveToTarget: string;
            moveToSource: string;
            moveAllToTarget: string;
            moveAllToSource: string;
            pageLabel: string;
            firstPageLabel: string;
            lastPageLabel: string;
            nextPageLabel: string;
            previousPageLabel: string;
            rowsPerPageLabel: string;
            jumpToPageDropdownLabel: string;
            jumpToPageInputLabel: string;
            selectRow: string;
            unselectRow: string;
            expandRow: string;
            collapseRow: string;
            showFilterMenu: string;
            hideFilterMenu: string;
            filterOperator: string;
            filterConstraint: string;
            editRow: string;
            saveEdit: string;
            cancelEdit: string;
            listView: string;
            gridView: string;
            slide: string;
            slideNumber: string;
            zoomImage: string;
            zoomIn: string;
            zoomOut: string;
            rotateRight: string;
            rotateLeft: string;
        };
    };
    ms: {
        accept: string;
        reject: string;
        choose: string;
        upload: string;
        cancel: string;
        dayNames: string[];
        dayNamesShort: string[];
        dayNamesMin: string[];
        monthNames: string[];
        monthNamesShort: string[];
        today: string;
        clear: string;
        weekHeader: string;
        firstDayOfWeek: number;
        showMonthAfterYear: boolean;
        dateFormat: string;
        weak: string;
        medium: string;
        strong: string;
        passwordPrompt: string;
    };
    nl: {
        startsWith: string;
        contains: string;
        notContains: string;
        endsWith: string;
        equals: string;
        notEquals: string;
        noFilter: string;
        filter: string;
        lt: string;
        lte: string;
        gt: string;
        gte: string;
        dateIs: string;
        dateIsNot: string;
        dateBefore: string;
        dateAfter: string;
        custom: string;
        clear: string;
        apply: string;
        matchAll: string;
        matchAny: string;
        addRule: string;
        removeRule: string;
        accept: string;
        reject: string;
        choose: string;
        upload: string;
        cancel: string;
        completed: string;
        pending: string;
        fileSizeTypes: string[];
        dayNames: string[];
        dayNamesShort: string[];
        dayNamesMin: string[];
        monthNames: string[];
        monthNamesShort: string[];
        chooseYear: string;
        chooseMonth: string;
        chooseDate: string;
        prevDecade: string;
        nextDecade: string;
        prevYear: string;
        nextYear: string;
        prevMonth: string;
        nextMonth: string;
        prevHour: string;
        nextHour: string;
        prevMinute: string;
        nextMinute: string;
        prevSecond: string;
        nextSecond: string;
        am: string;
        pm: string;
        today: string;
        now: string;
        weekHeader: string;
        firstDayOfWeek: number;
        showMonthAfterYear: boolean;
        dateFormat: string;
        weak: string;
        medium: string;
        strong: string;
        passwordPrompt: string;
        emptyFilterMessage: string;
        searchMessage: string;
        selectionMessage: string;
        emptySelectionMessage: string;
        emptySearchMessage: string;
        emptyMessage: string;
        openMenu: string;
        toggleColorMode: string;
        signOut: string;
        profile: string;
        filesSelected: string;
        dragFilesHere: string;
        filesBeingDropped: string;
        typeNotSupported: string;
        maximumAllowedFiles: string;
        remove: string;
        edit: string;
        save: string;
        generatePhoto: string;
        settings: string;
        addCategory: string;
        addItem: string;
        delete: string;
        any: string;
        chooseFile: string;
        greaterThan: string;
        greaterThanOrEqualTo: string;
        lessThan: string;
        lessThanOrEqualTo: string;
        between: string;
        include: string;
        equal: string;
        after: string;
        before: string;
        not: string;
        aria: {
            trueLabel: string;
            falseLabel: string;
            nullLabel: string;
            star: string;
            stars: string;
            selectAll: string;
            unselectAll: string;
            close: string;
            previous: string;
            next: string;
            navigation: string;
            scrollTop: string;
            moveTop: string;
            moveUp: string;
            moveDown: string;
            moveBottom: string;
            moveToTarget: string;
            moveToSource: string;
            moveAllToTarget: string;
            moveAllToSource: string;
            pageLabel: string;
            firstPageLabel: string;
            lastPageLabel: string;
            nextPageLabel: string;
            previousPageLabel: string;
            rowsPerPageLabel: string;
            jumpToPageDropdownLabel: string;
            jumpToPageInputLabel: string;
            selectRow: string;
            unselectRow: string;
            expandRow: string;
            collapseRow: string;
            showFilterMenu: string;
            hideFilterMenu: string;
            filterOperator: string;
            filterConstraint: string;
            editRow: string;
            saveEdit: string;
            cancelEdit: string;
            listView: string;
            gridView: string;
            slide: string;
            slideNumber: string;
            zoomImage: string;
            zoomIn: string;
            zoomOut: string;
            rotateRight: string;
            rotateLeft: string;
        };
    };
    pl: {
        startsWith: string;
        contains: string;
        notContains: string;
        endsWith: string;
        equals: string;
        notEquals: string;
        noFilter: string;
        lt: string;
        lte: string;
        gt: string;
        gte: string;
        dateIs: string;
        dateIsNot: string;
        dateBefore: string;
        dateAfter: string;
        clear: string;
        apply: string;
        matchAll: string;
        matchAny: string;
        addRule: string;
        removeRule: string;
        accept: string;
        reject: string;
        choose: string;
        upload: string;
        cancel: string;
        completed: string;
        pending: string;
        dayNames: string[];
        dayNamesShort: string[];
        dayNamesMin: string[];
        monthNames: string[];
        monthNamesShort: string[];
        quarterNames: string[];
        quarterNamesShort: string[];
        chooseYear: string;
        chooseMonth: string;
        chooseDate: string;
        prevDecade: string;
        nextDecade: string;
        prevYear: string;
        nextYear: string;
        prevMonth: string;
        nextMonth: string;
        prevHour: string;
        nextHour: string;
        prevMinute: string;
        nextMinute: string;
        prevSecond: string;
        nextSecond: string;
        today: string;
        now: string;
        weekHeader: string;
        firstDayOfWeek: number;
        showMonthAfterYear: boolean;
        dateFormat: string;
        weak: string;
        medium: string;
        strong: string;
        passwordPrompt: string;
        emptyFilterMessage: string;
        searchMessage: string;
        selectionMessage: string;
        emptySelectionMessage: string;
        emptySearchMessage: string;
        emptyMessage: string;
        openMenu: string;
        toggleColorMode: string;
        signOut: string;
        profile: string;
        filesSelected: string;
        dragFilesHere: string;
        filesBeingDropped: string;
        typeNotSupported: string;
        maximumAllowedFiles: string;
        remove: string;
        edit: string;
        save: string;
        generatePhoto: string;
        settings: string;
        addCategory: string;
        addItem: string;
        delete: string;
        any: string;
        chooseFile: string;
        greaterThan: string;
        greaterThanOrEqualTo: string;
        lessThan: string;
        lessThanOrEqualTo: string;
        between: string;
        include: string;
        equal: string;
        after: string;
        before: string;
        not: string;
        aria: {
            trueLabel: string;
            falseLabel: string;
            nullLabel: string;
            star: string;
            stars: string;
            selectAll: string;
            unselectAll: string;
            close: string;
            previous: string;
            next: string;
            navigation: string;
            scrollTop: string;
            moveTop: string;
            moveUp: string;
            moveDown: string;
            moveBottom: string;
            moveToTarget: string;
            moveToSource: string;
            moveAllToTarget: string;
            moveAllToSource: string;
            pageLabel: string;
            firstPageLabel: string;
            lastPageLabel: string;
            nextPageLabel: string;
            previousPageLabel: string;
            rowsPerPageLabel: string;
            selectRow: string;
            unselectRow: string;
            expandRow: string;
            collapseRow: string;
            showFilterMenu: string;
            hideFilterMenu: string;
            filterOperator: string;
            filterConstraint: string;
            editRow: string;
            saveEdit: string;
            cancelEdit: string;
            listView: string;
            gridView: string;
            slide: string;
            slideNumber: string;
            zoomImage: string;
            zoomIn: string;
            zoomOut: string;
            rotateRight: string;
            rotateLeft: string;
        };
    };
    pt: {
        startsWith: string;
        contains: string;
        notContains: string;
        endsWith: string;
        equals: string;
        notEquals: string;
        noFilter: string;
        filter: string;
        lt: string;
        lte: string;
        gt: string;
        gte: string;
        dateIs: string;
        dateIsNot: string;
        dateBefore: string;
        dateAfter: string;
        custom: string;
        clear: string;
        close: string;
        apply: string;
        matchAll: string;
        matchAny: string;
        addRule: string;
        removeRule: string;
        accept: string;
        reject: string;
        choose: string;
        upload: string;
        cancel: string;
        completed: string;
        pending: string;
        fileSizeTypes: string[];
        dayNames: string[];
        dayNamesShort: string[];
        dayNamesMin: string[];
        monthNames: string[];
        monthNamesShort: string[];
        chooseYear: string;
        chooseMonth: string;
        chooseDate: string;
        prevDecade: string;
        nextDecade: string;
        prevYear: string;
        nextYear: string;
        prevMonth: string;
        nextMonth: string;
        prevHour: string;
        nextHour: string;
        prevMinute: string;
        nextMinute: string;
        prevSecond: string;
        nextSecond: string;
        am: string;
        pm: string;
        today: string;
        now: string;
        weekHeader: string;
        firstDayOfWeek: number;
        showMonthAfterYear: boolean;
        dateFormat: string;
        weak: string;
        medium: string;
        strong: string;
        passwordPrompt: string;
        emptyFilterMessage: string;
        searchMessage: string;
        selectionMessage: string;
        emptySelectionMessage: string;
        emptySearchMessage: string;
        emptyMessage: string;
        openMenu: string;
        toggleColorMode: string;
        signOut: string;
        profile: string;
        filesSelected: string;
        dragFilesHere: string;
        filesBeingDropped: string;
        typeNotSupported: string;
        maximumAllowedFiles: string;
        remove: string;
        edit: string;
        save: string;
        generatePhoto: string;
        settings: string;
        addCategory: string;
        addItem: string;
        delete: string;
        any: string;
        chooseFile: string;
        greaterThan: string;
        greaterThanOrEqualTo: string;
        lessThan: string;
        lessThanOrEqualTo: string;
        between: string;
        include: string;
        equal: string;
        after: string;
        before: string;
        not: string;
        aria: {
            trueLabel: string;
            falseLabel: string;
            nullLabel: string;
            star: string;
            stars: string;
            selectAll: string;
            unselectAll: string;
            close: string;
            previous: string;
            next: string;
            navigation: string;
            scrollTop: string;
            moveTop: string;
            moveUp: string;
            moveDown: string;
            moveBottom: string;
            moveToTarget: string;
            moveToSource: string;
            moveAllToTarget: string;
            moveAllToSource: string;
            pageLabel: string;
            firstPageLabel: string;
            lastPageLabel: string;
            nextPageLabel: string;
            previousPageLabel: string;
            rowsPerPageLabel: string;
            jumpToPageDropdownLabel: string;
            jumpToPageInputLabel: string;
            selectRow: string;
            unselectRow: string;
            expandRow: string;
            collapseRow: string;
            showFilterMenu: string;
            hideFilterMenu: string;
            filterOperator: string;
            filterConstraint: string;
            editRow: string;
            saveEdit: string;
            cancelEdit: string;
            listView: string;
            gridView: string;
            slide: string;
            slideNumber: string;
            zoomImage: string;
            zoomIn: string;
            zoomOut: string;
            rotateRight: string;
            rotateLeft: string;
        };
    };
    ro: {
        startsWith: string;
        contains: string;
        notContains: string;
        endsWith: string;
        equals: string;
        notEquals: string;
        noFilter: string;
        filter: string;
        lt: string;
        lte: string;
        gt: string;
        gte: string;
        dateIs: string;
        dateIsNot: string;
        dateBefore: string;
        dateAfter: string;
        custom: string;
        clear: string;
        apply: string;
        matchAll: string;
        matchAny: string;
        addRule: string;
        removeRule: string;
        accept: string;
        reject: string;
        choose: string;
        upload: string;
        cancel: string;
        completed: string;
        pending: string;
        dayNames: string[];
        dayNamesShort: string[];
        dayNamesMin: string[];
        monthNames: string[];
        monthNamesShort: string[];
        chooseYear: string;
        chooseMonth: string;
        chooseDate: string;
        prevDecade: string;
        nextDecade: string;
        prevYear: string;
        nextYear: string;
        prevMonth: string;
        nextMonth: string;
        prevHour: string;
        nextHour: string;
        prevMinute: string;
        nextMinute: string;
        prevSecond: string;
        nextSecond: string;
        am: string;
        pm: string;
        today: string;
        now: string;
        weekHeader: string;
        firstDayOfWeek: number;
        showMonthAfterYear: boolean;
        dateFormat: string;
        weak: string;
        medium: string;
        strong: string;
        passwordPrompt: string;
        emptyFilterMessage: string;
        searchMessage: string;
        selectionMessage: string;
        emptySelectionMessage: string;
        emptySearchMessage: string;
        emptyMessage: string;
        openMenu: string;
        toggleColorMode: string;
        signOut: string;
        profile: string;
        filesSelected: string;
        dragFilesHere: string;
        filesBeingDropped: string;
        typeNotSupported: string;
        maximumAllowedFiles: string;
        remove: string;
        edit: string;
        save: string;
        generatePhoto: string;
        settings: string;
        addCategory: string;
        addItem: string;
        delete: string;
        any: string;
        chooseFile: string;
        greaterThan: string;
        greaterThanOrEqualTo: string;
        lessThan: string;
        lessThanOrEqualTo: string;
        between: string;
        include: string;
        equal: string;
        after: string;
        before: string;
        not: string;
        aria: {
            trueLabel: string;
            falseLabel: string;
            nullLabel: string;
            star: string;
            stars: string;
            selectAll: string;
            unselectAll: string;
            close: string;
            previous: string;
            next: string;
            navigation: string;
            scrollTop: string;
            moveTop: string;
            moveUp: string;
            moveDown: string;
            moveBottom: string;
            moveToTarget: string;
            moveToSource: string;
            moveAllToTarget: string;
            moveAllToSource: string;
            pageLabel: string;
            firstPageLabel: string;
            lastPageLabel: string;
            nextPageLabel: string;
            previousPageLabel: string;
            rowsPerPageLabel: string;
            jumpToPageDropdownLabel: string;
            jumpToPageInputLabel: string;
            selectRow: string;
            unselectRow: string;
            expandRow: string;
            collapseRow: string;
            showFilterMenu: string;
            hideFilterMenu: string;
            filterOperator: string;
            filterConstraint: string;
            editRow: string;
            saveEdit: string;
            cancelEdit: string;
            listView: string;
            gridView: string;
            slide: string;
            slideNumber: string;
            zoomImage: string;
            zoomIn: string;
            zoomOut: string;
            rotateRight: string;
            rotateLeft: string;
        };
    };
    ru: {
        startsWith: string;
        contains: string;
        notContains: string;
        endsWith: string;
        equals: string;
        notEquals: string;
        noFilter: string;
        filter: string;
        lt: string;
        lte: string;
        gt: string;
        gte: string;
        dateIs: string;
        dateIsNot: string;
        dateBefore: string;
        dateAfter: string;
        custom: string;
        clear: string;
        apply: string;
        matchAll: string;
        matchAny: string;
        addRule: string;
        removeRule: string;
        accept: string;
        reject: string;
        choose: string;
        upload: string;
        cancel: string;
        completed: string;
        pending: string;
        fileSizeTypes: string[];
        dayNames: string[];
        dayNamesShort: string[];
        dayNamesMin: string[];
        monthNames: string[];
        monthNamesShort: string[];
        chooseYear: string;
        chooseMonth: string;
        chooseDate: string;
        prevDecade: string;
        nextDecade: string;
        prevYear: string;
        nextYear: string;
        prevMonth: string;
        nextMonth: string;
        prevHour: string;
        nextHour: string;
        prevMinute: string;
        nextMinute: string;
        prevSecond: string;
        nextSecond: string;
        am: string;
        pm: string;
        today: string;
        now: string;
        weekHeader: string;
        firstDayOfWeek: number;
        showMonthAfterYear: boolean;
        dateFormat: string;
        weak: string;
        medium: string;
        strong: string;
        passwordPrompt: string;
        emptyFilterMessage: string;
        searchMessage: string;
        selectionMessage: string;
        emptySelectionMessage: string;
        emptySearchMessage: string;
        emptyMessage: string;
        openMenu: string;
        toggleColorMode: string;
        signOut: string;
        profile: string;
        filesSelected: string;
        dragFilesHere: string;
        filesBeingDropped: string;
        typeNotSupported: string;
        maximumAllowedFiles: string;
        remove: string;
        edit: string;
        save: string;
        generatePhoto: string;
        settings: string;
        addCategory: string;
        addItem: string;
        delete: string;
        any: string;
        chooseFile: string;
        greaterThan: string;
        greaterThanOrEqualTo: string;
        lessThan: string;
        lessThanOrEqualTo: string;
        between: string;
        include: string;
        equal: string;
        after: string;
        before: string;
        not: string;
        aria: {
            trueLabel: string;
            falseLabel: string;
            nullLabel: string;
            star: string;
            stars: string;
            selectAll: string;
            unselectAll: string;
            close: string;
            previous: string;
            next: string;
            navigation: string;
            scrollTop: string;
            moveTop: string;
            moveUp: string;
            moveDown: string;
            moveBottom: string;
            moveToTarget: string;
            moveToSource: string;
            moveAllToTarget: string;
            moveAllToSource: string;
            pageLabel: string;
            firstPageLabel: string;
            lastPageLabel: string;
            nextPageLabel: string;
            previousPageLabel: string;
            rowsPerPageLabel: string;
            jumpToPageDropdownLabel: string;
            jumpToPageInputLabel: string;
            selectRow: string;
            unselectRow: string;
            expandRow: string;
            collapseRow: string;
            showFilterMenu: string;
            hideFilterMenu: string;
            filterOperator: string;
            filterConstraint: string;
            editRow: string;
            saveEdit: string;
            cancelEdit: string;
            listView: string;
            gridView: string;
            slide: string;
            slideNumber: string;
            zoomImage: string;
            zoomIn: string;
            zoomOut: string;
            rotateRight: string;
            rotateLeft: string;
        };
    };
    sk: {
        startsWith: string;
        contains: string;
        notContains: string;
        endsWith: string;
        equals: string;
        notEquals: string;
        noFilter: string;
        filter: string;
        lt: string;
        lte: string;
        gt: string;
        gte: string;
        dateIs: string;
        dateIsNot: string;
        dateBefore: string;
        dateAfter: string;
        custom: string;
        clear: string;
        apply: string;
        matchAll: string;
        matchAny: string;
        addRule: string;
        removeRule: string;
        accept: string;
        reject: string;
        choose: string;
        upload: string;
        cancel: string;
        completed: string;
        pending: string;
        fileSizeTypes: string[];
        dayNames: string[];
        dayNamesShort: string[];
        dayNamesMin: string[];
        monthNames: string[];
        monthNamesShort: string[];
        chooseYear: string;
        chooseMonth: string;
        chooseDate: string;
        prevDecade: string;
        nextDecade: string;
        prevYear: string;
        nextYear: string;
        prevMonth: string;
        nextMonth: string;
        prevHour: string;
        nextHour: string;
        prevMinute: string;
        nextMinute: string;
        prevSecond: string;
        nextSecond: string;
        am: string;
        pm: string;
        today: string;
        now: string;
        weekHeader: string;
        firstDayOfWeek: number;
        showMonthAfterYear: boolean;
        dateFormat: string;
        weak: string;
        medium: string;
        strong: string;
        passwordPrompt: string;
        emptyFilterMessage: string;
        searchMessage: string;
        selectionMessage: string;
        emptySelectionMessage: string;
        emptySearchMessage: string;
        emptyMessage: string;
        openMenu: string;
        toggleColorMode: string;
        signOut: string;
        profile: string;
        filesSelected: string;
        dragFilesHere: string;
        filesBeingDropped: string;
        typeNotSupported: string;
        maximumAllowedFiles: string;
        remove: string;
        edit: string;
        save: string;
        generatePhoto: string;
        settings: string;
        addCategory: string;
        addItem: string;
        delete: string;
        any: string;
        chooseFile: string;
        greaterThan: string;
        greaterThanOrEqualTo: string;
        lessThan: string;
        lessThanOrEqualTo: string;
        between: string;
        include: string;
        equal: string;
        after: string;
        before: string;
        not: string;
        aria: {
            trueLabel: string;
            falseLabel: string;
            nullLabel: string;
            star: string;
            stars: string;
            selectAll: string;
            unselectAll: string;
            close: string;
            previous: string;
            next: string;
            navigation: string;
            scrollTop: string;
            moveTop: string;
            moveUp: string;
            moveDown: string;
            moveBottom: string;
            moveToTarget: string;
            moveToSource: string;
            moveAllToTarget: string;
            moveAllToSource: string;
            pageLabel: string;
            firstPageLabel: string;
            lastPageLabel: string;
            nextPageLabel: string;
            previousPageLabel: string;
            rowsPerPageLabel: string;
            jumpToPageDropdownLabel: string;
            jumpToPageInputLabel: string;
            selectRow: string;
            unselectRow: string;
            expandRow: string;
            collapseRow: string;
            showFilterMenu: string;
            hideFilterMenu: string;
            filterOperator: string;
            filterConstraint: string;
            editRow: string;
            saveEdit: string;
            cancelEdit: string;
            listView: string;
            gridView: string;
            slide: string;
            slideNumber: string;
            zoomImage: string;
            zoomIn: string;
            zoomOut: string;
            rotateRight: string;
            rotateLeft: string;
        };
    };
    sl: {
        startsWith: string;
        contains: string;
        notContains: string;
        endsWith: string;
        equals: string;
        notEquals: string;
        noFilter: string;
        filter: string;
        lt: string;
        lte: string;
        gt: string;
        gte: string;
        dateIs: string;
        dateIsNot: string;
        dateBefore: string;
        dateAfter: string;
        custom: string;
        clear: string;
        apply: string;
        matchAll: string;
        matchAny: string;
        addRule: string;
        removeRule: string;
        accept: string;
        reject: string;
        choose: string;
        upload: string;
        cancel: string;
        completed: string;
        pending: string;
        dayNames: string[];
        dayNamesShort: string[];
        dayNamesMin: string[];
        monthNames: string[];
        monthNamesShort: string[];
        chooseYear: string;
        chooseMonth: string;
        chooseDate: string;
        prevDecade: string;
        nextDecade: string;
        prevYear: string;
        nextYear: string;
        prevMonth: string;
        nextMonth: string;
        prevHour: string;
        nextHour: string;
        prevMinute: string;
        nextMinute: string;
        prevSecond: string;
        nextSecond: string;
        am: string;
        pm: string;
        today: string;
        weekHeader: string;
        firstDayOfWeek: number;
        showMonthAfterYear: boolean;
        dateFormat: string;
        weak: string;
        medium: string;
        strong: string;
        passwordPrompt: string;
        emptyFilterMessage: string;
        searchMessage: string;
        selectionMessage: string;
        emptySelectionMessage: string;
        emptySearchMessage: string;
        emptyMessage: string;
        openMenu: string;
        toggleColorMode: string;
        signOut: string;
        profile: string;
        filesSelected: string;
        dragFilesHere: string;
        filesBeingDropped: string;
        typeNotSupported: string;
        maximumAllowedFiles: string;
        remove: string;
        edit: string;
        save: string;
        generatePhoto: string;
        settings: string;
        addCategory: string;
        addItem: string;
        delete: string;
        any: string;
        chooseFile: string;
        greaterThan: string;
        greaterThanOrEqualTo: string;
        lessThan: string;
        lessThanOrEqualTo: string;
        between: string;
        include: string;
        equal: string;
        after: string;
        before: string;
        not: string;
        aria: {
            trueLabel: string;
            falseLabel: string;
            nullLabel: string;
            star: string;
            stars: string;
            selectAll: string;
            unselectAll: string;
            close: string;
            previous: string;
            next: string;
            navigation: string;
            scrollTop: string;
            moveTop: string;
            moveUp: string;
            moveDown: string;
            moveBottom: string;
            moveToTarget: string;
            moveToSource: string;
            moveAllToTarget: string;
            moveAllToSource: string;
            pageLabel: string;
            firstPageLabel: string;
            lastPageLabel: string;
            nextPageLabel: string;
            previousPageLabel: string;
            rowsPerPageLabel: string;
            jumpToPageDropdownLabel: string;
            jumpToPageInputLabel: string;
            selectRow: string;
            unselectRow: string;
            expandRow: string;
            collapseRow: string;
            showFilterMenu: string;
            hideFilterMenu: string;
            filterOperator: string;
            filterConstraint: string;
            editRow: string;
            saveEdit: string;
            cancelEdit: string;
            listView: string;
            gridView: string;
            slide: string;
            slideNumber: string;
            zoomImage: string;
            zoomIn: string;
            zoomOut: string;
            rotateRight: string;
            rotateLeft: string;
        };
    };
    sv: {
        startsWith: string;
        contains: string;
        notContains: string;
        endsWith: string;
        equals: string;
        notEquals: string;
        noFilter: string;
        filter: string;
        lt: string;
        lte: string;
        gt: string;
        gte: string;
        dateIs: string;
        dateIsNot: string;
        dateBefore: string;
        dateAfter: string;
        custom: string;
        clear: string;
        apply: string;
        matchAll: string;
        matchAny: string;
        addRule: string;
        removeRule: string;
        accept: string;
        reject: string;
        choose: string;
        upload: string;
        cancel: string;
        close: string;
        dayNames: string[];
        dayNamesShort: string[];
        dayNamesMin: string[];
        monthNames: string[];
        monthNamesShort: string[];
        today: string;
        weekHeader: string;
        firstDayOfWeek: number;
        showMonthAfterYear: boolean;
        dateFormat: string;
        weak: string;
        medium: string;
        strong: string;
        passwordPrompt: string;
        emptyFilterMessage: string;
        emptyMessage: string;
        openMenu: string;
        toggleColorMode: string;
        signOut: string;
        profile: string;
        filesSelected: string;
        dragFilesHere: string;
        filesBeingDropped: string;
        typeNotSupported: string;
        maximumAllowedFiles: string;
        remove: string;
        edit: string;
        save: string;
        generatePhoto: string;
        settings: string;
        addCategory: string;
        addItem: string;
        delete: string;
        any: string;
        chooseFile: string;
        greaterThan: string;
        greaterThanOrEqualTo: string;
        lessThan: string;
        lessThanOrEqualTo: string;
        between: string;
        include: string;
        equal: string;
        after: string;
        before: string;
        not: string;
        aria: {
            trueLabel: string;
            falseLabel: string;
            nullLabel: string;
            pageLabel: string;
            firstPageLabel: string;
            lastPageLabel: string;
            nextPageLabel: string;
            previousPageLabel: string;
            selectLabel: string;
            unselectLabel: string;
            expandLabel: string;
            collapseLabel: string;
        };
    };
    tr: {
        startsWith: string;
        contains: string;
        notContains: string;
        endsWith: string;
        equals: string;
        notEquals: string;
        noFilter: string;
        filter: string;
        lt: string;
        lte: string;
        gt: string;
        gte: string;
        dateIs: string;
        dateIsNot: string;
        dateBefore: string;
        dateAfter: string;
        custom: string;
        clear: string;
        apply: string;
        matchAll: string;
        matchAny: string;
        addRule: string;
        removeRule: string;
        accept: string;
        reject: string;
        choose: string;
        upload: string;
        cancel: string;
        pending: string;
        fileSizeTypes: string[];
        dayNames: string[];
        dayNamesShort: string[];
        dayNamesMin: string[];
        monthNames: string[];
        monthNamesShort: string[];
        chooseYear: string;
        chooseMonth: string;
        chooseDate: string;
        prevDecade: string;
        nextDecade: string;
        prevYear: string;
        nextYear: string;
        prevMonth: string;
        nextMonth: string;
        prevHour: string;
        nextHour: string;
        prevMinute: string;
        nextMinute: string;
        prevSecond: string;
        nextSecond: string;
        am: string;
        pm: string;
        today: string;
        now: string;
        weekHeader: string;
        firstDayOfWeek: number;
        showMonthAfterYear: boolean;
        dateFormat: string;
        weak: string;
        medium: string;
        strong: string;
        passwordPrompt: string;
        emptyFilterMessage: string;
        searchMessage: string;
        selectionMessage: string;
        emptySelectionMessage: string;
        emptySearchMessage: string;
        emptyMessage: string;
        openMenu: string;
        toggleColorMode: string;
        signOut: string;
        profile: string;
        filesSelected: string;
        dragFilesHere: string;
        filesBeingDropped: string;
        typeNotSupported: string;
        maximumAllowedFiles: string;
        remove: string;
        edit: string;
        save: string;
        generatePhoto: string;
        settings: string;
        addCategory: string;
        addItem: string;
        delete: string;
        any: string;
        chooseFile: string;
        greaterThan: string;
        greaterThanOrEqualTo: string;
        lessThan: string;
        lessThanOrEqualTo: string;
        between: string;
        include: string;
        equal: string;
        after: string;
        before: string;
        not: string;
        aria: {
            trueLabel: string;
            falseLabel: string;
            nullLabel: string;
            star: string;
            stars: string;
            selectAll: string;
            unselectAll: string;
            close: string;
            previous: string;
            next: string;
            navigation: string;
            scrollTop: string;
            moveTop: string;
            moveUp: string;
            moveDown: string;
            moveBottom: string;
            moveToTarget: string;
            moveToSource: string;
            moveAllToTarget: string;
            moveAllToSource: string;
            pageLabel: string;
            firstPageLabel: string;
            lastPageLabel: string;
            nextPageLabel: string;
            previousPageLabel: string;
            rowsPerPageLabel: string;
            jumpToPageDropdownLabel: string;
            jumpToPageInputLabel: string;
            selectRow: string;
            unselectRow: string;
            expandRow: string;
            collapseRow: string;
            showFilterMenu: string;
            hideFilterMenu: string;
            filterOperator: string;
            filterConstraint: string;
            editRow: string;
            saveEdit: string;
            cancelEdit: string;
            listView: string;
            gridView: string;
            slide: string;
            slideNumber: string;
            zoomImage: string;
            zoomIn: string;
            zoomOut: string;
            rotateRight: string;
            rotateLeft: string;
        };
    };
    uk: {
        startsWith: string;
        contains: string;
        notContains: string;
        endsWith: string;
        equals: string;
        notEquals: string;
        noFilter: string;
        filter: string;
        lt: string;
        lte: string;
        gt: string;
        gte: string;
        dateIs: string;
        dateIsNot: string;
        dateBefore: string;
        dateAfter: string;
        custom: string;
        clear: string;
        apply: string;
        matchAll: string;
        matchAny: string;
        addRule: string;
        removeRule: string;
        accept: string;
        reject: string;
        choose: string;
        upload: string;
        cancel: string;
        completed: string;
        pending: string;
        dayNames: string[];
        dayNamesShort: string[];
        dayNamesMin: string[];
        monthNames: string[];
        monthNamesShort: string[];
        chooseYear: string;
        chooseMonth: string;
        chooseDate: string;
        prevDecade: string;
        nextDecade: string;
        prevYear: string;
        nextYear: string;
        prevMonth: string;
        nextMonth: string;
        prevHour: string;
        nextHour: string;
        prevMinute: string;
        nextMinute: string;
        prevSecond: string;
        nextSecond: string;
        am: string;
        pm: string;
        today: string;
        now: string;
        weekHeader: string;
        firstDayOfWeek: number;
        showMonthAfterYear: boolean;
        dateFormat: string;
        weak: string;
        medium: string;
        strong: string;
        passwordPrompt: string;
        emptyFilterMessage: string;
        searchMessage: string;
        selectionMessage: string;
        emptySelectionMessage: string;
        emptySearchMessage: string;
        emptyMessage: string;
        openMenu: string;
        toggleColorMode: string;
        signOut: string;
        profile: string;
        filesSelected: string;
        dragFilesHere: string;
        filesBeingDropped: string;
        typeNotSupported: string;
        maximumAllowedFiles: string;
        remove: string;
        edit: string;
        save: string;
        generatePhoto: string;
        settings: string;
        addCategory: string;
        addItem: string;
        delete: string;
        any: string;
        chooseFile: string;
        greaterThan: string;
        greaterThanOrEqualTo: string;
        lessThan: string;
        lessThanOrEqualTo: string;
        between: string;
        include: string;
        equal: string;
        after: string;
        before: string;
        not: string;
        aria: {
            trueLabel: string;
            falseLabel: string;
            nullLabel: string;
            star: string;
            stars: string;
            selectAll: string;
            unselectAll: string;
            close: string;
            previous: string;
            next: string;
            navigation: string;
            scrollTop: string;
            moveTop: string;
            moveUp: string;
            moveDown: string;
            moveBottom: string;
            moveToTarget: string;
            moveToSource: string;
            moveAllToTarget: string;
            moveAllToSource: string;
            pageLabel: string;
            firstPageLabel: string;
            lastPageLabel: string;
            nextPageLabel: string;
            rowsPerPageLabel: string;
            previousPageLabel: string;
            jumpToPageDropdownLabel: string;
            jumpToPageInputLabel: string;
            selectRow: string;
            unselectRow: string;
            expandRow: string;
            collapseRow: string;
            showFilterMenu: string;
            hideFilterMenu: string;
            filterOperator: string;
            filterConstraint: string;
            editRow: string;
            saveEdit: string;
            cancelEdit: string;
            listView: string;
            gridView: string;
            slide: string;
            slideNumber: string;
            zoomImage: string;
            zoomIn: string;
            zoomOut: string;
            rotateRight: string;
            rotateLeft: string;
        };
    };
    vi: {
        accept: string;
        reject: string;
        choose: string;
        upload: string;
        cancel: string;
        dayNames: string[];
        dayNamesShort: string[];
        dayNamesMin: string[];
        monthNames: string[];
        monthNamesShort: string[];
        today: string;
        clear: string;
        weekHeader: string;
        firstDayOfWeek: number;
        showMonthAfterYear: boolean;
        dateFormat: string;
        weak: string;
        medium: string;
        strong: string;
        passwordPrompt: string;
    };
    "nb-no": {
        startsWith: string;
        contains: string;
        notContains: string;
        endsWith: string;
        equals: string;
        notEquals: string;
        noFilter: string;
        filter: string;
        lt: string;
        lte: string;
        gt: string;
        gte: string;
        dateIs: string;
        dateIsNot: string;
        dateBefore: string;
        dateAfter: string;
        custom: string;
        clear: string;
        apply: string;
        matchAll: string;
        matchAny: string;
        addRule: string;
        removeRule: string;
        accept: string;
        reject: string;
        choose: string;
        upload: string;
        cancel: string;
        completed: string;
        pending: string;
        dayNames: string[];
        dayNamesShort: string[];
        dayNamesMin: string[];
        monthNames: string[];
        monthNamesShort: string[];
        chooseYear: string;
        chooseMonth: string;
        chooseDate: string;
        prevDecade: string;
        nextDecade: string;
        prevYear: string;
        nextYear: string;
        prevMonth: string;
        nextMonth: string;
        prevHour: string;
        nextHour: string;
        prevMinute: string;
        nextMinute: string;
        prevSecond: string;
        nextSecond: string;
        am: string;
        pm: string;
        today: string;
        now: string;
        weekHeader: string;
        firstDayOfWeek: number;
        showMonthAfterYear: boolean;
        dateFormat: string;
        weak: string;
        medium: string;
        strong: string;
        passwordPrompt: string;
        emptyFilterMessage: string;
        searchMessage: string;
        selectionMessage: string;
        emptySelectionMessage: string;
        emptySearchMessage: string;
        emptyMessage: string;
        openMenu: string;
        toggleColorMode: string;
        signOut: string;
        profile: string;
        filesSelected: string;
        dragFilesHere: string;
        filesBeingDropped: string;
        typeNotSupported: string;
        maximumAllowedFiles: string;
        remove: string;
        edit: string;
        save: string;
        generatePhoto: string;
        settings: string;
        addCategory: string;
        addItem: string;
        delete: string;
        any: string;
        chooseFile: string;
        greaterThan: string;
        greaterThanOrEqualTo: string;
        lessThan: string;
        lessThanOrEqualTo: string;
        between: string;
        include: string;
        equal: string;
        after: string;
        before: string;
        not: string;
        aria: {
            trueLabel: string;
            falseLabel: string;
            nullLabel: string;
            star: string;
            stars: string;
            selectAll: string;
            unselectAll: string;
            close: string;
            previous: string;
            next: string;
            navigation: string;
            scrollTop: string;
            moveTop: string;
            moveUp: string;
            moveDown: string;
            moveBottom: string;
            moveToTarget: string;
            moveToSource: string;
            moveAllToTarget: string;
            moveAllToSource: string;
            pageLabel: string;
            firstPageLabel: string;
            lastPageLabel: string;
            nextPageLabel: string;
            previousPageLabel: string;
            rowsPerPageLabel: string;
            jumpToPageDropdownLabel: string;
            jumpToPageInputLabel: string;
            selectRow: string;
            unselectRow: string;
            expandRow: string;
            collapseRow: string;
            showFilterMenu: string;
            hideFilterMenu: string;
            filterOperator: string;
            filterConstraint: string;
            editRow: string;
            saveEdit: string;
            cancelEdit: string;
            listView: string;
            gridView: string;
            slide: string;
            slideNumber: string;
            zoomImage: string;
            zoomIn: string;
            zoomOut: string;
            rotateRight: string;
            rotateLeft: string;
        };
    };
    "de-at": {
        startsWith: string;
        contains: string;
        notContains: string;
        endsWith: string;
        equals: string;
        notEquals: string;
        noFilter: string;
        filter: string;
        lt: string;
        lte: string;
        gt: string;
        gte: string;
        dateIs: string;
        dateIsNot: string;
        dateBefore: string;
        dateAfter: string;
        custom: string;
        clear: string;
        apply: string;
        matchAll: string;
        matchAny: string;
        addRule: string;
        removeRule: string;
        accept: string;
        reject: string;
        choose: string;
        upload: string;
        cancel: string;
        completed: string;
        pending: string;
        fileSizeTypes: string[];
        dayNames: string[];
        dayNamesShort: string[];
        dayNamesMin: string[];
        monthNames: string[];
        monthNamesShort: string[];
        chooseYear: string;
        chooseMonth: string;
        chooseDate: string;
        prevDecade: string;
        nextDecade: string;
        prevYear: string;
        nextYear: string;
        prevMonth: string;
        nextMonth: string;
        prevHour: string;
        nextHour: string;
        prevMinute: string;
        nextMinute: string;
        prevSecond: string;
        nextSecond: string;
        am: string;
        pm: string;
        today: string;
        now: string;
        weekHeader: string;
        firstDayOfWeek: number;
        showMonthAfterYear: boolean;
        dateFormat: string;
        weak: string;
        medium: string;
        strong: string;
        passwordPrompt: string;
        emptyFilterMessage: string;
        searchMessage: string;
        selectionMessage: string;
        emptySelectionMessage: string;
        emptySearchMessage: string;
        emptyMessage: string;
        openMenu: string;
        toggleColorMode: string;
        signOut: string;
        profile: string;
        filesSelected: string;
        dragFilesHere: string;
        filesBeingDropped: string;
        typeNotSupported: string;
        maximumAllowedFiles: string;
        remove: string;
        edit: string;
        save: string;
        generatePhoto: string;
        settings: string;
        addCategory: string;
        addItem: string;
        delete: string;
        any: string;
        chooseFile: string;
        greaterThan: string;
        greaterThanOrEqualTo: string;
        lessThan: string;
        lessThanOrEqualTo: string;
        between: string;
        include: string;
        equal: string;
        after: string;
        before: string;
        not: string;
        aria: {
            trueLabel: string;
            falseLabel: string;
            nullLabel: string;
            star: string;
            stars: string;
            selectAll: string;
            unselectAll: string;
            close: string;
            previous: string;
            next: string;
            navigation: string;
            scrollTop: string;
            moveTop: string;
            moveUp: string;
            moveDown: string;
            moveBottom: string;
            moveToTarget: string;
            moveToSource: string;
            moveAllToTarget: string;
            moveAllToSource: string;
            pageLabel: string;
            firstPageLabel: string;
            lastPageLabel: string;
            nextPageLabel: string;
            previousPageLabel: string;
            rowsPerPageLabel: string;
            jumpToPageDropdownLabel: string;
            jumpToPageInputLabel: string;
            selectRow: string;
            unselectRow: string;
            expandRow: string;
            collapseRow: string;
            showFilterMenu: string;
            hideFilterMenu: string;
            filterOperator: string;
            filterConstraint: string;
            editRow: string;
            saveEdit: string;
            cancelEdit: string;
            listView: string;
            gridView: string;
            slide: string;
            slideNumber: string;
            zoomImage: string;
            zoomIn: string;
            zoomOut: string;
            rotateRight: string;
            rotateLeft: string;
        };
    };
    "en-au": {
        startsWith: string;
        contains: string;
        notContains: string;
        endsWith: string;
        equals: string;
        notEquals: string;
        noFilter: string;
        filter: string;
        lt: string;
        lte: string;
        gt: string;
        gte: string;
        dateIs: string;
        dateIsNot: string;
        dateBefore: string;
        dateAfter: string;
        custom: string;
        clear: string;
        apply: string;
        matchAll: string;
        matchAny: string;
        addRule: string;
        removeRule: string;
        accept: string;
        reject: string;
        choose: string;
        upload: string;
        cancel: string;
        completed: string;
        pending: string;
        fileSizeTypes: string[];
        dayNames: string[];
        dayNamesShort: string[];
        dayNamesMin: string[];
        monthNames: string[];
        monthNamesShort: string[];
        chooseYear: string;
        chooseMonth: string;
        chooseDate: string;
        prevDecade: string;
        nextDecade: string;
        prevYear: string;
        nextYear: string;
        prevMonth: string;
        nextMonth: string;
        prevHour: string;
        nextHour: string;
        prevMinute: string;
        nextMinute: string;
        prevSecond: string;
        nextSecond: string;
        am: string;
        pm: string;
        today: string;
        now: string;
        weekHeader: string;
        firstDayOfWeek: number;
        showMonthAfterYear: boolean;
        dateFormat: string;
        weak: string;
        medium: string;
        strong: string;
        passwordPrompt: string;
        emptyFilterMessage: string;
        searchMessage: string;
        selectionMessage: string;
        emptySelectionMessage: string;
        emptySearchMessage: string;
        emptyMessage: string;
        openMenu: string;
        toggleColorMode: string;
        signOut: string;
        profile: string;
        filesSelected: string;
        dragFilesHere: string;
        filesBeingDropped: string;
        typeNotSupported: string;
        maximumAllowedFiles: string;
        remove: string;
        edit: string;
        save: string;
        generatePhoto: string;
        settings: string;
        addCategory: string;
        addItem: string;
        delete: string;
        any: string;
        chooseFile: string;
        greaterThan: string;
        greaterThanOrEqualTo: string;
        lessThan: string;
        lessThanOrEqualTo: string;
        between: string;
        include: string;
        equal: string;
        after: string;
        before: string;
        not: string;
        aria: {
            trueLabel: string;
            falseLabel: string;
            nullLabel: string;
            star: string;
            stars: string;
            selectAll: string;
            unselectAll: string;
            close: string;
            previous: string;
            next: string;
            navigation: string;
            scrollTop: string;
            moveTop: string;
            moveUp: string;
            moveDown: string;
            moveBottom: string;
            moveToTarget: string;
            moveToSource: string;
            moveAllToTarget: string;
            moveAllToSource: string;
            pageLabel: string;
            firstPageLabel: string;
            lastPageLabel: string;
            nextPageLabel: string;
            previousPageLabel: string;
            rowsPerPageLabel: string;
            jumpToPageDropdownLabel: string;
            jumpToPageInputLabel: string;
            selectRow: string;
            unselectRow: string;
            expandRow: string;
            collapseRow: string;
            showFilterMenu: string;
            hideFilterMenu: string;
            filterOperator: string;
            filterConstraint: string;
            editRow: string;
            saveEdit: string;
            cancelEdit: string;
            listView: string;
            gridView: string;
            slide: string;
            slideNumber: string;
            zoomImage: string;
            zoomIn: string;
            zoomOut: string;
            rotateRight: string;
            rotateLeft: string;
        };
    };
    "en-gb": {
        startsWith: string;
        contains: string;
        notContains: string;
        endsWith: string;
        equals: string;
        notEquals: string;
        noFilter: string;
        filter: string;
        lt: string;
        lte: string;
        gt: string;
        gte: string;
        dateIs: string;
        dateIsNot: string;
        dateBefore: string;
        dateAfter: string;
        custom: string;
        clear: string;
        apply: string;
        matchAll: string;
        matchAny: string;
        addRule: string;
        removeRule: string;
        accept: string;
        reject: string;
        choose: string;
        upload: string;
        cancel: string;
        completed: string;
        pending: string;
        fileSizeTypes: string[];
        dayNames: string[];
        dayNamesShort: string[];
        dayNamesMin: string[];
        monthNames: string[];
        monthNamesShort: string[];
        chooseYear: string;
        chooseMonth: string;
        chooseDate: string;
        prevDecade: string;
        nextDecade: string;
        prevYear: string;
        nextYear: string;
        prevMonth: string;
        nextMonth: string;
        prevHour: string;
        nextHour: string;
        prevMinute: string;
        nextMinute: string;
        prevSecond: string;
        nextSecond: string;
        am: string;
        pm: string;
        today: string;
        now: string;
        weekHeader: string;
        firstDayOfWeek: number;
        showMonthAfterYear: boolean;
        dateFormat: string;
        weak: string;
        medium: string;
        strong: string;
        passwordPrompt: string;
        emptyFilterMessage: string;
        searchMessage: string;
        selectionMessage: string;
        emptySelectionMessage: string;
        emptySearchMessage: string;
        emptyMessage: string;
        openMenu: string;
        toggleColorMode: string;
        signOut: string;
        profile: string;
        filesSelected: string;
        dragFilesHere: string;
        filesBeingDropped: string;
        typeNotSupported: string;
        maximumAllowedFiles: string;
        remove: string;
        edit: string;
        save: string;
        generatePhoto: string;
        settings: string;
        addCategory: string;
        addItem: string;
        delete: string;
        any: string;
        chooseFile: string;
        greaterThan: string;
        greaterThanOrEqualTo: string;
        lessThan: string;
        lessThanOrEqualTo: string;
        between: string;
        include: string;
        equal: string;
        after: string;
        before: string;
        not: string;
        aria: {
            trueLabel: string;
            falseLabel: string;
            nullLabel: string;
            star: string;
            stars: string;
            selectAll: string;
            unselectAll: string;
            close: string;
            previous: string;
            next: string;
            navigation: string;
            scrollTop: string;
            moveTop: string;
            moveUp: string;
            moveDown: string;
            moveBottom: string;
            moveToTarget: string;
            moveToSource: string;
            moveAllToTarget: string;
            moveAllToSource: string;
            pageLabel: string;
            firstPageLabel: string;
            lastPageLabel: string;
            nextPageLabel: string;
            previousPageLabel: string;
            rowsPerPageLabel: string;
            jumpToPageDropdownLabel: string;
            jumpToPageInputLabel: string;
            selectRow: string;
            unselectRow: string;
            expandRow: string;
            collapseRow: string;
            showFilterMenu: string;
            hideFilterMenu: string;
            filterOperator: string;
            filterConstraint: string;
            editRow: string;
            saveEdit: string;
            cancelEdit: string;
            listView: string;
            gridView: string;
            slide: string;
            slideNumber: string;
            zoomImage: string;
            zoomIn: string;
            zoomOut: string;
            rotateRight: string;
            rotateLeft: string;
        };
    };
    "zh-CN": {
        startsWith: string;
        contains: string;
        notContains: string;
        endsWith: string;
        equals: string;
        notEquals: string;
        noFilter: string;
        filter: string;
        lt: string;
        lte: string;
        gt: string;
        gte: string;
        dateIs: string;
        dateIsNot: string;
        dateBefore: string;
        dateAfter: string;
        custom: string;
        clear: string;
        apply: string;
        matchAll: string;
        matchAny: string;
        addRule: string;
        removeRule: string;
        accept: string;
        reject: string;
        choose: string;
        upload: string;
        cancel: string;
        completed: string;
        pending: string;
        dayNames: string[];
        dayNamesShort: string[];
        dayNamesMin: string[];
        monthNames: string[];
        monthNamesShort: string[];
        chooseYear: string;
        chooseMonth: string;
        chooseDate: string;
        prevDecade: string;
        nextDecade: string;
        prevYear: string;
        nextYear: string;
        prevMonth: string;
        nextMonth: string;
        prevHour: string;
        nextHour: string;
        prevMinute: string;
        nextMinute: string;
        prevSecond: string;
        nextSecond: string;
        am: string;
        pm: string;
        today: string;
        weekHeader: string;
        firstDayOfWeek: number;
        showMonthAfterYear: boolean;
        dateFormat: string;
        weak: string;
        medium: string;
        strong: string;
        passwordPrompt: string;
        emptyFilterMessage: string;
        searchMessage: string;
        selectionMessage: string;
        emptySelectionMessage: string;
        emptySearchMessage: string;
        emptyMessage: string;
        openMenu: string;
        toggleColorMode: string;
        signOut: string;
        profile: string;
        filesSelected: string;
        dragFilesHere: string;
        filesBeingDropped: string;
        typeNotSupported: string;
        maximumAllowedFiles: string;
        remove: string;
        edit: string;
        save: string;
        generatePhoto: string;
        settings: string;
        addCategory: string;
        addItem: string;
        delete: string;
        any: string;
        chooseFile: string;
        greaterThan: string;
        greaterThanOrEqualTo: string;
        lessThan: string;
        lessThanOrEqualTo: string;
        between: string;
        include: string;
        equal: string;
        after: string;
        before: string;
        not: string;
        aria: {
            trueLabel: string;
            falseLabel: string;
            nullLabel: string;
            star: string;
            stars: string;
            selectAll: string;
            unselectAll: string;
            close: string;
            previous: string;
            next: string;
            navigation: string;
            scrollTop: string;
            moveTop: string;
            moveUp: string;
            moveDown: string;
            moveBottom: string;
            moveToTarget: string;
            moveToSource: string;
            moveAllToTarget: string;
            moveAllToSource: string;
            pageLabel: string;
            firstPageLabel: string;
            lastPageLabel: string;
            nextPageLabel: string;
            previousPageLabel: string;
            rowsPerPageLabel: string;
            jumpToPageDropdownLabel: string;
            jumpToPageInputLabel: string;
            selectRow: string;
            unselectRow: string;
            expandRow: string;
            collapseRow: string;
            showFilterMenu: string;
            hideFilterMenu: string;
            filterOperator: string;
            filterConstraint: string;
            editRow: string;
            saveEdit: string;
            cancelEdit: string;
            listView: string;
            gridView: string;
            slide: string;
            slideNumber: string;
            zoomImage: string;
            zoomIn: string;
            zoomOut: string;
            rotateRight: string;
            rotateLeft: string;
        };
    };
    "zh-TW": {
        startsWith: string;
        contains: string;
        notContains: string;
        endsWith: string;
        equals: string;
        notEquals: string;
        noFilter: string;
        filter: string;
        lt: string;
        lte: string;
        gt: string;
        gte: string;
        dateIs: string;
        dateIsNot: string;
        dateBefore: string;
        dateAfter: string;
        custom: string;
        clear: string;
        apply: string;
        matchAll: string;
        matchAny: string;
        addRule: string;
        removeRule: string;
        accept: string;
        reject: string;
        choose: string;
        upload: string;
        cancel: string;
        completed: string;
        pending: string;
        fileSizeTypes: string[];
        dayNames: string[];
        dayNamesShort: string[];
        dayNamesMin: string[];
        monthNames: string[];
        monthNamesShort: string[];
        chooseYear: string;
        chooseMonth: string;
        chooseDate: string;
        prevDecade: string;
        nextDecade: string;
        prevYear: string;
        nextYear: string;
        prevMonth: string;
        nextMonth: string;
        prevHour: string;
        nextHour: string;
        prevMinute: string;
        nextMinute: string;
        prevSecond: string;
        nextSecond: string;
        am: string;
        pm: string;
        today: string;
        now: string;
        weekHeader: string;
        firstDayOfWeek: number;
        showMonthAfterYear: boolean;
        dateFormat: string;
        weak: string;
        medium: string;
        strong: string;
        passwordPrompt: string;
        emptyFilterMessage: string;
        searchMessage: string;
        selectionMessage: string;
        emptySelectionMessage: string;
        emptySearchMessage: string;
        emptyMessage: string;
        openMenu: string;
        toggleColorMode: string;
        signOut: string;
        profile: string;
        filesSelected: string;
        dragFilesHere: string;
        filesBeingDropped: string;
        typeNotSupported: string;
        maximumAllowedFiles: string;
        remove: string;
        edit: string;
        save: string;
        generatePhoto: string;
        settings: string;
        addCategory: string;
        addItem: string;
        delete: string;
        any: string;
        chooseFile: string;
        greaterThan: string;
        greaterThanOrEqualTo: string;
        lessThan: string;
        lessThanOrEqualTo: string;
        between: string;
        include: string;
        equal: string;
        after: string;
        before: string;
        not: string;
        aria: {
            trueLabel: string;
            falseLabel: string;
            nullLabel: string;
            star: string;
            stars: string;
            selectAll: string;
            unselectAll: string;
            close: string;
            previous: string;
            next: string;
            navigation: string;
            scrollTop: string;
            moveTop: string;
            moveUp: string;
            moveDown: string;
            moveBottom: string;
            moveToTarget: string;
            moveToSource: string;
            moveAllToTarget: string;
            moveAllToSource: string;
            pageLabel: string;
            firstPageLabel: string;
            lastPageLabel: string;
            nextPageLabel: string;
            previousPageLabel: string;
            rowsPerPageLabel: string;
            jumpToPageDropdownLabel: string;
            jumpToPageInputLabel: string;
            selectRow: string;
            unselectRow: string;
            expandRow: string;
            collapseRow: string;
            showFilterMenu: string;
            hideFilterMenu: string;
            filterOperator: string;
            filterConstraint: string;
            editRow: string;
            saveEdit: string;
            cancelEdit: string;
            listView: string;
            gridView: string;
            slide: string;
            slideNumber: string;
            zoomImage: string;
            zoomIn: string;
            zoomOut: string;
            rotateRight: string;
            rotateLeft: string;
        };
    };
};

export { CustomAccordion as Accordion, AdminLayout, Alert, AlertDescription, AlertIcon, AlertTitle, KitsAnimatePresence as AnimatePresence, AnyFile, AuthLayout, Badge, Box, AppBreadcrumb as BreadCrumb, Button, Card, Center, CircularProgress, Collapse, Container, CustomPopover, DataView, DataViewContext, DetailList as DetailsList, Divider, Editable, Flex, Form, FormSelect, Form as GoForm, Datatable as GoTable, Grid, GridItem, HStack, Header, Heading, Icon, IconMap, Image, KitsInputSwitch as InputSwitch, KeyboardNavContext, KitsAutoComplete, KitsCascadeSelect, KitsCheckbox as KitsCheckboxes, KitsConfirm, KitsConfirmPopup, KitsContainer, KitsInputCalendar as KitsDatepicker, KitsDialogControlled as KitsDialog, KitsDropdown, FilePicker as KitsFilePicker, KitsInputColorPicker, KitsInputLocation, KitsInputMask, KitsInputNumber, KitsInputPassword, KitsInputText, KitsInputTextarea, KitsListBox, KitsMultiSelect, KitsPhoneComponent, KitsRadio as KitsRadios, KitsSliders, KitsThemeProvider, KitsToast, KitsTreeSelect, Label, Link, List, ListItem, Loader, LocaleContext, LocaleContextProvider, MainContext, MainContextProvider, KitsMultiSelect as MultiSelect, SidebarMenu as Navigation, KitsScrollView as ScrollView, FormSelect as Select, SelectButton, SkeletonText$1 as Skeleton, SkeletonRows, SkeletonText, Svg, TableContext, Text, ThemeContextProvider, Tooltip, Translate, KitsTreeSelect as TreeSelect, TreeView, TriStateCheckbox, VStack, index_web as Widgets, capitalizeFirstLetter, checkNameDuplication, dateTimeFormat, deepMerge, downloadCanvas, dynamicList, eraseCookie, extendTheme, formFileValidation, getCombinedChildIds, getCookie, getCookieValue, getCustomDateTime, getDateElements, getDefaultValues, getParams, getPropertyByPath, getURLParams, isNumber, isToday, isValidURL, localeFiles, mergeRefs, resolveStyleRecord, schemaBuilder, setCookie, timeAgo, timeSince, useAllSeverityColors, useComponentDefaults, useDataView, useDialog, useDisclosure, useFieldLogic, useFocusStyles, useFormFieldKeyboardNav, useFormManager, useKeyboardNav, useKeyboardNavProvider, useKitsColorScheme, useKitsConcerto, useKitsTheme, useLanguage, usePopup, useResolvedElementStyles, useResolvedStyle, useScrollState, useSelectionController, useSeverityColors, useTable, useTheme };
export type { IUseFormReturn, UseComponentDefaultsResult, UseFormManagerReturn };
