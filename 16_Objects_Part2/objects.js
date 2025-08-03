// Object creation using object literal syntax

var myObj = {
   name: "Shariar",
   "full Name": "Shariar Ahamed",
   email: "abc@yourdomain.com",
   age: 25,
   isSingle: true,
   nextObj:{
       favMovies: "Tom and Jerry",
       favColor: "Blue",
      }
};


// Added a new property to myObj
myObj.friends = ["Rakib", "Rifat", "Shamim"];
myObj.number = 55;


// Update the name property of myObj
myObj.name = "Shakib Khan";


// delete age property from myObj
delete myObj.age; 



console.log(myObj);
console.log(myObj.nextObj.favColor)



// Dot notation
var x = myObj.name;
console.log(x);                     // 'Shakib Khan'
console.log(myObj.name);           // 'Shakib Khan'



// Square bracket notation
console.log(myObj["full Name"]); // 'Shariar Ahamed'



// No Change property
Object.freeze(myObj); 