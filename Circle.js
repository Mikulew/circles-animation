function Circle(radius, speed, width, xPos, yPos) {
    this.radius = radius;
    this.speed = speed;
    this.width = width;
    this.xPos = xPos;
    this.yPos = yPos;
    this.opacity = .05 + Math.random() * .5;
    this.counter = 0;

    let singHelper = Math.floor(Math.random() * 2);

    if (singHelper === 1) {
        this.sign = -1;
    } else {
        this.sign = 1;
    }
}

Circle.prototype.update = function() {
    this.counter += this.sign * this.speed;

    Animation.ctx.beginPath();
    Animation.ctx.arc(this.xPos + Math.cos(this.counter / 100) * this.radius,
        this.yPos + Math.sin(this.counter / 100) * this.radius,
        this.width, 0, Math.PI * 2, false);
    Animation.ctx.closePath();
    Animation.ctx.fillStyle = 'rgba(66, 220, 228,' + this.opacity + ')';
    Animation.ctx.fill();
};

