const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var ground;


 var boxWidth ;
 var boxHeight ;

 
var boxes = [];
var gSlider;
 
 
function setup() {
   var canvas =  createCanvas(400, 400);


    engine = Engine.create();
    world = engine.world;
    
    

    gSlider = createSlider(0,100,50);
    gSlider.position(5, 380);
    gSlider.input = map(engine.world.gravity, gSlider.min, gSlider.max, 0, 1);
 
   ground = new Ground(200,390,400,20);
    
    
}
 
function mousePressed(){
    if(mouseY<350)
    boxes.push(new Box(mouseX,mouseY,random(10,40),random(10,40)));

}
 
function draw() {
    // Draw all the elements including the slider that 

    background(10);
    Engine.update(engine);

        ground.display();
       
   
    for(var i = 0;i<boxes.length;i++){
        boxes[i].display();
    }
   

}
 


