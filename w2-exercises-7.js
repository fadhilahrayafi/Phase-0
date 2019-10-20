console.log("No. 1");
var row = 5;
star = "*";
for (i = 0; i < row; i++) {
  console.log(star);
}

console.log("No. 2");
for (i = 0; i < row; i++) {
  star = "";
  for (j = 0; j < row; j++) {
    star += "*";
  }
  console.log(star);
}

console.log("No. 3");
for (i = 0; i < row; i++) {
  star = "";
  for (j = 0; j < i + 1; j++) {
    star += "*";
  }
  console.log(star);
}
