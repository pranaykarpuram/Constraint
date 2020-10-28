const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var ball1;
var engine, world;
var ground;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ball1 = new Ball(200,0,50);
    ball2 = new Ball(300,30,40);
    ball3 = new Ball(200,20,30);
    ball4 = new Ball(200,40,20);
    ball5 = new Ball(200,50,10);
    ground = new Ground(width/2,height,width,50);
    chain1 = new Chain(ball1.body,{x: 600, y: 10});
    chain2 = new Chain2(ball1.body,ball2.body);
    chain3 = new Chain2(ball2.body,ball3.body);
    chain4 = new Chain2(ball3.body,ball4.body);
    chain5 = new Chain2(ball4.body,ball5.body);
}

function draw(){
    background(0);
    ball1.display();
    ball2.display();
    ball3.display();
    ball4.display();
    ball5.display();
     ground.display();
    Engine.update(engine);
}
