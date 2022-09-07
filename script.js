function digPow( n, p ) {
  // let arr = n.toString().split('');
  let result = n.toString().split('').reduce( ( sum, item ) => sum + Math.pow( item, p++ ), 0 );
  return result % n ? -1 : result / n;
}

console.log( digPow( 46288, 3 ) );