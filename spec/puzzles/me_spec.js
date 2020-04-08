describe("Me", function() {
  const Me = require('../../me/me');

  it("should do nothing", function() {
    expect(Me.ok()).toEqual("ok");
  });

});
