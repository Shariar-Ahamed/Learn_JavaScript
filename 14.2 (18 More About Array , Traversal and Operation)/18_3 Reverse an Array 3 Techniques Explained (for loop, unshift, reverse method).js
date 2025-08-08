// ------Reverse an Array: 3 Techniques Explained (for loop, unshift, reverse method)-----

//------For loop Shift Meathod------
const numbers = [1, 2, 3, 4, 5];

let reversed = [];
for(const number of numbers) {
    reversed.unshift(number);
}
console.log(reversed);      // [5, 4, 3, 2, 1]



//------For loop Shift Meathod------
const num = [1, 2, 3, 4, 5];

let reversed0 = [];
for(let i = 0; i < num.length; i++) {
    // console.log(num[i]); // 1, 2, 3, 4, 5   
    reversed0.unshift(num[i]);
}
console.log(reversed0)       // [5, 4, 3, 2, 1]



//------Fr loop Push Meathod------
const num1 = [1, 2, 3, 4, 5];
let reversed1 = [];

for (let i = num1.length-1; i>= 0; i--){
    reversed1.push(num1[i]);
}
console.log(reversed1)       // [5, 4, 3, 2, 1]



//------reverse() method------
const num2 = [1, 2, 3, 4, 5];
let reversed2 = [];
num2.reverse();
console.log(num2)       // [5, 4, 3, 2, 1]