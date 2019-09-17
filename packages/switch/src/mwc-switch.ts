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
import {
  FormElement,
  html,
  property,
  observer,
  query,
  customElement,
  HTMLElementWithRipple,
  addHasRemoveClass
} from '@material/mwc-base/form-element';
import MDCSwitchFoundation from '@material/switch/foundation';
import { MDCSwitchAdapter } from '@material/switch/adapter';
import { ripple } from '@material/mwc-ripple/ripple-directive';

import { style } from './mwc-switch-css';

declare global {
  interface HTMLElementTagNameMap {
    'mwc-switch': Switch;
  }
}

@customElement('mwc-switch' as any)
export class Switch extends FormElement {
  @property({ type: Boolean })
  @observer(function (this: Switch, value: boolean) {
    this.mdcFoundation.setChecked(value);
  })
  checked = false;

  @property({ type: String })
  name = ''

  @property({ type: String })
  value = ''

  @property({ type: Boolean })
  @observer(function (this: Switch, value: boolean) {
    this.mdcFoundation.setDisabled(value);
  })
  disabled = false;

  static styles = style;

  @query('.mdc-switch')
  protected mdcRoot!: HTMLElement;

  @query('input')
  protected formElement!: HTMLInputElement;

  protected mdcFoundation!: MDCSwitchFoundation;

  protected _changeHandler(e: Event) {
    this.mdcFoundation.handleChange(e);
    // catch "click" event and sync properties
    this.checked = this.formElement.checked;
  };

  protected readonly mdcFoundationClass = MDCSwitchFoundation;

  protected createAdapter(): MDCSwitchAdapter {
    return {
      ...addHasRemoveClass(this.mdcRoot),
      setNativeControlChecked: (checked: boolean) => {
        this.formElement.checked = checked;
      },
      setNativeControlDisabled: (disabled: boolean) => {
        this.formElement.disabled = disabled;
      }
    }
  }

  get ripple() {
    return this.rippleNode.ripple;
  }

  @query('.mdc-switch__thumb-underlay')
  protected rippleNode!: HTMLElementWithRipple;

  render() {
    return html`
      <div class="mdc-switch">
        <div class="mdc-switch__track"></div>
        <div class="mdc-switch__thumb-underlay" .ripple="${ripple({ interactionNode: this })}">
          <div class="mdc-switch__thumb">
            <input type="checkbox" id="basic-switch" class="mdc-switch__native-control" role="switch" .checked="${this.checked}"
              .value="${this.value}" @change="${this._changeHandler}">
          </div>
        </div>
      </div>
      <slot></slot>`;
  }
}
