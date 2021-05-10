class Player{
    constructor(){
     this.answer=0;
     this.index=null;
     this.name=null;
    }
    getCount(){
        var get = database.ref('playerCount');
        get.on("value",function(dat){
            playerCount=dat.val();
        })
    }
    updateCount(count){
        database.ref('/').update({
            playerCount:count
        })
    }
    update(){
        var playerIndex = "players/player"+this.index;
        database.ref(playerIndex).set({
            name:this.name,
            answer:this.answer
        })
    }
    static getPlayerInfo(){
        var playerInforef=database.ref('players');
        playerInforef.on("value",(data)=>{
            allPlayers = data.val();
        })
    }
}
