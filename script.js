let table = document.createElement( 'table' );
const body = document.body;

for( let i = 1; i <= 5; i++ ) {
  let currTr = document.createElement( 'tr' );
  table.appendChild( currTr );
  for( let j = 1; j <= 5; j++ ) {
    let currTd = document.createElement( 'td' );
    currTr.appendChild( currTd );
    currTd.innerHTML = `${j}:${i}`;
    currTr.appendChild( currTd );
  }
}

for( let i = 0; i < 5; i++ ) {
  let tablerow = table.rows[i].cells[i];
  tablerow.style.background = 'red';
}
body.appendChild( table );