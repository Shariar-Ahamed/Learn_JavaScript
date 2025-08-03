//-----Regular Function Syntax in JavaScript------

function sumNumbers(num1, num2) {
  return num1 + num2;
}

console.log(sumNumbers(15, 10));            // Output: 25  (Regular function syntax)

//-----------



// Arrow Function Syntax in JavaScript
const sumNumbers1 = (num1, num2) => {
  return num1 + num2;
}

console.log(sumNumbers1(15, 10));      // Output: 25 (Arrow function syntax)

//-----------



// Arrow Function Multiple Parameters
const addToNumbers = (a, b) => {
  let total = a + b;
  let result = total + 2;  
  return result;
}

console.log(addToNumbers(5, 10));           // Output: 17 (Arrow function with multiple parameters)




// Single value shorthand in Arrow Functions
const addNumbers = (a, b) => a + b;
console.log(addNumbers(5, 10));              // Output: 15 (Arrow function with Single parameters)


const random = () => Math.random() * 10;   // Must need ()
console.log(random());                    // Output: 1.334 Random number between 0 and 10 (Arrow function with single expression)
