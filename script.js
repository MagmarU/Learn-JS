document.addEventListener( 'click', function( event ) {
  let eventName = event.target;
  if( eventName.closest('a') ) {
    if(confirm(`Перейти на страницу ${eventName.getAttribute('href')} ?`) ) return;
    event.preventDefault();
  } 
});