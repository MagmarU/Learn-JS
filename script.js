function removeAnchor( str ){
  return str.split('#')[0];
  // for( let char in str ) {
  //   if( str[ char ] == '#' ) return str.slice( 0, char );
  // }
  // return str;
}

let str = "www.codewars.com#about";
console.log( removeAnchor( str ) );