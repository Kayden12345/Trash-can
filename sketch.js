
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;
	
	paperObject = new Paper(56,46,30,30)
	ground = new Ground(200,600,2300,20)
	dusbin1= new Dusbin(1150,530,100,PI/4)
	dusbin2= new Dusbin(1230,570,130,450)
	dusbin3= new Dusbin(1300,530,100,PI/2);
	//Create the Bodies Here.

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paperObject.display();
  ground.display();
  dusbin1.display();
  dusbin2.display();
  dusbin3.display();
  keyPressed();
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
  
	}
}
