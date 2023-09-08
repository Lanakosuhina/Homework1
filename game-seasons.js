function checkSeason() {
    let seasonNumber = prompt('Введите число месяца');
    if (isNaN(seasonNumber) || seasonNumber > 12) {
        return alert('Некорректный номер месяца');
    } else {
        if (seasonNumber >= 3 && seasonNumber <= 5)
            return "Весна";
    } if (seasonNumber >= 6 && seasonNumber <= 8) {
        return "Лето";
    } else {
        if (seasonNumber >= 9 && seasonNumber <= 11) {
            return "Осень";
        } else {
            return "Зима";
        }
    }
}
console.log(checkSeason());
 