function clear( elem ) {
    elem.replaceWith( elem.cloneNode( false ) )
    return elem;
}

let elem = document.body.querySelector('ol');
console.log( clear( elem ) );