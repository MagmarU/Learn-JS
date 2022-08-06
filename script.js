function isEmpty(obj) {
    let i = 0;
    for(let key in obj) {
        i++;
    }
    i = i > 0 ? false : true;
    return i;
}

let user = {};
alert(isEmpty(user));