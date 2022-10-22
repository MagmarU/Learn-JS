function getCoords(anchor) {
    let elem = anchor.getBoundingClientRect();
    return {
        top: elem.top + window.pageYOffset,
        right: elem.right + window.pageXOffset,
        left: elem.left + window.pageXOffset,
        bottom: elem.bottom + window.pageYOffset
    };

}

document.addEventListener('mouseover', function (event) {
    if (!event.target.dataset.tooltip) return;
    let div = document.createElement('span');
    
    div.style.cssText = 'display: absolute';
    document.body.append( div );
    let coords = getCoords( event.target );
    console.log( coords );
    div.innerHTML = event.target.dataset.tooltip;

    // div.style.left = coords.left + 'px';
    // div.style.top = coords.top - div.offsetHeight + 'px';
    
});