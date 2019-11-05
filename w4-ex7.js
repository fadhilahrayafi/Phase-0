function urutkanAbjad(str) {
  var abjad = "abcdefghijklmnopqrstuvwxyz";
  var temp = [];
  for (var i = 0; i < str.length; i++) {
    for (var j = 0; j < abjad.length; j++) {
      if (str[i] === abjad[j]) {
        temp.push(j);
      }
    }
  }
  for (var i = 0; i < temp.length; i++) {
    for (var j = i + 1; j < temp.length; j++) {
      if (temp[i] > temp[j]) {
        var swap = temp[i];
        temp[i] = temp[j];
        temp[j] = swap;
      }
    }
  }
  var result = "";
  for (var i = 0; i < temp.length; i++) {
    result += abjad[temp[i]];
  }
  return result;
}

// TEST CASES
console.log(urutkanAbjad("hello")); // 'ehllo'
console.log(urutkanAbjad("truncate")); // 'acenrttu'
console.log(urutkanAbjad("developer")); // 'deeeloprv'
console.log(urutkanAbjad("software")); // 'aeforstw'
console.log(urutkanAbjad("aegis")); // 'aegis'
