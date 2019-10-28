function pasanganTerbesar(num) {
  // you can only write your code here!
  var str = num.toString();
  var temp = [];
  for (var i = 0; i < str.length - 1; i++) {
    temp.push(str[i] + str[i + 1]);
  }
  var max = parseInt(temp[0]);
  for (var i = 0; i < temp.length; i++) {
    if (parseInt(temp[i]) > max) {
      max = temp[i];
    }
  }
  return max;
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99
