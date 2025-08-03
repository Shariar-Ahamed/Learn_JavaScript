//-----Array declaration and initialization------
var friendsAge = [15, 18, 22, 11, 30, 40];
console.log(friendsAge); // [ 15, 18, 22, 11, 30, 40 ]

var friendsName = ['Rakib', "Rifat", "Shamim", 'Farabi'];
console.log(friendsName); // [ 'Rakib', 'Rifat', 'Shamim', 'Farabi' ]



// Type of variable
console.log(typeof friendsName); // object



// Find the length of the array
var friendsAge = [15, 18, 22, 11, 30, 40];
console.log(friendsAge.length) // 6

var friendsName = ['Rakib', "Rifat", "Shamim", 'Farabi'];
console.log(friendsName.length) // 4


// Find the Index of array
var friendsAge = [15, 18, 22, 11, 30, 40];
console.log(friendsAge.indexOf(30)); // 4

var friendsName = ['Rakib', "Rifat", "Shamim", 'Farabi'];
console.log(friendsName.indexOf("Shamim")); // 2



// Find the index position of an element in an array
var friendsAge = [15, 18, 25, 11, 30, 40];
console.log(friendsAge[2]); // 25

var indexElement = friendsAge[2];
console.log(indexElement); // 25