var assert = require('assert');

describe('a', function() {
  it('true', function() {
    assert.equal(true, true);
  });
  it('true is not false', function() {
    assert.notEqual(true, false);
  });
});
