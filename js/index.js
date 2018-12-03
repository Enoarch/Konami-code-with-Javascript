// Code by Thomas RENAUD - 2018
// To understand the Konami code : https://en.wikipedia.org/wiki/Konami_Code

var konami_code=new Array(38,38,40,40,37,39,37,39,98,97); //definition on the kinami code in event.keycode

var action_code=new Array(0,0,0,0,0,0,0,0,0,0); // array which will be changed when a key will be pressed

document.onkeypress = function(event){ //when à key is pressed
  var key_pressed_code = event.which || event.keyCode;
  // slip on the left of the action_code tab
  action_code.splice(0, 1);
  action_code.push(key_pressed_code);
  
  // comparaison between action_code and action_code
  if(compare_Tab(action_code, konami_code)==true){
    // put here the action which be launched with the konami code
    
    var konami_msg =  "oooooo   oooo\n `888.   .8'   \n  `888. .8'    .ooooo.     .oooo.o\n   `888.8'    d88' `88b d88(  \"8\n     `888'    888ooo888 `\"Y88b.\n     888      888           )       88b\n   o888o     `Y8bod8P'  8\"\"888P'\n\n\n\n Dev by Thomas RENAUD - 2018";
    alert(konami_msg);   
  }
}

function compare_Tab(tab1,tab2){
  /*  Function to compare if two arrays with same size are equals
        param1: Tab to compare n°1
        param2: Tab to compare n°2
        return: boolean
  */
  var ok_egal = true;  
  for(var i=0;i<tab1.length;i++){
      if(action_code[i]!=konami_code[i]){
        ok_egal = false;
      }
   }
   return ok_egal;
}