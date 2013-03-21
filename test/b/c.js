expect = require('expect.js');

describe('c', function() {
  it('false', function() {
    expect(false).to.be(false);
  });
  it('false is not true', function() {
    expect(false).not.to.be(true);
  });
});
