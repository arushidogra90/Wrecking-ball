//add matter.js library modules Engine,World,Bodies,Constraint


var engine, world;
var box1, box2, box3,box4,box5,box6,box7,box8,box9,box10, ground;
//declare ball and rope varibles.

function setup() {
  createCanvas(3000, 800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 600, 1200, 20);

  box1 = new Box(900, 100, 70, 70);
  box2 = new Box(900, 100, 70, 70);
  box3 = new Box(900, 100, 70, 70);
  box4 = new Box(900, 100, 70, 70);
  box5 = new Box(900, 100, 70, 70);
  box6 = new Box(900, 100, 70, 70);
  box7 = new Box(800, 100, 70, 70);
  box8 = new Box(800, 100, 70, 70);
  box9 = new Box(800, 100, 70, 70);
  box10 = new Box(800, 100, 70, 70);
 //create rest of the box objects

  //create ball,rope object.
  
}

function draw() {
  background(180);
  Engine.update(engine);
//diaply the ground

  //display the boxes
  

 //display ball,rope


}

//create function mouseDragged
