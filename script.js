function sumProperties(obj) {
    let sum = 0;
    for( let prop in obj ) {
        sum += obj[prop];
    }
    return sum;
}

let salaries = {
    // 'John': 23,
    // 'Daniel': 12
}
console.log(sumProperties(salaries));