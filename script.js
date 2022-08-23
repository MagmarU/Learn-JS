function filterRange( arr, a, b ) {
  let result = arr.filter( item => item >= a && item <= b);
  console.log( result );
}

let arr = [5, 3, 8, 1];
console.log( arr );

filterRange( arr, 1, 4 );