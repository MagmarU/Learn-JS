function arrayPlusArray( arr1, arr2 ) {
  return arr1.concat( arr2 ).reduce( ( sum, item ) => item + sum );
}

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
console.log( arrayPlusArray( arr1, arr2 ) );