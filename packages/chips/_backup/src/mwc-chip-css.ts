/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
import {css} from '@material/mwc-base/base-element';

export const style = css`@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}.mdc-ripple-surface--test-edge-var-bug{--mdc-ripple-surface-test-edge-var: 1px solid #000;visibility:hidden}.mdc-ripple-surface--test-edge-var-bug::before{border:var(--mdc-ripple-surface-test-edge-var)}.mdc-chip{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity;border-radius:16px;background-color:#e0e0e0;color:rgba(0,0,0,.87);font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:.875rem;line-height:1.25rem;font-weight:400;letter-spacing:.0178571429em;text-decoration:inherit;text-transform:inherit;height:32px;display:inline-flex;position:relative;align-items:center;box-sizing:border-box;padding:7px 12px;outline:none;cursor:pointer;overflow:hidden}.mdc-chip::before,.mdc-chip::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-chip::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1}.mdc-chip.mdc-ripple-upgraded::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-chip.mdc-ripple-upgraded::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-chip.mdc-ripple-upgraded--unbounded::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-chip.mdc-ripple-upgraded--foreground-activation::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-chip.mdc-ripple-upgraded--foreground-deactivation::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-chip::before,.mdc-chip::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-chip.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-chip::before,.mdc-chip::after{background-color:rgba(0,0,0,.87)}.mdc-chip:hover::before{opacity:.04}.mdc-chip:not(.mdc-ripple-upgraded):focus::before,.mdc-chip.mdc-ripple-upgraded--background-focused::before{transition-duration:75ms;opacity:.12}.mdc-chip:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-chip:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:.12}.mdc-chip.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: 0.12}.mdc-chip:hover{color:rgba(0,0,0,.87)}.mdc-chip.mdc-chip--selected .mdc-chip__checkmark,.mdc-chip .mdc-chip__icon--leading:not(.mdc-chip__icon--leading-hidden){margin-left:-4px;margin-right:4px;margin-top:-4px;margin-bottom:-4px}[dir=rtl] .mdc-chip.mdc-chip--selected .mdc-chip__checkmark,.mdc-chip.mdc-chip--selected .mdc-chip__checkmark[dir=rtl],[dir=rtl] .mdc-chip .mdc-chip__icon--leading:not(.mdc-chip__icon--leading-hidden),.mdc-chip .mdc-chip__icon--leading:not(.mdc-chip__icon--leading-hidden)[dir=rtl]{margin-left:4px;margin-right:-4px}.mdc-chip:hover{color:#000;color:var(--mdc-theme-on-surface, #000)}.mdc-chip__icon--leading{color:rgba(0,0,0,.54)}.mdc-chip__icon--trailing{color:rgba(0,0,0,.54)}.mdc-chip__icon--trailing:hover{color:rgba(0,0,0,.62)}.mdc-chip__icon--trailing:focus{color:rgba(0,0,0,.87)}.mdc-chip__icon.mdc-chip__icon--leading:not(.mdc-chip__icon--leading-hidden){width:20px;height:20px;font-size:20px}.mdc-chip__icon.mdc-chip__icon--trailing{width:18px;height:18px;font-size:18px}.mdc-chip__icon--trailing{margin:0 -4px 0 4px}.mdc-chip--exit{transition:opacity 75ms cubic-bezier(0.4, 0, 0.2, 1),width 150ms cubic-bezier(0, 0, 0.2, 1),padding 100ms linear,margin 100ms linear;opacity:0}.mdc-chip__text{white-space:nowrap}.mdc-chip__icon{border-radius:50%;outline:none;vertical-align:middle}.mdc-chip__checkmark{height:20px}.mdc-chip__checkmark-path{transition:stroke-dashoffset 150ms 50ms cubic-bezier(0.4, 0, 0.6, 1);stroke-width:2px;stroke-dashoffset:29.7833385;stroke-dasharray:29.7833385}.mdc-chip--selected .mdc-chip__checkmark-path{stroke-dashoffset:0}.mdc-chip-set--choice .mdc-chip.mdc-chip--selected::before{opacity:.08}.mdc-chip-set--choice .mdc-chip.mdc-chip--selected::before,.mdc-chip-set--choice .mdc-chip.mdc-chip--selected::after{background-color:#6200ee}@supports not (-ms-ime-align: auto){.mdc-chip-set--choice .mdc-chip.mdc-chip--selected::before,.mdc-chip-set--choice .mdc-chip.mdc-chip--selected::after{background-color:var(--mdc-theme-primary, #6200ee)}}.mdc-chip-set--choice .mdc-chip.mdc-chip--selected:hover::before{opacity:.12}.mdc-chip-set--choice .mdc-chip.mdc-chip--selected:not(.mdc-ripple-upgraded):focus::before,.mdc-chip-set--choice .mdc-chip.mdc-chip--selected.mdc-ripple-upgraded--background-focused::before{transition-duration:75ms;opacity:.2}.mdc-chip-set--choice .mdc-chip.mdc-chip--selected:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-chip-set--choice .mdc-chip.mdc-chip--selected:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:.2}.mdc-chip-set--choice .mdc-chip.mdc-chip--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: 0.2}.mdc-chip-set--choice .mdc-chip.mdc-chip--selected{color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}.mdc-chip-set--choice .mdc-chip.mdc-chip--selected .mdc-chip__icon--leading{color:rgba(98,0,238,.54)}.mdc-chip-set--choice .mdc-chip.mdc-chip--selected:hover{color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}.mdc-chip-set--choice .mdc-chip .mdc-chip__checkmark-path{stroke:#6200ee;stroke:var(--mdc-theme-primary, #6200ee)}.mdc-chip-set--choice .mdc-chip--selected{background-color:#fff;background-color:var(--mdc-theme-surface, #fff)}.mdc-chip__checkmark-svg{width:0;height:20px;transition:width 150ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-chip--selected .mdc-chip__checkmark-svg{width:20px}.mdc-chip-set--filter .mdc-chip__icon--leading{transition:opacity 75ms linear;transition-delay:-50ms;opacity:1}.mdc-chip-set--filter .mdc-chip__icon--leading+.mdc-chip__checkmark{transition:opacity 75ms linear;transition-delay:80ms;opacity:0}.mdc-chip-set--filter .mdc-chip__icon--leading+.mdc-chip__checkmark .mdc-chip__checkmark-svg{transition:width 0ms}.mdc-chip-set--filter .mdc-chip--selected .mdc-chip__icon--leading{opacity:0}.mdc-chip-set--filter .mdc-chip--selected .mdc-chip__icon--leading+.mdc-chip__checkmark{width:0;opacity:1}.mdc-chip-set--filter .mdc-chip__icon--leading-hidden.mdc-chip__icon--leading{width:0;opacity:0}.mdc-chip-set--filter .mdc-chip__icon--leading-hidden.mdc-chip__icon--leading+.mdc-chip__checkmark{width:20px}@keyframes mdc-chip-entry{from{transform:scale(0.8);opacity:.4}to{transform:scale(1);opacity:1}}.mdc-chip-set{padding:4px;display:flex;flex-wrap:wrap;box-sizing:border-box}.mdc-chip-set .mdc-chip{margin:4px}.mdc-chip-set--input .mdc-chip{animation:mdc-chip-entry 100ms cubic-bezier(0, 0, 0.2, 1)}.material-icons{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-feature-settings:"liga";-webkit-font-smoothing:antialiased}:host{display:inline-block;outline:none}.mdc-ripple-upgraded{transition:background .4s}`;
