// задание 1
let a = 10;
a = 20
alert(a);

// задание 2
let firstIPhone = 2007;
alert(firstIPhone);

// задание 3
let creatorJs = `Брендан Эйх`;
alert(creatorJs);

// задание 4
let b = 10;
let c = 2;
alert(`
Сумма: ${a + b}
Разность: ${a - b}
Произведение: ${a * b}
Частное: ${a / b}
`);

// задание 5
let result = 2;
alert (`
Степень: ${2 ** 5}
`)

// задание 6
let d = 9;
let e = 2;
alert (`
Остаток от деления: ${9 % 2}
`)

// задание 7
let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num++;
num--;
alert(num);

// задание 8
let age = prompt("Сколько вам лет?")
alert(age);

// задание 9
let user = {
    name: "Sveta",
    age: 21,
    isAdmin: "Хотите продолжить?",
};
user["city of residence"] = "Saint Petersburg";
alert (user["city of residence"]);

user.age = 22;
console.log(user);

delete user["city of residence"]; 

let info = prompt("Какую информацию хотите узнать о пользователе?", "name","age", "isAdmin");
alert(user[info]);

// задание 10
let userName = prompt("Как вас зовут?")
alert(`Привет, ${userName}!`);



