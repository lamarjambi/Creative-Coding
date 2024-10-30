// js file for main subject -- can!
// fill the can with diff shapes and colors to represent memories!!
// fill -> catch around 15 memories, have counter for shapes entering 
// using an array probs

class CanShape {
    constructor(xCoor, yCoor) {
        this.xCoor = xCoor;
        this.yCoor = yCoor;
        this.width = 200;
        this.height = 240;
        this.color = color(192, 192, 192);

        // collection of memories -> instances of class Memory
        this.memories = [];
        this.MAX = 7;

        // lid animations
        this.lidCenterX = 0;
        this.lidCenterY = -this.height/2;
        this.lidAngle = 0;
        this.dragAmount = 0;
        this.isClosing = false;
        // this.targetAngle = 0;

        // shaking properties
        this.isShaking = false;
        this.shakeAmount = 10;
        this.shakeDecay = 0.9;
        this.shakeOffset = { x: 0, y: 0 };

        // explosion
        this.exploded = false;
        this.explosionForce = 15;
        this.explosionDecay = 0.95;
        this.explosionRotation = 0;
        this.fadeOut = 255;
        this.canPieces = [];
        this.explosionStarted = false;
    }

    display() {
        if (this.exploded) {
            this.displayExplosion(); 
        } else if (this.isShaking) {
            this.updateShake();
        }
    
        push();
        
        translate(this.xCoor + this.shakeOffset.x, this.yCoor + this.shakeOffset.y);

        push();
        
        // can color 
        noStroke();
        rectMode(CENTER);
        fill(this.color);
        rect(0, 0, this.width, this.height);

        for (let memory of this.memories) {
            fill(memory.color);
            noStroke();
            ellipse(memory.x, memory.y, memory.size);
            triangle(
                memory.x, memory.y,
                memory.x - 10, memory.y - 10,
                memory.x + 10, memory.y + 10
            );
        }

        stroke(0);
        strokeWeight(2);
        fill(this.color);
        
        // top lid
        this.displayTopLid();
        
        // side container lines
        line(-this.width/2, -this.height/2, -this.width/2, this.height/2);
        line(this.width/2, -this.height/2, this.width/2, this.height/2);

        // bottom lid
        ellipse(0, this.height/2, this.width, this.width/5);
        ellipse(0, this.height/2 - 2, this.width - 5, this.width/5 - 2);

        pop();

        // start shaking if the can is full
        if (this.isFull(caughtMem)) {
            let offsetX = random(-this.shakeAmount, this.shakeAmount);
            let ofssetY = random(-this.shakeAmount, this.shakeAmount);

        }
    }

    displayTopLid() {
        fill(this.color);
    
        // top lid
        ellipse(0, -this.height/2, this.width, this.width/5);
        ellipse(0, -this.height/2 + 2, this.width - 5, this.width/5 - 2);
    
        // edges of can and ellipse
        let smallerEllipseWidth = this.width - 30;    
        let rightEdgeX = smallerEllipseWidth/2;  
        let leftEdgeX = -smallerEllipseWidth/2;
        let rightEdgeY = -this.height/2;       
    
        push();
        translate(rightEdgeX, rightEdgeY);
        
        let angle;
        if (this.isClosing) {
            this.lidAngle = lerp(this.lidAngle, PI, 0.1);
            angle = this.lidAngle;

        } else {
            angle = atan2(mouseY - (this.yCoor + rightEdgeY),
                         mouseX - (this.xCoor + rightEdgeX));

        }
        rotate(angle);

        ellipse(-((this.width - 30)/2), 0, this.width - 30, this.width/5 - 12);
        
        pop();

        if (this.isFull) {
            ellipse(this.lidCenterX, this.lidCenterY, )
        }
    }

    displayExplosion() {
        push();
        translate(this.xCoor, this.yCoor);

        for (let piece of this.canPieces) {
            piece.x += piece.dx;
            piece.y += piece.dy;
            piece.rotation += piece.rotationSpeed;
            piece.dx *= this.explosionDecay;
            piece.dy *= this.explosionDecay;
            
            push();
            translate(piece.x, piece.y);
            rotate(piece.rotation);
            fill(this.color[0], this.color[1], this.color[2], this.fadeOut);
            noStroke();
            rect(0, 0, piece.width, piece.height);
            pop();

        for (let memory of this.memories) {
            memory.x += memory.dx;
            memory.y += memory.dy;
            memory.rotation += memory.rotationSpeed;
            memory.dx *= this.explosionDecay;
            memory.dy *= this.explosionDecay;
            
            push();
            translate(memory.x, memory.y);
            rotate(memory.rotation);
            fill(memory.color[0], memory.color[1], memory.color[2], this.fadeOut);
            noStroke();
            ellipse(0, 0, memory.size);
            triangle(-10, -10, 0, 0, 10, 10);
            pop();
        }

        this.fadeOut = max(this.fadeOut - 2, 0);

        pop();
        }
    }

    updateShake() {
        if (this.shakeAmount > 5) {
            this.shakeOffset.x = random(-this.shakeAmount, this.shakeAmount);
            this.shakeOffset.y = random(-this.shakeAmount, this.shakeAmount);
            this.shakeAmount *= 1; 
            this.isShaking = true;
            
        } else {
            this.isShaking = false;
            this.shakeOffset.x = 0;
            this.shakeOffset.y = 0;
        }
    }

    closeLid() {
        this.isClosing = true;
        this.isShaking = true;
        this.shakeAmount = 10; 
    }

    move() {
        if (keyIsDown(LEFT_ARROW)) {
            this.xCoor -= 5;
        }
        if (keyIsDown(RIGHT_ARROW)) {
            this.xCoor += 5;
        }
        this.xCoor = constrain(this.xCoor, this.width/2, width - this.width/2);
    }

    collectMemory(memory) {
        // storing memories
        if (this.memories.length >= this.MAX) {
            // stop pushing into memories
            return;

        } else { 
            this.memories.push({
                x: random(-this.width/2 + 20, this.width/2 - 20),
                y: random(-this.height/2 + 20, this.height/2 - 20),
                color: memory.color,
                size: memory.size
            });
        }

    }

    isFull(caughtMem) {
        let full = (caughtMem === this.MAX);
        if (full && !this.isClosing) {
            this.closeLid();
        }
        return full;
    }

    explode() {
        if (!this.explosionStarted) {
            this.explosionStarted = true;
            this.exploded = true;
    
            for (let i = 0; i < 8; i++) {
                this.canPieces.push({
                    x: 0,
                    y: 0,
                    dx: random(-this.explosionForce, this.explosionForce),
                    dy: random(-this.explosionForce, this.explosionForce),
                    rotation: random(TWO_PI),
                    rotationSpeed: random(-0.2, 0.2),
                    width: this.width / 2,
                    height: this.height / 4
                });
            }

            for (let i = 0; i < 5; i++) { 
                this.memories.push(new Memory(this.xCoor, this.yCoor - this.height / 2)); 
            }

            for (let memory of this.memories) {
                memory.dx = random(-this.explosionForce, this.explosionForce);
                memory.dy = random(-this.explosionForce, this.explosionForce);
                memory.rotation = random(TWO_PI);
                memory.rotationSpeed = random(-0.1, 0.1);
                memory.floating = true; 
            }
        }
    }
    
}