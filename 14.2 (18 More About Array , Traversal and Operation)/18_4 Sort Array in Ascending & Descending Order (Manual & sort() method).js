//* Sort Array in Ascending & Descending Order (Manual & sort() method)-----

//todo------Number------
const number = [5, 2, 6, 1, 3, 4];
console.log(number);        //? Array(6) [ 5, 2, 6, 1, 3, 4 ]

number.sort();
console.log(number);      //? Array(6) [ 1, 2, 3, 4, 5, 6 ]



//todo------Alphabet------
const Name = ['Zamal','Arif', 'Kobir'];
Name.sort();
console.log(Name);  //? [ 'Arif', 'Kobir', 'Zamal' ]



//todo------String------
const ages = [1, 4, 100, 15, 8, 2, 28];
// ages.sort();
// console.log(ages);
const sorted_ages_asc = ages.sort(function( a, b ) { return a - b })
console.log(sorted_ages_asc)    //? Array(7) [ 1, 2, 4, 8, 15, 28, 100 ]


const sorted_ages_dsc = ages.sort(function( a, b ) { return b - a })
console.log(sorted_ages_dsc)    //? Array(7) [ 100, 28, 15, 8, 4, 2, 1 ]