background(0, 0, 30);

//signal at top
strokeWeight(5);
stroke(255, 255, 255);
line(100, 210, 100, 190);

strokeWeight(2.5);
stroke(0, 0, 0);
fill(250, 250, 250);
ellipse(100, 190, 15);

//main body
fill(201, 176, 217);
ellipse(100, 360, 150, 200);

//top triangle
fill(154, 114, 196);
triangle(40, 300, 160, 300, 100, 210);

//side triangles
fill(154, 114, 196);
triangle(0, 370, 25, 360, 33, 315);

fill(154, 114, 196);
triangle(200, 370, 175, 360, 167, 315);

//windows
strokeWeight(4);
stroke(255, 255, 255);
fill(168, 208, 230);
ellipse(100, 300, 35);

fill(168, 208, 230);
ellipse(100, 355, 50);

fill(168, 208, 230);
ellipse(100, 410, 35);

//rocket?
strokeWeight(2.5);
stroke(0, 0, 0);
fill(154, 114, 196);
rect(55, 440, 90, 20);

//feet
strokeWeight(5);
stroke(255, 255, 255);
line(55, 440, 25, 490);
line(145, 440, 175, 490);

fill(250, 250, 250);
ellipse(25, 490, 15);

fill(250, 250, 250);
ellipse(175, 490, 15);
