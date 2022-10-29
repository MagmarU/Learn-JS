let largeImg = document.querySelector('#largeImg');

document.addEventListener('click', function(event) {
    let eventName = event.target;
    if( eventName.closest('a') ) {
        let parent = eventName.parentNode;
        largeImg.src = parent.href;
        event.preventDefault();
    }
});