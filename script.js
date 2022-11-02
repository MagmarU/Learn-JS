let ul = document.querySelector('#ul');
let selectedLi;
ul.addEventListener( 'click', function(event) {
    if( event.target.tagName != 'LI' ) return;
    let target = event.target;
    if( event.ctrlKey || event.metaKey ) {
        addhighLight( target );
    } else highLight( target );
    
});

ul.addEventListener( 'mousedown', (event) => event.preventDefault() );

function addhighLight( li ) {
    li.classList.toggle('selected');
}

function highLight( li ) {
    let selectedLi = document.querySelectorAll( '.selected' );
    selectedLi.forEach( item => item.classList.remove('selected') );
    li.classList.add( 'selected' );
}