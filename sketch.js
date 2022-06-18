const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
var engine,world
var s1Img,s2Img
var snow=[]
var bgImg
function preload(){
bgImg=loadImage("snow2.jpg")
}





function setup() {
  createCanvas(800,400);
 // createSprite(400, 200, 50, 50);
 engine=Engine.create()
 world=engine.world;
 if(frameCount%50===0){
for(var i=0;i<100;i++){
  snow.push(new Snow(random(0,800),random(0,800)))
}
 }
}

function draw() {
  background(bgImg); 
  Engine.update(engine) 
  for(var i=0;i<100;i++){
    snow[i].display()
  }
  drawSprites();
}
//