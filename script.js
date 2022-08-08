"use strict";

function Calculator() {
    this.read = function() {
        this.firstNumber = +prompt('Введите первое число: ', '');
        this.secondNuumber = +prompt('Введите второе число: ','');
    };
    this.sum = function() {
        return this.firstNumber + this.secondNuumber;
    };
    this.mul = function() {
        return this.firstNumber * this.secondNuumber;
    };
}

let calculator = new Calculator();
calculator.read();
console.log( "Sum = " + calculator.sum() );
console.log( "Mul = " + calculator.mul() );