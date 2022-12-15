let arr = [1,2,3,4,5,6,7,8,9];

function inBetween(a, b) {
    return function(num) {
        return num >= a && num <= b;
    };
};

function inArray(arr) {
    return function(num) {
        return arr.includes( num );
    }
}

console.log(arr.filter(inBetween(5,7)) );
console.log( arr.filter(inArray([1,10,8])) );