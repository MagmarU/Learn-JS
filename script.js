// function aclean( arr ) {
//     let res = [];
//     let resultArr = arr.map( ( element, index, array ) => {
//         return ( ( array[index].toLowerCase().split('') ).sort() ).join('');
//     });

//     let set = new Set( resultArr );

    
//     for( let value of set ) {
//         res.push( arr[ resultArr.indexOf( value ) ] );
//     }

//     return res;
// }


// let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

// console.log( aclean( arr ) );



function aclean( arr ) {
    let resultArr = new Map();

    for( let element of arr ) {
        resultArr.set( element.toLowerCase().split('').sort().join(''), element );
    }

    return resultArr.values();
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];


for( let i = 0; i < 10000; i++ ){
    console.log( aclean( arr ) );
}
