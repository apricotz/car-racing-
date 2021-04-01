var canvas, db, playerCount, gameState=0;
var allPlayers;
var playerRank;

//variables to make objects of the 3 classes
var form, player, game;
var car1,car2,car3,car4,cars;
var Car1,Car2,Car3,Car4, track;

function preload(){
    track = loadImage("images/track.jpg")
    Car1 = loadImage("images/car1.png");
    Car2 = loadImage("images/car2.png");
    Car3 = loadImage("images/car3.png");
    Car4 = loadImage("images/car4.png");
}

function setup(){
    canvas = createCanvas(displayWidth-50, displayHeight-80);
    db = firebase.database();
    
    game = new Game();
    game.getState();
    game.Waiting();

}
function draw(){
if (playerCount === 4){
    game.update(1);
}

if (gameState === 1){
    clear();
    game.play();

}
if (gameState===2){
    game.end();
}

if (playerRank===4){
    game.showRank();
   /* var x,y;
    var ind = 0;
    for (var Prank in allPlayers) {
a=200;y=0;
ind=ind+1;
if (ind===player.ind){
    text(Prank +"  " + allPlayers[Prank].pName + " : " + allPlayers[Prank].rank, 150, y+20);
}*/
}
}








































/*var ball, database, position;

function setup(){
    createCanvas(500,500);
     database = firebase.database();

    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";

    var ballRef  = database.ref('ball/position');
    ballRef.on("value",  readPosition)

    // 2 main operations
    // 1st read values from database
    // 2nd  write values in database
    // database.ref()
    //.on("value", data) = read values
    // .set({x : _____ }) = write values
}

function readPosition(data){
    position = data.val();
    ball.x = position.w;
    ball.y = position.y;

}



function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
    database.ref('ball/position').set({
        'w' : position.w + x,
        'y' : position.y + y

    })
    }
*/