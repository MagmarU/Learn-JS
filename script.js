let strTest = "llHelo, worlld!";
let pos = 0;
for( let i = 0; i < strTest.length; i++ ) {
    if( strTest.includes( "lo", pos ) ) {
        if( strTest.includes( "lo", pos ) ){
            pos++;
        } else {
            pos -= 1;
            
        }
        console.log( pos );
    }
}