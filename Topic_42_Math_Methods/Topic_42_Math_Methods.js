let x = -7.6;

let result = Math.round(x);
console.log(result); // Output: -8

result = Math.floor(x);
console.log(result); // Output: -8

result = Math.ceil(x); 
console.log(result); // Output: -7

result = Math.trunc(x);
console.log(result); // Output: -7


result = Math.sign(x);
console.log(result); // Output: -1  (positive = 1 / number)

result = Math.abs(x);
console.log(result); // Output: 7.1 (Netative to positive)

// -------




let any = Math.round(Math.random() * 100);
console.log(any); // 98  (Output: Random number between 0 and 1)



for (let i = 0; i < 10; i++) {
    let num = Math.floor(Math.random() * 10); // Random number between 1 and 100
    console.log(num);  //  Output: Random number between 0 and 9
}



// Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
// Source: https://www.w3schools.com/js/js_math.asp