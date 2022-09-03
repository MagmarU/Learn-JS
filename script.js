let messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
  ];

let unReadMessage = new WeakSet();


for( let prop of messages ) {
    if( !unReadMessage.has( prop ) ) {
        unReadMessage.add( prop );
    }
    console.log( unReadMessage.has( prop ) );
}
