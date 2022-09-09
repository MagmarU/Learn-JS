function findUnique( arr ) {
  if( arr[ 0 ] == arr[ 1 ] ) {
    return arr.find( item => item != arr[ 0 ] );
  } else if( arr[0] == arr[2] ) {
    return arr[1];
  } else{
    return arr[ 0 ];
  }
}

let arr = [ 1, 1, 1, 2, 1, 1 ];
console.log( findUnique( arr ) );