let body = document.body;
// body.innerHTML = '<!--ggg-->';
Element.prototype.nodeNme = () => 'hi';
console.log( body.querySelector('div').nodeNme() );
