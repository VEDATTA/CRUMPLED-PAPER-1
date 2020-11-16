
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbin1,dustbin2, dustbin3;
var paper;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
  world = engine.world;
  
ground = Bodies.rectangle(width/2, 300, width, 10 , {isStatic:true} );
World.add(world, ground);



	//Create the Bodies Here.
dustbin1 = new Dustbin(670,230,10,80);
dustbin2 = new Dustbin(750,230,10,80);
dustbin3 = new Dustbin(710,275,85,10);
paper = new Paper(100,200,28);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  paper.display();
  //ground.display();
  drawSprites();
 
}

function keyPressed(){

if(keyCode === UP_ARROW){

Matter.Body.applyForce(paper.body,paper.body.position,{x:35,y:-30})



}

}












