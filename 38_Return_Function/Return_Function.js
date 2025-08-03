// ------Return_Function-----
function add (num1, num2, num3) {
   let result = num1 + num2 + num3;
   return result;
}

const total = add(10, 20, 30);
console.log(total); // 60




//Examaple : 
function myFunc (money){
        let eggPrice = 10;
        let eggCount = money / eggPrice;
        return eggCount;
}

const totalEgg = myFunc(40);
console.log(totalEgg);       // EggAmount :  4