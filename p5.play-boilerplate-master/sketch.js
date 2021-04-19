var invisibleground;
var bg, backgroundimg;
var pancakes;
var obstacle;

function preload(){
  backgroundimg = loadImage("backgroundimg.png")
}
function setup() {
  createCanvas(displayWidth,displayHeight);
  
  invisibleground = createSprite(400,500,800,20)
  invisibleground.visibility = "false"

  bg = createSprite(0,0,4*width,height)
  bg.addImage(backgroundimg)
  bg.x = bg.width
  bg.scale = 2.8
}

function draw() {
 background(255)
  bg.velocityX = -8;
  if(bg.x<0 ){
    bg.x = bg.width/2
  }


  drawSprites();
}