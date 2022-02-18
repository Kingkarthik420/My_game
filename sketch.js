var ObsGroup
var gameState;
var PLAY =1;
var END = 0 ;
var gameState = PLAY;
 
function preload(){
bg=loadImage("Background1.png")
Icon=loadImage("Geo_Main_Icon.png")
Obs2=loadImage("Obs_2.png")
Obs3=loadImage("Obs_3.png")
Obs4=loadImage("Obs_4.png")

}

function setup() {
 createCanvas(windowWidth,windowHeight)

 backg=createSprite(width/2,height/2)

MC=createSprite(190,height-100)

backg.addImage(bg)
 backg.scale=0.9

 MC.addImage(Icon)
MC.scale=0.5
MC.setCollider("circle",0,0,150)
MC.debug=true

ObsGroup = new Group()
}

function draw() {
 background("purple")
if(gameState === PLAY){
    backg.velocityX = -5

    if(backg.x<300){
        backg.x= backg.width/5
         
        }


        if(MC.isTouching(ObsGroup)){

         gameState = END;
        
        
        
        }
}
else if( gameState === END){

    backg.velocityX=0
        
    ObsGroup.setVelocityXEach(0)
    ObsGroup.setLifetimeEach(-1);
    ObsGroup.destroyEach();
    
}






SpawnObstacles();

Angel_Devil();

drawSprites();
}



function SpawnObstacles(){
    if(frameCount % 200 === 0 ){
    Obstacle=createSprite(width-50,height-100)

    Obstacle.velocityX= -6
    Obstacle.lifetime = (width/6);

    // Obstacle.lifetime =(distance/speed)
   var z = Math.round(random(1,3))
console.log(z)

if(z===1){

    Obstacle.addImage(Obs2)
    Obstacle.scale=0.6

}

else if(z===2){
Obstacle.addImage(Obs3)
Obstacle.scale=0.6

}

else if(z===3){

    Obstacle.addImage(Obs4)
    Obstacle.scale=0.6

}




ObsGroup.add(Obstacle);

    }

}

function Angel_Devil(){}









/*
lifetime:distance/speed
= width / 6




*/