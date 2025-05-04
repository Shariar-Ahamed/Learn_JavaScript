/**** Add value to the beginning of an array using unshift() method ****/

// unshift() (Add to the fist of the array)
var x = [4, 2, 1, 5, 7, 9, 3];
x.unshift(11);
x.unshift(22);

console.log(x);


// unshift() (Add to the fist of the array)
var name = ['Rakib', "Rifat", "Shamim", 'Farabi'];
name.unshift("Arif");
name.unshift("Abdul");

console.log(name);



/**** Remove the first element of an array using shift() method ****/ 

// shift() (Remove from the first of the array)
var x = [4, 2, 1, 5, 7, 9, 3];
x.shift();
x.shift();

console.log(x);


// shift() (Remove from the first of the array)
var name = ['Rakib', "Rifat", "Shamim", 'Farabi'];
name.shift();
name.shift();

console.log(name)



// **************************************************************************** //
// Sort an array using sort() method
var x = [4, 2, 1, 5, 7, 9, 3];
x.sort();

console.log(x);


var name = ['Rakib', "Camrul", "Shamim", 'Aman'];
name.sort();

console.log(name);
