const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, pig1;
var backgroundImg

/*function preload() {
    backgroundImg = loadImage("bg.png")
}*/

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    
    ground = new Ground(600,height,1200,20)
    ground2 = new Ground(50,height - 150,150,300)

    box1 = new Box(900,420,70,70);
    box2 = new Box(1120,420,70,70);

    pig1 = new Pig(1010, 550);
    log1 = new Log(1010,560,300, PI/2);

    pig2 = new Pig(750, 550)

    box3 = new Box(900,540,70,70);
    box4 = new Box(1120,540,70,70);
    pig3 = new Pig(1010, 420);

    log3 =  new Log(1010,400,300, PI/2);
    log2 =  new Log(1010,480,300, PI/2);

    box5 = new Box(1010,360,70,70);
    log4 = new Log(960,320,150, PI/7);
    log5 = new Log(1070,320,150, -PI/7);

    bird = new Bird(100,100);

}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    ground2.display();
    pig1.display();
    log1.display();
    pig2.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();
    log2.display();

    box5.display();
    log4.display();
    log5.display();

    bird.display();
}
