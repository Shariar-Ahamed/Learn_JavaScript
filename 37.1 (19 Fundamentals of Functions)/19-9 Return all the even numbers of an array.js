//* Return all the even numbers of an array *//

/*
 * create function theat will return only the even numbers
 * return the sum of even numbers
 */

//todo ------Showing only evens numbers------
function evenNumberaOnly(numbers) {
  const evens = [];
  for (const number of numbers) {
    // console.log(number);
    if (number % 2 === 0) {
      console.log(number);
      evens.push(number);
    }
  }
  return evens;
}

const numbers = [1, 34, 14, 52, 16, 53];
const evensResult = evenNumberaOnly(numbers);
console.log(evensResult); //? [ 34, 14, 52, 16 ]
