function work( a, b ) {
    return a + b;
}

function spy( func ) {
    function wrapper( ...args ) {

        wrapper.calls.push( args );
        return func.apply( this, args );
        
    }
    wrapper.calls = [];

    return wrapper;

}

function hash( args ) {
    return [].join.call(args);
}

work = spy( work );

work( 1, 2 );
work( 3, 5 );

for (let args of work.calls) {
    // console.log( args );
}