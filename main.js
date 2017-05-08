window.onload = function() {
    Animation.init();
};

circles = [];

VAR = {
    fps: 60,
    lastTime: 0,
    W: 0,
    H: 0,
    rand: function(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
};

Animation = {
    init: function() {
        Animation.canvas = document.createElement('canvas');
        Animation.ctx = Animation.canvas.getContext('2d');
        Animation.layout();
        window.addEventListener('resize', Animation.layout, false);
        document.body.appendChild(Animation.canvas);
        Animation.setupCircles();
    },
    layout: function() {
        VAR.W = window.innerWidth;
        VAR.H = window.innerHeight;
        VAR.d = Math.min(VAR.W, VAR.H);
        Animation.canvas.width = VAR.W;
        Animation.canvas.height = VAR.H;
    },
    setupCircles: function() {
        for (let i = 0; i < 120; i++) {
            let randomX = Math.random() * VAR.W,
                randomY = Math.random() * VAR.H,
                speed = .2 + Math.random() * 3,
                size = VAR.d * 0.02 + Math.random() * VAR.d * 0.1,
                radius = VAR.d * 0.1 + Math.random() * VAR.d * 0.1,

                circle = new Circle(radius, speed, size, randomX, randomY);

            circles.push(circle);
        }
        Animation.drawAndUpdate();
    },
    drawAndUpdate: function(time) {
        requestAnimationFrame(Animation.drawAndUpdate);
        if(time - VAR.lastTime >= 1000 / VAR.fps) {
            VAR.lastTime = time;
            Animation.ctx.clearRect(0, 0, VAR.W, VAR.H);
            for (let i = 0; i < circles.length; i++) {
                let myCircle = circles[i];
                myCircle.update();
            }
        }
    }
};