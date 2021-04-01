class Form{
    constructor(){
        this.title = createElement('h2');
        this.welcome = createElement('h3');
        this.button = createButton("Join Game");
        this.button2  = createButton("reset");       
        this.input = createInput("Name");
    }

    hide(){
        this.title.hide()
        this.welcome.hide();
        this.button.hide();
        this.input.hide();
        this.welcome.hide();
    }

display(){    
    this.title.html("Car Race");
    this.title.position(400, 20);    
    this.input.position(350, 200);   
    this.button.position(400, 250);
    this.button2.position(100,250);

    this.button.mousePressed(()=>{

        this.input.hide();
        this.button.hide();
    
        player.name = this.input.value();
        playerCount += 1;
        player.index = playerCount;

        player.update();
        player.updateCount(playerCount);
        
        this.welcome.html("Welcome " + player.name + "  please wait for other players to join");
        this.welcome.position(20, 250);
        })
        this.button2.mousePressed(()=>{
        game.update(0);
        player.updateCount(0);
        
        })

}

}