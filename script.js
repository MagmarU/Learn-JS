let dictionary = Object.create(null, {
    toString : {
        value() {
            return Object.keys(this).join();
        }
    }
});

dictionary.apple = 'Apple';
dictionary.__proto__ = 'test';

for( let prop in dictionary ) {
    console.log( prop );
}

alert( dictionary );