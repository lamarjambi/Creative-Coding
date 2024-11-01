// Author: Lamar Jambi (Jambo)
// DM1133 Midterm Project 1 - The UnexCpected Machine: Performance Adjective
// General idea: how nostalgia feels as time progresses
// for the original idea, i would like to create a can as a main subject, but for now it'll be a rectangular shape
// until the scenes are done
// idea: can is filled with memories and when it explodes it'll take us 
// to differenr scenes to express the emotions **transitionsss**
// maybe the after the EMOTIONS BOMB, expand on a blue/dark navy marble then the melancholy scene (state = 1)
// then go back to da bomb, expand on green for calm scene (state = 2)
// then bom, expand on yellow for happy scene (state = 3)
// FINALLY, close the damn lid because memories are part of us :]
// ==========================

let subCan;
let caughtMem = 0;
let memories = [];

// transition
let cols = 50;
let rows = 20;
let currRow = 0;
let currCol = 0;
let isTransitioning = false;

let state = 0;

// melancholy
let particles = [];
let drips = [];
const PARTICLE_COUNT = 150;
const DROPS_THRESHOLD = 850;
let dripsCount = 0;

// calm - taking a breath
let isGradient = false;
let clouds = [];
let sparkles = [];
const CLOUD_COUNT = 8;
let totalClouds = 0;
const CLOUDS_THRESHOLD = 4;
const CLOUD_Y_RANGE = 150;


function setup() {
    createCanvas(1280, 550);
    subCan = new CanShape(width / 2, height / 2);
    
    // debugging 
    // state = 2;

    for (let i = 0; i < 5; i++) {
        memories.push(new Memory());
    }

    // for melancholy setup
    if (state === 1) {
        // background(20, 22, 28);

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

          // for calm setup
    } else if (state === 2) {
        console.log("Setup: Initializing clouds for calm state");
        initializeClouds();
    }
}

function draw() {
    // default scene
    if (state === 0) {
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
                memories.splice(i, 1);
                memories.push(new Memory());

            // check if there's collision (caught)
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
            isTransitioning = true;
        }

    } else if (state === 1) {
        if (isTransitioning) {
            background(random(255), random(255), random(255));
        } else {
            background(20, 22, 28);
        }

        melancholyScene();

    } else if (state === 2) {
        calmScene();
    }

    // is isTransitioning = true;
    if (isTransitioning) {
        transition();
    }
}

// should happen between scenes
function transition() {
    let xOffset = (width - (cols + 20) * 50) / 2;
    let yOffset = (height - (rows - 1) * 50) / 2;

    for (let row = 0; row <= currRow; row++) {
        for (let col = 0; col < (row === currRow ? currCol : cols); col++) {
            let ellipseSize = random(150, 250);

            let x = col * 50 + xOffset;
            let y = row * 50 + yOffset; 

            let opaValue = random(50, 255);
            fill(random(255), random(255), random(255), opaValue);
            ellipse(x, y, ellipseSize, ellipseSize);
        }
    }

    currCol++;
    if (currCol >= cols) {
        currCol = 0;
        currRow++;
    }

    // when the screen is filled with marbles
    if (currRow >= rows) {
        isTransitioning = false;
        caughtMem = 0;
        currRow = 0;  
        currCol = 0;  

        state++;  
    }
}

function melancholyScene() {
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
        ellipse(p.x, p.y, p.size * 2);
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

    if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
        noFill();
        stroke(150, 170, 200, 50);
        ellipse(mouseX, mouseY, 20);
    }

    if (dripsCount >= DROPS_THRESHOLD) {
        isTransitioning = true;  
    }
}

function createNewDrip() {
    drips.push({
        x: random(width),
        y: random(height/3), 
        speed: random(1, 3),
        length: 0,
        maxLength: random(20, 50),
        width: random(1, 2.5),
        opacity: random(100, 200)
    });

    dripsCount++;
}

function mouseMoved() {
  if (random() < 0.3) { 
    for (let i = 0; i < 2; i++) { 
      drips.push({
        x: mouseX + random(-20, 20),
        y: mouseY,
        speed: random(1, 3),
        length: 0,
        maxLength: random(20, 50),
        width: random(1, 2.5),
        opacity: random(100, 200)
      });

      dripsCount++;
    }
  }
}

function mousePressed() {
  // rain splash at mouse
  for (let i = 0; i < 8; i++) {

    drips.push({
      x: mouseX + random(-30, 30),
      y: mouseY + random(-30, 30),
      speed: random(2, 4),
      length: 0,
      maxLength: random(30, 60),
      width: random(1.5, 3),
      opacity: random(150, 255)
    });

    dripsCount++;
  }
}

// had to create this due to bugs in setup() ):
function initializeClouds() {
    console.log("creating clouds");
    clouds = [];
    for (let i = 0; i < CLOUD_COUNT; i++) {
        clouds.push({
            x: random(width),
            y: random(20, CLOUD_Y_RANGE),
            size: random(60, 120),
            speed: random(0.2, 0.5)
        });
    }
}

function calmScene() {
    // debugging 
    console.log("starting calmScene"); 
    console.log("num of clouds:", clouds.length);
    
    // gradient sky
    if (isTransitioning) {
        background(random(255), random(255), random(255));
    } else {
        // Draw gradient sky
        let c1 = color(135, 206, 235);
        let c2 = color(255, 253, 208);
        
        noStroke(); // Reset stroke before gradient
        for (let y = 0; y < height; y++) {
            let inter = map(y, 0, height, 0, 1);
            let c = lerpColor(c1, c2, inter);
            fill(c);
            rect(0, y, width, 1);
        }
    }

    // if clouds array empty -> make clouds!!
    if (clouds.length === 0) {
        for (let i = 0; i < CLOUD_COUNT; i++) {
            clouds.push({
                x: random(width),
                y: random(20, CLOUD_Y_RANGE),
                size: random(60, 120),
                speed: random(0.2, 0.5)
            });
        }
    }

    clouds.forEach((cloud, index) => {
        drawCloud(cloud.x, cloud.y, cloud.size);
        cloud.x += cloud.speed;
    });

    // if cloud is off screen -> replace 
    let cloudsToAdd = 0;
    clouds = clouds.filter(cloud => {
        if (cloud.x > width + cloud.size) {
            cloudsToAdd++;
            return false;
        }
        return true;
    });

    // more clouds :3
    for (let i = 0; i < cloudsToAdd; i++) {
        clouds.push({
            x: -random(50, 100),
            y: random(20, CLOUD_Y_RANGE),
            size: random(60, 120),
            speed: random(0.2, 0.5)
        });
        totalClouds++;
    }

    // sparkles interactivity!!!
    if (mousePressed) {
        sparkles.push({
            x: mouseX + random(-20, 20),
            y: mouseY + random(-20, 20),
            life: 1,
            size: random(5, 15)
        });
    }

    sparkles = sparkles.filter(s => {
        s.life -= 0.02;
        if (s.life > 0) {
            drawSparkle(s);
            return true;
        }
        return false;
    });

    if (totalClouds >= CLOUDS_THRESHOLD) {
        isTransitioning = true;
    }
}

function drawCloud(x, y, size) {
    push(); 
    noStroke();
    fill(255, 255, 255, 200);

    ellipse(x, y, size);
    
    // cloud puffs
    ellipse(x + size/2, y, size * 0.8);
    ellipse(x - size/2, y, size * 0.7);
    ellipse(x, y - size/3, size * 0.6);
    ellipse(x, y + size/4, size * 0.7);
    
    pop(); 
}

function drawSparkle(s) {
    push();
    translate(s.x, s.y);
    rotate(frameCount * 0.02); 
    noStroke();
    fill(255, 200, 0, s.life * 255);
    
    for (let i = 0; i < 4; i++) {
        rotate(PI/2);
        ellipse(0, 0, s.size * s.life, s.size/3 * s.life);
    }
    pop();
}

// debugging
function keyPressed() {
    if (key === '2') {
        console.log("Switching to calm scene");
        state = 2;
        initializeClouds();
    }
}