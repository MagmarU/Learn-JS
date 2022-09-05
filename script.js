function getSecondsToday() {
    let date = new Date();
    let startDate = new Date( date );
    startDate.setHours( 0, 0, 0 );
    return Math.round( ( date.getTime() - startDate.setHours( 0 ) ) / 1000 );
}
console.log( getSecondsToday() );


function getSecondsToTomorrow() {
    let date = new Date();
    let endDate = new Date( date.getFullYear(), date.getMonth(), date.getDate() + 1 );
    // endDate.setDate( date.getDate() + 1 );
    // endDate.setHours( 0, 0, 0, 0 );
    return Math.round( ( endDate.getTime() - date.getTime() ) / 1000 ) ;
}

function getSecondsToTomorrow2() {
    let now = new Date();
  
    // завтрашняя дата
    let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate()+1);
  
    let diff = tomorrow - now; // разница в миллисекундах
    return Math.round(diff / 1000); // преобразуем в секунды
  }

  
console.log( getSecondsToTomorrow() );
console.log( getSecondsToTomorrow2() );