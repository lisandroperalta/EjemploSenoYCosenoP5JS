let coseno;
let seno;
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
}

function draw() {
  fill(0, 5);
  rect(0, 0, windowWidth, windowHeight);
  coseno = cos(frameCount * 0.05) * 350;
  seno = sin(frameCount * 0.05) * 350;

  translate(windowWidth / 2, windowHeight / 2);

push();
  translate(coseno, 0);
  noStroke();
  fill(0,255,0);
  ellipse(0, 0, 15, 15);
pop();

push();
  translate(0, seno);
  noStroke();
  fill(255,0,0);
  ellipse(0, 0, 15, 15);

pop();
  
  
push();
 
  translate(coseno, seno);
  noStroke();
  fill(255);
  ellipse(0, 0, 15, 15);


}