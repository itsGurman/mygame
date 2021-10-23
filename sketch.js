var Eren, Levi, Mikasa, Titan, scene, imgeren, imgmikasa, imglevi, imgtitan, imgscene
var b1, b2, b3, zone1, zone2,Titan, edges
function preload(){
  imgeren=loadImage("eren.png")
  imgmikasa=loadImage("mikasa.png")
  imglevi=loadImage("levi.png")
  imgtitan=loadImage("titan.png")
  imgscene=loadImage("scene.gif")
  imgtitan=loadImage("titan.png")
}


function setup() { 
  createCanvas(1800,1000);
  //boundry=createSprite()
edges=createEdgeSprites()
Levi=createSprite(1000,563,10,10)
Levi.addImage(imglevi)
Levi.scale=.9
Titan=createSprite(0,400,730,10,10)
Titan.addImage(imgtitan)
Titan.scale=2
Titan.velocityX=2
Levi.setCollider("rectangle",0,0,40,220)
zone1=createSprite(346,833,100,100)
}

function draw() {
  background("red");  
  image (imgscene,0,0,1800,1000)
  drawSprites();
  textSize(25)
  fill("red")
  text(mouseX+","+mouseY,50,50)
  if(keyDown("space")){
 Levi.y=Levi.y-5
  }
  Levi.collide(edges)
  Levi.debug=true
}