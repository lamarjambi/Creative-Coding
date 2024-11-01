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
        this.lidAngle = PI;
        this.isClosing = false;

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
        let rightEdgeY = -this.height/2;       
    
        push();
        translate(rightEdgeX, rightEdgeY);
        
        let angle = 0;
        if (this.isClosing) {
            if (this.lidAngle > angle) {
                this.lidAngle -= 0.02;
            } 

            if (Math.abs(this.lidAngle - angle) < 0.02) {
                this.lidAngle = angle; 
                this.isShaking = false;
                this.shakeAmount = 0;
                this.shakeOffset = { x: 0, y: 0 };
            }

        } else {
            this.lidAngle = atan2(mouseY - (this.yCoor + rightEdgeY), mouseX - (this.xCoor + rightEdgeX));
        }

        rotate(this.lidAngle);
        ellipse(-((this.width - 30)/2), 0, this.width - 30, this.width/5 - 12);

        pop();

        if (this.isFull) {
            ellipse(this.lidCenterX, this.lidCenterY, )
        }
    }

    updateShake(amount = this.shakeAmount) {
        if (this.shakeAmount > 5 || amount > 5) {
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

}