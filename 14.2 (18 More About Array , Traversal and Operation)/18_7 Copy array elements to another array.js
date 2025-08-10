//*Copy array elements to another array*

//todo------Copy Number------//
let  price = 25;
let comp_price = price;


comp_price = 20;

console.log(price); //? 25
console.log(comp_price); //? 20



//todo------Copy String------//
const products = [ 23, 45, 78];
// const comp_products = products;

const comp_products =[];
for(const product of products){
    comp_products.push(product)
}

comp_products[0] = 15;

console.log(products);          //?[ 23, 45, 78 ]
console.log(comp_products);    //? [ 23, 45, 78 ]



//todo------Array.from()------//
const Numbers = [1, 2, 3, 4];
const new_numbers = Array.from(Numbers);
//! const new_numbers = [].concat(Numbers);
//! const new_numbers = [...Numbers]

new_numbers.push(8);

console.log(Numbers);        //? [ 1, 2, 3, 4 ]
console.log(new_numbers)    //? [ 1, 2, 3, 4, 8 ]




//! >Shallo copy vs Deep copy<