// 1.
// javascript
// Copy
// Edit
// var a = isNaN('11');
// The string '11' is a valid numeric string.
// JavaScript will implicitly coerce the string '11' into a number when isNaN() checks it.
// Since '11' can be converted to the number 11, the result will be false.
// Result:

// javascript
// Copy
// Edit
// false
// 2.
// javascript
// Copy
// Edit
// var a = isNaN(2 - 10);
// The expression 2 - 10 results in -8, which is a valid number.
// Since -8 is a valid number, isNaN() will return false.
// Result:

// javascript
// Copy
// Edit
// false