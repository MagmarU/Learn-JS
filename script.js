"use strict";

function Accumulator(startingValue) {
    this.value = startingValue;
    this.read = function() {
        return ( this.value += +prompt("Введите число: ", '') );
    };

}
let startingValue = 1;
let accumulator = new Accumulator(startingValue);

accumulator.read();

console.log(accumulator.value);