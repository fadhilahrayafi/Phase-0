function naikAngkot(arrPenumpang) {
  var result = [];
  var kota = "ABCDEF";
  var start;
  var finish;
  for (var i = 0; i < arrPenumpang.length; i++) {
    var object = {};
    object["penumpang"] = arrPenumpang[i][0];
    object["naikDari"] = arrPenumpang[i][1];
    object["tujuan"] = arrPenumpang[i][2];
    object["bayar"] = 0;
    for (var j = 0; j < kota.length + 1; j++) {
      if (arrPenumpang[i][1] === kota[j]) {
        start = j;
      } else if (arrPenumpang[i][2] === kota[j]) {
        finish = j;
      }
    }
    object.bayar += (finish - start) * 2000;
    result.push(object);
  }
  return result;
}

//TEST CASE
console.log(naikAngkot([["Dimitri", "B", "F"], ["Icha", "A", "B"]]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]
