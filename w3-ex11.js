function tentukanDeretAritmatika(arr) {
  // you can only write your code here!
  var temp = [];
  for (var i = 0; i < arr.length - 1; i++) {
    temp.push(arr[i + 1] - arr[i]);
  }
  function mean(num) {
    var result = 0;
    for (var i = 0; i < num.length; i++) {
      result += num[i];
    }
    return result / num.length;
  }
  return mean(temp) === temp[0] ? true : false;
}

// TEST CASES
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false
