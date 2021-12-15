
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball;
var ground;
var ball2;
var stand1;
var stand2;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
   
   var ground_options ={
     isStatic: true
   };
  

  ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(world,ground);
  stand1 = Bodies.rectangle(300,200,200,20,ground_options);
  World.add(world,stand1);
  stand2 = Bodies.rectangle(100,100,100,20,ground_options);
  World.add(world,stand2);

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
  ball2 = Bodies.circle(300,10,20,ball_options);

  World.add(world,ball2);
  rectMode(CENTER);
  ellipseMode(RADIUS);
}
var angle = 20;

function draw() 
{
  background(51);
  Engine.update(engine);
  
  ellipse(ball.position.x,ball.position.y,20);
  rect(ground.position.x,ground.position.y,400,20);
  rect(stand1.position.x,stand1.position.y,200,20);
Matter.Body.rotate(stand2,angle)
push ()
translate (stand2.position.x,stand2.position.y)
rotate (angle)

  rect(0,0,100,20);
  pop ()
  angle+=0.1
  ellipse(ball2.position.x,ball2.position.y,20);
}

