/* 
Conditionals

Falsy Values: A value that is considered false when encountered in a boolean context. There are 6 falsy values in JS.
    - false
    - '',"",``
    - null
    - undefined
    - 0 
    - NaN

What does this mean? Whenever JS is expecting a boolean value and is given one of these 6, it is evaluated as false.
*/

// let light = "on";
// keyword    expression
if (true) {
  // code to run if the expression evaluates to true
  console.log("Truthy Test");
}

if (false) {
  console.log("Falsy Test");
}

let light = "off";

if ((light = "on")) {
  console.log("The light is on");
}

let weather = 65;
let rain = true;

if ((weather < 70, rain == true)) {
  console.log("Maybe wear a jacket.");
}

let cooktime = 60;

if (cooktime === 45) {
  console.log("Let us feast!");
} else if (cooktime >= 30) {
  console.log(
    `It has only been ${cooktime} minutes. Wait another 5-15 minutes.`
  );
} else if (cooktime >= 20) {
  console.log(
    `It has only been ${cooktime} minutes. Wait another 10-25 minutes.`
  );
} else if (cooktime > 45) {
  console.log(
    `It has been ${cooktime} minutes??? Might need a glass of water with this one!`
  );
} else {
  console.log(
    `It has only been ${cooktime} minutes. Perhaps we could at least try cooking it...`
  );
}

let age = 26;

if (age <= 17) {
  console.log("Sorry, you're too young to do anything.");
} else if (age >= 18) {
  console.log("You can vote!");
} else if (age >= 21) {
  console.log("You can drink!");
} else if (age >= 25) {
  console.log("You can rent a car!");
}

/* Ternaries

Like if/else statements but they look weird.

*/

if (myName === "Carlo") {
  console.log(`Hi, ${myName}!`);
} else {
  console.log(`Not sure I know ${myName}!`);
}

// condition ? if true : else result
let myName = "Carlo";

myName === "Carlo"
  ? console.log(`Hi, ${myName}!`)
  : console.log(`Not sure I know ${myName}.`);

let hero = "Batman";
let villain = "Mr. Freeze";

hero == "Batman" && villain == "Riddler"
  ? console.log("What has a head and a tail but no body?")
  : hero == "Batman" && villain == "Joker"
  ? console.log("Why so serious?")
  : hero == "Batman" && villain == "Mr. Freeze"
  ? console.log("Ice to meet you!")
  : console.log(`${hero} is the night!`);

let lampOn = false;
let daytime = true;

lampOn == true && daytime != true
  ? console.log("The lamp is on during the night.")
  : lampOn != true && daytime != true
  ? console.log("The lamp is off during the night.")
  : lampOn == true && daytime == true
  ? console.log("The lamp is on during the day.")
  : lampOn != true && daytime == true
  ? console.log("The lamp is off during the day")
  : console.log("What lamp?");

/*
  Switch statements

  The switch statement executes a block of code depending on different cases.

  */

let instructor = "Jerome";

switch (instructor) {
  // if instructor === 'Jerome'
  case "Jerome":
    console.log(`${instructor} is a part of the Web Development Team.`);
    break;
  case "Summer":
    console.log(`${instructor} is a part of the Web Development Team.`);
    break;
  case "Josh":
    console.log(`${instructor} is a part of the Software Development Team.`);
    break;
  default:
    console.log(`Sorry I can't find what ${instructor} teaches at this time.`);
}

let grade = 80;

switch (true) {
  case grade >= 89:
    console.log(`Your grade is ${grade}, you have an A`);
    break;
  case grade >= 79:
    console.log(`You're grade is ${grade}, you have a B`);
    break;
  case grade >= 66:
    console.log(`You're grade is ${grade}, you have a C`);
    break;
  case grade >= 59:
    console.log(`You're grade is ${grade}, you have a D`);
    break;
  case grade >= 0:
    console.log(`You're grade is ${grade}, you have a F`);
    break;
  default:
    console.log("Please insert a value");
    break;
}
