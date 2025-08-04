/** Reverse a String in Three different ways **/

//------First way-------
let sentence = "I am larning Web Dev.";

let reverse = ''
for (let letter of sentence){
    //console.log(letter);          Output: 'I', ' ', 'a',...., 'v','.'
    reverse = letter  + reverse ;
}
console.log(reverse)   // Output: '.veD beW gninral ma I'




//------First way-------
let Sentence = "I am larning Web Dev.";

let rev = ''
for(let i = 0; i <sentence.length; i++){

//  console.log(i);                       Output: 0, 1, 2, 3,...20
//  console.log(Sentence[i])              Output: 'I', ' ', 'a',...., 'v','.'

    const letter = Sentence[i];
    rev = letter + rev;
}
console.log(rev); // '.veD beW gninral ma I'




//------Shortcut-------
let SenTence = "I am larning Web Dev.";

const reversed = SenTence.split('').reverse().join('');
console.log(reversed);  // '.veD beW gninral ma I'