const heros = ["Allu arjun", "Ram charan", "Prabhas", "Mahesh babu"];

heros.forEach( (hero) => {
    console.log(hero);   // Output: 'Allu arjun' 'Ram charan' 'Prabhas' 'Mahesh babu'
  });



//----------
const heroS = ["Allu arjun", "Ram charan", "Prabhas", "Mahesh babu"];

heroS.forEach ( function (hero) {
    console.log(hero);   // Output: 'Allu arjun' 'Ram charan' 'Prabhas' 'Mahesh babu'
    })



//----------
const Heros = ["Allu arjun", "Ram charan", "Prabhas", "Mahesh babu"];

Heros.forEach(printHero); 

function printHero(hero) {
    console.log(hero);  // Output: 'Allu arjun' 'Ram charan' 'Prabhas' 'Mahesh babu'
}



//---------
const numbers = [1,2,3,4,5];

numbers.forEach( (number) => {
    console.log(number + 1); // Output: 2, 3, 4, 5, 6
})