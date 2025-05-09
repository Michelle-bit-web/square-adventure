let player;
let platform;
let platform2;
let jumpForce = 0;
let movement = 0;
let ground;
let rightBorder = 720;
let leftBorder = 0;

function setup(){
createCanvas(720, 480);
player = createVector(width / 2, height - 50); //x-pos, y-pos
platform = createVector(560, 370);
platform2 = createVector(300, 300);
ground = height - 50; 
}

function draw(){
    background('#8FBC8F');
    rectMode(CENTER);
    fill('#FF1493');
    rect(player.x, player.y, 50, 50); //player position and size
    fill('#FFD700');
    rect(platform.x, platform.y, 150, 20)
    fill('#FFD700');
    rect(platform2.x, platform2.y, 150, 20)

    player.y += jumpForce; //apply jump force to player
    player.x += movement; //apply movement to player

    if(player.y >= ground){
        jumpForce = 0;

    }else if(//all obj are centered; we need x + half width / x - half width
        player.x + 25 >= platform.x - 75 &&
        player.x - 25 <= platform.x + 75 &&
        player.y + 25 >= platform.y - 10 &&
        player.y + 25 <= platform.y + 10
    ){
        jumpForce = 0;
        player.y = platform.y - 35;
    }else{
         jumpForce += 0.5; //gravity effect
    }
     if(keyIsDown(32) && (player.y >= ground || player.y == platform.y - 35)){ //space key
        jumpForce = -12;
     }
      if(keyIsDown(RIGHT_ARROW)){ //right key
        movement = +3;
     } else if(keyIsDown(LEFT_ARROW)){ //left key
        movement = -3;
     } else{
        movement = 0;
     }
}
