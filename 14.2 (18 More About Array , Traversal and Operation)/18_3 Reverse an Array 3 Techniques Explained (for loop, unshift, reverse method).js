// ------Reverse an Array: 3 Techniques Explained (for loop, unshift, reverse method)-----

const num = [1, 2, 3, 4, 5];

let reversed = [];
for(let i = 0; i < num.length; i++) {
    // console.log(num[i]); // 1, 2, 3, 4, 5   
    reversed.unshift(num[i]);
}

console.log(reversed)