## Usage

### es module
```js
import { Meta } from 'storybook-addon-meta'

const path = Meta.componentPath(component); // return component path
const name = Meta.componentName(component); // return component name
```

### commonjs
```js
var Meta = require('storybook-addon-meta').Meta;

var path = Meta.componentPath(component); // return component path
var name = Meta.componentName(component); // return component name
```
