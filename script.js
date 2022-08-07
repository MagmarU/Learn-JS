"use strict";
let calculator = {
    read() {
        this.firstNumber = +prompt('Введите первое число', '');
        this.secondNumber = +prompt('Введите второе число', '');
    },
    sum() {
        let result = this.firstNumber + this.secondNumber;
        return result;
    },
    mul() {
        let result = this.firstNumber * this.secondNumber;
        return result;
    }

}
calculator.read();
console.log( calculator.sum(), calculator.mul() );
