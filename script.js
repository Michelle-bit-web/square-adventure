let player;
let platforms = [];
let jumpForce = 0;
let movement = 0;
let ground;
const rightBorder = 720;
const leftBorder = 0;

const playerWidth = 50;
const playerHeight = 50;

function setup() {
    createCanvas(720, 480);
    player = createVector(width / 2, height - 50); // x-pos, y-pos

    // Dynamically generate platforms
    platforms.push(new Platform(560, 400, 150, 20));
    platforms.push(new Platform(300, 320, 150, 20));
    platforms.push(new Platform(520, 200, 50, 20));
    platforms.push(new Platform(100, 240, 50, 20));
    platforms.push(new Platform(280, 100, 250, 20));

    ground = height - 50;
}

function draw() {
    background('#8FBC8F');
    rectMode(CENTER);

    // Draw player
    fill('#FF1493');
    rect(player.x, player.y, playerWidth, playerHeight);

    // Draw all platforms
    for (const platform of platforms) {
        platform.draw();
    }

    player.y += jumpForce; // apply jump force to player
    player.x += movement; // apply movement to player

    if (player.y >= ground) {
        stopFalling();
    } else {
        let collisionDetected = false;
        for (const platform of platforms) {
            if (platform.checkCollision({ x: player.x, y: player.y, width: playerWidth, height: playerHeight })) {
                stopFalling();
                player.y = platform.y - playerHeight / 2; // Adjust player position
                collisionDetected = true;
                break;
            }
        }

        if (!collisionDetected) {
            jumpForce += 0.5; // gravity effect
        }
    }

    if (keyIsDown(32) && (playerOnGround() || playerOnPlatform())) { // Space key
        jumpForce = -12;
    }

    if (keyIsDown(RIGHT_ARROW)) { // right key
        movement = +3;
    } else if (keyIsDown(LEFT_ARROW)) { // left key
        movement = -3;
    } else {
        movement = 0;
    }
}

function stopFalling() {
    jumpForce = 0;
}

function playerOnGround() {
    return player.y >= ground;
}

function playerOnPlatform() {
    for (const platform of platforms) {
        if (player.y === platform.y - playerHeight / 2) {
            return true;
        }
    }
    return false;
}