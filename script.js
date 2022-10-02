let elem = document.body.querySelector( '.text' );
let scrollBottom = () => elem.scrollHeight - (elem.scrollTop + elem.clientHeight);
setInterval( () => console.log( scrollBottom() ), 100 );