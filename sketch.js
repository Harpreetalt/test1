const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
var engine,world,box1,box2,ground,bird,pig,pig2,log1;
var box3,box4,box5,log2,log3,log4

function setup() {
  createCanvas(1200,600);
  engine=Engine.create();
world=engine.world;

ground=new Ground(600,height,1200,20)
box1=new Box(700,320,70,70);
box2=new Box(920,320,70,70);
box3=new Box(700,240,70,70)
box4=new Box(920,240,70,70);
box5=new Box(810,160,70,70);

bird=new Bird(100,100)

pig=new Pig(810,350)
pig2=new Pig(810,220)

log1=new Log(810,260,300,PI/2)
log2=new Log(810,180,300,PI/2)
log3=new Log(760,120,150,PI/7)
log4=new Log(870,120,150,-PI/7)

} 

function draw() {
  background("yellow");  
  Engine.update(engine);
  ground.display();
  box1.display();
  box2.display();
  log1.display();
 box3.display();
  box4.display();
  box5.display();

  bird.display();
  pig.display();
  pig2.display();

  
  log2.display();
  log3.display();
  log4.display();

  //drawSprites();
}