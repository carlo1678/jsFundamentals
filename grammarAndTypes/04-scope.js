function whatDoesItDo(color) {
  if (color !== "blue" || color !== "green") {
    color = "red";
  }
  return color;
}
console.log(whatDoesItDo());
