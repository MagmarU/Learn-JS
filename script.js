let elem = document.body.querySelectorAll( '[href*="://"]:not([href^="http://internal.com"])' );
for( let prop of elem ) {
    console.log( prop.style.color = 'orange' );
}