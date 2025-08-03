// Date Object in JavaScript

let myDate = new Date();

console.log(myDate);                          // Output: new Date('2025-06-22T05:58:03.000Z')  (Current date and time)
console.log(myDate.toDateString());          // Output: 'Sun Jun 22 2025'

console.log(myDate.getDate());             // Output: 22 (Day of the month)
console.log(myDate.toLocaleDateString()); // Output: '6/22/2025' (Locale-specific date format)
console.log(myDate.getMonth());          // Output: 5 (Month is zero-based, so June is 5)

//------------



let myDate2 = new Date();
myDate2.setFullYear(2030, 11, 25); // Set to December 25, 2023

console.log(myDate2.toDateString()); // Output: 'Wed Dec 25 2023'

//------------


let myDate3 = new Date();

console.log(myDate3.getDate() + "/" + (myDate3.getMonth() + 1) + "/" + myDate3.getFullYear()); // Output: '22/6/2025' (Day/Month/Year format)

//------------



let myDate4 = new Date(2025, 5, 22, 12, 60, 60, 60); 
console.log(myDate4.getTime()); // Output: 1719045600000 (Milliseconds since January 1, 1970)

//------------


let myDate5 = new Date("June 22, 2025 12:00:00");
console.log(myDate5.toISOString()); // Output: '2025-06-22T12:00:00.000Z' (ISO format)






// Source: https://www.w3schools.com/js/js_date_methods.asp
// Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date