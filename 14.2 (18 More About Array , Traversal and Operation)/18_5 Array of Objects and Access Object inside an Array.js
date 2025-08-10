//** Array of Objects and Access Object inside an Array */

const numbers = [1, 2, 43, 54, 5];
const player = [{}, {}, {}];
const employees = [
    {name: 'Asik', desigantion: 'Contain Writer', salary: 25000},
    {name: 'Shaik', desigantion: 'Developer', salary: 29000},
    {name: 'Abul', desigantion: 'Digtal Markater', salary: 15000},
]


employees[0].name = 'Asraf';  // Name Change
console.log(employees[0]);      //? { name: 'Asraf', desigantion: 'Contain Writer', salary: 25000 }
console.log(employees[2].desigantion); //? 'Digtal Markater'


for (const employee of employees){
    console.log(employee.salary, employee.desigantion);    //? 25000 Contain Writer | 29000 Developer | 15000 Digtal Markater
};


for (const emp of employees) {
    const person = emp;
    const personInfo = person.name + ' ' + person.salary;
    console.log(personInfo);        //? 'Asraf 25000', 'Shaik 29000', 'Abul 15000'
}

