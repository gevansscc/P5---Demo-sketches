let x,y;

function setup(){
  createCanvas(400,400);
  cx = width/2;
  cy = height/2;
  y = 0;
  rectMode(CENTER); 
}

function draw(){
 background(155);
 translate(cx,cy);
 ellipse(0,y,20,20);

 y += 1;

 if (y > height){
  y = y*-1;
 }

//  translate(x,y);

console.log(y);

}