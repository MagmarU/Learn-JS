function Calculator() {
  this.methods = {
    '+': ( a, b ) => +a + +b,
    '-': ( a, b ) => a - b
  };

  this.calculate = ( str ) => {
    let arr = str.split(' ');

    if (!this.methods[ arr[1] ] || isNaN( arr[0] ) || isNaN( arr[2] ) ) {
      return NaN;
    }

    return this.methods[arr[1]]( arr[0], arr[2] );
  };

  this.addMethod = ( name, func ) => {
    this.methods[name] = func;
  };

}

let calc = new Calculator;
console.log( calc.calculate( '2 + 4' ) );

calc.addMethod( '*', ( a, b ) => a * b );
console.log( calc.calculate( '2 * 4' ) );