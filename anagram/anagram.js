const Anagram = {

  sort: (word) => word.split('').sort().join(''),

  find: function(list, word) {
    const len = word.length;
    const sortedWord = Anagram.sort(word);

    const answer = list.filter((check) => {
      return check.length == len &&
        Anagram.sort(check) == sortedWord;
      }
    );
    return answer;
  },
}

module.exports = Anagram