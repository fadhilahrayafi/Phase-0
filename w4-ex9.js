function checkAB(num) {
  var pos = 0;
  for (var i = 0; i < num.length; i++) {
    if (num[i] === "a") {
      pos = i;
      break;
    }
  }
  var hururfB = 0;
  for (var i = pos; i < num.length; i++) {
    if (num[i] === "b") {
      hururfB++;
    }
  }
  return hururfB === 0 ? false : true;
}

// TEST CASES
console.log(checkAB("lane borrowed")); // true
console.log(checkAB("i am sick")); // false
console.log(checkAB("you are boring")); // true
console.log(checkAB("barbarian")); // true
console.log(checkAB("bacon and meat")); // false
