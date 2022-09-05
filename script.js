let room = {
    number: 23
  };
  
  let meetup = {
    title: "Совещание",
    occupiedBy: [{name: "Иванов"}, {name: "Петров"}],
    place: room
  };
  
  // цикличные ссылки
  room.occupiedBy = meetup;
  meetup.self = meetup;
  
  console.log( JSON.stringify( meetup, function replacer( key, value ) {
    return ( ( ( key == 'occupiedBy' && this != meetup) || key == 'self' ) ? undefined : value );
  }, 1));