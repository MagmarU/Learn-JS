function positionDiv(div, place, coords, target) { 
    
    let position = {
        top() {
            div.style.top = coords.top - div.offsetHeight + window.pageYOffset - 5 + 'px';
            this.left();
        },
        down() {
            div.style.top = coords.bottom + window.pageYOffset + 5 + 'px';
            this.left();
        },
        left() {
            let left = coords.left + target.offsetWidth / 2 - div.offsetWidth / 2;
            div.style.left = left < 0 ? '0px' : `${left}px`;
        }
    }
    position[place]();
}

let dataTooltips = document.querySelectorAll( '[data-tooltip]' );

dataTooltips.forEach( item => {
    item.addEventListener('mouseover', ( event ) => {
        const ev = event.target.closest('[data-tooltip');
        if( ev ) handler( ev );
    });

    item.addEventListener( 'mouseout', () => handlerForLeave() );
});

function handler( event ) {
    
    let div = document.querySelector( '.tooltip' );
    div.style.cssText = 'position: absolute';
    div.innerHTML = event.dataset.tooltip;
    document.body.append(div);

    let coords = event.getBoundingClientRect();

    coords.top - 5 - div.offsetHeight < 0 ? 
    positionDiv( div, 'down', coords, event ) : 
    positionDiv( div, 'top', coords, event );

};

function handlerForLeave() {
    let div = document.querySelector('.tooltip');
    div.style.cssText = 'display: none';
}