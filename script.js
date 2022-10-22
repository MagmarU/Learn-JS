let table = document.querySelector( 'table' );

let handler = {
    number(tr) {
        return tr.sort( ( a, b ) => +a.cells[0].innerHTML - +b.cells[0].innerHTML );
    }, 
    string(tr){
        return tr.sort( ( a, b ) => a.cells[1].innerHTML < b.cells[1].innerHTML ? -1 : 1 );
    }
}

table.addEventListener( 'click', function(event) {
    let tr = Array.from( table.rows ).slice(1);
    let result = handler[event.target.dataset.type](tr);

    table.tBodies[0].append( ...result );
});
