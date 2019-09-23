#!/usr/bin/env bash

find ./demos/* -exec sed -i '' -e 's/@material\/mwc/@gsk-platforms\/mwc/g' {} \;
find ./packages/* -exec sed -i '' -e 's/@material\/mwc/@gsk-platforms\/mwc/g' {} \;
find ./packages/* -exec sed -i '' -e 's|public|private|g' {} \;
find ./packages/* -exec sed -i '' -e "s|customElement('mwc-|customElement('gsk-mwc-|g" {} \;
find ./packages/* -exec sed -i '' -e "s|customElements.define(\'mwc-|customElements.define(\'gsk-mwc-|g" {} \;
find ./demos/* -exec sed -i '' -e 's|<mwc-|<gsk-mwc-|g' {} \;
find ./demos/* -exec sed -i '' -e 's|</mwc-|</gsk-mwc-|g' {} \;
find ./packages/*/package.json -exec sed -i '' -e 's|https://github.com/material-components/material-components-web-components.git|https://mygithub.gsk.com/gsk-tech/gsk-material-components-web-components.git|g' {} \;
