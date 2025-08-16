//* Can you find out who will get the Strawberry? */

//Todo: Max
//Todo:------Using if else------
const Disa = 56;
const Salman = 95;

if(Disa > Salman) {
    console.log("Disha will be get the Strawberyy");
}
else {
    console.log("Salman will be get the Strawberyy");
}




//Todo:------Using a funcation------
function getMax(num1, num2) {
    if (num1 > num2){
        return num1;
    }
    else {
        return num2;
    }
}

const max1 = getMax(96, 79);
const max2 = getMax(100, 59);
const ultimateMax = getMax(max1, max2);

console.log("max of two is: ", ultimateMax);

