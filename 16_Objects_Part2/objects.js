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


        //--------- Update Objct---------//
//---------Added a new property to myObj---------
myObj.friends = ["Rakib", "Rifat", "Shamim"];
myObj.number = 55;
myObj.age = 20;  // Previous Age Update


//---------Update the name property of myObj---------
myObj.name = "Shakib Khan";


//---------Delete age property from myObj---------
delete myObj.age; 



console.log(myObj);
/** OutPut: 
{
  name: 'Shakib Khan',
  'full Name': 'Shariar Ahamed',
  email: 'abc@yourdomain.com',
  isSingle: true,
  nextObj: { favMovies: 'Tom and Jerry', favColor: 'Blue' },
  friends: [ 'Rakib', 'Rifat', 'Shamim' ],
  number: 55
}
*/


//-------------------------------------------------------//


//---------Nested Output---------
console.log(myObj.nextObj.favColor) // 'Blue'



//---------Dot notation---------
var x = myObj.name;
console.log(x);                     // 'Shakib Khan'

console.log(myObj.name);           // 'Shakib Khan'



//---------Square bracket notation---------
console.log(myObj["full Name"]); // 'Shariar Ahamed'



//---------No Change property---------
Object.freeze(myObj); 