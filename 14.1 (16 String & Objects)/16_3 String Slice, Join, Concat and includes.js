//----------Slice--------
const name = 'ShariarAhamedRipon';
const part = name.slice(0, 7);
console.log(part); // 'Shariar'




//----------Split-------- (String to Array)
const sentence = 'I am a good and hardworking person.';

console.log(sentence.split());      // [ 'I am a good and hardworking person.' ]
console.log(sentence.split(''));   // Array(35) ['I', ' ', 'a', 'm', ' ', 'a', ' ', 'g', 'o', 'o', 'd', ' ', 'a', 'n', 'd', ' ',....]
console.log(sentence.split(' ')); // Array(7) [ 'I', 'am', 'a', 'good', 'and', 'hardworking', 'person.' ]
console.log(sentence.split('a'));// [ 'I ', 'm ', ' good ', 'nd h', 'rdworking person.' ]




//--------String to Array convart-------- (String to Array)
const friendsStr = 'Salam,Kalam,Ripon';

const friend = friendsStr.split(',');
console.log(friend); // [ 'Salam', 'Kalam', 'Ripon' ]





//----------join-------- (Array To string)
const realFriends = ['Salam', 'Kalam', 'Ripon'];

console.log(realFriends.join())         // 'Salam,Kalam,Ripon' 
console.log(realFriends.join('|'))     // 'Salam|Kalam|Ripon'
console.log(realFriends.join('-'))    // 'Salam-Kalam-Ripon'




// ----------Includs--------
const FirstName = 'Ripon';

console.log(FirstName.includes('R')) // true




//------Concatenation------ ( String to String Add)
let firstName = "Shariar";
let lastName = "Ahamed";
let nickName = "Ripn";

let fullName = firstName + " " + lastName + " " + nickName;

console.log(fullName); // 'Shariar Ahamed Ripn'


