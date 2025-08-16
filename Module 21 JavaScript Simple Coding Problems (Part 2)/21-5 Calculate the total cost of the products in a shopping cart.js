//* Calculate the total cost of the products in a shopping cart */


//Todo:------Total shoppoing Sum:------
const products = [
    {name: 'shampoo', price: 300},
    {name: 'chiruni', price: 100},
    {name: 'shirt', price: 700},
    {name: 'pant', price: 1200}
]

function getShoppingTotal (products){
    let total = 0;
    for(const product of products){
        total = total + product.price;
    }
    return total;
}

const totalSum = getShoppingTotal(products);
console.log(totalSum, 'TK'); //? [ 2300, 'TK' ]