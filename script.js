function getWeekDay( date ) {
    let Days = [ 'Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];

    return Days[ date.getDay() ];
}

let date = new Date(2012, 0, 3);

console.log( getWeekDay( date ) );