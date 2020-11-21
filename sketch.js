var box1, box2, box3, box4;


function setup() {
  createCanvas(800,400);
  box1=createSprite(400, 200, 70, 70);
  box1.shapeColor=("green")
  box1.debug=true;
  box2=createSprite(300,100,50,50);
  box2.shapeColor=("blue");
  box3=createSprite(400,150,50,50);
  box3.shapeColor=("yellow")
  box4=createSprite(200,300,50,50);
  box4.shapeColor= "orange";
}




function draw() {
  background(94, 182, 187);

   
  box1.x=mouseX
  box1.y=mouseY;

if  (isTouching(box1,box3)){
  box1.shapeColor="red";
  box3.shapeColor="red";
}
else {
  box1.shapeColor="green";
  box3.shapeColor="yellow";
}
  
  drawSprites();
}
function isTouching(object1, object2){
  if (object1.x-object2.x<object1.width/2+object2.width/2
    && object2.x-object1.x<object1.width/2 + object2.width/2
    && object1.y-object2.y<object1.height/2+object2.height/2
    && object2.y-object1.y<object1.height/2+object2.height/2){
    return true;
  }
  else{
   return false;
  }
}

