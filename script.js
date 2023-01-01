function debounce( func, ms ) {
    let isCoolDown = false;
    return function() {
        if( isCoolDown ) return;

        func.apply( this, arguments );
        isCoolDown = true;
        setTimeout( () => isCoolDown = false, ms );
    }
}

let f = debounce( console.log , 1000);

f(1);
f(2); 

setTimeout( () => f(3), 100);
setTimeout( () => f(4), 1100);
setTimeout( () => f(5), 1500);