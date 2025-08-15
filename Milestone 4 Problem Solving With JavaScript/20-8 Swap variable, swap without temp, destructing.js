//* Swap variable, swap without temp, destructing */

//Todo: ------Swap------
let a = 5;
let b = 7;

console.log(a, b); //? [ 5, 7 ]

// a = b;
// b = a;

const temp = a;

a = b;
b = temp;

console.log(a, b); //? [ 7, 5 ]