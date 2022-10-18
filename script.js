let container = document.querySelector('#container');

container.addEventListener( 'click', function(event) {
    
    if( event.target.className == 'remove-button' ) {
        event.target.closest('.pane').remove();
    }
});