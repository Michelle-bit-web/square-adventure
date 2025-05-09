let player;
let platform;
let platform2;
let platform3;
let platform4;
let platform5;
let jumpForce = 0;
let movement = 0;
let ground;
let rightBorder = 720;
let leftBorder = 0;

function setup(){
createCanvas(720, 480);
player = createVector(width / 2, height - 50); //x-pos, y-pos
platform = createVector(560, 400);
platform2 = createVector(300, 320);
platform3 = createVector(520, 200);
platform4 = createVector(100, 240);
platform5 = createVector(280, 100);
ground = height - 50; 
}

function draw(){
    background('#8FBC8F');
    rectMode(CENTER);
    fill('#FF1493');
    rect(player.x, player.y, 50, 50); //player position and size
    fill('#FFD700');
    rect(platform.x, platform.y, 150, 20);
    rect(platform2.x, platform2.y, 150, 20);
    rect(platform3.x, platform3.y, 50, 20);
    rect(platform4.x, platform4.y, 50, 20);
    rect(platform5.x, platform5.y, 250, 20);

    player.y += jumpForce; //apply jump force to player
    player.x += movement; //apply movement to player

    if (player.y >= ground) {
        stopFalling();
    } else {
        const collisionResult = collision();
        if (collisionResult === "platform") {
            stopFalling();
            player.y = platform.y - 35;
        } else if (collisionResult === "platform2") {
            stopFalling();
            player.y = platform2.y - 35;
        } else if (collisionResult === "platform3") {
            stopFalling();
            player.y = platform3.y - 35;
        } else if (collisionResult === "platform4") {
            stopFalling();
            player.y = platform4.y - 35;
        }else if (collisionResult === "platform5") {
            stopFalling();
            player.y = platform5.y - 35;
        }else {
            jumpForce += 0.5; //gravity effect
        }
    }
     if(keyIsDown(32) && (
        player.y >= ground || 
        player.y == platform.y - 35 || 
        player.y == platform2.y - 35 || 
        player.y == platform3.y - 35 || 
        player.y == platform4.y - 35 || 
        player.y == platform5.y - 35)){ //space key
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

function stopFalling(){
    return jumpForce = 0;
}

function collision(){
    if(//all obj are centered; we need x + half width / x - half width
        player.x + 25 >= platform.x - 75 &&
        player.x - 25 <= platform.x + 75 &&
        player.y + 25 >= platform.y - 10 &&
        player.y + 25 <= platform.y + 10
    ){
        return "platform";
    } else if(
        player.x + 25 >= platform2.x - 75 &&
        player.x - 25 <= platform2.x + 75 &&
        player.y + 25 >= platform2.y - 10 &&
        player.y + 25 <= platform2.y + 10
    ){
        return "platform2";
    }else if(
        player.x + 25 >= platform3.x - 25 &&
        player.x - 25 <= platform3.x + 25 &&
        player.y + 25 >= platform3.y - 10 &&
        player.y + 25 <= platform3.y + 10
    ){
        return "platform3";
    }else if(
        player.x + 25 >= platform4.x - 25 &&
        player.x - 25 <= platform4.x + 25 &&
        player.y + 25 >= platform4.y - 10 &&
        player.y + 25 <= platform4.y + 10
    ){
        return "platform4";
    }else if(
        player.x + 25 >= platform5.x - 125 &&
        player.x - 25 <= platform5.x + 125 &&
        player.y + 25 >= platform5.y - 10 &&
        player.y + 25 <= platform5.y + 10
    ){
        return "platform5";
    }
}
