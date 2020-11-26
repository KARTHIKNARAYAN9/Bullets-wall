

var car,wall;


var speed, weight; 


function setup() {
  createCanvas(800, 400);


	speed=random(50,300);
	weight=random(30,52);

	thickness=random(22,83);

	car=createSprite(50, 200, 50,50);   

	car.velocityX = speed;

	car.shapeColor=color(255);


  
  	wall=createSprite(700,200, 60, height/2)
  	wall.shapeColor=color(80,80,80)
}


function draw() {
  background(0);

  if(wall.x-car.x < (car.width+wall.width)/2)
  {
  	car.velocityX=0;
  	var deformation=0.5 * weight * speed* speed/weight*weight*weight;
	if(deformation>10)
	{    
		wall.shapeColor="red";
		}
else
	{
		wall.shapeColor="green"
	}
  }  
  
  drawSprites();
 
}


