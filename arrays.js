/*
-Populating and Referring
-Methods
-Length
-Iterating
*/

// Populating and Referring

let list = ["orange", "banana", "oreos"];
console.log(list[1]);

let students = [
  "Evan",
  "Ricky",
  "Kali",
  "Richard",
  "Matthew",
  "Cameron",
  "Phoenix",
  25,
  true,
  ["Matthew", "Shake n Bake", "Sophie"],
  15 % 4,
];

console.log(students[9][1]);

let food = ["Pecan Pie", "Shrimp", "Quesadilla", "Cheescake"];

//Add to an Array
food.push("Pizza");
console.log("push", food);

//Remove from an Array
food.pop("Pizza");
console.log("pop", food);

//Remove the first item in an array
food.shift();
console.log("shift", food);

//Insert items at the beginning of an Array
food.unshift("Chicken", "Garlic");
console.log("unshift", food);

//Remove and insert items into an array. Accepts three parameters.
food.splice(2, 1, "Bananas");
console.log("splice", food);
