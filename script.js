function isEmpty( obj ) {
  return Object.values( obj ).length > 0 ? false : true;
}

let user = {
  'dfdf': 1
};
console.log(isEmpty(user));