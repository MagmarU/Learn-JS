function randomInteger( min, max ) {
    max = Math.random() * ( max + 1 - min );
    return Math.floor( min + max );
}

console.log( randomInteger( 1, 5 ) );