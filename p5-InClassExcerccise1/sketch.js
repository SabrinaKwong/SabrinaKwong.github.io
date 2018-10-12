
let birds = 3 ;
//let-makes variables smaller in scope
// declare variables here
//float is a  decimanl number 2.0 1.0003


function setup() {
  createCanvas(600, 500);

  birds= birds+ 1;
  console.log("there are birds" + birds + "birds")
  // set background color in grayscale:
  background(150, 0 , 150);

  // draw rectangle
  fill(0,0,255);
  rectMode(CENTER);
    rect(mouseX, mouseY, 80, 200);


  // draw ellipse
  fill(0,255,0);
  ellipse(400, 200, 200, 80);

}

function draw() {

  //
}


function draw() {
  background(150);
  fill(224, 0, 75, 50);
  stroke(255);
  strokeweight(10);
  rectMode(CENTER);
  rect( mouseX, mouseY, 80, mouseY);

}


// write custom functions here
