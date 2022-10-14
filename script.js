let field = document.querySelector('#field');
let ball = document.querySelector('#ball');
let fieldCoords = field.getBoundingClientRect();

field.onmouseup = function(event) {
    let ballCoords = {
        top: event.clientY - fieldCoords.top - ball.clientHeight / 2 - field.clientLeft,
        left: event.clientX - fieldCoords.left - ball.clientWidth / 2 - field.clientLeft
    };

    ballCoords.top = ballCoords.top > 0 ? ballCoords.top : 0;

    ballCoords.left = ballCoords.left > 0 ? ballCoords.left : 0;

    if( ballCoords.top + ball.clientHeight > field.clientHeight ) {
        ballCoords.top = field.clientHeight - ball.clientHeight;
    }

    if( ballCoords.left + ball.clientWidth > field.clientWidth ) {
        ballCoords.left = field.clientWidth - ball.clientWidth;
    }
    ball.style.top = ballCoords.top + 'px';
    ball.style.left = ballCoords.left + 'px';
}