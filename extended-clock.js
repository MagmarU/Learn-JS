class ExtendedClock extends Clock{
    constructor( {template, precision = 1000} ) {
        super( {template} );
        this.precision = precision;
    }
    start() {
        this.render();
        this.timer = setInterval( () => this.render(), this.precision );
    }
}

let clock = new Clock( {
    template: 'h:m:s',
} );

let exClock = new ExtendedClock({
    template: 'h:m:s',
    // precision: 2000
});
exClock.start();