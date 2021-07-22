//Comparison Operators

//Equal
"3" == 3;
console.log("3" == 3);

/*
Javascript is helpful and does something known as coercion when comparing values.
Coercion is the process of converting a value from one type to another.
In the above example, javascript assumed that we were trying to check if '3' is equal to 3, even though one of our values is a string and one is an integer.
*/

//Strict Equal - This overrides javascript coercion
console.log(3 === 3);
console.log("3" === 3);

// Not Equal
console.log("3" != 3);

// Strict Not Equal
"3" !== 4;
console.log("3" !== 4);

// Greater Than
3 > 2;

// Less Than
2 < 3;

// Greater than or Equal to
3 >= 2; // Not to be confused with fat arrow signs.

// Less than or Equal to.
2 <= 3;

// AND
2 && 3;

// OR
2 || 3;
