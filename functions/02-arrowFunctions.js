/*
Arrow Functions are expressional functions that can be simplified into one of two forms: Concise body and Block body. The main goal
is to generate shorter syntax for writing a fucntion
*/

// Regular Function
function regFunc() {
  console.log("just a regular function");
}

regFunc();

let arrowFunc = () => console.log("hello");

arrowFunc();

/*

*/
let conciseBody = (x, y) => x + y;
let result = conciseBody(2, 1);
console.log(result);

let hero = "Robin Hood";
let nock = 1;

let shot = (x, y) =>
  y < 3
    ? console.log(`${x} only shot ${y} arrow...`)
    : console.log(`${x} shot ${y} arrows at the target!`);

shot(hero, nock);

let hero = "Robin Hood";
let nock = 1;

let shot = (x, y) => {
  for (let y = 0; y <= 3; y++) {
    console.log(`${x} only shot ${y} arrow...`);
  }
  for (let y = 0; y > 3; y) {
    console.log(`${x} shot ${y} arrows at the target!`);
  }
};
shot(hero, nock);
