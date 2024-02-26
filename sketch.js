const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
let engine;
let world;
var ball;
var ground;
var wedge;
var angle = 60;
var poly;

function setup(){
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  var ball_options = {
    restitution: 0.87,
    frictionAir: 0.1,
  }
  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
  ellipseMode(RADIUS);
}
function draw(){
  background("black");
  Engine.update(engine);
  ellipse(ball.position.x,ball.position,25);

}