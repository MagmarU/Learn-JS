// function positionDiv(div, place, coords, target) { 

//     let position = {
//         top() {
//             div.style.top = coords.top - div.offsetHeight + window.pageYOffset - 5 + 'px';
//             this.left();
//         },
//         down() {
//             div.style.top = coords.bottom + window.pageYOffset + 5 + 'px';
//             this.left();
//         },
//         left() {
//             let left = coords.left + target.offsetWidth / 2 - div.offsetWidth / 2;
//             div.style.left = left < 0 ? '0px' : `${left}px`;
//         }
//     }
//     position[place]();
// }

// let dataTooltips = document.querySelectorAll( '[data-tooltip]' );

// dataTooltips.forEach( item => {
//     item.addEventListener('mouseover', ( event ) => {
//         const ev = event.target.closest('[data-tooltip');
//         if( ev ) handler( ev );
//     });

//     item.addEventListener( 'mouseout', () => handlerForLeave() );
// });

// function handler( event ) {

//     let div = document.querySelector( '.tooltip' );
//     div.style.cssText = 'position: absolute';
//     div.innerHTML = event.dataset.tooltip;
//     document.body.append(div);

//     let coords = event.getBoundingClientRect();

//     coords.top - 5 - div.offsetHeight < 0 ? 
//     positionDiv( div, 'down', coords, event ) : 
//     positionDiv( div, 'top', coords, event );

// };

// function handlerForLeave() {
//     let div = document.querySelector('.tooltip');
//     div.style.cssText = 'display: none';
// }






function positionDiv(div, place, coords, target) {

  let position = {
    top() {
      div.style.top = coords.top - div.offsetHeight + window.pageYOffset - 5 + 'px';
      this.left();
    },
    down() {
      div.style.top = coords.bottom + window.pageYOffset + 5 + 'px';
      this.left();
    },
    left() {
      let left = coords.left + target.offsetWidth / 2 - div.offsetWidth / 2;
      div.style.left = left < 0 ? '0px' : `${left}px`;
    }
  }
  position[place]();
}





function calculationSpeed(options) {
  let prevEvent, currentEvent, speed;

  options.elem.onmousemove = function (event) {
    currentEvent = event;
  }

  setInterval(function () {
    if (prevEvent && currentEvent) {
      let movementX = Math.abs(currentEvent.screenX - prevEvent.screenX);
      let movementY = Math.abs(currentEvent.screenY - prevEvent.screenY);
      let movement = Math.sqrt(movementX * movementX + movementY * movementY);

      speed = Math.round( 10 * movement );
      // console.log( prevEvent );
      if (speed < 50) {
        options.over();
      }
      // document.getElementById("speed").innerText = Math.round(speed);
    }

    prevEvent = currentEvent;
  }, 1);
}




let tooltip = document.querySelector('#tooltip');


function HoverIntent(options) {

  options.elem.addEventListener( 'mouseenter', (event) => calculationSpeed(options) );
  // options.elem.addEventListener( 'mouseleave', () => options.out() );
  // options.elem.addEventListener( 'mouseenter', function(event) {
  //   console.log( event.clientX, event.clientY );
  //   // console.log(  );
  //   options.over();
  // });
  // options.elem.addEventListener( 'mouseleave', function() {
  //   options.out();
  // });




  // console.log( elem );



  // this.elem.addEventListener( 'mousemove', function(event) {
  //   console.group();
  //   console.log( event.pageX , event.pageY );
  //   console.groupEnd();
  // });
}

let clock = document.querySelector('.clock');
// clock.addEventListener( 'mousemove', function( event ) {
//   console.log( event.target );

// });

// console.log( tooltip );
setTimeout(function () {
  new HoverIntent({
    elem: clock,
    over() {
      tooltip.hidden = false;
      positionDiv(tooltip, 'down', this.elem.getBoundingClientRect(), this.elem)

      // let coords = this.elem.getBoundingClientRect();
      // tooltip.style.top = coords.bottom + window.pageYOffset + 5 + 'px';

      // let left = coords.left - tooltip.offsetWidth / 2;
      // tooltip.style.left = left < 0 ? '0px' : `${left}px`;

    },
    out() {
      tooltip.hidden = true;
    }
  });
}, 0);