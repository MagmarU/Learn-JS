let tree = document.querySelector( '.tree' );
tree.addEventListener( 'click', function(event) {
    if(event.target.tagName != 'SPAN') return;
    let child = event.target.nextElementSibling;
    child.hidden = !child.hidden;
});