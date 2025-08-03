// Example : Object
const products = {
        names: "Laptop",
        price: 1000,
        colour: "black",
};

function addToproducts(anyObjects) {
        console.log( `Products name is ${anyObjects.names} and Price is ${anyObjects.price}` ); // 'Products name is Laptop and Price is 1000'

}

addToproducts(products);




// Example : 
const ary = [100, 200, 300, 400, 500];

function addToArray(anyArray) {
        console.log( `Array is ${anyArray[2]}` ); // 'Array is 300'
}

addToArray(ary);





// Example :
function person ( name ){
        console.log( `My name is ${name}` ); // 'My name is Rakib'
}       
person("Rakib");

