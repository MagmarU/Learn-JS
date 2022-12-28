function f( x ) {
    console.log( x );
}
function delay( func, ms ) {
    function context(args) {
        return func.apply( this, args );
    }
    return function() {
        setTimeout( context, ms, arguments );
    }
}

let f1000 = delay( f, 1000 );
let f1500 = delay( f, 1500 );

f1000('test');