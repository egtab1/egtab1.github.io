var saveGame=function(){
  /*
  storeItem('characterX',character.x);
  storeItem('characterY',character.y);
  */
  storeItem('characterHealth',character.health);
  storeItem('characterBatteries',character.batteries);
  storeItem('level',level);
  
  
};

var saveSettings=function(){
  
  storeItem('up',character.up);
  storeItem('down',character.down);
  storeItem('left',character.left);
  storeItem('right',character.right);
  storeItem('esc',character.esc);
  storeItem('enter',character.enter);
  storeItem('inventory',character.inventory);
  storeItem('frameRate',fr);
  storeItem("showFr",showFr);
  storeItem("showFc",showFc);
  storeItem("showFr1",showFr1);
  storeItem("showFc1",showFc1);
  
};

var defaultSettings = function(){
  
  character.up=87;
  character.down=83;
  character.left=65;
  character.right=68;
  character.esc=16;
  character.enter=13;
  character.inventory=69;
  
  fr=60;
  showFr=false;
  showFc=false;
  showFr1=0;
  showFc1=0;
  
};


var deleteData=function(){
  
  removeItem('characterX');
  removeItem('characterY');
  removeItem('characterHealth');
  removeItem('characterBatteries');
  level=1;
  
};