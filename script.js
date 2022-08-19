function reverse( str ) {
    let result = new Array(str.length - 1);
    let itteration = str.length - 1;
    for( let char of str ) {
        result[itteration] = char;
        itteration--; 
    }
    let reverseStr = '';
    for( let key of result ) {
        reverseStr += key;
    }
    return reverseStr;
}

console.log( reverse( 'cba' ) );