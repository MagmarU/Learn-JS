function deleteDash( str ) {
  let arr = str.split( '-' );
  let newArr = arr.map( ( item, index ) => index == 0 ? item : item[0].toUpperCase() + item.slice(1) );
  let result = newArr.join('');
  return result;
}

console.log( deleteDash( 'hel-lo' ) );