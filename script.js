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
}
