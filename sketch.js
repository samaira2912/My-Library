var fixedRect, movingRect;
var rect1,rect2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;

  rect1 = createSprite(100,100,100,100);
  rect1.shapeColor = "pink";

  rect2 = createSprite(200,100,100,100);
  rect2.shapeColor = "purple";
  
}

function draw() {
  background(0,0,0);  

  bounceOff(movingRect,fixedRect); 

  rect1.x = World.mouseX;
  rect1.y = World.mouseY;

  if(isTouching(rect1,rect2)){
  rect1.shapeColor = "brown";
  rect2.y = 300;
  }
  
  drawSprites();
}

