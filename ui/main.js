console.log('Loaded!');

//change the text of main-text div
var element = document.getElementById('main-text');

element.innerHTML = 'New Value';

//move the image
var image=document.getElementById('madi');
var marginleft=0;
function moveRight() {
    marginleft=marginleft+1;
    img.style.marginleft=marginleft+'px';
}
img.onclick=function() {
    var interval=setInterval(moveRight,50);
}