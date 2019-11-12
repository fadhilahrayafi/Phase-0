function kaliTerusRekursif(angka) {
  function help(angka) {
    if (angka < 10) {
      return angka;
    } else {
      return (angka % 10) * kaliTerusRekursif(parseInt(angka / 10));
    }
  }
  var num = help(angka);
  if (num < 10) {
    return num;
  } else {
    return kaliTerusRekursif(parseInt(num));
  }
}

// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6
