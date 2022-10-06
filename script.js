let field = document.querySelector( '#field' );
console.log( field );
let objProp = field.getBoundingClientRect();
let oneAngle = [objProp.x, objProp.y];
let twoAngle = [ oneAngle[0] + objProp.width, oneAngle[1] + objProp.height ];
let threeAngle = [ objProp.x + field.style, objProp.y + +field.style.borderTop ];
console.log( objProp );
console.log( field.clientWidth );
console.log( threeAngle );