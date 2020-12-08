const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball,ground,log;

function preload()
{

}

function setup() {
createCanvas(800, 800);

engine = Engine.create();
world = engine.world;

ground = new Ground(200,780,1200,10);
ball = new Ball(50,770,40);

log1 = new Dustbin(670,770,140,10);
log2 = new Dustbin(600,720,15,80);
log3 = new Dustbin(740,720,15,80);

//Create the Bodies Here.


Engine.run(engine);

}


function draw() {
rectMode(CENTER);
background(0)

ground.display(); 
log1.display();
log2.display();
log3.display();
ball.display();

}

function keyPressed() {
if(keyCode === 32) {
	Matter.Body.applyForce(ball.body,ball.body.position,{x : 660, y : 700})
}

}

