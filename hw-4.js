// task 1
for (let i = 0; i < 2; i++) {
    console.log('Привет!');
}

// task 2
let code = 1;
while (code < 6) {
    console.log(code);
    code++;
}

// task 3 
for (let fig = 7; fig <= 22; fig++) {
    console.log(fig);
}

// task 4 
let obj = {
    Коля: 200,
    Вася: 300,
    Петя: 400,
}
for (const key in obj) {
    const cash = obj[key];
    console.log(`${key} — зарплата ${cash} долларов`);
}

// task 5
let n = 1000;
let num = 0;

while (n >= 50) {
    n /= 2;
    num++;
}
console.log(n);
console.log(num)

// task 6


for (let friday = 4; friday <= 31 ; friday += 7) {
    console.log(`Сегодня пятница,${friday}-е число. Необходимо подготовить отчет.`);
}