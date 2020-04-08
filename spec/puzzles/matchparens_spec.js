describe("Me", function() {
  const matchparens = require('../../matchparens/matchparens');

  it("no paren", function() {
    expect(matchparens.match("abcdef", 1)).toEqual(null);
    expect(matchparens.match("ab(cde)f", 2)).toEqual(null);
  });

  it("no match", function() {
    expect(matchparens.match("ab(cdef", 1)).toEqual(null);
    expect(matchparens.match("ab(c(de)f", 1)).toEqual(null);
  });

  it("simple match", function() {
    const str = "Hello (my name) is?";
    expect(matchparens.match(str, 1)).toEqual("my name");
  })

  it("nested match", function() {
    const str = "Hello (my name (is Thomas) what is) yours?";
    expect(matchparens.match(str, 1)).toEqual("my name (is Thomas) what is");
    expect(matchparens.match(str, 2)).toEqual("is Thomas");
    expect(matchparens.match("ab(c(de)f", 2)).toEqual("de");
  })

  it("before red herring", function() {
    const str = "Hello (my (name) is) (is Thomas) what is) yours?";
    expect(matchparens.match(str, 3)).toEqual("is Thomas");
  })

});
