void setup() {
  size(800, 800);
}

void draw() {
  background(#E8D6A8);
  stroke(255);
  
  noStroke();
  
  // top left triangle
  fill(189, 33, 34, 63);
  triangle(280, 0, 0, 120, 0, 0);
  
  // bottom left red shape
  fill(189, 33, 34, 63);
  quad(0, 714, 326, 775, 299, 799, 0, 799);
  
  // red quad next to triangle
  fill(189, 33, 34, 63);
  quad(154, 52, 127, 65, 537, 154, 525, 123);
  
  // blue quad next to red quad
  fill(69, 140, 196, 63);
  quad(127, 65, 98, 77, 583, 243, 567, 196);
  
  // teel quad next to blue quad
  fill(0, 163, 156, 63);
  quad(192, 109, 11, 170, 138, 223, 339, 160);
  
  // purpule quad at the near bottom
  fill(156, 64, 113, 63);
  quad(87, 549, -80, 604, 600, 691, 678, 634);
  
  // red quad close to middle
  fill(189, 33, 34, 63);
  quad(0, 473, 0, 519, 690, 568, 684, 531);
  
  // red curve line
  stroke(189, 33, 34, 63);
  strokeWeight(15);
  strokeCap(SQUARE);
  noFill();
  
  beginShape();
  curveVertex(603, 71); // Control point 1
  curveVertex(603, 71); // Start point (duplicated to define start)
  curveVertex(700, 80); // Control point 2
  curveVertex(800, 114); // Control point 3
  curveVertex(800, 114); // End point (duplicated to define end)
  endShape();
  
  strokeWeight(2);
  line(0, mouseY, width, mouseY);
  line(mouseX, 0, mouseX, height);
}

void mousePressed() {
  print("MouseX is a ");
  print(mouseX);
  print(",");
  print("MouseY is a ");
  println(mouseY);
}
