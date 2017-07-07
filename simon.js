   var power=0, strict=0, count=0;
   var arrSayses = [];

  $(document).ready(function(){
      
   initColors();
   initText();
  });

function initColors(){
  document.getElementById("green").className = "greenOff";
   document.getElementById("red").className = "redOff";
   document.getElementById("blue").className = "blueOff";
   document.getElementById("yellow").className = "yellowOff";
}

function initText(){
     document.getElementById("countText").className = "countTextOff";
   document.getElementById("strict").className = "strictOff";
}

function quack(){ document.getElementById("quack").play(); }
function meow(){ document.getElementById("meow").play(); }
function whinny(){ document.getElementById("whinny").play(); } 
function baah(){ document.getElementById("baah").play(); }

function startGame(){
  if (power===1)
  {
        document.getElementById("countText").textContent = count;
       compMove();
  }
  else
    ;
}

function compMove(){
  var choice = Math.floor(Math.random() * 4) + 1; // random # 1-4
  arrSayses.push(choice); // add that # to the array
  count++;
  document.getElementById("countText").textContent = count;
  document.getElementById("feedback").textContent = arrSayses;
  cycleSayses();
  human();
}

function cycleSayses(){
  for (var i=0; i<arrSayses.length; i++ ){
    var says = arrSayses[i];
    switch(says){
    case 1: lightnSound("green");

                break;
    case 2: lightnSound("red");

                break;
    case 3: lightnSound("blue");

                break;
    case 4: lightnSound("yellow");
        
                break; 
                       }
    setTimeout(function() {initColors();},1000);
    }
}

function lightnSound(color){
  switch (color) {
    case "red": document.getElementById("red").className = "redOn";
                      meow();
  setTimeout(function() {initColors();},1000); // color "off" after 1 second
                      break;
    case "blue":  document.getElementById("blue").className = "blueOn";
                        whinny();
  setTimeout(function() {initColors();},1000); // color "off" after 1 second
                        break;
    case "yellow":  document.getElementById("yellow").className = "yellowOn";
                            quack();
        setTimeout(function() {initColors();},1000); // color "off" after 1 second
                            break;
    case "green":   document.getElementById("green").className = "greenOn";
                            baah();
        setTimeout(function() {initColors();},1000); // color "off" after 1 second
                            break;
               }

}


function human(){
  var follow = 0;
  if($(event.target).is('#red')){
    document.getElementById("feedback").textContent = "red";
    lightnSound("red");
    follow=2;
  }
    if($(event.target).is('#blue')){
    lightnSound("blue");
      follow=3;
  }
    if($(event.target).is('#yellow')){
    lightnSound("yellow");
      follow=4;
  }
    if($(event.target).is('#green')){
    lightnSound("green");
      follow=1;
  }
  for (i=0; i<count; i++)
      if (follow===arrSayses[i]) // if the correct guess
        compMove();
  else
  {
    cycleSayses();
    i=0;
  }
  
}

function stricToggle(){
  if (strict===0 && power===1)
  {
      document.getElementById("strict").className = "strictOn";
      strict = 1;
  }
  else
  {
      document.getElementById("strict").className = "strictOff";
      strict = 0;
  }
}

function toggle(){
  $(".off").toggleClass("on");
  if (power===0)
  {
    power = 1;
    document.getElementById("countText").className = "countTextOn";
    count = 0;
    arrSayses = [];
  }
  else if (power===1)
  {
      power = 0;
      initText();
  }
}