function changeVocals(str) {
  //code di sini
  var result = "";
  for (var i = 0; i < str.length; i++) {
    if (str[i] === "a") {
      result += "b";
    } else if (str[i] === "i") {
      result += "j";
    } else if (str[i] === "u") {
      result += "v";
    } else if (str[i] === "e") {
      result += "f";
    } else if (str[i] === "o") {
      result += "p";
    } else if (str[i] === "A") {
      result += "B";
    } else if (str[i] === "I") {
      result += "J";
    } else if (str[i] === "U") {
      result += "V";
    } else if (str[i] === "E") {
      result += "F";
    } else if (str[i] === "O") {
      result += "P";
    } else {
      result += str[i];
    }
  }
  return result;
}

function reverseWord(str) {
  //code di sini
  if (str.length === 0) {
    return "";
  }
  return str[str.length - 1] + reverseWord(str.substring(0, str.length - 1));
}

function setLowerUpperCase(str) {
  //code di sini
  var result = "";
  for (var i = 0; i < str.length; i++) {
    if (str[i] === str[i].toUpperCase()) {
      result += str[i].toLowerCase();
    } else if (str[i] === str[i].toLowerCase()) {
      result += str[i].toUpperCase();
    }
  }
  return result;
}

function removeSpaces(str) {
  //code di sini
  var result = "";
  for (var i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      result += "";
    } else {
      result += str[i];
    }
  }
  return result;
}

function passwordGenerator(name) {
  //code di sini
  var result = changeVocals(name);
  result = reverseWord(result);
  result = setLowerUpperCase(result);
  result = removeSpaces(result);

  return name.length < 5
    ? "Minimal karakter yang diinputkan adalah 5 karakter"
    : result;
}

console.log(passwordGenerator("Sergei Dragunov")); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator("Dimitri Wahyudiputra")); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator("Alexei")); // 'JFXFLb'
console.log(passwordGenerator("Alex")); // 'Minimal karakter yang diinputkan adalah 5 karakter'
