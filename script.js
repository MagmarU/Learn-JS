function throttle( f, ms ) {
    let isCoolDown = false;
    let accumulator;
    function wrapper() {
        if( isCoolDown ) {
            accumulator = arguments;
            // Тут должен ещё сохраняться контекст.
            return;
        };
        
        isCoolDown = true;
        f.apply( this, arguments )
        setTimeout( () => {
            isCoolDown = false;
            f.apply( this, accumulator );
        }, ms );
    }

    return wrapper;
}

function f(a) {
    console.log(a)
  }
  
  let f1000 = throttle(f, 1000);
  
  f1000(1); 
  f1000(2); 
  f1000(3); 

