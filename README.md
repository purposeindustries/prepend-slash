# prepend-slash

> Sets a leading slash as the first paramater of a given string.

## Install

```bash
$ npm install prepend-slash
```

## Usage

```js

var prependSlash = require('prepend-slash');

console.log(prependSlash('path/to')); // output: /path/to
console.log(prependSlash('/path/to')); // output: /path/to
console.log(prependSlash('')); // throws TypeError
console.log(prependSlash('', false)); // output: /

```

## API

`prependSlash(string, [strict=true])`

### string
Type: `String`

### strict
Type: `Boolean`
Default: `true`

Set it `false` to make it silent. It's useful if you're fine with '/' as a result.

## Test

```bash
$ npm test
```

## License

[MIT](LICENSE) &copy; Purpose Industries
