var gameTitle="Recharge";

//[Major build number].[Minor build number].[Revision].[Package]
var gameVersion = "1.0.0.3";

var debugSetup=false;
var debug=false;
var debugCheck1=false;
var debugCheck2=false;
var debugCheck3=false;
var debugCheck4=false;
var debugCheck5=false;



var screenTotal=250;

var screenMapX=0;
var screenMapY=0;
var scroll=false;

//default framerate
var fr = 60;

let character;
let platform = [];
let faller = [];
let battery = [];
let dumbDumb = [];
let ufo1;

var screenMultiplyer =1; //3.43

var surface = 400;
var screenX = 256*screenMultiplyer; //1280
var screenY = 224*screenMultiplyer; //720

var level = 1;
var localLevel=1;

var menu=true;

let bricks;
let planks;

let tin;
let copper;

let tinBrick;
let tinPlatformL;
let tinPlatformM;
let tinPlatformR;

let copperBrick;
let copperPlatformL;
let copperPlatformM;
let copperPlatformR;

let gameLogo;

let spriteSheet1;

let spriteSheet2;

let characterSprite1;
let characterDeath;

let motherShip;

let battery1;
let battery2;

let fallerSleep;
let fallerAwake;
let fallerMad;
let fallerSad;

let dumbDumbLeft1;
let dumbDumbLeft2;
let dumbDumbRight1;
let dumbDumbRight2;

let chest;
let chestClosed;
let chestOpen;

let music;
let titleMusic;
let coinPickup;
let jump;
let hit;
let select;
let gameOverAudio;

function preload(){
  
 gameLogo = loadImage("sprites/rechargeLogo.png");
  spriteSheet1=loadImage("sprites/character/characterSheet1.png");
 spriteSheet2=loadImage("sprites/spriteSheet2.png");
  
 motherShip=loadImage("sprites/Mothership.png");
  characterDeath=loadImage("sprites/character/CharacterDeath.png");
  
  //bricks=loadImage("sprites/platforms/bricks.png");
  //planks=loadImage("sprites/platforms/planks.png");
  
  music=loadSound("sounds/music/Space Game Beat.m4a");
  titleMusic=loadSound("sounds/music/Test music.m4a");
  coinPickup=loadSound("sounds/character/Coin.m4a");
  jump=loadSound("sounds/character/Jump.m4a");
  hit=loadSound("sounds/enemies/Hit.m4a");
  select=loadSound("sounds/character/Select.m4a");
  gameOverAudio=loadSound("sounds/music/GAME OVER.mp3");
  
}

function setup() {
  createCanvas(screenX, screenY);
  
  //Sprites
  
  characterSprite1=spriteSheet1.get(0,0,16,16);
  
  tin=spriteSheet1.get(32,32,16,16);
  copper=spriteSheet1.get(48,32,16,16);
  
  tinBrick=spriteSheet2.get(0,32,16,16);
  tinPlatformL=spriteSheet2.get(32,32,16,16);
  tinPlatformM=spriteSheet2.get(48,32,16,16);
  tinPlatformR=spriteSheet2.get(0,48,16,16);

  copperBrick=spriteSheet2.get(16,32,16,16);
  copperPlatformL=spriteSheet2.get(16,48,16,16);
  copperPlatformM=spriteSheet2.get(32,48,16,16);
  copperPlatformR=spriteSheet2.get(48,48,16,16);
  
  fallerSleep=spriteSheet2.get(0,0,16,16);
  fallerAwake=spriteSheet2.get(16,0,16,16);
  fallerMad=spriteSheet2.get(32,0,16,16);
  fallerSad=spriteSheet2.get(48,0,16,16);
  
  dumbDumbLeft1=spriteSheet2.get(0,16,16,16);
  dumbDumbLeft2=spriteSheet2.get(16,16,16,16);
  dumbDumbRight1=spriteSheet2.get(32,16,16,16);
  dumbDumbRight2=spriteSheet2.get(48,16,16,16);
  
  battery1=spriteSheet1.get(0,32,16,16);
  battery2=spriteSheet1.get(16,32,16,16);
  
  
  
  character = new Character();
  ufo1 = new UFO();
  for (let i = 0; i < screenTotal; i++) {
    platform[i] = new Platform();
    faller[i] = new Faller();
    battery[i]=new Battery();
    dumbDumb[i]=new DumbDumb();
    
  }
  
  level = getItem('level');
  
  character.up = getItem('up');
  character.down = getItem('down');
  character.left = getItem('left');
  character.right = getItem('right');
  character.esc = getItem('esc');
  character.enter = getItem('enter');
  character.inventory = getItem('inventory');
  
  fr = getItem('frameRate');
  if(fr==="null"){fr=60;}
  
  showFr = getItem('showFr');
  showFc = getItem('showFc');
  showFr1 = getItem('showFr1');
  showFc1 = getItem('showFc1');
  
  character.batteries=getItem('characterBatteries');
  character.health=getItem('characterHealth');
  
 
  if(level===1){level1_1(); character.x=0+character.size/2; character.y=screenY*0.857142857143}
  if(level===2){level1_2();}
  if(level===3){level1_3();}
  
  /*
  character.x=getItem('characterX')
  character.y=getItem('characterY');
  */
  character.batteries=getItem('characterBatteries');
  character.health=getItem('characterHealth');  

  
if(character.x ===null){character.x=1;}
  if(character.y ===null){character.y=192;}
  if(character.batteries ===null){character.batteries=0;}
  if(character.health ===null){character.health=100;}
  if(level===null){level=1; level1_1();}
  
  //titleMusic.play();
  
}

var gravity = screenY*0.003125;

function draw() {
  
  frameRate(fr);

  textWrap(WORD);
  
  if(character.up===null){character.up=87;}
  if(character.down===null){character.down=83;}
  if(character.left===null){character.left=65;}
  if(character.right===null){character.right=68;}
  if(character.esc===null){character.esc=16;}
  if(character.enter===null){character.enter=13;}
  if(character.inventory===null){character.inventory=69;}
  
  if(fr===null){fr=60;}
  if(showFr===null){showFr=false;}
  if(showFc===null){showFc=false;}
  if(showFr1===null){showFr1=0;}
  if(showFc1===null){showFc1=0;}
  
  
  if(level ===null){level=1;}
  
  background(100,0,100);
  
  for(let i =0; i<screenX; i+=16){
    
    for(let j =0; j<screenY; j+=16){
    
    image(copperPlatformM,i,j);}
    
    
  }
  fill(0,0,0,125);
  rect(-1,-1,screenX+2,screenY+2);
  
  ufo1.show();
  ufo1.collision();
  
  character.show();
  character.move();
  for (let i = 0; i < screenTotal; i++) {
    
    if(faller[i].x>=-100 && faller[i].x<=screenX+100){
    faller[i].show();
    faller[i].move();}
    
    if(dumbDumb[i].x>=-100 && dumbDumb[i].x<=screenX+100){
    dumbDumb[i].show();
    dumbDumb[i].move();}
    
    //wall[i].show();
    //wall[i].collisions();
    
    if(battery[i].x>=-100 && battery[i].x<=screenX+100){
    battery[i].show();
    battery[i].collisions();}
    
    if(platform[i].x>=-100 && platform[i].x<=screenX+100){
    platform[i].show();
    platform[i].collision();}
    
    
    
  }
/*
  for(let i=0; i<screenTotal; i+=16){
    for(let j=0; j<screenTotal; j+=16){
    image(bricks,i,j);}
    
  }
 */ 
  
  
  hud();
  if(gamePaused===true && pausedMenu===true){pausedScreen();}
  
  if(characterInventory===true){inventoryScreen();}
  
  if(level===0){}
  
  if(menu===true){mainMenu();}
  
  if(settings===true){settingsTab();}
  
  //text(frameRate(),10,10);
  
  textSize(10);
  fill(255,255,255);
  stroke(0);
  if(showFr===true){text(round(frameRate()),8,216);}
  if(showFc===true){text(frameCount,200,212);}
  
  //1_1 - 1_2
  if(checkLevel1_1===true && character.x>=screenX){level1_2(); localLevel=2; checkLevel1_1=false; }
  if(checkLevel1_2===true && character.x<0){level1_1(); localLevel=1; checkLevel1_2=false; character.x=screenX-character.size/2; checkLevel1_1=true;}
  
  //1_2 - 1_3
  if(checkLevel1_2===true && character.x>=screenX){level1_3(); localLevel=3; checkLevel1_2=false;}
  if(checkLevel1_3===true && character.x<0){level1_2(); localLevel=2; checkLevel1_3=false; character.x=screenX-character.size/2;checkLevel1_2=true;}
  
  //1_3 - 1_4
  if(checkLevel1_3===true && character.x>=screenX){level1_4(); localLevel=4; checkLevel1_3=false;}
  if(checkLevel1_4===true && character.x<0){level1_3(); localLevel=3; checkLevel1_4=false; character.x=screenX-character.size/2;checkLevel1_3=true;}
  
 
  
  
  
  //if(checkLevel1_2===true && character.x>=-16){checkLevel1_2=false; level=1; level1_1();}
  
  //text(checkLevel1_2,10,10);
  
 
  if(debugSetup===true && debug===false){
   //text(debugCheck1+"|"+debugCheck2+"|"+debugCheck3+"|"+debugCheck4+"|"+debugCheck5,5,10);
}  
  
if(debug===true){debugScreen();}
  
  //text(localLevel,10,20);
  //text(checkLevel1_1+"|"+checkLevel1_2+"|"+checkLevel1_3,10,10);
  
  fill(0,0,0,killScreenCounter);
  rect(-1,-1,screenX+2,screenY+2);
  
  fill(255);
  textSize(16);
  textAlign(RIGHT,CENTER);
  if(character.x>=128){
  text(deathScreenText,character.x-16,character.y);
  textSize(10);
  text(deathScreenText2,character.x-16,character.y+16);}
  if(character.x<128){
  textAlign(LEFT,CENTER);
  text(deathScreenText,character.x+16,character.y);
  textSize(10);
  text(deathScreenText2,character.x+16,character.y+21);}
  if(character.health<=0){character.show();}
  textSize(16);
  fill(255);
  textAlign(CENTER,TOP);
  text(deathScreenText3,128,16);
  
  if(gamePaused===false){character.score+=1;}
  textAlign(LEFT,CENTER)
  //text(character.score,16,8);
  
  if(fr<=1){fr=1;}
  
   //endgame
  if(character.x+character.size/2>=ufo1.x && character.x-character.size/2<=ufo1.x+ufo1.width && localLevel===4){gameWin();}else{closingWidth = 512*3;}
  
}



