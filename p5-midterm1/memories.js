// js file for memories

class Memory {
  constructor() {
      this.xCoor = random(width);
      this.yCoor = 0;
      this.size = random(20, 150);
      this.speed = random(2, 5);
      this.color = color(random(150, 255), random(150, 255), random(150, 255));
  }

  move() {
      this.yCoor += this.speed;
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