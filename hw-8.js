// task 1

const people = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
];

console.log(people.sort((a, b) => a.age - b.age));




// task 2 Я не поняла, что здесь нужно делать с функцией filter........
// То, что дается в уроке совсем не помогает разобраться(

function isPositive(num) {
    return num > 0;
}
function isMale(human) {
    return human.gender === 'male';
}
function filter() {
    // писать код тут
}

console.log(filter([3, -4, 1, 9], isPositive)); // Должен выводить [3, 1, 9]

const people2 = [
    { name: 'Глеб', gender: 'male' },
    { name: 'Анна', gender: 'female' },
    { name: 'Олег', gender: 'male' },
    { name: 'Оксана', gender: 'female' }
];

console.log(filter(people, isMale)); // Должен выводить [{name: 'Глеб', gender: 'male'},  {name: 'Олег', gender: 'male'}]



// task 3

// Напишите программу, которая на протяжении 30 секунд каждые 3 секунды 
// будет выводить в консоль текущую дату. Последней строкой должно выводиться 
// сообщение «30 секунд прошло».
function currentDateDate() {
  console.log(new Date());
}

function delayForThreeSeconds(callback) {
  setTimeout(function() {
    callback();
  }, 3000);
}
// дальше я не совсем понимаю, что делать. Первая часть сделана по аналогии с другими заданиями

// task 4

function delayForSecond(callback) {
  setTimeout(function() {callback()}, 1000);
}

delayForSecond(function () {
  console.log('Привет, Глеб!');
})

// task 5

function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
				if(cb) { 	cb(); }

    }, 1000)
}

function sayHi (name) {
    console.log(`Привет, ${name}!`);
}

delayForSecond(() => sayHi('Глеб'));
