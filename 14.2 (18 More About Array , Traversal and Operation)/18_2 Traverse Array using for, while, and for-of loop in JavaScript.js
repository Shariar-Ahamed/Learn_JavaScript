//! -------Traverse Array using for, while, and for-of loop in JavaScript-------

let fruits = ['Apple', 'Banan', 'Daav'];

//? for loop 
for( let i = 0; i < fruits.length; i++){
    console.log(i);               //*  0, 1, 2
    console.log(fruits[i]);      //* 'Apple' 'Banan' 'Daav'
}


//? while loop 
let i = 0;

while ( i < fruits.length) {
    console.log(i);              //*  0, 1, 2
    console.log(fruits[i]);     //*   Apple' 'Banan' 'Daav'
    i++;
}