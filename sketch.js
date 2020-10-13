var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;
var ground, invisibleGround;
//var bannana:
var bannana1, bannanaG;

function preload(){
  
  bannana1 = loadImage ("banana.png");
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
  
  
 
}



function setup() {
  createCanvas(600, 600);
  
  monkey=createSprite(80,200,20,20);
  monkey.addAnimation("monkey",monkey_running);
  monkey.scale=0.11;
  
  ground = createSprite(400,250,900,20);
  ground.velocityX=-4;
  
  console.log(monkey.y)
  
  invisibleGround = createSprite(300,250,600,10);
  invisibleGround.visible = false;
  
  bannanaG = new Group();
  obstaclesGroup = new Group();
  
  score=0;

}


function draw() {
   background("white");
  if (ground.x < 450){
      ground.x = ground.width/2;
    }
  var survivalTime =0;
  stroke("white");
  textSize(20);
  fill("white");
  text("Score:" + score, 500, 50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time: "+ survivalTime, 100, 50);
  
  
   if(keyDown("space")&& monkey.y >= 10) {
        monkey.velocityY = -12;
    }
    
    //add gravity
   monkey.velocityY = monkey.velocityY + 0.8
   monkey.collide(invisibleGround);
  
   food();
   obstacles();
   drawSprites();
}

function food() {
 //bannana=createSprite(80,315,20,20);
 // bannana.addAnimation("fruit",bannana1);
 //bannana.scale=0.1;
 //position = Math.round(random(1,2)); 
 //bannana.y=Math.round(random(120,200));
 if (World.frameCount % 80 === 0) {
 var bannana = createSprite(600,Math.round(random(120,200)), 10, 10);
  bannana.addImage("fruit",bannana1);
  bannana.velocityX = -3;
  bannana.lifetime = 200;
  bannana.scale = 0.1;
  bannanaG.add(bannana);
 }
}

function obstacles() {

 if (frameCount % 300 === 0){
   var obstacle = createSprite(600,165,10,40);
   obstacle.velocityX = -4;
   obstacle.addImage("obstacle",obstaceImage);
  //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.05;
    obstacle.lifetime = 300;
   
   //add each obstacle to the group
    obstaclesGroup.add(obstacle);
 }

  
}

