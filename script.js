let hamster = {
  eat( food ) {
    this.stomach.push( food );
  }
};

let speedy = {
  stomach: [],
  __proto__: hamster,
}

let lazy = {
  stomach: [],
  __proto__: hamster,
};

speedy.eat( "apple" );
speedy.eat( 'cucumber' );
console.log( speedy.stomach );
console.log( lazy.stomach );
console.log( hamster.stomach );