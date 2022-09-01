
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var botao;
var fan;

var angle = 60;


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


  //crie o botão 
  botao = createImg("up.png");
  botao.position(350,20);
  botao.size(50,50);
  botao.mouseClicked(forceY);
  

  //criar | melhor parametro pra lamina giratoria é (100,300,100,20)
  //colocar ao mundo
  fan = Bodies.rectangle(100,300,100,20);
  World.add(world, fan);
  
  ground = Bodies.rectangle(100,400,400,20,ground_options);
  World.add(world,ground);

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
  
  
  

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  //rotacionar 
  Matter.Body.rotate(fan, angle);
  push();
  translate(fan.position.x,fan.position.y);
  rotate(angle);
  rect(0,0, 100,20);
  pop();
  
  angle += 0.1;

  ellipse(ball.position.x,ball.position.y,20);
  rect(ground.position.x,ground.position.y,500,20);
 

}

//o x precisa ser 0
function forceY()
{
  Matter.Body.applyForce(ball, {x:0, y:0}, {x:0, y: -0.05});
}