function sumInput() {
    let arr = [];
    // do {
    //     inputNumber = prompt( "", "" );
    //     if( inputNumber === null ) break;
    //     arr.push( inputNumber );
    // } while ( inputNumber !== '' );

    while( true ) {
        let inputNumber = prompt( "", "" );

        if( inputNumber === null || inputNumber === '' || !isFinite( inputNumber ) ) break;

        arr.push( inputNumber );
    }

    let numberSumFromArr = 0;
    for( let int of arr ) {
        numberSumFromArr += +int;
    }
    return numberSumFromArr;

}
console.log( sumInput() );
