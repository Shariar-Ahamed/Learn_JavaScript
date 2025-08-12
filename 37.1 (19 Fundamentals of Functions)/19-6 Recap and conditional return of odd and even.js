//* 19-6 Recap and conditional return of odd and even *//

//todo ------Using return------
function add(price1, price2) {
    const total = price1 + price2;
    return total;
}

const output = add(5, 80);
console.log(output); //? 85




//todo -------Short hand return------
function add1(price1, price2) {
    return price1 + price2;     
}

const output1 = add1(50, 80);
console.log(output1); //? 130




//todo ------doMath------
function doMath (num1, num2){
    const sum = num1 + num2;
    const diff = num1 - num2;
    const mult = sum * diff;
    const result = mult / 2;
    return result;

}

const result = doMath(10, 5);
console.log(result); //? 37.5



//todo ------Conditional return, isEven------
function isEven(number) {
    if (number % 2 === 0){
        return true;
    }
    else {
        return false;
    }
}

console.log(isEven(5));      //? false
console.log(isEven(110));   //? true




//todo ------Conditional return, isOdd------
function isOdd(number) {
    if (number % 2 === 1){
        return true;
    }
    else {
        return false;
    }
}

console.log(isOdd(10));      //? true
console.log(isOdd(11));     //? false
