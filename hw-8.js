// task 1

const people = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
];

console.log(people.sort((a, b) => a.age - b.age));




// task 2 


function isPositive(num) {
    return num > 0;
}
function isMale(human) {
    return human.gender === 'male';
}

function filter(arr, ruleFunction) {
  const output = [];
  arr.map(function(number) {
if(ruleFunction(number)) {
  output.push(number);
}
  });
  return output;
}

console.log(filter([3, -4, 1, 9], isPositive)); // Должен выводить [3, 1, 9]

const people2 = [
    { name: 'Глеб', gender: 'male' },
    { name: 'Анна', gender: 'female' },
    { name: 'Олег', gender: 'male' },
    { name: 'Оксана', gender: 'female' }
];

console.log(filter(people2, isMale)); // Должен выводить [{name: 'Глеб', gender: 'male'},  {name: 'Олег', gender: 'male'}]



// task 3

function currentDate() {
  console.log(new Date());
}

function delayForThreeSeconds(callback) {
  setTimeout(function() {
    callback();
  }, 3000);
}

let alarm = 0;
let intervalAlarm = setInterval(function() {
  currentDate();
  alarm++;
  if (alarm === 10) {
  clearInterval(intervalAlarm);
  console.log('30 секунд прошло');
  }
});

// task 4

function delayForSecond(callback) {
  setTimeout(callback(), 1000);
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
