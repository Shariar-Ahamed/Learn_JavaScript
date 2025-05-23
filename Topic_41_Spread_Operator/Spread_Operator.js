let arr0 = [10, 20, 30];
console.log(...arr0); // [ 10, 20, 30 ]



let arr1 = [10, 20, 30];

let arr2 = [arr1, 40, 50, 60];

let arr3 = [...arr2, 70, 80, 90];    //... spread operator (Output removes the array brackets)


console.log(arr3); // [ [ 10, 20, 30 ], 40, 50, 60 ]





// Example : Spread Operator
let array = [10, 20, 30];


//Math Min
console.log(Math.min(...array)); // 10

//Use in spreading array
function sum(num1, num2, num3) {
        return num1 + num2 + num3;
}

let result = sum(...array); // 10, 20, 30
console.log(result); // 60

//OR
console.log(sum(...array)); // 60