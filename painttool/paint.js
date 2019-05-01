var img;
var initials ='sk'; //itsa me, Sabrina
var choice = '1'; // starting choice, so it is not empty
var screenbg =(240); // close to white
var lastscreenshot=61; // last screenshsot never taken



function preload() {
// preload() runs once, it may make you wait
  img = loadImage('ta.jpg');  // ta 1 image
  img2 = loadImage('ta1.jpg'); 
  img3 = loadImage('ta2.jpg'); 
  img4 = loadImage('ta3.jpg'); 
}


function setup() {
createCanvas(windowWidth, windowHeight);  // canvas size
background(screenbg);   // use our background screen color

}


function draw() {
  
 // background(220);
  if (keyIsPressed) {
    choice = key; // set choice to the key that was pressed
    clear_print(); // check to see if it is clear screen or save image
  }
  if (mouseIsPressed){
    newkeyChoice(choice);  // if the mouse is pressed call newkeyChoice
  }
}

function newkeyChoice(toolChoice) { //toolchoice is the key that was pressed
  // the key mapping if statements that you can change to do anything you want.
  // just make sure each key option has the a stroke or fill and then what type of 
  // graphic function

 if (toolChoice == '1' ) {  // normal black strokes
   //strokeWeight(1);
    stroke(09);
    line(mouseX, mouseY, pmouseX, pmouseY);
    
  } else if (toolChoice == '2') { // Crazy triangle
    triangle(mouseX, mouseY, 20, 20,30, 30);
    
    
  } else if (toolChoice == '3') { // doted line
    stroke(300, 100, 0, 80);
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
  
  else if (toolChoice == '4') {  //skin tone line
   strokeWeight(4);
    stroke(234, 188, 150);
    line(mouseX, mouseY, pmouseX, pmouseY);
    
    
  } else if (key == '5') { // this tool calls the function
    noStroke();
    rainbow();
    // make testbox d4o something!
    line(mouseX, mouseY, pmouseX, pmouseY);
  } 
  
   else if (toolChoice == '6') {   //red line, welllll-kinda red
    stroke(163,31,42);
    line(mouseX, mouseY, pmouseX, pmouseY);
    
    
  } else if (toolChoice == '7') {   //green squares

    fill(100, 200, 100);
    rect(mouseX, mouseY, 20, 20);
    
    
  } else if (toolChoice == '8') { //small "glittery" circles
    noStroke();
    fill(196,188,171, 50);
    ellipse (mouseX, mouseY, 20, 20);
    
    
  } else if (toolChoice == '9') {   //small rectangles, slight gliterry
    noStroke();
    fill(234, 185, 169, 70);
    rect(mouseX, mouseY, 10, 10);
    
    
  } else if (toolChoice == '0') {     //this will have small random dots
    stroke(0, 0);
    fill(random(255), random(255), random(255), random(255));
    ellipse(mouseX, mouseY, 5, 5);
     } 
  
  else if (toolChoice == 'q' || toolChoice == 'Q') { // q places the image we pre-loaded
    image(img, mouseX, mouseY);
    
  }
  
    else if (toolChoice == 'w' || toolChoice == 'W') { // w places the image we pre-loaded of "ta"
    image(img2, mouseX, mouseY);
  }
  
    else if (toolChoice == 'e' || toolChoice == 'E') { // e places the image we pre-loaded
    image(img3, mouseX, mouseY);
    
  }
  
    else if (toolChoice == 'r' || toolChoice == 'R') { // r places the image we pre-loaded
    image(img4, mouseX, mouseY);
    
  }
  
  
    else if (toolChoice == 'd' || toolChoice == 'D') { // supposed to erase
    screenbg(240, mouseX, mouseY, pmouseX, pmouseY);
    
  }
  
  
  
 }
 
function rainbow() {
// this is a test function that will show you how you can put your own functions into the sketch
  x = mouseX;
  y = mouseY;
  fill(0, 0, 255);
  rect(10+ x, 10+y, 5, 5);
  fill(0, 255, 0);
  rect(x-3, y-6, 5, 5);
  fill(255, 0, 0);
  rect(x,y,x+4, y+10);
}



function self_portrait(){
// this functSion draws a self portrait when called
// you will need to call this, perhaps as one of your keypress functions7
  
}



function clear_print() {
// this will do one of two things, x clears the screen by resetting the background
// p calls the routine saveme, which saves a copy of the screen
  if (key == 'o' || key == 'O') {
    background(screenbg); // set the screen back to the background color
  } else if (key == 's' || key == 'S') {
     saveme();  // call saveme which saves an image of the screen
  }
}



function saveme(){
    //this will save the name as the intials, date, time and a millis counting number.
    // it will always be larger in value then the last one.
  filename=initials+day() + hour() + minute() +second();
  if (second()!=lastscreenshot) { // don't take a screenshot if you just took one
    saveCanvas(filename, 'jpg');
  }
  lastscreenshot=second(); // set this to the current second so no more than one per second
  
}
