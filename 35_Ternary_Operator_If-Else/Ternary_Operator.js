
// ------ Normal if else-------
let age1 =15;
let vote1

if(age1 > 18){
    vote1 = "You can vote";
}
else{
    vote1 = "You cannot vote";
}
     console.log(vote1); // 'You cannot vote'




//-------Ternary Oprartor--------
let age = 18;

let vote = (age >= 18) ? "You can vote" : "You cannot vote";

     console.log(vote); // ''You can vote''




let a = 200;
let b;

( a === 200 ) ? b = "True" : "False";
     console.log(b); // 'True'



//-------Multiple condition-------

let num = 80;

let result = (num <= 80) ? "Good" : (num <= 90) ? "Very Good" : "Failed";
     console.log(result); // Good