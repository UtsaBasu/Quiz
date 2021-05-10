class Game{
    constructor(){

    }
 getState(){
     var gameStateref = database.ref('gameState');
     gameStateref.on("value",function(data){
         gameState=data.val();
     })
    }

    update(state){
        database.ref('/').update({
            gameState:state
        })
    }

    async start(){
        if(gameState===0){
            player= new Player();
            var playerCountref = await database.ref('playerCount').once("value");
            if(playerCountref.exists()){
                playerCount=playerCountref.val();
                player.getCount();
            }
            
            
            form=new Form();
            form.display();
        }
    }
    play(){
        form.hide();
        background("orange");
        textSize(25);
        fill("blue");
        text("RESULTS!",200,300);
        Player.getPlayerInfo();
        if(allPlayers!== undefined ){
            var displayPosition = 400;
            text("Contestants who answeres correctly will be highlighted in green",50,350)
            for(var plr in allPlayers){
                debugger
                var ans = "c";
                if(ans===allPlayers[plr].answer){
                console.log("hey");
                fill("green");
                }
                else{
                fill("red");
                console.log("bye");
                }
             displayPosition=displayPosition+20;
             textSize(24);
             text(allPlayers[plr].name+":"+allPlayers[plr].answer,200,displayPosition);
            }
        }
        
        
    }
}