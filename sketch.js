 var pups,hbd,pppapa,p,ppp;
var song;

function preload(){
  pup = loadImage("papa.jpg")
  hbd1 = loadImage("sur.png");
  ppapa = loadImage("papa1.jpeg")
  pp = loadImage("p.png")
  pappa = loadImage("happy.jpeg")
  gif = loadAnimation("Happy-birthday-to-you-wish-on-frame-with-hearts-Animated-GIF (1).gif")
  ty1 = loadImage("TY.png")
}

function loaded(){
   song.play();
}

function setup() {
  createCanvas(screen.width,screen.height);
  
  hbd = createSprite(screen.width/2,screen.height/2);
  hbd.addImage(hbd1);
  hbd.scale = 2;
  
  song = loadSound("Happy Birthday English 2.mp3", loaded)
  
}

function draw() {
  background(220);
  
  if(keyDown("e")){
  pppapa = createSprite(screen.width/2,screen.height/2 - 50);
  pppapa.addImage(ppapa);
  pppapa.scale = 0.8;
  hbd.visible = false; 
  
  pp.visible = false; 

  }
  
  if(keyDown("r")){
   pups = createSprite(screen.width/2,screen.height/2,10,50)
  pups.addImage(pup)
  pups.scale = 3;
  }
   
  if(keyDown("w")){
  ppp = createSprite(screen.width/2,screen.height/2);
  ppp.addImage(pappa);
  ppp.scale = 1;
  }
  
  if(keyDown("q")){
  giff = createSprite(screen.width/2,screen.height/2)
  giff.addAnimation("giff",gif)
  giff.scale = 3
  
  }
  
  if(keyDown("t")){
  ty = createSprite(screen.width/2,screen.height/2 + 140)
  ty.addImage(ty1)
  ty.scale = 3
  }
  drawSprites();
  
}