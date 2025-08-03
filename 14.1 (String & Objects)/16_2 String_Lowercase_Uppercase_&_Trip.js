/**
 * Mixedcase: AbcD
 * Uppercase: ABCD
 * Lowercase: abcd
 * White space remove : trim
 **/ 

const school = 'RAJ Uk Uttara Modle School';

console.log(school);                        // 'RAJ Uk Uttara Modle School' 
console.log(school.toLowerCase());         // 'raj uk uttara modle school'
console.log(school.toLocaleUpperCase());  // 'RAJ UK UTTARA MODLE SCHOOL'

 

// --------Example :----------
const subject = "Math";
const book = "math";

if (subject.toLowerCase() === book.toLowerCase() ) {
    console.log("Matching") // 'Matching'
}
else {
    console.log("Not Matching")
}




// -----------White space remove by "trim"-----------
const drink = " water";
const liquite = "water ";

if (drink.trim === liquite.trim) {
    console.log("i drink water") // 'i drink water'
}
else {
    console.log("i do't drink water")
}