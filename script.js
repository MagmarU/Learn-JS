let div = document.querySelector('.gallery');
let pics = document.querySelector('.pics');
console.log(pics)
const leftButt = div.firstElementChild;
const rightBut = div.lastElementChild;
leftButt.onclick = function() {
    pics.scrollLeft -= 390;
}
rightBut.onclick = function() {
    pics.scrollLeft += 390;
}