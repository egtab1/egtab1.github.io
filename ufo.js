class UFO {
  
  constructor(){
    
    this.x=screenX*2;
    this.y=screenY*2;
    this.width=112;
    this.height=64;
    }
  
  show(){
    
    image(motherShip,this.x,this.y)
    
    
  }
  
  collision(){
    
    if(character.x+character.size/2>=this.x && character.x-character.size/2<=this.width){console.log("hit"); coinPickup.play();}
    
    
  }
  
  
}