let list = document.querySelector('span');
let ul = document.querySelector('ul');
let text = list.innerHTML.split(' ').slice(1).join(' ');

function trigger( hiddenStatus ) {
    let char = {
        false: '▶ ',
        true: '▼ '
    };
    list.innerHTML = char[hiddenStatus] + text;
    return !hiddenStatus;
}

list.onclick = function() {
    ul.hidden = ul.hidden ? trigger(true) : trigger(false);
};