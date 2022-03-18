class Platform {
  constructor() {
    this.x = screenX*2;
    this.y = screenY*2;
    this.width = 16;
    this.height = 16;
    this.look = bricks;
  }

  show() {
    
     
    
    fill(255);
    noStroke();
    //rect(this.x, this.y, this.width, this.height);
    stroke(0);
    
    for(let i=this.x; i<this.x+this.width; i+=16){
    for(let j=this.y; j<this.y+this.height-1; j+=16){
    image(this.look,i,j);}}
    
    if(this.look===tinPlatformL){
      for(let i=this.x+16; i<this.x+this.width-16; i+=16){
        for(let j=this.y; j<this.y+this.height-1; j+=16){
        image(tinPlatformM,i,j);
        image(tinPlatformR,this.x+this.width-16,j);
        }}}
    
    if(this.look===copperPlatformL){
      for(let i=this.x+16; i<this.x+this.width-16; i+=16){
        for(let j=this.y; j<this.y+this.height-1; j+=16){
        image(copperPlatformM,i,j);
        image(copperPlatformR,this.x+this.width-16,j);
        }}}
    
    /*
    for(let j=this.y; j<this.height; j+=16){
    if(this.width===32 && this.look===tinPlatformL){
    image(tinPlatformR,this.x+16,j);}
    if(this.width===32 && this.look===copperPlatformL){
    image(copperPlatformR,this.x+16,j);}
    }
    */
    
  }

  collision(){
    if (
      character.x + character.size / 2 >= this.x +2.5 &&
      character.x - character.size / 2 <= this.x + this.width -2.5 &&
      character.y >= this.y - character.size / 2 &&
      character.y <= this.y + 2.5
    ) {
      fill(255, 0, 0);
      //ellipse(10, 10, 100, 100);
      character.vy = 0;
      character.y = this.y - character.size / 2;
      cJumping = false;
    }
    if (
      character.x + character.size / 2 >= this.x +2.5 &&
      character.x - character.size / 2 <= this.x + this.width -2.5 &&
      character.y <= this.y + this.height + character.size / 2 &&
      character.y >= this.y
    ) {
      fill(255, 0, 0);
      //ellipse(10, 10, 100, 100);
      character.vy = gravity;
      cJumping = true;
    }
  
  //left side
    if (
      character.x + character.size / 2 >= this.x -1 &&
      character.x <= this.x + this.width / 2 &&
      character.y < this.y + this.height &&
      character.y + character.size / 2 > this.y
    ) {
      character.x = this.x -1 - character.size / 2;
    }
    //right side
    if (
      character.x - character.size / 2 <= this.x + this.width &&
      character.x >= this.x + this.width / 2 &&
      character.y < this.y + this.height &&
      character.y + character.size / 2 > this.y
    ) {
      character.x = this.x +1 + this.width + character.size / 2;
    }
  
    
  }
}
