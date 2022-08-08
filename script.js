function multiplyNumeric(obj) {
    for( let prop in obj ) {

        if( Number.isInteger( +obj[prop] ) ) {
            obj[prop] *= 2;
        }
    }
}

// function multiplyNumeric(obj) {
//     for( let prop in obj ) {
//         obj[prop] = (+obj[prop] === Number) ? obj[prop] *= 2 : obj[prop];
//     }
// }
let num = {
    width: 320,
    height: '-1',
    title: 'My menu'
}
multiplyNumeric(num);
for( let prop in num ) {
    console.log(num[prop]);
}
