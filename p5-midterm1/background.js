// js file for the background
let bkgSpeed = 1;
let bkgElem = [];

class BkgBall {
    constructor(xCoor, yCoor, size) {
        this.xCoor = xCoor;
        this.yCoor = yCoor;
        this.size = size;
        this.color = color(random(150, 255), random(150, 255), random(150, 255));
    }

    display() {
        noStroke();
        fill(this.color);
        ellipse(this.xCoor, this.yCoor, this.size);
    }

    move() {
        this.yCoor += bkgSpeed;

        if (this.yCoor > height) {
            this.yCoor = -this.size;
            this.xCoor = random(width);
        }
    }
}

// function updateSpeed(state) {
//     if (state === 'happy') {
//         bkgSpeed = 0.5;
//     } else if (state === 'nostalgic') {
//         bkgSpeed = 2;
//     }
// }