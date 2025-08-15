//* Check whether a year is a Leap Year or not */

// Year will be leap year if the year is divisible by 4
//Todo:------leap year half-truth------
function isLeapYear (year) {
    if(year % 4 === 0){
        console.log("Yes! the year is leap year")
        return true;
    }
    else{
        console.log("No! the year is no leap year")
        return false;
    }
    
}

const isResult = isLeapYear(2000);
console.log(isResult);