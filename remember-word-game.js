// теперь точно работает :)
// я нашла, что можно ввести переменную "guessed" и таким образом указать на то, угадал ли пользователь или нет

function guessTwoWords() { 
    let rememberWord = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин']; 
    rememberWord = rememberWord.sort(() => Math.random() - 0.5); 
    alert(rememberWord); 
 
    let firstEl = prompt('Чему равнялся первый элемент массива?').toLowerCase();
    let secondEl = prompt('Чему равнялся последний элемент массива?').toLowerCase();
    let guessed = false;
    
    rememberWord.forEach((word) => { 
        if (word.toLowerCase() === firstEl && word.toLowerCase() === secondEl) { 
            alert('Вы угадали оба элемента!'); 
            guessed = true;
        } 
        else if (word.toLowerCase() === firstEl || word.toLowerCase() === secondEl) { 
            alert('Вы были близки к победе!'); 
            guessed = true;
        } 
    }); 
    
    if (!guessed) {
        alert('Вы не угадали ни одного элемента!'); 
    }
} 
