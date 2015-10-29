# prepend-slash
[![Build Status](https://circleci.com/gh/purposeindustries/prepend-slash.svg?&style=shield)](https://circleci.com/gh/purposeindustries/prepend-slash) [![Code Climate](https://codeclimate.com/github/purposeindustries/prepend-slash/badges/gpa.svg)](https://codeclimate.com/github/purposeindustries/prepend-slash) [![Coverage Status](https://coveralls.io/repos/purposeindustries/prepend-slash/badge.svg?branch=master&service=github)](https://coveralls.io/github/purposeindustries/prepend-slash?branch=master)

> Sets a leading slash as the first character of a given string.

## Install

```sh
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

```sh
$ npm test
```

## License

[MIT](LICENSE) &copy; Purpose Industries
