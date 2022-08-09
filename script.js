"use strict";
let User = function() {
    this.name = "Вася";
    this.isAdmin = false;
  
  };

let users = new User();
for( let prop in users ) {
    console.log( users, users[prop] );
}