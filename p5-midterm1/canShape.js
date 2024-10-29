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
        this.MAX = 15;

        // lid animations
        this.lidCenterX = 0;
        this.lidCenterY = -this.height/2;
        this.lidAngle = 0;
        this.dragAmount = 0;
        
    }

    display() {
        push();
        translate(this.xCoor, this.yCoor);
        
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
        
        let angle = atan2(mouseY - (this.yCoor + rightEdgeY),
                         mouseX - (this.xCoor + rightEdgeX));
        rotate(angle);

        ellipse(-((this.width - 30)/2), 0, this.width - 30, this.width/5 - 12);
        pop();
    }

    collectMemory(memory) {
        // store memories
        this.memories.push({
            x: random(-this.width/2 + 20, this.width/2 - 20),
            y: random(-this.height/2 + 20, this.height/2 - 20),
            color: memory.color,
            size: memory.size
        });
    }

    isFull(caughtMem) {
        return caughtMem >= this.MAX;
    }
}