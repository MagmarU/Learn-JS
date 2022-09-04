function getLocalDay( date ) {
    let Days = [ ['Вс', 7], ['Пн', 1], ['Вт', 2], ['Ср', 3], ['Чт', 4], ['Пт', 5], ['Сб', 6]];
    let [ day, dayNumber ] = Days[ date.getDay() ];
    return dayNumber;
}

let date = new Date(2012, 0, 1);

console.log( getLocalDay( date ) );