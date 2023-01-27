Function.prototype.defer = function(ms) {
    return function(...args) {
        setTimeout(() => {
            f.apply( this, args );
        }, ms);
    }
}

function f( ...args ) {
    console.log(args.reduce( (result, item) => item + result));
};
f.defer(1000)(1, 2, 4);