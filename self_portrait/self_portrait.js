function setup() {
createCanvas(500, 500);
noStroke();

}

function draw() {
background(173,220,224);
 
fill(94, 49, 18); //hairrr
ellipse(258, 255, 328, 350);


fill(237, 193, 154);//color of skin
ellipse(255, 255, 245, 275);

fill(237, 193, 154);//color of skin ear
ellipse( 120, 240 , 60, 75);

//Bang
fill(94, 49, 18);
arc(300, 130, 150, 95, 0, PI + QUARTER_PI, CHORD);
arc(180, 110, 150, 120, 0, 0.75 * Math.PI);


fill(98,157,221);//earing
ellipse( 120, 260 , 20, 20);

fill(0);//right eye
ellipse(300, 235, 40, 30);

fill(0); //left eye
ellipse(210, 235 , 40, 30);

fill(239, 173,120); //triangle nose
triangle(230, 275, 258, 220, 286, 275);


fill(255); //part of mouth
ellipse(255, 320 , 110, 90);

 strokeWeight(4); //mouthlines
  stroke(200, 50);
  line(205, 330, 305, 330);

noStroke();
fill(237, 193, 154); //skintone mouth
rect(200, 275, 120, 30);

//Eyebrows
fill(50);
arc(210, 205, 35, 10, PI, TWO_PI, OPEN);
arc(305, 205, 35, 10, PI, TWO_PI, OPEN);

//neck
  fill(237, 193, 154);
  rect(215, 385, 80, 50);
  
  //bodyy
  fill(252,185, 16);
  rect(140, 400, 220, 130, 50)
   
 fill(237, 193, 154);//more neck
  ellipse( 255, 400 , 80, 50);

   
  //more arm
  fill(252,185, 16);
   beginShape();
   vertex(200, 460);
   vertex(400, 410);
   vertex(440, 360);
   vertex(420, 450);
   endShape(CLOSE);
   
  //hand
  fill(237, 193, 154);
  rect(425, 360, 30, 40);
  rect(425, 340, 10, 20);

  
   
}

 
