
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
function preload()
{
	
}

function setup() {
	createCanvas(800, 800);
	


	engine = Engine.create();
	world = engine.world;

	roof = new Roof(400, 200, 600, 80)

	ball1 = new Ball(200, 400, 50)
	ball2 = new Ball(300, 400, 50)
	ball3 = new Ball(400, 400, 50)
	ball4 = new Ball(500, 400, 50)
	ball5 = new Ball(600, 400, 50)

	string1 = new String(ball1.body,{x:200, y:200})
	string2 = new String(ball2.body,{x:300, y:200})
	string3 = new String(ball3.body,{x:400, y:200})
	string4 = new String(ball4.body,{x:500, y:200})
	string5 = new String(ball5.body,{x:600, y:200})

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");

  roof.display()

  ball1.display()
  ball2.display()
  ball3.display()
  ball4.display()
  ball5.display()

  string1.display()
  string2.display()
  string3.display()
  string4.display()
  string5.display()

  if(keyDown(RIGHT_ARROW)){
	Matter.Body.applyForce(ball5.body,ball5.body.position,{x:100,y:-10})
  }
  
  drawSprites();
 
}



