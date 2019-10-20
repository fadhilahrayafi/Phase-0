function konversiMenit(menit) {
  var detik = menit % 60;
  var jam = menit / 60;

  return jam.toFixed(0) + ":" + (detik < 10 ? "0" : "") + detik;
}

// TEST CASES
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00
