function getDateAgo( date, days ) {
    
    let resultDate = new Date( date );
    resultDate.setDate( resultDate.getDate() - days );
    return resultDate.getDate();
}


let date = new Date(2015, 0, 2);
console.log( getDateAgo(date, 2) );