/****----Add value to the beginning of an array using unshift() method----****/

// unshift() (Add to the fist of the array)
var x = [4, 2, 1, 5, 7, 9, 3];
x.unshift(11);
x.unshift(22);

console.log(x); // Array(9) [ 22, 11, 4, 2, 1, 5, 7, 9, 3 ]


// unshift() (Add to the fist of the array)
var name = ['Rakib', "Rifat", "Shamim", 'Farabi'];
name.unshift("Arif");
name.unshift("Abdul");

console.log(name); // Array(6) [ 'Abdul', 'Arif', 'Rakib', 'Rifat', 'Shamim', 'Farabi' ]



/**** Remove the first element of an array using shift() method ****/ 

// shift() (Remove from the first of the array)
var x = [4, 2, 1, 5, 7, 9, 3];
x.shift();
x.shift();

console.log(x); // [ 1, 5, 7, 9, 3 ]


// shift() (Remove from the first of the array)
var name = ['Rakib', "Rifat", "Shamim", 'Farabi'];
name.shift();
name.shift();

console.log(name) // [ 'Shamim', 'Farabi' ]



// **************************************************************************** //
// Sort an array using sort() method
var x = [4, 2, 1, 5, 7, 9, 3];
x.sort();

console.log(x); // Array(7) [ 1, 2, 3, 4, 5, 7, 9 ]


var name = ['Rakib', "Camrul", "Shamim", 'Aman'];
name.sort();

console.log(name); //[ 'Aman', 'Camrul', 'Rakib', 'Shamim' ]
