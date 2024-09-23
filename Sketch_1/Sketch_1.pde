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

  // orange triangle on near top right
  noStroke();
  fill(244, 100, 30, 63);
  triangle(800, 280, 598, 200, 800, 525);

  // red quad next to triangle
  fill(189, 33, 34, 63);
  quad(154, 52, 127, 65, 537, 154, 525, 123);

  // red traingle top right
  fill(189, 33, 34, 63);
  triangle(615, 0, 800, 0, 800, 47);

  // blue quad next to red quad
  fill(69, 140, 196, 63);
  quad(127, 65, 98, 77, 583, 243, 567, 196);

  // teel quad next to blue quad
  fill(0, 163, 156, 63);
  quad(218, 118, 11, 239, 167, 292, 371, 170.5);

  quad(438, 411, 364, 464, 140, 432, 221, 382);
  triangle(94, 433, 94, 457, 40, 457);
  triangle(890, 610, 709, 605, 675, 685);

  // purpule quad at the near bottom
  fill(156, 64, 113, 63);
  quad(87, 549, -80, 604, 600, 691, 678, 634);

  // teel quad on purple
  fill(0, 163, 156, 63);
  quad(0, 595, 176, 597, 97, 627, 0, 614);

  // red quad close to middle
  fill(189, 33, 34, 63);
  quad(0, 473, 0, 519 - 9, 690, 544 - 9, 667, 496);

  // blue quad higher than red in middle
  fill(69, 140, 196, 63);
  quad(387, 487.8, 387, 457, 649, 428, 700, 460);

  // red curve line
  stroke(189, 33, 34, 63);
  strokeWeight(15);
  strokeCap(SQUARE);
  noFill();

  beginShape();
  curveVertex(603, 71);
  curveVertex(603, 71);
  curveVertex(700, 80);
  curveVertex(800, 114);
  curveVertex(800, 114);
  endShape();

  // light gray shape from left to right
  noStroke();
  fill(#5b6d7b);
  quad(0, 231, 531, 433.5, 478, 441 + 3, 0, 288 + 3);

  // light gray quad on right
  noStroke();
  fill(#5b6d7b);
  quad(660, 488, 800, 500 + 6, 800, 549 + 6, 689, 533.5);

  // light gray quad at the bottom
  noStroke();
  fill(#5b6d7b);
  quad(108, 662 + 12, 800, 713 + 7 + 12, 800, 770 + 7 - 4 + 12, 258, 727 - 4 + 12);

  // dark gray lines on the left side
  noStroke();
  fill(#14272e);
  quad(0 - 7, 705, 0 - 7, 656, 60 - 7, 630, 60 - 7, 679);
  fill(#14272e);
  quad(0 - 7, 100, 0 - 7, 154, 60 - 7, 177, 60 - 7, 130);
  fill(#14272e);
  quad(37 - 7, 152, 60 - 7, 165, 60 - 7, 630, 39 - 7, 670);

  // dark gray lines on top
  noStroke();
  fill(#14272e);
  quad(0, 41, 149, 4, 133, 26, 0, 61);
  quad(149, 4, 800, 77, 800, 105, 133, 26);

  // orange shape on top right
  noStroke();
  fill(#f4641e);
  quad(437 - 11, 0, 526 - 11, 0, 682 - 11, 238 + 6, 541 - 11, 163 + 6);
  quad(614, 215, 800, 160, 800, 255, 728, 271);

  // light blue-ish gray on the left
  stroke(#7b7c98);
  strokeWeight(26);
  strokeCap(PROJECT);
  noFill();

  beginShape();
  curveVertex(169, 398);
  curveVertex(169, 398);
  curveVertex(45, 440);
  curveVertex(0 - 35, 501);
  curveVertex(0 - 35, 501);
  endShape();

  strokeCap(ROUND);
  beginShape();
  curveVertex(96, 650);
  curveVertex(96, 650);
  curveVertex(43, 625);
  curveVertex(0 - 35, 653);
  curveVertex(0 - 35, 653);
  endShape();

  // dark gray line at bottom
  stroke(#14272e);
  strokeWeight(28);
  line(800, 656, 285, 800 + 12);

  // green shape (smaller)
  noStroke();
  fill(#7eba87);
  quad(260 - 12, 366, 366, 288, 373, 312, 312 - 10, 368);
  quad(366, 288, 468, 290, 449, 315, 365, 312);
  quad(468, 290, 622 + 14, 384, 566 + 8, 390, 449, 315);

  // green shape (larger)
  noStroke();
  fill(#018a60);
  quad(115, 350, 281, 267, 282, 288, 178, 351);
  quad(281, 267, 357, 264, 350, 286, 282, 288);
  quad(357, 264, 694, 401, 623, 406, 350, 286);

  // pink shape :3
  noStroke();
  fill(#ea4e7e);
  quad(179, 385, 704, 266, 780, 311, 184.5, 403);
  triangle(704, 266, 505, 291, 179, 389);

  // purple stripe top right
  noStroke();
  fill(#9a2e84);
  quad(485, 0, 800, 200, 800, 215, 438, 0);

  // red stripes top
  stroke(#d0272c);
  strokeCap(SQUARE);
  strokeWeight(4);
  line(735, 9, 115, 270);
  line(686, 107, 180, 296);

  // dark blueish gray from across canvas top
  stroke(#005797);
  strokeCap(SQUARE);
  strokeWeight(7);
  line(266, 0, 77, 131);

  // blue quad in middle
  noStroke();
  fill(#4392ca);
  quad(43, 524 + 17, 188, 491 + 17, 768, 567 + 17, 655, 606 + 17);

  // dark blueish gray from across canvas
  stroke(#005797);
  strokeWeight(5);
  line(800, 348, 0, 772);

  // dark blueish gray from across canvas top  right
  stroke(#005797);
  strokeWeight(5);
  line(800, 132, 75, 311);

  // teel stripes
  stroke(0, 163, 156);
  strokeWeight(12);
  strokeCap(PROJECT);
  line(800, 746, 710, 800);
  line(800, 700, 634, 800);
  line(650, 735, 571, 800);
  strokeWeight(8);

  // dark blue stripes
  stroke(#005797);
  line(669, 692, 604, 706);
  line(634, 670, 708, 624);
  noStroke();
  fill(#005797);
  quad(573, 686, 569, 675, 627, 606, 650, 628);

  // white tiny stripes
  stroke(225, 225, 225, 53);
  strokeWeight(2);
  noFill();

  beginShape();
  curveVertex(482, 426);
  curveVertex(482, 426);
  curveVertex(269, 512);
  curveVertex(140, 585);
  curveVertex(140, 585);
  endShape();

  beginShape();
  curveVertex(429, 434);
  curveVertex(429, 434);
  curveVertex(265, 516);
  curveVertex(136, 590);
  curveVertex(136, 590);
  endShape();

  beginShape();
  curveVertex(382, 406);
  curveVertex(382, 406);
  curveVertex(254, 507);
  curveVertex(154, 608);
  curveVertex(154, 608);
  endShape();

  line(459, 465, 378, 614);
  line(450, 564, 349, 609);

  line(0, 687, 65, 685);
  line(65, 685, 66, 729);
  line(65, 685, 0, 720);

  // dark gray curved stripe
  stroke(20, 39, 46);
  strokeWeight(2);
  strokeCap(PROJECT);
  noFill();

  beginShape();
  curveVertex(0, 412);
  curveVertex(0, 412);
  curveVertex(191, 354);
  curveVertex(460, 277);
  curveVertex(460, 277);
  endShape();

  // dark gray arc shaped stripes on bottom right
  stroke(0);
  noFill();
  // arc(175, 35, 50, 50, -PI / 6, PI / 6, OPEN); // fix this

  // green linr on top and green wobble at bottom
  stroke(#71a843);
  strokeWeight(3);
  beginShape();
  curveVertex(58, -30);
  curveVertex(58, -30);
  curveVertex(134, 8);
  curveVertex(172, 47);
  curveVertex(172, 47);
  endShape();

  fill(#71a843);
  noStroke();
  ellipse(676, 684, 31, 31);
  triangle(735, 701, 678, 667.7, 668, 698.2);

  // yellow skiked circles
  fill(#ebb80d);
  ellipse(237, 709, 42, 42);
  // angle(251, 694, 264, 700, 254, 715);
  triangle(259, 699, 250, 674, 236, 693);
  triangle(244, 691, 264, 686, 258, 717);
  triangle(220, 696, 213, 678, 205, 698);
  triangle(220, 696, 188, 698, 226, 729);
  triangle(256, 710, 264, 732, 233, 729);
  triangle(234, 722, 237, 743, 253, 727);

  fill(#fa7c0e);
  ellipse(471, 301, 26, 26);
  triangle(485, 299, 489, 319, 458, 309);
  triangle(483, 296, 476, 277, 465, 292);
  triangle(471, 290, 454, 280, 461, 300);
  triangle(466, 298, 442, 291, 465, 308);

  ellipse(453, 342, 40, 40);
  triangle(448, 329, 418, 309, 438, 342);
  triangle(468, 350, 469, 361, 454, 347);
  triangle(464, 326, 447, 310, 444, 325);
  triangle(438, 337, 420, 329, 440, 354);

  ellipse(425, 381, 30, 30);
  triangle(432, 371, 419, 355, 425, 371);
  triangle(419, 372, 401, 362, 417, 389);
  triangle(413, 382, 414, 400, 427, 386);
  triangle(426, 386, 431, 409, 439, 383);

  fill(#ebb80d);
  ellipse(471, 378, 23, 23);
  triangle(472, 372, 485, 364, 477, 379);
  triangle(478, 371, 467, 361, 464, 371);
  triangle(464, 368, 453, 377, 464, 381);
  triangle(464, 379, 453, 380, 471, 391);

  // red marks
  fill(#bd254e);
  triangle(373, 294, 367, 281, 362, 298);
  triangle(366, 291, 379, 291, 365, 300);
  stroke(#bd254e);
  strokeWeight(3);
  line(358, 286, 359, 293);
  ellipse(804, 607, 26, 26);

  noFill();
  stroke(#bd254e);
  ellipse(-3, 384, 24, 24);
  ellipse(-3, 359, 24, 24);
  ellipse(-3, 320, 24, 24);

  // black ashes thingies (last layer)
  stroke(0, 0, 0, 78);
  strokeWeight(2);
  line(483, 312, 545, 257);
  line(545, 257, 571, 259);
  line(474, 345, 543, 310);
  line(543, 310, 583, 303);
  line(583, 303, 608, 312);
  line(247, 561, 285, 590);

  line(308, 0, 0, 523);

  line(800, 10, 613, 112);
  line(731, 0, 593, 55);
  line(757, 0, 604, 101);

  noFill();
  beginShape();
  curveVertex(410, 381);
  curveVertex(410, 381);
  curveVertex(383, 396);
  curveVertex(355, 385);
  curveVertex(355, 385);
  endShape();
  beginShape();
  curveVertex(295, 362);
  curveVertex(295, 362);
  curveVertex(347, 328);
  curveVertex(372, 256);
  curveVertex(372, 256);
  endShape();

  strokeCap(ROUND);
  beginShape();
  curveVertex(548, 442);
  curveVertex(548, 442);
  curveVertex(663, 402);
  curveVertex(745, 547);
  curveVertex(747, 800);
  curveVertex(747, 800);
  endShape();

  line(91, 0, 91, 572);

  stroke(225, 225, 225, 53);
  strokeWeight(2);
  line(153, 800, 153, 427);

  // squiggly thingies gray ashy idk
  fill(32, 47, 66, 63);
  noStroke();
  ellipse(63, 225, 80, 100);
  ellipse(17, 324, 80, 80);
  ellipse(10, 254, 80, 80);
  ellipse(8, 155, 110, 100);
  ellipse(73, 310, 110, 100);
  ellipse(28, 380, 100, 120);

  noFill();
  stroke(32, 47, 66, 76);
  ellipse(63, 225, 60, 120);
  ellipse(17, 324, 70, 30);
  ellipse(63, 225, 50, 60);
  ellipse(17, 324, 60, 60);

  fill(32, 47, 66, 63);
  noStroke();
  ellipse(655, 14, 80, 100);
  ellipse(751, 27, 80, 80);
  ellipse(635, 99, 80, 80);
  ellipse(585, 46, 110, 100);
  ellipse(683, 147, 110, 100);
  ellipse(703, 80, 100, 120);
  ellipse(588, 99, 80, 80);
  ellipse(775, 134, 60, 90);

  noFill();
  stroke(32, 47, 66, 76);
  ellipse(751, 27, 60, 120);
  ellipse(635, 99, 70, 30);
  stroke(#953c7c);
  ellipse(585, 46, 50, 60);
  ellipse(683, 147, 60, 60);


  stroke(#ad4381);
  noFill();
  beginShape();
  curveVertex(70, 234);
  curveVertex(70, 234);
  curveVertex(15, 201);
  curveVertex(24, 276);
  curveVertex(24, 276);
  endShape();

  beginShape();
  curveVertex(63, 465);
  curveVertex(63, 465);
  curveVertex(77, 450);
  curveVertex(61, 437);
  curveVertex(84, 382);
  curveVertex(56, 353);
  curveVertex(90, 299);
  curveVertex(44, 246);
  curveVertex(44, 246);
  endShape();

  stroke(32, 47, 66, 90);
  noFill();
  beginShape();
  curveVertex(140, 278);
  curveVertex(140, 278);
  curveVertex(164, 273);
  curveVertex(222, 375);
  curveVertex(238, 501);
  curveVertex(238, 501);
  endShape();

  stroke(#bacbbb);
  noFill();
  beginShape();
  curveVertex(69, 287);
  curveVertex(69, 287);
  curveVertex(96, 249);
  curveVertex(121, 283);
  curveVertex(121, 283);
  endShape();

  stroke(0);
  noFill();
  beginShape();
  curveVertex(364, 151);
  curveVertex(364, 151);
  curveVertex(310, 219);
  curveVertex(320, 321);
  curveVertex(208, 386);
  curveVertex(208, 386);
  endShape();

  beginShape();
  curveVertex(268, 605);
  curveVertex(268, 605);
  curveVertex(296, 640);
  curveVertex(372, 631);
  curveVertex(372, 646);
  curveVertex(372, 646);
  endShape();
  beginShape();
  curveVertex(384, 637);
  curveVertex(384, 637);
  curveVertex(415, 601);
  curveVertex(497, 661);
  curveVertex(513, 646);
  curveVertex(513, 646);
  endShape();
  beginShape();
  curveVertex(376, 615);
  curveVertex(376, 615);
  curveVertex(361, 603);
  curveVertex(332, 606);
  curveVertex(311, 584);
  curveVertex(297, 597);
  curveVertex(297, 597);
  endShape();

  stroke(0);
  beginShape();
  curveVertex(548, 48);
  curveVertex(548, 48);
  curveVertex(575, 21);
  curveVertex(637, 12);
  curveVertex(637, 12);
  endShape();

  // mouswe
  //strokeWeight(2);
  //line(0, mouseY, width, mouseY);
  //line(mouseX, 0, mouseX, height);

  stroke(71, 71, 71, 63);
  strokeWeight(1);
  noFill();


  stroke(100, 100, 100, 150);
  strokeWeight(1);

  noFill();
  beginShape();
  curveVertex(100, 500);
  curveVertex(100, 500);
  curveVertex(150, 480);
  curveVertex(200, 510);
  curveVertex(250, 490);
  curveVertex(300, 520);
  curveVertex(350, 500);
  endShape();

  beginShape();
  curveVertex(400, 600);
  curveVertex(400, 600);
  curveVertex(450, 580);
  curveVertex(500, 610);
  curveVertex(550, 590);
  curveVertex(600, 620);
  curveVertex(650, 600);
  endShape();

  beginShape();
  curveVertex(200, 400);
  curveVertex(200, 400);
  curveVertex(250, 380);
  curveVertex(300, 410);
  curveVertex(350, 390);
  curveVertex(400, 420);
  curveVertex(450, 400);
  endShape();

  beginShape();
  curveVertex(300, 300);
  curveVertex(300, 300);
  curveVertex(350, 280);
  curveVertex(400, 310);
  curveVertex(450, 290);
  curveVertex(500, 320);
  curveVertex(550, 300);
  endShape();

  beginShape();
  curveVertex(500, 200);
  curveVertex(500, 200);
  curveVertex(550, 180);
  curveVertex(600, 210);
  curveVertex(650, 190);
  curveVertex(700, 220);
  curveVertex(750, 200);
  endShape();

  beginShape();
  curveVertex(150, 600);
  curveVertex(150, 600);
  curveVertex(200, 580);
  curveVertex(250, 610);
  curveVertex(300, 590);
  curveVertex(350, 620);
  curveVertex(400, 600);
  endShape();

  noFill();
  beginShape();
  curveVertex(50, 600);
  curveVertex(50, 600);
  curveVertex(100, 580);
  curveVertex(150, 610);
  curveVertex(200, 590);
  curveVertex(250, 620);
  curveVertex(300, 600);
  endShape();

  beginShape();
  curveVertex(350, 500);
  curveVertex(350, 500);
  curveVertex(400, 480);
  curveVertex(450, 510);
  curveVertex(500, 490);
  curveVertex(550, 520);
  curveVertex(600, 500);
  endShape();

  beginShape();
  curveVertex(150, 400);
  curveVertex(150, 400);
  curveVertex(200, 380);
  curveVertex(250, 410);
  curveVertex(300, 390);
  curveVertex(350, 420);
  curveVertex(400, 400);
  endShape();

  beginShape();
  curveVertex(400, 300);
  curveVertex(400, 300);
  curveVertex(450, 280);
  curveVertex(500, 310);
  curveVertex(550, 290);
  curveVertex(600, 320);
  curveVertex(650, 300);
  endShape();

  beginShape();
  curveVertex(600, 200);
  curveVertex(600, 200);
  curveVertex(650, 180);
  curveVertex(700, 210);
  curveVertex(750, 190);
  curveVertex(800, 220);
  curveVertex(850, 200);
  endShape();

  beginShape();
  curveVertex(200, 100);
  curveVertex(200, 100);
  curveVertex(250, 80);
  curveVertex(300, 110);
  curveVertex(350, 90);
  curveVertex(400, 120);
  curveVertex(450, 100);
  endShape();
}


//void mousePressed() {
//  print("MouseX is a ");
//  print(mouseX);
//  print(",");
//  print("MouseY is a ");
//  println(mouseY);
//}
