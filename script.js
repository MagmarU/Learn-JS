function formateDate( date ) {
    let datenow = new Date();
    let resultDate = ( datenow - date ) / 1000;
    if( resultDate < 1 ) {
        return 'прямо сейчас';
    } else if( resultDate < 60 ) {
        return `${ resultDate } сек. назад`;
    } else if( resultDate < 3600 ) {
        return `${ resultDate / 60 } мин. назад`;
    } 
    // else {
    //     return `${  }`
    // }


    // switch ( resultDate ) {
    //     case resultDate < 1:
    //         resultDate = 'прямо сейчас';
    //         break;
    //     case resultDate < 60:
    //         resultDate = `${ resultDate } сек. назад`;
    //         break;
    //     case resultDate < 3600:
    //         resultDate = `${ resultDate / 60 } мин. назад`;
    //         break;
    //     // default:
            
    // }
    // return resultDate;
}

let date = new Date(new Date - 30 * 1000);
console.log( formateDate( date ) );