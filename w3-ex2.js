function balikString(input) {
  var output = "";
  for (var i = input.length - 1; i >= 0; i--) {
    output += input[i];
  }
  return output;
}
console.log(balikString("hello world"));
