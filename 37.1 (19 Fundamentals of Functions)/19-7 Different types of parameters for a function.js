//* Different types of parameters for a function *//
//! for a given string tell me whether it has even number of characters or not

//todo ------evenSizeString------
function evenSizeString(str){
    const size = str.length;
    console.log(str, size);      //? [ 'Dhaka', 5 ]
    if (size % 2 === 0 ){
        console.log('Even Size');
        return true;
    }
    else {
        console.log('Odd Size')     //? 'Odd Size'
        return false;
    }
}

evenSizeString('Dhaka');




//todo ------Number, Booleans------
function doubleOrTriple(number, doDouble){
    if ( doDouble === true ){
        const result = number * 2;
        return result;
    }
    else {
        const result = number * 3;
         return result;
    }
}

console.log(doubleOrTriple(5, true));   //? 10
console.log(doubleOrTriple(5, false)); //? 15
