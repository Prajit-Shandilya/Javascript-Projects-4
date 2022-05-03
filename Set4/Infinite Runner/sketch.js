var monkey_image,monkey,obstacle_image,
    obstacle,banana_image,banana,bg_image,bg;



function preload(){
  monkey_image=loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png",
"Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png",
  "Monkey_08.png","Monkey_09.png","Monkey_10.png" );                      

  bg_image=loadImage("jungle.jpg");
  
  banana_image=loadImage("Banana.png");
  
  obstacle_image=loadImage("stone.png");
  
}

                         
                         
                         


function setup() {
  createCanvas(windowWidth,windowHeight);
   PLAY=1;
   END=0;
   gameState=1;
  
   score=0;
  
  bg=createSprite(windowWidth/2,windowHeight/2,windowWidth+windowWidth,windowHeight+windowHeight);
  bg.addImage("bb",bg_image);

   bananaGroup=createGroup();
  obstaclesGroup=createGroup();
  
  ground=createSprite(windowWidth/2,windowHeight-10,windowWidth,windowHeight/20);
  ground.visible=false;
  
  monkey=createSprite(windowWidth/10+23,windowHeight-50,windowWidth/20,windowHeight/20);
  monkey.addAnimation("clu",monkey_image);
  monkey.scale=0.1+0.1/2;
}


function draw(){
 background(255);
  bg.velocityX=-5;
  if(bg.x<windowWidth/2){
  bg.x=bg.width/2
  }
  
  if(gameState===PLAY){
  
  if(keyDown("space")&& monkey.y>=windowHeight/2+59){
    monkey.velocityY=-12;
  }
monkey.velocityY=monkey.velocityY+1;  





banana();
obstacle();
scoring();

 }
  monkey.collide(ground);
  
     drawSprites();
     
  text("Score:"+score,windowWidth/2-50,windowHeight/10+10);
  
 
  if(score<0){
   text("Game Over Press R to restart",windowWidth/4,windowHeight/4+50);
   gameState=END;
   reset();
 }
}
/*function banana(){
  if(frameCount%200===0){
   banane = createSprite(windowWidth,windowHeight/2,windowWidth/20,windowHeight/20);
    banane.addImage("uuu",banana_image);
    banane.y=random(windowWidth/4+20,windowHeight/2);
    banane.scale=0.1;
    banane.velocityX=-4;
    banane.lifetime=-100;
    bananaGroup.add(banane);
  }
}
function obstacle(){
  if(frameCount%300===0){
    obs = createSprite(windowWidth,windowHeight-12,windowWidth/20,windowHeight/20);
    obs.addImage("Ste",obstacle_image);
    obs.velocityX=-5;
    obs.scale=0.2;
    obs.lifetime=-80;
    obstaclesGroup.add(obs);
  }
}
function scoring(){
  if(monkey.isTouching(bananaGroup)){
    bananaGroup.destroyEach();
    score=score+2;
    monkey.scale=monkey.scale+0.1/6;
  }
if(monkey.isTouching(obstaclesGroup)){
  monkey.scale=monkey.scale-0.1/6;
  obstaclesGroup.destroyEach();
  score=score-2;
}
}
 function reset(){
    if(keyDown("r")){
      gameState=PLAY;
      score=0;
      monkey.scale=0.1+0.1/2;
      
    }
  }