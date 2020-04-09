describe("Cards", function(){
  const Cards = require('../../cards/cards');
  let cards;

  beforeEach(function() {
    cards = new Cards();
  });

  it("deck", function() {
    expect(cards.deck.length).toEqual(52);
  });

  it("shuffle", function() {
    expect(cards.shuffle().length).toEqual(52);
    expect(cards.shuffle(7).length).toEqual(7);
    for (let i in [...Array(500)]) {
      expect(cards.shuffle(7).join('') != cards.shuffle(7).join(''))
        .toBe(true);
    }
  });

});
