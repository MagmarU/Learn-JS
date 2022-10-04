const field = document.querySelector( '#field' );
const ball = document.querySelector('#ball');
let ballSize = ball.clientHeight / 2;

let width = field.clientWidth;
let height = field.clientHeight;
console.log( field.offsetLeft )
ball.style.left = `${(width / 2) - ballSize}px`;
ball.style.top = `${(height / 2) - ballSize}px`;