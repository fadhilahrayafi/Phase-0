function groupAnimals(animals) {
  var temp = [];
  for (var i = 0; i < animals.length; i++) {
    var check = false;
    for (var j = 0; j < temp.length; j++) {
      if (animals[i][0] === temp[j][0][0]) {
        temp[j].push(animals[i]);
        check = true;
      }
    }
    if (check === false) {
      temp.push([animals[i]]);
    }
  }
  return temp.sort();
}

// TEST CASES
console.log(groupAnimals(["cacing", "ayam", "kuda", "anoa", "kancil"]));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(
  groupAnimals(["cacing", "ayam", "kuda", "anoa", "kancil", "unta", "cicak"])
);
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]
