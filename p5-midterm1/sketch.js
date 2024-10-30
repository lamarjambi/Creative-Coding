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
// let isTransitioning = false;

let state = 0;

// melachony
let particles = [];
let drips = [];
const PARTICLE_COUNT = 150;
const DRIP_COUNT = 30;

function setup() {
    createCanvas(1280, 550);
    subCan = new CanShape(width / 2, height / 2);
    
    for (let i = 0; i < 5; i++) {
        memories.push(new Memory());
    }

    if (state == 1) {
        for (let i = 0; i < PARTICLE_COUNT; i++) {
            particles.push({
              x: random(width),
              y: random(height),
              size: random(2, 6),
              speed: random(0.2, 0.8),
              opacity: random(40, 120)
            });
          }
        
          for (let i = 0; i < DRIP_COUNT; i++) {
            createNewDrip();
          }
          
          noiseDetail(3, 0.5);
    }
}

function draw() {
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

        // check if memory was missed
        if (memories[i].yCoor > height) {
            memories.splice(i, 1); // remove memories (shapes) when they go off screen
            memories.push(new Memory());
        }
        // check if there's collision (caught)
        else if (memories[i].hits(subCan)) {
            subCan.collectMemory(memories[i]);
            memories.splice(i, 1);
            memories.push(new Memory()); 
            caughtMem++;
        }
    }

    subCan.display();
    subCan.move();

    if (subCan.isFull()) {
        // explode!! 
        console.log("BOOOMB!");
        subCan.explode();
        
        console.log("transitioning");
        transition();
    }

    if (state == 1) {
        fill(20, 22, 28, 15);
        rect(0, 0, width, height);

        for (let p of particles) {
            let xOffset = frameCount * 0.001 + p.x * 0.005;
            let driftX = map(noise(xOffset), 0, 1, -1, 1);
            
            p.x += driftX;
            p.y += p.speed;
            
            if (p.y > height) {
                p.y = 0;
                p.x = random(width);
            }

            if (p.x < 0) {
                p.x = width;
            }

            if (p.x > width) {
                p.x = 0;
            }

            let gradient = drawingContext.createRadialGradient(
                p.x, p.y, 0, 
                p.x, p.y, p.size * 2
            );

            gradient.addColorStop(0, `rgba(130, 150, 180, ${p.opacity / 255})`);
            gradient.addColorStop(1, 'rgba(130, 150, 180, 0)');
            drawingContext.fillStyle = gradient;
            circle(p.x, p.y, p.size * 2);
        }

        for (let i = drips.length - 1; i >= 0; i--) {
            let drip = drips[i];

            drip.y += drip.speed;
            drip.length = min(drip.length + 0.5, drip.maxLength);
            drip.opacity -= 0.8;

            if (drip.opacity > 0) {
                let gradient = drawingContext.createLinearGradient(
                    drip.x, drip.y - drip.length, 
                    drip.x, drip.y
                );

                gradient.addColorStop(0, `rgba(150, 170, 200, 0)`);
                gradient.addColorStop(1, `rgba(150, 170, 200, ${drip.opacity / 255})`);
                
                drawingContext.strokeStyle = gradient;
                drawingContext.lineWidth = drip.width;
                line(drip.x, drip.y - drip.length, drip.x, drip.y);
            }

            if (drip.y - drip.length > height || drip.opacity <= 0) {
                drips.splice(i, 1);
                createNewDrip();
            }
        }
    }
}

function transition() {
    background(0);
    console.log("transitioning");

    if (currRow < rows) {
        let ellipseSize = random(150, 250);
        let x = currCol * 50 + 36;
        let y = currRow * 50 - 89; 

        let opaValue = random(50, 255);
        fill(random(255), random(255), random(255), opaValue);
        ellipse(x, y, ellipseSize, ellipseSize);

        currCol++;

        if (currCol >= cols) {
            currCol = 0;
            currRow++;
        }
    } else {
        // isTransitioning = false;
        caughtMem = 0;

        currRow = 0;  
        currCol = 0;  
        setup(); 
    }
}