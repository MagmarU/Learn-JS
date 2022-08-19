function SumInBinaryType( num1, num2 ) {
    let intSum = +num1 + +num2;
    let binNumber = '';
    let result = intSum;
    // while( true ) {
    //     if( intSum % 2 != 0 ){
    //         binNumber += 1;
    //     }
    //     } else{
    //         binNumber += 0;
    //     }
    // }
    for( let i = 0; i < intSum; i++ ) {
        result = result % 2;
        console.log( result );
    }
    return binNumber;
}

console.log( SumInBinaryType( 5, 12 ) );