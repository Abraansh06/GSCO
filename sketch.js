var car;
var bar;
var speed,weight;


function setup() {
  createCanvas(800,800);

  car=createSprite(50, 200, 50, 50);
  car.shapeColor="yellow";

  bar=createSprite(400, 200, 50, 50);
  bar.shapeColor="white";

  speed=random(55,90);
  weight=random(400,150)
}

function draw() {
  background(0);  
  drawSprites();


  if(keyDown="space"){
    car.velocityX=speed; 
  }

if(bar.x-car.x< (car.width+bar.width)/2)
{
car.velocityX=0;
var deformation=0.5 * weight * speed* speed/22509;
if(deformation<180)
{
car.shapeColor=color(255,0,0);
}
if(deformation<180 && deformation>100)
{
car.shapeColor=color(230,230,0);
}
if(deformation<100)
{
car.shapeColor=color(0,255,0);
}
}

}
