// Author: Lamar Jambi (Jambo)
// DM1133 Midterm Project 1 - The UnexCpected Machine: Performance Adjective
// General idea: how nostalgia feels as time progresses
// for the original idea, i would like to create a can as a main subject, but for now it'll be a rectangular shape
// until the scenes are done
// idea: can is filled with memories and when it explodes it'll take us 
// to differenr scenes to express the emotions **transitionsss**
// ==========================

let subCan;
let caughtMem = 0;
let memories = [];

// transition
let cols = 50;
let rows = 50;
let currRow = 0;
let currCol = 0;
let isTransitioning = false;

function setup() {
    createCanvas(1280, 550);

    subCan = new CanShape(width / 2, height / 2);
    
    for (let i = 0; i < 5; i++) {
        memories.push(new Memory());
    }
}

function draw() {
    // console.log("Caught Memories:", caughtMem);
    // console.log("Is Can Full:", subCan.isFull(caughtMem));
    
    if (!isTransitioning) {
        if (subCan.isShaking) {
            background(random(255), random(255), random(255));
        } else {
            background(164, 215, 250);
        }

        for (let elem of bkgElem) {
            elem.display();
            elem.move();
        }

        for (let i = memories.length - 1; i >= 0; i--) {
            memories[i].move();
            memories[i].display();

            if (memories[i].yCoor > height) {
                memories.splice(i, 1); 
                memories.push(new Memory());
            } else if (memories[i].hits(subCan)) {
                subCan.collectMemory(memories[i]);
                memories.splice(i, 1);
                memories.push(new Memory()); 
                caughtMem++;
            }
        }

        subCan.display();
        subCan.move();

        if (subCan.isFull(caughtMem)) {
            console.log("Can is full! Starting transition...");
            isTransitioning = true;
            background(0);  
        }
    } else {
        transition();
    }
}

function transition() {

    for (let i = 0; i < 5; i++) {
        if (currRow < rows) {
            let x = currCol * 50 + 25;
            let y = currRow * 50 + 25;

            let opaValue = random(50, 255);
            fill(random(255), random(255), random(255), opaValue);

            let ellipseSize = random(150, 250);
            ellipse(x, y, ellipseSize, ellipseSize);

            currCol++;

            if (currCol >= cols) {
                currCol = 0;
                currRow++;
            }

        } else {
            isTransitioning = false;
            currRow = 0;
            currCol = 0;
            caughtMem = 0;

            // reset
            setup(); 
        }
    }
}