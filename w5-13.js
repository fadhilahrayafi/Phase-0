function sorting(arrNumber) {
  for (var i = 0; i < arrNumber.length; i++) {
    for (var j = i + 1; j < arrNumber.length; j++) {
      if (arrNumber[i] < arrNumber[j]) {
        var swap = arrNumber[i];
        arrNumber[i] = arrNumber[j];
        arrNumber[j] = swap;
      }
    }
  }
  return arrNumber;
}

function getTotal(arrNumber) {
  var total = 0;
  for (var i = 0; i < arrNumber.length; i++) {
    if (arrNumber[0] === arrNumber[i]) {
      total++;
    }
  }
  return total;
}

function mostFrequentLargestNumbers(arrNumber) {
  var listSort = sorting(arrNumber);
  var countHighest = getTotal(listSort);
  return arrNumber.length === 0
    ? "[]"
    : "angka paling besar adalah " +
        listSort[0] +
        " dan jumlah kemunculan sebanyak " +
        countHighest +
        " kali";
}

console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
//'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'

console.log(
  mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150])
);
//'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'

console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
//'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'

console.log(mostFrequentLargestNumbers([]));
//''
