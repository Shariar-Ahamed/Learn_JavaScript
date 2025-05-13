// Nested conditions are used when we need to check multiple conditions in a single if statement.

// Nested Condition
let a = 5;
let b = 6;
let c = 7;

if (a > b) {
    if (a < c) {
        console.log("a is the largest number");
    }
    else {
        console.log("c is the largest number");
    }
}
else {
    if (b > c) {
        console.log("b is the largest number");
    }
    else {
        console.log("c is the largest number"); // 'c is the largest number'
    }
}




let time = 12;

if ( time >= 1 && time <= 11 ) {
    console.log("Good Morning");
}
else if ( time >= 12 && time <= 15 ) {
    console.log("Good Afternoon"); // 'Good Afternoon'
}
else if ( time >= 16 && time <= 19 ) {
    console.log("Good Evening");
}
else {
    console.log("Good Night");
}