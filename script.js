let rabbit = document.querySelector('#rabbit');
function hide() {
    let event = new CustomEvent("hide", {
        cancelable: true
    });
    !rabbit.dispatchEvent(event) ? alert( 'Действие отменено брузером' ) : rabbit.hidden = !rabbit.hidden;
}

rabbit.addEventListener('hide', function(event) {
    if( confirm('Вызвать PreventDefault?') ) {
        event.preventDefault();
    }
})