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
        "top-out": function () {
            elem.style.left = coords.left + 'px';
            elem.style.top = coords.top - elem.offsetHeight + 'px';
        },
        "right-out": function () {
            elem.style.left = coords.right + 'px';
            elem.style.top = coords.top + 'px';
        },
        "bottom-out": function () {
            elem.style.left = coords.left + 'px';
            elem.style.top = coords.bottom + 'px';
        },
        "top-in": function() {
            elem.style.left = coords.left + 'px';
            elem.style.top = coords.top + 'px';
        },
        "right-in": function() {
            elem.style.left = coords.right - elem.offsetWidth + 'px';
            elem.style.top = coords.top + 'px';
        },
        "bottom-in": function() {
            elem.style.left = coords.left + 'px';
            elem.style.top = coords.bottom - elem.offsetHeight + 'px';
        }
    }
    
    elem.style.cssText = 'position: absolute;';
    let coords = getCoords( anchor );
    positions[position]();
}

let elem = document.querySelector('.message');
let anchor = document.querySelector('blockquote');

positionAT(anchor, "top-out", elem);