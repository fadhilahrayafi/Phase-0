function angkaPrima(angka) {
  var hasil = 0;
  for (i = 1; i <= angka; i++) {
    angka % i === 0 ? hasil++ : (hasil += 0);
  }
  return hasil <= 2 ? true : false;
}

// TEST CASES
console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false
