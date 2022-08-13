function readNumber() {
    let numberWrite;
    do {
        numberWrite = prompt( "", '' );
    } while ( numberWrite == '' );
    // if (numberWrite === null || numberWrite === '') return null;
    
    return numberWrite;
}

console.log(readNumber());