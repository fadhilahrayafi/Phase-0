function digitPerkalianMinimum(angka) {
  var hasilKali = [];
  for (var i = 1; i <= angka; i++) {
    for (var j = 0; j <= angka; j++) {
      if (i * j === angka) {
        hasilKali.push((i.toString() + j.toString()).length);
      }
    }
  }
  var result = hasilKali[0];
  for (var i = 0; i < hasilKali.length; i++) {
    if (result > hasilKali[i]) {
      result = hasilKali[i];
    }
  }
  return result;
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2
