let pane = document.querySelectorAll('.pane');
let button = '<button class="remove-button">[x]</button>';

for( let elem of pane ) {
    elem.insertAdjacentHTML( 'afterbegin', '<button class="remove-button">[x]</button>' );
    elem.firstChild.onclick = () => elem.remove();
}