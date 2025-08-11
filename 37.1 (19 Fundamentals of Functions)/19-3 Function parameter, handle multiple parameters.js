//* Function parameter, handle multiple parameters */

//todo------Square------
// 3 --> 3*3 = 9
// 4 --> 4*4 = 16
// 5 --> 5*5 = 25
// 11 --> 11*11 = 121

function Numbers(num1, num2){
    console.log('The input Numbers is: ', num1, '*', num2);  //? [ 'The input Numbers is: ', 11, '*', 11 ]
    const square = (num1 * num2);
    return square;
}

Numbers(11, 11);
console.log('The square result is: ' + square); //? 'The square result is: 121'
