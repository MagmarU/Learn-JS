// let sumTo = ( n ) => n == 1 ? n : n + sumTo( n - 1 );
// console.log( sumTo( 100 ) );


// let factorial = ( n ) => n == 1 ? n : n * factorial( n - 1 );
// console.log( factorial( 77 ) );

// function fib( n ) {
//   // let result;
//   if( n == 1 ) {
//     return n;
//   } else {
//     console.log( sum( 1, 1, n ) );
//     n--;
//   }
//   // return result;


//   // let a = 1;
//   // if ( n == 1 ) {
//   //   return n;
//   // } else {
//   //   n += a;
//   //   a = n;
//   // }
//   // n--;
// }

// function sum( a, b, n ) {
//   while( n != 1 ) {
//   let result = a + b;
//   a = b;
//   b = result;
//   arr = [ a, b ];
//   n--;
//   return result;
//   // break;
// }
// }
// // console.log( sum( 1, 1 ) );
// console.log( fib( 7 ) );

function fib( n ) {
  return n <= 1 ? n : fib( n - 1 ) + fib( n - 2 );
}

console.log( fib( 4 ) );