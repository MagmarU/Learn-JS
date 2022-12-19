function bouncingBall(h,  bounce,  window) {
  if( h <= 0 || bounce <= 0 || bounce >= 1 || window < h ) return -1;
  let sum = 0;
  while( h >= 0 ) {
    sum++
    h = h * bounce;
    if( h > window ) sum++;
    else break;
  }
  return sum;
  // console.log( sum );
}

console.log( bouncingBall( 10, 0.6, 10 ) );