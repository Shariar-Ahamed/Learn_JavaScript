//* How Function works and argument vs parameters *//

//todo------Double or Multiple------
function doubleIt (number){
    const double = number * 2;
    console.log(number, double); //? [ 15, 30 ] | [ 88, 176 ] | | [ 873, 1746 ] | [ 55, 110 ]
}

console.log("I will call the function");  //? 'I will call the function'
doubleIt(15);
console.log("------------"); //? '------------'
doubleIt(88);
console.log("------------");  //? '------------'
doubleIt(873);
//todo-------Varobale Call------
const money = 55;
doubleIt(money);



//todo------difference------
function difference(num1, num2){
    const diff = (num1 - num2);
    console.log(num1, num2,'difference is', diff );     //? [ 40, 10, 'difference is', 30 ]
}

const fatherAge = 40;
const myAge = 10;

difference(fatherAge, myAge);