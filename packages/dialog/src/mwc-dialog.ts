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

// @ts-ignore: Lit-Element extra imports
import {
    BaseElement,
    customElement,
    Foundation,
    Adapter,
    html,
    property,
    query
} from "@material/mwc-base/base-element";
// import { ComponentElement } from '@material/mwc-base/component-element.js';
import { classMap } from 'lit-html/directives/class-map.js';
import MDCDialogFoundation from "@material/dialog/foundation";

import { style } from './mwc-dialog-css.js';
import 'wicg-inert/dist/inert.js';
import 'blocking-elements/blocking-elements.js';

// import {ComponentElement, MDCWebComponentMixin, html} from '@material/mwc-base/component-element.js';
// import {MDCDialog} from './mdc-dialog.js';

export interface DialogFoundation extends Foundation {
    opened(): boolean;
}

export declare var DialogFoundation: {
    prototype: DialogFoundation;
    new (adapter: Adapter): DialogFoundation;
};

@customElement('mwc-dialog' as any)
export class Dialog extends BaseElement {

    protected mdcFoundation!: DialogFoundation;

    protected readonly mdcFoundationClass: typeof DialogFoundation = MDCDialogFoundation;

    @query('.mdc-dialog')
    protected mdcRoot!: HTMLElement

    @property({type: String})
    headerLabel = '';

    @property({type: String})
    acceptLabel = 'OK';

    @property({type: String})
    declineLabel = 'Cancel';

    @property({type: Boolean})
    scrollable = false;

    @property({type: Boolean})
    opened = false;

    protected createAdapter() {
        return {
            ...super.createAdapter(),
            trapFocus: () => {},
            releaseFocus: () => {},
        }
    }

    renderStyle() {
        return style;
    }

    render() {
        const {headerLabel, acceptLabel, declineLabel, scrollable} = this;
        return html`
            ${this.renderStyle()}
            <aside
                class="mdc-dialog ${this.opened ? 'mdc-dialog--open' : ''}"
                role="alertdialog"
                aria-labelledby="my-dialog-title"
                aria-describedby="my-dialog-content"
                >
                <div class="mdc-dialog__container" @keyup="${this.listenForESC}">
                    <div class="mdc-dialog__surface">
                        <header class="mdc-dialog__header">
                            <h2 id="my-dialog-title" class="mdc-dialog__title">${headerLabel}</h2>
                            <slot name="header"></slot>
                        </header>
                        <section id="my-dialog-content" class="mdc-dialog__content ${classMap({'mdc-dialog__body--scrollable': scrollable})}">
                            <slot></slot>
                        </section>
                        <footer class="mdc-dialog__actions">
                            <slot name="footer"></slot>
                            <button type="button"
                                class="mdc-button mdc-dialog__button mdc-dialog__button--cancel mdc-ripple-upgraded"
                                @click="${this.cancel}"
                                >
                                ${declineLabel}
                            </button>
                            <button type="button"
                                class="mdc-button mdc-dialog__button mdc-dialog__button--accept mdc-ripple-upgraded"
                                @click="${this.accept}">
                                ${acceptLabel}
                            </button>
                        </footer>
                    </div>
                </div>
                <div class="mdc-dialog__scrim"></div>
            </aside>
        `;
    }

    get _backDrop() {
        return this.shadowRoot!.querySelector('.mdc-dialog__scrim');
    }

    accept(e) {
        console.log("Accepted", e);
        this.close()
    }

    cancel(e) {
        console.log("Cancelled", e);
        this.close()
    }

    listenForESC(e) {
        console.log("button pressed", e)
        if (e.key === "ESC") {
            this.close()
        }
    }

    close() {
        this.opened = false;
    }

    // show() {
    //     this.componentReady().then((component) => {
    //         component.show();
    //     });
    // }

    // close() {
    //     this.componentReady().then((component) => {
    //         component.close();
    //     });
    // }
}

declare global {
    interface HTMLElementTagNameMap {
        'mwc-dialog': Dialog;
    }
}
