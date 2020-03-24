const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function setup(){
    var canvas = createCanvas(400,600);
    engine = Engine.create();
    world = engine.world;


    var ball_options = {
        restitution: 1.5,
        density: 1.5
    }

    var holder_options ={
        isStatic: true
    }

    holder = Bodies.rectangle(200,100,200,20,holder_options);
    World.add(world,holder);

    ball = Bodies.circle(220,200,20,ball_options);
    World.add(world,ball);

    var options = {
        bodyA: holder,
        bodyB: ball,
        stiffness: 0.04,
        length: 300
    }

    sling = Constraint.create(options);
        World.add(world,sling);

         
}

function draw(){
    background(0);
    Engine.update(engine);
  
    rectMode(CENTER);
    rect(holder.position.x,holder.position.y,200,20);

    ellipseMode(RADIUS);
    ellipse(ball.position.x,ball.position.y,20,20);
  
    stroke("white");
    strokeWeight(5); 
    line(holder.position.x,holder.position.y,ball.position.x,ball.position.y);
}

    function keyPressed(){
        if(keyCode === 32){
          ball.position.x = mouseX;
          ball.position.y = mouseY;
        }
        if(keyCode === ENTER) {
            ball.position.x = 220;
            ball.position.y = 200;
        }
    }
       
    