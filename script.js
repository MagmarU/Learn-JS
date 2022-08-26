function sortByAge( arr ) {
  arr.sort( function( a, b ) { return a.age - b.age; });
  return arr;
}

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let arr = [ vasya, petya, masha ];

console.log( sortByAge( arr ) );
