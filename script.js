// function sqInRect( lng, wdth ) {
//   let area = lng * wdth;
//   if( lng == wdth ) return null;
//   let minNum = Math.min( lng, wdth );
//   let square;
//   let result = [];
//   while( area > 0 ) {
//     square = Math.floor( Math.sqrt( area ) );
//     if( square >= lng || square >= wdth ) {
//       square = minNum;
//     }
//     result.push( square );
//     area -= square ** 2;
//     if( area == 0 ) break;
//   }
//   return result;
// }

// console.log( sqInRect( 20, 14 ) );
let perimetr = ( square ) => 4 * square;

function sqInRect( lng, wdth ) {
  let perimetrMain = 2 * ( lng + wdth );
  let square;
  let result = [];
  while( lng > 0 && wdth > 0 ) {
    console.log( lng, wdth );
    

    square = Math.min( lng, wdth );
    

    result.push( square );
    perimetrMain -= perimetr( square );
    if( lng == 0 ) {
      lng = ( perimetrMain / 2 ) - wdth;
    } else {
      wdth = ( perimetrMain / 2 ) - lng;
    }
    // let [ lng, wdth ] = [ lng - square, wdth - square ];
    console.log( lng, wdth );
  }
  return result;

}

console.log( sqInRect( 20, 14 ) );