//-----------Understand_While_loop-----------

let count = 10;

while (count >= 0) {
    console.log(count); // 10 9 8 7 6 5 4 3 2 1 0
    count--;
}




// while loop with break statement
const myArray = ["Shahriar", "Shuvo", "Shanto", "Shamim", "Shakib"];
let counts = 0;

while (counts < myArray.length) {
      console.log(myArray[counts]); // Shahriar Shuvo Shanto Shamim Shakib
      counts++;
}