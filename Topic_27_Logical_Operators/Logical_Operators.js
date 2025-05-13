// &&, ||, !

// && "Will you be my friend? If you want to be my friend, I will give you some conditions."
// All the condition must be true to be my friend.
let isBscPassed = true;
let income = 20000;
let iPhone = 2;

if (isBscPassed === true && income <= 20000 && iPhone <= 1 ) {
    console.log("I will friend you.");
}
else {
    console.log("I will not friend you."); // 'I will not friend you.' (iPhone <= 1 is false)
}




// || "Will you be my friend? If you want to be my friend, I will give you some conditions."
// At least one condition must be true to be my friend.
let isBscPassed2 = true;
let income2 = 20000;
let iPhone2 = 2;

if (isBscPassed2 === true || income2 <= 100 || iPhone2 <= 1 ) {
    console.log("I will friend you."); // 'I will friend you.'
}
else {
    console.log("I will not friend you.");
}




// Mixed Logical Operators
let isBscPassed3 = true;
let income3 = 20000;
let iPhone3 = 2;
if ((isBscPassed3 === true && income3 <= 10) || iPhone3 <= 2 ) {
    console.log("I will friend you."); // 'I will friend you.'
}
else {
    console.log("I will not friend you.");
}