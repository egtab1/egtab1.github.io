var showhud = true;
var gamePaused = false;
var pausedMenu = false;
var characterInventory = false;

var pauseColor1 =255;
var pauseColor2 = 0;
var pauseColor3 = 0;

var hudController=1;

var hud = function(){
  //debug
  if(gamePaused===true){character.vy=0;}
  
  
  if(debugSetup===true && debugCheck1===true && debugCheck2===true && debugCheck3===true && debugCheck4===true && debugCheck5===true){debug=true; debugSetup=false;}
  
  
  
  if(showhud===true){
  
  //black bar
  fill(0,0,0);
  rect(-1,-1,screenX+2,screenY*0.0758928571429);
  
  //player health
  fill(255);
  rect(0,screenY*0.0178571428571,screenX*0.25,screenY*0.0357142857143);
  fill(167,102,102);
  rect(0,screenY*0.0178571428571,(character.health/1.5625)*screenMultiplyer,screenY*0.0357142857143);
  
  //pause button
  fill(100,100,100);
  rect(242,2,4,12);
  rect(250,2,4,12);
    
  //battery display
    fill(200,200,200);
  textAlign(LEFT,CENTER);
  textFont('Monospace');
  textSize(13);
  text("BATTERIES:"+character.batteries,72,10);
  text("LEVEL:"+level + "-" + localLevel,168,10)
  
  }
  

  //text(gamePaused,10,10);
  
  
  
  
};
  function mouseReleased(){ 
  /*
    if(mouseX>=0 && mouseX<=screenX && mouseY>=0 && mouseY<=screenY){let fs = fullscreen();
    fullscreen(!fs);}
*/
  }

function keyPressed(){
  
  /*
  if(keyCode===79 && character.ufoDecider===1){character.ufoDecider=2;}else if(keyCode===79 && character.ufoDecider===2){character.ufoDecider=1;}
  */
  
  //death thing
  if(keyCode===32 && character.health<=0){
    
    gameOverAudio.stop();
    
    menu=true;
    menu1=2;
    character.health=100;
    
    killScreenCounter=0;
    character.direction="right";

    character.x=null;
    character.y=null;
    
    deathScreenText="";
    deathScreenText2="";
    deathScreenText3="";
    if(level===1){
    level1_1();
    localLevel=1;
    }
    
    
  }
  
  
  
  
   if (keyCode === character.up && cJumping === false && gamePaused===false) {
    character.jump();
    cJumping = true;
     jump.play();
  }
  
  
  if(settings===true && hudController===5 && changeKey===true){character.up=keyCode;}
  if(settings===true && hudController===6 && changeKey===true){character.down=keyCode;}
  if(settings===true && hudController===7 && changeKey===true){character.left=keyCode;}
  if(settings===true && hudController===8 && changeKey===true){character.right=keyCode;}
  if(settings===true && hudController===9 && changeKey===true){character.esc=keyCode;}
  if(settings===true && hudController===10 && changeKey===true){character.enter=keyCode;}
  if(settings===true && hudController===11 && changeKey===true){character.inventory=keyCode;} 
}


  function keyReleased(){
    
    //debug
    
if(keyCode===18 && debugSetup===false && debug===false && characterInventory===false){debugSetup=true; gamePaused=true;}else if(keyCode===18 && debugSetup===true && debug===false){debugSetup=false; gamePaused=false; debugCheck1=false; debugCheck2=false; debugCheck3=false; debugCheck4=false; debugCheck5=false;}else if(keyCode===18 && debugSetup===false && debug===true && characterInventory===false){debug=false; gamePaused=false; debugCheck1=false; debugCheck2=false; debugCheck3=false; debugCheck4=false; debugCheck5=false; character.mSpeed=3; character.y=32;}
    
    //check1
    if(debugSetup===true && debugCheck1===false && debugCheck2===false && debugCheck3===false && debugCheck4===false && debugCheck5===false && keyCode ===69){debugCheck1=true; debugCheck2=false; debugCheck3=false; debugCheck4=false; debugCheck5=false;}else
    if(debugSetup===true && debugCheck1===false && debugCheck2===false && debugCheck3===false && debugCheck4===false && debugCheck5===false && keyCode !=69){debugCheck1=false; debugCheck2=false; debugCheck3=false; debugCheck4=false; debugCheck5=false;}
    
    
    //check2
    if(debugSetup===true && debugCheck1===true && debugCheck2===false && debugCheck3===false && debugCheck4===false && debugCheck5===false && keyCode ===84){debugCheck1=true; debugCheck2=true; debugCheck3=false; debugCheck4=false; debugCheck5=false;}
    if(debugSetup===true && debugCheck1===false && debugCheck2===false && debugCheck3===false && debugCheck4===false && debugCheck5===false && keyCode !==84){debugCheck1=false; debugCheck2=false; debugCheck3=false; debugCheck4=false; debugCheck5=false;}
    
    //check3
    if(debugSetup===true && debugCheck1===true && debugCheck2===true && debugCheck3===false && debugCheck4===false && debugCheck5===false && keyCode ===72){debugCheck1=true; debugCheck2=true; debugCheck3=true; debugCheck4=false; debugCheck5=false;}
    
    //check4
    if(debugSetup===true && debugCheck1===true && debugCheck2===true && debugCheck3===true && debugCheck4===false && debugCheck5===false && keyCode ===65){debugCheck1=true; debugCheck2=true; debugCheck3=true; debugCheck4=true; debugCheck5=false;}
    
    //check5
    if(debugSetup===true && debugCheck1===true && debugCheck2===true && debugCheck3===true && debugCheck4===true && debugCheck5===false && keyCode ===78){debugCheck1=true; debugCheck2=true; debugCheck3=true; debugCheck4=true; debugCheck5=true; gamePaused=false;}
    
    //levelChanger
    
    
    //if(debugSetup===true && debugCheck1===false && debugCheck2===false && debugCheck3===false && debugCheck4===false && debugCheck5===false){}
    
    //end debug
    
    //if(keyCode===49){setup();}
    
  if(keyCode===character.esc && gamePaused===false  && settings===false && debugSetup===false){gamePaused=true; pausedMenu=true;select.play();hudController=1;}else if(keyCode===character.esc && gamePaused===true && settings===false && debugSetup===false){gamePaused=false; pausedMenu=false; characterInventory=false; showhud=true; hudController=1;select.play();}

    /*
    if(keyCode===character.inventory && gamePaused===false && pausedMenu===false && characterInventory===false){gamePaused=true; characterInventory=true; showhud=false;}else if(keyCode===character.inventory && pausedMenu===false && gamePaused===true && characterInventory===true){gamePaused=false; characterInventory=false; showhud=true;}
  */
  
    //if(keyCode===8){deleteData();}
    
    
    if(keyCode===character.up && gamePaused===true && gamePaused===true && settings===false){hudController-=1}
    if(keyCode===character.down && gamePaused===true && gamePaused===true && settings===false){hudController+=1}
    if(keyCode===character.left && gamePaused===true && gamePaused===true && settings===false){hudController-=1}
    if(keyCode===character.right && gamePaused===true && gamePaused===true && settings===false){hudController+=1}
    
    if(hudController===1 && keyCode===character.enter && gamePaused===true && pausedMenu===true && settings===false){gamePaused=false; pausedMenu=false; showhud=true;select.play();hudController=1;
  }
  if(hudController===2 && keyCode===character.enter && gamePaused===true && pausedMenu===true && settings===false){settings=true; hudController=1;select.play();}
  if(hudController===3 && keyCode===character.enter && gamePaused===true && pausedMenu===true && settings===false){
    
    //exit game
  select.play();
    menu=true;
    menu1=1;
    hudController=1;
    settings=false;
    pausedMenu=false;
    localLevel=1;
    setup();
  }
    
    if(keyCode===character.esc && settings===true && menu===false && changeKey===false){settings=false; pausedMenu=true; hudController=1;select.play();}
    if(keyCode===character.esc && settings===true && menu===true && changeKey===false){settings=false; menu=true; hudController=3;select.play();}
    
    
    //menu stuff
    
    if(menu1===1 && keyCode===32 && menu===true && settings===false){
    
    menu1=2;
      hudController=1;
    select.play();
  }
    
    
    
    if(keyCode===character.enter && menu1===2 && hudController===1 && settings===false){menu1=3; hudController=3;select.play();}
    if(keyCode===character.enter && hudController===2 && menu1===2 && settings===false){level=1; gamePaused=false; menu=false; hudController=1; showhud=true;
  music.loop();select.play();characterInventory=false;}
    if(keyCode===character.enter && hudController===3 && menu1===2 && settings===false){settings=true; hudController=1;select.play();}
    
    
    if(hudController===2 && keyCode===character.enter && menu1===3 && settings===false){deleteData(); level=1; gamePaused=false; menu=false; hudController=1; showhud=true;
  music.loop();select.play();}
    if(hudController===1 && keyCode===character.enter && menu1===3 && settings===false){menu1=2; hudController=1;select.play();}
    
    
    //settings screen
    if(settings===true && keyCode===character.up && gamePaused===true && changeKey===false){hudController-=1;}
    if(settings===true && keyCode===character.down && gamePaused===true  && changeKey===false){hudController+=1;}
    
    if(settings===true && keyCode===character.right && hudController===2){showFr1+=1;}
    if(settings===true && keyCode===character.left && hudController===2){showFr1-=1;}
    
    if(settings===true && keyCode===character.right && hudController===4){showFc1+=1;}
    if(settings===true && keyCode===character.left && hudController===4){showFc1-=1;}
    
    if(settings===true && hudController===11 && keyCode===character.enter){saveSettings();}
    if(settings===true && hudController===12 && keyCode===character.enter){defaultSettings(); saveSettings();}
    
    
    if(keyCode===32 && settings===true && keyButton===true){changeKey=true;}else{changeKey=false;}
    
    if(keyCode===32 && gamePaused===true && closingWidth===0){
      
    select.play();
    menu=true;
    menu1=1;
    hudController=1;
    settings=false;
    pausedMenu=false;
    localLevel=1;
    closingWidth=512*3;
    killScreenCounter=0;
    setup();
      
    }
    
  }




var pausedScreen = function(){
  
  showhud=false;
  
  character.vy=0;
  
  //overlay
  fill(0,0,0,150);
  rect(-1,-1,screenX+2,screenY+2);
  
  rect(screenX*0.25,screenY*0.285714285714,screenX*0.5,screenY*0.526785714286);
  
  fill(pauseColor1,pauseColor2,pauseColor3,150);
  if(hudController===1){rect(screenX*0.25,screenY*0.348214285714,screenX*0.5,screenY*0.142857142857);}
  if(hudController===2){rect(screenX*0.25,screenY*0.491071428571,screenX*0.5,screenY*0.142857142857);}
  if(hudController===3){rect(screenX*0.25,screenY*0.633928571429,screenX*0.5,screenY*0.142857142857);
textSize(screenX*0.029296875);
fill(255,255,255);
textAlign(CENTER,CENTER);
text("WARNING: EXITING WILL NOT SAVE DATA \nDATA IS SAVED AT THE END OF EVERY LEVEL",screenX*0.5,screenY*0.892857142857);
                       
                       }
  
  fill(255,255,255);
  textAlign(CENTER,CENTER);
  textFont('Monospace');
  textSize(screenX*0.09375);
  text("GAME PAUSED",screenX*0.5,screenY*0.214285714286);
  textSize(screenX*0.0625);
  text("RESUME",screenX*0.5,screenY*0.428571428571);
  text("SETTINGS",screenX*0.5,screenY*0.571428571429);
  text("EXIT TO MENU",screenX*0.5,screenY*0.714285714286);
  
  if(hudController>=4){hudController=1;}
  if(hudController<=0){hudController=3;}
  
  
};

var inventoryScreen = function(){
  
  
  
  //overlay
  fill(0,0,0,150);
  rect(-1,-1,screenX*1.0078125,screenY*1.00892857143);

rect(screenX*0.0625,screenY*0.107142857143,screenX*0.8828125,screenY*0.785714285714);
  
}
