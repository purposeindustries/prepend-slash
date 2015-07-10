'use-strict';

/**
 * Put a slash at the beginning of the given string.
 *
 * @param  {String} str    a string to be prepended
 * @param  {Boolean} [strict=false]    if it's true and the first parameter isn't a string, it throws a TypeError
 * @return {String}        the string with leading slash
 */
module.exports = function (str, strict) {
  strict = !!strict;
  if (strict && typeof str !== 'string') {
    throw new TypeError('Expected a string as the first parameter');
  }
  str = str || '';
  return str[0] === '/' ? str : '/' + str;
}
