// function arrPlusOne( arr ) {
//   // arr.reverse();
//   for( let elem = arr.length - 1; elem > -1; elem-- ) {
//     arr[elem]++;
//     if( arr[elem] < 10 ) break;
//     arr[elem] = 0;
//     arr.unshift(1);
//     console.log( arr[elem] );
//   }
//   return arr;
//   // console.log( arr );
  

//   // arr;

//   // let res = String(+arr.join('') + 1).split('');
//   // return res.map( item => +item );
// }

// let arr = [9, 9, 9, 9];
// // console.log( arr.join('') );
// console.log( arrPlusOne( arr ) );

reverse = function(array) {
  let res = [];
  array.map( item => res.unshift(item) );
  return res;
}

let arr = [1, 2, 3];
console.log( reverse( arr ) );