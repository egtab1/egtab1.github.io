const dead = 0;

class Character {
  constructor() {
    this.x = 16;
    this.y = 208;
    this.size = 16;
    this.height=16;
    this.width=16;
    this.direction='right';
    this.vy = 0;
    this.mSpeed = 2.5;
    this.health = 100;
    this.lives=3;
    this.batteries = 0;
    this.score=0;
    this.equipedItem = "null";
    this.left = 65;
    this.right = 68;
    this.up = 87;
    this.down = 83;
    this.enter = 13;
    this.esc=16;
    this.inventory = 69;
    this.ufoDecider=round(random(1,2));
    this.look=characterSprite1;
    this.lookCounter = -1;
  }

  jump() {
    this.vy=-8
  }

  move() {
    this.y += this.vy;
    this.vy += 0.5;
    this.y = constrain(this.y, -16, screenY + 32);
    if (keyIsDown(this.left) && gamePaused===false) {
      character.x -= this.mSpeed;
      this.direction='left';
    if(this.ufoDecider===1){this.look=characterSprite1=spriteSheet1.get(32,0,16,16);}else{this.look=characterSprite1=spriteSheet1.get(32,16,16,16);}
      this.lookCounter=0;
    }
    if (keyIsDown(this.right) && gamePaused===false) {
      character.x += this.mSpeed;
      this.direction='right';
    if(this.ufoDecider===1){this.look=characterSprite1=spriteSheet1.get(0,0,16,16);}else{this.look=characterSprite1=spriteSheet1.get(0,16,16,16);}
    this.lookCounter=0;
    }
    
    
    //if(cJumping===true && this.vy===0){cJumping = false;}
    
    if(this.health<=0){characterKill();}
    if(this.batteries>99){this.batteries=99;}
    
    if(this.y>screenY){this.health-=5;}
    
    if(this.vy>=10){this.vy=10;}
    
  }

  show() {
    //console.log(this.ufoDecider);
    /*
    if(this.ufoDecider===2){this.look=characterSprite1=spriteSheet1.get(0,16,16,16)}
    */
    
    if(this.lookCounter===-1 && gamePaused===false && this.ufoDecider===1){
      
      this.look=characterSprite1=spriteSheet1.get(16,0,16,16);
      
    }
     if(this.lookCounter===-1 && gamePaused===false && this.ufoDecider===2){
      
      this.look=characterSprite1=spriteSheet1.get(16,16,16,16);
      
    }
    
    if(gamePaused===false && this.vy===0){
      
      this.lookCounter++;
      
    }
    
    if(this.direction==='right' && this.lookCounter >=20 && this.ufoDecider===1){this.look=characterSprite1=spriteSheet1.get(0,0,16,16);}
    if(this.direction==='right' && this.lookCounter >=40 && this.ufoDecider===1){this.look=characterSprite1=spriteSheet1.get(16,0,16,16);this.lookCounter=0;}
    
    if(this.direction==='left' && this.lookCounter >=20 && this.ufoDecider===1){this.look=characterSprite1=spriteSheet1.get(32,0,16,16);}
    if(this.direction==='left' && this.lookCounter >=40 && this.ufoDecider===1){this.look=characterSprite1=spriteSheet1.get(48,0,16,16);this.lookCounter=0;}
    
    if(this.direction==='right' && this.lookCounter >=20 && this.ufoDecider===2){this.look=characterSprite1=spriteSheet1.get(0,16,16,16);}
    if(this.direction==='right' && this.lookCounter >=40 && this.ufoDecider===2){this.look=characterSprite1=spriteSheet1.get(16,16,16,16);this.lookCounter=0;}
    
    if(this.direction==='left' && this.lookCounter >=20 && this.ufoDecider===2){this.look=characterSprite1=spriteSheet1.get(32,16,16,16);}
    if(this.direction==='left' && this.lookCounter >=40 && this.ufoDecider===2){this.look=characterSprite1=spriteSheet1.get(48,16,16,16);this.lookCounter=0;}
    
    //death
    
    
    fill(0,0,255);
    //ellipse(this.x,this.y,this.size);
    //rect(this.x - this.size / 2, this.y - this.size / 2, this.size, this.size);
    
    
    
    translate(this.x-this.width/2,this.y+1-this.height/2)
    image(this.look,0,0);
resetMatrix();
    
  }
}
var cJumping = false;

var invinsibility = false;
/*
var characterInvinsibility = function(){
  
  
  let invinsibilityCounter=0;
  
  invisibility=true;
  
  invinsibilityCounter++;
  
  if(invinsibilityCounter>=5){invinsibility=true;}
  
};
*/

var killScreenCounter=0;

var deathScreenText="";
var deathScreenText2="";
var deathScreenText3="";

var characterKill = function(){
  
  if(killScreenCounter>=255){}
  
  music.stop();
  
  hudController=1;
  
  character.lives=character.lives-1;
  character.batteries=getItem('characterBatteries');
  
  gamePaused=true;
  
  killScreenCounter+=5;
  
  if(killScreenCounter===5){gameOverAudio.play();}
  
  deathScreenText="GAME OVER";
  deathScreenText2="CONGRATS, YOU KILLED\nEUGENE";
  deathScreenText3="PRESS SPACE TO CONTINUE";
  
    for(let j=0; j<screenTotal; j++){
    
    platform[j].width=16;
    platform[j].height=16;
    platform[j].x=screenX*2;
    platform[j].y=screenY*2;
    platform[j].look=tinBrick;
    
    faller[j].x=screenX*2;
    faller[j].y=screenY*2;
    faller[j].look=fallerSleep;
    dumbDumb[j].x=screenX*2;
    dumbDumb[j].y=screenY*2;
    
    
    battery[j].x=screenX*2;
    battery[j].y=screenY*2;
    battery[j].batteryValue=1;
    battery[j].collected=false;
  }
  
  
  //setup();
  
};

var closingWidth = 512*3;

var gameWin = function(){
  
  strokeWeight(512);
  noFill();
  ellipse(character.x,character.y,closingWidth,closingWidth);
  
  strokeWeight(1);
  
  closingWidth-=10;
  
  if(closingWidth<0){closingWidth=0;
  killScreenCounter=255;
  gamePaused=true;
  fill(255,255,255);
  textAlign(CENTER,CENTER);
  textSize(16);
  text("Congrats,\n you finished the game!\nYour score is "+character.batteries,screenX/2,screenY/2);
  textSize(10);
  text("PRESS SPACE TO CONTINUE",128,screenY-64);  
                  
                    }
  
  music.stop();
  
};

