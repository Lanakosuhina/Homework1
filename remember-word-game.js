let rememberWord = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
rememberWord = rememberWord.sort(() => Math.random() - 0.5);
alert(rememberWord);

let firstEl = prompt('Чему равнялся первый элемент массива?');
let secondEl = prompt('Чему равнялся последний элемент массива?');

// first variant
function guessTwoWords() {
rememberWord.forEach((word) => {  
    if (word.startsWith(firstEl.toLowerCase()) && word.endsWith(secondEl.toLowerCase())) {  
        alert('Вы угадали оба элемента!');  
    }  
    else if (word.startsWith(firstEl.toLowerCase()) || word.endsWith(secondEl.toLowerCase())) {  
        alert('Вы были близки к победе!');  
    } else {  
        alert('Вы не угадали ни одного элемента!');  
    }  
});
}

// second variant
// function guessTwoWords() {
// if (firstEl === rememberWord.indexOf[0] && secondEl === rememberWord.indexOf[rememberWord.length - 1]) {
//     alert('Поздравляем, вы угадали оба элемента!');
// } else if (firstEl === rememberWord.indexOf[0] || secondEl === rememberWord.indexOf[rememberWord.length - 1]) {
//     alert('Вы были близки к победе!');
// } else {
//     alert('Вы ответили неверно.');
// }
// }