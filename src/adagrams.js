const Adagrams = {
  drawLetters() {
    // Implement this method for wave 1
    let letters = {
      "A": 9,
      "B": 2,
      "C": 2,
      "D": 4,
      "E": 12,
      "F": 2,
      "G": 3,
      "H": 2,
      "I": 9,
      "J": 1,
      "K": 1,
      "L": 4,
      "M": 2,
      "N": 6,
      "O": 8,
      "P": 2,
      "Q": 1,
      "R": 6,
      "S": 4,
      "T" : 6,
      "U" : 4,
      "V" : 2,
      "W" : 2,
      "X" : 1,
      "Y" : 2,
      "Z" : 1
    };

    //Creates the array of all the letters available to pick
    let letterProbability = [];

    for (let key in letters) {
      while (letters[key] > 0) {
        letterProbability.push(key)
        letters[key] -= 1
      }
    }
    //Select letters and replace with 0 once they are picked
    let yourHand = []
    for (let i = 0; i < 10; i++) {
      let index = Math.floor(Math.random() * letterProbability.length);
      yourHand.push(letterProbability[index]);
      letterProbability.splice(index,1);
    }
    return yourHand
  },

  usesAvailableLetters(input,lettersInHand) {
    let result = true
    input = input.toUpperCase().split("")
    if (lettersInHand.length < input.length) {
      result = false;
    }

    input.forEach ( function(letter) {
      if (lettersInHand.filter(i => i === letter).length < input.filter(i => i === letter).length) {
        result = false;
      }
    })
    return result;
  },

  scoreWord(word) {
    word = word.toUpperCase().split("")
    const allScores = {
     A: 1,
     E: 1,
     I: 1,
     O: 1,
     U: 1,
     L: 1,
     N: 1,
     R: 1,
     S: 1,
     T: 1,
     D: 2,
     G: 2,
     B: 3,
     C: 3,
     M: 3,
     P: 3,
     F: 4,
     H: 4,
     V: 4,
     W: 4,
     Y: 4,
     K: 5,
     J: 8,
     X: 8,
     Q: 10,
     Z: 10,
   }

  let score = 0
  for (const letter of word) {
    score += allScores[letter];
  }

  if (word.length >= 7) {
    score += 8
  }

  return score
  },

  highestScoreFrom(words){
    let wordScores = {
      word: "",
      score: 0,
    }
    console.log(words);
    for (const word of words) {
      if (this.scoreWord(word) > wordScores.score) {
        wordScores.word = word
        wordScores.score = this.scoreWord(word)
      } else {
        if (this.scoreWord(word) === wordScores.score) {
          if (word.length === 10) {
            if (wordScores.word.length === 10){
              break;
            } else {
              wordScores.word = word;
              wordScores.score = this.scoreWord(word);
            }
          } else if (wordScores.word.length > word.length && wordScores.word.length !== 10){
            wordScores.word = word;
            wordScores.score = this.scoreWord(word);
          }
        }
      }
    }
    return wordScores
  }
};

// console.log(Adagrams.drawLetters());
// Do not remove this line or your tests will break!
export default Adagrams;
