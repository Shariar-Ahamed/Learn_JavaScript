//------Rest Operator------
function addToCart (...number) {
        return number;
}

console.log(addToCart(100, 200, 300, 400, 500)); // [ 100, 200, 300, 400, 500 ]




// Example : Rest Operator
function addToCart (num1, num2, ...number) {
        return number;
}

console.log(addToCart(100, 200, 300, 400, 500)); // [ 300, 400, 500 ]




// Example : Rest Operator
function addToCart (num1, num2, ...number) {
        return num2;
}

console.log(addToCart(100, 200, 300, 400, 500)); // 200