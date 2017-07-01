# babel-preset-alibaba

> A babel preset for transforming your JavaScript for Alibaba.ir.

Currently contains transforms for all standard syntax that is [stage 4](https://tc39.github.io/ecma262/) (ES2017) or [stage 3](https://github.com/tc39/proposals#active-proposals), except for the following:

 - generators: `regenerator-runtime` is too heavyweight for our use.
 - Compile the new function bind operator `::` to ES5.
 - Turn JSX into React function calls.
 - Compile class and object decorators to ES5.
 - Syntax Dynamic Import. Allow parsing of `import()`. [source](https://babeljs.io/docs/plugins/syntax-dynamic-import/)
 - Babel React Optimize in Production Mode:
 1. [transform-react-constant-elements](https://github.com/babel/babel/tree/master/packages/babel-plugin-transform-react-constant-elements)
 2. [transform-react-inline-elements](https://github.com/babel/babel/tree/master/packages/babel-plugin-transform-react-inline-elements)
 3. [transform-react-remove-prop-types](https://github.com/oliviertassinari/babel-plugin-transform-react-remove-prop-types)
 4. [transform-react-pure-class-to-function](https://github.com/thejameskyle/babel-react-optimize/tree/master/packages/babel-plugin-transform-react-pure-class-to-function)
 - `async/await`: `regenerator-runtime` is too heavyweight for our use, and [async-to-promises](https://www.npmjs.com/package/babel-plugin-async-to-promises) is not yet complete enough to be safely used.
 - `SIMD`: this is a performance feature, so is pretty pointless to polyfill/transpile.
 - lifted template literal restrictions: we do not use tagged template literals, nor implement custom DSLs, otherwise we would enable this.

## Install

```sh
$ npm install --save-dev babel-preset-alibaba
```

## Usage

### Via `.babelrc` (Recommended)

**.babelrc**

```json
{
  "presets": ["alibaba"]
}
```

### Via CLI

```sh
$ babel script.js --presets alibaba
```

### Via Node API

```javascript
require("babel-core").transform("code", {
  presets: ["alibaba"]
});
```

### Targeting Environments

This module uses babel-preset-env to target specific environments.

Please refer to [babel-preset-env#targets](https://github.com/babel/babel-preset-env#targets) for a list of available options.

For a list of browsers please see [browserlist](https://github.com/ai/browserslist).

You may override our default list of targets by providing your own `targets` key.

```json
{
  "presets": [["alibaba", {
    "targets": {
      "chrome": 50,
      "explorer": 11,
      "firefox": 45
    }
  }]]
}
```

The following transpiles only for Node v6.

```json
{
  "presets": [["alibaba", {
    "targets": {
      "node": 6
    }
  }]]
}
```

If you wish, you can also inherit our default list of browsers and extend them using `additionalTargets`.

```json
{
  "presets": [["alibaba", {
    "additionalTargets": {
      "chrome": 42,
      "explorer": 8
    }
  }]]
}
```
