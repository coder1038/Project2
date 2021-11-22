var box
function setup() {
  createCanvas(800,400);
 box= createSprite(400, 200, 50, 50);
}

function draw() {
  background("blue");  
  if (keyDown(UP_ARROW)) {
    box.y=box.y-5
  }
  if(keyDown(DOWN_ARROW)){
  box.y=box.y+5
  }
  if(keyDown(LEFT_ARROW)){
    box.x=box.x-5
    }
  if(keyDown(RIGHT_ARROW)){
      box.x=box.x+5
      }

  drawSprites();
}
