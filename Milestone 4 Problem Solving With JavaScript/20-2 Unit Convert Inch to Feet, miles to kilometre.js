//* Unit Convert Inch to Feet, miles to kilometre */

//Todo:------inch feet convert------
// 12 inch 1 feet

function inchToFeet(inch){
    const feet = inch / 12;
    return feet;
}

const ShariarHeight = inchToFeet(75);
console.log(ShariarHeight)  //? 6.25
