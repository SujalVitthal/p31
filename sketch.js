const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var drops = [];

var maxDrops=100;

function preload(){
    
}

function setup(){
createCanvas(400,800);
engine = Engine.create();
world = engine.world; 
//creating drops
if(frameCount % 150 === 0){

    for(var i=0; i<maxDrops; i++){
        drops.push(new Drop(random(0,400), random(0,400)));
    }

}
    
}

function draw(){
   
    background(0);  
    Engine.update(engine);

     //displaying rain drops
     for(var i = 0; i<maxDrops; i++){
        drops[i].showDrop();
        drops[i].updateY()
        
    }

  
}   

