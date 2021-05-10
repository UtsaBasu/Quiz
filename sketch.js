var game;
var gameState=0;
var playerCount;
var player , form;
var allPlayers;



function setup(){
  createCanvas(850,600);
  database = firebase.database();
  console.log(database);
 

  game = new Game();
  game.getState();
  game.start();
  
  
  }
  function draw(){
  background("orange");
  
    if(playerCount===2){
   game.update(1);
 }
 if(gameState===1){
   game.play();
//text("Choose correct answer",300,230);
//text("Enter your name",50,230);

  }
}
  /*function playing(){
 

  Hello=createElement("h1")
  Hello.html("Hey! "+input.value() )
  Hello.position(425,10)

  head=createElement("h1")
  head.html("Let`s see if you can answer these ")
  head.position(300,50)

  
  

 
  
  
  

  
  
  
  bp=createButton("SUBMIT")
  bp.position(100,550)
  bp.mousePressed(play2)

  output=createInput().attribute("placeholder", "Enter the correct option")
  output.position(400,550)

  if(allContestants!== undefined){
    fill("yellow");
    textSize(24);
    text("NOTE: ALL THE RIGHT ANSWERS WILL BE IN GREEN AND WRONG IN RED",130,200);
  }
  }
  
  function play2(){
    for(var plr in allContestants ){
      var correctAnswer ="c";
      if(correctAnswer===allContestants[plr].answer)
      fill("green");
      else
      fill("red");
    
    }

  
  th=createElement("h1")
  th.html("THANK YOU FOR ATTENDING OUR QUIZ")
  th.position(50,500)
  }
  
  
}*/
  
