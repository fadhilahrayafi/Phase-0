function targetTerdekat(arr) {
  // you can only write your code here!
  var o;
  var x = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === "o") {
      o = i;
    } else if (arr[i] === "x") {
      x.push(i);
    }
  }
  var distances = [];
  for (var i = 0; i < x.length; i++) {
    distances.push(Math.abs(o - x[i]));
  }
  distances.sort(function(value1, value2) {
    return value1 > value2;
  });
  return distances.length === 0 ? 0 : distances[0];
}

// TEST CASES
console.log(targetTerdekat([" ", " ", "o", " ", " ", "x", " ", "x"])); // 3
console.log(targetTerdekat(["o", " ", " ", " ", "x", "x", "x"])); // 4
console.log(targetTerdekat(["x", " ", " ", " ", "x", "x", "o", " "])); // 1
console.log(targetTerdekat([" ", " ", "o", " "])); // 0
console.log(targetTerdekat([" ", "o", " ", "x", "x", " ", " ", "x"])); // 2
