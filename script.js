function shuffle( arr ) {
  let newArr = new Array( arr.length );
  // let rndNum, max;
  let max = arr.length - 1;
  for( let i = 0; i < newArr.length; i++ ) {
    let max = arr.length - 1;
    let rndNum = Math.floor( Math.random() * ( max + 1 ) );
    newArr[ i ] = arr[ rndNum ];
    // newArr.push( arr[ rndNum ] );
    arr.splice( rndNum, 1 );
    
  }
  return newArr;
}

let count = {
  '123': 0,
  '132': 0,
  '213': 0,
  '231': 0,
  '321': 0,
  '312': 0
};

for (let i = 0; i < 1000000; i++) {
  let array = [1, 2, 3];
  count[shuffle(array).join('')]++;
}

// показать количество всех возможных вариантов
for (let key in count) {
  console.log(`${key}: ${count[key]}`);
}