class Game {
    constructor(){}

    getState(){
        var GSref = db.ref('gameState');
        GSref.on("value", function(data){ 
        gameState = data.val();
        })
    }

    update(state){
        db.ref('/').update({gameState : state})
    }


    async Waiting(){
        if(gameState === 0){
            player = new Player();
            var PCRef = await db.ref(playerCount).once("value");
            if (PCRef.exists()){
                playerCount = PCRef.val();
                player.getCount();
            }
            form = new Form();
            form.display();

        }

        car1 = createSprite(100, 200);
        car2= createSprite(300,200);
        car3=createSprite(500,200);
        car4= createSprite(700,200);

        car1.addImage("car1", Car1);
        car2.addImage("car2", Car2);
        car3.addImage("car3", Car3);
        car4.addImage("car4", Car4);

        cars=[car1, car2, car3, car4];
       
    }

    play(){

        form.hide();

         Player.getPlayerDetails();  
         player.GetRank();  
               
         
        
         if (allPlayers !== undefined){

            background(198,135,103);
            image(track, 0, -displayHeight*4, displayWidth, displayHeight*5)
            var y_position = 100;

            var y;
            var x = 150;
            var index=0;

            for (var plr in allPlayers){
                index = index +1;
                x = x+200;
                y = displayHeight - allPlayers[plr].distance;
                cars[index-1].x = x;
                cars[index -1].y = y;
                if (index===player.index){
                    camera.position.x=displayWidth/2;
                    camera.position.y=cars[index -1].y;
                }


                if (plr === "player" + player.index)
                    fill("blue")
            
                else
                    fill("black");


                y_position+=40;
                textSize(20);
                text(plr +"  " + allPlayers[plr].pName + " : " + allPlayers[plr].distance, 150, y_position);
            }
            
         }

         if(keyDown(UP_ARROW) && player.index !=null){
             player.distance +=10;
                player.update();
         }
if (player.distance>4150){
    gameState=2;
    player.rank=player.rank +1;
    player.UpdateRank(player.rank);
    player.update();
}
         drawSprites();

    }
    
end(){
 //console.log("GAME HAS ENDED...PLS FIND ANOTHER GAME")   
}
    
showRank(){
    
    var y_position = 10;
    Player.getPlayerDetails();
    var ranks = [];

    for (var plr in allPlayers){ 
        ranks.push({name : allPlayers[plr].pName, rank:allPlayers[plr].rank});
    }

    for (var r in ranks){
        var plRank = createElement("h2");
        plRank.position(displayWidth/2, y_position);
        plRank.style("color", "black"); 
        y_position=y_position + 100;

        ranks.sort(function (a,b){
            return a.rank - b.rank;
        })

        plRank.html(ranks[r].name + " : " + ranks[r].rank);
        //console.log("player ranks")
       /* if (plr === "player" + player.index)
            fill("blue")
    
        else
            fill("black");

        */
       
       /* textSize(20);
        text(plr +"  " + allPlayers[plr].pName + " : " + allPlayers[plr].rank, 150, y_position);
        */

    }
    }     
}

