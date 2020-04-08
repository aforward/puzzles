
const Matchparens = {

  match: function(str, whichParen) {
    let openParen = 0;
    let currentParen = 0;
    let answer = [];
    let isFound = false;

    for (let i in str) {
      const c = str[i]
      const isOpen = c == "(";
      const isClosed = c == ")";

      if (isOpen) {
        openParen += 1;
        currentParen += 1;
      } else if (isClosed) {
        currentParen -= 1;
      }

      if (isOpen && !isFound && openParen == whichParen) {
        currentParen = 1;
        isFound = true;
      } else if (isFound) {
        if (isClosed && currentParen == 0) {
          return answer.join('');
        } else {
          answer.push(c);
        }
      }
    }

    return null;
  },

}

module.exports = Matchparens;