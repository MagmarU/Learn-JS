function filterRangeInPlace( arr, a, b ) {
  for( let item in arr ) {
    if( arr[ item ] < a || arr[ item ] > b ) {
      console.log( arr[ item ] );
      arr.splice( item, 1 );
    }
  }
}
let arr = [5, 3, 8, 1];

filterRangeInPlace( arr, 1, 4 );
console.log( arr );