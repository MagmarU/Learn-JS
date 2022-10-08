function getCoords(anchor) {
    let elem = anchor.getBoundingClientRect();
    return {
        top: elem.top + window.pageYOffset,
        right: elem.right + window.pageXOffset,
        left: elem.left + window.pageXOffset,
        bottom: elem.bottom + window.pageYOffset
    };

}
function positionAT( anchor, position, elem ) {
    let positions = {
        "top": function () {
            elem.style.left = coords.left + 'px';
            elem.style.top = coords.top - elem.clientHeight + 'px';
        },
        "right": function () {
            elem.style.left = coords.right + 'px';
            elem.style.top = coords.top + 'px';
        },
        "bottom": function () {
            elem.style.left = coords.left + 'px';
            elem.style.top = coords.bottom + 'px';
        }
    }
    
    elem.style.cssText = 'position: absolute;';
    let coords = getCoords( anchor );
    positions[position]();
}

let elem = document.querySelector('.message');
let anchor = document.querySelector('blockquote');

positionAT(anchor, "right", elem);