const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground, tree;
var slingshot, boy, platform;
var cons;
var mango, mango1, mango2, mango3, mango4;

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(600,height,1200,20);
	platform = new Ground(150, 650, 300, 170);
  tree = new Tree(425, 275, 450, 450);
  boy = new Boy(150, 515);
	stone = new Stone(150, 150);
	cons = new SlingShot(stone.body, {x:150, y:150});

  mango = new Mango(500, 400);
  mango1 = new Mango(700, 450);
  mango2 = new Mango(575, 475);
  mango3 = new Mango(650, 350);
  mango4 = new Mango(650, 550);

}
  
function draw() {
  background("white");
  Engine.update(engine);
  ground.display(); 
  tree.display();
  platform.display();
  boy.display();
  stone.display();
  cons.display();
  
  mango.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();

}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    cons.fly();
}
