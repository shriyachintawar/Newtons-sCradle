
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof1,rope1;
var bob1,bob2,bob3,bob4,bob5;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	Engine.run(engine);
	roof1 = new roof(400,100,300,20);
	bob1 = new bob(300,300);
	bob2 = new bob(350,300);
	bob3 = new bob(400,300);
	bob4 = new bob(450,300);
	bob5 = new bob(500,300);
	rope1 = new rope(bob1.body,roof1.body,-100);
	rope2 = new rope(bob2.body,roof1.body,-50);
	rope3 = new rope(bob3.body,roof1.body,0);
	rope4 = new rope(bob4.body,roof1.body,50);
	rope5 = new rope(bob5.body,roof1.body,100);
	/*rope1 = new Rope(bob1.body,{x:300,y:100});
	rope2 = new Rope(bob2.body,{x:350,y:100});
	rope3 = new Rope(bob3.body,{x:400,y:100});*/

}


function draw() {
  rectMode(CENTER);
  background("white");
  text(mouseX+","+mouseY,mouseX,mouseY);
  drawSprites();
  roof1.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-100,y:100});
	}
}


