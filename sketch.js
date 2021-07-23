const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ground;
var rope;
var fruit;
var fruit_cons;

function setup() 
{
  createCanvas(500,700);
  engine = Engine.create();
  world = engine.world;

ground=new Ground(250,690,500,20);
rope = new Rope(7,{x:250,y:30})

var option ={
  density:0.001
}
fruit=Bodies.circle(300,300,20,option)
Composite.add(rope.body,fruit);

fruit_cons = new Link(rope,fruit)



 
  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)
}

function draw() 
{
  background(51);
  Engine.update(engine);
   

  ground.display();
  rope.show();
  ellipse(fruit.position.x,fruit.position.y,20,20)
}




