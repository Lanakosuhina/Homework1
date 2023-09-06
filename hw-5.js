

// task 1
let checkNumber = function (a, b) {
    if (a > b) {
        return b;
    } else {
        return a;
    }
}
console.log(checkNumber(5, 8))

// task 2

let countableNumber = function (c) {
    if (c % 2 == 0) {
        return alert('Число четное');
    } else {
        return alert('Число нечетное');
    }
}
console.log(countableNumber(7))

// task 3.1.

let squareNumberVariant = function (sum) {
    return sum * sum;
}
console.log(squareNumberVariant(16));

// task 3.2.

let num = prompt('Введите число')

function squareNumber(num) {
    return num * num;
}

let variant = squareNumber(num);
alert(variant);

// task 4

function userHowOld() {
    let young = prompt('Сколько Вам лет?');
    if (young < 0) {
        alert("Вы ввели неправильное значение");
    } else {
        if (young <= 12) {
            return alert("Привет, друг!");
        } else {
            return alert(`Добро пожаловать!`);
        }
    }
}
userHowOld();

// task 6 

function checkCorrect() {
    let correctNumber = prompt('Введите число');
    let cubeNumber = correctNumber ** 3;
    if (isNaN(correctNumber)) {
        return alert('Переданный параметр не является числом');
    } else {
        return alert(correctNumber + ` в кубе равняется ` + cubeNumber);
    }
}
checkCorrect();

// task 7

let circle1 = {
    radius: 3,
    getArea() {
        return  Math.PI * this.radius ** 2;
    },
    getPerimeter() {
    return 2 * Math.PI * this.radius;
}
}
let circle2 = {
    radius: 5,
    getArea() {
    return  Math.PI * this.radius ** 2;
},
    getPerimeter() {
    return 2 * Math.PI * this.radius;
}
}
console.log(circle1.getArea())
console.log(circle1.getPerimeter())

console.log(circle2.getArea())
console.log(circle2.getPerimeter())


