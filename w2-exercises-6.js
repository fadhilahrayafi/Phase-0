/*No 1*/
console.log("LOOPING PERTAMA");
var number = 2;

while (number < 21) {
  console.log(number + " - I love coding");
  number += 2;
}
console.log("LOOPING KEDUA");

var numberr = 20;
while (numberr > 0) {
  console.log(numberr + " - I will become fullstack developer");
  numberr -= 2;
}
console.log("-----------------------------------------------------");

/*No 2*/
console.log("LOOPING PERTAMA");
var number2 = 1;
for (var number2 = 1; number2 < 21; number2++) {
  console.log(number2 + " - I love coding");
}
console.log("LOOPING KEDUA");

var numberr2 = 20;
for (var numberr2 = 20; numberr2 > 0; number--) {
  console.log(numberr2 + " - I will become fullstack developer");
  numberr2--;
}
console.log("-----------------------------------------------------");

/*No 3*/
var nomer = 1;
for (var nomer = 1; nomer < 101; nomer++) {
  if (nomer % 2 === 0) {
    console.log(nomer + " genap");
  } else {
    console.log(nomer + " ganjil");
  }
}

for (var nomer = 1; nomer < 101; nomer += 2) {
  if (nomer % 3 === 0) {
    console.log(nomer + " kelipatan 3");
  }
}

for (var nomer = 1; nomer < 101; nomer += 5) {
  if (nomer % 6 === 0) {
    console.log(nomer + " kelipatan 6");
  }
}

for (var nomer = 1; nomer < 101; nomer += 9) {
  if (nomer % 10 === 0) {
    console.log(nomer + " kelipatan 10");
  }
}
