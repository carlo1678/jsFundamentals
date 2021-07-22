//Loops

/* 
Loops allow us to go over a block of information or code in a determined amount of cycles.
It's important to note that it is possible for us to write code without declaring an endpoint.

Loops help us repeat a process without writing alot of code.
*/

/*
Structure

We have to set up our loops in a way that we can:
1 - See where we are in a loop.
2 - Consider what sort of condition we want to run it against.
3 - Not when we are done with that condition, and move onto the next iteration.

We need to:
1 - Create an index
2 - Run a condition
3 - Change to the indexing variable when we execute the condition
*/

//? Let's count to 10

for (let i = 0; i <= 10; i++) {
  console.log(i);
}

/*
We state our loop with a "for". Within this function, we are injecting some parameters
that JS will run against. index; condition, change index -> result.

Within parameters, we are stating our index declaration to 0. This is our baseline.
We move on to asking if that variabhle is less than or equal to the number 10, take that set
number and add 1 to it. Once that is processed, return that value (in this case "console.log" of that number).
Once our condition is met, we return a FALSE which ends our loop.

This is important to note:
for(<create an index varibale>; <run condition>; <change index>) {
    <return results>
    <cont. until the condition is met>
}
*/

//? If we don't indicate what our condition is, the loop will not have a finish line.

for (let i = 2; i > -10; i -= 4) {
  console.log(i);
}

//LOOPS
/*
Loops allow us to go over a block of information or code in a determined amount of cycles. It's important to note that it is possible for us to write code without declaring an endpoint.
Loops help us repeat a process without writing alot of code.
*/
/*
STRUCTURE
We have to setup our loops in a way that we can 
1) See where we are in a loop,
2) Consider what sort of condition we want to run it against, and 
3) Note when we are done with that condition and move on to the next iteration.
We need to:
    1) Create an Index
    2) Run a Condition
    3) Change to the indexing variable (execution of condition)
*/
//? Let's count to 10:
for( let i = 0; i <= 10; 1++){
  console.log(i);
}
/*
We state our loop with a "for". Within this function, we are injecting some parameters that JS will run against. index; condition, change index -> result.
Within parameters, we are stating our index declaration to 0. This is our baseline. We move on to asking if that variable is less than or equal to the number 10, take that set number and add 1 to it. Once that is processed, return that value (in this case "console.log" of that number). Once our condition is met, we return a FALSE which ends our loop. 
THIS is important to note:
for(<create an index variable>; <run condition>; <change index>) {
  <return results>
  <cont. until the condition is met>
}
*/
//? If don't indicate what our condition is, the loop will not have a finish line and thus run until we have to force close it.
//INFINITE LOOP!
/*
for(let i = 0; i++){
  console.log(i);
}
*/
//No condition means that JS doesn't know when to stop and will never assume that information.
//! CHALLENGE:
//* Using a for loop, set an index to 2.  Make a condition where if that number is greater than -10, change that index by subtracting 4 and console log each iteration.*/
//RESULT
for(let a = 2; a > -10; a -=4){
  console.log(a);
}
//We aren't limited by positive or negative numbers. We can cycle through varaiables assigned with strings.
let word = "supercalifragilisticexpialidocious"
for(let b = 0; b < word.length; b++){
  // .length is a method we can use in JS that helps us determine a value we may not know.
  console.log(b, word[b]);
  // 1) We set of each index and are displaying that.
  // 2) We set to display the value within the "object" of word. Each character that is assigned to the variable of "word" is provided an index value and this is how we are cycling through it.
  console.log(`The letter ${word[b]} is in position: ${b}`);
}

/*
FOR IN LOOPS

With For Loops, we are seeking an index value and running it against a condition. For In Loops do not require an index number.

*/

let city = {
  name: 'Indianapolis',
  pop: 877000,
  speedway: true
}

for (info in city){
  console.log(info)
}

let list = ['milk', 'eggs', 'lunch meat']

for (item in list){
  console.log(list[item])
}

let myName = 'dwiGht'
let propCase 

for (let b = 0; b < myName.length; b++){
 if (b === 0){
  propCase = myName[b].toUpperCase() 
 }
 else propCase += myName[b].toLowerCase()
  console.log(propCase)
}

let myObject = {
  string: 'Peter',
  boolean: true,
  number: 1
}

for (item of myObject){
  console.log(item)
}

let officeCharacters = ['Dwight', 'Michael', 'Jim', 'Stanley', 'Pam']

for (worker of officeCharacters) {
  if (worker === "Dwight" || worker === 'Michael'){
    console.log(worker)
  }
}