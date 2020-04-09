describe("Anagram", function() {
  const Anagram = require('../../anagram/anagram');

  it("size mismatch", function() {
    expect(Anagram.find(["abcd"], "abc")).toEqual([]);
    expect(Anagram.find(["ab"], "abc")).toEqual([]);
  });

  it("simple", function() {
    expect(Anagram.find(["abc"], "abc")).toEqual(["abc"]);
    expect(Anagram.find(["cba"], "abc")).toEqual(["cba"]);
    expect(Anagram.find(["def"], "abc")).toEqual([]);
  });

  it("complex", function() {
    expect(Anagram.find(["abc", "ab", "deca", "ac", "cba"], "abc")).toEqual(["abc", "cba"]);
  });

});
