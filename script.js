let button = document.querySelector('#hider');
let div = document.querySelector('#text');

button.onclick = function() {
    div.hidden = div.hidden ? false : true;
}