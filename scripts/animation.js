var canvas = document.querySelector('canvas')
var ctx = canvas.getContext('2d');
var width = canvas.width = window.innerWidth;
var height = canvas.height = window.innerHeight;
ctx.fillStyle = 'rgb(0,0,0)';
ctx.fillRect(0, 0, width, height);
ctx.translate(width / 2, height / 2);

var sprite = 0;
var posX = 0;
function draw() {
    ctx.fillRect(-(width/2), -(height/2), width, height);
    ctx.drawImage(img, (sprite * 102), 0, 102, 148, 0 + posX, -74, 102, 148);
    if (posX % 13 === 0) {
        if (sprite === 5) {
            sprite = 0;
        } else {
            sprite++;
        }
    }
    if (posX > width / 2) {
        newStartPos = -((width / 2) + 102);
        posX = Math.ceil(newStartPos / 13) * 13;
    } else {
        posX += 2;
    }
    window.requestAnimationFrame(draw);
}
var img = new Image();
img.src = 'images/walk-right.png';
img.onload = draw;