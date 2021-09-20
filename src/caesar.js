// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    // your solution code here
    // error handling and checking shift values
    try {
      if (shift === 0 || shift > 25 || shift < -25) {
        throw false;
      }
    } catch (error) {
      return error
    }
    // if encode is false
    if (encode === false) {
      shift = -shift;
    }

    let result = "";
    let lowerInput = input.toLowerCase();

    for (let i = 0; i < lowerInput.length; i++) {
      const charCode = lowerInput.charCodeAt(i);
      //If the character is not in the alphabet letter, record the character as is
      if (charCode < 65 || charCode > 122 || (charCode > 90 && charCode < 97)) {
        result += lowerInput[i];
      } else {
        let newCharCode = charCode + shift;

        //lowercase wraparound, positive shift
        if (charCode >= 97 && newCharCode > 122) {
          newCharCode = newCharCode - 122 + 96;
        }

        //lowercase wraparound, negative shift
        if (charCode >= 97 && newCharCode <= 96) {
          newCharCode = newCharCode + 122 - 96;
        }

        result += String.fromCharCode(newCharCode);
      }
    }
    return result;
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };