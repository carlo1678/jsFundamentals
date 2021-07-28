let callback = (num) => {
  if (num % 2 == 0) {
    console.log("the number is even");
  } else if (num % 1 == 0) {
    console.log("the number is odd");
  } else if (typeof num != "number") {
    console.log("what is this?");
  }
};

callback(10);
// for (let num = 0; num <= 10; num++) {
//   callback(num);
//   console.log(num);
// }
