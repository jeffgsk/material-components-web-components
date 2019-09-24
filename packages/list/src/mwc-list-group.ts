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
  LitElement,
  customElement,
  query,
  html,
  classMap,
  findAssignedElements
} from '@gsk-platforms/mwc-base/base-element';
import { List as MWCList } from './mwc-list';

import { style } from './mwc-list-group-css';

declare global {
  interface HTMLElementTagNameMap {
    'gsk-mwc-list-group': ListGroup;
  }
}

@customElement('gsk-mwc-list-group' as any)
export class ListGroup extends LitElement {

  @query('.mdc-list-group')
  protected mdcRoot!: HTMLElement;

  @query('slot')
  protected slotEl!: HTMLSlotElement;

  protected get listElements(): MWCList[] {
    return this.slotEl && findAssignedElements(this.slotEl, 'gsk-mwc-list') as MWCList[];
  }

  static styles = style;

  render() {
    const classes = {
      'mdc-list-group': true,
    };

    return html`
      <div class="${classMap(classes)}">
        <slot></slot>
      </div>
    `;
  }

  firstUpdated() {
    this.listElements.forEach(item => item.group = true);
  }
}
