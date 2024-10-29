// Author: Lamar Jambi (Jambo)
// DM1133 Midterm Project 1 - The UnexCpected Machine: Performance Adjective
// General idea: how nostalgia feels as time progresses
// for the original idea, i would like to create a can as a main subject, but for now it'll be a rectangular shape
// until the scenes are done
// idea: can is filled with memories and when it explodes it'll take us 
// to differenr scenes to express the emotions 
// ==========================

let subCan;
let caughtMem = 0;
let memories = [];

function setup() {
    createCanvas(1280, 550);

    // background, good vibes 
    for (let i = 0; i < 10; i++) {
        let xBall = random(width);
        let yBall = random(height/2);
        let size = random(20, 50);
        bkgElem.push(new BkgBall(xBall, yBall, size));
    }

    subCan = new CanShape(width/2, height/2);
    
    // memories splash
    for (let i = 0; i < 5; i++) {
        memories.push(new Memory());
    }
}

function draw() {
    background(164, 215, 250);

    for (let elem of bkgElem) {
        elem.display();
        elem.move();
    }

    for (let i = memories.length - 1; i >= 0; i--) {
        memories[i].move();
        memories[i].display();

        // check if memory was missed
        if (memories[i].yCoor > height) {
            memories.splice(i, 1); // remove memories (shapes) when they go off screen
            memories.push(new Memory());
        }

        // check if collision (caught)
        else if (memories[i].hits(subCan)) {
            subCan.collectMemory(memories[i]);
            memories.splice(i, 1);
            memories.push(new Memory()); 
            caughtMem++;
        }
    }

    if (subCan.isFull(caughtMem)) {
        // explode!! these are placeholders
        noLoop(); 
        textSize(32);
        fill(0, 255, 0);
        text("FULLLL");
    }
    
    subCan.display();
    subCan.move();
}