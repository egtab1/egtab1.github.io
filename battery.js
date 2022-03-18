class Battery{
  
  constructor(){
    
    this.x = screenX*2;
    this.y = screenY*2;
    this.size = screenX*0.0625;
    this.batteryValue = 1;
    this.collected=false;
    this.look=battery1;
    
  }
  
  show(){
    fill(255,255,0);
    
    if(this.batteryValue===1){this.look=battery1;}else{this.look=battery2;}
    
    if(this.collected===false){
    //rect(this.x,this.y,this.size,this.size);
    
    image(this.look,this.x,this.y);
    
    }
    
  }
  
  collisions(){
    
    if(this.collected===false && character.x >=this.x && character.x-character.size/2 <=this.x+this.size && character.y >=this.y && character.y-character.size <= this.y+this.size){this.collected=true; character.batteries = character.batteries+this.batteryValue; coinPickup.play();character.score=character.score+(this.batteryValue*10)}
    
  }
  
}