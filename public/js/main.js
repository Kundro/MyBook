// Menu button ----------------------------------------
let img = document.querySelector('#imgMenu');
let h1 = document.querySelector('h1');

img.addEventListener('mouseover', function(){
    this.closest('img').setAttribute('src', 'menu1.png');
});
img.addEventListener('mouseout', function(){
    this.closest('img').setAttribute('src', 'menu.png');
});
// -----------------------------------------------------

