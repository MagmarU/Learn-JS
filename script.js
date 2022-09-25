function createCalendar( elem, year, month ) {
  let table = document.createElement( 'table' );
  document.body.append( table );

  let date = new Date( year, month - 1 );
  
  table.append( weekHeader() );


  let tr = document.createElement( 'tr' );
  let counter = 1;
  for( let i = 1 - date.getDay() + 1; i <= countDays( year, month ); i++ ) {
    table.append( tr );

    if( i < 1 ) {
      let td = document.createElement( 'td' );
      tr.append( td );
      counter++;
      continue;
    }

    let td = document.createElement( 'td' );
    td.textContent = i;
    tr.append( td );

    if( counter % 7 == 0 ) {
      tr = document.createElement( 'tr' );
      table.append( tr );
    }
    counter++;
  }
  elem.append( table );
}

function weekHeader() {
  let week = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];

  let tr = document.createElement( 'tr' );

  for( let prop of week ) {
    let th = document.createElement( 'th' );
    th.textContent = prop;
    tr.append( th );
  }

  return tr;
}

function countDays( year, month ) {
  let date = new Date( year, month, 0 );
  return date.getDate();
}


let elem = document.querySelector('.container');
createCalendar( elem, 2022, 9 );