//declares the objects
var monkey,monkeyImage;
var ground;
var banana,bananaImage;
var stones,stonesImage;
var bananaGroup,stonesGroup;
var survivalTime=0,score=0;
var gameover,gameoverImage;


//loads animation,sound,images to the objects
function preload(){
  monkeyImage =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  stonesImage = loadImage("obstacle.png");
}

// characteristics of the objects
function setup() {
  createCanvas(400, 400);
  
  monkey = createSprite(40,350,20,20);
  monkey.addAnimation("monkeyImage",monkeyImage);
  monkey.scale = 0.10;
  
  ground = createSprite(200,380,400,40);
  ground.x = ground.width /2;
  ground.velocityX = -4;
  ground.shapeColor="brown";

  bananasGroup = createGroup();
  stonesGroup = createGroup();
}

// code about how the object should act on the canvas
function draw() {
  background("lightBlue");
  
  text("Score : " +score,200,75);
  
  text("Survival Time : " +survivalTime,200,50);
  survivalTime=Math.ceil(frameCount/frameRate());

  if (keyDown("space")&&monkey.y>=320) {
  monkey.velocityY = -10;
  }

  if(monkey.isTouching(stonesGroup)){
  stonesGroup.setVelocityXEach(0);
  bananasGroup.setVelocityXEach(0);
  stonesGroup.setLifetimeEach(-1);
  bananasGroup.setLifetimeEach(-1);
  }
  
  monkey.velocityY = monkey.velocityY + 0.8
  
  if (ground.x < 200) {
  ground.x = ground.width / 2;
  }
  
  if(monkey.isTouching(bananasGroup)){
  score=score+1;
  bananasGroup.destroyEach();
  }
  
  monkey.collide(ground);
  
  banana();
  stone();
  drawSprites();
}

// a seperate function for bananas
function banana(){
//a function for aliens
  if(World.frameCount%80===0){
    bananas=createSprite(600,200,20,20);
    bananas.addImage("banana",bananaImage);
    bananas.y=Math.round(random(280,360));
    bananas.velocityX=-7;
    bananas.scale=0.05;
    bananas.setLifetime=50;
    bananasGroup.add(bananas);
  }
}
// a seperate function for stones
function stone(){
//a function for aliens
  if(World.frameCount%300===0){
    stones=createSprite(600,350,20,20);
    stones.addImage("stone",stonesImage);
    stones.velocityX=-7;
    stones.scale=0.1;
    stones.setLifetime=50;
    stonesGroup.add(stones);
    
  }
}