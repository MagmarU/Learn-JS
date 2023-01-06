function Obj(name) {
    this.value = 5;
    this.name = name;
}

let obj = new Obj( 'Peter' );
let obj2 = new obj.constructor( 'Anna' );

console.log( obj );
console.log( obj2 );