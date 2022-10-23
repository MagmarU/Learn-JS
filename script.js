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
            let left = coords.left + target.clientWidth / 2 - div.clientWidth/2;
            div.style.left = left < 0 ? '0px' : `${left}px`;
        }
    }
    position[place]();
}

document.addEventListener('mouseover', function (event) {
    if (!event.target.dataset.tooltip) return;
    let div = document.body.querySelector('.tooltip');

    div.style.cssText = 'position: absolute';
    document.body.append(div);
    let coords = event.target.getBoundingClientRect();

    div.innerHTML = event.target.dataset.tooltip;

    if (coords.top - 5 - div.offsetHeight < 0) {
        positionDiv(div, 'down', coords, event.target)
    } else {
        positionDiv(div, 'top', coords, event.target)
    };

});

document.addEventListener('mouseout', function () {
    let div = document.querySelector('.tooltip');
    div.style.cssText = 'display: none;';
});
