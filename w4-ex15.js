function highestScore(students) {
  var result = {};
  var classes = [];
  for (var i = 0; i < students.length; i++) {
    var test = false;
    for (var j = 0; j < classes.length; j++) {
      if (students[i].class === classes[j]) {
        test = true;
      }
    }
    if (test === false) {
      classes.push(students[i].class);
    }
  }
  for (var i = 0; i < classes.length; i++) {
    var high = 0;
    for (var j = 0; j < students.length; j++) {
      var inner = {};
      if (classes[i] === students[j].class && students[j].score > high) {
        high = students[j].score;
        inner["name"] = students[j].name;
        inner["score"] = high;
        result[students[j].class] = inner;
      }
    }
  }
  return result;
}

// TEST CASE
console.log(
  highestScore([
    {
      name: "Dimitri",
      score: 90,
      class: "foxes"
    },
    {
      name: "Alexei",
      score: 85,
      class: "wolves"
    },
    {
      name: "Sergei",
      score: 74,
      class: "foxes"
    },
    {
      name: "Anastasia",
      score: 78,
      class: "wolves"
    }
  ])
);

// {
//   foxes: { name: 'Dimitri', score: 90 },
//   wolves: { name: 'Alexei', score: 85 }
// }

console.log(
  highestScore([
    {
      name: "Alexander",
      score: 100,
      class: "foxes"
    },
    {
      name: "Alisa",
      score: 76,
      class: "wolves"
    },
    {
      name: "Vladimir",
      score: 92,
      class: "foxes"
    },
    {
      name: "Albert",
      score: 71,
      class: "wolves"
    },
    {
      name: "Viktor",
      score: 80,
      class: "tigers"
    }
  ])
);

// {
//   foxes: { name: 'Alexander', score: 100 },
//   wolves: { name: 'Alisa', score: 76 },
//   tigers: { name: 'Viktor', score: 80 }
// }

console.log(highestScore([])); //{}
