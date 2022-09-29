function tableToArray( table ) {
  let trS = table.querySelectorAll( 'tbody tr' );
  trS = sortingObj( trS );
  
  let html = '';

  trS.map( item => { html += `<tr>
    <td>${item.name.textContent}</td>
    <td>${item.surname.textContent}</td>
    <td>${item.age.textContent}</td>
  </tr>`});

  let tbody = table.querySelector('tbody');
  tbody.innerHTML = html;
}


function sortingObj( trS ) {
  let Users = [];
  for( let elem of trS ) {
    elem = elem.querySelectorAll( 'td' );
    let user = {
      name: elem[0],
      surname: elem[1], 
      age: elem[2] 
    };
    Users.push( user );
  }
  Users.sort( ( a, b ) => {
    let [ aName, bName ] = [ a.name.textContent, b.name.textContent ];
    return aName < bName ? -1 : 1;
  });
  return Users;
}

let table = document.querySelector( 'table' );
tableToArray( table );