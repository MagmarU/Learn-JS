function countNesting( obj ) {
  for( let prop in obj ) {
    let [ i, length ] = [ 0, Object.keys( obj[prop] ).length ];
    // console.log( length );
    if( length != 0 ) {
      countNesting( obj[prop] );
      i += length;
      // console.log( obj[prop] );
    }
    
    console.log( prop, i );
  }
  
}

let data = {
  "Рыбы": {
    "форель": {},
    "лосось": {}
  },

  "Деревья": {
    "Огромные": {
      "секвойя": {},
      "дуб": {}
    },
    "Цветковые": {
      "яблоня": {},
      "магнолия": {}
    }
  }
};

countNesting( data );