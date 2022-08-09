"use strict";
let id = Symbol("id");
let user = {
  [id] : 1
};

for( let prop in user ) {
  console.log( user[prop] );
}