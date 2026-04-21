'use strict';

const PRIME_OVERRIDES_CSS = `
/* \u2500\u2500\u2500 InputSwitch / Toggle checked state \u2500\u2500\u2500 */
.p-inputswitch.p-inputswitch-checked .p-inputswitch-slider {
  background: var(--primary-color) !important;
}
.p-inputswitch.p-inputswitch-checked:not(.p-disabled):hover .p-inputswitch-slider {
  background: color-mix(in srgb, var(--primary-color) 85%, #000) !important;
}

/* \u2500\u2500\u2500 InputSwitch: remove focus/active outline and border \u2500\u2500\u2500 */
.p-inputswitch:focus,
.p-inputswitch:active,
.p-inputswitch.p-focus {
  box-shadow: none !important;
  outline: none !important;
}
.p-inputswitch .p-inputswitch-slider:focus,
.p-inputswitch .p-inputswitch-slider:active {
  box-shadow: none !important;
  outline: none !important;
}
.p-inputswitch.p-focus .p-inputswitch-slider {
  box-shadow: none !important;
  outline: none !important;
}

/* \u2500\u2500\u2500 Dark-mode surface overrides \u2500\u2500\u2500 */
[data-theme="dark"] .p-component,
[data-theme="dark"] .p-inputtext,
[data-theme="dark"] .p-dropdown,
[data-theme="dark"] .p-multiselect,
[data-theme="dark"] .p-calendar .p-inputtext {
  background: var(--surface-card);
  color: var(--text-color);
  border-color: var(--surface-border);
}

[data-theme="dark"] .p-dropdown-panel,
[data-theme="dark"] .p-multiselect-panel,
[data-theme="dark"] .p-datepicker,
[data-theme="dark"] .p-dialog {
  background: var(--surface-overlay);
  color: var(--text-color);
  border-color: var(--surface-border);
}

/* \u2500\u2500\u2500 Highlight / selected items in dark mode \u2500\u2500\u2500 */
[data-theme="dark"] .p-highlight {
  background: var(--primary-color) !important;
  color: var(--primary-reverse) !important;
}

/* \u2500\u2500\u2500 Suppress PrimeReact focus ring on inner elements inside .p-inputgroup \u2500\u2500\u2500 */
.p-inputgroup .p-inputtext:focus,
.p-inputgroup .p-dropdown.p-focus,
.p-inputgroup .p-treeselect.p-focus,
.p-inputgroup .p-multiselect.p-focus,
.p-inputgroup .p-cascadeselect.p-focus,
.p-inputgroup .p-autocomplete .p-inputtext:focus,
.p-inputgroup .p-calendar .p-inputtext:focus,
.p-inputgroup .p-inputtextarea:focus,
.p-inputgroup .p-inputnumber-input:focus,
.p-inputgroup .p-inputmask:focus {
  box-shadow: none !important;
  outline: none !important;
  border-color: inherit !important;
}

/* \u2500\u2500\u2500 TreeSelect: preserve selected node styling on hover \u2500\u2500\u2500 */
.p-treeselect-panel .p-treenode-content.p-highlight:hover,
.p-treeselect-panel .p-treenode-content.p-treenode-selectable.p-highlight:hover {
  color: white !important;
}

/* \u2500\u2500\u2500 Apply focus ring to the outer container instead \u2500\u2500\u2500 */
.p-inputgroup.kits-focused {
  box-shadow: 0 0 0 0.2rem color-mix(in srgb, var(--primary-color) 25%, transparent) !important;
  border-color: var(--primary-color) !important;
}
`;

exports.PRIME_OVERRIDES_CSS = PRIME_OVERRIDES_CSS;
//# sourceMappingURL=primeOverrides.web.cjs.map
