function drawShip(offsetY = 0) {
  let x = 225;
  let y = offsetY - 165;

  background(0, 0, 30);

  push();
  //signal at top
  strokeWeight(5);
  stroke(255, 255, 255);
  line(x + 100, y + 210, x + 100, y + 190);

  strokeWeight(2.5);
  stroke(0, 0, 0);
  fill(250, 250, 250);
  ellipse(x + 100, y + 190, 15);

  //main body
  fill(201, 176, 217);
  ellipse(x + 100, y + 360, 150, 200);

  //top triangle
  fill(154, 114, 196);
  triangle(x + 40, y + 300, x + 160, y + 300, x + 100, y + 210);

  //side triangles
  fill(154, 114, 196);
  triangle(x + 0, y + 370, x + 25, y + 360, x + 33, y + 315);

  fill(154, 114, 196);
  triangle(x + 200, y + 370, x + 175, y + 360, x + 167, y + 315);

  //windows
  strokeWeight(4);
  stroke(255, 255, 255);
  fill(168, 208, 230);
  ellipse(x + 100, y + 300, 35);

  fill(168, 208, 230);
  ellipse(x + 100, y + 355, 50);

  fill(168, 208, 230);
  ellipse(x + 100, y + 410, 35);

  //rocket?
  strokeWeight(2.5);
  stroke(0, 0, 0);
  fill(154, 114, 196);
  rect(x + 55, y + 440, 90, 20);

  //feet
  strokeWeight(5);
  stroke(255, 255, 255);
  line(x + 55, y + 440, x + 25, y + 490);
  line(x + 145, y + 440, x + 175, y + 490);

  fill(250, 250, 250);
  ellipse(x + 25, y + 490, 15);

  fill(250, 250, 250);
  ellipse(x + 175, y + 490, 15);
  pop();
}

let shipY = 0;

function setup() {
  createCanvas(650, 900);
}

// Render the ship
function draw() {
  shipY += 4;
  drawShip(shipY);
}
