// Author: Lamar Jambi (Jambo)
// DM1133 Midterm Project 1 - The UnexCpected Machine: Performance Adjective
// General idea: how nostalgia feels as time progresses
// for the original idea, i would like to create a can as a main subject, but for now it'll be a rectangular shape
// until the scenes are done
// ==========================

let bkgSpeed = 1; 
let bkgElem = []

class BkgBall {
    constructor(xCoor, yCoor, size) {
        this.xCoor = xCoor;
        this.yCoor = yCoor;
        this.size = size;
        this.color = color(random(150, 255), random(150, 255), random(150, 255));
    }

    // fix: try to make the colors random in each ellipse
    display() {
        noStroke();
        fill(this.color);
        ellipse(this.xCoor, this.yCoor, this.size);
    }

    move() {
        this.yCoor += bkgSpeed;

        // if the ellipse hits the ground, reposition at a random coor
        if (this.yCoor > height) {
            this.yCoor = -this.size;
            this.xCoor = random(width);
        }
    }
};

class CanShape {
    constructor(xCoor, yCoor, size) {
        this.xCoor = xCoor;
        this.yCoor = yCoor;
        this.size = size;
    }

    display() {
        fill(192, 192, 192)
    }

};

function setup() {
    createCanvas(1280, 550);
    for (let i = 0; i < 10; i++) {
        let xCoor= random(width);
        let yCoor = random(height/2)
        let size = random(20, 50);

        bkgElem.push(new BkgBall(xCoor, yCoor, size));
    }
}

function draw() {
    background(164, 215, 250); 

    for (let i = 0; i < bkgElem.length; i++) {
        bkgElem[i].display();
        bkgElem[i].move();
    }
}

/*
:desc: as the time progresses, the background ellipses will get more stressed
and faster
*/
// function updateSpeed(state) {
//     if (state === 'happy') {
//         bkgSpeed = 0.5; 
//     } else if (state === 'nostalgic') {
//         bkgSpeed = 2; 
//     }
// }
