var sealog,sea
var shiplog1,ship
function preload(){
  sealog = loadImage("sea.png")
  shiplog1 = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
  
}

function setup(){
  createCanvas(400,400);
  background("blue")

  sea = createSprite(400,200);
  sea.addImage(sealog)
  
sea.velocityX=-5
sea.scale=0.5
ship = createSprite(130,200,30,30)
ship.addAnimation("floating",shiplog1)
ship.scale=0.25

}

function draw() {
  //set background color
  background(0)
 sea.velocityX=-3
console.log(sea.x)

//logging the y position of the ship
console.log(ship.y)
if(sea.x<0){
  sea.x = sea.width/8
}

  drawSprites()
}





