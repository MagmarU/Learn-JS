"use strict";
let id = Symbol("id");
let user = {
  [id]: 1,
  [id]: 2,
  name: 'John',
  name: 'Daniel',
};

console.log(Symbol.for("id"));
console.log(user[id], user.name);

// let id = Symbol("id");
// let user = {
//   [id]: 1,
// };

// id = null;
// console.log(user[id]);