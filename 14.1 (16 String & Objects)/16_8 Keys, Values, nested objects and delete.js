//----------Keys, Values, nested objects and delete----------//

//--------Main Object-------
const computer = {
    brand: 'lenevo',
    price: 35000,
    processor: 'intel',
    hdd: '512',
    monitor: 'hp',
    apps:{
        browser: ['Chrome', 'Fire fox'],
        Typing: {
            Offline: 'Ms Word',
            online: 'Onlie Note Pad'
        }
    }
}


//--------Search Key-------
const keys = Object.keys(computer);
console.log(keys);      // [ 'brand', 'price', 'processor', 'hdd','hp' ]


//--------Search Values-------
const values = Object.values(computer);
console.log(values)     // [ 'lenevo', 35000, 'intel', '512', 'hp' ]


//--------Nasted--------
console.log(computer.apps.Typing.online)    // 'Onlie Note Pad'


//--------Update--------
computer.apps.browser[1] = 'Opera Mini'
console.log(computer.apps.browser[1])   // 'Opera Mini'
console.log(computer)   // Output: browser: ['Chrome', 'Fire fox']


//---------Delete---------
delete computer.apps.Typing.online; // Delete Values