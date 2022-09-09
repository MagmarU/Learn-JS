// function countCams( str ) {
//   let [ countLeftCar, countRightCar, countCam ] = [ 0, 0, 0 ];
//   let result = 0;
//   for( let char of str ) {
//     if( char == '.' ){
//       countCam++;
//       result += countLeftCar + countRightCar;
//     } else if( char == '<' ) {
//       countLeftCar++;
//     }
//     else {
//       countRightCar++;
//     }
//   }
//   return result;
// }

function countPhotos( str ) {
  return countCar( str, '>' ) + countCar( [...str].reverse(), '<' );
}

function countCar( road, car ) {
  let [ result, countCar ] = [ 0, 0 ];
  for( let char of road ) {
    if( char == '.' ) {
      result += countCar;
    } else if( char == car ) {
      countCar++;
    }
  }
  return result;
}


console.log( countPhotos( '>>.<>' ) );