function sum(n) {
    return function(m) {
        console.log( n + m );
    }
}

sum(5)(2);