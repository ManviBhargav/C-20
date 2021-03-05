var fixedRect, moveRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(500,400,50,70);
  fixedRect.shapeColor= "lightblue";
  fixedRect.debug = true;

  moveRect = createSprite(600,400,70,50);
  moveRect.shapeColor= "lightblue";
  moveRect.debug = true;
}

function draw() {
  background(255,255,255);  
  moveRect.x= World.mouseX;
  moveRect.y= World.mouseY;

  if(moveRect.x-fixedRect.x< moveRect.width/2+fixedRect.width/2
  &&fixedRect.x-moveRect.x<fixedRect.width/2+moveRect.width/2
  &&moveRect.y-fixedRect.y< moveRect.height/2+fixedRect.height/2
  &&fixedRect.y-moveRect.y<fixedRect.height/2+moveRect.height/2){
    fixedRect.shapeColor="pink";
    moveRect.shapeColor="pink";
  }

  else{
    fixedRect.shapeColor="lightblue";
    moveRect.shapeColor="lightblue";
  }
  drawSprites();
}