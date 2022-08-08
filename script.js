"use strict";

function Calculator() {
    this.read: () {
        this.firstNumber = +prompt('Введите первое число: ', '');
        this.secondNuumber = +prompt('Введите второе число: ','');
    },
}