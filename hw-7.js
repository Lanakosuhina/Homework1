// task 1

let word = ('Василий идет гулять')
console.log(word.toUpperCase());

// task 2

function searchStart(arr, str) {
    return arr.filter(item => item.toLowerCase().startsWith(str.toLowerCase()));
}

console.log(searchStart(['самолет', 'соль', 'кабачок', 'сом'], 'со'));

// task 3

console.log(Math.floor(32.58884)); // min
console.log(Math.ceil(32.58884)); // max
console.log(Math.round(32.58884)); // round

// task 4
function getMaxOfArray(num) {
    return Math.max.apply(null, num);
}

console.log(getMaxOfArray([52, 53, 49, 77, 21, 32]));

// task 5

function getRandom(min, max) {
    return Math.round(Math.random() * (max - min)) + min;
}

console.log(getRandom(1, 10));

// task 6

function getRandomNumArray(num) {
    let arr = [];
    for (let i = 0; i < num / 2; i++) {
        arr.push(Math.round(Math.random() * num));
    }
    return arr;
}

console.log(getRandomNumArray(14));

// task 7

function getNumbers(num1, num2) {
    let min, max;
    if (num1 < num2) {
        min = num1;
        max = num2;
    } else {
        min = num2;
        max = num1;
    }
    return Math.round(Math.random() * (num2 - num1)) + num1;
}

let num1 = Number(prompt(`Введи первое целое число`));
let num2 = Number(prompt(`Введи второе целое число`));

console.log(getNumbers(num1, num2));

// task 8

//let myDate = new Date(1694708336311);
console.log(myDate);

// task 9

//let currentDate = new Date();
let newDate = new Date(currentDate);
newDate.setDate(currentDate.getDate() + 73);

console.log(newDate);

// // task 10

// function newDate() {
//     let getNewDate = prompt('Введите дату в формате 2023/09/15 12:30');
//     let d = new Date(getNewDate); 
//     let fullDate = "Дата: " + d.getDate() + " " + months[d.getMonth()] + " " + d.getFullYear() + " - это " + days[d.getDay()];
//     let fullTime = "Время: " + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();

//     console.log(fullDate);
//     console.log(fullTime);
// }

const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
const months = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"];

newDate();
