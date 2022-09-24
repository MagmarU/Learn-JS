let i = 0;
function countNesting( obj ) {
  
  for( let prop in obj ) {
    let res = 0;
    // console.log( prop );
    if( Object.keys( obj[prop] ).length != 0 ) {
      // console.log( obj[prop] );
      // console.log( Object.keys( obj[prop] ).length );
      res = Object.keys( obj[prop] ).length + countNesting( obj[prop] );
      i += res;
      // console.log( i );
      console.log( prop, i );
      
    } else {
      res = 0;
    }

    i = 0;  
    return res;  
  }

  // console.log( i );
  
}

let data = {
  "Рыбы": {
    "форель": {},
    "лосось": {}
  },

  "Деревья": {
    "Огромные": {
      "секвойя": {},
      "дуб": {},
      "вишня": {}
    },
    "Цветковые": {
      "яблоня": {},
      "магнолия": {},
    }
  }
};

console.log( countNesting( data ) );