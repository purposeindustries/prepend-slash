'use strict';

var slash = require('..');

describe('prepend-slash', function () {

  it('should have one leading slash', function () {
    slash('path/to').should.equal('/path/to');
    slash('/path/to').should.equal('/path/to');
  });

  it('should not throw an error', function () {
    var falsy;
    slash(falsy, false).should.equal('/');
  });

  it('should throw an error', function () {
    (function () {
      var falsy;
      slash(falsy);
    }).should.throw(TypeError, {message: 'Expected a string as the first parameter'});
  });
});
