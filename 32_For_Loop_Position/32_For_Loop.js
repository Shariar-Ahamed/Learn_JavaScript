// For loop
for ( let count = 10; count >= 0; count -- ){
              console.log(count) // 10 9 8 7 6 5 4 3 2 1 0

}


// Print array elements
const array = ["Shahriar", "Shuvo", "Shanto", "Shamim", "Shakib"];

for ( let i = 0; i < array.length;  i ++ ){
              console.log(array[i]) // Shahriar Shuvo Shanto Shamim Shakib
}



// Print array numbers
const ary = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

for ( let x = 0; x < ary.length; x ++ ){
                console.log(ary[x]) // 1 2 3 4 5 6 7 8 9 10
}


// Print 5 numbers
for ( let y = 0; y <= 10; y++ ){
                console.log(y);
                if ( y === 5 ){
                    console.log("Y is 5"); // Y is 5
                    break; 
                }
}