function getLastDayOfMonth( year, month ) {
    let resultDate = new Date( year, ++month, 0 )
    return resultDate.getDate();
}

console.log( getLastDayOfMonth( 2012, 10 ) );