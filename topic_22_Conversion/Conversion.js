// String to Intseger Number Conversion
let number1 = "44";
let number2 = 33;

number1 = parseInt(number1);
console.log(typeof number1); // number

const result = number1 + number2;

console.log(result); // 77



// String to Float Number Conversion
let score1 = "40.6666";
let score2 = "20.3333";

score1 = parseFloat(score1);
score2 = parseFloat(score2);

const totalScore = score1 + score2;

console.log(totalScore); // 60.9999




// String to Number Conversion
let id = "1001";

id = Number(id);

console.log(id); // 1001
console.log(typeof id); // number




// .toFixed() Method
let num = 5.8888;

let result1 = num.toFixed(2);

let finalResult = parseFloat(result1);

console.log(finalResult); // 5.89




// Number to String Conversion
let rollNum = 22;

rollNum = rollNum.toString();

console.log(rollNum); // '22'
console.log(typeof rollNum); // string