function winner(array, totalKm) {
  var jarak = [];
  for (var i = 0; i < array.length; i++) {
    jarak.push(totalKm - array[i][2]);
  }
  var waktu = [];
  for (var i = 0; i < jarak.length; i++) {
    waktu.push(jarak[i] / array[i][1]);
  }

  var plat = [];
  for (var i = 0; i < array.length; i++) {
    plat.push(array[i][0]);
  }

  for (var i = 0; i < waktu.length; i++) {
    for (var j = i + 1; j < waktu.length; j++) {
      if (waktu[i] < waktu[j]) {
        var swap = plat[i];
        plat[i] = plat[j];
        plat[j] = swap;
      }
    }
  }
  return plat;
}

// waktu = sisa jarak / kecepatan
/**
 *              kec, jarak sekarang
 * ['B 117 AA', 50, 100,]
 */
//
console.log(
  winner(
    [
      ["B 117 AA", 50, 100],
      ["B 383 AAS", 90, 80],
      ["B 123 TTT", 50, 200],
      ["B 003 AB", 80, 150]
    ],
    350
  )
);

// function ikanFilter(arr) {
//   var ikan = [];
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i][0] + arr[i][1] + arr[i][2] + arr[i][3] === "ikan") {
//       ikan.push(arr[i]);
//     }
//   }
//   return ikan;
// }

// console.log(
//   ikanFilter(["ikan gurami", "ikan bandeng", "gurita", "pelikan", "cumi-cumi"])
// );
// // ['ikan gurami', 'ikan bandeng']
// console.log(ikanFilter(["ubur-ubur", "bebek"]));
// // []
