function Rabbit(name) {
    this.name = name;
}
Rabbit.prototype.sayHi = function() {
    console.log( this.name );
}

let rabbit = new Rabbit('George');

console.log( Rabbit.prototype );
rabbit.sayHi();
Rabbit.prototype.sayHi();
Object.getPrototypeOf(rabbit).sayHi();
rabbit.__proto__.sayHi();