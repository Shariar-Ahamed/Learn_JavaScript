//** Traverse in a 2D array or Array of Array  */

const number = [1, 2, 3, 5, 7, 6];
const tournament_runs = [[], [], [],]

const exam_marks = [
    [98, 34, 64, 23, 23],
    [23, 64, 75, 98, 93],
    [43, 56, 55, 28, 45],
    [25, 34, 75, 84, 85],
]

console.log(number[1]);          //? 2
console.log(exam_marks[0]);     //? [ 98, 34, 64, 23, 23 ]
console.log(exam_marks[0][1]); //? 34

const first_clss_marks = exam_marks[0];
console.log((first_clss_marks[2]));  //? 64


//todo------Value Change------
exam_marks[3][2] = 66;
console.log(exam_marks[3]); //? [ 25, 34, >66<, 84, 85 ]


//todo------Pop------
exam_marks[2].pop()
console.log(exam_marks[2]); //? [ 43, 56, 55, 28 ]


//todo------Push------
exam_marks[2].push(44)
console.log(exam_marks[2]); //? [ 43, 56, 55, 28, >44< ]



//todo ------For Loop------
for (const marks of exam_marks){
    console.log(marks);
}

/*
Output: 
[ 98, 34, 64, 23, 23 ]
[ 23, 64, 75, 98, 93 ]
[ 43, 56, 55, 28, 44 ]
[ 25, 34, 66, 84, 85 ]
*/
