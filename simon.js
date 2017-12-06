// global variables
var power=0, strict=0, count, choice=0;
var winTurns = 10;
var arrSimon = [];
var arrUser = [];
var i,j; // initialized in reset() function
var ran = 0;
var choice = 0;


$(document).ready(function(){
    reset();
   dim();
   initText();
  });

function winner(){
  document.getElementById("countText").textContent = ": )"; // displays the count
    bright(1);
    bright(2);
    bright(3);
    bright(4);
}

function simonSays(){
  arrUser = [];
  count++; // increments the count
  document.getElementById("countText").textContent = count; // displays the count
  if (count>winTurns) 
    winner();
  else {
      ran = Math.floor(Math.random() * 4) + 1; // get a random number, 1-4
      arrSimon.push(ran); // push # to the array
      j=0;
      cycleSim(); // play Simons array
  }
}

// recursive function that goes thorugh the Simon array, activating light and sound
function cycleSim() {
    j++;
    bright(arrSimon[j-1]); // turn on a light in the array
    if ( j < arrSimon.length) {
        setTimeout(cycleSim, 1050-(count*50)); // call self  again after a second
     }
}

function getChoice() {
  choice = 0;
  if($(event.target).is('#red'))
        choice = 1;
 if($(event.target).is('#blue'))
        choice = 2;  
  if($(event.target).is('#yellow'))
        choice = 3;  
  if($(event.target).is('#green'))
        choice = 4;
  arrUser.push(choice); //  add choice to end of user's array
  bright(choice); // play the light and sound for that choice
  checkIfCorrect();
}

function checkIfCorrect(){
  if (arrUser[i]!=arrSimon[i] && strict == 1) { // if choice is NOT the element under consideration and strict mode IS on
      reset();
      status();
      setTimeout(startGame,1000);
    }
  else if (arrUser[i]!=arrSimon[i] && strict == 0) { // same, but strict mode NOT on
      i = 0;
      arrUser = []; // reset the user's array
      j = 0;
      setTimeout(cycleSim,1000); // go through simon's Array again
  }
   else if (arrUser[i] == arrSimon[i]) {   // if choice == the element under consideration
          i++;
          if (i>=arrSimon.length) {
              i = 0;
              setTimeout(simonSays,1000);
          }
     }
}                                         

function stricToggle(){
  if (strict==0 && power==1) {
      document.getElementById("strict").className = "strictOn";
      strict = 1;
  }
  else {
      document.getElementById("strict").className = "strictOff";
      strict = 0;
  }
}

function toggle(){
  $(".powerOff").toggleClass("powerOn");
  if (power==0) {
    power = 1;
    document.getElementById("countText").className = "countTextOn";
    reset();
    document.getElementById("countText").textContent = "--";
  }
  else if (power==1) {
      power = 0;
      initText();
  }
}

function startGame(){ // resets to a new game
  if (power==1) {
    count = 0;    
    document.getElementById("countText").textContent = count;
    setTimeout(function() {simonSays()}, 750);
  }
}

function reset(){
    count = 0;
    arrSimon = [];
    arrUser = [];
    i=0; j=0;
}

function bright(choice){
 switch (choice) {
      case 1: document.getElementById('red').className="on"; play1();
     break;
      case 2: document.getElementById('blue').className="on"; play2();
     break;
      case 3: document.getElementById('yellow').className="on"; play3();
     break;
      case 4: document.getElementById('green').className="on"; play4();
     break;
             }                   
  setTimeout(function() {dim()},500); // turn off after a half second
}

// turn off the color
function dim(){
  document.getElementById("green").className = "off";
   document.getElementById("red").className = "off";
   document.getElementById("blue").className = "off";
   document.getElementById("yellow").className = "off";
}

function initText(){
      document.getElementById("countText").className = "countTextOff";
      document.getElementById("strict").className = "strictOff";
      document.getElementById("countText").textContent = "--";
}

// play the sounds
function play1(){ document.getElementById("play1").play(); }
function play2(){ document.getElementById("play2").play(); }
function play3(){ document.getElementById("play3").play(); } 
function play4(){ document.getElementById("play4").play(); }