// js file for memories

class Memory {
    constructor(x = random(width), y = 0, size = random(20, 150)) {
        this.xCoor = x;
        this.yCoor = y;
        this.size = size;
        this.speed = random(2, 5);
        this.color = color(random(150, 255), random(150, 255), random(150, 255));
        this.floating = false;  
    }
  
    move() {
        if (this.floating) {
            this.yCoor -= this.speed / 2;
        } else {
            this.yCoor += this.speed; 
        }
    }
  
    display() {
        fill(this.color);
        noStroke();
        ellipse(this.xCoor, this.yCoor, this.size);
        triangle(
            this.xCoor, this.yCoor,
            this.xCoor - 10, this.yCoor - 10,
            this.xCoor + 10, this.yCoor + 10
        );
    }
  
    hits(can) {
        return (
            this.yCoor > can.yCoor - can.height/2 &&
            this.yCoor < can.yCoor + can.height/2 &&
            this.xCoor > can.xCoor - can.width/2 &&
            this.xCoor < can.xCoor + can.width/2
        );
    }
}
