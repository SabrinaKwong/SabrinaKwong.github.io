var rad = 60; // Width of the shape
var xpos, ypos; // Starting position of shape

var xspeed = 2.8; // Speed of the shape
var yspeed = 2.2; // Speed of the shape

var xdirection = 1; // Left or Right
var ydirection = 1; // Top to Bottom

function setup() {
  createCanvas(720, 400);
  noStroke();
  frameRate(70);
  ellipseMode(RADIUS);
  // Set the starting position of the shape
  xpos = width / 2;
  ypos = height / 2;
}

function draw() {

  background(110);
  fill (173,255,47);

  // Update the position of the shape
  xpos = xpos + xspeed * xdirection;
  ypos = ypos + yspeed * ydirection;

  // Test to see if the shape exceeds the boundaries of the screen
  // If it does, reverse its direction by multiplying by -1
  if (xpos > width - rad || xpos < rad) {
    xdirection *= -1;
  }
  if (ypos > height - rad || ypos < rad) {
    ydirection *= -1;
  }

  // Draw the shape
  fill(34,139,34)
  ellipse(xpos, ypos, rad, rad);
}
