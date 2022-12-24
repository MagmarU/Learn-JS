// function printNumbers( from, to ) {
//   setInterval( function print() {
//     if( from <= to ) {
//       console.log( from );
//       from++;
//     }
//   }, 1000 );
// }

function printNumbers( from, to ) {
  let timer = setTimeout( function print() {
    console.log( from );
    if( from < to ) {
      
      timer = setTimeout( print, 1000 );
    }
    from++;
  }, 1000 );
}
printNumbers( 1, 6 );