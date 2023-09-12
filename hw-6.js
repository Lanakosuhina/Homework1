// task 1

const numbers = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] == 10) break;
    console.log(numbers[i]);
}


// task 2
const figures = [1, 5, 4, 10, 0, 3];
console.log(figures.indexOf(4));

// task 3

const arr = [1, 3, 5, 10, 20];
console.log(arr.join(' '));

// // task 4  - doesn't work.....

// let mass = [];
// for (let kiss = 0; kiss < 3; kiss++) {
// 	mass[kiss] = []; 

// 	for (let js = 0; js < 3; js++) {
// 		mass[kiss][js] = 1;
// 	}
// }
// console.log(mass);


// task 5
const table = [1, 1, 1];

table.push('2');
table.push('2');
table.push('2');

console.log(table);

// task 6

let oneLeft = [9, 8, 7, 'a', 6, 5];

oneLeft.sort();
let second = oneLeft.filter(item => typeof item === 'number');

console.log(second);


// task 7

let guess = [9, 8, 7, 6, 5];
let guessNum = Number(prompt(`Попробуйте угадать число из списка`));
let arrNumber = guess.includes(guessNum);

if (arrNumber = guessNum) {
    alert('Угадал')
} else {
    alert('Не угадал')
}

// task 8 

let abc = 'abcdef';
let newVersion = abc.split('').reverse().join('');

console.log(newVersion);

// task 9

let dosMassives = [[1, 2, 3,], [4, 5, 6]];
let result = dosMassives.flat();

console.log(result);


// task 10

let newTask = [3, 6, 7, 2, 9];
for (let i = 0; i < newTask.length - 1; i++) {
    console.log(newTask[i] + newTask[i + 1]);
}


// task 11

let numSum = [9, 8, 7, 6, 5];
let res = numSum.map(el => el ** 2);

console.log(res);


// task 12

let getLengthWords = ['programming', 'skypro', 'workshop', 'lesson', 'aim'];

function numberWords(arr) {
    let n = arr.map(el => el.length);
    console.log(n);
}

numberWords(getLengthWords);

// task 13 

function filterPositive(array) {
    return array.filter(value => value < 0 );
}

console.log(filterPositive([-1, 0, 5, -10, 56])); 
console.log(filterPositive([-25, 25, 0, -1000, -2])); 