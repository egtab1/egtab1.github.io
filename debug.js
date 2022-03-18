var debugScreen = function(){
  let frameRound = round(frameRate());
  
  
//gamePaused=false;
  fill(0,0,0,100);
  rect(-1,-1,screenX+2,screenY*0.285714285714);
  
  character.y=-32;
  character.mSpeed=16;
  
  fill(255);
 textAlign(LEFT,BASELINE);
  textSize(screenX*0.0390625);
  text("|"+frameRound+"|\n|"+frameCount+"|\n|"+level+"-"+localLevel+"|\n|X="+character.x+"|Y="+character.y+"|",5,15);
  
  
  
}