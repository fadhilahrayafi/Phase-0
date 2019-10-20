console.log("NOMER 1");
function shoutOut() {
  return "Halo Function!";
}
console.log(shoutOut());

console.log("-----------------------------------------------------");
console.log("NOMER 2");
function calculateMultiply(num1, num2) {
  return num1 * num2;
}
console.log(calculateMultiply(5, 6));

console.log("-----------------------------------------------------");
console.log("NOMER 3");
function processSentence(name, age, address, hobby) {
  return (
    "Nama saya " +
    name +
    "," +
    " umur saya " +
    age +
    " tahun," +
    " alamat saya di " +
    address +
    " dan saya punya hobby yaitu " +
    hobby +
    "!"
  );
}

console.log(
  processSentence("Agus", 30, "Jln. Malioboro, Yogjakarta", "gaming")
);
