
// task 1
let password = 'пароль';
let enterPassword = prompt('Введите пароль');
if (password === 'пароль') {
    alert("Пароль введен верно")
} else {
    alert("Пароль введен неправильно")
}

// task 2
let c = 2;
if (c > 0 && c < 10) {
    console.log("Верно")
} else {
    console.log("Неверно")
}

// task 3
let d = 12;
let e = 8;
if (d > 100 || e > 100) {
    console.log("Верно")
} else {
    console.log("Неверно")
}

// task 4
let a = '2';
let b = '3';
console.log(alert(+a + +b));

// task 5
let monthNumber = prompt('Введите номер месяца');
switch (monthNumber) {
    case ('1'):
        console.log('Зима');
        break;
    case ('2'):
        console.log('Зима');
        break;
    case ('3'):
        console.log('Весна');
        break;
    case ('4'):
        console.log('Весна');
        break;
    case ('5'):
        console.log('Весна');
        break;
    case ('6'):
        console.log('Лето');
        break;
    case ('7'):
        console.log('Лето');
        break;
    case ('8'):
        console.log('Лето');
        break;
    case ('9'):
        console.log('Осень');
        break;
    case ('10'):
        console.log('Осень');
        break;
    case ('11'):
        console.log('Осень');
        break;
    case ('12'):
        console.log('Зима');
        break;
    default: console.log('Такого месяца не существует');
        break;
}

// task 7
let checkNumber = prompt('Пожалуйста, введите любое число');
if (isNaN(checkNumber)) {
    alert('Неверные данные. Введите число');
} else {
    if (checkNumber % 2 === 0) {
        alert('Число четное')
    } else {
        alert('Число нечетное')
    }
}

// task 8
let clientIOS = 0;
if (clientIOS === 0) {
    alert('Установите версию приложения для iOS по ссылке');
} else {
    if (clientIOS === 1) {
        alert('Установите версию приложения для Android по ссылке');
    } else {
        alert('Неверное значение');
    }
}

// task 9
let clientOS = 1;
let clientDeviceYear = 2016;
switch (clientOS) {
    case (clientOS === 0 && clientDeviceYear < 2015):
        alert('Установите облегченную версию приложения для iOS по ссылке');
        break;
    case (clientOS === 1 && clientDeviceYear < 2015):
        alert('Установите облегченную версию приложения для Android по ссылке');
        break;
    case (clientOS === 0 && clientDeviceYear > 2015):
        alert('Установите версию приложения для iOS по ссылке');
        break;
    case (clientOS === 1 && clientDeviceYear > 2015):
        alert('Установите версию приложения для Android по ссылке');
        break;
    default: alert ('Неверное значение')
        break;
}