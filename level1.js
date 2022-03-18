var level1_1 = function(){
  
  titleMusic.stop();
  
  levelSwitch = false;
  checkLevel1_1 = true;
  /*
  character.x=getItem('characterX');
  character.y=getItem('characterY');
  */
  //character.batteries=getItem('characterBatteries');
  //character.health=getItem('characterHealth');
  
  
  if(character.x ===null){character.x=1;}
  if(character.y ===null){character.y=192;}
  if(character.batteries ===null){character.batteries=0;}
  if(character.health ===null){character.health=100;}
  
  //character.x=0+(character.width/2);
  //character.y=208+(character.height/2);
  
  for(let j=0; j<screenTotal; j++){
    
    platform[j].width=screenX*0.0625;
    platform[j].height=screenY*0.0714285714286;
    platform[j].x=screenX*2;
    platform[j].y=screenY*2;
    platform[j].look=tinBrick;
    
    faller[j].x=screenX*2;
    faller[j].y=screenY*2;
    faller[j].look=fallerSleep;
    faller[j].playerDetect=false;
    dumbDumb[j].x=screenX*2;
    dumbDumb[j].y=screenY*2;
    dumbDumb[j].maxX=48;
    
    
    battery[j].x=screenX*2;
    battery[j].y=screenY*2;
    battery[j].batteryValue=1;
    //battery[j].collected=false;
    
    ufo1.x=screenX*2;
    ufo1.y=screenY*2;
  }
  
  
  platform[249].x=-16;
  platform[249].y=0;
  platform[249].height=screenY;
  
    platform[0].x =screenX*-0.00390625;
    platform[0].y =screenY*0.928571428571;
    platform[0].width = screenX * 1.5;

  platform[1].x=48;
  platform[1].y=160;
  platform[1].look=tinPlatformL;
  platform[2].x=64;
  platform[2].y=160;
  platform[2].look=tinPlatformM;
  platform[3].x=80;
  platform[3].y=160;
  platform[3].look=tinPlatformM;
  platform[4].x=96;
  platform[4].y=160;
  platform[4].look=tinPlatformR;
  
  platform[5].x=176;
  platform[5].y=96;
  platform[5].height=32;
  platform[5].width=64;
  platform[5].look=tinPlatformL;
  platform[6].x=192;
  platform[6].y=96;
  platform[6].look=tinPlatformM;
  platform[7].x=208;
  platform[7].y=96;
  platform[7].look=tinPlatformM;
  platform[8].x=224;
  platform[8].y=96;
  platform[8].height=32;
  platform[8].look=tinPlatformR;
  platform[9].x=176;
  platform[9].y=112;
  platform[9].look=tinPlatformL;
  platform[10].x=192;
  platform[10].y=112;
  platform[10].look=tinPlatformM;
  platform[11].x=208;
  platform[11].y=112;
  platform[11].look=tinPlatformM;
  platform[12].x=224;
  platform[12].y=112;
  platform[12].look=tinPlatformR;
  
  platform[13].x=144;
  platform[13].y=176;
  platform[13].width=32;
  platform[13].height=32;
  
  platform[14].x=0;
  platform[14].y=80;
  platform[14].height=64;
  platform[15].x=0;
  platform[15].y=80;
  platform[15].width=128;
  platform[15].height=32;
  platform[16].x=0;
  platform[16].y=0;
  platform[16].width=96;
  platform[16].height=32;
  platform[17].x=96;
  platform[17].y=0;
  platform[17].width=160;
  platform[17].height=48;
  
  platform[18].x=240;
  platform[18].y=192;
  
  
  
  
  
  dumbDumb[1].startX=48
  dumbDumb[1].x=48
  dumbDumb[1].y=144
  
  faller[1].x=192;
  faller[1].startY=128;
  faller[1].y=128;
  
  battery[1].x=48;
  battery[1].y=192;
  battery[2].x=64;
  battery[2].y=192;
  battery[3].x=80;
  battery[3].y=192;
  battery[4].x=96;
  battery[4].y=192;
  
  battery[5].x=176;
  battery[5].y=80;
  battery[6].x=192;
  battery[6].y=80;
  battery[7].x=208;
  battery[7].y=80;
  battery[8].x=224;
  battery[8].y=80;
  
};

//end of level 1

var level1_2 = function(){
  
  for(let j=0; j<screenTotal; j++){
    
    platform[j].width=screenX*0.0625;
    platform[j].height=screenY*0.0714285714286;
    platform[j].x=screenX*2;
    platform[j].y=screenY*2;
    platform[j].look=tinBrick;
    
    faller[j].x=screenX*2;
    faller[j].y=screenY*2;
    faller[j].look=fallerSleep;
    faller[j].playerDetect=false;
    dumbDumb[j].x=screenX*2;
    dumbDumb[j].y=screenY*2;
    dumbDumb[j].maxX=48;
    
    
    battery[j].x=screenX*2;
    battery[j].y=screenY*2;
    battery[j].batteryValue=1;
    //battery[j].collected=false;
    
    ufo1.x=screenX*2;
    ufo1.y=screenY*2;
  }
  
  levelSwitch=false;
  checkLevel1_2=true;
  
    character.x=0+character.size/2;

  
  
  
    platform[0].x = -1;
    platform[0].y = screenY*0.928571428571;
    platform[0].width = screenX * 1.5;
  
  platform[1].x=0;
  platform[1].y=192;
  platform[1].width=64;
  
  platform[2].x=48;
  platform[2].y=96;
  platform[2].width=64;
  platform[2].height=32;
  platform[2].look=tinPlatformL;
  
  platform[3].x=144;
  platform[3].y=96;
  platform[3].width=112;
  platform[3].height=48;
  platform[4].x=144;
  platform[4].y=80;
  platform[4].width=32;
  
  platform[5].x=0;
  platform[5].y=32;
  platform[5].width=48;
  platform[5].height=16;
  platform[6].x=0;
  platform[6].y=0;
  platform[6].height=32;
  platform[6].width=screenX;
  platform[7].x=144;
  platform[7].y=32;
  platform[7].width=112;
  
  platform[8].x=224;
  platform[8].y=144;
  platform[8].width=32;
  platform[8].height=64;
  
  faller[1].x=192;
  faller[1].y=144;
  
  
  dumbDumb[1].startX=48
  dumbDumb[1].x=48
  dumbDumb[1].y=80
  
  
  battery[9].x=48;
  battery[9].y=80;
  battery[10].x=64;
  battery[10].y=80;
  battery[11].x=80;
  battery[11].y=80;
  battery[12].x=96;
  battery[12].y=80;
  
};

//end of level 2

var level1_3 = function(){
  
  levelSwitch=false;
  checkLevel1_3=true;
  
  for(let j=0; j<screenTotal; j++){
    
    platform[j].width=screenX*0.0625;
    platform[j].height=screenY*0.0714285714286;
    platform[j].x=screenX*2;
    platform[j].y=screenY*2;
    platform[j].look=tinBrick;
    
    faller[j].x=screenX*2;
    faller[j].y=screenY*2;
    faller[j].look=fallerSleep;
    faller[j].playerDetect=false;
    dumbDumb[j].x=screenX*2;
    dumbDumb[j].y=screenY*2;
    dumbDumb[j].maxX=48;
    
    
    battery[j].x=screenX*2;
    battery[j].y=screenY*2;
    battery[j].batteryValue=1;
    //battery[j].collected=false;
    
    ufo1.x=screenX*2;
    ufo1.y=screenY*2;
  }
  
    character.x=0+character.size/2;
  
    platform[0].x = 0;
    platform[0].y = 192;
    platform[0].width = 48;
    platform[0].height=32;
  
  platform[249].x=screenX*2;
  platform[249].y=screenY*2;
  platform[249].height=224;
  
  platform[1].x=0;
  platform[1].y=96;
  platform[1].width=48;
  platform[1].height=32;
  
  platform[2].x=112;
  platform[2].y=80;
  platform[2].width=64;
  platform[2].height=32;
  platform[2].look=tinPlatformL;
  
  platform[3].x=96;
  platform[3].y=160;
  platform[3].width=64;
  platform[3].height=16;
  platform[3].look=tinPlatformL;
  
  platform[4].x=224;
  platform[4].y=64;
  platform[4].width=32;
  platform[4].height=screenY;
  
  platform[5].x=0;
  platform[5].y=0;
  platform[5].width=screenX;
  platform[5].height=32;
  platform[6].x=0;
  platform[6].y=0;
  platform[6].width=64;
  platform[6].height=48;
  
  platform[7].x=-16;
  platform[7].y=96;
  platform[7].width=16;
  platform[7].height=96;
  
  faller[1].x=64;
  faller[1].y=32;
  
  dumbDumb[1].startX=112;
  dumbDumb[1].x=112;
  dumbDumb[1].y=64;
  dumbDumb[2].startX=96;
  dumbDumb[2].x=144;
  dumbDumb[2].y=144;
  
  battery[13].x=0;
  battery[13].y=176;
  battery[14].x=16;
  battery[14].y=176;
  battery[14].batteryValue=10;
  battery[15].x=32;
  battery[15].y=176;
  
}

//end of level 3

var level1_4 = function(){
  
  levelSwitch=false;
  checkLevel1_4=true;

  for(let j=0; j<screenTotal; j++){
    
    platform[j].width=screenX*0.0625;
    platform[j].height=screenY*0.0714285714286;
    platform[j].x=screenX*2;
    platform[j].y=screenY*2;
    platform[j].look=tinBrick;
    
    faller[j].x=screenX*2;
    faller[j].y=screenY*2;
    faller[j].look=fallerSleep;
    faller[j].playerDetect=false;
    dumbDumb[j].x=screenX*2;
    dumbDumb[j].y=screenY*2;
    dumbDumb[j].maxX=48;
    
    
    battery[j].x=screenX*2;
    battery[j].y=screenY*2;
    battery[j].batteryValue=1;
    //battery[j].collected=false;
    
    ufo1.x=screenX*2;
    ufo1.y=screenY*2;
  }
  
    character.x=0+character.size/2;
  
    platform[0].x = -1;
    platform[0].y = 208;
    platform[0].width = screenX * 1.5;
  
  platform[249].x=screenX*2;
  platform[249].y=screenY*2;
  platform[249].height=224;
  
  platform[1].x=0;
  platform[1].y=64;
  platform[1].width=32;
  platform[1].height=172;
  
  platform[2].x=0;
  platform[2].y=0;
  platform[2].width=128;
  platform[2].height=32;
  platform[3].x=80;
  platform[3].y=0;
  platform[3].width=48;
  platform[3].height=48;
  
  platform[4].x=240;
  platform[4].y=0;
  platform[4].height=screenY;
  
  ufo1.x=128;
  ufo1.y=160;
  
}