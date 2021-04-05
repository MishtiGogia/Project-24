
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var dustbin1,dustbin2,dustbin3;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

	paper = new Paper(100,100,25,30);

	dustbin1 = new Dustbin(width/2,470,200,20);
	dustbin2 = new Dustbin(510,430,20,100);
	dustbin3 = new Dustbin(310,430,20,100);

	ground = new Ground(600,height,1200,40);
	
  
}


function draw() {
  background(0);

  paper.display();

  dustbin1.display();
  dustbin2.display();
  dustbin3.display();

  ground.display();
  
  
  drawSprites();
 
}

function keyPressed(){
    if(keyCode === UP_ARROW){
    Matter.Body.applyForce(paper.body,paper.body.position, {x: 20 , y: -20 });
	}
}








