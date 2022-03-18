class Faller {
  constructor() {
    this.x = screenX*2;
    this.startY = screenY*2;
    this.y = screenY*2;
    this.size = 16;
    this.vy = 0;
    this.playerDetect = false;
    this.damage = 5;
    this.look=fallerSleep;
  }

  show() {
    fill(255,0,0);
    //rect(this.x, this.y, this.size, this.size);
    
    if(this.playerDetect===false){this.look=fallerSleep;}
    
    if(this.playerDetect===true){this.look=fallerMad;}

    if (
      character.x-4+character.width/2>=this.x && character.x+4-character.width/2<=this.x+this.size && character.y+character.height/2>=this.y && character.y+4-character.height/2<=this.y+this.size &&
      gamePaused === false  && invinsibility===false
    ) {
      character.health-=this.damage;
    }
    
    if(character.x+character.width/2 >=this.x-32 && character.x-character.width/2<=this.x+this.size+32 && this.playerDetect===false){this.look=fallerAwake;}
    
    if(this.playerDetect===true && this.y>character.y+character.height/2){this.look=fallerSad;}
    
    
    
    image(this.look,this.x,this.y);
    
  }

  move() {
    if (
      character.x + character.size / 2 >= this.x &&
      character.x - character.size / 2 <= this.x + this.size &&
      character.y >= this.y
    ) {
      //ellipse(10,10,10);
      this.playerDetect = true;
    }
    if (this.playerDetect === true && gamePaused === false) {
      this.y += this.vy;
      this.vy += gravity / 5;
    }
    if (this.y >= screenY + this.size) {
      this.y = screenY*2;
      this.playerDetect = false;
      this.vy = 0;
    }
    if(character.health<=0){this.y = screenY*2;
      this.playerDetect = false;
      this.vy = 0;}
    
  }
}

class DumbDumb {
  constructor() {
    this.startX = 400;
    this.x = screenX*2;
    this.y = screenY*2;
    this.size = 16;
    this.damage = 5 / 5;
    this.speed = 0.5;
    this.direction = this.speed;
    this.maxX = 48;
    this.look=dumbDumbRight1;
    this.lookCounter=0;
  }

  show() {
    fill(255,0,0);
    //rect(this.x, this.y, this.size, this.size);
    image(this.look,this.x,this.y);
  }

  move() {
    if (gamePaused === false) {
      this.x += this.speed;
      this.lookCounter++;
    }
    

    if (this.x >= this.startX + this.maxX) {
      this.speed = -0.5;
      this.look=dumbDumbLeft1;
      this.lookCounter=0;
    }
    if (this.x <= this.startX) {
      this.speed = 0.5;
      this.look=dumbDumbRight1;
      this.lookCounter=0;
    }
    
    if(this.speed===-0.5 && this.lookCounter>=10){this.look=dumbDumbLeft2}
    if(this.speed===-0.5 && this.lookCounter>=20){this.look=dumbDumbLeft1
this.lookCounter=0;}
    if(this.speed===0.5 && this.lookCounter>=10){this.look=dumbDumbRight2}
    if(this.speed===0.5 && this.lookCounter>=20){this.look=dumbDumbRight1
this.lookCounter=0;}
    
    
    if(character.x-4+character.width/2>=this.x && character.x+4-character.width/2<=this.x+this.size && character.y+character.height/2>=this.y && character.y-character.height<=this.y+this.size && invinsibility===false && gamePaused===false){character.health-=this.damage;}
    
    
    
  }
  
}
