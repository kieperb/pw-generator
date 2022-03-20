
function getRandomChar(allowed) {
  return allowed[Math.floor(Math.random() * allowed.length)];
}

function checkCharInString(chr, str) {
  return (str.indexOf(chr) > -1);
}

function checkOneCharOfCharsInString(chars, str) {
  for (var i =0; i < chars.length; i++) {
    return checkCharInString(chars[i], str);
  }
}

export default {
  generatePassword(pwLength, characterSet) {
    let specialCharsReg = null;
    if (characterSet.specialChars != null &&
    characterSet.specialChars.length > 0) {
      specialCharsReg = new RegExp(
        "[" + characterSet.specialChars.replace("-", "\\-").replace("/", "\\/") + "]+",
        "g"
      );
    }

    const numbersReg = new RegExp("[0-9]+", "g");
    const lowerReg = new RegExp("[a-z]+", "g");
    const upperReg = new RegExp("[A-Z]+", "g");

    let result = "";
    while (
      checkOneCharOfCharsInString(characterSet.specialChars, result) == false ||
      specialCharsReg.test(result) == false ||
      numbersReg.test(result) == false ||
      lowerReg.test(result) == false ||
      upperReg.test(result) == false
    ) {
      result = "";
      for (let c = 0; c < pwLength; c++) {
        result += getRandomChar();
      }
    }
    return result;
  }
};