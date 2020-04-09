
function Cards() {

  const suits = ["⬦", "♡", "♤", "♧"];
  const numbers = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];

  let entity = {
    deck: (function() {
      let answer = [];
      for (let s in suits) {
        for (let n in numbers) {
          answer.push(`${numbers[n]} ${suits[s]}`);
        }
      }
      return answer;
    })(),
    shuffle: function(/* optional */ numCards) {
      if (typeof numCards == "undefined") {
          numCards = this.deck.length;
      }

      return this.deck
        .sort((a, b) => Math.floor(Math.random() * 3) -1)
        .slice(0, numCards);
    }
  }

  return entity;
}

module.exports = Cards;