var canvas = document.getElementById('canvas'),
    ctx = canvas.getContext('2d'),
    circles = [];

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


function Circle(radius, speed, width, xPos, yPos) {
    this.radius = radius;
    this.speed = speed;
    this.width = width;
    this.xPos = xPos;
    this.yPos = yPos;
    this.opacity = .05 + Math.random() * .5;
    this.counter = 0;

    var singHelper = Math.floor(Math.random() * 2);

    if (singHelper == 1) {
        this.sign = -1;
    } else {
        this.sign = 1;
    }
}

Circle.prototype.update = function() {
    this.counter += this.sign * this.speed;

    ctx.beginPath();
    ctx.arc(this.xPos + Math.cos(this.counter / 100) * this.radius,
            this.yPos + Math.sin(this.counter / 100) * this.radius,
            this.width, 0, Math.PI * 2, false);
    ctx.closePath();
    ctx.fillStyle = 'rgba(66, 220, 228,' + this.opacity + ')';
    ctx.fill();
};

function setupCircles() {
    for (var i = 0; i < 120; i++) {
        var randomX = Math.round(-100 + Math.random() * window.innerWidth),
            randomY = Math.round(-100 + Math.random() * window.innerHeight),
            speed = .2 + Math.random() * 3,
            size = 15 + Math.random() * 100,
            radius = 50 + Math.random() * 100,

            circle = new Circle(radius, speed, size, randomX, randomY);

        circles.push(circle);
    }
    drawAndUpdate();
}

setupCircles();

function drawAndUpdate() {
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

    for (var i = 0; i < circles.length; i++) {
        var myCircle = circles[i];
        myCircle.update();
        }
    requestAnimationFrame(drawAndUpdate);
    }
