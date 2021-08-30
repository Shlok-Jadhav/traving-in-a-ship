var ship ,ship_floating;
var sea

function preload(){;
ship_floating = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
sea = loadImage("sea.png");
}

function setup(){
  createCanvas(2000,2000);

  //create a ship sprite
  ship = createSprite(935,380,0,0);
  ship.addAnimation("floating" ,ship_floating);
  sea = createSprite(930,375,0,0);
}

function draw() {
  background("white");
  
drawSprites();
}