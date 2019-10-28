function angkaPalindrome(num) {
  function reverse(number) {
    var str = number.toString();
    var rev = "";
    for (i = str.length - 1; i >= 0; i--) {
      rev += str[i];
    }
    return parseInt(rev);
  }

  while (true) {
    num++;
    if (num === reverse(num)) {
      return num;
    }
  }
}

// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001
