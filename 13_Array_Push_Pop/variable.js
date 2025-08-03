//-----Find the index position of an element in an array------
var friendsName = ["Bablu", 'Kalam', 'Aman', "Salam" ];
console.log(friendsName.indexOf('Aman'));



// Push (Add to the end of the array)
var friendsName = ["Bablu", 'Kalam', 'Aman', "Salam"];
console.log(friendsName);  // ["Bablu", 'Kalam', 'Aman', "Salam"]

friendsName.push('Shamim');
console.log(friendsName);  // ["Bablu", 'Kalam', 'Aman', "Salam", Shamim]



// Push (Add to the end of the array)
var numbers = [50, 80, 77, 45, 90, 100 ];
console.log(numbers); // Array(6) [ 50, 80, 77, 45, 90, 100 ]

numbers.push(500)
console.log(numbers); // Array(7) [ 50, 80, 77, 45, 90, 100, 500 ]



// Pop (Remove from the end of the array)
var numbers = [50, 80, 77, 45, 90, 100 ];
console.log(numbers); // Array(6) [ 50, 80, 77, 45, 90, 100 ]

numbers.pop();
numbers.pop();
console.log(numbers); // [ 50, 80, 77, 45 ]