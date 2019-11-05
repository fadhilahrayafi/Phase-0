function cariModus(arr) {
  var temp = [];
  for (var i = 0; i < arr.length; i++) {
    var check = false;
    for (var j = 0; j < temp.length; j++) {
      if (temp[j][0] === arr[i]) {
        temp[j][1]++;
        check = true;
      }
    }
    if (check === false) {
      temp.push([arr[i], 1]);
    }
  }

  for (var i = 0; i < temp.length; i++) {
    for (var j = i + 1; j < temp.length; j++) {
      if (temp[i][1] < temp[j][1]) {
        var swap = temp[i];
        temp[i] = temp[j];
        temp[j] = swap;
      }
    }
  }
  return temp.length === 1 || temp.length === arr.length ? -1 : temp[0][0];
}
// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1
