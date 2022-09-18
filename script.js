let inputData = prompt('');
let ulElement = document.createElement('ul');
document.body.append( ulElement );
while( inputData ) {
    let liElement = document.createElement('li');
    liElement.textContent = inputData;
    console.log( liElement.nodeType )
    ulElement.append( liElement );
    inputData = prompt('');
}