function sumDigPow(a, b) {
  let range = {
    from: a,
    to: b,

    [Symbol.iterator]() {
      this.current = this.from;
      return this;
    },

    next() {
      if (this.current <= this.to) {
        return {
          done: false,
          value: this.current++
        };
      } else {
        return {
          done: true,
        };
      }
    }
  };

  let resultArr = [];
  for( let num of range ) {
    if (checkOnPowSum( num )) {
      resultArr.push( num );
    }
  }
  return resultArr;

}

function checkOnPowSum(num) {
  let n = num.toString().split('');
  let sum = 0;
  for (let elem in n) {

    sum += Math.pow(n[elem], ++elem);

  }
  return sum === num;
}
console.log(sumDigPow(1, 15));