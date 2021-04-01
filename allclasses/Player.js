class Player {
    constructor(){
        this.name = null;
        this.index = null;
        this.distance = 0;
        this.rank=null;
        }

    getCount(){
        var PCRef = db.ref('playerCount');
        PCRef.on("value", (data)=>{ playerCount = data.val()  })
       
    }


    updateCount(count){
        db.ref('/').update({playerCount : count})
    }

        

    update(){
        var playerIndex = "players/player" + this.index;
        db.ref(playerIndex).set({ pName : this.name, distance : this.distance , rank : this.rank })
    }

    static getPlayerDetails(){
        var playerRef = db.ref('players');
        playerRef.on("value", (data)=>{ allPlayers = data.val()  })
    }
    GetRank(){
        var PCRef = db.ref('playerRank');
        PCRef.on("value", (data)=>{ playerRank = data.val(); this.rank = data.val(); })
    }
    UpdateRank(rank){
        db.ref('/').update({playerRank : rank})
    }


}