var backgroundImg
var obstaclesGroup,coinsGroup
var score=0;


function preload(){
  coinImage = loadImage("coin.png");
  fishImage = loadImage("fish.png");
  weedImage = loadImage("weed.png");
  waterImage = loadImage("water.png");
  algaeImage = loadImage("algae.png");
}

function setup(){
  canvas = createCanvas(1500,800);
  water = createSprite(500,300,200,200);
  water.addImage(waterImage);
  water.scale = 3;
  water.velocityX = -3

  fish = createSprite(300,200,10,10);
  fish.addImage(fishImage);
  fish.debug = true;
  fish.setCollider("rectangle",0,0,40,40)

obstaclesGroup = new Group();
coinsGroup = new Group();

}
function draw(){
background("blue");
if(water.x<0){
water.x = 100
}

fish.x = mouseX;
fish.y = mouseY;

Obstacle();
Coin();  

if(obstaclesGroup.isTouching(fish)){
  fish.destroy();

}
if(coinsGroup.isTouching(fish)){
  score+1
}
drawSprites();
fill("black")
textSize(20)
text("score:"+score,100,100)

}


function Obstacle(){
  if(frameCount% 150===0){
  var obstacles = createSprite(Math.round(random(200,1200),Math.round(random(200,500))))
  var rand  = Math.round(random(1,2))
  switch(rand){
    case 1:obstacles.addImage(algaeImage)
    break;
    case 2:obstacles.addImage(weedImage)
    break;
    default:break

  }
  obstaclesGroup.debug = true;
  obstacles.setCollider("rectangle",0,0,40,40)
  obstaclesGroup.add(obstacles);
  
}
}

function Coin(){
  if(frameCount% 160===0){
  var coin = createSprite(Math.round(random(100,1200),Math.round(random(200,300))))
   coin.addImage(coinImage);
   var x=Math.round(random(1,10))
   coin.velocityX = Math.sign(-x)
   coin.velocityY = 4;
   coinsGroup.add(coin)
   coin.debug = false;
   coin.setCollider("rectangle",0,0,40,40)
}
}










