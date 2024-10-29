// Author: Lamar Jambi (Jambo)
// DM1133 Midterm Project 1 - The UnexCpected Machine: Performance Adjective
// General idea: how nostalgia feels as time progresses
// for the original idea, i would like to create a can as a main subject, but for now it'll be a rectangular shape
// until the scenes are done
// ==========================

let subCan;

function setup() {
    createCanvas(1280, 550);

    for (let i = 0; i < 10; i++) {
        let xBall = random(width);
        let yBall = random(height/2);
        let size = random(20, 50);
        bkgElem.push(new BkgBall(xBall, yBall, size));
    }

    subCan = new CanShape(width/2, height/2);
    
    // frameRate(10);
}

function draw() {
    background(164, 215, 250);

    for (let i = 0; i < bkgElem.length; i++) {
        bkgElem[i].display();
        bkgElem[i].move();
    }

    subCan.display();

    fill(0);
    text("(" + int(mouseX) + ", " + int(mouseY) + ")", int(mouseX), int(mouseY));
    print("(" + int(mouseX) + ", " + int(mouseY) + ")", int(mouseX), int(mouseY));
}