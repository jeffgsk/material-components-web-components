# mwc-formfield
A [Material Components](https://material.io/components/) formfield implementation using [Web Components](https://www.webcomponents.org/introduction)

## Getting started

* When you're ready to use mwc-formfield in a project, install it via [npm](https://www.npmjs.com/). To run the project in the browser, a module-compatible toolctain is required. We recommend installing the [Polymer CLI](https://github.com/Polymer/polymer-cli) and using its development server as follows.

  1. Ensure the webcomponents polyfills are included in your HTML page

      - Install webcomponents polyfills

          ```npm i @webcomponents/webcomponentsjs```

      - Add webcomponents polyfills to your HTML page

          ```<script src="@webcomponents/webcomponentsjs/webcomponents-loader.js"></script>```

  1. Add mwc-formfield to your project:

      ```npm i @material/mwc-formfield```

  1. Import the mwc-formfield definition into your HTML page:

      ```<script type="module" src="@material/mwc-formfield/mwc-formfield.js"></script>```

      Or into your module script:

      ```import { Formfield } from "@material/mwc-formfield"```

  1. Create an instance of mwc-formfield in your HTML page, or via any framework that [supports rendering Custom Elements](https://custom-elements-everywhere.com/):

      ```<mwc-formfield></mwc-formfield>```

  1. Install the Polymer CLI:

      ```npm i -g polymer-cli```

  1. Run the development server and open a browser pointing to its URL:

      ```polymer serve```

  > mwc-formfield is published on [npm](https://www.npmjs.com/package/@material/mwc-formfield) using JavaScript Modules.
  This means it can take advantage of the standard native JavaScript module loader available in all current major browsers.
  >
  > However, since mwc-formfield uses npm convention to reference dependencies by name, a light transform to rewrite specifiers to URLs is required to get it to run in the browser. The polymer-cli's development server `polymer serve` automatically handles this transform.

  Tools like [WebPack](https://webpack.js.org/) and [Rollup](https://rollupjs.org/) can also be used to serve and/or bundle mwc-formfield.

## Supported Browsers

The last 2 versions of all modern browsers are supported, including
Chrome, Safari, Opera, Firefox, Edge. In addition, Internet Explorer 11 is also supported.
