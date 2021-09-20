// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
  mainAlphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  function substitution(input, alphabet, encode = true) {
    // your solution code here
    if (!alphabet) return false;

    const noRepeatAlphabet = new Set(alphabet);
    if (noRepeatAlphabet.size !== 26) return false;

    let encodeWord = "";
    let lowerInput = input.toLowerCase();

    for (char of lowerInput) {
      if (char === " ") {
        encodeWord += char;
      } else {
        if (encode) {
          encodeWord += alphabet[mainAlphabet.indexOf(char)];
        } else {
          encodeWord += mainAlphabet[alphabet.indexOf(char)];
        }
      }
    }
    return encodeWord;
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
