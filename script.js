function inversion( str ) {
    let result = '';
    for( let char of str ) {
        switch ( char ) {
            case 'a':
                result += 'b';
                break;
            case 'b':
                result += 'a';
                break;
            default:
                result += 'c';
                break;
        }
    }
    return result;
}

console.log( inversion( 'aaabcccbaaa' ) );