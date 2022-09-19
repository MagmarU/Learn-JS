let data = {
  "Рыбы": {
    "форель": {},
    "лосось": {}
  },

  "Деревья": {
    "Огромные": {
      "секвойя": {
        "японская": {},
        "европейская": {}
      },
      "дуб": {}
    },
    "Цветковые": {
      "яблоня": {},
      "магнолия": {}
    }
  }
};
// function iterationInObject( array ){
//     array.map( item => {
//         // console.log( Object.keys( data[item] ).length)
//         if( Object.keys( data[item] ).length != 0 ) {
//             iterationInObject( Object.keys( data[item] ) );
//             // console.log( Object.keys( item ) );
//         } else{
//             console.log( item );
//         }
//     });
// }
// let array = Object.keys( data );
// console.log( array );
// console.log( data["форель"] );
// iterationInObject( array );
console.log( data );

function iterationInObject(container, obj) {
  let i = 0;
  for (let prop in obj) {
    let length = Object.keys(obj[prop]).length;
    if ( length != 0) {
      i++;

      if( i == length ) {
        container = containerCopy;
      }
      console.log( prop );
      // container = 
      // if(  ) {
      // }
      console.log( length );
      console.log( i );
      let li = document.createElement('li');
      li.textContent = prop;
      let ul = document.createElement('ul');

      container.append(li);

      container.append(ul);

      container = ul;

      iterationInObject(container, obj[prop]);
      

    } else {
      let li = document.createElement('li');
      li.textContent = prop;
      container.append(li);
    }
    
  }
  i = 0;

  document.body.append(containerCopy);




























  //     for( let prop in obj ) {
  //     if( Object.keys( obj[prop] ).length != 0) {
  //         let ul = document.createElement( 'ul' ); 
  //         let li = document.createElement('li');
  //         li.textContent = prop;
  //         ul.append( li );
  //         container.append( ul );
  //         container = ul;
  //         iterationInObject( obj[prop] )
  //         // console.log( prop );
  //     } else {
  //         let li = document.createElement( 'li' );
  //         li.textContent = prop;
  //         ul.append( li );
  //         console.log( prop );
  //         container.append( ul );
  //     }
  // }
}
let container = document.createElement('ul');
let containerCopy = container;
iterationInObject(container, data);
