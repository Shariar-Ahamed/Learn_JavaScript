// Function Parameter and Argument

function addNumber ( num1, num2 ) {     // Parameters ( num1, num2 )
        console.log( num1 + num2 ); // 30, 80
}

addNumber(10, 20);  // Argument ( 10, 20 )
addNumber(35, 45);





// Function with return value
function number ( num1, num2 ) { 
        let result =  num1 + num2;
        return result;
        console.log("Hello Wrold"); // This line will not be executed
}


const total = number (10, 10);
console.log(total); // 20