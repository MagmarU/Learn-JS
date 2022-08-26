let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
let petya = { name: "Петя", surname: "Иванов", id: 2 };
let masha = { name: "Маша", surname: "Петрова", id: 3 };

let arr = [ vasya, petya, masha ];

let usersMapped = arr.map( item => ({

  fullName: `${item.name} ${item.surname}`,
  id: item.id
}
));


for( let prop in usersMapped ) {
  console.log( usersMapped[prop].id );
}