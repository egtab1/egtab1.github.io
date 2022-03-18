var menu1 = 1;

var showFr = false;
var showFc = false;

var showFr1 = 0;
var showFc1 = 0;

var keyButton = false;
var changeKey=false;

var mainMenu=function(){
  
  gamePaused=true;
  
  music.stop();
  
  background(0,0,0);
  
  fill(255,255,255);
  textAlign(CENTER,CENTER);
  textSize(screenX*0.078125);
  textFont('Monospace');
  //text(gameTitle,screenX*0.5,screenY*0.428571428571);

  image(gameLogo,20.5,80);
  
  if(menu1===1){
  textSize(screenX*0.05859375);
  text("PRESS SPACE TO CONTINUE",screenX*0.5,screenY*0.571428571429);
  }
  
  if(menu1===2){
    textSize(screenX*0.048828125);
    
    fill(255,0,0,150);
    if(hudController===1  && settings===false){rect(screenX*0.3125,screenY*0.526785714286,screenX*0.375,screenY*0.0714285714286);}
    if(hudController===2  && settings===false){rect(screenX*0.3125,screenY*0.598214285714,screenX*0.375,screenY*0.0714285714286);}
    if(hudController===3  && settings===false){rect(screenX*0.3125,screenY*0.669642857143,screenX*0.375,screenY*0.0714285714286);}
    
    if(hudController>=4  && settings===false){hudController=1;}
    if(hudController<=0  && settings===false){hudController=3;}
    
    fill(255,255,255);
    noStroke();
    
    text("NEW GAME",screenX*0.5,screenY*0.571428571429);
    text("CONTINUE",screenX*0.5,screenY*0.642857142857);
    text("SETTINGS",screenX*0.5,screenY*0.714285714286);
    stroke(0);
    
    }
  
  if(menu1===3){
    textSize(screenX*0.05859375);
    text("ARE YOU SURE?",screenX*0.5,screenY*0.571428571429);
    
    if(hudController===2){fill(255,0,0,150);rect(screenX*0.34375,screenY*0.625,screenX*0.15625,screenY*0.0803571428571429);}
    if(hudController===1){fill(255,0,0,150);rect(screenX*0.5,screenY*0.625,screenX*0.15625,screenY*0.0803571428571429);}
    
    if(hudController>=3){hudController=1;}
    if(hudController<=0){hudController=2;}
   
    
    fill(255,255,255);
    
    text("YES",screenX*0.421875,screenY*0.6696428571428571);
    text("NO",screenX*0.578125,screenY*0.6696428571428571);
    
    textSize(screenX*0.0390625);
    text("pressing YES will delete your saved data",screenX*0.5,screenY*0.7857142857142857);
    textSize(screenX*0.03515625);
    text("DATA CHANGED IN SETTINGS WILL NOT BE DELETED",screenX*0.5,screenY*0.8571428571428571)
    
  }
  
  
  
  
  textAlign(LEFT,TOP);
  textSize(screenX*0.0390625);
  fill(255,255,255);
  text("Version: "+gameVersion,screenX*0.01953125,screenY*0.9285714285714286);
  
};

//menu end

var settings=false;


var settingsTab = function(){
  
  gamePaused=true;
  pausedMenu=false;
  //menu=false;
  showhud=false;
  
  
  
  background(0,0,0,150);
  
  fill(0,0,0,150);
  
  rect(8,8,240,208);
  
  if(changeKey===false){fill(255,0,0,150);}else{fill(0,255,0,150);}
  
  if(hudController===1){rect(8,8,240,16); keyButton=false;}
  if(hudController===2){rect(8,24,240,16); keyButton=false;}
  if(hudController===3){rect(8,40,240,16); keyButton=false;}
  if(hudController===4){rect(8,56,240,16); keyButton=false;}
  if(hudController===5){rect(8,72,240,16); keyButton=true;}
  if(hudController===6){rect(8,88,240,16); keyButton=true;}
  if(hudController===7){rect(8,104,240,16); keyButton=true;}
  if(hudController===8){rect(8,120,240,16); keyButton=true;}
  if(hudController===9){rect(8,136,240,16); keyButton=true;}
  if(hudController===10){rect(8,152,240,16);keyButton=true;}
  //if(hudController===11){rect(8,168,240,16);keyButton=true;}
  if(hudController===11){rect(8,184,240,16);keyButton=false;}
  if(hudController===12){rect(8,200,240,16); keyButton=false;}
  
  fill(255);
  textSize(10);
  textAlign(LEFT,CENTER);
  
  text("Frame Rate:"+fr,12,16);
  text("Show Frame Rate:" + showFr,12,32);
  text("Frame Count:"+frameCount,12,48);
  text("Show Frame Count:"+showFc,12,64);
  text("Up:"+character.up,12,80);
  text("Down:"+(character.down),12,96);
  text("Left:"+(character.left),12,112);
  text("Right:"+(character.right),12,128);
  text("Exit:"+(character.esc),12,144);
  text("Enter:"+(character.enter),12,160);
  //text("Inventory:"+(character.inventory),12,176);
  text("SAVE SETTINGS",12,192);
  text("RESET SETTINGS",12,208);
  
  
  
  if(hudController===1 && settings===true && keyIsDown(character.right)){fr++;}
    if(hudController===1 && settings===true && keyIsDown(character.left)){fr--;}
  
  
  if(showFr1>=2){showFr1=0;}
  if(showFr1<=-1){showFr1=1;}
  
  if(showFr1===1){showFr=true;}
  if(showFr1===0){showFr=false;}
  
  if(showFc1>=2){showFc1=0;}
  if(showFc1<=-1){showFc1=1;}
  
  if(showFc1===1){showFc=true;}
  if(showFc1===0){showFc=false;}
  
  if(hudController>12){hudController=1;}
  if(hudController<1){hudController=12;}
  
  //
  
};

//settings end