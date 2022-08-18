function truncate( str, maxLength ) {
    let result = str.length > maxLength ? ( str.slice( 0, maxLength - 1 ) + '...' ) : str;
    return result;
}

console.log( truncate( "Вот, что мне хотелось бы сказать на эту тему:", 20 ) );